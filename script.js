document.addEventListener('DOMContentLoaded', function () {

    /* ── NAVEGAÇÃO PRINCIPAL ─────────────────────── */
    const labels = {
        inicio: 'Início',
        chip: 'Monitoramento',
        agenda: 'Agendamentos',
        resultados: 'Meus Resultados',
        exames: 'Resultados de Exames',
        laudos: 'Histórico de Laudos',
        contratos: 'Meus Contratos',
        perfil: 'Perfil do Paciente',
    };
    
    const links = document.querySelectorAll('.nav-a');
    const secs = document.querySelectorAll('.sec');
    const title = document.getElementById('page-title');

    function go(id) {
        links.forEach(l => l.classList.toggle('active', l.dataset.tab === id));
        secs.forEach(s => s.classList.toggle('active', s.id === id + '-sec'));
        if (title) title.textContent = labels[id] || id;
    }
    
    links.forEach(l => l.addEventListener('click', e => {
        e.preventDefault();
        go(l.dataset.tab);
    }));
    
    go('chip');

    /* ── ABAS INTERNAS ───────────────────────────── */
    const ptabs = document.querySelectorAll('.ptab');
    const pconts = document.querySelectorAll('.ptab-content');
    
    ptabs.forEach(btn => btn.addEventListener('click', () => {
        const t = btn.dataset.ptab;
        ptabs.forEach(b => b.classList.toggle('active', b.dataset.ptab === t));
        pconts.forEach(c => c.classList.toggle('active', c.id === 'ptab-' + t));
    }));

    /* ── RELÓGIO ─────────────────────────────────── */
    const clk = document.getElementById('clock');
    function tick() {
        if (clk) {
            const now = new Date();
            clk.textContent = now.toLocaleTimeString('pt-BR', {
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit'
            });
        }
    }
    setInterval(tick, 1000);
    tick();

    /* ── BPM ANIMADO ─────────────────────────────── */
    const bpmEl = document.getElementById('bpm');
    function pulse() {
        if (!bpmEl) return;
        const newBpm = Math.floor(Math.random() * 8) + 69; // 69-76
        bpmEl.textContent = newBpm;
        bpmEl.style.transition = 'none';
        bpmEl.style.opacity = '0.6';
        setTimeout(() => {
            bpmEl.style.transition = 'opacity 0.3s ease';
            bpmEl.style.opacity = '1';
        }, 280);
    }
    setInterval(pulse, 4000);
    pulse();

    /* ── DATA DINÂMICA ───────────────────────────── */
    const now = new Date();
    const months = [
        'janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho',
        'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'
    ];
    
    const tlDate = document.getElementById('tl-date');
    if (tlDate) {
        tlDate.textContent = `${now.getDate()} de ${months[now.getMonth()]} de ${now.getFullYear()}`;
    }

    /* ── CONSOLE LOG ─────────────────────────────── */
    console.log(`[Einstein NeuroChip] Portal carregado com sucesso`);
    console.log(`Data: ${now.toLocaleDateString('pt-BR')}`);
    console.log(`Hora: ${now.toLocaleTimeString('pt-BR')}`);
    console.log(`Chip 884-XJ-09 · Status: Operacional`);
});