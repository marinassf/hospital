document.addEventListener('DOMContentLoaded', function () {
    
    // --- 1. NAVEGAÇÃO ENTRE ABAS ---
    const navLinks = document.querySelectorAll('.nav-link');
    const contentSections = document.querySelectorAll('.content-section');
    const pageTitle = document.getElementById('page-title');

    function activateTab(tabId) {
        // Atualiza estilo dos links
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('data-content') === tabId) {
                link.classList.add('active');
            }
        });

        // Mostra a seção correta
        contentSections.forEach(section => {
            section.classList.remove('active');
        });
        
        const targetSection = document.getElementById(tabId + '-content');
        if (targetSection) {
            targetSection.classList.add('active');
        }

        // Atualiza Título da Página
        const activeLink = document.querySelector(`.nav-link[data-content="${tabId}"]`);
        if (activeLink && pageTitle) {
            // Remove o emoji ou formatação extra para o título simples
            pageTitle.textContent = activeLink.innerText.replace('●', '').trim();
        }
    }

    // Adiciona evento de clique
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const tabId = link.getAttribute('data-content');
            activateTab(tabId);
        });
    });

    // Inicia na aba NeuroChip para demonstração (ou mude para 'inicio')
    activateTab('inicio');


    // --- 2. SISTEMA DE MONITORAMENTO NEUROCHIP (SIMULAÇÃO) ---
    
    // Relógio Digital
    function updateClock() {
        const clockElement = document.getElementById('clock-live');
        if (clockElement) {
            const now = new Date();
            clockElement.textContent = now.toLocaleTimeString('pt-BR');
        }
    }
    setInterval(updateClock, 1000);
    updateClock();

    // Simulação de BPM (Taquicardia Leve Variável)
    function simulateHeartBeat() {
        const bpmDisplay = document.getElementById('live-bpm');
        if (bpmDisplay) {
            // Gera valor entre 102 e 108 (Ansiedade/Estresse)
            const randomBPM = Math.floor(Math.random() * (108 - 102 + 1) + 102);
            bpmDisplay.textContent = randomBPM;
            
            // Efeito visual sutil de cor
            if (randomBPM > 106) {
                bpmDisplay.style.color = '#d32f2f'; // Vermelho mais forte nos picos
            } else {
                bpmDisplay.style.color = '#333';
            }
        }
    }
    // Atualiza a cada 2.5 segundos
    setInterval(simulateHeartBeat, 2500);


    // --- 3. ALERTAS GERAIS ---
    const alertBanner = document.getElementById('medication-alert-banner');
    const now = new Date();
    // Exemplo: Mostrar alerta de medicamento se for depois das 8h da manhã
    if (now.getHours() >= 8 && alertBanner) {
        alertBanner.style.display = 'flex';
        // Você pode adicionar classe para mudar cor se quiser
    } else if (alertBanner) {
        alertBanner.style.display = 'none';
    }

});