/* Karta diagnostyczna E8, strona główna: stan zapisanych testów */

(function () {
  "use strict";

  var KEY = "e8diag.v2";
  var SUBJECTS = [
    { key: "mat", n: 16 },
    { key: "pol", n: 16 },
    { key: "ang", n: 18 }
  ];

  var store = {};
  try { store = JSON.parse(localStorage.getItem(KEY) || "{}") || {}; } catch (e) { store = {}; }

  var any = false;

  SUBJECTS.forEach(function (s) {
    var el = document.querySelector('[data-state="' + s.key + '"]');
    if (!el) return;
    var rec = store[s.key];
    var ans = (rec && rec.ans) ? rec.ans : {};
    var done = 0;
    for (var j = 0; j < s.n; j++) {
      var v = ans[j];
      if (v !== undefined && v !== null && v !== "") done++;
    }
    if (!done) return;
    any = true;
    el.textContent = done === s.n ? "Rozwiązany, wynik zapisany" : "W trakcie · " + done + "/" + s.n;
  });

  var box = document.getElementById("clrbox");
  if (box && any) {
    box.hidden = false;
    document.getElementById("clr").onclick = function () {
      if (!confirm("Usunąć zapisane odpowiedzi ze wszystkich trzech testów?")) return;
      try { localStorage.removeItem(KEY); } catch (e) {}
      location.reload();
    };
  }
})();
