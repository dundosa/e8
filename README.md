# Karta diagnostyczna E8 — jak wrzucić to na darmową stronę

Strona jest w całości statyczna: same pliki HTML, CSS i JS. Nie potrzebuje serwera,
bazy danych ani domeny. Odpowiedzi zapisują się w przeglądarce ucznia (`localStorage`),
więc nic nie wychodzi na zewnątrz i nie ma czego hostować poza plikami.

## Wersja szybka — GitHub Pages przez przeglądarkę

Nie trzeba instalować gita ani niczego uruchamiać w terminalu.

1. Załóż konto na <https://github.com> (darmowe) i zaloguj się.
2. Kliknij **+** w prawym górnym rogu → **New repository**.
   - **Repository name:** `e8` (nazwa pojawi się w adresie strony)
   - zaznacz **Public** — GitHub Pages działa za darmo tylko dla repozytoriów publicznych
   - **nie** zaznaczaj „Add a README file”
   - kliknij **Create repository**
3. Na pustej stronie repozytorium kliknij **uploading an existing file**.
4. Przeciągnij do okna przeglądarki **zawartość** folderu `strona` — czyli pliki
   `index.html`, `matematyka.html`, `polski.html`, `angielski.html`, `.nojekyll`
   oraz **cały folder** `assets`.
   Ważne: przeciągasz zawartość folderu `strona`, a nie sam folder — plik
   `index.html` musi wylądować w korzeniu repozytorium.
5. Na dole kliknij **Commit changes**.
6. Wejdź w zakładkę **Settings** → w menu po lewej **Pages**.
   - **Source:** `Deploy from a branch`
   - **Branch:** `main`, folder `/ (root)` → **Save**
7. Odczekaj 1–2 minuty i odśwież stronę Settings → Pages. Pojawi się adres:

   ```
   https://TWOJA-NAZWA-UZYTKOWNIKA.github.io/e8/
   ```

   Ten adres wysyłasz drugiej osobie — działa na telefonie, tablecie i komputerze,
   bez instalowania czegokolwiek i bez zakładania konta.

## Wersja z terminalem

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
| `dane-polski.js` | 16 zadań z polskiego + tekst trenu |
| `dane-angielski.js` | 18 zadań z angielskiego + tekst e-maila |

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

- `ty:"text"` + `acc:["uznawana","odpowiedź"]` — krótka odpowiedź, sprawdzana automatycznie
  (porównanie z pominięciem wielkości liter i interpunkcji),
- `ty:"open"` + `model:"..."` + `crit:[...]` — zadanie otwarte, ocena samodzielna;
  **liczba kryteriów musi się równać liczbie punktów `p`**, bo każde kryterium to 1 punkt.

Po edycji wgraj zmieniony plik przez **Add file → Upload files** w repozytorium.
Strona zaktualizuje się w ciągu minuty. Uczeń może potrzebować odświeżyć stronę
z pominięciem pamięci podręcznej (na telefonie: zamknąć i otworzyć kartę).

## Prywatność

Adres jest publiczny — każdy, kto go zna, może wejść. Nie ma logowania ani zbierania
danych: żadna odpowiedź nie opuszcza urządzenia ucznia. Wyniki widzisz tylko wtedy,
gdy uczeń pokaże ci ekran albo zrobi zrzut ekranu.

## Podgląd lokalny

Wystarczy otworzyć `index.html` podwójnym kliknięciem — działa też z pliku,
bez serwera.
