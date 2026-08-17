/* Karta diagnostyczna E8 — język polski */

window.TEST = {
  key: "pol",
  name: "Język polski",
  short: "POL",
  minutes: 30,
  total: 20,
  desc: "16 zadań wokół trenu Kochanowskiego, gramatyki, lektur obowiązkowych i formy użytkowej.",
  tools: "Bez słowników — tak jak na egzaminie. Zadania 4 i 16 wymagają pisania.",

  areas: {
    LIT: "Kształcenie literackie i kulturowe",
    JEZ: "Kształcenie językowe",
    LEK: "Znajomość lektur obowiązkowych",
    TWO: "Tworzenie wypowiedzi"
  },

  passages: {
    tren: {
      label: "Tekst — Jan Kochanowski, Tren VII",
      html:
        '<p class="verse">Nieszczęsne ochędóstwo, żałosne ubiory\nMojej namilszej cory!\nPo co me smutne oczy za sobą ciągniecie?\nŻalu mi przydajecie.\nJuż ona członeczków swych wami nie odzieje —\nNie masz, nie masz nadzieje!\nUjął ją sen żelazny, twardy, nieprzespany…\nJuż letniczek pisany\nI uploteczki wniwecz, i paski złocone,\nMatczyne dary płone.\nNie do takiej łóżnice, moja dziewko droga,\nMiała cię mać uboga\nDoprowadzić! Nie takąć dać obiecowała\nWyprawę, jakąć dała!\nGiezłeczkoć tylko dała a lichą tkaneczkę;\nOjciec ziemie bryłeczkę\nW główki włożył. — Niestetyż, i posag, i ona\nW jednej skrzynce zamkniona!</p>' +
        '<p class="src">Lektura obowiązkowa dla klas VII–VIII</p>' +
        '<p class="gloss"><b>ochędóstwo</b> — strój, ozdoby · <b>cora</b> — córka · <b>letniczek</b> — letnia sukienka · <b>uploteczki</b> — wstążki do włosów · <b>płone</b> — daremne · <b>łóżnica</b> — łoże (tu: małżeńskie) · <b>mać</b> — matka · <b>giezłeczko</b> — koszulka (tu: śmiertelna) · <b>tkaneczka</b> — chusta · <b>w główki</b> — pod głowę</p>'
    }
  },

  q: [
    { a:"LIT", p:1, pass:"tren", t:"Kto jest osobą mówiącą w wierszu i do kogo się bezpośrednio zwraca?",
      o:["matka — do zmarłej córki","ojciec — do ubrań i ozdób zmarłej córki","córka — do rodziców","narrator — do czytelnika"], c:1,
      w:"Pierwsze wersy to zwrot do rzeczy: „Nieszczęsne ochędóstwo…”. Że mówi ojciec, wskazuje wers „Ojciec ziemie bryłeczkę w główki włożył”, a o matce mowa w trzeciej osobie. W liryce mówi PODMIOT LIRYCZNY, nie narrator — narrator jest w epice." },

    { a:"LIT", p:1, pass:"tren", t:"Sformułowanie „sen żelazny” to",
      o:["porównanie","przenośnia (metafora)","apostrofa","neologizm"], c:1,
      w:"Sen nie może być dosłownie żelazny — znaczenie jest przenośne. Test na metaforę: czy to może być prawdą dosłownie? Jeśli nie — metafora. Porównanie rozpoznasz po „jak”, „niby”, „jakby”." },

    { a:"LIT", p:1, pass:"tren", t:"Zwrot „Nieszczęsne ochędóstwo, żałosne ubiory / Mojej namilszej cory!” to",
      o:["apostrofa","epifora","anafora","onomatopeja"], c:0,
      w:"Apostrofa to uroczysty, bezpośredni zwrot do adresata — tu do przedmiotów. Anafora to powtórzenie na POCZĄTKU wersów (w tym trenie też jest: „Nie masz, nie masz”), epifora — na KOŃCU." },

    { a:"LIT", p:2, ty:"open", pass:"tren",
      t:"Wyjaśnij, na czym polega kontrast, który Kochanowski buduje w czterech ostatnich wersach utworu.",
      hint:"Napisz 2–3 zdania. Poprawność językowa i ortograficzna nie jest tu oceniana.",
      ph:"Twoja odpowiedź…", long:true,
      model:"Poeta zestawia wyprawę ślubną z pogrzebem. Zamiast posagu, wyprawy i łoża małżeńskiego, które matka córce „obiecowała”, dziewczynka dostaje śmiertelną koszulkę, lichą chustę i grudkę ziemi pod głowę. Ostatni wers domyka kontrast: „i posag, i ona / W jednej skrzynce zamkniona” — skrzynia posagowa okazuje się trumną.",
      crit:[
        "Nazwałem/nazwałam oba człony kontrastu (ślub i wyprawa ↔ pogrzeb i śmierć).",
        "Odwołałem/odwołałam się do konkretnych słów lub obrazów z tekstu."
      ],
      w:"Najczęstszy błąd to odpowiedź zbyt ogólna („jest smutno, a powinno być wesoło”) bez wskazania, co konkretnie zestawiono. Pomaga schemat „X, a Y”: miała być wyprawa ślubna, a jest pogrzebowa." },

    { a:"LIT", p:1, pass:"tren", t:"Który zapis najtrafniej oddaje główną myśl utworu?",
      o:["Pamiątki po zmarłej córce potęgują ból ojca i przypominają o przyszłości, która się nie wydarzy.","Ojciec przekonuje sam siebie, że śmierć jest tylko snem, z którego można się obudzić.","Matka wyrzuca sobie, że nie przygotowała córce dość bogatej wyprawy.","Poeta chwali skromność pogrzebu jako wyraz pokory wobec Boga."], c:0,
      w:"Wiersz zaczyna się pytaniem, po co ubrania przyciągają wzrok ojca — „Żalu mi przydajecie”. Rzeczy bolą, bo wskazują na życie, którego nie będzie. Technika: do każdej odpowiedzi zapytaj, KTÓRY WERS ją potwierdza. Jeśli nie umiesz wskazać — odpada." },

    { a:"JEZ", p:1, t:"W zdaniu „Ojciec włożył jej w główki bryłeczkę ziemi” wyraz ziemi występuje w formie",
      o:["mianownika","dopełniacza","celownika","miejscownika"], c:1,
      w:"Bryłeczkę CZEGO? — ziemi. To pytanie dopełniacza. Procedura: znajdź wyraz nadrzędny (bryłeczkę), zadaj pytanie OD NIEGO. Wskazówka: miejscownik nigdy nie występuje bez przyimka (w ziemi, o ziemi)." },

    { a:"JEZ", p:1, t:"Które zdanie jest zdaniem złożonym podrzędnie?",
      o:["Przeczytałem tren i długo o nim myślałem.","Kiedy skończyłem czytać, zapadła cisza.","Wziąłem książkę, otworzyłem ją, zacząłem czytać.","Ani nie płakał, ani nie mówił."], c:1,
      w:"Zapadła cisza KIEDY? — kiedy skończyłem czytać. Da się zadać pytanie od jednego zdania do drugiego, więc jest podrzędne. Spójniki kiedy, gdy, ponieważ, że, aby, choć, który wprowadzają zdanie podrzędne; i, oraz, ale, albo, ani — współrzędne." },

    { a:"JEZ", p:1, t:"W którym zdaniu występuje imiesłowowy równoważnik zdania?",
      o:["Czytając tren, zamyśliłem się.","Tren został napisany przez Kochanowskiego.","Chciałbym przeczytać cały cykl trenów.","Kochanowski, poeta z Czarnolasu, pisał po polsku."], c:0,
      w:"„Czytając” to imiesłów przysłówkowy (końcówka -ąc), który zastępuje zdanie podrzędne. Szukaj końcówek -ąc oraz -łszy/-wszy. Uwaga: podmiot obu członów musi być ten sam — „Czytając tren, zapadła cisza” jest błędne, bo cisza nie czytała." },

    { a:"JEZ", p:1, t:"Związek frazeologiczny „rzucać grochem o ścianę” znaczy",
      o:["mówić coś bez żadnego skutku","mówić bardzo szybko i niewyraźnie","kłócić się o drobiazgi","bezmyślnie powtarzać cudze słowa"], c:0,
      w:"Groch rzucony o ścianę odbija się i nic po nim nie zostaje — tak samo słowa kierowane do kogoś, kto ich nie przyjmuje. Gdy nie znasz związku, wyobraź sobie sytuację dosłownie i zapytaj, co ona przypomina." },

    { a:"JEZ", p:1, t:"W którym szeregu wszystkie wyrazy zapisano poprawnie?",
      o:["wziąść, na pewno, rzeczywiście","wziąć, na pewno, rzeczywiście","wziąć, napewno, rzeczywiście","wziąć, na pewno, żeczywiście"], c:1,
      w:"Poprawnie: wziąć (nigdy „wziąść”), na pewno (zawsze rozdzielnie), rzeczywiście (przez rz). W wypracowaniu próg jest ostry: 2 pkt za najwyżej 1 błąd, 0 pkt już przy czterech. To najsłabiej punktowane kryterium w kraju." },

    { a:"JEZ", p:1, t:"W którym zdaniu przecinek postawiono poprawnie?",
      o:["Chciałbym wiedzieć, kto to napisał.","Chciałbym wiedzieć kto, to napisał.","Chciałbym, wiedzieć kto to napisał.","Chciałbym wiedzieć kto to napisał."], c:0,
      w:"Przecinek stawiamy PRZED wyrazem wprowadzającym zdanie podrzędne: że, żeby, aby, bo, ponieważ, gdy, kiedy, jeśli, który, kto, co, gdzie. Druga reguła: nie stawiamy przecinka przed pojedynczym i, oraz, albo, lub, ani." },

    { a:"LEK", p:1, t:"Który utwór NIE jest obecnie lekturą obowiązkową dla klas VII–VIII?",
      o:["Aleksander Fredro, Zemsta","Ignacy Krasicki, Żona modna","Adam Mickiewicz, Dziady część II","Juliusz Słowacki, Balladyna"], c:1,
      w:"„Żona modna” została wykreślona z podstawy w 2024 r. Sześć lektur obowiązkowych w całości dla klas VII–VIII to: Opowieść wigilijna, Zemsta, Kamienie na szaniec, Dziady cz. II, Mały Książę, Balladyna. Do utworów wykreślonych wolno się odwoływać w wypracowaniu do 2028 r." },

    { a:"LEK", p:1, t:"Akcja „Kamieni na szaniec” Aleksandra Kamińskiego rozgrywa się głównie",
      o:["w Warszawie w czasie okupacji niemieckiej","w Krakowie przed I wojną światową","na Kresach w czasie powstania styczniowego","w Poznaniu w latach trzydziestych XX wieku"], c:0,
      w:"Warszawa, lata 1939–1943. Bohaterowie: Alek, Rudy i Zośka — harcerze Szarych Szeregów; kulminacja to akcja pod Arsenałem. Do każdej lektury warto mieć kartkę: czas i miejsce, bohaterowie, kluczowe wydarzenie, problematyka, do jakiego tematu wypracowania pasuje." },

    { a:"LEK", p:1, t:"Spór między Cześnikiem Raptusiewiczem a Rejentem Milczkiem w „Zemście” Fredry dotyczy",
      o:["muru granicznego dzielącego wspólny zamek","spadku po zmarłym krewnym","wyniku procesu sądowego o las","ręki Podstoliny"], c:0,
      w:"Obaj mieszkają w dwóch połowach jednego zamku; awantura o naprawę muru uruchamia całą komedię. Podstolina występuje w intrydze, ale nie jest przyczyną sporu. Zapamiętaj kontrast: Cześnik gwałtowny i hałaśliwy, Rejent cichy i obłudnie pobożny." },

    { a:"LEK", p:1, t:"W „Chłopcach z Placu Broni” Ferenca Molnára Nemeczek był",
      o:["jedynym szeregowcem wśród samych oficerów","przywódcą Czerwonych Koszul","najstarszym z chłopców broniących placu","bratem Boki"], c:0,
      w:"Ernest Nemeczek jest jedynym szeregowcem — i najwierniejszym z całego oddziału. Przywódcą Czerwonych Koszul jest Feri Acz, wodzem chłopców — Boka. Uwaga: przepis, który ograniczał zadania o lekturach klas IV–VI do fragmentu w arkuszu, obejmował tylko lata 2024/2025 i 2025/2026." },

    { a:"TWO", p:4, ty:"open",
      t:"Napisz ogłoszenie o zbiórce książek dla szkolnej biblioteki. Uwzględnij: jakie książki zbieracie, gdzie i do kiedy można je przynosić oraz kto organizuje zbiórkę.",
      hint:"Ogłoszenie jest krótkie i rzeczowe. Pamiętaj o nagłówku i podpisie nadawcy.",
      ph:"OGŁOSZENIE…", long:true,
      model:"OGŁOSZENIE\n\nSamorząd Uczniowski organizuje zbiórkę książek dla szkolnej biblioteki.\nZbieramy powieści, książki popularnonaukowe i komiksy w dobrym stanie.\nKsiążki można przynosić do biblioteki (sala 12) codziennie w godzinach 8.00–15.00 do 30 listopada.\n\nSamorząd Uczniowski",
      crit:[
        "Zachowałem/zachowałam formę ogłoszenia: jest nagłówek oraz podpis nadawcy.",
        "Napisałem/napisałam, jakie książki są zbierane.",
        "Podałem/podałam miejsce oraz termin przynoszenia książek.",
        "Tekst jest zwięzły i rzeczowy — bez zbędnych fragmentów i bez formy listu."
      ],
      w:"Najczęstsza przyczyna utraty punktu to brak podpisu nadawcy, a druga — pominięcie terminu. Ogłoszenie nie zaczyna się od „Cześć!” i nie kończy „Pozdrawiam” — to nie list. W arkuszu z 2025 r. analogiczne zadanie miało poziom wykonania 38%." }
  ]
};
