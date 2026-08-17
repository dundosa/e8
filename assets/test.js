/* Karta diagnostyczna E8, silnik pojedynczego testu.
   Wymaga wcześniej wczytanego pliku z danymi, który ustawia window.TEST. */

(function () {
  "use strict";

  var T = window.TEST;
  var KEY = "e8diag.v2";

  var store = {};
  try { store = JSON.parse(localStorage.getItem(KEY) || "{}") || {}; } catch (e) { store = {}; }
  function save() { try { localStorage.setItem(KEY, JSON.stringify(store)); } catch (e) {} }

  var S = { view: "intro", i: 0, ans: {}, crit: {} };

  var app = document.getElementById("app");
  var topbar = document.getElementById("topbar");
  var foot = document.getElementById("foot");

  /* ---------- pomocnicze ---------- */

  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function nl(s) { return esc(s).replace(/\n/g, "<br>"); }
  function norm(s) {
    return String(s).toLowerCase()
      .replace(/[‘’ʼ]/g, "'")
      .replace(/[.,!?;:]/g, "")
      .replace(/\s+/g, " ")
      .trim();
  }
  function plural(n, a, b, c) {
    var m10 = n % 10, m100 = n % 100;
    if (n === 1) return a;
    if (m10 >= 2 && m10 <= 4 && (m100 < 10 || m100 >= 20)) return b;
    return c;
  }
  function answered(v) { return v !== undefined && v !== null && v !== ""; }
  function each(list, fn) { Array.prototype.forEach.call(list, fn); }

  /* ---------- stan ---------- */

  function load() {
    var prev = store[T.key];
    S.ans = (prev && prev.ans) ? prev.ans : {};
    S.crit = (prev && prev.crit) ? prev.crit : {};
  }
  function persist() {
    store[T.key] = { ans: S.ans, crit: S.crit };
    save();
  }
  function countDone() {
    var n = 0;
    for (var j = 0; j < T.q.length; j++) if (answered(S.ans[j])) n++;
    return n;
  }

  /* ---------- widoki ---------- */

  function render() {
    window.scrollTo(0, 0);
    if (S.view === "intro") return renderIntro();
    if (S.view === "test") return renderTask();
    if (S.view === "res") return renderResults();
  }

  function renderIntro() {
    topbar.hidden = true;
    foot.hidden = false;

    var done = countDone();
    var resume = done > 0 && done < T.q.length;
    var full = done === T.q.length;

    var closed = T.q.filter(function (q) { return !!q.o; }).length;
    var short = T.q.filter(function (q) { return q.ty === "text"; }).length;
    var open = T.q.filter(function (q) { return q.ty === "open"; }).length;

    var areaRows = Object.keys(T.areas).map(function (k) {
      var pts = T.q.reduce(function (s, q) { return s + (q.a === k ? q.p : 0); }, 0);
      return "<li><span>" + esc(T.areas[k]) + "</span><b>" + pts + " pkt</b></li>";
    }).join("");

    app.innerHTML =
      '<p class="eyebrow">Egzamin ósmoklasisty · diagnoza wstępna</p>' +
      "<h1>" + esc(T.name) + "</h1>" +
      '<p class="lede">' + esc(T.desc) + "</p>" +

      '<ul class="facts">' +
      "<li><span>Czas orientacyjny</span><b>" + T.minutes + " min</b></li>" +
      "<li><span>Liczba zadań</span><b>" + T.q.length + "</b></li>" +
      "<li><span>Punkty</span><b>" + T.total + "</b></li>" +
      "<li><span>Typy zadań</span><b>" + closed + " zamkn. · " + short + " krótkiej odp. · " + open + " otwarte</b></li>" +
      "</ul>" +

      '<div class="note"><span class="lbl">Zanim zaczniesz</span><p>' + esc(T.tools) + "</p>" +
      "<p>Rozwiązuj bez podpowiedzi. Test ma pokazać, jak jest naprawdę, a nie ile da się wycisnąć przy otwartym zeszycie. Nie ma odliczania czasu, a odpowiedzi zapisują się w przeglądarce, więc możesz przerwać w połowie i wrócić później.</p></div>" +

      "<h2>Co jest sprawdzane</h2>" +
      '<ul class="facts">' + areaRows + "</ul>" +
      '<p class="muted"><small>Punkty rozłożyły się inaczej niż w arkuszu egzaminacyjnym i tak miało być. Ten test szuka obszaru z luką, zamiast szacować przyszły wynik.</small></p>' +

      '<div class="nav">' +
      (resume || full
        ? '<button class="btn ghost" id="reset">Zacznij od nowa</button><button class="btn primary" id="go">' +
          (full ? "Zobacz wynik" : "Wróć do zadania " + (firstBlank() + 1)) + "</button>"
        : '<button class="btn primary wide" id="go">Rozpocznij test</button>') +
      "</div>" +

      (resume ? '<p class="muted" style="margin-top:10px"><small>Zapisano ' + done + " z " + T.q.length + " " + plural(T.q.length, "odpowiedzi", "odpowiedzi", "odpowiedzi") + " z poprzedniej sesji.</small></p>" : "") +

      '<a class="crumb" href="./">Wszystkie przedmioty</a>';

    document.getElementById("go").onclick = function () {
      if (full) { S.view = "res"; } else { S.i = firstBlank(); S.view = "test"; }
      render();
    };
    var r = document.getElementById("reset");
    if (r) r.onclick = function () {
      if (!confirm("Wyczyścić zapisane odpowiedzi z tego testu?")) return;
      S.ans = {}; S.crit = {}; S.i = 0; persist(); render();
    };
  }

  function firstBlank() {
    for (var j = 0; j < T.q.length; j++) if (!answered(S.ans[j])) return j;
    return 0;
  }

  /* pozycja przewinięcia tekstu źródłowego, żeby nie gubić miejsca
     przy przechodzeniu między zadaniami do tego samego tekstu */
  var passKey = null, passScroll = 0;

  function renderTask() {
    var q = T.q[S.i], n = T.q.length;
    topbar.hidden = false;
    foot.hidden = true;
    document.getElementById("tbSubj").textContent = T.name;
    document.getElementById("tbCnt").textContent = (S.i + 1) + "/" + n;
    document.getElementById("tbBar").style.width = ((S.i + 1) / n * 100) + "%";

    var cur = S.ans[S.i];
    var body = "";

    if (q.pass) {
      var p = T.passages[q.pass];
      body += '<section class="passage" aria-label="' + esc(p.label) + '">' +
        '<div class="hdr">' + esc(p.label) + "</div>" +
        '<div class="body" id="passBody" tabindex="0">' + p.html + "</div></section>";
    }

    body += '<div class="card">' +
      '<div class="qhead"><span class="area">' + esc(T.areas[q.a]) + "</span>" +
      '<span class="pts">Zadanie ' + (S.i + 1) + ". (0–" + q.p + ")</span></div>" +
      '<div class="qtext"><p>' + nl(q.t) + "</p>" +
      (q.m ? '<p class="mono">' + nl(q.m) + "</p>" : "") +
      (q.hint ? '<p class="hint">' + esc(q.hint) + "</p>" : "") +
      "</div>";

    if (q.o) {
      body += '<ul class="opts">' + q.o.map(function (o, j) {
        return '<li><label class="opt' + (cur === j ? " on" : "") + '">' +
          '<input type="radio" name="q" value="' + j + '"' + (cur === j ? " checked" : "") + ">" +
          '<span class="bub">' + "ABCD"[j] + "</span>" +
          '<span class="txt">' + esc(o) + "</span></label></li>";
      }).join("") + "</ul>";
    } else if (q.long) {
      body += '<textarea class="field" id="fld" placeholder="' + esc(q.ph || "") + '">' + esc(cur || "") + "</textarea>";
    } else {
      body += '<input class="field" id="fld" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="' + esc(q.ph || "") + '" value="' + esc(cur || "") + '">';
    }

    body += "</div>";

    body += '<div class="nav">' +
      '<button class="btn ghost" id="prev"' + (S.i === 0 ? " disabled" : "") + ">Wstecz</button>" +
      '<button class="btn primary" id="next">' + (S.i === n - 1 ? "Zakończ i sprawdź" : "Dalej") + "</button></div>";

    body += '<div class="jump">' + T.q.map(function (_, j) {
      return '<button data-j="' + j + '" class="' + (answered(S.ans[j]) ? "done " : "") + (j === S.i ? "cur" : "") + '">' + (j + 1) + "</button>";
    }).join("") + "</div>";

    app.innerHTML = body;

    var pb = document.getElementById("passBody");
    if (pb) {
      if (q.pass === passKey) pb.scrollTop = passScroll;
      else { passKey = q.pass; passScroll = 0; }
      pb.onscroll = function () { passScroll = pb.scrollTop; };
    }

    each(app.querySelectorAll('input[name="q"]'), function (r) {
      r.onchange = function () {
        S.ans[S.i] = parseInt(r.value, 10);
        persist();
        each(app.querySelectorAll(".opt"), function (l) { l.classList.remove("on"); });
        r.parentNode.classList.add("on");
        each(app.querySelectorAll(".jump button"), function (b) {
          if (parseInt(b.getAttribute("data-j"), 10) === S.i) b.classList.add("done");
        });
      };
    });
    var fld = document.getElementById("fld");
    if (fld) fld.oninput = function () { S.ans[S.i] = fld.value; persist(); };

    document.getElementById("prev").onclick = function () { if (S.i > 0) { S.i--; render(); } };
    document.getElementById("next").onclick = function () {
      if (S.i === n - 1) { finish(); } else { S.i++; render(); }
    };
    each(app.querySelectorAll(".jump button"), function (b) {
      b.onclick = function () { S.i = parseInt(b.getAttribute("data-j"), 10); render(); };
    });
  }

  function finish() {
    var blanks = T.q.length - countDone();
    if (blanks > 0) {
      var w = plural(blanks, "zadanie", "zadania", "zadań");
      if (!confirm("Bez odpowiedzi zostało " + blanks + " " + w + ". Zakończyć mimo to?")) return;
    }
    persist();
    S.view = "res";
    render();
  }

  /* ---------- wyniki ---------- */

  function autoScore(q, a) {
    if (q.o) return (a === q.c) ? q.p : 0;
    if (q.ty === "text") {
      if (typeof a !== "string" || !a.trim()) return 0;
      var v = norm(a);
      return q.acc.some(function (x) { return norm(x) === v; }) ? q.p : 0;
    }
    return null;
  }

  function critScore(qi) {
    return (S.crit[qi] || []).filter(Boolean).length;
  }

  function tally() {
    var got = 0, byArea = {};
    Object.keys(T.areas).forEach(function (k) { byArea[k] = { got: 0, max: 0 }; });
    T.q.forEach(function (q, j) {
      var auto = autoScore(q, S.ans[j]);
      var pts = (auto === null) ? critScore(j) : auto;
      got += pts;
      byArea[q.a].got += pts;
      byArea[q.a].max += q.p;
    });
    return { got: got, byArea: byArea };
  }

  function renderResults() {
    topbar.hidden = true;
    foot.hidden = false;

    var t = tally();
    var pct = Math.round(t.got / T.total * 100);

    var verdict;
    if (pct >= 85) verdict = "Wynik wyraźnie powyżej średniej. Ostatnie punkty siedzą w zadaniach otwartych i w pełnej poprawności zapisu, bo tam nie wybacza się drobiazgów.";
    else if (pct >= 65) verdict = "Mniej więcej średnia krajowa. Luki są punktowe, więc powtarzanie wszystkiego to strata czasu. Zobacz, który obszar odstaje, i weź się za niego.";
    else if (pct >= 40) verdict = "Co najmniej jeden obszar wypadł systemowo słabo. Zacznij od najsłabszego. Reszta zwykle podciąga się sama, bo te umiejętności się zazębiają.";
    else verdict = "Materiał wymaga pracy od podstaw. Wybierz jeden obszar i zamknij go, zanim ruszysz dalej. Praca nad wszystkim naraz zwykle kończy się tym, że nie wchodzi nic.";

    var areaBars = Object.keys(t.byArea).map(function (k) {
      var b = t.byArea[k];
      if (!b.max) return "";
      var p = Math.round(b.got / b.max * 100);
      var cls = p >= 70 ? " good" : (p < 50 ? " low" : "");
      return '<div class="bar' + cls + '"><div class="lab"><span>' + esc(T.areas[k]) + "</span><b>" + b.got + "/" + b.max + " · " + p + "%</b></div>" +
        '<div class="track"><div class="fill" style="width:' + p + '%"></div></div></div>';
    }).join("");

    var reviews = T.q.map(function (q, j) {
      var a = S.ans[j];
      var auto = autoScore(q, a);
      var pts = (auto === null) ? critScore(j) : auto;
      var mark = (auto === null) ? "s" : (pts === q.p ? "y" : "n");
      var sym = (auto === null) ? "≈" : (pts === q.p ? "✓" : "✕");

      var detail = "";
      if (q.o) {
        detail += '<div class="row"><span class="k">Twoja odpowiedź</span>' +
          (a === undefined ? '<span class="muted">brak odpowiedzi</span>'
            : '<span class="' + (a === q.c ? "good" : "wrong") + '">' + "ABCD"[a] + ". " + esc(q.o[a]) + "</span>") + "</div>";
        if (a !== q.c) {
          detail += '<div class="row"><span class="k">Poprawna odpowiedź</span><span class="good">' + "ABCD"[q.c] + ". " + esc(q.o[q.c]) + "</span></div>";
        }
      } else if (q.ty === "text") {
        detail += '<div class="row"><span class="k">Twoja odpowiedź</span>' +
          (a ? '<span class="' + (pts ? "good" : "wrong") + '">' + esc(a) + "</span>" : '<span class="muted">brak odpowiedzi</span>') + "</div>";
        detail += '<div class="row"><span class="k">Uznawane odpowiedzi</span><span class="good">' + q.acc.map(esc).join(" · ") + "</span></div>";
      } else {
        detail += '<div class="row"><span class="k">Twoja odpowiedź</span>' +
          (a ? "<div>" + nl(a) + "</div>" : '<span class="muted">brak odpowiedzi</span>') + "</div>";
        if (q.acc) {
          var ok = a && q.acc.some(function (x) { return norm(x) === norm(a); });
          detail += '<div class="row"><span class="k">Sprawdzenie liczby</span><span class="' + (ok ? "good" : "wrong") + '">' +
            (ok ? "wynik się zgadza" : "wynik: " + esc(q.acc[0])) + "</span></div>";
        }
        detail += '<div class="row"><span class="k">Rozwiązanie wzorcowe</span><div class="model">' + nl(q.model) + "</div></div>";
        detail += '<div class="row"><span class="k">Oceń swoją pracę. Każde spełnione kryterium to 1 punkt</span>' +
          '<div class="crit" data-q="' + j + '">' + q.crit.map(function (c, ci) {
            var on = (S.crit[j] || [])[ci];
            return '<label class="' + (on ? "on" : "") + '"><input type="checkbox" data-ci="' + ci + '"' + (on ? " checked" : "") + ">" +
              "<span>" + esc(c) + "</span></label>";
          }).join("") + "</div></div>";
      }
      detail += '<div class="why">' + esc(q.w) + "</div>";

      return '<details class="rev"><summary>' +
        '<span class="mark ' + mark + '">' + sym + "</span>" +
        '<span class="ttl">' + esc(q.t) + "</span>" +
        '<span class="sc">' + pts + "/" + q.p + "</span></summary>" +
        '<div class="detail">' + detail + "</div></details>";
    }).join("");

    var hasSelf = T.q.some(function (q) { return q.ty === "open"; });

    app.innerHTML =
      '<p class="eyebrow">' + esc(T.name) + " · wynik</p>" +
      "<h1>Karta wyników</h1>" +
      '<div class="score"><div><div class="big">' + t.got + '<span class="of">/' + T.total + '</span></div><div class="pct">' + pct + "%</div></div>" +
      '<div class="verdict">' + esc(verdict) + "</div></div>" +
      (hasSelf ? '<div class="note warn"><span class="lbl">Zadania otwarte</span><p>Zadania ze znakiem ≈ oceniasz samodzielnie. Rozwiń je, przeczytaj rozwiązanie wzorcowe i zaznacz te kryteria, które twoja praca faktycznie spełnia. Wynik przeliczy się od razu.</p></div>' : "") +
      "<h2>Obszary umiejętności</h2>" +
      '<div class="bars">' + areaBars + "</div>" +
      '<p class="muted"><small>Suma punktów mówi mniej niż <b>różnica między obszarami</b>. Obszar poniżej połowy bierz na warsztat pierwszy, nawet jeśli reszta wygląda przyzwoicie.</small></p>' +
      "<h2>Zadanie po zadaniu</h2>" +
      '<p class="muted"><small>Rozwiń dowolne zadanie, żeby zobaczyć poprawną odpowiedź i wyjaśnienie.</small></p>' +
      reviews +
      '<div class="nav" style="margin-top:20px"><button class="btn ghost" id="again">Rozwiąż ponownie</button>' +
      '<a class="btn primary" id="home" href="./" style="text-align:center;text-decoration:none">Inny przedmiot</a></div>';

    each(app.querySelectorAll(".crit"), function (box) {
      var qi = parseInt(box.getAttribute("data-q"), 10);
      each(box.querySelectorAll("input"), function (inp) {
        inp.onchange = function () {
          var ci = parseInt(inp.getAttribute("data-ci"), 10);
          if (!S.crit[qi]) S.crit[qi] = [];
          S.crit[qi][ci] = inp.checked;
          inp.parentNode.classList.toggle("on", inp.checked);
          persist();
          refreshScore();
        };
      });
    });

    document.getElementById("again").onclick = function () {
      if (!confirm("Wyczyścić odpowiedzi z tego testu i zacząć od nowa?")) return;
      S.ans = {}; S.crit = {}; S.i = 0; persist();
      S.view = "test"; render();
    };
  }

  function refreshScore() {
    var t = tally();
    var big = app.querySelector(".score .big");
    if (big) big.innerHTML = t.got + '<span class="of">/' + T.total + "</span>";
    var pctEl = app.querySelector(".score .pct");
    if (pctEl) pctEl.textContent = Math.round(t.got / T.total * 100) + "%";

    var bars = app.querySelectorAll(".bars .bar");
    Object.keys(t.byArea).forEach(function (k, idx) {
      var b = t.byArea[k], el = bars[idx];
      if (!el || !b.max) return;
      var p = Math.round(b.got / b.max * 100);
      el.className = "bar" + (p >= 70 ? " good" : (p < 50 ? " low" : ""));
      el.querySelector(".lab b").textContent = b.got + "/" + b.max + " · " + p + "%";
      el.querySelector(".fill").style.width = p + "%";
    });

    var revs = app.querySelectorAll(".rev");
    T.q.forEach(function (q, j) {
      if (q.ty !== "open") return;
      var el = revs[j];
      if (el) el.querySelector(".sc").textContent = critScore(j) + "/" + q.p;
    });
  }

  load();
  render();
})();
