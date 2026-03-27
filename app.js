// Deine JSON-Datenbank
const jsonDaten = {
  "dropdown_konfiguration": [
    {
      "objektart": "Abgassystem",
      "unterart_feld": "Abgassystemtyp",
      "optionen": ["Einwandig", "Doppelwandig", "Konzentrisch (LAS)", "Abgasleitung flexibel"]
    },
    {
      "objektart": "Armaturen",
      "unterart_feld": "Armaturentyp",
      "optionen": ["Kugelhahn", "Absperrklappe", "Rückschlagventil", "Sicherheitsventil", "Druckminderer"]
    },
    {
      "objektart": "Brauchwarmwasserspeicher",
      "unterart_feld": "Speichertyp",
      "optionen": ["Emaillierter Stahlspeicher", "Edelstahlspeicher", "Ladespeicher", "Rohrwendelspeicher"]
    },
    {
      "objektart": "Fernwärmestation",
      "unterart_feld": "Stationstyp",
      "optionen": ["Direktstation", "Indirektstation", "Kompaktstation", "Hausstation"]
    },
    {
      "objektart": "Gasbrenner",
      "unterart_feld": "Brennertyp",
      "optionen": ["Gebläsebrenner", "Atmosphärischer Brenner", "Vormischbrenner", "Zweistufiger Brenner"]
    },
    {
      "objektart": "Gasbrennwertkessel",
      "unterart_feld": "Kesseltyp",
      "optionen": ["Wandhängend", "Bodenstehend", "Kaskadensystem"]
    },
    {
      "objektart": "Gaszähler",
      "unterart_feld": "Zählertyp",
      "optionen": ["Balgengaszähler", "Drehkolbenzähler", "Turbinenradzähler"]
    },
    {
      "objektart": "Heizungsverteiler",
      "unterart_feld": "Verteilertyp",
      "optionen": ["Standardverteiler", "Modularverteiler", "Kompaktverteiler"]
    },
    {
      "objektart": "Hydraulische Weiche",
      "unterart_feld": "Bauart",
      "optionen": ["Senkrecht", "Waagerecht", "Kompaktbauweise"]
    },
    {
      "objektart": "Kaltwasserzähler",
      "unterart_feld": "Funktion",
      "optionen": ["Hauswasserzähler", "Wohnungswasserzähler", "Großwasserzähler"]
    },
    {
      "objektart": "Kombispeicher",
      "unterart_feld": "Speichertyp",
      "optionen": ["Tank-in-Tank", "Durchlaufprinzip (Hygiene)", "Schichtenspeicher"]
    },
    {
      "objektart": "Membran-Ausdehnungsgefäß (MAG)",
      "unterart_feld": "Gefäßtyp",
      "optionen": ["Heizungs-MAG", "Trinkwasser-MAG", "Solar-MAG"]
    },
    {
      "objektart": "Pelletkessel",
      "unterart_feld": "Kesseltyp",
      "optionen": ["Vollautomatisch", "Halbautomatisch", "Brennwert-Pelletkessel"]
    },
    {
      "objektart": "Pelletlager",
      "unterart_feld": "Lagertyp",
      "optionen": ["Gewebesilo", "Erdtank", "Lagerraum mit Schrägboden"]
    },
    {
      "objektart": "Pufferspeicher",
      "unterart_feld": "Speichertyp",
      "optionen": ["Heizwasser-Pufferspeicher", "Schichtenspeicher", "Kombipuffer"]
    },
    {
      "objektart": "Pumpe",
      "unterart_feld": "Pumpentyp",
      "optionen": ["Hocheffizienzpumpe", "Zirkulationspumpe", "Ladepumpe", "Kondensatpumpe"]
    },
    {
      "objektart": "Raumheizkreis",
      "unterart_feld": "Hydraulikkreistyp",
      "optionen": ["Fußbodenheizung", "Radiatorenheizkreis", "Lüftungserhitzer"]
    },
    {
      "objektart": "Regelung",
      "unterart_feld": "Regelungstyp",
      "optionen": ["Witterungsgeführt", "Raumgeführt", "Gebäudeleittechnik (GLT)"]
    },
    {
      "objektart": "Sensoren&Fühler",
      "unterart_feld": "Sensortyp",
      "optionen": ["Außenfühler", "Tauchfühler", "Anlegefühler", "Drucksensor"]
    },
    {
      "objektart": "Sicherheitskomponente",
      "unterart_feld": "Sicherheitskomponenten-Typ",
      "optionen": ["Strömungswächter", "STB (Sicherheitstemperaturbegrenzer)", "Wassermangelsicherung"]
    },
    {
      "objektart": "Stellglieder",
      "unterart_feld": "Stellgliedtyp",
      "optionen": ["Mischermotor", "Zonenventil", "Hubantrieb"]
    },
    {
      "objektart": "Stromzähler",
      "unterart_feld": "Zählerstruktur",
      "optionen": ["Eintarifzähler", "Zweitarifzähler", "Smart Meter"]
    },
    {
      "objektart": "Wärmemengenzähler",
      "unterart_feld": "Funktion",
      "optionen": ["Kompakt-WMZ", "Split-WMZ", "Ultraschall-WMZ"]
    },
    {
      "objektart": "Wärmepumpe",
      "unterart_feld": "Wärmepumpentyp",
      "optionen": ["Luft-Wasser (Monoblock)", "Luft-Wasser (Split)", "Sole-Wasser", "Wasser-Wasser"]
    },
    {
      "objektart": "Wärmeübertrager",
      "unterart_feld": "WÜT-Typ",
      "optionen": ["Plattenwärmetauscher gelötet", "Plattenwärmetauscher geschraubt", "Rohrbündelwärmetauscher"]
    },
    {
      "objektart": "Zirkulationskreislauf",
      "unterart_feld": "Hydraulikkreistyp",
      "optionen": ["Trinkwasser-Zirkulation", "Industrie-Zirkulation"]
    }
  ]
};

const config = jsonDaten.dropdown_konfiguration;

// HTML-Elemente greifen
const objektartSelect = document.getElementById('objektart');
const unterartSelect = document.getElementById('unterart');
const unterartLabel = document.getElementById('unterart-label');
const captureBtn = document.getElementById('capture-btn');
const cameraInput = document.getElementById('camera-input');
const statusDiv = document.getElementById('status');
const buiInput = document.getElementById('bui-nummer');

// 1. Erstes Dropdown mit "Objektarten" füllen
config.forEach(item => {
    const option = document.createElement('option');
    option.value = item.objektart;
    option.textContent = item.objektart;
    objektartSelect.appendChild(option);
});

// 2. Event-Listener: Wenn sich das erste Dropdown ändert
objektartSelect.addEventListener('change', function() {
    const gewaehlteObjektart = this.value;
    
    // Dropdown 2 zurücksetzen
    unterartSelect.innerHTML = '<option value="">Bitte wählen...</option>';
    
    if (gewaehlteObjektart === "") {
        unterartSelect.disabled = true;
        captureBtn.disabled = true;
        unterartLabel.textContent = "Unterart:";
        return;
    }

    // Passenden Eintrag im JSON finden
    const passendesObjekt = config.find(item => item.objektart === gewaehlteObjektart);
    
    // Label ändern und Optionen befüllen
    unterartLabel.textContent = passendesObjekt.unterart_feld + ":";
    passendesObjekt.optionen.forEach(opt => {
        const option = document.createElement('option');
        option.value = opt;
        option.textContent = opt;
        unterartSelect.appendChild(option);
    });

    unterartSelect.disabled = false;
    checkForm();
});

// 3. Button prüfen, wenn zweites Dropdown gewählt wurde
unterartSelect.addEventListener('change', checkForm);
// Prüft bei jedem Tastendruck im BUI-Feld, ob der Button aktiv werden darf
buiInput.addEventListener('input', checkForm);
// 4. Klick auf unseren gestylten Button triggert das unsichtbare Kamera-Feld
captureBtn.addEventListener('click', () => {
    statusDiv.textContent = ""; // Status zurücksetzen
    cameraInput.click();
});

// 5. Wenn ein Foto gemacht/ausgewählt wurde
cameraInput.addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    
    reader.onload = function(e) {
        // 1. Das Bild als Data-URL
        let imageData = e.target.result;

        // 2. Alle Werte aus den Feldern holen
        const buiZahl = document.getElementById('bui-nummer').value || "0";
        // Erzeugt "BUI" + 5 Stellen mit Nullen aufgefüllt (z.B. BUI00003)
        const buiFormatiert = "BUI" + String(buiZahl).padStart(5, '0');
        
        const objekt = objektartSelect.value;
        const unterartFeld = unterartLabel.textContent.replace(':', '');
        const unterartWert = unterartSelect.value;
        
        // 3. Den Text zusammenbauen (BUI steht jetzt vorne)
        const metaTagText = `${buiFormatiert} | Objektart: ${objekt} | ${unterartFeld}: ${unterartWert}`;

        try {
            // 4. EXIF-Daten generieren
            let exifObj = {"0th": {}, "Exif": {}, "GPS": {}};
            
            // Wir schreiben in zwei Felder, damit Windows es leichter findet:
            // Tag 270 (Titel)
            exifObj["0th"][piexif.ImageIFD.ImageDescription] = metaTagText;
            // UserComment (Kommentar)
            exifObj["Exif"][piexif.ExifIFD.UserComment] = metaTagText;
            
            let exifBytes = piexif.dump(exifObj);
            
            // 5. Neues Bild mit eingefügten EXIF-Daten erstellen
            let newImageData = piexif.insert(exifBytes, imageData);

            // 6. Bild lokal herunterladen (Dateiname inkl. BUI)
            downloadImage(newImageData, `${buiFormatiert}_${objekt}.jpg`);
            
            // 7. UI zurücksetzen (BUI-Feld wird NICHT geleert)
            statusDiv.textContent = "✅ Bild erfolgreich gespeichert!";
            setTimeout(() => statusDiv.textContent = "", 4000);
            cameraInput.value = ""; // Nur Kamera-Input leeren
            
        } catch (error) {
            console.error("Fehler beim Schreiben der EXIF-Daten:", error);
            statusDiv.textContent = "❌ Fehler beim Verarbeiten des Bildes.";
            statusDiv.style.color = "red";
        }
    };

    // Bild als Data-URL einlesen (benötigt von piexif)
    reader.readAsDataURL(file);
});

// Hilfsfunktion zum Herunterladen des Bildes
function downloadImage(dataUrl, filename) {
    const link = document.createElement('a');
    link.href = dataUrl;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// Service Worker registrieren (für PWA)
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js')
    .then(() => console.log("Service Worker registriert!"))
    .catch(err => console.error("Service Worker Fehler:", err));
}

function checkForm() {
    const buiWert = buiInput.value.trim();
    const objektartWert = objektartSelect.value;
    const unterartWert = unterartSelect.value;

    // Nur wenn alle drei Felder befüllt sind, wird disabled auf false gesetzt
    if (buiWert !== "" && objektartWert !== "" && unterartWert !== "") {
        captureBtn.disabled = false;
    } else {
        captureBtn.disabled = true;
    }
}
// Initialer Check beim Start der App
checkForm();

// Logik für das Hilfe-Modal
const offlineLink = document.getElementById('offline-link');
const offlineModal = document.getElementById('offline-modal');
const closeModal = document.getElementById('close-modal');

offlineLink.addEventListener('click', (e) => {
    e.preventDefault();
    offlineModal.style.display = 'block';
});

closeModal.addEventListener('click', () => {
    offlineModal.style.display = 'none';
});

// Schließen wenn man außerhalb des Fensters klickt
window.addEventListener('click', (event) => {
    if (event.target == offlineModal) {
        offlineModal.style.display = 'none';
    }
});