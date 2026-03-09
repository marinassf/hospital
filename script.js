document.addEventListener('DOMContentLoaded', function () {
    
    // --- 1. CONFIGURAÇÃO DE NAVEGAÇÃO ---
    const navLinks = document.querySelectorAll('.nav-link');
    const contentSections = document.querySelectorAll('.content-section');
    const pageTitle = document.getElementById('page-title');

    function activateTab(tabId) {
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('data-content') === tabId) link.classList.add('active');
        });

        contentSections.forEach(section => {
            section.classList.remove('active');
        });
        
        const targetSection = document.getElementById(tabId + '-content');
        if (targetSection) targetSection.classList.add('active');

        // Atualiza Título
        const activeLink = document.querySelector(`.nav-link[data-content="${tabId}"]`);
        if (activeLink && pageTitle) {
            pageTitle.textContent = activeLink.innerText.replace('●', '').trim();
        }
    }

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            activateTab(link.getAttribute('data-content'));
        });
    });

    // Inicia na aba do NeuroChip
    activateTab('neurochip');


    // --- 2. SISTEMA DE MONITORAMENTO EM TEMPO REAL ---
    
    // Relógio Digital
    function updateClock() {
        const clockElement = document.getElementById('clock-live');
        const timelineTime = document.getElementById('last-update-time');
        
        if (clockElement) {
            const now = new Date();
            const timeString = now.toLocaleTimeString('pt-BR');
            const shortTime = now.toLocaleTimeString('pt-BR', {hour: '2-digit', minute:'2-digit'});
            
            clockElement.textContent = timeString;
            
            // Atualiza também o horário do último evento na timeline
            if(timelineTime) {
                timelineTime.textContent = shortTime;
            }
        }
    }
    // Atualiza a cada segundo
    setInterval(updateClock, 1000);
    updateClock();

    // --- 3. SIMULAÇÃO DE BATIMENTOS CARDÍACOS (ALERTA - 100 a 115 BPM) ---
    function simulateHeartBeat() {
        const bpmDisplay = document.getElementById('live-bpm');
        
        if (bpmDisplay) {
            const minBPM = 100; // Piso de taquicardia leve
            const maxBPM = 115; // Pico de ansiedade
            
            // Gera valor randômico no estado atual
            const currentBPM = Math.floor(Math.random() * (maxBPM - minBPM + 1)) + minBPM;
            
            bpmDisplay.textContent = currentBPM;
            
            // Garante cor de alerta
            bpmDisplay.style.color = '#d32f2f'; 
            
            // Animação de "pulso" mais rápida via opacidade
            bpmDisplay.style.opacity = '0.6';
            setTimeout(() => { 
                bpmDisplay.style.opacity = '1'; 
            }, 150);
        }
    }
    
    // Atualiza a cada 2 segundos para dar sensação de ansiedade
    setInterval(simulateHeartBeat, 2000);
    simulateHeartBeat(); 

    // Log de sistema
    console.log("Einstein NeuroChip: ALERTA. Pico de estresse e ansiedade mantidos. Aconselhando descanso.");
});