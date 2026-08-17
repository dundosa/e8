/* Karta diagnostyczna E8, dane testu z języka angielskiego */

window.TEST = {
  key: "ang",
  name: "Język angielski",
  short: "ANG",
  minutes: 30,
  total: 20,
  desc: "18 zadań: funkcje językowe, czytanie, środki językowe i krótka wypowiedź pisemna.",
  tools: "Bez słowników. Rozumienia ze słuchu tutaj nie ma, bo wymaga nagrania. Ten jeden obszar przerobisz na archiwalnym arkuszu CKE.",

  areas: {
    FUN: "Znajomość funkcji językowych",
    CZY: "Rozumienie tekstów pisanych",
    SRO: "Znajomość środków językowych",
    PIS: "Wypowiedź pisemna"
  },

  passages: {
    email: {
      label: "Text: Ella's email",
      html:
        '<p>Hi Maya,</p>' +
        '<p>You won’t believe what happened at our school last week. Our science teacher, Mr Grant, announced a competition: every class had to build something useful out of things people usually throw away. My group decided to make a bird feeder out of plastic bottles.</p>' +
        '<p>At first it was a disaster. We used the wrong glue and everything fell apart twice. Tom wanted to give up, but Lena found a video online showing how to join the bottles with wire instead. It took us three afternoons, but in the end it looked really good.</p>' +
        '<p>We didn’t win. A class from year 7 built a lamp powered by old batteries. Still, Mr Grant put our feeder in the school garden, so now I can see birds from the biology classroom window every morning.</p>' +
        '<p>Write back soon!<br>Ella</p>'
    }
  },

  q: [
    { a:"FUN", p:1, t:"Chcesz zaprosić kolegę do kina. Co powiesz?",
      o:["Would you like to go to the cinema with me?","Do you like the cinema?","Have you been to the cinema?","I go to the cinema every week."], c:0,
      w:"Would you like to…? to standardowe zaproszenie. Pozostałe zdania są poprawne gramatycznie i właśnie na tym polega pułapka. To zadanie sprawdza dopasowanie formy do intencji, a nie poprawność. Zanim uczeń spojrzy na odpowiedzi, niech nazwie po polsku, co chce zrobić." },

    { a:"FUN", p:1, t:"Kolega mówi: „I've broken my leg.” Jak zareagujesz?",
      o:["Congratulations!","Oh no, I'm so sorry to hear that.","Never mind, it's nothing.","That's great news!"], c:1,
      w:"I'm sorry to hear that to reakcja na złą wiadomość. Pułapka siedzi w samym I'm sorry, bo znaczy i przepraszam, i przykro mi. To dwie różne funkcje językowe, a egzamin lubi je zestawiać obok siebie." },

    { a:"FUN", p:1, t:"Chcesz poprosić nauczyciela o pozwolenie na otwarcie okna.",
      o:["You must open the window.","Can I open the window, please?","I open the window?","Do you open the window?"], c:1,
      w:"Can I…? to pytanie o pozwolenie na własne działanie. Trzy podobne konstrukcje trzeba rozdzielić raz a porządnie. Can I pyta o pozwolenie dla siebie, Can you jest prośbą skierowaną do kogoś, a Shall I propozycją, że coś zrobię." },

    { a:"FUN", p:1, ty:"text", t:"Uzupełnij dialog. Wpisz maksymalnie trzy wyrazy.",
      m:"X: I'm going to Spain next week.\nY: Really? ______ a nice time!",
      acc:["have"], ph:"wpisz odpowiedź",
      w:"Have a nice time! to utarte życzenie w trybie rozkazującym. Takich zwrotów nie da się wyprowadzić z gramatyki, więc trzeba je znać jako gotowe bloki: Have a good trip, Have fun, Good luck, Get well soon, Congratulations. W tym typie zadania obowiązuje pełna poprawność ortograficzna, więc literówka kosztuje punkt." },

    { a:"FUN", p:1, t:"Chcesz zapytać koleżankę, czy jej brat lubi matematykę. Które pytanie jest poprawne?",
      o:["Her brother likes maths?","Does her brother like maths?","Is her brother like maths?","Do her brother likes maths?"], c:1,
      w:"Pytanie w Present Simple ma stały układ: does, podmiot, bezokolicznik bez -s. Odpowiedź A to pytanie intonacyjne. Po polsku takie coś przechodzi, po angielsku nie i CKE go nie uznaje. Zasada warta powtarzania: końcówka -s przenosi się na operator i nie może stać w dwóch miejscach naraz." },

    { a:"CZY", p:1, pass:"email", t:"The main purpose of Ella's email is to",
      o:["invite Maya to a competition","tell Maya about a school project","ask Maya for help with a project","complain about her science teacher"], c:1,
      w:"Pytanie o główną myśl rozwiązuje się dopiero po przeczytaniu całości. Wszystkie dystraktory opisują rzeczy, które w tekście faktycznie są, tyle że jako szczegół, a nie jako cel maila. Najlepiej streścić tekst jednym zdaniem, zanim uczeń w ogóle spojrzy na odpowiedzi." },

    { a:"CZY", p:1, pass:"email", t:"Ella's group had a problem because",
      o:["they didn't have enough bottles","they used unsuitable glue","Lena refused to help","the teacher changed the rules"], c:1,
      w:"W tekście stoi: We used the wrong glue and everything fell apart twice. W odpowiedzi pojawia się unsuitable glue, czyli inne słowo o tym samym znaczeniu. Egzamin prawie nigdy nie powtarza wyrazu z tekstu, więc szukaj synonimu zamiast dosłownej zgodności." },

    { a:"CZY", p:1, pass:"email", t:"The competition was won by",
      o:["Ella's group","Tom","a class from year 7","Mr Grant"], c:2,
      w:"Rozstrzyga zdanie: We didn't win. A class from year 7 built a lamp. Całe zadanie stoi na przeczeniu. Niech uczeń wyrobi sobie nawyk podkreślania didn't, never, no i hardly, bo są krótkie, łatwo je przeoczyć, a odwracają sens zdania." },

    { a:"CZY", p:1, pass:"email", t:"Which sentence is TRUE?",
      o:["The bird feeder is now in the school garden.","Ella's group finished the feeder in one afternoon.","Mr Grant built a lamp powered by old batteries.","Ella can see birds from her bedroom window."], c:0,
      w:"Potwierdza to zdanie: Mr Grant put our feeder in the school garden. Pozostałe odpowiedzi to podmienione szczegóły. W tekście są three afternoons, lampę zbudowała klasa z year 7, a okno jest w biology classroom, nie w sypialni. Przy takich zadaniach każ uczniowi wskazać palcem miejsce w tekście dla każdej odpowiedzi." },

    { a:"CZY", p:1, ty:"text", pass:"email",
      t:"Uzupełnij zdanie PO POLSKU na podstawie tekstu.",
      m:"Zamiast kleju grupa Elli połączyła butelki za pomocą ______.",
      acc:["drutu","drut","drutem"], ph:"wpisz po polsku",
      w:"W tekście jest: how to join the bottles with wire instead. Wire to drut. W tym typie zadania obowiązują dwie zasady i obie kosztują punkt. Odpowiedź musi być po polsku, więc wpisanie wire daje zero. Musi też pasować gramatycznie do luki: za pomocą drutu, a nie drut." },

    { a:"SRO", p:1, t:"I ______ to London twice.",
      o:["was","have been","am","went"], c:1,
      w:"Twice bez podania kiedy oznacza doświadczenie liczone do teraz, czyli Present Perfect. Went byłoby poprawne, gdyby w zdaniu stało last year albo inna data. Sygnały Present Perfect: ever, never, just, already, yet, twice, so far. Sygnały Past Simple: yesterday, last week, ago, in 2020. Te dwie listy najlepiej przepisać obok siebie na jednej kartce." },

    { a:"SRO", p:1, t:"If it ______ tomorrow, we will stay at home.",
      o:["will rain","rains","rained","is raining"], c:1,
      w:"Pierwszy okres warunkowy ma schemat: If plus Present Simple, potem will plus bezokolicznik. Will nie wchodzi po if i to jest cała reguła. Błąd bierze się z polskiego, bo mówimy jeśli będzie padać, a uczeń tłumaczy dosłownie. Na egzaminie obowiązują tylko okresy zerowy i pierwszy." },

    { a:"SRO", p:1, t:"This is ______ film I have ever seen.",
      o:["the worst","worse","the worse","worst"], c:0,
      w:"Ever seen zapowiada stopień najwyższy: bad – worse – the worst. Przedimek the jest obowiązkowy i bez niego odpowiedź nie zostanie uznana. Trzy stopniowania nieregularne trzeba mieć na pamięć: good–better–the best, bad–worse–the worst, far–further–the furthest." },

    { a:"SRO", p:1, t:"The letter ______ yesterday.",
      o:["was sent","is sent","sent","has sent"], c:0,
      w:"List nie wysyła sam siebie, więc potrzebna jest strona bierna. Yesterday ustawia Past Simple, czyli was albo were plus trzecia forma. Zakres egzaminu obejmuje stronę bierną wyłącznie w Present Simple, Past Simple i Future Simple, więc has been sent leży poza programem i nie ma sensu go tu ćwiczyć." },

    { a:"SRO", p:1, ty:"text", t:"Uzupełnij drugie zdanie tak, aby zachowało znaczenie pierwszego. Maksymalnie trzy wyrazy.",
      m:"My sister is a better cook than me.\nI am not ______ my sister.",
      acc:["as good as","as good a cook as"], ph:"wpisz odpowiedź",
      w:"Stopień wyższy zamienia się na konstrukcję not as … as ze stopniem równym. Najlepiej ćwiczyć to parami: She is taller than me daje I am not as tall as she is. Limit wyrazów jest twardy, więc dłuższa odpowiedź nie zostanie uznana, nawet jeśli jest poprawna." },

    { a:"SRO", p:1, ty:"text", t:"Uzupełnij zdanie, tłumacząc fragment z nawiasu. Maksymalnie trzy wyrazy.",
      m:"You ______ (nie musisz) do it.",
      acc:["don't have to","do not have to","dont have to"], ph:"wpisz odpowiedź",
      w:"Nie musisz oznacza brak konieczności, czyli don't have to. Mustn't znaczy coś przeciwnego: nie wolno ci. You don't have to go zostawia wybór, You mustn't go go odbiera. Apostrof w don't jest obowiązkowy i jego brak kosztuje punkt." },

    { a:"SRO", p:1, ty:"text", t:"Ułóż fragment zdania z podanych wyrazów. Nie zmieniaj ich formy.",
      m:"(been / how / you / long / have)\n______ waiting?",
      acc:["how long have you been"], ph:"wpisz cały fragment",
      w:"Szyk pytania jest stały: wyraz pytający, operator, podmiot, reszta. Stąd How long have you been waiting. Przy takich układankach najpierw szukaj operatora, czyli do, does, did, have, has, is, are albo will. On trzyma cały szyk, a reszta układa się wokół niego." },

    { a:"PIS", p:3, ty:"open",
      t:"Napisz e-mail do koleżanki z Anglii o swoim weekendzie. Napisz: gdzie byłeś/byłaś, co tam robiłeś/robiłaś i dlaczego chcesz tam wrócić.",
      hint:"Twój tekst powinien liczyć 40–60 wyrazów.",
      ph:"Hi Kate,…", long:true,
      model:"Hi Kate,\n\nLast weekend I went to the mountains with my family. We walked to a small lake and took hundreds of photos. In the evening we made a fire and my dad played the guitar.\n\nI really want to go back there because the air was so fresh and everything was quiet.\n\nWrite soon!\nOla",
      crit:[
        "Odniosłem/odniosłam się do wszystkich trzech podpunktów polecenia.",
        "Tekst czyta się jako całość i użyłem/użyłam kilku precyzyjnych słów zamiast samych nice, good, interesting.",
        "Nie ma błędów, które utrudniałyby zrozumienie; tekst ma 40–60 wyrazów."
      ],
      w:"Trzy zasady wprost z informatora, wszystkie kosztowne. Zero punktów za treść zeruje pozostałe kryteria. Praca krótsza niż 40 wyrazów jest oceniana wyłącznie za treść. Very, much, many, a lot oraz stopień wyższy i najwyższy nie liczą się jako rozwinięcie podpunktu, a uczniowie opierają na nich połowę zdań." }
  ]
};

/* rejestr dla strony wynik.html, która musi znać wszystkie trzy testy naraz */
window.TESTS = window.TESTS || {};
window.TESTS[window.TEST.key] = window.TEST;
