/* Karta diagnostyczna E8, dane testu z języka polskiego */

window.TEST = {
  key: "pol",
  name: "Język polski",
  short: "POL",
  minutes: 30,
  total: 20,
  desc: "16 zadań wokół trenu Kochanowskiego, gramatyki, lektur obowiązkowych i formy użytkowej.",
  tools: "Bez słowników, tak jak na egzaminie. Zadania 4 i 16 wymagają napisania dłuższej odpowiedzi.",

  areas: {
    LIT: "Kształcenie literackie i kulturowe",
    JEZ: "Kształcenie językowe",
    LEK: "Znajomość lektur obowiązkowych",
    TWO: "Tworzenie wypowiedzi"
  },

  passages: {
    tren: {
      label: "Tekst: Jan Kochanowski, Tren VII",
      html:
        '<p class="verse">Nieszczęsne ochędóstwo, żałosne ubiory\nMojej namilszej cory!\nPo co me smutne oczy za sobą ciągniecie?\nŻalu mi przydajecie.\nJuż ona członeczków swych wami nie odzieje —\nNie masz, nie masz nadzieje!\nUjął ją sen żelazny, twardy, nieprzespany…\nJuż letniczek pisany\nI uploteczki wniwecz, i paski złocone,\nMatczyne dary płone.\nNie do takiej łóżnice, moja dziewko droga,\nMiała cię mać uboga\nDoprowadzić! Nie takąć dać obiecowała\nWyprawę, jakąć dała!\nGiezłeczkoć tylko dała a lichą tkaneczkę;\nOjciec ziemie bryłeczkę\nW główki włożył. — Niestetyż, i posag, i ona\nW jednej skrzynce zamkniona!</p>' +
        '<p class="src">Lektura obowiązkowa dla klas VII–VIII</p>' +
        '<p class="gloss"><b>ochędóstwo</b>: strój, ozdoby · <b>cora</b>: córka · <b>letniczek</b>: letnia sukienka · <b>uploteczki</b>: wstążki do włosów · <b>płone</b>: daremne · <b>łóżnica</b>: łoże (tu małżeńskie) · <b>mać</b>: matka · <b>giezłeczko</b>: koszulka (tu śmiertelna) · <b>tkaneczka</b>: chusta · <b>w główki</b>: pod głowę</p>'
    }
  },

  q: [
    { a:"LIT", p:1, pass:"tren", t:"Kto jest osobą mówiącą w wierszu i do kogo się bezpośrednio zwraca?",
      o:["mówi matka, adresatem jest zmarła córka","mówi ojciec, adresatem są ubrania i ozdoby zmarłej córki","mówi córka, adresatem są rodzice","mówi narrator, adresatem jest czytelnik"], c:1,
      w:"Pierwsze wersy to zwrot do rzeczy: „Nieszczęsne ochędóstwo…”. Że mówi ojciec, widać po wersie „Ojciec ziemie bryłeczkę w główki włożył”, a o matce jest mowa w trzeciej osobie. Pilnuj nazewnictwa: w wierszu mówi podmiot liryczny, narrator występuje w epice, a pomylenie tych dwóch pojęć kosztuje punkt w zadaniach otwartych." },

    { a:"LIT", p:1, pass:"tren", t:"Sformułowanie „sen żelazny” to",
      o:["porównanie","przenośnia (metafora)","apostrofa","neologizm"], c:1,
      w:"Sen nie bywa dosłownie żelazny, więc znaczenie jest przenośne. Test jest prosty: sprawdź, czy zdanie może być prawdziwe dosłownie. Jeśli nie, to metafora. Porównanie poznasz po słowach jak, niby, jakby." },

    { a:"LIT", p:1, pass:"tren", t:"Zwrot „Nieszczęsne ochędóstwo, żałosne ubiory / Mojej namilszej cory!” to",
      o:["apostrofa","epifora","anafora","onomatopeja"], c:0,
      w:"Apostrofa to uroczysty zwrot wprost do adresata, tutaj do przedmiotów po zmarłej. Anafora powtarza słowa na początku wersów i akurat w tym trenie też ją znajdziesz: „Nie masz, nie masz nadzieje”. Epifora robi to samo na końcu wersu." },

    { a:"LIT", p:2, ty:"open", pass:"tren",
      t:"Wyjaśnij, na czym polega kontrast, który Kochanowski buduje w czterech ostatnich wersach utworu.",
      hint:"Napisz 2–3 zdania. Poprawność językowa i ortograficzna nie jest tu oceniana.",
      ph:"Twoja odpowiedź…", long:true,
      model:"Poeta zestawia wyprawę ślubną z pogrzebem. Zamiast posagu, wyprawy i łoża małżeńskiego, które matka córce obiecowała, dziewczynka dostaje śmiertelną koszulkę, lichą chustę i grudkę ziemi pod głowę. Ostatni wers domyka kontrast: „i posag, i ona / W jednej skrzynce zamkniona”. Skrzynia posagowa okazuje się trumną.",
      crit:[
        "Nazwałem/nazwałam oba człony kontrastu (ślub i wyprawa ↔ pogrzeb i śmierć).",
        "Odwołałem/odwołałam się do konkretnych słów lub obrazów z tekstu."
      ],
      w:"Najczęstszy błąd to odpowiedź zbyt ogólna, w rodzaju: jest smutno, a powinno być wesoło, bez wskazania, co konkretnie zostało zestawione. Pomaga prosty schemat: miało być X, a jest Y. Miała być wyprawa ślubna, a jest pogrzebowa." },

    { a:"LIT", p:1, pass:"tren", t:"Który zapis najtrafniej oddaje główną myśl utworu?",
      o:["Pamiątki po zmarłej córce potęgują ból ojca i przypominają o przyszłości, która się nie wydarzy.","Ojciec przekonuje sam siebie, że śmierć jest tylko snem, z którego można się obudzić.","Matka wyrzuca sobie, że nie przygotowała córce dość bogatej wyprawy.","Poeta chwali skromność pogrzebu jako wyraz pokory wobec Boga."], c:0,
      w:"Wiersz zaczyna się od pytania, po co ubrania przyciągają wzrok ojca, i sam na nie odpowiada: „Żalu mi przydajecie”. Rzeczy bolą, bo pokazują życie, którego nie będzie. Przy pytaniu o główną myśl każ uczniowi wskazać przy każdej odpowiedzi konkretny wers. Czego nie da się wskazać, to odpada." },

    { a:"JEZ", p:1, t:"W zdaniu „Ojciec włożył jej w główki bryłeczkę ziemi” wyraz ziemi występuje w formie",
      o:["mianownika","dopełniacza","celownika","miejscownika"], c:1,
      w:"Bryłeczkę czego? Ziemi. To pytanie dopełniacza. Kolejność jest zawsze ta sama: najpierw znajdź wyraz nadrzędny, czyli bryłeczkę, i dopiero od niego zadaj pytanie. Miejscownik odpada od razu, bo nie występuje bez przyimka: w ziemi, o ziemi." },

    { a:"JEZ", p:1, t:"Które zdanie jest zdaniem złożonym podrzędnie?",
      o:["Przeczytałem tren i długo o nim myślałem.","Kiedy skończyłem czytać, zapadła cisza.","Wziąłem książkę, otworzyłem ją, zacząłem czytać.","Ani nie płakał, ani nie mówił."], c:1,
      w:"Zapadła cisza kiedy? Kiedy skończyłem czytać. Da się zadać pytanie od jednego zdania do drugiego, więc złożenie jest podrzędne. Zdanie podrzędne wprowadzają kiedy, gdy, ponieważ, że, aby, choć, który. Współrzędne: i, oraz, ale, albo, ani." },

    { a:"JEZ", p:1, t:"W którym zdaniu występuje imiesłowowy równoważnik zdania?",
      o:["Czytając tren, zamyśliłem się.","Tren został napisany przez Kochanowskiego.","Chciałbym przeczytać cały cykl trenów.","Kochanowski, poeta z Czarnolasu, pisał po polsku."], c:0,
      w:"Czytając to imiesłów przysłówkowy z końcówką -ąc, który zastępuje całe zdanie podrzędne. Szukaj końcówek -ąc oraz -łszy i -wszy. Jest przy tym warunek, o którym uczniowie zapominają: obie części muszą mieć ten sam podmiot. Zdanie „Czytając tren, zapadła cisza” jest błędne, bo cisza niczego nie czytała." },

    { a:"JEZ", p:1, t:"Związek frazeologiczny „rzucać grochem o ścianę” znaczy",
      o:["mówić coś bez żadnego skutku","mówić bardzo szybko i niewyraźnie","kłócić się o drobiazgi","bezmyślnie powtarzać cudze słowa"], c:0,
      w:"Groch rzucony o ścianę odbija się i nic po nim nie zostaje. Tak samo działają słowa kierowane do kogoś, kto ich nie przyjmuje. Gdy uczeń nie zna związku, niech wyobrazi sobie sytuację dosłownie i zapyta, do czego jest podobna. Przy większości frazeologizmów to wystarcza." },

    { a:"JEZ", p:1, t:"W którym szeregu wszystkie wyrazy zapisano poprawnie?",
      o:["wziąść, na pewno, rzeczywiście","wziąć, na pewno, rzeczywiście","wziąć, napewno, rzeczywiście","wziąć, na pewno, żeczywiście"], c:1,
      w:"Poprawnie: wziąć, nigdy wziąść. Na pewno zawsze rozdzielnie. Rzeczywiście przez rz. W wypracowaniu progi są ostre, bo 2 punkty dostaje się przy najwyżej jednym błędzie, a zero już przy czterech. Ortografia i interpunkcja wypadają w kraju najsłabiej ze wszystkich kryteriów i to zwykle tutaj uciekają punkty, których uczeń w ogóle nie zauważa." },

    { a:"JEZ", p:1, t:"W którym zdaniu przecinek postawiono poprawnie?",
      o:["Chciałbym wiedzieć, kto to napisał.","Chciałbym wiedzieć kto, to napisał.","Chciałbym, wiedzieć kto to napisał.","Chciałbym wiedzieć kto to napisał."], c:0,
      w:"Przecinek stoi przed wyrazem, który wprowadza zdanie podrzędne: że, żeby, aby, bo, ponieważ, gdy, kiedy, jeśli, który, kto, co, gdzie. Druga reguła jest odwrotna: przed pojedynczym i, oraz, albo, lub, ani przecinka nie stawiamy. Te dwie zasady załatwiają większość przecinków w wypracowaniu ósmoklasisty." },

    { a:"LEK", p:1, t:"Który utwór NIE jest obecnie lekturą obowiązkową dla klas VII–VIII?",
      o:["Aleksander Fredro, Zemsta","Ignacy Krasicki, Żona modna","Adam Mickiewicz, Dziady część II","Juliusz Słowacki, Balladyna"], c:1,
      w:"„Żonę modną” wykreślono z podstawy w 2024 r. Sześć lektur obowiązkowych w całości dla klas VII–VIII to teraz Opowieść wigilijna, Zemsta, Kamienie na szaniec, Dziady cz. II, Mały Książę i Balladyna. To zadanie nie sprawdza samej lektury, tylko czy uczeń pracuje na aktualnej liście. Do utworów wykreślonych wolno się zresztą odwoływać w wypracowaniu aż do 2028 r." },

    { a:"LEK", p:1, t:"Akcja „Kamieni na szaniec” Aleksandra Kamińskiego rozgrywa się głównie",
      o:["w Warszawie w czasie okupacji niemieckiej","w Krakowie przed I wojną światową","na Kresach w czasie powstania styczniowego","w Poznaniu w latach trzydziestych XX wieku"], c:0,
      w:"Warszawa, lata 1939–1943. Alek, Rudy i Zośka są harcerzami Szarych Szeregów, a kulminacją akcja pod Arsenałem. Do każdej lektury warto mieć jedną kartkę: czas i miejsce, bohaterowie, najważniejsze wydarzenie, problematyka oraz temat wypracowania, do którego ta lektura pasuje. Ostatnia rubryka jest najważniejsza i najczęściej jej brakuje." },

    { a:"LEK", p:1, t:"Spór między Cześnikiem Raptusiewiczem a Rejentem Milczkiem w „Zemście” Fredry dotyczy",
      o:["muru granicznego dzielącego wspólny zamek","spadku po zmarłym krewnym","wyniku procesu sądowego o las","ręki Podstoliny"], c:0,
      w:"Obaj mieszkają w dwóch połowach jednego zamku i to awantura o naprawę muru uruchamia całą komedię. Podstolina pojawia się w intrydze, ale nie jest przyczyną sporu. Cały Fredro stoi tu na kontraście dwóch postaci: Cześnik gwałtowny i hałaśliwy, Rejent cichy i obłudnie pobożny." },

    { a:"LEK", p:1, t:"W „Chłopcach z Placu Broni” Ferenca Molnára Nemeczek był",
      o:["jedynym szeregowcem wśród samych oficerów","przywódcą Czerwonych Koszul","najstarszym z chłopców broniących placu","bratem Boki"], c:0,
      w:"Ernest Nemeczek jest jedynym szeregowcem w oddziale i zarazem najwierniejszym z całej grupy. Czerwonymi Koszulami dowodzi Feri Acz, chłopcami z placu Boka. Jedna rzecz do sprawdzenia w kalendarzu: przepis, który ograniczał zadania o lekturach z klas IV–VI do fragmentu podanego w arkuszu, obejmował wyłącznie lata 2024/2025 i 2025/2026. Późniejsze roczniki muszą znać te lektury normalnie." },

    { a:"TWO", p:4, ty:"open",
      t:"Napisz ogłoszenie o zbiórce książek dla szkolnej biblioteki. Uwzględnij: jakie książki zbieracie, gdzie i do kiedy można je przynosić oraz kto organizuje zbiórkę.",
      hint:"Ogłoszenie jest krótkie i rzeczowe. Pamiętaj o nagłówku i podpisie nadawcy.",
      ph:"OGŁOSZENIE…", long:true,
      model:"OGŁOSZENIE\n\nSamorząd Uczniowski organizuje zbiórkę książek dla szkolnej biblioteki.\nZbieramy powieści, książki popularnonaukowe i komiksy w dobrym stanie.\nKsiążki można przynosić do biblioteki (sala 12) codziennie w godzinach 8.00–15.00 do 30 listopada.\n\nSamorząd Uczniowski",
      crit:[
        "Zachowałem/zachowałam formę ogłoszenia: jest nagłówek oraz podpis nadawcy.",
        "Napisałem/napisałam, jakie książki są zbierane.",
        "Podałem/podałam miejsce oraz termin przynoszenia książek.",
        "Tekst jest zwięzły i rzeczowy, bez zbędnych fragmentów i bez formy listu."
      ],
      w:"Punkt najczęściej ucieka przez brak podpisu nadawcy, na drugim miejscu jest pominięty termin. Ogłoszenie nie zaczyna się od Cześć i nie kończy Pozdrawiam, bo to nie list. W arkuszu z 2025 r. analogiczne zadanie miało poziom wykonania 38%, więc nie jest to formalność do odhaczenia." }
  ]
};

/* rejestr dla strony wynik.html, która musi znać wszystkie trzy testy naraz */
window.TESTS = window.TESTS || {};
window.TESTS[window.TEST.key] = window.TEST;
