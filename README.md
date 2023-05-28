# Real time web - Chris Gabriel III
## a Course at the HVA to create a web app with real time functionality

# Beasties!
![image](https://github.com/ChrisvanHvA/real-time-web/assets/90341211/6c31f2f7-5b62-41af-934e-b5c06a1fdff4)

## Beschrijving
Met deze applicatie kan je in de thema van een paar dieren in een denkbeeldig bos chillen en praten met andere dieren, het bos is verdeelt in een paar gebieden die rooms zijn, waardoor je ook in privacy kan praten.  
je kan ook door middel van de kattenhoofd willekeurige plaatjes van katten sturen om de humeur te verbeteren of juist om iemand te irriteren.
In het bos zal je bernard boom tegen komen die je verteld wanneer mensen joinen en leaven, ook zal hij je welkom heten wanneer je een room joint.


[link naar de Railway hosted app](https://real-time-web-production.up.railway.app/)


### Functionaliteiten:
-Username aanmaken
-Chatrooms kiezen 
-Rol aan jezelf assignen
-Katten images posten via een API
-Van chatrooms wisselen

### Functies die er aan de backside gebeuren
-Opslaan van users in een array
-Verwijderen van oude berichten
-Sturen van een welkomstbericht aan alleen nieuwe users
-Sturen van een bericht wanneer een nieuwe user joined
-Sturen van een bericht wanneer iemand de Room verlaat
-De naam van de room boven aan het scherm laten zien
-Fetchen van afbeeldingen met de api en deze posten.
-Rollen van users onthouden en hun namen aanpassen op basis hiervan.


## Hoe installeer ik het?

### Clone deze repo

```bash
git clone [git@github.com:ChrisvanHvA/real-time-web.git
```

### Installeer de dependencies

```bash
npm install
```

### Run de applicatie op je localhost
```bash
npm start
```

## Concept

Het idee kwam nadat ik op papier wat ocncepten aan het uitschrijven was voor een chat applicatie, ik moest eerst terug denken aan een chat app die er jaren geleden was waarbij je anoniem met elkaar kon praten, eerst had ik zin om deze uit te werken maar besloot daarna dat dit geen veilige en verantwoordelijke omgeving zou worden.
Het tweede idee dat ik kreeg was om een chat app te maken waarbij je bepaalde characters uit videogames kon zijn, dit idee klonk al interessanter maar was nog niet origineel genoeg.

Uitendelijk besloot ik om een bos te maken waarin je een dier kan zijn en tegen andere dieren kan praten.
de applicatie heet daarom ook Beasties! (mix tussen besties en beasts).


### Reflectie

Van de functionaliteiten die ik wou toevoegen ben ik nog vrij positief, ik heb wel gemerkt dat ik vaak tegen een metaforische muur aanliep waarbij ik niet meer wist hoe ik verder moest werken om een bepaalde functie toe te voegen, maar als iemand met vrijwel geen ervaring in dit vakgebied begreep ik wel waarom en was dit niet een grote frustratie.
In wederzijd had ik nog wel de applicatie verder willen uitwerken met meer functies zoals het aanpassen van je profielfoto, verwijderen van oude berichten en misschien nog iets van een mini-game.

Ik begon dit vak met vrijwel geen kennis van live code maken en werken met sockets, dus de instapdrempel was nogal hoog, vooral omdat ik tijdens de intro nogal ziek was.
Uiteindelijk heb ik wel vrij veel kunnen leren van dit blok en ben ik ook erg positief over het gebruik van sockets.
Ik hoop dat ik binnenkort wat meer tijd krijg om hier meer mee te kunnen experimenteren, aangezien ik de resultaten uit mijn code erg interessant vond om te zien.
Ook hoop ik dat ik hier nog verder in kan verdiepen om nieuwe applicaties te verzinnen die gebruik maken van sockets.
