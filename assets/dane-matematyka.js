/* Karta diagnostyczna E8 — matematyka */

window.TEST = {
  key: "mat",
  name: "Matematyka",
  short: "MAT",
  minutes: 30,
  total: 20,
  desc: "16 zadań: 14 zamkniętych i 2 otwarte. Sprawdza cztery wymagania ogólne oraz materiał z klas IV–VI i VII–VIII łącznie.",
  tools: "Bez kalkulatora. Przygotuj kartkę i długopis — obliczenia zapisuj na kartce.",

  areas: {
    I:   "I. Sprawność rachunkowa",
    II:  "II. Wykorzystanie i tworzenie informacji",
    III: "III. Wykorzystanie i interpretowanie reprezentacji",
    IV:  "IV. Rozumowanie i argumentacja"
  },

  passages: {},

  q: [
    { a:"I", p:1, t:"Oblicz wartość wyrażenia:", m:"(0,75 − 1¼) : (−0,5)",
      o:["−1","1","−0,25","0,25"], c:1,
      w:"1¼ = 1,25, więc 0,75 − 1,25 = −0,5. Dalej (−0,5) : (−0,5) = 1. Odpowiedź −1 to zgubiona zasada „minus przez minus daje plus”; ±0,25 powstaje z mnożenia zamiast dzielenia." },

    { a:"I", p:1, t:"Która z podanych liczb przy dzieleniu przez 6 daje resztę 4?",
      o:["44","46","48","51"], c:1,
      w:"46 = 6 · 7 + 4. Szybciej niż dzielić: szukaj wielokrotności 6 tuż poniżej liczby (6 · 7 = 42) i odejmij. Reszty pozostałych: 44 → 2, 48 → 0, 51 → 3." },

    { a:"II", p:1, t:"W styczniu Ola odłożyła 40 zł, a w marcu 50 zł. O ile procent więcej odłożyła w marcu niż w styczniu?",
      o:["o 10%","o 20%","o 25%","o 125%"], c:2,
      w:"(50 − 40) : 40 = 0,25 = 25%. Odpowiedź „10%” to najczęstszy błąd w kraju — mylenie różnicy kwot (10 zł) z procentem. Zawsze pytaj: o ile? (licznik) i względem czego? (mianownik — tu styczeń)." },

    { a:"III", p:1, t:"Wartość wyrażenia (2³)² : 2⁴ jest równa",
      o:["2","4","8","16"], c:1,
      w:"(2³)² = 2⁶, dalej 2⁶ : 2⁴ = 2² = 4. Przy potędze potęgi wykładniki się MNOŻY, przy mnożeniu potęg — dodaje, przy dzieleniu — odejmuje." },

    { a:"I", p:1, t:"Liczba √49 − √9 · √4 jest równa",
      o:["1","8","2","−5"], c:0,
      w:"√49 = 7, √9 = 3, √4 = 2. Mnożenie przed odejmowaniem: 7 − 3 · 2 = 1. Odpowiedź 8 to liczenie od lewej do prawej — błąd kolejności działań, nie pierwiastków." },

    { a:"III", p:1, t:"Adam ma x lat. Jego siostra jest o 3 lata młodsza od Adama, a ich mama jest dwa razy starsza od siostry. Które wyrażenie opisuje wiek mamy?",
      o:["2x − 3","2(x − 3)","2x + 3","(x − 3) : 2"], c:1,
      w:"Siostra: x − 3. Mama: 2 · (x − 3). Brak nawiasu (2x − 3) to błąd numer jeden w wyrażeniach algebraicznych. Sprawdzenie: podstaw x = 10 — Adam 10, siostra 7, mama 14. Tylko B daje 14." },

    { a:"II", p:1, t:"Ze wzoru na pole trapezu P = (a + b) · h : 2 wyznacz h.",
      o:["h = 2P : (a + b)","h = P : (2(a + b))","h = (a + b) : (2P)","h = 2P − (a + b)"], c:0,
      w:"Mnożymy obie strony przez 2: 2P = (a + b)h. Dzielimy przez (a + b): h = 2P : (a + b). Po każdym kroku pytaj: co zrobiłem OBU stronom równania?" },

    { a:"II", p:1, t:"Średnia arytmetyczna pięciu liczb jest równa 12. Cztery z nich to 8, 10, 14 i 15. Jaka jest piąta liczba?",
      o:["11","12","13","14"], c:2,
      w:"Suma pięciu liczb = 5 · 12 = 60. Znane sumują się do 47, więc piąta liczba to 13. Klucz: średnia to informacja o SUMIE — „średnia 12 z pięciu liczb” znaczy „razem jest ich 60”." },

    { a:"III", p:1, t:"Rowerzysta jechał 45 minut ze stałą prędkością 16 km/h. Jaką drogę przebył?",
      o:["11 km","12 km","12,8 km","21,3 km"], c:1,
      w:"45 min = 0,75 h (nie 0,8!). s = 16 · 0,75 = 12 km. Odpowiedź 12,8 km powstaje z potraktowania minut jak części dziesiętnych. Godzina ma 60, nie 100 minut." },

    { a:"III", p:1, t:"W pudełku jest 5 kul białych, 3 czerwone i 4 zielone. Losujemy jedną kulę. Jakie jest prawdopodobieństwo wylosowania kuli, która NIE jest biała?",
      o:["5/12","7/12","1/3","7/5"], c:1,
      w:"Wszystkich kul 12, niebiałych 7 → 7/12. Można też: 1 − 5/12 = 7/12. Odpowiedź 5/12 to przeoczone słowo „nie”. Odpowiedź 7/5 odrzuć bez liczenia — prawdopodobieństwo nigdy nie przekracza 1." },

    { a:"III", p:1, t:"Prostokątna działka ma wymiary 40 m × 25 m. Ile to arów?",
      o:["1 ar","10 arów","100 arów","1000 arów"], c:1,
      w:"Pole = 1000 m². 1 ar = 100 m² (kwadrat 10 m × 10 m), więc 1000 m² = 10 arów. Hektar to kwadrat 100 m × 100 m = 10 000 m² = 100 arów." },

    { a:"III", p:1, t:"Przekątna prostokąta o bokach 9 cm i 12 cm ma długość",
      o:["13 cm","15 cm","21 cm","3 cm"], c:1,
      w:"d² = 81 + 144 = 225, d = 15 cm. To trójka 3-4-5 pomnożona przez 3. Kontrola sensu: przekątna musi być dłuższa od każdego boku, ale krótsza od ich sumy — to od razu odrzuca 21 i 3." },

    { a:"III", p:1, t:"Prostopadłościan ma krawędzie długości 3 cm, 4 cm i 5 cm. Pole powierzchni całkowitej tego prostopadłościanu jest równe",
      o:["47 cm²","60 cm²","94 cm²","120 cm²"], c:2,
      w:"2 · (3·4 + 3·5 + 4·5) = 2 · 47 = 94 cm². Odpowiedź 60 to objętość — tę pomyłkę popełnia około 27% ósmoklasistów. Rozróżniaj przez jednostkę: pole w cm² (co owinąć papierem), objętość w cm³ (ile wleje się wody)." },

    { a:"III", p:1, t:"Pole pewnego koła jest równe 36π cm². Jaka jest długość okręgu ograniczającego to koło?",
      o:["6π cm","12π cm","36π cm","72π cm"], c:1,
      w:"πr² = 36π → r = 6. Obwód = 2πr = 12π cm. Droga zawsze prowadzi przez promień: pole → promień → obwód. Uwaga: ten dział wszedł do zakresu egzaminu dopiero po zmianie podstawy z 2024 r." },

    { a:"IV", p:3, ty:"open",
      t:"W szkolnym konkursie wzięło udział 96 uczniów. Dziewcząt było o 12 więcej niż chłopców. Ilu chłopców wzięło udział w konkursie?",
      hint:"Rozwiązanie zapisz na kartce. W polu poniżej wpisz samą liczbę chłopców.",
      acc:["42"], ph:"np. 42",
      model:"x — liczba chłopców, x + 12 — liczba dziewcząt.\nx + (x + 12) = 96 → 2x = 84 → x = 42.\nBez równania: (96 − 12) : 2 = 42.\nOdp. 42 chłopców.\nSprawdzenie: 42 + 54 = 96 ✓ oraz 54 − 42 = 12 ✓",
      crit:[
        "Oznaczyłem/oznaczyłam obie wielkości (np. x oraz x + 12) albo opisałem/opisałam rozumowanie słowami.",
        "Ułożyłem/ułożyłam poprawne równanie lub poprawny rachunek prowadzący do wyniku.",
        "Zapisałem/zapisałam odpowiedź pełnym zdaniem i sprawdziłem/sprawdziłam oba warunki zadania."
      ],
      w:"Częsty błąd: 96 : 2 = 48, czyli pominięcie warunku „o 12 więcej”. Sprawdzenie w warunkach zadania wyłapuje go natychmiast." },

    { a:"IV", p:3, ty:"open",
      t:"Bok kwadratu wydłużono o 20%. Uzasadnij, że pole nowego kwadratu jest większe od pola kwadratu wyjściowego o 44%.",
      hint:"Uzasadnienie zapisz na kartce. W polu poniżej wpisz samą liczbę procent.",
      acc:["44","44%"], ph:"np. 44",
      model:"a — bok wyjściowy, P = a².\nNowy bok: 1,2a. Nowe pole: (1,2a)² = 1,44a².\nPrzyrost: 1,44a² − a² = 0,44a², czyli 0,44a² : a² = 44%.\nNa liczbach: a = 10 → P = 100, nowy bok 12 → P₁ = 144, przyrost 44%.\nSkąd „brakujące” 4%: dobudowany pasek to dwa prostokąty po 0,2a² i mały kwadracik 0,04a² w rogu.",
      crit:[
        "Zapisałem/zapisałam nowy bok jako 1,2a (albo policzyłem/policzyłam go na konkretnej liczbie).",
        "Obliczyłem/obliczyłam pole nowego kwadratu jako 1,44a² (albo 144 dla a = 10).",
        "Porównałem/porównałam oba pola i zapisałem/zapisałam wniosek, że przyrost wynosi 44%."
      ],
      w:"Najczęstsza błędna odpowiedź to 20% („skoro bok rośnie o 20%, to pole też”) albo 40% (mylenie kwadratu z podwojeniem). Uwaga: sprawdzenie na jednej liczbie to przykład, nie dowód — podstawa wymaga rozróżniania jednego od drugiego." }
  ]
};
