const videos = [
    { "id": "taller-2013", "categoria": "tallers", "titol": "Tallers 4t curs", "autoria": "No indicada als materials", "any": "2013", "font": "402300-24. Foto: Josep Aznar", "url": "https://institutdelteatre.sharepoint.com/:v:/r/sites/GD-MAE/Museu/0EXPOSICIONS/2026_25%20CSD/videos%20per%20la%20pantalla%20interactiva/tallers/Tallers-4t-curs-CSD-2013.mp4?d=w60899458ea024214a46fab47ef74ea0b&csf=1&web=1&e=dsNmiA", "estat": "enllac_sharepoint_individual" }, { "id": "mashup", "categoria": "tallers", "titol": "Mashup", "autoria": "Sara Fondevila i Rebeca", "any": "No indicat als materials", "font": "Ec 2049-23", "url": null, "estat": "pendent_url_directa" },
    { "id": "shook", "categoria": "premis", "titol": "Shook", "autoria": "No indicada als materials", "any": "No indicat als materials", "font": "Edc313658 (11)", "url": null, "estat": "pendent_url_directa" },
    { "id": "zorongo", "categoria": "premis", "titol": "Zorongo", "autoria": "José, cognom no llegible als materials", "any": "No indicat als materials", "font": "334599-23", "url": null, "estat": "pendent_url_directa" },
    { "id": "edc320959", "categoria": "tfg", "titol": "edc320959.mp4", "autoria": "Pendent de documentar", "any": "Pendent de documentar", "font": "Fitxer SharePoint", "url": "https://institutdelteatre.sharepoint.com/:v:/r/sites/GD-MAE/Museu/0EXPOSICIONS/2026_25%20CSD/videos%20per%20la%20pantalla%20interactiva/TFG/edc320959.mp4?d=w80c41e33d0164c88942e0e026cae9236&csf=1&web=1&e=09hbnq", "estat": "enllac_sharepoint_individual" },
    { "id": "edc346292", "categoria": "tfg", "titol": "edc346292.mp4", "autoria": "Pendent de documentar", "any": "Pendent de documentar", "font": "Fitxer SharePoint", "url": "https://institutdelteatre.sharepoint.com/:v:/r/sites/GD-MAE/Museu/0EXPOSICIONS/2026_25%20CSD/videos%20per%20la%20pantalla%20interactiva/TFG/edc346292.mp4?d=w15d3599ca96c4136974af45544abcc17&csf=1&web=1&e=euBCxV", "estat": "enllac_sharepoint_individual" }, { "id": "edc353964", "categoria": "tfg", "titol": "edc353964.mp4", "autoria": "Pendent de documentar", "any": "Pendent de documentar", "font": "Fitxer SharePoint", "url": "https://institutdelteatre.sharepoint.com/:v:/r/sites/GD-MAE/Museu/0EXPOSICIONS/2026_25%20CSD/videos%20per%20la%20pantalla%20interactiva/TFG/edc353964.mp4?d=wff8251c975544dbfbcfc8f7929653f41&csf=1&web=1&e=veiqHO", "estat": "enllac_sharepoint_individual" }, 
    { "id": "edc354085", "categoria": "tfg", "titol": "edc354085.mp4", "autoria": "Pendent de documentar", "any": "Pendent de documentar", "font": "Fitxer SharePoint", "url": "https://institutdelteatre.sharepoint.com/:v:/r/sites/GD-MAE/Museu/0EXPOSICIONS/2026_25%20CSD/videos%20per%20la%20pantalla%20interactiva/TFG/edc354085.mp4?d=w2637f2d5446e49a1a7db47700a012d85&csf=1&web=1&e=LKwvyW", "estat": "enllac_sharepoint_individual" }, { "id": "edc357430", "categoria": "tfg", "titol": "edc357430.mp4", "autoria": "Pendent de documentar", "any": "Pendent de documentar", "font": "Fitxer SharePoint", "url": "https://institutdelteatre.sharepoint.com/:v:/r/sites/GD-MAE/Museu/0EXPOSICIONS/2026_25%20CSD/videos%20per%20la%20pantalla%20interactiva/TFG/edc357430.mp4?d=w46ee8c38609e4063b98094ae6e65b092&csf=1&web=1&e=amdJir", "estat": "enllac_sharepoint_individual" }, 
    { "id": "edc359450-01", "categoria": "tfg", "titol": "edc359450-01.mp4", "autoria": "Pendent de documentar", "any": "Pendent de documentar", "font": "Fitxer SharePoint", "url": "https://institutdelteatre.sharepoint.com/:v:/r/sites/GD-MAE/Museu/0EXPOSICIONS/2026_25%20CSD/videos%20per%20la%20pantalla%20interactiva/TFG/edc359450-01.mp4?d=wb4a869d1a1d244f5a198aaa858cf2a4b&csf=1&web=1&e=nvlwBL", "estat": "enllac_sharepoint_individual" }, { "id": "edc360369", "categoria": "tfg", "titol": "edc360369.mp4", "autoria": "Pendent de documentar", "any": "Pendent de documentar", "font": "Fitxer SharePoint", "url": "https://institutdelteatre.sharepoint.com/:v:/r/sites/GD-MAE/Museu/0EXPOSICIONS/2026_25%20CSD/videos%20per%20la%20pantalla%20interactiva/TFG/edc360369.mp4?d=w40fd171ef45844eab1c07d32920bdcff&csf=1&web=1&e=8QqYFD", "estat": "enllac_sharepoint_individual" }
]; 

let current = 'index', previous = 'index'; 

function show(name, push = true) { 
    document.querySelectorAll('.view').forEach(v => v.classList.toggle('active', v.dataset.view === name)); 
    if (push) { previous = current; current = name; location.hash = name === 'index' ? '' : name; } 
} 

document.addEventListener('click', e => { 
    const go = e.target.closest('[data-go]'); 
    if (go) { show(go.dataset.go); return } 
    const card = e.target.closest('[data-video]'); 
    if (card) { 
        const v = videos.find(x => x.id === card.dataset.video); 
        previous = v.categoria; current = 'player'; 
        const frame = document.querySelector('[data-video-frame]'); 
        const native = document.querySelector('[data-video-native]'); 
        const message = document.querySelector('[data-video-message]'); 
        frame.hidden = true; 
        native.hidden = true; 
        message.hidden = true; 
        frame.removeAttribute('src'); 
        native.removeAttribute('src'); 
        if (v.url) { 
            if (v.url.includes('sharepoint.com/:v:/')) { 
                frame.src = v.url; frame.hidden = false 
            } else { 
                native.src = v.url; 
                native.hidden = false; 
                native.play().catch(() => { }) 
            } 
        } else { 
            message.hidden = false 
        } 
        show('player', false); 
        location.hash = 'video-' + v.id; return 
    } 
    
    if (e.target.closest('[data-action=back]')) 
        show(previous) 
}); 
    
window.addEventListener('hashchange', () => { 
    const h = location.hash.slice(1); 
    if (['tallers', 'tfg', 'premis'].includes(h)) 
        show(h, false); 
    else if (!h) show('index', false) 
}); 

if (location.hash) window.dispatchEvent(new Event('hashchange'));