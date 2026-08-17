/* Karta diagnostyczna E8, podgląd wyniku przysłanego przez ucznia.
   Czyta kod z adresu (po znaku #) albo z pola wklejania. */

(function () {
  "use strict";

  var E8 = window.E8;
  var TESTS = window.TESTS || {};
  var app = document.getElementById("app");
  var esc = E8.esc;

  /* Zdekodowany wynik trzymamy tylko w pamięci strony.
     Korekty samooceny nauczyciela nie wracają do ucznia i nic nie zapisujemy. */
  var cur = null;

  function codeFromUrl() {
    var h = location.hash.replace(/^#/, "").trim();
    return h ? decodeURIComponent(h) : "";
  }

  function renderPrompt(msg) {
    app.innerHTML =
      '<p class="eyebrow">Egzamin ósmoklasisty · podgląd wyniku</p>' +
      "<h1>Wynik ucznia</h1>" +
      '<p class="lede">Wklej kod, który przysłał uczeń. Jeśli dostałeś link, wystarczy go otworzyć, ' +
      "a wynik pokaże się od razu.</p>" +
      (msg ? '<div class="note warn"><span class="lbl">Nie udało się odczytać</span><p>' + esc(msg) + "</p></div>" : "") +
      '<textarea class="field" id="paste" rows="4" placeholder="Wklej tutaj kod wyniku…"></textarea>' +
      '<div class="nav"><button class="btn primary wide" id="show">Pokaż wynik</button></div>' +
      '<div class="note"><span class="lbl">Jak to działa</span>' +
      "<p>Kod zawiera wyłącznie odpowiedzi z jednego testu. Nie ma w nim żadnych danych " +
      "urządzenia ani nic, co odczytałaby ta strona poza wynikiem. Dekodowanie dzieje się " +
      "w Twojej przeglądarce, kod nie jest nigdzie wysyłany.</p></div>" +
      '<a class="crumb" href="./">Wszystkie przedmioty</a>';

    var ta = document.getElementById("paste");
    document.getElementById("show").onclick = function () {
      var v = ta.value.trim();
      if (!v) { ta.focus(); return; }
      var m = v.match(/#(.+)$/);          // ktoś mógł wkleić cały link
      show(m ? m[1] : v);
    };
  }

  function show(code) {
    var r;
    try { r = E8.decode(code, TESTS); }
    catch (e) { renderPrompt(e.message); return; }

    cur = r;
    var who = r.who ? esc(r.who) : "uczeń niepodpisany";

    app.innerHTML =
      '<p class="eyebrow">' + esc(r.T.name) + " · wynik ucznia</p>" +
      "<h1>" + who + "</h1>" +
      E8.scorecard(r.T, r.ans, r.crit, { mine: false }) +
      '<div class="nav" style="margin-top:20px">' +
      '<button class="btn ghost" id="other">Wklej inny kod</button>' +
      '<a class="btn primary" href="./" style="text-align:center;text-decoration:none">Strona główna</a></div>';

    E8.wireCrit(app, r.T, r.ans, r.crit, null);

    document.getElementById("other").onclick = function () {
      if (location.hash) {
        history.replaceState(null, "", location.pathname + location.search);
      }
      cur = null;
      renderPrompt("");
    };
    window.scrollTo(0, 0);
  }

  function boot() {
    var c = codeFromUrl();
    if (c) show(c); else renderPrompt("");
  }

  window.addEventListener("hashchange", boot);
  boot();
})();
