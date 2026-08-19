/* =========================================================
   RETROVAULT — product catalog
   category: "console" | "game" | "accessoire"
   platform: "PSP" | "PS1" | "GBA" | "N64" | "Universeel"
   stock: aantal op voorraad (0 = uitverkocht)
   ========================================================= */

const PRODUCTS = [
  // ---------------- CONSOLES ----------------
  {
    id: "c-psp-1000",
    name: "PSP 1000 \"Phat\" — Gereviseerd",
    category: "console",
    platform: "PSP",
    price: 89.00,
    oldPrice: 109.00,
    stock: 6,
    glyph: "🎮",
    tag: "Bestseller",
    short: "De originele PSP, volledig gereviseerd met nieuwe accu en gepolijste behuizing.",
    description: "De PSP 1000 was Sony's eerste handheld-aanval op de gamingmarkt, en deze staat er nog steeds. Elk exemplaar is grondig getest, voorzien van een nieuwe accu en gereinigd UMD-lezerskopje. Inclusief oplader.",
    specs: {
      "Scherm": "4.3\" LCD, 480×272",
      "Opslag": "Memory Stick Pro Duo (los verkrijgbaar)",
      "Accu": "Nieuw, ±4-6 uur speeltijd",
      "Conditie": "Gereviseerd, lichte gebruikssporen mogelijk",
      "Inbegrepen": "Console, oplader, 30 dagen garantie"
    }
  },
  {
    id: "c-psp-2000",
    name: "PSP 2000 \"Slim & Lite\" — Zwart",
    category: "console",
    platform: "PSP",
    price: 99.00,
    stock: 4,
    glyph: "🎮",
    tag: "Populair",
    short: "Dunner, lichter en met TV-out. De meest gebalanceerde PSP-revisie.",
    description: "De PSP 2000 verbetert alles aan de originele: een dunnere behuizing, sneller opstarten en video-uitgang voor op de tv. Deze unit is compleet gereviseerd en klaar voor je gameverzameling.",
    specs: {
      "Scherm": "4.3\" LCD, 480×272",
      "Opslag": "Memory Stick Pro Duo (los verkrijgbaar)",
      "Extra": "TV-out via componentkabel",
      "Conditie": "Gereviseerd, A-grade behuizing",
      "Inbegrepen": "Console, oplader, 30 dagen garantie"
    }
  },
  {
    id: "c-psp-3000",
    name: "PSP 3000 — Wit",
    category: "console",
    platform: "PSP",
    price: 109.00,
    stock: 2,
    glyph: "🎮",
    tag: "Laatste stuks",
    short: "Verbeterd scherm met minder ghosting en ingebouwde microfoon.",
    description: "De PSP 3000 heeft een merkbaar beter LCD-scherm met snellere responstijd en anti-ghosting technologie, plus een ingebouwde microfoon. De topversie van de klassieke PSP-lijn.",
    specs: {
      "Scherm": "4.3\" LCD, verbeterd contrast",
      "Opslag": "Memory Stick Pro Duo (los verkrijgbaar)",
      "Extra": "Ingebouwde microfoon",
      "Conditie": "Gereviseerd, uitstekende staat",
      "Inbegrepen": "Console, oplader, 30 dagen garantie"
    }
  },
  {
    id: "c-psp-go",
    name: "PSP Go — Digitale Editie",
    category: "console",
    platform: "PSP",
    price: 129.00,
    stock: 0,
    glyph: "🎮",
    tag: "Uitverkocht",
    short: "Compacte schuifmodel zonder UMD-drive, gericht op digitale games.",
    description: "De zeldzame PSP Go met schuifscherm en 16GB interne opslag. Geen UMD-drive — puur digitaal. Een gewild verzamelobject.",
    specs: {
      "Scherm": "3.8\" LCD, 480×272",
      "Opslag": "16GB intern + Memory Stick Micro",
      "Vorm": "Schuifmodel, geen UMD-drive",
      "Conditie": "Gereviseerd",
      "Inbegrepen": "Console, oplader, 30 dagen garantie"
    }
  },
  {
    id: "c-ps1-classic",
    name: "PlayStation 1 (SCPH-9000) — Gereviseerd",
    category: "console",
    platform: "PS1",
    price: 79.00,
    stock: 5,
    glyph: "📀",
    tag: "Klassieker",
    short: "De laatste PS1-revisie, compact en betrouwbaar, met nieuwe laserlens.",
    description: "Deze late-model PS1 heeft een vervangen laserlens voor betrouwbaar lezen van je schijven en is volledig getest op alle poorten en de voedingseenheid.",
    specs: {
      "Model": "SCPH-9000 (laatste revisie)",
      "Video": "Composiet / RGB Scart mogelijk",
      "Conditie": "Gereviseerd, nieuwe laser",
      "Inbegrepen": "Console, voeding, AV-kabel, 1 controller"
    }
  },
  {
    id: "c-gba-sp",
    name: "Game Boy Advance SP — Gereviseerd",
    category: "console",
    platform: "GBA",
    price: 69.00,
    stock: 8,
    glyph: "🕹️",
    tag: null,
    short: "Klapmodel met ingebouwde verlichting en oplaadbare accu.",
    description: "De GBA SP blijft een publiekslieveling: klein, met frontlicht en een oplaadbare accu in plaats van AA-batterijen. Perfect voor onderweg gamen.",
    specs: {
      "Scherm": "2.9\" TFT met frontlight",
      "Accu": "Oplaadbaar, ingebouwd",
      "Conditie": "Gereviseerd",
      "Inbegrepen": "Console, oplader, 30 dagen garantie"
    }
  },
  {
    id: "c-n64",
    name: "Nintendo 64 — Gereviseerd",
    category: "console",
    platform: "N64",
    price: 99.00,
    stock: 3,
    glyph: "🕹️",
    tag: null,
    short: "De iconische 3D-pionier, compleet getest en gereinigd.",
    description: "Deze N64 is volledig gereinigd, getest op alle cartridge-contacten en voorzien van een nieuwe AV-kabel. Klaar om je klassiekers weer op te starten.",
    specs: {
      "Video": "Composiet AV",
      "Conditie": "Gereviseerd, gereinigde cartridgepoort",
      "Inbegrepen": "Console, voeding, AV-kabel, 1 controller"
    }
  },

  // ---------------- PSP GAMES ----------------
  {
    id: "g-psp-gow-cos",
    name: "God of War: Chains of Olympus",
    category: "game",
    platform: "PSP",
    price: 24.00,
    stock: 7,
    glyph: "💿",
    tag: "Topgame",
    short: "Actie-avontuur waarin Kratos strijdt tegen de goden van de onderwereld.",
    description: "Een van de best beoordeelde PSP-titels ooit. Chains of Olympus brengt de intense actie van de hoofdreeks naar de handheld, met verrassend goede graphics voor zijn tijd.",
    specs: { "Formaat": "UMD", "Genre": "Actie-avontuur", "Conditie": "Compleet in doosje, incl. hoesje" }
  },
  {
    id: "g-psp-lumines",
    name: "Lumines",
    category: "game",
    platform: "PSP",
    price: 14.00,
    stock: 9,
    glyph: "💿",
    tag: null,
    short: "Verslavende puzzelgame met muziek die meebeweegt met je acties.",
    description: "Een hypnotiserende blokkenpuzzel waarbij de muziek dynamisch reageert op je spel. Een van de betere launch-titels van de PSP.",
    specs: { "Formaat": "UMD", "Genre": "Puzzel", "Conditie": "Compleet in doosje" }
  },
  {
    id: "g-psp-mgs-pw",
    name: "Metal Gear Solid: Peace Walker",
    category: "game",
    platform: "PSP",
    price: 29.00,
    stock: 4,
    glyph: "💿",
    tag: "Zeldzaam",
    short: "Volwaardige MGS-titel exclusief voor PSP, met co-op modus.",
    description: "Een van de meest ambitieuze PSP-games ooit gemaakt — een volwaardig Metal Gear-avontuur met basisbouw, co-op missies en een epische verhaallijn.",
    specs: { "Formaat": "UMD", "Genre": "Actie / Stealth", "Conditie": "Compleet in doosje, incl. boekje" }
  },
  {
    id: "g-psp-patapon",
    name: "Patapon",
    category: "game",
    platform: "PSP",
    price: 19.00,
    stock: 6,
    glyph: "💿",
    tag: null,
    short: "Ritmegame waarin je een legertje trommelt naar de overwinning.",
    description: "Een unieke mix van ritmegame en strategie, met een herkenbare handgetekende stijl. Trommel je Patapon-leger naar de overwinning.",
    specs: { "Formaat": "UMD", "Genre": "Ritme / Strategie", "Conditie": "Compleet in doosje" }
  },
  {
    id: "g-psp-ff-crisis",
    name: "Crisis Core: Final Fantasy VII",
    category: "game",
    platform: "PSP",
    price: 34.00,
    stock: 3,
    glyph: "💿",
    tag: "Fan-favoriet",
    short: "Prequel op FFVII die het verhaal van Zack Fair vertelt.",
    description: "Een emotioneel actie-RPG dat het lot van Zack Fair volgt, jaren voor de gebeurtenissen van Final Fantasy VII. Een absolute must voor RPG-fans.",
    specs: { "Formaat": "UMD", "Genre": "Actie-RPG", "Conditie": "Compleet in doosje, incl. boekje" }
  },
  {
    id: "g-psp-daxter",
    name: "Daxter",
    category: "game",
    platform: "PSP",
    price: 17.00,
    stock: 5,
    glyph: "💿",
    tag: null,
    short: "Platformer spin-off met de sidekick uit Jak & Daxter in de hoofdrol.",
    description: "Daxter neemt het heft in eigen handen in deze platformer vol humor, strakke besturing en verrassend gepolijste graphics voor de PSP.",
    specs: { "Formaat": "UMD", "Genre": "Platformer", "Conditie": "Compleet in doosje" }
  },
  {
    id: "g-psp-tekken6",
    name: "Tekken 6",
    category: "game",
    platform: "PSP",
    price: 21.00,
    stock: 0,
    glyph: "💿",
    tag: "Uitverkocht",
    short: "Volledige vechtgame-roster onderweg meenemen.",
    description: "Een indrukwekkend complete vechtgame-poort met bijna de volledige console-roster, inclusief Scenario Campaign modus.",
    specs: { "Formaat": "UMD", "Genre": "Vechtgame", "Conditie": "Compleet in doosje" }
  },
  {
    id: "g-psp-wipeout",
    name: "WipEout Pure",
    category: "game",
    platform: "PSP",
    price: 16.00,
    stock: 6,
    glyph: "💿",
    tag: null,
    short: "Futuristische anti-zwaartekracht racer met pompende soundtrack.",
    description: "Bloedsnelle anti-zwaartekracht races met een iconische elektronische soundtrack. Een schoolvoorbeeld van wat de PSP grafisch kon.",
    specs: { "Formaat": "UMD", "Genre": "Racing", "Conditie": "Compleet in doosje" }
  },

  // ---------------- ACCESSOIRES ----------------
  {
    id: "a-psp-case",
    name: "PSP Beschermhoes — Universeel",
    category: "accessoire",
    platform: "PSP",
    price: 12.00,
    stock: 20,
    glyph: "🧳",
    tag: null,
    short: "Stevige hoes met vakjes voor UMD's, past op alle PSP-modellen.",
    description: "Gevoerde beschermhoes met ritssluiting, ruimte voor de console plus vier UMD-schijfjes. Past op PSP 1000, 2000 en 3000.",
    specs: { "Materiaal": "Nylon, gevoerd", "Past op": "PSP 1000 / 2000 / 3000", "Kleur": "Zwart" }
  },
  {
    id: "a-psp-charger",
    name: "PSP Oplader (vervanging)",
    category: "accessoire",
    platform: "PSP",
    price: 9.00,
    stock: 15,
    glyph: "🔌",
    tag: null,
    short: "Originele-specificatie oplader voor alle PSP-modellen.",
    description: "Een betrouwbare vervangingsoplader met dezelfde specificaties als de originele Sony-adapter. Geschikt voor PSP 1000, 2000, 3000 en Go.",
    specs: { "Uitgang": "5V, 2A", "Past op": "PSP 1000 / 2000 / 3000 / Go" }
  },
  {
    id: "a-psp-memstick",
    name: "Memory Stick Pro Duo 4GB",
    category: "accessoire",
    platform: "PSP",
    price: 15.00,
    stock: 10,
    glyph: "💾",
    tag: null,
    short: "Geheugenkaart voor savegames, homebrew en muziek.",
    description: "Betrouwbare 4GB Memory Stick Pro Duo, compatibel met alle PSP-modellen. Ideaal voor savegames, foto's en muziek.",
    specs: { "Capaciteit": "4GB", "Type": "Memory Stick Pro Duo" }
  },
  {
    id: "a-psp-screen",
    name: "PSP Screenprotector (2-pack)",
    category: "accessoire",
    platform: "PSP",
    price: 6.00,
    stock: 25,
    glyph: "🧼",
    tag: null,
    short: "Krasbestendige folie op maat gesneden voor het PSP-scherm.",
    description: "Set van twee screenprotectors, precisiegesneden voor het 4.3\" PSP-scherm. Inclusief microvezeldoekje en applicatiekaart.",
    specs: { "Inhoud": "2 protectors + doekje", "Past op": "PSP 1000 / 2000 / 3000" }
  },
  {
    id: "a-ps1-controller",
    name: "PS1 Controller (Dual Analog)",
    category: "accessoire",
    platform: "PS1",
    price: 18.00,
    stock: 9,
    glyph: "🎮",
    tag: null,
    short: "Gereviseerde originele controller met werkende analoge sticks.",
    description: "Getest en gereinigd, met soepel werkende analoge sticks en knoppen. Geschikt voor alle PS1- en PS2-consoles.",
    specs: { "Type": "Dual Analog (SCPH-1200)", "Conditie": "Gereviseerd en getest" }
  },
  {
    id: "a-n64-controller",
    name: "N64 Controller — Grijs",
    category: "accessoire",
    platform: "N64",
    price: 22.00,
    stock: 7,
    glyph: "🕹️",
    tag: null,
    short: "Originele controller met nieuwe joystick-mechaniek.",
    description: "Deze N64-controller is voorzien van een vervangen joystick-mechaniek tegen het beruchte 'los spelen' van de stick.",
    specs: { "Kleur": "Grijs", "Conditie": "Gereviseerd, nieuwe joystick" }
  },
  {
    id: "a-gba-link",
    name: "GBA Link Kabel",
    category: "accessoire",
    platform: "GBA",
    price: 8.00,
    stock: 12,
    glyph: "🔗",
    tag: null,
    short: "Voor multiplayer sessies tussen twee Game Boy Advance consoles.",
    description: "Verbind twee GBA's (of SP's) voor multiplayer games en trades. Een essentieel accessoire voor Pokémon-ruilen.",
    specs: { "Lengte": "1.2m", "Compatibel": "GBA / GBA SP" }
  },
  {
    id: "a-universal-cleaning",
    name: "Retro Cleaning Kit",
    category: "accessoire",
    platform: "Universeel",
    price: 13.00,
    stock: 18,
    glyph: "🧽",
    tag: null,
    short: "Reinig cartridge-contacten en UMD-lenzen veilig en effectief.",
    description: "Complete set met reinigingsvloeistof, wattenstaafjes en een microvezeldoekje om je retro cartridges, schijfjes en consolepoorten schoon te houden.",
    specs: { "Inhoud": "Vloeistof, staafjes, doekje", "Geschikt voor": "Cartridges, UMD, poorten" }
  }
];

/* Helper lookups */
function getProductById(id){
  return PRODUCTS.find(p => p.id === id);
}
function formatPrice(n){
  return "€ " + n.toFixed(2).replace(".", ",");
}
