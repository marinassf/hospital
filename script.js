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
        
        if (clockElement) {
            const now = new Date();
            const timeString = now.toLocaleTimeString('pt-BR');
            
            clockElement.textContent = timeString;
            // O horário da timeline foi fixado no HTML e não é mais alterado aqui.
        }
    }
    // Atualiza a cada segundo
    setInterval(updateClock, 1000);
    updateClock();

    // --- 3. SIMULAÇÃO DE BATIMENTOS CARDÍACOS (Recuperação: 62 - 68 BPM) ---
    // Faixa normal de batimentos, coração calmo pós-estresse.
    function simulateHeartBeat() {
        const bpmDisplay = document.getElementById('live-bpm');
        
        if (bpmDisplay) {
            const minBPM = 62;
            const maxBPM = 68;
            
            // Gera valor randômico na faixa relaxada
            const currentBPM = Math.floor(Math.random() * (maxBPM - minBPM + 1)) + minBPM;
            
            bpmDisplay.textContent = currentBPM;
            
            // Garante a cor verde (Sinal Vital OK)
            bpmDisplay.style.color = '#4caf50'; 
            
            // Animação de "pulso" lenta (coração batendo devagar e tranquilo)
            bpmDisplay.style.opacity = '0.5';
            setTimeout(() => { 
                bpmDisplay.style.opacity = '1'; 
            }, 500);
        }
    }
    
    // Atualiza a cada 3.5 segundos (Ritmo lento simulando relaxamento/apatia)
    setInterval(simulateHeartBeat, 3500);
    simulateHeartBeat(); 

    // Log de sistema atualizado para o novo cenário
    console.log("Einstein NeuroChip [ATENÇÃO]: Sinais vitais cardiovasculares estabilizados. Detectada redução acentuada nos receptores de serotonina. Acompanhando estado de apatia.");
});