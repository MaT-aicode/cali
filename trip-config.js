// Beispiel: Konfiguration der Reise „Antonia kommt nach Cali“ (Kalifornien, Dezember 2026).
// Alles, was eine Reise von einer anderen unterscheidet, steht hier. index.html bleibt unverändert.
window.TRIP = {
  // Eindeutige Kennung: steckt im PIN-Salt und im Gerätespeicher. Für jede Reise neu und nie wieder ändern.
  id: "antonia-kommt-nach-cali-2026",

  title: "Antonia kommt nach Cali",   // Seitentitel und Überschrift
  titleAccent: "Cali",                // Ende des Titels, das in der Akzentfarbe erscheint (optional)
  eyebrow: "Kalifornien · Nationalparks · 22.12.2026 – 03.01.2027",
  lead: "Unsere gemeinsame Seite für den Urlaub. Trage Events ein, sie landen sofort im Zeitstrahl und auf der Karte.",

  start: "2026-12-22",                // erster Reisetag
  end: "2027-01-03",                  // letzter Reisetag
  tags: {                             // kurze Hinweise unter einzelnen Tagen
    "2026-12-22": "Ankunft", "2026-12-24": "Heiligabend", "2026-12-25": "1. Weihnachtstag",
    "2026-12-31": "Silvester", "2027-01-01": "Neujahr", "2027-01-03": "Abreise",
  },

  examples: {                         // Beispieltexte in den Eingabefeldern
    single: "Griffith Observatory",
    multi: "Roadtrip Vegas, Zion und Bryce",
    place: "Zion National Park",
  },

  countrycodes: "us",                 // ISO-Ländercodes für die OpenStreetMap-Suche, mehrere mit Komma

  map: {
    view: [[32.4, -123.3], [39.6, -109.3]],      // Ausschnitt beim Öffnen [[Süd, West], [Nord, Ost]]
    maxBounds: [[27, -131], [48, -99]],           // weiter als diesen Rahmen kann man nicht schieben
    minZoom: 5,
    highlight: ["California", "Nevada", "Arizona", "Utah"],   // Regionsnamen aus mapdata.js, die hervorgehoben werden
    regionLabels: [["Kalifornien", 37.2, -119.6], ["Nevada", 39.3, -116.9], ["Arizona", 34.3, -111.7], ["Utah", 39.4, -111.6]],
    cities: [                         // [Name, lat, lng, groß beschriften?]
      ["Los Angeles", 34.0522, -118.2437, true], ["San Francisco", 37.7749, -122.4194, true], ["Las Vegas", 36.1699, -115.1398, true],
      ["San Diego", 32.7157, -117.1611], ["Sacramento", 38.5816, -121.4944], ["Fresno", 36.7378, -119.7871],
      ["Santa Barbara", 34.4208, -119.6982], ["Monterey", 36.6002, -121.8947], ["San Luis Obispo", 35.2828, -120.6596],
      ["Palm Springs", 33.8303, -116.5453], ["Barstow", 34.8958, -117.0173], ["Bakersfield", 35.3733, -119.0187],
      ["Reno", 39.5296, -119.8138], ["St. George", 37.0965, -113.5684], ["Kanab", 37.0475, -112.5263],
      ["Page", 36.9147, -111.4558], ["Flagstaff", 35.1983, -111.6513], ["Phoenix", 33.4484, -112.074],
      ["Moab", 38.5733, -109.5498], ["Salt Lake City", 40.7608, -111.891],
    ],
    extraPlaces: [                    // grüne Beschriftungen beim Hineinzoomen (z. B. Parks, die in mapdata.js fehlen)
      ["Bryce Canyon", 37.593, -112.187], ["Arches", 38.733, -109.593], ["Monument Valley", 36.998, -110.098],
      ["Valley of Fire", 36.43, -114.513], ["Horseshoe Bend", 36.879, -111.51], ["Antelope Canyon", 36.862, -111.374],
    ],
  },

  places: [                           // weitere Orte nur für die Ortssuche (werden nicht beschriftet)
    ["Santa Monica", 34.0195, -118.4912], ["Hollywood", 34.0928, -118.3287], ["Malibu", 34.0259, -118.7798],
    ["Venice", 33.985, -118.4695], ["Beverly Hills", 34.0736, -118.4004], ["Pasadena", 34.1478, -118.1445],
    ["Anaheim", 33.8366, -117.9143], ["Disneyland", 33.8121, -117.919], ["Springdale", 37.1889, -112.9986],
    ["Tropic", 37.6253, -112.0846], ["Henderson", 36.0395, -114.9817], ["Boulder City", 35.9786, -114.8325],
    ["Big Sur", 36.2704, -121.8081], ["Carmel", 36.5552, -121.9233], ["Lake Tahoe", 39.0968, -120.0324],
    ["Twentynine Palms", 34.1356, -116.0542], ["Williams", 35.2495, -112.191], ["Panguitch", 37.8228, -112.4358],
  ],

  // Keine Fotos: Die Seite liegt öffentlich auf GitHub Pages. Fotos würden ohne PIN abrufbar sein.
  heroAccent: "#ffb27a",              // Farbe des Titel-Akzents auf dem Foto

  countdown: {                        // Tageszähler im Kopfbereich und Checkpoints im Zeitstrahl
    unit: "Tage, bis Antonia kommt",
    unitOne: "Tag, bis Antonia kommt",
    before: "Der Countdown läuft.",   // Spruch, solange noch kein Checkpoint erreicht ist
    after: "Schön war's.",
    tripHeading: "Die Reise",
    checkpoints: [                    // ab date sichtbar; until = nur bis zu diesem Tag; vorher verdeckt
      { date: "2026-11-15", text: "Was, es ist schon so viel vom November vergangen?!" },
      { date: "2026-11-20", text: "OMG, bald hat Antonia Geburtstag!" },
      { date: "2026-11-25", until: "2026-11-25", text: "OMG, Antonia hat Geburtstag!" },
      { date: "2026-11-26", text: "OMG, es ist gefühlt schon Dezember." },
      { date: "2026-12-01", text: "Nur noch ein paar Tage bis zum Besuch." },
      { date: "2026-12-10", text: "Jetzt packennnnn!" },
      { date: "2026-12-22", text: "Es geht lossssss!" },
    ],
  },

  palette: {                          // Farben aus dem Zion-Foto: Canyonrot, Sandstein, Himmelblau, Talgrün
    light: {
      bg: "#fbf3ea", surface: "#fffdfa", wash: "#f5e4d4", fg: "#2e1a12", muted: "#7b5c4c",
      accent: "#1f5fbf", "accent-2": "#c2492a", line: "#ecd5c1", sea: "#cfe3f8", land: "#f9efe3",
      "land-hi": "#f5d6b8", "land-far": "#efe4d8", park: "#d5e6bd", border: "#c8a183", road: "#b0482c",
      pin: "#d0342c", idea: "#3e8a3a",
      c1: "#1f5fbf", c2: "#e07b33", c3: "#3e8a3a", c4: "#8a3b22", c5: "#2a96b8", c6: "#b98a16", "on-c": "#ffffff",
    },
    dark: {
      bg: "#1b120d", surface: "#281a12", wash: "#21160f", fg: "#f7ece3", muted: "#c4a493",
      accent: "#82b4ff", "accent-2": "#f08559", line: "#3f2b20", sea: "#0f1b2c", land: "#2a1d16",
      "land-hi": "#3d2619", "land-far": "#1f1611", park: "#22351d", border: "#5c4134", road: "#d06a48",
      pin: "#ff5c4f", idea: "#8fd07a",
      c1: "#82b4ff", c2: "#f0a060", c3: "#8fd07a", c4: "#d98a6a", c5: "#6cc8e0", c6: "#e6c04a", "on-c": "#1b120d",
    },
  },
};
