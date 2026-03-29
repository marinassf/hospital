document.addEventListener('DOMContentLoaded', function () {

    /* ── NAVEGAÇÃO PRINCIPAL ─────────────────────── */
    const labels = {
        inicio: 'Início', chip: 'Monitoramento', agenda: 'Agendamentos',
        resultados: 'Meus Resultados', exames: 'Resultados de Exames',
        laudos: 'Histórico de Laudos', contratos: 'Meus Contratos', perfil: 'Perfil do Paciente',
    };
    const links = document.querySelectorAll('.nav-a');
    const secs = document.querySelectorAll('.sec');
    const title = document.getElementById('page-title');

    function go(id) {
        links.forEach(l => l.classList.toggle('active', l.dataset.tab === id));
        secs.forEach(s => s.classList.toggle('active', s.id === id + '-sec'));
        if (title) title.textContent = labels[id] || id;
    }
    links.forEach(l => l.addEventListener('click', e => { e.preventDefault(); go(l.dataset.tab); }));
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
    function tick() { if (clk) clk.textContent = new Date().toLocaleTimeString('pt-BR'); }
    setInterval(tick, 1000); tick();

    /* ── BPM ─────────────────────────────────────── */
    const bpmEl = document.getElementById('bpm');
    function pulse() {
        if (!bpmEl) return;
        bpmEl.textContent = Math.floor(Math.random() * 11) + 68;
        bpmEl.style.opacity = '0.5';
        setTimeout(() => { bpmEl.style.opacity = '1'; }, 280);
    }
    setInterval(pulse, 3500); pulse();

    /* ── DATA DINÂMICA ───────────────────────────── */
    const now = new Date();
    const ds = `${String(now.getDate()).padStart(2, '0')}/${String(now.getMonth() + 1).padStart(2, '0')}/${now.getFullYear()}`;
    document.querySelectorAll('.sp-val').forEach(el => {
        if (el.textContent.match(/\d{2}\/\d{2}\/\d{4}/)) el.textContent = ds;
    });
    const months = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];
    const tlDate = document.getElementById('tl-date');
    if (tlDate) tlDate.textContent = `${now.getDate()} de ${months[now.getMonth()]} de ${now.getFullYear()}`;

    console.log(`[Einstein NeuroChip] ${ds} — Protocolo Profissional Ativo · Chip 884-XJ-09`);
});