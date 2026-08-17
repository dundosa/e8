/* Karta diagnostyczna E8, dane testu z matematyki */

window.TEST = {
  key: "mat",
  name: "Matematyka",
  short: "MAT",
  minutes: 30,
  total: 20,
  desc: "16 zadań, w tym 14 zamkniętych i 2 otwarte. Materiał z klas IV–VI i VII–VIII razem, rozłożony na cztery wymagania ogólne.",
  tools: "Bez kalkulatora, tak jak na egzaminie. Przygotuj kartkę i długopis, bo obliczenia zapisujesz na papierze, a nie w aplikacji.",

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
      w:"1¼ to 1,25, więc w nawiasie wychodzi 0,75 − 1,25 = −0,5. Potem (−0,5) : (−0,5) = 1. Kto zaznaczył −1, zgubił zasadę, że minus dzielony przez minus daje plus. Ćwiartki biorą się z pomnożenia zamiast podzielenia." },

    { a:"I", p:1, t:"Która z podanych liczb przy dzieleniu przez 6 daje resztę 4?",
      o:["44","46","48","51"], c:1,
      w:"46 = 6 · 7 + 4. Zamiast dzielić każdą liczbę po kolei, szukaj wielokrotności szóstki tuż pod nią: 42 leży pod 46, różnica wynosi 4. Reszty pozostałych: 44 daje 2, 48 daje 0, 51 daje 3." },

    { a:"II", p:1, t:"W styczniu Ola odłożyła 40 zł, a w marcu 50 zł. O ile procent więcej odłożyła w marcu niż w styczniu?",
      o:["o 10%","o 20%","o 25%","o 125%"], c:2,
      w:"(50 − 40) : 40 = 0,25, czyli 25%. Odpowiedź 10% to najczęstszy błąd w kraju: uczeń bierze różnicę kwot i dokleja do niej znak procenta. Przy takim pytaniu zawsze rozdzielaj dwie rzeczy. O ile wzrosło, czyli licznik. I względem czego, czyli mianownik, tutaj styczeń." },

    { a:"III", p:1, t:"Wartość wyrażenia (2³)² : 2⁴ jest równa",
      o:["2","4","8","16"], c:1,
      w:"(2³)² = 2⁶, dalej 2⁶ : 2⁴ = 2² = 4. Przy potędze potęgi wykładniki się mnoży. Przy mnożeniu potęg o tej samej podstawie dodaje, przy dzieleniu odejmuje. Te trzy reguły mylą się przede wszystkim ze sobą nawzajem, więc pokazuj je razem, a nie osobno." },

    { a:"I", p:1, t:"Liczba √49 − √9 · √4 jest równa",
      o:["1","8","2","−5"], c:0,
      w:"√49 = 7, √9 = 3, √4 = 2. Mnożenie idzie przed odejmowaniem, więc 7 − 3 · 2 = 1. Kto zaznaczył 8, liczył po kolei od lewej. To błąd kolejności działań, a nie pierwiastków, i trzeba powiedzieć to uczniowi wprost, bo inaczej zacznie powtarzać nie ten materiał." },

    { a:"III", p:1, t:"Adam ma x lat. Jego siostra jest o 3 lata młodsza od Adama, a ich mama jest dwa razy starsza od siostry. Które wyrażenie opisuje wiek mamy?",
      o:["2x − 3","2(x − 3)","2x + 3","(x − 3) : 2"], c:1,
      w:"Siostra ma x − 3 lat, mama 2 · (x − 3). Zgubiony nawias, czyli 2x − 3, to błąd numer jeden w wyrażeniach algebraicznych. Sprawdza się go w pięć sekund: podstaw x = 10. Adam ma 10, siostra 7, mama 14. Tylko odpowiedź B daje 14." },

    { a:"II", p:1, t:"Ze wzoru na pole trapezu P = (a + b) · h : 2 wyznacz h.",
      o:["h = 2P : (a + b)","h = P : (2(a + b))","h = (a + b) : (2P)","h = 2P − (a + b)"], c:0,
      w:"Mnożymy obie strony przez 2 i mamy 2P = (a + b)h. Dzielimy przez (a + b) i wychodzi h = 2P : (a + b). Po każdym kroku zapytaj, co się zrobiło obu stronom równania. Przekształcanie wzorów sypie się zwykle wtedy, gdy uczeń działa tylko na jednej." },

    { a:"II", p:1, t:"Średnia arytmetyczna pięciu liczb jest równa 12. Cztery z nich to 8, 10, 14 i 15. Jaka jest piąta liczba?",
      o:["11","12","13","14"], c:2,
      w:"Suma pięciu liczb to 5 · 12 = 60. Cztery znane dają 47, więc piąta wynosi 13. Średnia jest informacją o sumie i tak trzeba ją czytać: średnia 12 z pięciu liczb znaczy tyle, że razem jest ich 60." },

    { a:"III", p:1, t:"Rowerzysta jechał 45 minut ze stałą prędkością 16 km/h. Jaką drogę przebył?",
      o:["11 km","12 km","12,8 km","21,3 km"], c:1,
      w:"45 minut to 0,75 godziny, nie 0,8. Stąd s = 16 · 0,75 = 12 km. Wynik 12,8 km bierze się z potraktowania minut jak części dziesiętnych. Godzina ma 60 minut i na tym polega cała pułapka tego zadania." },

    { a:"III", p:1, t:"W pudełku jest 5 kul białych, 3 czerwone i 4 zielone. Losujemy jedną kulę. Jakie jest prawdopodobieństwo wylosowania kuli, która NIE jest biała?",
      o:["5/12","7/12","1/3","7/5"], c:1,
      w:"Kul jest 12, niebiałych 7, więc 7/12. Można też odjąć: 1 − 5/12 = 7/12. Odpowiedź 5/12 oznacza przeoczone słowo nie w poleceniu. Odpowiedź 7/5 da się odrzucić bez liczenia, bo prawdopodobieństwo nigdy nie przekracza jedynki." },

    { a:"III", p:1, t:"Prostokątna działka ma wymiary 40 m × 25 m. Ile to arów?",
      o:["1 ar","10 arów","100 arów","1000 arów"], c:1,
      w:"Pole działki to 1000 m². Ar jest kwadratem 10 m na 10 m, czyli 100 m², więc 1000 m² daje 10 arów. Hektar to kwadrat 100 m na 100 m, czyli 10 000 m², a to z kolei 100 arów. Kto raz zobaczy te dwa kwadraty, przestaje mylić jednostki." },

    { a:"III", p:1, t:"Przekątna prostokąta o bokach 9 cm i 12 cm ma długość",
      o:["13 cm","15 cm","21 cm","3 cm"], c:1,
      w:"d² = 81 + 144 = 225, więc d = 15 cm. To zwykła trójka 3-4-5 pomnożona przez trzy. Zanim uczeń zacznie liczyć, naucz go kontroli sensu: przekątna jest dłuższa od każdego boku i krótsza od ich sumy. To samo odrzuca 21 i 3." },

    { a:"III", p:1, t:"Prostopadłościan ma krawędzie długości 3 cm, 4 cm i 5 cm. Pole powierzchni całkowitej tego prostopadłościanu jest równe",
      o:["47 cm²","60 cm²","94 cm²","120 cm²"], c:2,
      w:"2 · (3·4 + 3·5 + 4·5) = 2 · 47 = 94 cm². Odpowiedź 60 to objętość, a tę pomyłkę popełnia mniej więcej co czwarty ósmoklasista. Najłatwiej rozdzielić te dwie wielkości przez pytanie i jednostkę: pole w cm² mówi, ile papieru pójdzie na oklejenie, objętość w cm³, ile wody się wleje." },

    { a:"III", p:1, t:"Pole pewnego koła jest równe 36π cm². Jaka jest długość okręgu ograniczającego to koło?",
      o:["6π cm","12π cm","36π cm","72π cm"], c:1,
      w:"Z πr² = 36π wychodzi r = 6, a obwód to 2πr = 12π cm. Droga zawsze prowadzi przez promień: z pola liczymy promień, z promienia obwód. Jedna uwaga praktyczna: długość okręgu i pole koła weszły do zakresu egzaminu dopiero po zmianie podstawy w 2024 r., więc starsze zbiory zadań mogą tego działu w ogóle nie mieć." },

    { a:"IV", p:3, ty:"open",
      t:"W szkolnym konkursie wzięło udział 96 uczniów. Dziewcząt było o 12 więcej niż chłopców. Ilu chłopców wzięło udział w konkursie?",
      hint:"Rozwiązanie zapisz na kartce. W polu poniżej wpisz samą liczbę chłopców.",
      acc:["42"], ph:"np. 42",
      model:"x to liczba chłopców, x + 12 to liczba dziewcząt.\nx + (x + 12) = 96, stąd 2x = 84 i x = 42.\nBez równania: (96 − 12) : 2 = 42.\nOdp. 42 chłopców.\nSprawdzenie: 42 + 54 = 96 oraz 54 − 42 = 12.",
      crit:[
        "Oznaczyłem/oznaczyłam obie wielkości (np. x oraz x + 12) albo opisałem/opisałam rozumowanie słowami.",
        "Ułożyłem/ułożyłam poprawne równanie lub poprawny rachunek prowadzący do wyniku.",
        "Zapisałem/zapisałam odpowiedź pełnym zdaniem i sprawdziłem/sprawdziłam oba warunki zadania."
      ],
      w:"Częsty błąd to 96 : 2 = 48, czyli pominięcie warunku o 12 więcej. Sprawdzenie w warunkach zadania wyłapuje go od razu i właśnie dlatego wymuszaj je jako nawyk, nawet gdy uczeń jest pewny wyniku." },

    { a:"IV", p:3, ty:"open",
      t:"Bok kwadratu wydłużono o 20%. Uzasadnij, że pole nowego kwadratu jest większe od pola kwadratu wyjściowego o 44%.",
      hint:"Uzasadnienie zapisz na kartce. W polu poniżej wpisz samą liczbę procent.",
      acc:["44","44%"], ph:"np. 44",
      model:"a to bok wyjściowy, P = a².\nNowy bok: 1,2a. Nowe pole: (1,2a)² = 1,44a².\nPrzyrost: 1,44a² − a² = 0,44a², czyli 0,44a² : a² = 44%.\nNa liczbach: a = 10 daje P = 100, nowy bok 12 daje P₁ = 144, przyrost 44%.\nSkąd biorą się te dodatkowe 4 punkty procentowe: dobudowany pasek to dwa prostokąty po 0,2a² oraz mały kwadracik 0,04a² w rogu.",
      crit:[
        "Zapisałem/zapisałam nowy bok jako 1,2a (albo policzyłem/policzyłam go na konkretnej liczbie).",
        "Obliczyłem/obliczyłam pole nowego kwadratu jako 1,44a² (albo 144 dla a = 10).",
        "Porównałem/porównałam oba pola i zapisałem/zapisałam wniosek, że przyrost wynosi 44%."
      ],
      w:"Najczęstsza błędna odpowiedź to 20%, czyli założenie, że skoro bok rośnie o jedną piątą, to pole rośnie tak samo. Druga to 40%, z pomylenia kwadratu z podwojeniem. Uwaga dla oceniającego: sprawdzenie na liczbie a = 10 jest przykładem, a nie dowodem, i podstawa programowa wymaga, żeby uczeń widział tę różnicę." }
  ]
};
