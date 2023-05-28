# Real time web - Chris Gabriel III
 A course at the HVA to create a web app with real time functionality

# Beasties!
![image](https://github.com/ChrisvanHvA/real-time-web/assets/90341211/6c31f2f7-5b62-41af-934e-b5c06a1fdff4)

## Beschrijving
Met deze applicatie kan je in de thema van een paar dieren in een denkbeeldig bos chillen en praten met andere dieren, het bos is verdeelt in een paar gebieden die rooms zijn, waardoor je ook in privacy kan praten.  
je kan ook door middel van de kattenhoofd willekeurige plaatjes van katten sturen om de humeur te verbeteren of juist om iemand te irriteren.
In het bos zal je bernard boom tegen komen die je verteld wanneer mensen joinen en leaven, ook zal hij je welkom heten wanneer je een room joint.


[link naar de Railway hosted app](https://real-time-web-production.up.railway.app/)


### Functionaliteiten:
- Username aanmaken
- Chatrooms kiezen 
- Rol aan jezelf assignen
- Katten images posten via een API
- Van chatrooms wisselen

### Functies die er aan de backside gebeuren
- Opslaan van users in een array
- Verwijderen van oude berichten
- Sturen van een welkomstbericht aan alleen nieuwe users
- Sturen van een bericht wanneer een nieuwe user joined
- Sturen van een bericht wanneer iemand de Room verlaat
- De naam van de room boven aan het scherm laten zien
- Fetchen van afbeeldingen met de api en deze posten.
- Rollen van users onthouden en hun namen aanpassen op basis hiervan.


## Hoe installeer ik het?

### Clone deze repo

```bash
git clone [github link]
```

### Installeer de dependencies

```bash
npm install
```

### Run de applicatie op je localhost
```bash
npm start
```


## Ontwikkeling

### Concept

Het idee kwam nadat ik op papier wat conncepten aan het uitschrijven was voor een chat applicatie, ik moest eerst terug denken aan een chat app die er jaren geleden was waarbij je anoniem met elkaar kon praten, eerst had ik zin om deze uit te werken maar besloot daarna dat dit geen veilige en verantwoordelijke omgeving zou worden.  
Het tweede idee dat ik kreeg was om een chat app te maken waarbij je bepaalde characters uit videogames kon zijn, dit idee klonk al interessanter maar was nog niet origineel genoeg.

Uitendelijk besloot ik om een bos te maken waarin je een dier kan zijn en tegen andere dieren kan praten.
de applicatie heet daarom ook Beasties! (mix tussen besties en beasts). 

### Getting started

Voor het ontwikkelen van deze applicatie heb ik me verdiept in web sockets en hoe je deze moet implementeren, de gehele applicatie werkt daarom ook met socket functionaliteiten. 
Om de kern van de applicatie te krijgen heb ik onderzoek gedaan naar het maken van chatrooms en het opslaan van users in een array om de informatie te behouden. 

### Versie 1 - Beasties

In de eerste versie van de applicatie had je de optie om je eigen naam te typen en te zeggen in welke room je wou zitten, daarna stuurde hij deze informatie op en kwam je terecht in de room die je had gekozen.

In de room zag je dan jezelf en kreeg je een welkomstbericht van Bernard boom. 
In de room kan je chatten met andere mensen in dezelfde room, de enige optie daarvoor zijn tekstberichten. 
Ook kon je eerst nog niet zien welk dier je had gekozen. 

### Versie 2 - Beasties

In de tweede versie heb ik de stylign een grote overhaul gegeven om het wat fijner op het oog te maken. 
Ook kon je zeggen welk dier je wilt zijn (beer, hond, kat, hert etc.)  

In de tweede versie van de Chatroom zijn de berichten mooier gestyled, de tijd staat er bij en net zoals in de user list wordt er nu aangegeven welk dier je bent, de knop om de chatroom te verlaten is duidelijker geworden en er is nog een knop naast de "send" knop gekomen om plaatjes te sturen van katten in de chatroom.

### Technische functionaliteiten

Berichten sturen:  
Door middel van een function die een div element maakt, wordt het bericht ontwikkeld met de verstuurde informatie uit de textarea, samen met de username en gekozen diersoort, als er geen diersoort is (door bijvoorbeeld de chatbot) dan zal dit opgevangen worden in de if/else condition.

![image](https://github.com/ChrisvanHvA/real-time-web/assets/90341211/fec8e260-3ae2-4b45-ab9f-267cf764d9da)

Users toevoegen:  
Door middel van een function die de alle users opslaat in een array met hun username en "dier tag" worden de gebruikers bewaard en later weer opgestuurd naar users die joinen.

![image](https://github.com/ChrisvanHvA/real-time-web/assets/90341211/3cfb7284-7a17-413f-90bf-35eb9493f151)

Chat opschonen:  
De applicatie checked hoeveel div elementen (children) er in de DOM worden geplaatst, als dit er meer dan 20 zijn dan verwijdert hij het oudste bericht zodat de site niet te zwaar wordt voor gebruikers. 

![image](https://github.com/ChrisvanHvA/real-time-web/assets/90341211/86adf434-5a0a-4bf6-8df8-16ec5a9b0932)

Room joinen, socket reactie:  
Wanneer je een room joined zijn er een paar berichten die via de socket gestuurd worden, je ontvangt zelf het een bericht van de bot door "socket.emit" naar de current user, en de rest krijgen een bericht van de bot door "socket.broadcast" naar alle users in dezelfde room. 

![image](https://github.com/ChrisvanHvA/real-time-web/assets/90341211/9ef123ad-8a34-4b64-9acb-fa3ee0fe1072)

API afbeeldingen:  
door middel van een functie die getriggered wordt met een event listener worden er katten plaatjes ingeladen. 
er wordt eerst een call gemaakt naar de API om image te krijgen, daarna wordt er een image element gemaakt die de url krijgt van de API. 

![image](https://github.com/ChrisvanHvA/real-time-web/assets/90341211/197926ab-f012-464b-a8e3-3b1633f50f3b)

## Reflectie

Van de functionaliteiten die ik wou toevoegen ben ik nog vrij positief, ik heb wel gemerkt dat ik vaak tegen een metaforische muur aanliep waarbij ik niet meer wist hoe ik verder moest werken om een bepaalde functie toe te voegen, maar als iemand met vrijwel geen ervaring in dit vakgebied begreep ik wel waarom en was dit niet een grote frustratie. 
In wederzijd had ik nog wel de applicatie verder willen uitwerken met meer functies zoals het aanpassen van je profielfoto, verwijderen van oude berichten en misschien nog iets van een mini-game.

Ik begon dit vak met vrijwel geen kennis van live code maken en werken met sockets, dus de instapdrempel was nogal hoog, vooral omdat ik tijdens de intro nogal ziek was.  
Uiteindelijk heb ik wel vrij veel kunnen leren van dit blok en ben ik ook erg positief over het gebruik van sockets. 
Ik hoop dat ik binnenkort wat meer tijd krijg om hier meer mee te kunnen experimenteren, aangezien ik de resultaten uit mijn code erg interessant vond om te zien.  
Ook hoop ik dat ik hier nog verder in kan verdiepen om nieuwe applicaties te verzinnen die gebruik maken van sockets.
