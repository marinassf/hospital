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

    // --- 3. SIMULAÇÃO DE BATIMENTOS CARDÍACOS (ATENÇÃO - 82 a 92 BPM) ---
    function simulateHeartBeat() {
        const bpmDisplay = document.getElementById('live-bpm');
        
        if (bpmDisplay) {
            const minBPM = 82; // Levemente acelerado
            const maxBPM = 92; // Taquicardia muito leve / normalizando
            
            // Gera valor randômico no estado atual
            const currentBPM = Math.floor(Math.random() * (maxBPM - minBPM + 1)) + minBPM;
            
            bpmDisplay.textContent = currentBPM;
            
            // Garante cor de alerta moderado (laranja)
            bpmDisplay.style.color = '#f57c00'; 
            
            // Animação de "pulso" intermediária
            bpmDisplay.style.opacity = '0.7';
            setTimeout(() => { 
                bpmDisplay.style.opacity = '1'; 
            }, 200);
        }
    }
    
    // Atualiza a cada 3 segundos (Ritmo moderado)
    setInterval(simulateHeartBeat, 3000);
    simulateHeartBeat(); 

    // Log de sistema
    console.log("Einstein NeuroChip: ESTADO DE ATENÇÃO. Monitorando quadro de êmese e estabilização de batimentos.");
});