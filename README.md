# Frontend-Log-in-page
Från en uppgift till en annan!
## Detta repo startade som...
En enkel inloggningsuppgift där vi fick jobba mot följande krav:
-  Skapa en inloggningssida som visar dynamiskt rätt innehåll hela tiden.
-  Det går att logga in.
-  Inloggning ska sparas i localStorage.
-  Det går att logga ut.
-  Det skall finnas fler användare.
-  Välkomstsidan skall dynamiskt visa rätt användarnamn beroende på vem som är inloggad.
-  Det skall gå att skapa och logga in med en ny användare (Då skall ett nytt formulär för detta visas på innehålls-sidan).

## Sedan utvecklades det till...
Du ska nu utveckla en headless inloggningssida:
-  Utgå från din inloggningssida från Javascript grundkursen.
-  Flytta över inloggnigslogiken till servern.
-  Utveckla ett API (Med express js) som du kan anropa från front end applikationen som sedan skickar namn och lösenord till en route på servern.
-  Skapa flera användare till ett object array (global array) på servern så att du kan logga in med olika användare. Varje användare skall ha ett unikt ID.
-  Servern skall sedan kolla om det är en korrekt inloggning och i så fall svara med användarens ID, spara detta i localStorage på klienten. 
-  Vid felaktig inloggning skall en error skickas tillbaka.

### Ni hittar Backend repot här: 
