/* Karta diagnostyczna E8 — język angielski */

window.TEST = {
  key: "ang",
  name: "Język angielski",
  short: "ANG",
  minutes: 30,
  total: 20,
  desc: "18 zadań: funkcje językowe, czytanie, środki językowe i krótka wypowiedź pisemna.",
  tools: "Bez słowników. Test nie sprawdza rozumienia ze słuchu — ten obszar trzeba przećwiczyć na arkuszu CKE z nagraniem.",

  areas: {
    FUN: "Znajomość funkcji językowych",
    CZY: "Rozumienie tekstów pisanych",
    SRO: "Znajomość środków językowych",
    PIS: "Wypowiedź pisemna"
  },

  passages: {
    email: {
      label: "Text — Ella's email",
      html:
        '<p>Hi Maya,</p>' +
        '<p>You won’t believe what happened at our school last week. Our science teacher, Mr Grant, announced a competition: every class had to build something useful out of things people usually throw away. My group decided to make a bird feeder out of plastic bottles.</p>' +
        '<p>At first it was a disaster. We used the wrong glue and everything fell apart twice. Tom wanted to give up, but Lena found a video online showing how to join the bottles with wire instead. It took us three afternoons, but in the end it looked really good.</p>' +
        '<p>We didn’t win — a class from year 7 built a lamp powered by old batteries — but Mr Grant put our feeder in the school garden. Now I can see birds from the biology classroom window every morning.</p>' +
        '<p>Write back soon!<br>Ella</p>'
    }
  },

  q: [
    { a:"FUN", p:1, t:"Chcesz zaprosić kolegę do kina. Co powiesz?",
      o:["Would you like to go to the cinema with me?","Do you like the cinema?","Have you been to the cinema?","I go to the cinema every week."], c:0,
      w:"„Would you like to…?” to standardowe zaproszenie. Pozostałe zdania są poprawne gramatycznie — i o to chodzi. Zadanie sprawdza dopasowanie formy do INTENCJI, nie poprawność. Najpierw nazwij po polsku, co chcesz zrobić." },

    { a:"FUN", p:1, t:"Kolega mówi: „I've broken my leg.” Jak zareagujesz?",
      o:["Congratulations!","Oh no, I'm so sorry to hear that.","Never mind, it's nothing.","That's great news!"], c:1,
      w:"„I'm sorry to hear that” to reakcja na złą wiadomość. Uwaga na pułapkę: „I'm sorry” znaczy zarówno „przepraszam”, jak i „przykro mi” — to dwie różne funkcje." },

    { a:"FUN", p:1, t:"Chcesz poprosić nauczyciela o pozwolenie na otwarcie okna.",
      o:["You must open the window.","Can I open the window, please?","I open the window?","Do you open the window?"], c:1,
      w:"„Can I…?” to pytanie o pozwolenie na WŁASNE działanie. Rozróżniaj: Can I…? — pozwolenie dla siebie; Can you…? — prośba do kogoś; Shall I…? — propozycja, że ja coś zrobię." },

    { a:"FUN", p:1, ty:"text", t:"Uzupełnij dialog. Wpisz maksymalnie trzy wyrazy.",
      m:"X: I'm going to Spain next week.\nY: Really? ______ a nice time!",
      acc:["have"], ph:"wpisz odpowiedź",
      w:"Have a nice time! — utarte życzenie w trybie rozkazującym. Warto znać cały zestaw jako gotowe bloki: Have a good trip / Have fun / Good luck / Get well soon / Congratulations. Uwaga: w tym typie zadania obowiązuje PEŁNA poprawność ortograficzna." },

    { a:"FUN", p:1, t:"Chcesz zapytać koleżankę, czy jej brat lubi matematykę. Które pytanie jest poprawne?",
      o:["Her brother likes maths?","Does her brother like maths?","Is her brother like maths?","Do her brother likes maths?"], c:1,
      w:"Pytanie w Present Simple: does + podmiot + bezokolicznik bez -s. Odpowiedź A to pytanie intonacyjne — po polsku wystarcza, po angielsku NIE i CKE go nie uznaje. Reguła: końcówka -s wędruje na operator, nie może być w dwóch miejscach naraz." },

    { a:"CZY", p:1, pass:"email", t:"The main purpose of Ella's email is to",
      o:["invite Maya to a competition","tell Maya about a school project","ask Maya for help with a project","complain about her science teacher"], c:1,
      w:"Pytania o główną myśl rozwiązuje się PO przeczytaniu całości. Dystraktory opisują rzeczy, które w tekście są — ale jako szczegół, nie jako cel. Technika: streść tekst jednym zdaniem, zanim spojrzysz na odpowiedzi." },

    { a:"CZY", p:1, pass:"email", t:"Ella's group had a problem because",
      o:["they didn't have enough bottles","they used unsuitable glue","Lena refused to help","the teacher changed the rules"], c:1,
      w:"„We used the wrong glue and everything fell apart twice.” W tekście jest „wrong glue”, w odpowiedzi „unsuitable glue” — inne słowo, to samo znaczenie. Szukaj SYNONIMÓW, nie tych samych wyrazów." },

    { a:"CZY", p:1, pass:"email", t:"The competition was won by",
      o:["Ella's group","Tom","a class from year 7","Mr Grant"], c:2,
      w:"„We didn't win — a class from year 7 built a lamp…”. Pułapka jest w przeczeniu. Podkreślaj didn't, never, no, hardly — są krótkie, łatwe do przeoczenia, a odwracają sens całego zdania." },

    { a:"CZY", p:1, pass:"email", t:"Which sentence is TRUE?",
      o:["The bird feeder is now in the school garden.","Ella's group finished the feeder in one afternoon.","Mr Grant built a lamp powered by old batteries.","Ella can see birds from her bedroom window."], c:0,
      w:"„Mr Grant put our feeder in the school garden.” Pozostałe to podmienione szczegóły: było three afternoons; lampę zbudowała klasa z year 7; okno jest w biology classroom, nie w sypialni. Do każdej odpowiedzi wskaż konkretne miejsce w tekście." },

    { a:"CZY", p:1, ty:"text", pass:"email",
      t:"Uzupełnij zdanie PO POLSKU na podstawie tekstu.",
      m:"Zamiast kleju grupa Elli połączyła butelki za pomocą ______.",
      acc:["drutu","drut","drutem"], ph:"wpisz po polsku",
      w:"„…how to join the bottles with wire instead” — wire to drut. To zadanie typu VIII.2. Dwie zasady: odpowiedź musi być PO POLSKU (wpisanie „wire” to zero punktów) i musi pasować gramatycznie do luki („za pomocą drutu”, nie „drut”)." },

    { a:"SRO", p:1, t:"I ______ to London twice.",
      o:["was","have been","am","went"], c:1,
      w:"„Twice” bez określenia kiedy → doświadczenie do teraz → Present Perfect. „Went” byłoby poprawne z określeniem czasu (last year). Sygnały Present Perfect: ever, never, just, already, yet, twice, so far. Sygnały Past Simple: yesterday, last week, ago, in 2020." },

    { a:"SRO", p:1, t:"If it ______ tomorrow, we will stay at home.",
      o:["will rain","rains","rained","is raining"], c:1,
      w:"Okres warunkowy I: If + Present Simple, will + bezokolicznik. Zapamiętaj: „will” nie wchodzi za „if”. Po polsku mówimy „jeśli BĘDZIE padać” — i stąd błąd. Na egzaminie obowiązują tylko okresy warunkowe 0 i I." },

    { a:"SRO", p:1, t:"This is ______ film I have ever seen.",
      o:["the worst","worse","the worse","worst"], c:0,
      w:"„Ever seen” wskazuje stopień najwyższy: bad – worse – the worst. Przedimek „the” jest obowiązkowy. Trzy nieregularne warto znać na pamięć: good–better–the best, bad–worse–the worst, far–further–the furthest." },

    { a:"SRO", p:1, t:"The letter ______ yesterday.",
      o:["was sent","is sent","sent","has sent"], c:0,
      w:"List nie wysyła sam siebie → strona bierna. „Yesterday” → Past Simple: was/were + trzecia forma. Na egzaminie strona bierna obowiązuje TYLKO w Present Simple, Past Simple i Future Simple — „has been sent” jest poza zakresem." },

    { a:"SRO", p:1, ty:"text", t:"Uzupełnij drugie zdanie tak, aby zachowało znaczenie pierwszego. Maksymalnie trzy wyrazy.",
      m:"My sister is a better cook than me.\nI am not ______ my sister.",
      acc:["as good as","as good a cook as"], ph:"wpisz odpowiedź",
      w:"Stopień wyższy zamienia się na konstrukcję „not as … as” ze stopniem równym. Ćwicz pary: She is taller than me → I am not as tall as she is. Pamiętaj o limicie wyrazów — dłuższa odpowiedź nie zostanie uznana." },

    { a:"SRO", p:1, ty:"text", t:"Uzupełnij zdanie, tłumacząc fragment z nawiasu. Maksymalnie trzy wyrazy.",
      m:"You ______ (nie musisz) do it.",
      acc:["don't have to","do not have to","dont have to"], ph:"wpisz odpowiedź",
      w:"„Nie musisz” = brak konieczności = don't have to. NIE mylić z mustn't, które znaczy „nie wolno ci”. To dwa przeciwstawne komunikaty: You don't have to go (nie musisz) kontra You mustn't go (nie wolno ci). Na egzaminie apostrof jest obowiązkowy." },

    { a:"SRO", p:1, ty:"text", t:"Ułóż fragment zdania z podanych wyrazów. Nie zmieniaj ich formy.",
      m:"(been / how / you / long / have)\n______ waiting?",
      acc:["how long have you been"], ph:"wpisz cały fragment",
      w:"Szyk pytania: wyraz pytający + operator + podmiot + reszta. How long + have + you + been + waiting? Znajdź najpierw OPERATOR (do/does/did/have/has/is/are/will) — on jest kotwicą całego szyku." },

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
      w:"Trzy zasady z informatora: 0 punktów za treść zeruje WSZYSTKIE pozostałe kryteria; praca krótsza niż 40 wyrazów jest oceniana wyłącznie za treść; very, much, many, a lot oraz stopień wyższy i najwyższy NIE stanowią rozwinięcia podpunktu." }
  ]
};
