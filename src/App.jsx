import { useState, useEffect } from "react";


let _c = 0;
const uid = () => "id" + (++_c) + Math.random().toString(36).slice(2,6);

const mk = (title, detail="", statut="to_watch", extra={}) => ({id:uid(),title,detail,statut,...extra});
const mkf = (title, annee, statut="watched") => ({id:uid(),title,annee,statut});
const mkb = (title, detail, actor, statut="watched") => ({id:uid(),title,detail,actor,statut});
const mkg = (title, platform) => ({id:uid(),title,platform,statut:"to_watch"});
const mkw = (title, type) => ({id:uid(),title,type,statut:"to_watch"});

const INITIAL = {
  series: [
    mk("1899","Full","watched"), mk("3 Body Problem","S1"), mk("3%","S4","watched"),
    mk("Alice in Borderland","S3"), mk("All of Us Are Dead",""), mk("All or Nothing – Manchester City","","watched"),
    mk("Altered Carbon","S2"), mk("American Primeval",""), mk("ANNA","S2","watched"),
    mk("Arcane (League of Legend)","S2","watched"), mk("Arrow","S6","watched"),
    mk("Avatar – The Last Airbender","S1"), mk("Banshee","Full","watched"),
    mk("Barbarians","S1 & S2"), mk("Beat","S1"), mk("Bienvenidos à Éden","S2"),
    mk("Black Doves","S1"), mk("Black Night","S1"), mk("Boundless","","watched"),
    mk("Breaking Bad","Full","watched"), mk("Britannia","S1 & S2"), mk("Carnival Raw","S2"),
    mk("Casa Del Papel","Full","watched"), mk("Chernobyl","","watched"), mk("Collateral","","watched"),
    mk("DAHMER","","watched"), mk("Dark","S3"), mk("D.B Cooper","","watched"),
    mk("Delete","S1"), mk("Designated Survivor","S3"), mk("Diplomate","S3"),
    mk("Dirty Sexy Money","","watched"), mk("Dr House","Full","watched"),
    mk("Family Business","Full","watched"), mk("Fear the Walking Dead","S6"),
    mk("Fondation","S1"), mk("Freud","","watched"), mk("Frontier","S3"),
    mk("Gang of London","S1"), mk("Griselda","","watched"),
    mk("Heroes","S1 → S4","watched"), mk("Heroes Reborn","","watched"),
    mk("Indian Summer","","watching"), mk("Inside Job","S1"),
    mk("Inventing Anna","","watched"), mk("Jack Ryan","S4","watched"),
    mk("La Cage",""), mk("La Chronique des Bridgerton","S4"),
    mk("Le Jeu de la Dame","","watched"), mk("Les Médicis – Maîtres de Florence",""),
    mk("Maxton Hall – The World Between Us","S1"), mk("Mentalist","Full","watched"),
    mk("Messiah","","watched"), mk("Monarch: Legacy of Monsters","S2"),
    mk("Money Heist: Korea","S2"), mk("Mr. Robot","S4 Full","watched"),
    mk("My Name",""), mk("Narco-Saints",""), mk("Narcos","S3 Full","watched"),
    mk("Narcos Mexico","S3 Full","watched"), mk("Notre Univers (Doc)",""),
    mk("Ozark","Full","watched"), mk("Pêche Interdite","S1"),
    mk("Prison Break","Full","watched"), mk("Quarterback",""),
    mk("Queen Charlotte","Full","watched"), mk("Queen of the South","S5 Full","watched"),
    mk("Rick & Morty","S5"), mk("Ring of Power","S1"), mk("SEE","S1 & S2"),
    mk("Shadow and Bone","S2"), mk("Special OPS: Lioness",""),
    mk("Squid Game","S2"), mk("SUITS","S9 Full"), mk("Supracell","S1"),
    mk("Sweet Home","S3"), mk("Taboo","S1"), mk("Tales from the Loop","S1"),
    mk("Taxi Driver","S1"), mk("The Crown","S5"), mk("The Diplomat","S3"),
    mk("The English Game","","watched"), mk("The Expanse","S6"),
    mk("The Gentleman","S1"), mk("The Last Dance","","watched"),
    mk("The Last Kingdom","S5","watched"), mk("The Last of Us","S1"),
    mk("The Last Ship","S5 Full","watched"), mk("The Night Agent","S3"),
    mk("The People vs OJ Simpson","","watched"), mk("The Sandman",""),
    mk("The Silence of the Sea (Prime)",""), mk("The Terminal List: Dark Wolf",""),
    mk("The Walking Dead","S11 + The Ones Who Live","watched"),
    mk("The Wheel of Time (Prime)","S2"), mk("The Wilds (Prime)","S2"),
    mk("The Witcher","S2"), mk("Top Boy","S2"), mk("Treadstone","S1"),
    mk("Troy – Fall of the City","","watched"), mk("Under the Dome","","watched"),
    mk("Vikings","S6","watched"), mk("Vikings Valhalla","S3"),
    mk("Virgin River","S7"), mk("White Lines","S1","watched"),
    mk("Woodstock 99","","watched"), mk("World Beyond TWD (Prime)","S2"),
    mk("XIII","","watched"), mk("Zero Day","","watched"),

    // ── New from Netflix ──
    mk("2 Broke Girls",""),
    mk("61st Street",""),
    mk("A Bout",""),
    mk("A l'aube de l'Amérique",""),
    mk("Alba",""),
    mk("Archive 81",""),
    mk("Barbares II",""),
    mk("Black Knight",""),
    mk("BoJack Horseman",""),
    mk("Dix pour Cent",""),
    mk("Doctor Crush",""),
    mk("Double Piège",""),
    mk("Easy",""),
    mk("Emily in Paris",""),
    mk("Good Bye Earth",""),
    mk("Into the Night",""),
    mk("Kaleidoscope",""),
    mk("Kingdom",""),
    mk("Kingdom Ashin of the North",""),
    mk("L'Impératrice",""),
    mk("L'Éternaute",""),
    mk("La Defense Lincoln",""),
    mk("La Nuit sera longue",""),
    mk("Le Monde de Demain",""),
    mk("Legends",""),
    mk("Les Nouvelles Légendes du Roi Singe",""),
    mk("Les Rois Doivent Mourir",""),
    mk("Locke & Key",""),
    mk("Manifest",""),
    mk("Money Heist Korea",""),
    mk("Nemesis",""),
    mk("Octobre",""),
    mk("Orange is the New Black",""),
    mk("Peaky Blinders",""),
    mk("Person of Interest",""),
    mk("Poldark",""),
    mk("Reality Z",""),
    mk("Ripley",""),
    mk("Ripple",""),
    mk("Talamasca",""),
    mk("The 8 Show",""),
    mk("The Glory",""),
    mk("The Recruit",""),
    mk("The Rip",""),
    mk("The Signal",""),
    mk("Top Boy Summerhouse",""),
    mk("Tu me manques",""),
    mk("Victoria",""),
    mk("Échos",""),
  ],
  mini: [
    mk("En Traître"), mk("House of Ninjas"), mk("Iris (Korean)"),
    mk("La Casa de Papel: Berlin – La Dame à l'hermine"),
    mk("La Casa de Papel: Berlin – Les Joyaux de Paris"),
    mk("La Palma"), mk("La Traque dans le Sang","S2"),
    mk("La Vie portera ces fruits"), mk("Les Escrocs de Tokyo"),
    mk("Sans Merci (No Mercy)"), mk("Tekken: Bloodline"),
    mk("The Art of Sarah"), mk("The Red Road","S2"),
    mk("Unfamiliar"), mk("XIII [Canal+]"),

    // ── New from Netflix ──
    mk("Toute la Lumière que nous ne Pouvons Voir",""),
  ],
  manga: [
    mk("Archer","S1"), mk("Capitaine Fall","","watched"),
    mk("Close Enough","S2"), mk("Désenchantée","S5","watched"),
    mk("Inside Job","S2"), mk("One Piece (Netflix / Apple TV)","S6"),
    mk("Paradise Police",""), mk("Resident Evil: Infinite Darkness","","watched"),
    mk("Rick & Morty","S6"), mk("Sakamoto Days","S1 – Ep.22"),
    mk("South Park","","watching"), mk("Splinter Cell – Deathwatch",""),
    mk("The Simpsons","","watching"),
    mk("Tomb Raider: The Legend of Lara Croft","S2"),
    mk("Zerocalcare – À découper suivant les pointillés",""),
    mk("Zerocalcare – Ce monde ne m'aura pas",""),

    // ── New from Netflix ──
    mk("Big Mouth",""),
    mk("Blood of Zeus",""),
    mk("Blue Eye Samurai",""),
    mk("Blue Lock",""),
    mk("Cyberpunk Edgerunners",""),
    mk("Gambling School",""),
    mk("Golden Kamui",""),
    mk("Love Death + Robots",""),
    mk("Naruto",""),
    mk("Ranma 1/2",""),
    mk("Vinland Saga",""),
  ],
  collections: {
    saint_seiya: [
      mk("Les Chevaliers du Zodiaque","Full","watched"),
      mk("Saint Seiya – La légende de la pomme d'or","","watched"),
      mk("Saint Seiya – La Bataille des Dieux","","watched"),
      mk("Saint Seiya – Les guerriers d'Abel","","watched"),
      mk("Saint Seiya – Le Temple de Lucifer","","watched"),
      mk("Saint Seiya – The Lost Canvas","Ep27"),
      mk("Saint Seiya – Soul of Gold","Ep13"),
      mk("Saint Seiya – Omega","Ep97"),
      mk("Saint Seiya – Saintia Sho","Ep10"),
      mk("Saint Seiya – Knights of Zodiac","S2 Ep25"),
    ],
    dragon_ball: [
      mk("Dragon Ball","Full – 153 ep","watched"),
      mk("Dragon Ball Z","Full – 291 ep","watched"),
      mk("Dragon Ball Super","Full – 131 ep","watched"),
      mk("Dragon Ball GT","Full – 64 ep","watched"),
      mk("Dragon Ball Z Kai","Full – 167 ep","watched"),
      mk("Super Dragon Ball Heroes","Full","watched"),
      mk("DB – L'armée du Ruban Rouge","","watched"),
      mk("DB – La légende de Shenron","","watched"),
      mk("DB – Le château du Démon","","watched"),
      mk("DB – L'aventure Mystique","","watched"),
      mk("DBZ – Le Robot de Glaces","","watched"),
      mk("DBZ – À la poursuite de Garlic","","watched"),
      mk("DBZ – Le combat fratricide","","watched"),
      mk("DBZ – La menace de Namek","","watched"),
      mk("DBZ – La Revanche de Cooler","","watched"),
      mk("DBZ – Cent Milles Guerriers de Métal","","watched"),
      mk("DBZ – L'offensive des cyborgs","","watched"),
      mk("DBZ – Broly le super guerrier","","watched"),
      mk("DBZ – Rivaux Dangereux","","watched"),
      mk("DBZ – Les Mercenaires de l'espace","","watched"),
      mk("DBZ – L'attaque du Dragon","","watched"),
      mk("DBZ – Fusion","","watched"),
      mk("DBZ – Attaque Super Warrior","","watched"),
      mk("DBZ – Battle of Gods","","watched"),
      mk("DB Super – Super Hero","","watched"),
      mk("DB Super – Broly","","watched"),
    ],
    asterix: [
      mk("Astérix le Gaulois","1967","watched"),
      mk("Astérix et Cléopâtre","1968","watched"),
      mk("Les Douze Travaux d'Astérix","1976","watched"),
      mk("Astérix et la Surprise de César","1985","watched"),
      mk("Astérix chez les Bretons","1986","watched"),
      mk("Astérix et le Coup du menhir","1989","watched"),
      mk("Astérix et les Indiens","1994","watched"),
      mk("Astérix et les Vikings","2006","watched"),
      mk("Astérix : Le Domaine des dieux","2014","watched"),
      mk("Astérix : Le Secret de la Potion Magique","2018","watched"),
    ],
    lucky_luke: [
      mk("Ma Dalton","1984"), mk("The Tenderfoot","1984"),
      mk("The Daltons In The Blizzard","1984"), mk("Going up the Mississippi","1984"),
      mk("Calamity Jane","1984"), mk("The Daltons Redeem Themselves","1984"),
      mk("Rails on the Prairie","1984"), mk("Phil Defer","1984"),
      mk("The Elixir of Doctor Doxey","1984"), mk("Outlaw","1984"),
      mk("Billy the Kid","1984"), mk("The Stage Coach","1984"),
      mk("The Grand Duke","1985"), mk("In The Shadow of the Derricks","1985"),
      mk("The Daltons Stash","1985"), mk("The White Cavalier","1985"),
      mk("On the Daltons Trail","1985"), mk("The Escort","1985"),
      mk("The Rivals of Painful Gulch","1985"), mk("The Singing Wire","1985"),
      mk("Jesse James","1985"), mk("Barbed Wire On The Prairie","1985"),
      mk("The Black Hills","1985"), mk("Dalton City","1985"),
      mk("Caravan","1985"), mk("Rush on Oklahoma","1985"),
    ],
    tintin: [
      mk("Tintin au pays soviets","1930 – B&W"), mk("Tintin au Congo","1946"),
      mk("Tintin en Amérique","1946"), mk("Les Cigares du Pharaon","1955"),
      mk("Le Lotus Bleu","1946"), mk("L'Oreille Cassée","1943"),
      mk("L'Île Noire","1943"), mk("Le Sceptre d'Ottokar","1947"),
      mk("Le Crabe aux pinces d'or","1943"), mk("L'Étoile mystérieuse","1942"),
      mk("Le Secret de La Licorne","1943"), mk("Le Trésor de Rackham le Rouge","1945"),
      mk("Les Sept Boules de cristal","1948"), mk("Le Temple du Soleil","1949"),
      mk("Tintin au pays de l'Or Noir","1950"), mk("Objectif Lune","1953"),
      mk("On a marché sur la Lune","1954"), mk("L'Affaire Tournesol","1956"),
      mk("Coke en stock","1958"), mk("Tintin au Tibet","1960"),
      mk("Les Bijoux de la Castafiore","1963"), mk("Vol 714 pour Sydney","1968"),
      mk("Tintin et les Picaros","1976"), mk("Tintin et l'Alph-Art","1986"),
    ],
    pixar: [
      mk("A Bug's Life","","watched"), mk("Cars","","watched"),
      mk("Monsters Inc","","watched"), mk("Ratatouille","","watched"),
      mk("Soul","","watched"), mk("The Good Dinosaur","","watched"),
      mk("Toy Story","","watched"), mk("Wall-E","","watched"),
    ],
  },
  james_bond: [
    mkb("Dr. No","1962","Sean Connery"),
    mkb("From Russia with Love","1963","Sean Connery"),
    mkb("Goldfinger","1964","Sean Connery"),
    mkb("Thunderball","1965","Sean Connery"),
    mkb("You Only Live Twice","1967","Sean Connery"),
    mkb("Casino Royale","1967","David Niven"),
    mkb("On Her Majesty's Secret Service","1969","George Lazenby"),
    mkb("Diamonds Are Forever","1971","Sean Connery"),
    mkb("Live and Let Die","1973","Roger Moore"),
    mkb("The Man with the Golden Gun","1974","Roger Moore"),
    mkb("The Spy Who Loved Me","1977","Roger Moore"),
    mkb("Moonraker","1979","Roger Moore"),
    mkb("For Your Eyes Only","1981","Roger Moore"),
    mkb("Octopussy","1983","Roger Moore"),
    mkb("Never Say Never Again","1983","Sean Connery"),
    mkb("A View to a Kill","1985","Roger Moore"),
    mkb("The Living Daylights","1987","Timothy Dalton"),
    mkb("Licence to Kill","1989","Timothy Dalton"),
    mkb("GoldenEye","1995","Pierce Brosnan"),
    mkb("Tomorrow Never Dies","1997","Pierce Brosnan"),
    mkb("The World Is Not Enough","1999","Pierce Brosnan"),
    mkb("Die Another Day","2002","Pierce Brosnan"),
    mkb("Casino Royale","2006","Daniel Craig"),
    mkb("Quantum of Solace","2008","Daniel Craig"),
    mkb("Skyfall","2012","Daniel Craig"),
    mkb("Spectre","2015","Daniel Craig"),
    mkb("No Time to Die","2021","Daniel Craig"),
  ],
  films: [
    mkf("#Chef","2016"), mkf("42","2016"), mkf("47 Ronin","2016"), mkf("About Cherry","2016"),
    mkf("After Earth","2016"), mkf("Age of Tomorrow","2016"), mkf("Albator","2016"),
    mkf("American Sniper","2016"), mkf("Capitaine Phillips","2016"), mkf("Dark Skies","2016"),
    mkf("Divergent","2016"), mkf("Dracula Untold","2016"), mkf("Elysum","2016"),
    mkf("Exodus (Gods and Kings)","2016"), mkf("Eyjafjallajokull","2016"), mkf("Fury","2016"),
    mkf("Intouchable","2016"), mkf("Jack et la Mécanique","2016"), mkf("Jeux d'enfants","2016"),
    mkf("Jurassic World","2016"), mkf("La Conquête","2016"), mkf("La Stratégie Ender","2016"),
    mkf("Labyrinth","2016"), mkf("Le Capital","2016"), mkf("Le Livre de la Jungle","2016"),
    mkf("Le Prestige","2016"), mkf("Le Sang des Templiers","2016"), mkf("Le Terminal","2016"),
    mkf("Les Petits Princes","2016"), mkf("Lucy","2016"), mkf("Née quelque part","2016"),
    mkf("Ninja Turtles","2016"), mkf("No Pain No Game","2016"), mkf("Pompéi","2016"),
    mkf("Qu'est ce qu'on a fait au bon dieu?","2016"), mkf("Rec 4","2016"), mkf("Sex Tape","2016"),
    mkf("Snowrider","2016"), mkf("Straight Outta Compton","2016"), mkf("Terminator Genisys","2016"),
    mkf("The Artist","2016"), mkf("The Giver","2016"), mkf("The Pianist","2016"),
    mkf("The Social Network","2016"), mkf("Thor","2016"), mkf("Transcendance","2016"),
    mkf("World War Z","2016"),
    mkf("16 Bloc","2017"), mkf("50 Nuances de Grey","2017"), mkf("50 Nuances Plus Sombres","2017"),
    mkf("5th Wave","2017"), mkf("Alliés","2017"), mkf("Anges & Démons","2017"),
    mkf("Ben Hur","2017"), mkf("Café Society","2017"), mkf("Casse-Tête Chinois","2017"),
    mkf("Da Vinci Code","2017"), mkf("Deepwater","2017"), mkf("Divergent II & III","2017"),
    mkf("Don Jon","2017"), mkf("Du Sang & des Larmes","2017"), mkf("Dunkerque","2017"),
    mkf("Ex Machina","2017"), mkf("Faubourg 36","2017"), mkf("Full Metal Jacket","2017"),
    mkf("Hitch – Séductive Expert","2017"), mkf("Homefront","2017"), mkf("Hunger Games","2017"),
    mkf("Jack Reacher","2017"), mkf("Jason Bourne","2017"), mkf("Jobs","2017"),
    mkf("La Belle & la Bête","2017"), mkf("La Grande Muraille","2017"),
    mkf("La Légende des Titans","2017"), mkf("La Terre Brûlée","2017"),
    mkf("Largo Winch 2","2017"), mkf("Le Grand Budapest Hotel","2017"),
    mkf("Le Labyrinthe","2017"), mkf("Le Paradis Artificiel","2017"),
    mkf("Le Pont des Espions","2017"), mkf("Legend","2017"),
    mkf("Les 7 Mercenaires","2017"), mkf("Les 8 Salopards","2017"),
    mkf("Molly's Game","2017"), mkf("Oblivion","2017"), mkf("Pacific Rim","2017"),
    mkf("Passengers","2017"), mkf("Retour chez ma Mère","2017"), mkf("Seul sur Mars","2017"),
    mkf("Snatch","2017"), mkf("Snowden","2017"), mkf("Spectre 007","2017"),
    mkf("Spiderman: Homecoming","2017"), mkf("Ted","2017"),
    mkf("The Last Witch Hunter","2017"), mkf("The Revenant","2017"), mkf("The Search","2017"),
    mkf("Valerian et la Cité des 1000 Planètes","2017"), mkf("Warcraft: The Beginning","2017"),
    mkf("Amateur","2018"), mkf("Battle: Los Angeles","2018"),
    mkf("Countdown to Death: Pablo Escobar","2018"), mkf("Escobar","2018"),
    mkf("Le Grand Jeux","2018"), mkf("Le Labyrinthe – Remède Mortel","2018"),
    mkf("Le Mariage d'Ali","2018"), mkf("Mr & Miss Smith","2018"), mkf("Rambo","2018"),
    mkf("Sand Castle","2018"), mkf("Seven","2018"), mkf("The Imitation Game","2018"),
    mkf("The Pianist","2018"), mkf("Une Heure de Tranquillité","2018"),
    mkf("A Star is Born","2019"), mkf("Aquaman","2019"), mkf("Burn Out","2019"),
    mkf("Cocaine Island","2019"), mkf("Dragon Ball Revolution","2019"), mkf("Joker","2019"),
    mkf("Le Grand Bain","2019"), mkf("Le Roi Lion","2019"), mkf("Limitless","2019"),
    mkf("Messenger Man","2019"), mkf("Once Upon a Time in Hollywood","2019"),
    mkf("Panama Papers","2019"), mkf("Predator","2019"), mkf("Ready Player One","2019"),
    mkf("Sully","2019"), mkf("Tarzan","2019"), mkf("The Bohemian Rhapsody","2019"),
    mkf("The Meg","2019"), mkf("The Rite","2019"), mkf("The Theory of Everything","2019"),
    mkf("Un Homme à la Hauteur","2019"), mkf("White House Down","2019"),
    mkf("Constantine","2020"), mkf("Domination","2020"), mkf("Elite de Brooklyn","2020"),
    mkf("Fight Club","2020"), mkf("Green Book","2020"), mkf("Jason Bourne","2020"),
    mkf("John Rambo","2020"), mkf("John Wick 3","2020"), mkf("La Belle & le Clochard","2020"),
    mkf("La Plateforme","2020"), mkf("Le Pont des Espions","2020"),
    mkf("Les Noces Funèbres (Tim Burton)","2020"), mkf("Man on Fire","2020"),
    mkf("Mowgli: La Légende de la Jungle","2020"), mkf("Ocean's 8","2020"),
    mkf("Pinocchio","2020"), mkf("Richard Says Goodbye","2020"), mkf("Seul sur Terre","2020"),
    mkf("Tenet","2020"), mkf("The Aeronauts","2020"), mkf("The Book of Eli","2020"),
    mkf("The Great Gatsby","2020"), mkf("The Head Hunted","2020"), mkf("The Highwaymen","2020"),
    mkf("1917","2021"), mkf("21 Bridges","2021"), mkf("Bac Nord","2021"),
    mkf("Body of Lies","2021"), mkf("Born in China (Disney Nature)","2021"),
    mkf("Charlie et la Chocolaterie","2021"), mkf("Chimpanzee (Disney Nature)","2021"),
    mkf("Countdown","2021"), mkf("David Copperfield","2021"), mkf("Donnie Brasco","2021"),
    mkf("Drunken","2021"), mkf("El Camino","2021"), mkf("Escape from Pretoria","2021"),
    mkf("Ghost in the Shell","2021"), mkf("Killing Kennedy","2021"), mkf("Killing Lincoln","2021"),
    mkf("Montres & Co.","2021"), mkf("Space Jam (Nouvelle Ère)","2021"),
    mkf("Sucker Punch","2021"), mkf("The Report","2021"),
    mkf("1984 (George Orwell)","2022"), mkf("21 (Las Vegas)","2022"), mkf("Addicted","2022"),
    mkf("Boîte Noire","2022"), mkf("Chaos Walking","2022"), mkf("Code 8","2022"),
    mkf("Crypto Parano","2022"), mkf("Darkest Hour","2022"), mkf("Don't Look Up","2022"),
    mkf("Harry Potter 20 Years Later","2022"), mkf("Home","2022"), mkf("Le Jeu","2022"),
    mkf("Love in the Villa","2022"), mkf("Mad Max: Fury Road","2022"),
    mkf("No Time to Die (James Bond)","2022"), mkf("Now You See Me","2022"),
    mkf("The Big Short","2022"), mkf("The Gentleman","2022"), mkf("The Grey Man","2022"),
    mkf("The King","2022"), mkf("The Matrix: Resurrection","2022"), mkf("The Playlist","2022"),
    mkf("The Walking Dead Origins","2022"), mkf("War Dogs","2022"),
    mkf("7 Ans au Tibet","2023"), mkf("A l'Ouest Rien de Nouveau","2023"),
    mkf("Ad Astra","2023"), mkf("Avatar II","2023"), mkf("Blade Runner 2049","2023"),
    mkf("Leave the World Behind","2023"), mkf("Le Roi","2023"),
    mkf("Luther – The Fallen Sun","2023"), mkf("Notorious (Mc Gregor)","2023"),
    mkf("School of Rock","2023"), mkf("The Founder","2023"), mkf("The Last Kingdom","2023"),
    mkf("The Redeem Team","2023"), mkf("Tomb Raider – Lara Croft","2023"),
    mkf("Athena","2024"), mkf("Dune Part I","2024"), mkf("Federer: Twelve Final Days","2024"),
    mkf("Outlaw King","2024"), mkf("Paradise","2024"),
    mkf("Profession Ceinture Noire","2024"), mkf("Riposte","2024"),
    mkf("Soulèvement","2024"), mkf("The Kitchen","2024"), mkf("The Long Game","2024"),
    mkf("The Platform 2","2024"), mkf("The Story of Moses","2024"), mkf("To the Moon","2024"),
    mkf("A House of Dynamite","2025"), mkf("Agent Stone","2025"), mkf("Alita: Battle Angel","2025"),
    mkf("Back in Action","2025"), mkf("Downsizing","2025"), mkf("Exterritorial","2025"),
    mkf("Four Brothers","2025"), mkf("Hasta El Cielo","2025"), mkf("Im Tim","2025"),
    mkf("Kenshin – The Beginning","2025"), mkf("Kenshin II","2025"), mkf("Kenshin III","2025"),
    mkf("Kung Fu Panda I","2025"), mkf("Kung Fu Panda II","2025"), mkf("Kung Fu Panda III","2025"),
    mkf("La Disparue de la Cabine 10","2025"), mkf("Life","2025"), mkf("Ocean Rise","2025"),
    mkf("Rambo I","2025"), mkf("Rambo II","2025"), mkf("Rambo III","2025"),
    mkf("Rebel Moon I & II","2025"), mkf("Subservience","2025"),
    mkf("Terminator: Dark Fate","2025"), mkf("The Boy Who Harnessed the Wind","2025"),
    mkf("The Creator","2025"), mkf("The Foreigner","2025"), mkf("The Harder They Fall","2025"),
    mkf("The Last Stand","2025"), mkf("The List of Life","2025"), mkf("The Old Guard 1 & 2","2025"),
    mkf("The Pursuit of Happyness","2025"), mkf("The Sound of Freedom","2025"),
    mkf("The Tourist","2025"), mkf("Transformers: Rises of the Beasts","2025"),
    mkf("Transformers: The Last Knight","2025"),
    mkf("Avatar III","2026","to_watch"), mkf("Borg vs McEnroe","2026"),
    mkf("Borderland 0","2026","to_watch"), mkf("F1 The Movie","2026","to_watch"),
    mkf("Final Fantasy: The Spirit","2026","to_watch"), mkf("Get Rich or Die Tryin","2026"),
    mkf("Jack Ryan – Ghost War","2026","to_watch"), mkf("Jackie Brown","2026"),
    mkf("Kill Bok Soon","2026","to_watch"), mkf("Kung Fu Panda 4","2026","to_watch"),
    mkf("Marty Supreme","2026"), mkf("MIB International","2026","to_watch"),
    mkf("Ninja Assassin","2026","to_watch"), mkf("Nuremberg","2026","to_watch"),
    mkf("One Battle After Another","2026","to_watch"),
    mkf("Peaky Blinders: The Immortal Man","2026","to_watch"),
    mkf("Raya & The Last Dragon","2026","to_watch"), mkf("Salt","2026"),
    mkf("Shooting Stars","2026","to_watch"), mkf("Submersion","2026","to_watch"),
    mkf("The Bluff","2026","to_watch"), mkf("The Dirt","2026","to_watch"),
    mkf("The Gorge","2026"), mkf("The Pale Blue Eye","2026","to_watch"),
    mkf("Toscana","2026","to_watch"), mkf("War Machine","2026","to_watch"),
    mkf("Wrath of Man","2026"), mkf("Zone Hostile","2026","to_watch"),

    // ── New from Netflix ──
    mkf("6 Days","","to_watch"),
    mkf("Anne Frank ma meilleure amie","","to_watch"),
    mkf("Apex","","to_watch"),
    mkf("Ballerina","","to_watch"),
    mkf("Bienvenue à Zombieland","","to_watch"),
    mkf("Black Crab","","to_watch"),
    mkf("Borderlands","","to_watch"),
    mkf("Code 8 Partie II","","to_watch"),
    mkf("Creed","","to_watch"),
    mkf("Creed II","","to_watch"),
    mkf("Creed III","","to_watch"),
    mkf("D'abord ils ont tué mon père","","to_watch"),
    mkf("Enola Holmes","","to_watch"),
    mkf("Fifty Shades of Grey","","to_watch"),
    mkf("Final Fantasy – The Spirits Within","","to_watch"),
    mkf("How it Ends","","to_watch"),
    mkf("Inglourious Basterds","","to_watch"),
    mkf("Into the Storm","","to_watch"),
    mkf("La Ligne Verte","","to_watch"),
    mkf("Las Vegas 21","","to_watch"),
    mkf("Le Guépard","","to_watch"),
    mkf("Le Hobbit","","to_watch"),
    mkf("Le Monde après nous","","to_watch"),
    mkf("Le Train des Enfants","","to_watch"),
    mkf("Maharaj","","to_watch"),
    mkf("Minions & More","","to_watch"),
    mkf("Mission Majnu","","to_watch"),
    mkf("Noah","","to_watch"),
    mkf("Opération Finale","","to_watch"),
    mkf("Prometheus","","to_watch"),
    mkf("Que ça vous serve de leçon","","to_watch"),
    mkf("Ravage","","to_watch"),
    mkf("Rebecca","","to_watch"),
    mkf("Respirer","","to_watch"),
    mkf("Sniper – The Last Stand","","to_watch"),
    mkf("Submersion","","to_watch"),
    mkf("Sweet Girl","","to_watch"),
    mkf("The Killer","","to_watch"),
    mkf("The Man from Toronto","","to_watch"),
    mkf("The Witcher – Le Cauchemar du Loup","","to_watch"),
    mkf("Us","","to_watch"),
  ],
  watchlist: [
    mkw("All Eyez on Me","Film"), mkw("A Teacher","Series"), mkw("Bad Blood (Netflix)","Film"),
    mkw("Ballers","Series"), mkw("Better Man","Film"), mkw("Billions","Series"),
    mkw("Black Mass (Netflix)","Film"), mkw("BRAQUO","Series"), mkw("Bureau des Légendes","Series"),
    mkw("Californication","Series"), mkw("Coherence","Film"), mkw("Colony","Series"),
    mkw("Entourage (HBO)","Series"), mkw("Eyes in the Sky","Film"),
    mkw("Gainsbourg Héroïne","Film"), mkw("Gerald's Game (Netflix)","Film"),
    mkw("Get on Up – James Brown","Film"), mkw("Gomorra","Series"),
    mkw("Ironclaw","Film"), mkw("Jackie Kennedy","Film"), mkw("Kaboul Kitchen","Series"),
    mkw("Malavita / The Family (Luc Besson)","Film"), mkw("Pentagon Papers","Film"),
    mkw("Ray Donovan","Series"), mkw("Roma (Netflix)","Film"),
    mkw("Side Effects (Netflix)","Film"), mkw("Snow Fall","Series"),
    mkw("The 100","Series"), mkw("The Guest (Netflix)","Film"),
    mkw("The Hate U Give","Film"), mkw("The Irishman (Netflix)","Film"),
    mkw("The Mule (Netflix)","Film"), mkw("The Post","Film"),
    mkw("The Woman King","Film"), mkw("Trial by Fire (Netflix)","Film"),
    mkw("Undefeated (Netflix)","Film"), mkw("Versailles","Series"), mkw("Whiplash","Film"),
  ],
  documentary: [
    // ── From Netflix ──
    mk("Beckham",""),
    mk("Don't Die",""),
    mk("El Chapo",""),
    mk("House of Guinness",""),
    mk("Hunint",""),
    mk("L'Empire des Chimpanzés",""),
    mk("L'Essor de l'Empire Ottoman",""),
    mk("La Casa de Papel – Le Phénomène",""),
    mk("La Grande-Bretagne face au Blitz",""),
    mk("La Terra la Nuit",""),
    mk("La Traque",""),
    mk("Madoff",""),
    mk("Medal of Honor",""),
    mk("Michael Jackson – Le Verdict",""),
    mk("Notre Univers",""),
    mk("Numéro 24",""),
    mk("Ottomans vs Venetians",""),
    mk("Parcs Nationaux",""),
    mk("Pour un Sou",""),
    mk("Receiver",""),
    mk("Roman Empire",""),
    mk("Super Mâles",""),
    mk("Testament de Moïse",""),
    mk("Together",""),
    mk("Trump – An American Dream",""),
    mk("Une Terre de Jeux",""),
    mk("Welcome to Mongolia",""),
  ],
  show: [
    // ── From Netflix ──
    mk("Dave Chappelle – The Unstoppable",""),
    mk("Gabriel Iglesias – I'm Sorry for What I Said When I Was Hungry",""),
    mk("Gabriel Iglesias – Legend of Fluffy",""),
    mk("Kevin Hart – Acting My Age",""),
    mk("Phil Wang – Wang in There Baby",""),
    mk("Sheng Wang – Purple",""),
    mk("Sheng Wang – Sweet & Juicy",""),
    mk("Trevor Noah – Where Was I",""),
  ],
  games: [
    mkg("007 James Bond","—"), mkg("Assassin's Creed Shadows","PS5"),
    mkg("Call of Duty: Black Ops 6","Multi"), mkg("Dragon Age: The Veilguard","PS5"),
    mkg("Dragon Ball: Sparkling! Zero","PS5"),
    mkg("Indiana Jones & Le Cercle Ancien","PC"), mkg("Silent Hill 2 Remake","PS5"),
  ],
};


const STORAGE_KEY = "numa_watchlist_v5";

const SECTION_STATUTS = {
  games:   [{key:"to_watch",label:"To Play"},{key:"watching",label:"Playing"},{key:"watched",label:"Played"}],
  books:   [{key:"to_watch",label:"To Read"},{key:"watching",label:"Reading"},{key:"watched",label:"Read"}],
  _default:[{key:"to_watch",label:"To Watch"},{key:"watching",label:"Watching"},{key:"watched",label:"Watched"}],
};
// also match custom sections that include "book" in their id
const getSectionStatutsById = id => {
  if (SECTION_STATUTS[id]) return SECTION_STATUTS[id];
  if (id.includes("book")) return SECTION_STATUTS.books;
  if (id.includes("game")) return SECTION_STATUTS.games;
  return SECTION_STATUTS._default;
};
const getSectionStatuts = tab => getSectionStatutsById(tab||"series");

const DEFAULT_TABS = [
  {id:"__watching",  label:"Now Watching", system:true},
  {id:"series",      label:"Series"},
  {id:"mini",        label:"Mini-Series"},
  {id:"manga",       label:"Manga & Co"},
  {id:"films",       label:"Films"},
  {id:"james_bond",  label:"James Bond"},
  {id:"collections", label:"Collections"},
  {id:"documentary", label:"Documentary"},
  {id:"show",        label:"Show"},
  {id:"watchlist",   label:"Watch Later"},
  {id:"games",       label:"Games"},
  {id:"books",       label:"Books"},
];

const GENRES = ["","Action","Animation","Comedy","Crime","Documentary","Drama","Fantasy","Horror","Mystery","Romance","Sci-Fi","Thriller","Western"];
const DATA_TABS = ["series","mini","manga","films","james_bond","documentary","show","watchlist","games"];
const colSubLabel = k => k.replace(/_/g," ").replace(/\b\w/g,c=>c.toUpperCase());
const getColSubs = d => Object.keys(d.collections||{}).filter(k=>k!=='_colLabels').map(k=>({id:k, label:(d._colLabels&&d._colLabels[k])||colSubLabel(k)}));
const fmtDate = ts => { if(!ts) return "—"; const d=new Date(ts); return d.toLocaleDateString("en-GB",{day:"2-digit",month:"short",year:"numeric"}); };
const STATUS_CYCLE = {to_watch:"watching",watching:"watched",watched:"to_watch"};

const Icon = {
  Eye:      ()=>(<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>),
  EyeOff:   ()=>(<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4"><path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/></svg>),
  Clock:    ()=>(<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>),
  Plus:     ()=>(<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-4 h-4"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>),
  Edit:     ()=>(<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5"><path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>),
  Trash:    ()=>(<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6"/><path d="M10 11v6M14 11v6"/><path d="M9 6V4a1 1 0 011-1h4a1 1 0 011 1v2"/></svg>),
  Sun:      ()=>(<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>),
  Moon:     ()=>(<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4"><path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/></svg>),
  Search:   ()=>(<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>),
  ChevDown: ()=>(<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4"><polyline points="6 9 12 15 18 9"/></svg>),
  ChevUp:   ()=>(<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4"><polyline points="18 15 12 9 6 15"/></svg>),
  X:        ()=>(<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>),
  Globe:    ()=>(<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>),
  Settings: ()=>(<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z"/></svg>),
  Download: ()=>(<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>),
  Upload:   ()=>(<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>),
  Grip:     ()=>(<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4"><circle cx="9" cy="5" r="1" fill="currentColor"/><circle cx="9" cy="12" r="1" fill="currentColor"/><circle cx="9" cy="19" r="1" fill="currentColor"/><circle cx="15" cy="5" r="1" fill="currentColor"/><circle cx="15" cy="12" r="1" fill="currentColor"/><circle cx="15" cy="19" r="1" fill="currentColor"/></svg>),
};

// ─── DRAG SORT HOOK ───────────────────────────────────────────────────────────
function useDragSort(items, onReorder) {
  const dragIdx = React.useRef(null);
  const dragOver = React.useRef(null);

  const onDragStart = idx => e => {
    dragIdx.current = idx;
    e.dataTransfer.effectAllowed = "move";
  };
  const onDragOver = idx => e => {
    e.preventDefault();
    dragOver.current = idx;
  };
  const onDrop = () => {
    if (dragIdx.current === null || dragOver.current === null || dragIdx.current === dragOver.current) return;
    const next = [...items];
    const [moved] = next.splice(dragIdx.current, 1);
    next.splice(dragOver.current, 0, moved);
    onReorder(next);
    dragIdx.current = null;
    dragOver.current = null;
  };
  const onDragEnd = () => { dragIdx.current = null; dragOver.current = null; };

  return { onDragStart, onDragOver, onDrop, onDragEnd };
}

// ─── RATING DOTS ─────────────────────────────────────────────────────────────
function RatingDots({value, onChange, sub}) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex gap-1">
        {[1,2,3,4,5].map(n=>(
          <button key={n} onClick={()=>onChange(value===n?0:n)}
            className={`font-mono transition-all hover:opacity-50 ${sub}`} style={{fontSize:"18px",lineHeight:1}}>
            {n<=value?"●":"○"}
          </button>
        ))}
      </div>
      {value>0 && <span className={`text-xs font-mono ${sub}`}>{value}/5</span>}
    </div>
  );
}

// ─── STATUS DOT ───────────────────────────────────────────────────────────────
function StatusDot({statut, onClick, dk, tab}) {
  const statuts = getSectionStatuts(tab||"series");
  const s = statuts.find(x=>x.key===statut)||statuts[statuts.length-1];
  const icons = {watched:"Eye",watching:"Clock",to_watch:"EyeOff"};
  const colors = {
    watched:  {dk:"text-emerald-400 bg-emerald-900/25 border-emerald-800",lt:"text-emerald-700 bg-emerald-50 border-emerald-200"},
    watching: {dk:"text-amber-400 bg-amber-900/25 border-amber-800",      lt:"text-amber-600 bg-amber-50 border-amber-200"},
    to_watch: {dk:"text-zinc-500 bg-zinc-800/50 border-zinc-700",          lt:"text-zinc-500 bg-zinc-100 border-zinc-200"},
  };
  const I = Icon[icons[s.key]||"EyeOff"];
  const c = (colors[s.key]||colors.to_watch);
  return (
    <button onClick={e=>{e.stopPropagation();onClick();}} title={s.label}
      className={`flex items-center justify-center w-7 h-7 rounded-lg border transition-all hover:opacity-75 ${dk?c.dk:c.lt}`}>
      <I />
    </button>
  );
}

// ─── ROW ─────────────────────────────────────────────────────────────────────
function Row({item, idx, tab, dk, bdr, sub, txt, onCycle, onEdit, onDelete, showSection}) {
  const [open, setOpen] = useState(false);
  const isBond=tab==="james_bond", isFilm=tab==="films", isGame=tab==="games", isWL=tab==="watchlist";
  const hasSeasonCol=!isFilm&&!isGame&&!isWL&&!isBond;
  const year = isFilm?item.annee:isBond?item.detail:item.annee;

  return (
    <>
      <tr className={`border-t ${bdr} cursor-pointer transition-colors ${dk?"hover:bg-zinc-800/30":"hover:bg-zinc-50"}`}
          onClick={()=>setOpen(o=>!o)}>
        <td className={`py-2.5 px-3 ${sub} font-mono text-xs w-8`}>{String(idx+1).padStart(2,"0")}</td>
        <td className={`py-2.5 px-3 ${txt} font-medium`}>
          <div className="flex items-center gap-2 min-w-0">
            <span className="truncate">{item.title}</span>
            {item.genre && <span className={`hidden sm:inline shrink-0 text-[10px] font-mono px-1.5 py-0.5 rounded border ${dk?"border-zinc-700 text-zinc-500":"border-zinc-200 text-zinc-400"}`}>{item.genre}</span>}
            {showSection&&item._tab && <span className={`hidden sm:inline shrink-0 text-[10px] font-mono px-1.5 py-0.5 rounded border ${dk?"border-zinc-700 text-zinc-500":"border-zinc-200 text-zinc-400"}`}>{colSubLabel(item._tab)}</span>}
          </div>
        </td>
        {hasSeasonCol && <td className={`py-2.5 px-3 ${sub} font-mono text-xs hidden sm:table-cell w-24`}>{item.progress||item.detail||"—"}</td>}
        <td className={`py-2.5 px-3 ${sub} font-mono text-xs hidden sm:table-cell w-14`}>{year||"—"}</td>
        {isBond && <td className={`py-2.5 px-3 ${sub} font-mono text-xs hidden md:table-cell`}>{item.actor||"—"}</td>}
        {isGame && <td className={`py-2.5 px-3 ${sub} font-mono text-xs hidden sm:table-cell`}>{item.platform||"—"}</td>}
        <td className="py-2 px-2 w-9" onClick={e=>e.stopPropagation()}>
          <StatusDot statut={item.statut} onClick={onCycle} dk={dk} tab={tab} />
        </td>
        <td className="py-2 px-2 w-16" onClick={e=>e.stopPropagation()}>
          <div className="flex gap-1">
            <button onClick={onEdit}   className={`w-7 h-7 flex items-center justify-center rounded-lg transition-colors ${sub} ${dk?"hover:bg-zinc-700":"hover:bg-zinc-200"}`}><Icon.Edit /></button>
            <button onClick={onDelete} className={`w-7 h-7 flex items-center justify-center rounded-lg transition-colors text-zinc-500 hover:text-red-400 ${dk?"hover:bg-red-900/30":"hover:bg-red-50"}`}><Icon.Trash /></button>
          </div>
        </td>
      </tr>
      {open && (
        <tr className={`border-t ${bdr}`}>
          <td colSpan="10" className={`px-4 py-3 ${dk?"bg-zinc-900":"bg-zinc-50"}`}>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs font-mono">
              {item.progress&&hasSeasonCol && <span><span className={`${sub} text-[10px] uppercase tracking-widest`}>Progress </span><span className={txt}>{item.progress}</span></span>}
              {item.detail&&hasSeasonCol&&item.detail!==item.progress && <span><span className={`${sub} text-[10px] uppercase tracking-widest`}>Season/Ep </span><span className={txt}>{item.detail}</span></span>}
              {year && <span><span className={`${sub} text-[10px] uppercase tracking-widest`}>Year </span><span className={txt}>{year}</span></span>}
              {item.genre && <span><span className={`${sub} text-[10px] uppercase tracking-widest`}>Genre </span><span className={txt}>{item.genre}</span></span>}
              {item.info && <span className="w-full"><span className={`${sub} text-[10px] uppercase tracking-widest`}>Info </span><span className={txt}>{item.info}</span></span>}
              {item.rating>0 && <span><span className={`${sub} text-[10px] uppercase tracking-widest`}>Rating </span><span className={txt}>{Array.from({length:5},(_,i)=>i<item.rating?"●":"○").join("")} {item.rating}/5</span></span>}
              {item.addedAt && <span><span className={`${sub} text-[10px] uppercase tracking-widest`}>Added </span><span className={txt}>{fmtDate(item.addedAt)}</span></span>}
            </div>
          </td>
        </tr>
      )}
    </>
  );
}

function Table({items, tab, dk, bdr, sub, txt, surf, onCycle, onEdit, onDelete, showSection}) {
  const isBond=tab==="james_bond", isFilm=tab==="films", isGame=tab==="games", isWL=tab==="watchlist";
  const hasSeasonCol=!isFilm&&!isGame&&!isWL&&!isBond;
  return (
    <table className="w-full text-sm table-fixed">
      <thead>
        <tr className={`border-b ${bdr} ${surf}`}>
          <th className={`text-left py-2 px-3 ${sub} font-mono text-[11px] tracking-widest w-8`}>#</th>
          <th className={`text-left py-2 px-3 ${sub} font-mono text-[11px] tracking-widest`}>TITLE</th>
          {hasSeasonCol && <th className={`text-left py-2 px-3 ${sub} font-mono text-[11px] tracking-widest hidden sm:table-cell w-24`}>PROGRESS</th>}
          <th className={`text-left py-2 px-3 ${sub} font-mono text-[11px] tracking-widest hidden sm:table-cell w-14`}>YEAR</th>
          {isBond && <th className={`text-left py-2 px-3 ${sub} font-mono text-[11px] tracking-widest hidden md:table-cell`}>ACTOR</th>}
          {isGame && <th className={`text-left py-2 px-3 ${sub} font-mono text-[11px] tracking-widest hidden sm:table-cell`}>PLATFORM</th>}
          <th className="w-9"></th>
          <th className="w-16"></th>
        </tr>
      </thead>
      <tbody>
        {items.map((item,i)=>(
          <Row key={item.id} item={item} idx={i} tab={tab} dk={dk} bdr={bdr} sub={sub} txt={txt}
            showSection={showSection}
            onCycle={()=>onCycle(item.id,item._tab,item._colSub)}
            onEdit={()=>onEdit(item)} onDelete={()=>onDelete(item)} />
        ))}
      </tbody>
    </table>
  );
}

function YearGroup({year, items, tab, dk, bdr, sub, txt, surf, onCycle, onEdit, onDelete}) {
  const [open,setOpen]=useState(true);
  const p={tab,dk,bdr,sub,txt,surf,onCycle,onEdit,onDelete};
  return (
    <div className={`rounded-xl border ${bdr} overflow-hidden`}>
      <button onClick={()=>setOpen(o=>!o)} className={`w-full flex items-center justify-between px-4 py-3 ${surf} transition-colors`}>
        <div className="flex items-center gap-3">
          <span className={`font-mono font-bold ${txt}`}>{year}</span>
          <span className={`text-xs font-mono ${sub}`}>{items.length} titles</span>
        </div>
        {open?<Icon.ChevUp />:<Icon.ChevDown />}
      </button>
      {open && <Table items={items} {...p} />}
    </div>
  );
}

// ─── FORM MODAL ───────────────────────────────────────────────────────────────
function FormModal({modal, data, tabs, curTab, curSub, dk, bdr, inp, txt, sub, onSave, onClose}) {
  const src = modal.item||{};
  // Pre-select section: use item's tab if editing, or current tab (skip system tabs)
  const resolvedTab = src._tab&&src._tab!=="__watching" ? src._tab
    : curTab==="__watching"||curTab==="collections" ? "series"
    : curTab;
  const [destTab,   setDestTab]  = useState(resolvedTab);
  const [destSub,   setDestSub]  = useState(src._colSub||curSub);
  const [newCol,    setNewCol]   = useState("");
  const [addingCol, setAddingCol]= useState(false);
  const [title,     setTitle]    = useState(src.title||"");
  const [detail,    setDetail]   = useState(src.detail||"");
  const [progress,  setProgress] = useState(src.progress||"");
  const [annee,     setAnnee]    = useState(src.annee||"");
  const [actor,     setActor]    = useState(src.actor||"");
  const [platform,  setPlatform] = useState(src.platform||"");
  const [genre,     setGenre]    = useState(src.genre||"");
  const [info,      setInfo]     = useState(src.info||"");
  const [rating,    setRating]   = useState(src.rating||0);
  const [statut,    setStatut]   = useState(src.statut||"to_watch");

  const isCol  = destTab==="collections";
  const isBond = destTab==="james_bond";
  const isFilm = destTab==="films";
  const isGame = destTab==="games";
  const colSubs = getColSubs(data);
  const sectionStatuts = getSectionStatuts(destTab);

  // Reset statut when section changes if incompatible
  const handleDestTabChange = val => {
    setDestTab(val);
    const ss = getSectionStatuts(val);
    if (!ss.find(s=>s.key===statut)) setStatut(ss[0].key);
  };

  const handleSave = () => {
    if (!title.trim()) return;
    const finalSub = addingCol&&newCol.trim() ? newCol.trim().toLowerCase().replace(/\s+/g,"_") : destSub;
    onSave({title:title.trim(),detail,progress,annee,actor,platform,genre,info,rating,statut,_destTab:destTab,_destColSub:finalSub});
  };

  const ov = dk?"bg-black/75":"bg-black/40";
  const sf = dk?"bg-zinc-900 border-zinc-700":"bg-white border-zinc-200";
  const lbl = `block ${sub} font-mono text-[11px] tracking-widest uppercase mb-1.5`;
  const inp2 = `w-full border rounded-lg px-3 py-2 text-sm focus:outline-none ${inp}`;
  const editableTabs = tabs.filter(t=>t.id!=="__watching");

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center p-4 ${ov} backdrop-blur-sm`}>
      <div className={`w-full max-w-sm rounded-2xl border shadow-2xl ${sf} max-h-[92vh] overflow-y-auto`}>
        <div className={`flex items-center justify-between px-5 py-4 border-b ${bdr} sticky top-0 ${sf} z-10`}>
          <span className={`font-mono text-xs uppercase tracking-widest ${txt}`}>{modal.type==="add"?"Add Entry":"Edit Entry"}</span>
          <button onClick={onClose} className={`${sub} hover:opacity-70`}><Icon.X /></button>
        </div>
        <div className="p-5 space-y-4">
          <div><label className={lbl}>Title</label>
            <input value={title} onChange={e=>setTitle(e.target.value)} autoFocus className={inp2} /></div>

          <div><label className={lbl}>Section</label>
            <select value={destTab} onChange={e=>handleDestTabChange(e.target.value)} className={inp2}>
              {editableTabs.map(t=><option key={t.id} value={t.id}>{t.label}</option>)}
            </select>
          </div>

          {isCol && (
            <div><label className={lbl}>Collection</label>
              {!addingCol ? (
                <div className="flex gap-2">
                  <select value={destSub} onChange={e=>setDestSub(e.target.value)} className={`flex-1 border rounded-lg px-3 py-2 text-sm focus:outline-none ${inp}`}>
                    {colSubs.map(s=><option key={s.id} value={s.id}>{s.label}</option>)}
                  </select>
                  <button onClick={()=>setAddingCol(true)} className={`px-3 py-2 rounded-lg border ${bdr} text-xs font-mono ${sub}`}>+ New</button>
                </div>
              ):(
                <div className="flex gap-2">
                  <input value={newCol} onChange={e=>setNewCol(e.target.value)} placeholder="Collection name…" className={`flex-1 border rounded-lg px-3 py-2 text-sm focus:outline-none ${inp}`} />
                  <button onClick={()=>setAddingCol(false)} className={`px-3 py-2 rounded-lg border ${bdr} text-xs font-mono ${sub}`}>←</button>
                </div>
              )}
            </div>
          )}

          {!isFilm&&!isBond&&!isGame && <>
            <div><label className={lbl}>Season / Episode</label>
              <input value={detail} onChange={e=>setDetail(e.target.value)} placeholder="S1, Full, S2–S4…" className={inp2} /></div>
            <div><label className={lbl}>Progress</label>
              <input value={progress} onChange={e=>setProgress(e.target.value)} placeholder="S2 Ep4, 35%…" className={inp2} /></div>
          </>}

          <div><label className={lbl}>Year</label>
            <input value={annee} onChange={e=>setAnnee(e.target.value)} placeholder="2024" className={inp2} /></div>

          {isBond && <div><label className={lbl}>Actor</label>
            <input value={actor} onChange={e=>setActor(e.target.value)} className={inp2} /></div>}
          {isGame && <div><label className={lbl}>Platform</label>
            <input value={platform} onChange={e=>setPlatform(e.target.value)} placeholder="PS5, PC, Multi…" className={inp2} /></div>}

          <div><label className={lbl}>Genre</label>
            <select value={genre} onChange={e=>setGenre(e.target.value)} className={inp2}>
              {GENRES.map(g=><option key={g} value={g}>{g||"— None —"}</option>)}
            </select>
          </div>

          <div><label className={lbl}>Info</label>
            <textarea value={info} onChange={e=>setInfo(e.target.value)} placeholder="Notes, platform, cast…"
              className={`${inp2} resize-none`} rows={2} /></div>

          <div><label className={lbl}>Rating</label>
            <RatingDots value={rating} onChange={setRating} sub={sub} /></div>

          <div><label className={lbl}>Status</label>
            <div className="grid grid-cols-3 gap-2">
              {sectionStatuts.map(s=>{
                const icons={watched:"Eye",watching:"Clock",to_watch:"EyeOff"};
                const I=Icon[icons[s.key]];
                return (
                  <button key={s.key} onClick={()=>setStatut(s.key)}
                    className={`flex flex-col items-center gap-1 py-2.5 rounded-lg border text-xs font-mono transition-all ${statut===s.key?(dk?"text-zinc-100 border-zinc-400 bg-zinc-700":"text-zinc-900 border-zinc-400 bg-zinc-100"):(dk?"border-zinc-700 text-zinc-500":"border-zinc-200 text-zinc-400")}`}>
                    <I />{s.label}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="flex gap-2 pt-1">
            <button onClick={onClose} className={`flex-1 py-2.5 rounded-lg border ${bdr} ${sub} text-sm font-mono`}>Cancel</button>
            <button onClick={handleSave} className={`flex-1 py-2.5 rounded-lg text-sm font-mono font-bold ${dk?"bg-white text-zinc-900":"bg-zinc-900 text-white"}`}>Save</button>
          </div>
        </div>
      </div>
    </div>
  );
}

function DeleteModal({item, dk, bdr, sub, txt, onConfirm, onClose}) {
  const ov=dk?"bg-black/75":"bg-black/40";
  const sf=dk?"bg-zinc-900 border-zinc-700":"bg-white border-zinc-200";
  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center p-4 ${ov} backdrop-blur-sm`}>
      <div className={`w-full max-w-xs rounded-2xl border shadow-2xl ${sf} p-6`}>
        <p className={`text-[11px] font-mono ${sub} uppercase tracking-widest mb-2`}>Delete</p>
        <p className={`font-medium ${txt} mb-6 leading-snug`}>{item?.title}</p>
        <div className="flex gap-2">
          <button onClick={onClose}   className={`flex-1 py-2.5 rounded-lg border ${bdr} ${sub} text-sm font-mono`}>Cancel</button>
          <button onClick={onConfirm} className="flex-1 py-2.5 rounded-lg bg-red-600 text-white text-sm font-mono font-bold hover:bg-red-700">Delete</button>
        </div>
      </div>
    </div>
  );
}

function SectionManagerModal({tabs, data, dk, bdr, inp, txt, sub, onReorder, onRename, onDelete, onAdd, onColRename, onColDelete, onColAdd, onColReorder, onClose}) {
  const editableTabs = tabs.filter(t=>t.id!=="__watching");
  const [localTabs,  setLocalTabs]  = useState(editableTabs);
  const [editingId,  setEditingId]  = useState(null);
  const [editLabel,  setEditLabel]  = useState("");
  const [newLabel,   setNewLabel]   = useState("");
  const [view,       setView]       = useState("sections");

  const colSubs = getColSubs(data);
  const [localCols,  setLocalCols]  = useState(colSubs);
  const [editingCol, setEditingCol] = useState(null);
  const [editColLbl, setEditColLbl] = useState("");
  const [newColLbl,  setNewColLbl]  = useState("");

  const dragSections = useDragSort(localTabs, next => {
    setLocalTabs(next);
    // keep __watching at front
    onReorder([tabs.find(t=>t.id==="__watching"), ...next]);
  });
  const dragCols = useDragSort(localCols, next => {
    setLocalCols(next);
    onColReorder(next.map(s=>s.id));
  });

  const ov=dk?"bg-black/75":"bg-black/40";
  const sf=dk?"bg-zinc-900 border-zinc-700":"bg-white border-zinc-200";
  const inp2=`flex-1 border rounded-lg px-3 py-1.5 text-sm focus:outline-none ${inp}`;
  const rowBase=`flex items-center gap-2 p-2.5 rounded-lg border ${bdr} cursor-grab active:cursor-grabbing active:opacity-50 transition-opacity`;
  const btnSave=`px-3 py-1.5 rounded-lg text-xs font-mono font-bold ${dk?"bg-white text-zinc-900":"bg-zinc-900 text-white"}`;

  const doRenameSection = (id, label) => {
    onRename(id, label);
    setLocalTabs(p=>p.map(x=>x.id===id?{...x,label}:x));
    setEditingId(null);
  };
  const doDeleteSection = id => {
    onDelete(id);
    setLocalTabs(p=>p.filter(x=>x.id!==id));
  };
  const doAddSection = label => {
    onAdd(label);
    setNewLabel("");
    // will reflect after parent re-renders, local state will sync on next open
  };

  const doRenameCol = (id, label) => {
    onColRename(id, label);
    setLocalCols(p=>p.map(x=>x.id===id?{...x,label}:x));
    setEditingCol(null);
  };
  const doDeleteCol = id => {
    onColDelete(id);
    setLocalCols(p=>p.filter(x=>x.id!==id));
  };
  const doAddCol = label => {
    const newId = label.toLowerCase().replace(/\s+/g,"_").replace(/[^a-z0-9_]/g,"")+"_"+Date.now().toString(36);
    onColAdd(newId, label);
    setLocalCols(p=>[...p,{id:newId,label}]);
    setNewColLbl("");
  };

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center p-4 ${ov} backdrop-blur-sm`}>
      <div className={`w-full max-w-sm rounded-2xl border shadow-2xl ${sf} max-h-[90vh] overflow-y-auto`}>
        <div className={`flex items-center justify-between px-5 py-4 border-b ${bdr} sticky top-0 ${sf} z-10`}>
          <div className="flex gap-1">
            {[["sections","Sections"],["collections","Collections"]].map(([v,l])=>(
              <button key={v} onClick={()=>setView(v)}
                className={`px-3 py-1 rounded-lg text-xs font-mono transition-all ${view===v?(dk?"bg-zinc-100 text-zinc-900":"bg-zinc-900 text-white"):`${sub}`}`}>
                {l}
              </button>
            ))}
          </div>
          <button onClick={onClose} className={`${sub} hover:opacity-70`}><Icon.X /></button>
        </div>

        <div className="p-5 space-y-1.5">
          {view==="sections" && <>
            <p className={`text-[10px] font-mono ${sub} uppercase tracking-widest mb-3`}>Drag to reorder · rename · delete if empty</p>
            {localTabs.map((t,idx)=>{
              const count = t.id==="collections"
                ? Object.values(data.collections||{}).filter(v=>Array.isArray(v)).flat().length
                : (data[t.id]||[]).length;
              return (
                <div key={t.id} draggable
                  onDragStart={dragSections.onDragStart(idx)}
                  onDragOver={dragSections.onDragOver(idx)}
                  onDrop={dragSections.onDrop}
                  onDragEnd={dragSections.onDragEnd}
                  className={rowBase}>
                  <span className={`${sub} shrink-0`}><Icon.Grip /></span>
                  {editingId===t.id ? (
                    <>
                      <input value={editLabel} onChange={e=>setEditLabel(e.target.value)} className={inp2} autoFocus
                        onKeyDown={e=>e.key==="Enter"&&editLabel.trim()&&doRenameSection(t.id,editLabel.trim())} />
                      <button onClick={()=>editLabel.trim()&&doRenameSection(t.id,editLabel.trim())} className={btnSave}>OK</button>
                      <button onClick={()=>setEditingId(null)} className={sub}><Icon.X /></button>
                    </>
                  ):(
                    <>
                      <span className={`flex-1 text-sm font-medium ${txt}`}>{t.label}</span>
                      <span className={`text-xs font-mono ${sub} w-8 text-right`}>{count}</span>
                      <button onClick={()=>{setEditingId(t.id);setEditLabel(t.label);}}
                        className={`w-7 h-7 flex items-center justify-center rounded ${sub} ${dk?"hover:bg-zinc-700":"hover:bg-zinc-100"}`}><Icon.Edit /></button>
                      {/* can delete any non-collections empty section */}
                      {count===0 && t.id!=="collections" && (
                        <button onClick={()=>doDeleteSection(t.id)}
                          className="w-7 h-7 flex items-center justify-center rounded text-zinc-500 hover:text-red-400"><Icon.Trash /></button>
                      )}
                    </>
                  )}
                </div>
              );
            })}
            <div className={`flex gap-2 pt-3 border-t ${bdr} mt-2`}>
              <input value={newLabel} onChange={e=>setNewLabel(e.target.value)} placeholder="New section name…"
                className={inp2} onKeyDown={e=>e.key==="Enter"&&newLabel.trim()&&doAddSection(newLabel.trim())} />
              <button onClick={()=>newLabel.trim()&&doAddSection(newLabel.trim())} className={btnSave}>Add</button>
            </div>
          </>}

          {view==="collections" && <>
            <p className={`text-[10px] font-mono ${sub} uppercase tracking-widest mb-3`}>Drag to reorder · rename · delete if empty</p>
            {localCols.map((s,idx)=>{
              const count = (data.collections||{})[s.id]?.length||0;
              return (
                <div key={s.id} draggable
                  onDragStart={dragCols.onDragStart(idx)}
                  onDragOver={dragCols.onDragOver(idx)}
                  onDrop={dragCols.onDrop}
                  onDragEnd={dragCols.onDragEnd}
                  className={rowBase}>
                  <span className={`${sub} shrink-0`}><Icon.Grip /></span>
                  {editingCol===s.id ? (
                    <>
                      <input value={editColLbl} onChange={e=>setEditColLbl(e.target.value)} className={inp2} autoFocus
                        onKeyDown={e=>e.key==="Enter"&&editColLbl.trim()&&doRenameCol(s.id,editColLbl.trim())} />
                      <button onClick={()=>editColLbl.trim()&&doRenameCol(s.id,editColLbl.trim())} className={btnSave}>OK</button>
                      <button onClick={()=>setEditingCol(null)} className={sub}><Icon.X /></button>
                    </>
                  ):(
                    <>
                      <span className={`flex-1 text-sm font-medium ${txt}`}>{s.label}</span>
                      <span className={`text-xs font-mono ${sub} w-8 text-right`}>{count}</span>
                      <button onClick={()=>{setEditingCol(s.id);setEditColLbl(s.label);}}
                        className={`w-7 h-7 flex items-center justify-center rounded ${sub} ${dk?"hover:bg-zinc-700":"hover:bg-zinc-100"}`}><Icon.Edit /></button>
                      {count===0 && (
                        <button onClick={()=>doDeleteCol(s.id)}
                          className="w-7 h-7 flex items-center justify-center rounded text-zinc-500 hover:text-red-400"><Icon.Trash /></button>
                      )}
                    </>
                  )}
                </div>
              );
            })}
            <div className={`flex gap-2 pt-3 border-t ${bdr} mt-2`}>
              <input value={newColLbl} onChange={e=>setNewColLbl(e.target.value)} placeholder="New collection name…"
                className={inp2} onKeyDown={e=>e.key==="Enter"&&newColLbl.trim()&&doAddCol(newColLbl.trim())} />
              <button onClick={()=>newColLbl.trim()&&doAddCol(newColLbl.trim())} className={btnSave}>Add</button>
            </div>
          </>}
        </div>
      </div>
    </div>
  );
}

// ─── COLLECTION MANAGER (drag sort) ──────────────────────────────────────────
function CollectionBar({data, colSub, setColSub, onReorder, dk, bdr, pA, sub}) {
  const subs = getColSubs(data);
  const drag = useDragSort(subs, next => onReorder(next.map(s=>s.id)));
  return (
    <div className={`border-b ${bdr} px-4 py-2 flex gap-1.5 overflow-x-auto`}>
      {subs.map((s,idx)=>(
        <div key={s.id} draggable
          onDragStart={drag.onDragStart(idx)}
          onDragOver={drag.onDragOver(idx)}
          onDrop={drag.onDrop}
          onDragEnd={drag.onDragEnd}
          className="flex-shrink-0">
          <button onClick={()=>setColSub(s.id)}
            className={`px-3 py-1 rounded-lg text-xs font-mono whitespace-nowrap transition-all ${colSub===s.id?pA:(dk?"bg-zinc-800 text-zinc-400":"bg-zinc-100 text-zinc-500")}`}>
            {s.label}
          </button>
        </div>
      ))}
    </div>
  );
}

// ─── APP ─────────────────────────────────────────────────────────────────────
const { useRef } = React;

export default function App() {
  const [dark, setDark] = useState(true);
  const [data, setData] = useState(() => {
    try {
      const saved = localStorage.getItem("numa_watchlist_v5");
      if (saved) {
        const p = JSON.parse(saved);
        if(!p.documentary) p.documentary=[];
        if(!p.show) p.show=[];
        if(!p.books) p.books=[];
        return p;
      }
    } catch {}
    return {...INITIAL, books:[]};
  });
  const [tabs, setTabs] = useState(() => {
    try {
      const s = localStorage.getItem("numa_tabs_v2");
      if (s) {
        const saved = JSON.parse(s);
        const savedIds = new Set(saved.map(t=>t.id));
        const missing = DEFAULT_TABS.filter(t=>!savedIds.has(t.id));
        return missing.length > 0 ? [...saved, ...missing] : saved;
      }
    } catch {}
    return DEFAULT_TABS;
  });
  const [tab,     setTab]     = useState("series");
  const [colSub,  setColSub]  = useState(()=>Object.keys((data||{}).collections||{})[0]||"saint_seiya");
  const [search,  setSearch]  = useState("");
  const [sort,    setSort]    = useState("alpha");
  const [fStatus, setFStatus] = useState("all");
  const [modal,   setModal]   = useState(null);
  const [globalQ, setGlobalQ] = useState("");
  const [showMgr, setShowMgr] = useState(false);

  useEffect(()=>{ try{localStorage.setItem("numa_watchlist_v5",JSON.stringify(data));}catch{} },[data]);
  useEffect(()=>{ try{localStorage.setItem("numa_tabs_v2",JSON.stringify(tabs));}catch{} },[tabs]);

  const dk  = dark;
  const bg  = dk?"bg-zinc-950":"bg-gray-50";
  const txt = dk?"text-zinc-100":"text-zinc-900";
  const sub = dk?"text-zinc-400":"text-zinc-500";
  const bdr = dk?"border-zinc-800":"border-zinc-200";
  const surf= dk?"bg-zinc-900":"bg-white";
  const inp = dk?"bg-zinc-800 border-zinc-700 text-zinc-100 placeholder-zinc-600":"bg-white border-zinc-300 text-zinc-900 placeholder-zinc-400";
  const pA  = dk?"bg-zinc-100 text-zinc-900":"bg-zinc-900 text-white";
  const pI  = dk?"text-zinc-500 hover:text-zinc-200":"text-zinc-400 hover:text-zinc-700";

  const allDataItems = () => {
    const out=[];
    tabs.filter(t=>t.id!=="__watching"&&t.id!=="collections"&&data[t.id]).forEach(t=>(data[t.id]||[]).forEach(i=>out.push({...i,_tab:t.id,_colSub:null})));
    Object.entries(data.collections||{}).forEach(([s,arr])=>(arr||[]).forEach(i=>out.push({...i,_tab:"collections",_colSub:s})));
    return out;
  };

  const getItems = () => {
    if (tab==="__watching") return allDataItems().filter(i=>i.statut==="watching");
    if (tab==="collections") return (data.collections||{})[colSub]||[];
    return data[tab]||[];
  };

  const badges = (() => {
    const c={};
    tabs.forEach(t=>{
      if(t.id==="__watching") c[t.id]=allDataItems().filter(i=>i.statut==="watching").length;
      else if(t.id==="collections") c[t.id]=Object.values(data.collections||{}).filter(v=>Array.isArray(v)).flat().filter(i=>i.statut==="to_watch").length;
      else c[t.id]=(data[t.id]||[]).filter(i=>i.statut==="to_watch").length;
    });
    return c;
  })();

  const cycleStatus = (id,_tab,_colSub) => {
    const st=_tab||tab, ss=_colSub||colSub;
    setData(prev=>{
      const next=JSON.parse(JSON.stringify(prev));
      const upd=arr=>(arr||[]).map(i=>i.id===id?{...i,statut:STATUS_CYCLE[i.statut]||"to_watch"}:i);
      if(st==="collections") next.collections[ss]=upd(next.collections[ss]);
      else next[st]=upd(next[st]||[]);
      return next;
    });
  };

  const saveItem = values => {
    if (!modal) return;
    const {type,item}=modal;
    setData(prev=>{
      const next=JSON.parse(JSON.stringify(prev));
      tabs.filter(t=>t.id!=="__watching"&&t.id!=="collections").forEach(t=>{ if(!next[t.id]) next[t.id]=[]; });
      const srcTab=(item&&item._tab)||tab, srcSub=(item&&item._colSub)||colSub;
      const dTab=values._destTab||srcTab, dSub=values._destColSub||srcSub;
      const get=(t,s)=>t==="collections"?(next.collections[s]||[]):(next[t]||[]);
      const set=(t,s,a)=>{ if(t==="collections") next.collections[s]=a; else next[t]=a; };
      if (type==="add") {
        const ni={id:uid(),title:values.title,detail:values.detail||"",progress:values.progress||"",
          annee:values.annee||"",statut:values.statut||"to_watch",actor:values.actor||"",
          platform:values.platform||"",genre:values.genre||"",info:values.info||"",
          rating:values.rating||0,addedAt:Date.now()};
        if(dTab==="collections"){if(!next.collections[dSub])next.collections[dSub]=[];next.collections[dSub].push(ni);}
        else{if(!next[dTab])next[dTab]=[];next[dTab].push(ni);}
      } else if (type==="edit") {
        const cl={title:values.title,detail:values.detail||"",progress:values.progress||"",annee:values.annee||"",
          statut:values.statut||item.statut,actor:values.actor||"",platform:values.platform||"",
          genre:values.genre||"",info:values.info||"",rating:values.rating||0};
        if(dTab===srcTab&&(dTab!=="collections"||dSub===srcSub)){
          set(srcTab,srcSub,get(srcTab,srcSub).map(i=>i.id===item.id?{...i,...cl}:i));
        } else {
          set(srcTab,srcSub,get(srcTab,srcSub).filter(i=>i.id!==item.id));
          const mv={...item,...cl}; delete mv._tab; delete mv._colSub;
          if(dTab==="collections"){if(!next.collections[dSub])next.collections[dSub]=[];next.collections[dSub].push(mv);}
          else{if(!next[dTab])next[dTab]=[];next[dTab].push(mv);}
        }
      } else if (type==="delete") {
        set(srcTab,srcSub,get(srcTab,srcSub).filter(i=>i.id!==item.id));
      }
      return next;
    });
    setModal(null);
  };

  const renameTab = (id,label) => setTabs(prev=>prev.map(t=>t.id===id?{...t,label}:t));
  const deleteTab = id => { setTabs(prev=>prev.filter(t=>t.id!==id)); setData(prev=>{const n={...prev};delete n[id];return n;}); if(tab===id)setTab("series"); };
  const addTab = label => {
    const id=label.toLowerCase().replace(/\s+/g,"_").replace(/[^a-z0-9_]/g,"")+"_"+Date.now().toString(36);
    setTabs(prev=>[...prev,{id,label}]); setData(prev=>({...prev,[id]:[]}));
  };
  const reorderTabs = next => setTabs(next);

  // Collection sub-management
  const renameCol = (id, label) => {
    setData(prev=>{
      const next=JSON.parse(JSON.stringify(prev));
      const arr = next.collections[id]||[];
      delete next.collections[id];
      // rebuild preserving order, rename key via new object
      const rebuilt={};
      Object.keys(prev.collections).forEach(k=>{ rebuilt[k===id?id:k] = next.collections[k]||prev.collections[k]||[]; });
      rebuilt[id]=arr;
      next.collections=rebuilt;
      // store label separately in a labels map
      if(!next._colLabels) next._colLabels={};
      next._colLabels[id]=label;
      return next;
    });
  };
  const deleteCol = id => {
    setData(prev=>{
      const next=JSON.parse(JSON.stringify(prev));
      delete next.collections[id];
      if(next._colLabels) delete next._colLabels[id];
      return next;
    });
    if(colSub===id) setColSub(Object.keys(data.collections||{}).find(k=>k!==id)||"");
  };
  const addCol = (id, label) => {
    setData(prev=>{
      const next=JSON.parse(JSON.stringify(prev));
      next.collections[id]=[];
      if(!next._colLabels) next._colLabels={};
      next._colLabels[id]=label;
      return next;
    });
  };

  // Reorder collections (drag)
  const reorderCollections = orderedKeys => {
    setData(prev=>{
      const next=JSON.parse(JSON.stringify(prev));
      const newCols={};
      orderedKeys.forEach(k=>{ if(next.collections[k]) newCols[k]=next.collections[k]; });
      // include any not in orderedKeys
      Object.keys(next.collections).forEach(k=>{ if(!newCols[k]) newCols[k]=next.collections[k]; });
      next.collections=newCols;
      return next;
    });
  };

  const resetToDefault = () => {
    if (!window.confirm("Reset to default? Your changes will be lost. Make sure you have a backup!")) return;
    try {
      ["numa_watchlist_v5","numa_watchlist_v4","numa_watchlist_v3","numa_watchlist_v2","numa_tabs_v2","numa_tabs_v1"].forEach(k=>{
        try { localStorage.removeItem(k); } catch {}
      });
      // Write fresh data immediately
      localStorage.setItem("numa_watchlist_v5", JSON.stringify({...INITIAL, books:[]}));
      localStorage.setItem("numa_tabs_v2", JSON.stringify(DEFAULT_TABS));
    } catch {}
    // Force React state update
    setData(JSON.parse(JSON.stringify({...INITIAL, books:[]})));
    setTabs(JSON.parse(JSON.stringify(DEFAULT_TABS)));
    setTab("series");
    setSearch("");
    setFStatus("all");
  };

  const [copied, setCopied] = useState(false);
  const exportData = () => {
    const payload = JSON.stringify({data, tabs}, null, 2);
    navigator.clipboard.writeText(payload).then(()=>{
      setCopied(true);
      setTimeout(()=>setCopied(false), 2500);
    }).catch(()=>{
      // fallback: show in textarea
      const ta = document.createElement("textarea");
      ta.value = payload;
      ta.style.cssText = "position:fixed;top:0;left:0;width:100%;height:100%;z-index:9999;font-size:10px;";
      document.body.appendChild(ta);
      ta.focus(); ta.select();
      alert("Sélectionne tout (Cmd+A) et copie (Cmd+C), puis colle dans un fichier .json");
    });
  };
  const importData = e => {
    const file=e.target.files[0]; if(!file) return;
    const r=new FileReader();
    r.onload=ev=>{ try{const{data:d,tabs:t}=JSON.parse(ev.target.result);if(d)setData(d);if(t)setTabs(t);}catch{alert("Invalid file");} };
    r.readAsText(file); e.target.value="";
  };

  const allItems = getItems();
  const stats={watched:0,watching:0,to_watch:0};
  allItems.forEach(i=>{ if(i.statut in stats) stats[i.statut]++; });

  const processed = (() => {
    let items=[...allItems];
    if(search) items=items.filter(i=>i.title.toLowerCase().includes(search.toLowerCase()));
    if(fStatus!=="all") items=items.filter(i=>i.statut===fStatus);
    if(sort==="alpha")  items.sort((a,b)=>a.title.localeCompare(b.title));
    else if(sort==="year")   items.sort((a,b)=>{const ya=parseInt(a.annee||a.detail||0),yb=parseInt(b.annee||b.detail||0);return yb-ya||a.title.localeCompare(b.title);});
    else if(sort==="added")  items.sort((a,b)=>(b.addedAt||0)-(a.addedAt||0));
    else if(sort==="rating") items.sort((a,b)=>(b.rating||0)-(a.rating||0)||a.title.localeCompare(b.title));
    return items;
  })();

  const grouped = (() => {
    if((tab!=="films"&&tab!=="james_bond")||sort!=="year") return null;
    const map={};
    processed.forEach(i=>{const y=i.annee||i.detail||"—";if(!map[y])map[y]=[];map[y].push(i);});
    return Object.entries(map).sort(([a],[b])=>parseInt(b)-parseInt(a));
  })();

  const globalResults = globalQ.trim().length>1
    ? allDataItems().filter(i=>i.title.toLowerCase().includes(globalQ.toLowerCase()))
    : [];

  const totAll=allDataItems().length;
  const totWatched=allDataItems().filter(i=>i.statut==="watched").length;
  const sectionStatuts=getSectionStatuts(tab);

  const tProps={tab,dk,bdr,sub,txt,surf,
    showSection:tab==="__watching",
    onCycle:(id,_t,_s)=>cycleStatus(id,_t,_s),
    onEdit:item=>setModal({type:"edit",item}),
    onDelete:item=>setModal({type:"delete",item}),
  };

  // Smart default section for Add button
  const addDefaultTab = tab==="__watching"||tab==="collections" ? "series" : tab;

  return (
    <div className={`min-h-screen ${bg} ${txt}`} style={{fontFamily:"'IBM Plex Mono',monospace"}}>

      {/* Header */}
      <div className={`border-b ${bdr} px-4 pt-5 pb-0 sticky top-0 z-20 ${dk?"bg-zinc-950":"bg-gray-50"}`}>
        <div className="flex items-center justify-between mb-3">
          <div>
            <h1 className="text-base font-bold tracking-widest uppercase">Watchlist</h1>
            <p className={`text-xs ${sub} font-mono`}>{totWatched} / {totAll} watched</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="relative">
              <span className={`absolute left-2.5 top-1/2 -translate-y-1/2 ${sub} pointer-events-none`}><Icon.Globe /></span>
              <input value={globalQ} onChange={e=>setGlobalQ(e.target.value)} placeholder="Search all…"
                className={`pl-8 pr-7 py-1.5 rounded-lg border text-xs focus:outline-none w-28 ${inp}`} />
              {globalQ && <button onClick={()=>setGlobalQ("")} className={`absolute right-2 top-1/2 -translate-y-1/2 ${sub}`}><Icon.X /></button>}
            </div>
            <button onClick={exportData} title="Copy backup to clipboard"
              className={`flex items-center gap-1.5 px-2 py-2 rounded-lg border ${bdr} transition-all text-xs font-mono ${copied?(dk?"bg-emerald-900/40 border-emerald-700 text-emerald-400":"bg-emerald-50 border-emerald-200 text-emerald-600"):(dk?"hover:bg-zinc-800":"hover:bg-zinc-100")} ${sub}`}>
              {copied ? "✓ Copied!" : <Icon.Download />}
            </button>
            <label title="Import" className={`p-2 rounded-lg border ${bdr} cursor-pointer ${dk?"hover:bg-zinc-800":"hover:bg-zinc-100"}`}>
              <Icon.Upload /><input type="file" accept=".json" className="hidden" onChange={importData} />
            </label>
            <button onClick={()=>setShowMgr(true)} title="Manage sections" className={`p-2 rounded-lg border ${bdr} ${dk?"hover:bg-zinc-800":"hover:bg-zinc-100"}`}><Icon.Settings /></button>
            <button onClick={()=>setDark(d=>!d)} className={`p-2 rounded-lg border ${bdr} ${dk?"hover:bg-zinc-800":"hover:bg-zinc-100"}`}>{dark?<Icon.Sun />:<Icon.Moon />}</button>
            <button onClick={resetToDefault} title="Reset to default data (138 new titles)"
              className={`px-2 py-2 rounded-lg border text-[10px] font-mono transition-all ${bdr} text-red-400 hover:bg-red-900/20`}>
              Reset
            </button>
          </div>
        </div>

        {/* Global search dropdown */}
        {globalResults.length>0 && (
          <div className={`absolute left-0 right-0 top-full z-30 border-t ${bdr} ${dk?"bg-zinc-900":"bg-white"} shadow-2xl max-h-72 overflow-y-auto`}>
            <div className={`px-4 py-2 text-[10px] font-mono uppercase tracking-widest ${sub}`}>{globalResults.length} results</div>
            {globalResults.map(item=>(
              <div key={item.id} className={`flex items-center gap-3 px-4 py-2.5 border-t ${bdr} cursor-pointer ${dk?"hover:bg-zinc-800":"hover:bg-zinc-50"}`}
                onClick={()=>{setGlobalQ("");if(item._tab==="collections"){setTab("collections");setColSub(item._colSub);}else setTab(item._tab);}}>
                <div className="flex-1 min-w-0">
                  <p className={`font-medium text-sm truncate ${txt}`}>{item.title}</p>
                  <p className={`text-[10px] font-mono ${sub}`}>
                    {colSubLabel(item._tab)}{item.detail?` · ${item.detail}`:""}{item.annee?` · ${item.annee}`:""}{item.rating>0?` · ${Array.from({length:item.rating},()=>"●").join("")}`:""}
                  </p>
                </div>
                <StatusDot statut={item.statut} onClick={()=>cycleStatus(item.id,item._tab,item._colSub)} dk={dk} tab={item._tab} />
              </div>
            ))}
          </div>
        )}

        {/* Tabs */}
        <div className="flex overflow-x-auto">
          {tabs.map(t=>{
            const count=badges[t.id]||0, isWatching=t.id==="__watching";
            return (
              <button key={t.id} onClick={()=>{setTab(t.id);setSearch("");setFStatus("all");}}
                className={`relative px-3 py-2 text-xs font-mono tracking-widest uppercase whitespace-nowrap border-b-2 transition-all flex-shrink-0 ${tab===t.id?`border-current ${txt}`:`border-transparent ${pI}`}`}>
                {t.label}
                {isWatching&&count>0 && <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-amber-400"></span>}
                {!isWatching&&count>0 && (
                  <span className={`ml-1.5 inline-flex items-center justify-center min-w-[16px] h-4 px-1 rounded-full text-[9px] font-bold ${tab===t.id?(dk?"bg-zinc-700 text-zinc-300":"bg-zinc-200 text-zinc-600"):(dk?"bg-zinc-800 text-zinc-400":"bg-zinc-100 text-zinc-500")}`}>
                    {count>99?"99+":count}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Collections sub-tabs with drag reorder */}
      {tab==="collections" && (
        <CollectionBar data={data} colSub={colSub} setColSub={setColSub}
          onReorder={reorderCollections} dk={dk} bdr={bdr} pA={pA} sub={sub} />
      )}

      {/* Toolbar */}
      <div className={`px-4 py-3 border-b ${bdr} flex flex-wrap gap-2 items-center`}>
        <div className="relative">
          <span className={`absolute left-3 top-1/2 -translate-y-1/2 ${sub} pointer-events-none`}><Icon.Search /></span>
          <input value={search} onChange={e=>setSearch(e.target.value)} placeholder="Filter…"
            className={`pl-9 pr-3 py-1.5 rounded-lg border text-sm focus:outline-none w-28 ${inp}`} />
        </div>
        <div className="flex gap-1">
          {[["alpha","A–Z"],["year","Year"],["added","Recent"],["rating","Rating"]].map(([m,l])=>(
            <button key={m} onClick={()=>setSort(m)}
              className={`px-2.5 py-1.5 rounded-lg border text-xs font-mono transition-all ${sort===m?pA:(dk?"border-zinc-700 text-zinc-500":"border-zinc-200 text-zinc-400")}`}>{l}</button>
          ))}
        </div>
        <div className="flex gap-1 flex-wrap">
          {[{key:"all",label:"All"},...sectionStatuts].map(s=>(
            <button key={s.key} onClick={()=>setFStatus(s.key)}
              className={`px-2.5 py-1.5 rounded-lg border text-xs font-mono transition-all ${fStatus===s.key?pA:(dk?"border-zinc-700 text-zinc-500":"border-zinc-200 text-zinc-400")}`}>
              {s.label}
            </button>
          ))}
        </div>
        <div className="ml-auto flex items-center gap-2">
          <span className={`text-xs font-mono ${sub} hidden sm:block`}>
            <span className="text-emerald-500">{stats.watched}</span>
            <span> · </span><span className="text-amber-400">{stats.watching}</span>
            <span> · {stats.to_watch} / {allItems.length}</span>
          </span>
          {/* Add button — always visible, pre-selects smart section */}
          <button onClick={()=>setModal({type:"add", defaultTab: addDefaultTab})}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-bold ${dk?"bg-white text-zinc-900":"bg-zinc-900 text-white"}`}>
            <Icon.Plus />Add
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="px-4 py-4">
        {processed.length===0&&!grouped ? (
          <div className={`text-center py-16 ${sub} font-mono text-sm`}>{tab==="__watching"?"Nothing currently watching.":"No results"}</div>
        ) : grouped ? (
          <div className="space-y-2">{grouped.map(([year,items])=><YearGroup key={year} year={year} items={items} {...tProps} />)}</div>
        ) : (
          <div className={`rounded-xl border ${bdr} overflow-hidden`}><Table items={processed} {...tProps} /></div>
        )}
      </div>

      {modal&&modal.type!=="delete" && (
        <FormModal modal={modal} data={data} tabs={tabs}
          curTab={modal.defaultTab||tab} curSub={colSub}
          dk={dk} bdr={bdr} inp={inp} txt={txt} sub={sub}
          onSave={saveItem} onClose={()=>setModal(null)} />
      )}
      {modal&&modal.type==="delete" && (
        <DeleteModal item={modal.item} dk={dk} bdr={bdr} sub={sub} txt={txt}
          onConfirm={()=>saveItem({})} onClose={()=>setModal(null)} />
      )}
      {showMgr && (
        <SectionManagerModal tabs={tabs} data={data} dk={dk} bdr={bdr} inp={inp} txt={txt} sub={sub}
          onReorder={reorderTabs} onRename={renameTab} onDelete={deleteTab} onAdd={addTab}
          onColRename={renameCol} onColDelete={deleteCol} onColAdd={addCol} onColReorder={reorderCollections}
          onClose={()=>setShowMgr(false)} />
      )}
    </div>
  );
}
