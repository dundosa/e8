# Karta diagnostyczna E8

Trzy testy diagnostyczne przed egzaminem ósmoklasisty: matematyka, język polski,
język angielski. Każdy po 20 punktów i mniej więcej pół godziny.

Strona jest w całości statyczna, czyli same pliki HTML, CSS i JS. Nie potrzebuje
serwera ani bazy danych. Odpowiedzi zapisują się w przeglądarce ucznia
(`localStorage`), więc nic nie wychodzi na zewnątrz i poza plikami nie ma czego
hostować.

## Wdrożenie przez przeglądarkę

Nie trzeba instalować gita ani niczego uruchamiać w terminalu.

1. Załóż darmowe konto na <https://github.com> i zaloguj się.
2. Kliknij **+** w prawym górnym rogu, potem **New repository**.
   - **Repository name:** `e8`, bo ta nazwa trafi do adresu strony
   - zaznacz **Public**, ponieważ GitHub Pages działa za darmo tylko dla repozytoriów publicznych
   - nie zaznaczaj „Add a README file”
   - kliknij **Create repository**
3. Na pustej stronie repozytorium kliknij **uploading an existing file**.
4. Przeciągnij do okna przeglądarki zawartość folderu `strona`, czyli pliki
   `index.html`, `matematyka.html`, `polski.html`, `angielski.html`, `.nojekyll`
   oraz cały folder `assets`.
   Uwaga na jedną rzecz: przeciągasz zawartość folderu, a nie sam folder.
   Plik `index.html` musi wylądować w korzeniu repozytorium.
5. Na dole kliknij **Commit changes**.
6. Wejdź w zakładkę **Settings**, a w menu po lewej w **Pages**.
   - **Source:** `Deploy from a branch`
   - **Branch:** `main`, folder `/ (root)`, potem **Save**
7. Odczekaj minutę lub dwie i odśwież stronę Settings → Pages. Pojawi się adres:

   ```
   https://TWOJA-NAZWA-UZYTKOWNIKA.github.io/e8/
   ```

   Ten adres wysyłasz drugiej osobie. Otwiera się na telefonie, tablecie
   i komputerze, bez instalowania czegokolwiek i bez zakładania konta.

Pierwszy build potrafi stać w kolejce dłużej niż kolejne. Jeśli po kilku minutach
widzisz stronę 404, wymuś przebudowę: dowolna zmiana w repozytorium uruchamia ją
od nowa.

## Wdrożenie z terminala

Jeśli masz zainstalowanego gita i `gh`:

```bash
cd "c:/Users/andre/Desktop/e8/strona"
git init -b main
git add .
git commit -m "Karta diagnostyczna E8"
gh repo create e8 --public --source=. --push
gh api -X POST repos/:owner/e8/pages -f "source[branch]=main" -f "source[path]=/"
```

## Aktualizacja treści

Wszystkie zadania siedzą w trzech plikach w folderze `assets`:

| plik | co zawiera |
|---|---|
| `dane-matematyka.js` | 16 zadań z matematyki |
| `dane-polski.js` | 16 zadań z polskiego oraz tekst trenu |
| `dane-angielski.js` | 18 zadań z angielskiego oraz tekst e-maila |

Format jednego zadania:

```js
{ a:"III",              // klucz obszaru (z sekcji areas powyżej)
  p:1,                  // liczba punktów
  t:"treść polecenia",
  m:"blok monospace",   // opcjonalnie: dialog, wzór, luka
  hint:"wskazówka",     // opcjonalnie
  pass:"tren",          // opcjonalnie: klucz tekstu źródłowego
  o:["A","B","C","D"],  // zadanie zamknięte
  c:1,                  // indeks poprawnej odpowiedzi (0 = A)
  w:"wyjaśnienie pokazywane w wynikach" }
```

Typy inne niż zamknięty:

- `ty:"text"` razem z `acc:["uznawana","odpowiedź"]` daje krótką odpowiedź sprawdzaną
  automatycznie, z pominięciem wielkości liter i interpunkcji,
- `ty:"open"` razem z `model:"..."` i `crit:[...]` daje zadanie otwarte oceniane
  samodzielnie. Liczba kryteriów musi się równać liczbie punktów `p`, bo każde
  kryterium to jeden punkt. To jedyna twarda reguła w tym formacie.

Po edycji wgraj zmieniony plik przez **Add file → Upload files** w repozytorium.
Strona zaktualizuje się w ciągu minuty. Uczeń może potrzebować odświeżyć ją
z pominięciem pamięci podręcznej, a na telefonie zamknąć i otworzyć kartę.

## Kod wyniku

Pod kartą wyników uczeń znajdzie sekcję „Wyślij wynik nauczycielowi”. Może podpisać
się imieniem i skopiować link albo sam kod. Nauczyciel otwiera link i widzi tę samą
kartę wyników co uczeń: punkty, obszary, każdą odpowiedź, samoocenę zadań otwartych.

Cały wynik siedzi w kodzie, a kod w części adresu po znaku `#`, której przeglądarka
nigdy nie wysyła na serwer. Nie ma bazy danych, konta ani logowania. Dla pełnego
testu z polskiego, razem z dwiema dłuższymi wypowiedziami, kod ma około 420 znaków.

Gdyby komunikator popsuł link, uczeń wysyła sam kod, a nauczyciel wkleja go na
stronie `wynik.html`. Strona przyjmuje zarówno kod, jak i wklejony cały link.

Nauczyciel może poprawić samoocenę zadań otwartych i wynik przeliczy się od razu,
ale zmiana zostaje w jego przeglądarce i nie wraca do ucznia.

## Prywatność

Adres jest publiczny, więc wejdzie na niego każdy, kto go zna. Nie ma logowania
ani zbierania danych i żadna odpowiedź nie opuszcza urządzenia ucznia. Wyniki
zobaczysz tylko wtedy, gdy uczeń pokaże ci ekran albo zrobi zrzut.

Z tego samego powodu trzymaj poza repozytorium notatki dla nauczyciela.
Zawierają klucze odpowiedzi.

## Podgląd lokalny

Otwórz `index.html` podwójnym kliknięciem. Działa prosto z pliku, bez serwera.
