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

    // --- 3. SIMULAÇÃO DE BATIMENTOS CARDÍACOS (CALMO / NORMAL - 68 a 78 BPM) ---
    function simulateHeartBeat() {
        const bpmDisplay = document.getElementById('live-bpm');
        
        if (bpmDisplay) {
            const minBPM = 68; 
            const maxBPM = 78; 
            
            // Gera valor randômico na faixa normal saudável
            const currentBPM = Math.floor(Math.random() * (maxBPM - minBPM + 1)) + minBPM;
            
            bpmDisplay.textContent = currentBPM;
            
            // Garante cor normal
            bpmDisplay.style.color = '#4caf50'; 
            
            // Animação de "pulso"
            bpmDisplay.style.opacity = '0.7';
            setTimeout(() => { 
                bpmDisplay.style.opacity = '1'; 
            }, 300);
        }
    }
    
    // Atualiza a cada 3.5 segundos (Ritmo calmo)
    setInterval(simulateHeartBeat, 3500);
    simulateHeartBeat(); 

    // Log de sistema
    console.log("Einstein NeuroChip: Modo Diurno. Sinais vitais normais.");
});