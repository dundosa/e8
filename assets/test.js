/* Karta diagnostyczna E8, silnik pojedynczego testu.
   Wymaga wcześniej wczytanego pliku z danymi, który ustawia window.TEST. */

(function () {
  "use strict";

  var T = window.TEST;
  var E8 = window.E8;
  var KEY = "e8diag.v2";

  var store = {};
  try { store = JSON.parse(localStorage.getItem(KEY) || "{}") || {}; } catch (e) { store = {}; }
  function save() { try { localStorage.setItem(KEY, JSON.stringify(store)); } catch (e) {} }

  var S = { view: "intro", i: 0, ans: {}, crit: {} };

  var app = document.getElementById("app");
  var topbar = document.getElementById("topbar");
  var foot = document.getElementById("foot");

  /* ---------- pomocnicze ---------- */

  var esc = E8.esc, nl = E8.nl, each = E8.each;

  function plural(n, a, b, c) {
    var m10 = n % 10, m100 = n % 100;
    if (n === 1) return a;
    if (m10 >= 2 && m10 <= 4 && (m100 < 10 || m100 >= 20)) return b;
    return c;
  }
  function answered(v) { return v !== undefined && v !== null && v !== ""; }

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

  function renderResults() {
    topbar.hidden = true;
    foot.hidden = false;

    app.innerHTML =
      '<p class="eyebrow">' + esc(T.name) + " · wynik</p>" +
      "<h1>Karta wyników</h1>" +
      E8.scorecard(T, S.ans, S.crit, { mine: true }) +
      shareHTML() +
      '<div class="nav" style="margin-top:20px"><button class="btn ghost" id="again">Rozwiąż ponownie</button>' +
      '<a class="btn primary" id="home" href="./" style="text-align:center;text-decoration:none">Inny przedmiot</a></div>';

    E8.wireCrit(app, T, S.ans, S.crit, function () { persist(); wireShare(); });
    wireShare();

    document.getElementById("again").onclick = function () {
      if (!confirm("Wyczyścić odpowiedzi z tego testu i zacząć od nowa?")) return;
      S.ans = {}; S.crit = {}; S.i = 0; persist();
      S.view = "test"; render();
    };
  }

  /* ---------- kod wyniku do wysłania ---------- */

  var WHO = "e8diag.who";

  function savedWho() {
    try { return localStorage.getItem(WHO) || ""; } catch (e) { return ""; }
  }

  function shareHTML() {
    return '<h2>Wyślij wynik nauczycielowi</h2>' +
      '<p>Wynik nie wychodzi z tego telefonu sam z siebie. Poniższy kod zawiera twoje odpowiedzi; ' +
      "wyślij go, a nauczyciel zobaczy dokładnie tę samą kartę wyników co ty.</p>" +
      '<input class="field" id="who" maxlength="40" autocomplete="name" placeholder="Twoje imię (nieobowiązkowe)" value="' + esc(savedWho()) + '">' +
      '<div class="nav"><button class="btn primary" id="cpLink">Kopiuj link z wynikiem</button>' +
      '<button class="btn ghost" id="cpCode">Sam kod</button></div>' +
      '<p class="muted" style="margin-top:10px"><small>Jeśli link po wklejeniu się rozjedzie, wyślij sam kod. ' +
      'Nauczyciel wkleja go na stronie <b>wynik.html</b>.</small></p>' +
      '<div class="codebox" id="codeOut"></div>';
  }

  function linkFor(code) {
    var base = location.href.replace(/[^/]*$/, "");
    return base + "wynik.html#" + code;
  }

  /* Kodowanie nie może wywrócić całej karty wyników, gdyby przeglądarka
     okazała się zbyt stara na TextEncoder. */
  function wireShare() {
    var who = document.getElementById("who");
    var box = document.getElementById("codeOut");
    if (!who || !box) return;

    var code;
    try {
      code = E8.encode(T, S.ans, S.crit, who.value);
    } catch (e) {
      box.textContent = "Ta przeglądarka nie umie zbudować kodu. Pokaż wynik nauczycielowi na ekranie albo zrób zrzut.";
      return;
    }
    box.textContent = code;

    who.oninput = function () {
      try { localStorage.setItem(WHO, who.value); } catch (e) {}
      code = E8.encode(T, S.ans, S.crit, who.value);
      box.textContent = code;
    };

    hook("cpLink", function () { return linkFor(code); });
    hook("cpCode", function () { return code; });
  }

  function hook(id, get) {
    var b = document.getElementById(id);
    if (!b) return;
    var label = b.textContent;
    b.onclick = function () {
      copy(get(), function (ok) {
        b.textContent = ok ? "Skopiowano" : "Zaznacz i skopiuj ręcznie";
        setTimeout(function () { b.textContent = label; }, 2500);
      });
    };
  }

  function copy(text, done) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(function () { done(true); }, function () { fallback(text, done); });
    } else {
      fallback(text, done);
    }
  }

  function fallback(text, done) {
    var ta = document.createElement("textarea");
    ta.value = text;
    ta.setAttribute("readonly", "");
    ta.style.position = "fixed";
    ta.style.opacity = "0";
    document.body.appendChild(ta);
    ta.select();
    var ok = false;
    try { ok = document.execCommand("copy"); } catch (e) { ok = false; }
    document.body.removeChild(ta);
    done(ok);
  }

  load();
  render();
})();
