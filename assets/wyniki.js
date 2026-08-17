/* Karta diagnostyczna E8, moduł wspólny: punktacja, karta wyników i kod wyniku.
   Używają go zarówno strony testów (test.js), jak i podgląd dla nauczyciela (wynik.js). */

(function () {
  "use strict";

  var SEP_F = "\u001f";  // separator pól
  var SEP_R = "\u001e";  // separator pozycji w polu

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
  function each(list, fn) { Array.prototype.forEach.call(list, fn); }

  /* ---------- punktacja ---------- */

  function autoScore(q, a) {
    if (q.o) return (a === q.c) ? q.p : 0;
    if (q.ty === "text") {
      if (typeof a !== "string" || !a.trim()) return 0;
      var v = norm(a);
      return q.acc.some(function (x) { return norm(x) === v; }) ? q.p : 0;
    }
    return null;
  }

  function critScore(crit, j) {
    return (crit[j] || []).filter(Boolean).length;
  }

  function points(q, j, ans, crit) {
    var auto = autoScore(q, ans[j]);
    return (auto === null) ? critScore(crit, j) : auto;
  }

  function tally(T, ans, crit) {
    var got = 0, byArea = {};
    Object.keys(T.areas).forEach(function (k) { byArea[k] = { got: 0, max: 0 }; });
    T.q.forEach(function (q, j) {
      var pts = points(q, j, ans, crit);
      got += pts;
      byArea[q.a].got += pts;
      byArea[q.a].max += q.p;
    });
    return { got: got, byArea: byArea };
  }

  function verdict(pct) {
    if (pct >= 85) return "Wynik wyraźnie powyżej średniej. Ostatnie punkty siedzą w zadaniach otwartych i w pełnej poprawności zapisu, bo tam nie wybacza się drobiazgów.";
    if (pct >= 65) return "Mniej więcej średnia krajowa. Luki są punktowe, więc powtarzanie wszystkiego to strata czasu. Zobacz, który obszar odstaje, i weź się za niego.";
    if (pct >= 40) return "Co najmniej jeden obszar wypadł systemowo słabo. Zacznij od najsłabszego. Reszta zwykle podciąga się sama, bo te umiejętności się zazębiają.";
    return "Materiał wymaga pracy od podstaw. Wybierz jeden obszar i zamknij go, zanim ruszysz dalej. Praca nad wszystkim naraz zwykle kończy się tym, że nie wchodzi nic.";
  }

  /* ---------- karta wyników ---------- */

  function scorecard(T, ans, crit, opts) {
    opts = opts || {};
    var mine = opts.mine !== false;
    var labYou = mine ? "Twoja odpowiedź" : "Odpowiedź ucznia";
    var labCrit = mine
      ? "Oceń swoją pracę. Każde spełnione kryterium to 1 punkt"
      : "Samoocena ucznia. Możesz ją skorygować, wynik przeliczy się od razu";

    var t = tally(T, ans, crit);
    var pct = Math.round(t.got / T.total * 100);

    var areaBars = Object.keys(t.byArea).map(function (k) {
      var b = t.byArea[k];
      if (!b.max) return "";
      var p = Math.round(b.got / b.max * 100);
      var cls = p >= 70 ? " good" : (p < 50 ? " low" : "");
      return '<div class="bar' + cls + '"><div class="lab"><span>' + esc(T.areas[k]) + "</span><b>" + b.got + "/" + b.max + " · " + p + "%</b></div>" +
        '<div class="track"><div class="fill" style="width:' + p + '%"></div></div></div>';
    }).join("");

    var reviews = T.q.map(function (q, j) {
      var a = ans[j];
      var auto = autoScore(q, a);
      var pts = (auto === null) ? critScore(crit, j) : auto;
      var mark = (auto === null) ? "s" : (pts === q.p ? "y" : "n");
      var sym = (auto === null) ? "≈" : (pts === q.p ? "✓" : "✕");

      var detail = "";
      if (q.o) {
        detail += '<div class="row"><span class="k">' + labYou + "</span>" +
          (a === undefined ? '<span class="muted">brak odpowiedzi</span>'
            : '<span class="' + (a === q.c ? "good" : "wrong") + '">' + "ABCD"[a] + ". " + esc(q.o[a]) + "</span>") + "</div>";
        if (a !== q.c) {
          detail += '<div class="row"><span class="k">Poprawna odpowiedź</span><span class="good">' + "ABCD"[q.c] + ". " + esc(q.o[q.c]) + "</span></div>";
        }
      } else if (q.ty === "text") {
        detail += '<div class="row"><span class="k">' + labYou + "</span>" +
          (a ? '<span class="' + (pts ? "good" : "wrong") + '">' + esc(a) + "</span>" : '<span class="muted">brak odpowiedzi</span>') + "</div>";
        detail += '<div class="row"><span class="k">Uznawane odpowiedzi</span><span class="good">' + q.acc.map(esc).join(" · ") + "</span></div>";
      } else {
        detail += '<div class="row"><span class="k">' + labYou + "</span>" +
          (a ? "<div>" + nl(a) + "</div>" : '<span class="muted">brak odpowiedzi</span>') + "</div>";
        if (q.acc) {
          var ok = a && q.acc.some(function (x) { return norm(x) === norm(a); });
          detail += '<div class="row"><span class="k">Sprawdzenie liczby</span><span class="' + (ok ? "good" : "wrong") + '">' +
            (ok ? "wynik się zgadza" : "wynik: " + esc(q.acc[0])) + "</span></div>";
        }
        detail += '<div class="row"><span class="k">Rozwiązanie wzorcowe</span><div class="model">' + nl(q.model) + "</div></div>";
        detail += '<div class="row"><span class="k">' + labCrit + "</span>" +
          '<div class="crit" data-q="' + j + '">' + q.crit.map(function (c, ci) {
            var on = (crit[j] || [])[ci];
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
    var selfNote = mine
      ? "Zadania ze znakiem ≈ oceniasz samodzielnie. Rozwiń je, przeczytaj rozwiązanie wzorcowe i zaznacz te kryteria, które twoja praca faktycznie spełnia. Wynik przeliczy się od razu."
      : "Zadania ze znakiem ≈ ocenił sam uczeń, więc traktuj te punkty ostrożnie. Rozwiń zadanie, przeczytaj pracę i popraw zaznaczenia, jeśli się nie zgadzasz. Wynik przeliczy się od razu, ale zmiana zostaje na tym urządzeniu.";

    return '<div class="score"><div><div class="big">' + t.got + '<span class="of">/' + T.total + '</span></div><div class="pct">' + pct + "%</div></div>" +
      '<div class="verdict">' + esc(verdict(pct)) + "</div></div>" +
      (hasSelf ? '<div class="note warn"><span class="lbl">Zadania otwarte</span><p>' + selfNote + "</p></div>" : "") +
      "<h2>Obszary umiejętności</h2>" +
      '<div class="bars">' + areaBars + "</div>" +
      '<p class="muted"><small>Suma punktów mówi mniej niż <b>różnica między obszarami</b>. Obszar poniżej połowy bierz na warsztat pierwszy, nawet jeśli reszta wygląda przyzwoicie.</small></p>' +
      "<h2>Zadanie po zadaniu</h2>" +
      '<p class="muted"><small>Rozwiń dowolne zadanie, żeby zobaczyć poprawną odpowiedź i wyjaśnienie.</small></p>' +
      reviews;
  }

  function refresh(root, T, ans, crit) {
    var t = tally(T, ans, crit);
    var big = root.querySelector(".score .big");
    if (big) big.innerHTML = t.got + '<span class="of">/' + T.total + "</span>";
    var pctEl = root.querySelector(".score .pct");
    if (pctEl) pctEl.textContent = Math.round(t.got / T.total * 100) + "%";

    var bars = root.querySelectorAll(".bars .bar");
    Object.keys(t.byArea).forEach(function (k, idx) {
      var b = t.byArea[k], el = bars[idx];
      if (!el || !b.max) return;
      var p = Math.round(b.got / b.max * 100);
      el.className = "bar" + (p >= 70 ? " good" : (p < 50 ? " low" : ""));
      el.querySelector(".lab b").textContent = b.got + "/" + b.max + " · " + p + "%";
      el.querySelector(".fill").style.width = p + "%";
    });

    var revs = root.querySelectorAll(".rev");
    T.q.forEach(function (q, j) {
      if (q.ty !== "open") return;
      var el = revs[j];
      if (el) el.querySelector(".sc").textContent = critScore(crit, j) + "/" + q.p;
    });
  }

  /* Podpina obsługę kryteriów samooceny. onChange dostaje sygnał po każdej zmianie. */
  function wireCrit(root, T, ans, crit, onChange) {
    each(root.querySelectorAll(".crit"), function (box) {
      var qi = parseInt(box.getAttribute("data-q"), 10);
      each(box.querySelectorAll("input"), function (inp) {
        inp.onchange = function () {
          var ci = parseInt(inp.getAttribute("data-ci"), 10);
          if (!crit[qi]) crit[qi] = [];
          crit[qi][ci] = inp.checked;
          inp.parentNode.classList.toggle("on", inp.checked);
          refresh(root, T, ans, crit);
          if (onChange) onChange();
        };
      });
    });
  }

  /* ---------- kod wyniku ---------- */

  function b64uEncode(str) {
    var bytes = new TextEncoder().encode(str), bin = "";
    for (var i = 0; i < bytes.length; i++) bin += String.fromCharCode(bytes[i]);
    return btoa(bin).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
  }
  function b64uDecode(code) {
    var s = String(code).replace(/-/g, "+").replace(/_/g, "/").replace(/\s+/g, "");
    while (s.length % 4) s += "=";
    var bin = atob(s), bytes = new Uint8Array(bin.length);
    for (var i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
    return new TextDecoder().decode(bytes);
  }
  function clean(s) {
    return String(s).replace(/[\u001e\u001f]/g, " ");
  }

  /* Pakuje odpowiedzi do jednego ciągu znaków bezpiecznego w adresie URL. */
  function encode(T, ans, crit, who) {
    var A = T.q.map(function (q, j) {
      var v = ans[j];
      return (v === undefined || v === null) ? "" : clean(v);
    }).join(SEP_R);

    var C = T.q.map(function (q, j) {
      if (q.ty !== "open") return "";
      return q.crit.map(function (_, ci) { return (crit[j] || [])[ci] ? "1" : "0"; }).join("");
    }).join(SEP_R);

    return b64uEncode(["1", T.key, clean(who || ""), A, C].join(SEP_F));
  }

  /* Odwrotność encode. Rzuca wyjątkiem z komunikatem po polsku, gdy kod jest zły. */
  function decode(code, TESTS) {
    var raw;
    try { raw = b64uDecode(code); }
    catch (e) { throw new Error("Kod jest uszkodzony lub niekompletny."); }

    var f = raw.split(SEP_F);
    if (f.length !== 5 || f[0] !== "1") throw new Error("To nie wygląda na kod wyniku z tej strony.");

    var T = TESTS[f[1]];
    if (!T) throw new Error("Nieznany przedmiot w kodzie: " + f[1] + ".");

    var A = f[3].split(SEP_R), C = f[4].split(SEP_R);
    if (A.length !== T.q.length) {
      throw new Error("Kod pochodzi z innej wersji testu (" + A.length + " odpowiedzi zamiast " + T.q.length + ").");
    }

    var ans = {}, crit = {};
    T.q.forEach(function (q, j) {
      var v = A[j];
      if (v === "") return;
      if (q.o) {
        var n = parseInt(v, 10);
        if (n >= 0 && n < q.o.length) ans[j] = n;
      } else {
        ans[j] = v;
      }
    });
    T.q.forEach(function (q, j) {
      if (q.ty !== "open") return;
      var bits = C[j] || "";
      crit[j] = q.crit.map(function (_, ci) { return bits.charAt(ci) === "1"; });
    });

    return { T: T, who: f[2], ans: ans, crit: crit };
  }

  window.E8 = {
    esc: esc, nl: nl, norm: norm, each: each,
    autoScore: autoScore, critScore: critScore, tally: tally, verdict: verdict,
    scorecard: scorecard, refresh: refresh, wireCrit: wireCrit,
    encode: encode, decode: decode
  };
})();
