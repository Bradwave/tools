const projects = [
    {
        name: "TimeFreq",
        path: "https://timefreq.matephis.com",
        description: "A time-frequency signal analysis tool.",
        tags: ["math", "physics", "educational", "fourier-analysis", "time-frequency-analysis"],
        icon: "https://timefreq.matephis.com/assets/favicon.svg",
        showApp: true
    },
    {
        name: "Fourier 3D",
        path: "https://fourier3d.matephis.com",
        description: "An interactive visualization to explore Fourier analysis (also with a 3D plot of the complex transform curve).",
        tags: ["math", "physics", "educational", "fourier-transform"],
        icon: "https://fourier3d.matephis.com/assets/favicon.svg",
        showApp: true
    },
    {
        name: "FT Filter",
        path: "https://ftfilter.matephis.com",
        description: "Interactive signal filtering in the frequency domain. Design custom filters and see their effect on complex waveforms.",
        tags: ["physics", "signals", "fourier"],
        icon: "https://ftfilter.matephis.com/imgs/favicon.svg",
        showApp: true
    },
    {
        name: "Inertia",
        path: "https://bradwave.github.io/inertia/",
        description: "Kinematics and motion simulator. Plot position, velocity, and acceleration of a point mass in real-time.",
        tags: ["physics", "simulation", "mechanics"],
        icon: "https://bradwave.github.io/inertia/imgs/icon.svg",
        showApp: true
    },
    {
        name: "Gabor",
        path: "https://bradwave.github.io/gabor/",
        description: "Analysis of non-stationary signals using the Gabor Transform (Windowed Fourier Transform).",
        tags: ["math", "signals", "fourier"],
        icon: "https://bradwave.github.io/gabor/imgs/icon.png",
        showApp: true
    },
    {
        name: "Julia Set",
        path: "https://juliaset.matephis.com",
        description: "Fractal explorer for Julia and Mandelbrot sets with interactive iteration control.",
        tags: ["math", "fractals"],
        icon: "https://juliaset.matephis.com/images/icon.png",
        showApp: true
    },
    {
        name: "Draw XY",
        path: "https://drawxy.matephis.com",
        description: "Minimalist vector drawing tool with precision coordinate editing and export capabilities.",
        tags: ["tools", "graphics", "vectors"],
        icon: "https://drawxy.matephis.com/assets/favicon.svg",
        showApp: true
    },
    {
        name: "Drawing Fourier",
        path: "https://drawingfourier.matephis.com",
        description: "Watch complex epicycles reconstruct arbitrary shapes using the power of Fourier Series.",
        tags: ["math", "fourier"],
        icon: "https://drawingfourier.matephis.com/assets/icons/logo.svg",
        showApp: true
    },
    {
        name: "Freehand Fourier",
        path: "https://freehandfourier.matephis.com",
        description: "Draw anything freehand and see the Fourier approximation in real-time.",
        tags: ["math", "fourier"],
        icon: "https://freehandfourier.matephis.com/imgs/icon.svg",
        showApp: true
    },
    {
        name: "AttracThm",
        path: "https://attracthm.matephis.com",
        description: "Visualization of strange attractors and chaotic dynamical systems.",
        tags: ["physics", "chaos", "math"],
        icon: "https://attracthm.matephis.com/favicon.svg",
        showApp: true
    },
    {
        name: "Chaos Game",
        path: "https://chaosgame.matephis.com",
        description: "Fractal generation through the chaos game algorithm. Iterative mathematical art.",
        tags: ["math", "fractals", "algorithms"],
        icon: "https://chaosgame.matephis.com/images/icon.png",
        showApp: true
    },
    {
        name: "ComplExp",
        path: "https://complexp.matephis.com",
        description: "An explorer for complex numbers and conformal mappings.",
        tags: ["math", "complex"],
        icon: "https://complexp.matephis.com/imgs/icon.svg",
        showApp: true
    },
    {
        name: "Dynagraph",
        path: "https://dynagraph.matephis.com",
        description: "Dynamic plotting tool for functional analysis and graphing.",
        tags: ["math", "tools", "graphing"],
        icon: "",
        showApp: false
    },
    {
        name: "E-Field",
        path: "https://bradwave.github.io/efield/",
        description: "An electric field simulation.",
        tags: ["educational", "electrostatics", "electric-field", "physics", "simulation"],
        icon: "https://bradwave.github.io/efield/imgs/icon.svg",
        showApp: true
    },
    {
        name: "TrigonoPoly",
        path: "https://trigonopoly.matephis.com",
        description: "Interactive unit circle and trigonometric function exploration.",
        tags: ["math", "trigonometry", "education"],
        icon: "",
        showApp: true
    },
    {
        name: "Stuff",
        path: "https://bradwave.github.io/stuff/index.html",
        description: "Robe, cose, strumenti.",
        tags: ["tools", "meta", "sandbox", "stuff"],
        icon: "https://bradwave.github.io/stuff/assets/favicon.svg",
        showApp: true
    },
    {
        name: "emwave",
        path: "https://bradwave.github.io/emwave/",
        description: "Real-time simulation of electromagnetic wave propagation caused by accelerating particle.",
        tags: ["light", "physics", "electromagnetic-wave"],
        icon: "https://bradwave.github.io/emwave/imgs/icon.png",
        showApp: true
    },
    {
        name: "reactiontime",
        path: "https://bradwave.github.io/reactiontime/",
        description: "A super minimal app to measure reaction times.",
        tags: ["reaction-time"],
        icon: "https://bradwave.github.io/reactiontime/imgs/timelapse_FILL0_wght400_GRAD0_opsz24.svg",
        showApp: true
    },
    {
        name: "PianoFreq",
        path: "https://bradwave.github.io/PianoFreq/",
        description: "A piano tuning application for educational purposes.",
        tags: ["mathematics", "educational", "piano-tuning-application"],
        icon: "https://bradwave.github.io/PianoFreq/imgs/icon.png",
        showApp: true
    },
    {
        name: "DiophEq",
        path: "https://bradwave.github.io/DiophEq/",
        description: "An interactive geometric visualization of the Diophantine equation ax+by=c and its integer solutions.",
        tags: ["education", "math", "interactive"],
        icon: "https://bradwave.github.io/DiophEq/imgs/icon.png",
        showApp: true
    },
    {
        name: "KleinInt",
        path: "https://bradwave.github.io/KleinInt/",
        description: "An interactive graphical interpretation of the continued fraction approximation of irrational numbers, as imagined by Klein, in the case of square roots.",
        tags: ["math", "interactive", "educational"],
        icon: "https://bradwave.github.io/KleinInt/imgs/icon.png",
        showApp: true
    },
    {
        name: "turingpattern",
        path: "https://bradwave.github.io/turingpattern/",
        description: "A brief dissertation (in Italian) of Turing patterns and morphogenesis.",
        tags: ["mathematics", "turing", "morphogenesis", "turing-pattern"],
        icon: "https://bradwave.github.io/turingpattern/imgs/icon.png",
        showApp: true
    }
];

const grid = document.getElementById('projects-grid');
const searchInput = document.getElementById('search-input');

function createCard(project) {
    const card = document.createElement(project.showApp ? 'a' : 'div');
    if (project.showApp) {
        card.href = project.path;
    }
    card.className = 'card' + (project.showApp ? '' : ' disabled-card');

    const tagsHtml = project.tags.map(tag => `<span class="tag">${tag}</span>`).join('');

    const opacity = project.showApp ? 1 : 0.25;

    card.innerHTML = `
        <div class="card-header" style="opacity: ${opacity}">
            <div class="card-icon">
                <img src="${project.icon}" alt="" onload="this.style.display='block'; this.nextElementSibling.style.display='none';" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';">
                <span class="material-symbols-outlined" style="display:none">category</span>
            </div>
            <h2 class="card-title">${project.name}</h2>
        </div>
        <p class="card-desc">${project.description}</p>
        <div class="card-tags">
            ${tagsHtml}
        </div>
    `;

    return card;
}

function renderProjects(filter = '') {
    grid.innerHTML = '';
    const query = filter.toLowerCase();

    const filtered = projects.filter(p => {
        return p.name.toLowerCase().includes(query) ||
            p.description.toLowerCase().includes(query) ||
            p.tags.some(t => t.toLowerCase().includes(query));
    });

    filtered.forEach(p => {
        grid.appendChild(createCard(p));
    });

    if (filtered.length === 0) {
        grid.innerHTML = `<div style="grid-column: 1/-1; text-align: center; padding: 4rem; color: #999; font-style: italic;">No tools found matching "${filter}"</div>`;
    }
}

searchInput.addEventListener('input', (e) => {
    renderProjects(e.target.value);
});

// Initial render
renderProjects();
