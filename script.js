document.addEventListener('DOMContentLoaded', function () {
    
    // --- 1. NAVEGAÇÃO ---
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


    // --- 2. SISTEMA DE MONITORAMENTO ---
    
    // Relógio
    function updateClock() {
        const clockElement = document.getElementById('clock-live');
        if (clockElement) {
            const now = new Date();
            clockElement.textContent = now.toLocaleTimeString('pt-BR');
        }
    }
    setInterval(updateClock, 1000);
    updateClock();

    // --- CORREÇÃO DO BATIMENTO CARDÍACO (68 - 77 BPM) ---
    function simulateHeartBeat() {
        const bpmDisplay = document.getElementById('live-bpm');
        
        if (bpmDisplay) {
            // Intervalo estrito de normalidade
            const minBPM = 68;
            const maxBPM = 77;
            
            // Gera número aleatório
            const currentBPM = Math.floor(Math.random() * (maxBPM - minBPM + 1)) + minBPM;
            
            bpmDisplay.textContent = currentBPM;
            
            // Garante que a cor seja sempre VERDE FLORESTA (Saudável)
            // Removemos qualquer lógica de cor vermelha
            bpmDisplay.style.color = '#2e7d32'; 
            
            // Efeito visual sutil de pulsação normal
            bpmDisplay.style.transition = "opacity 0.2s ease";
            bpmDisplay.style.opacity = '0.7';
            setTimeout(() => { 
                bpmDisplay.style.opacity = '1'; 
            }, 200);
        }
    }
    
    // Atualiza a cada 4 segundos (Ritmo mais lento e calmo que o anterior)
    setInterval(simulateHeartBeat, 4000);
    
    // Chamada inicial
    simulateHeartBeat();

    console.log("Sistema NeuroChip: Parâmetros vitais normalizados.");
});