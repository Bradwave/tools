const projects = [
    {
        name: "TimeFreq",
        path: "../timefreq/index.html",
        description: "Advanced time-frequency analysis tool supporting STFT, Wigner-Ville, and Chirplet transforms with real-time audio synthesis.",
        tags: ["physics", "signals", "math"],
        icon: "../timefreq/assets/favicon.svg"
    },
    {
        name: "Fourier 3D",
        path: "../fourier3d/index.html",
        description: "Visualization of Fourier transforms in 3D space. Explore complex signals, winding plots, and frequency components.",
        tags: ["physics", "3d", "fourier"],
        icon: "../fourier3d/assets/favicon.svg"
    },
    {
        name: "FT Filter",
        path: "../ftfilter/index.html",
        description: "Interactive signal filtering in the frequency domain. Design custom filters and see their effect on complex waveforms.",
        tags: ["physics", "signals", "fourier"],
        icon: "../ftfilter/imgs/favicon.svg"
    },
    {
        name: "Inertia",
        path: "../inertia/index.html",
        description: "Kinematics and motion simulator. Plot position, velocity, and acceleration of a point mass in real-time.",
        tags: ["physics", "simulation", "mechanics"],
        icon: "../inertia/imgs/icon.svg"
    },
    {
        name: "Gabor",
        path: "../gabor/index.html",
        description: "Analysis of non-stationary signals using the Gabor Transform (Windowed Fourier Transform).",
        tags: ["math", "signals", "fourier"],
        icon: "../gabor/imgs/icon.png"
    },
    {
        name: "Julia Set",
        path: "../juliaset/index.html",
        description: "Fractal explorer for Julia and Mandelbrot sets with interactive iteration control.",
        tags: ["math", "fractals", "visuals"],
        icon: "../juliaset/images/icon.png"
    },
    {
        name: "Draw XY",
        path: "../drawxy/index.html",
        description: "Minimalist vector drawing tool with precision coordinate editing and export capabilities.",
        tags: ["tools", "graphics", "vectors"],
        icon: "../drawxy/assets/favicon.svg"
    },
    {
        name: "Drawing Fourier",
        path: "../drawingfourier/index.html",
        description: "Watch complex epicycles reconstruct arbitrary shapes using the power of Fourier Series.",
        tags: ["math", "fourier", "visuals"],
        icon: "../drawingfourier/assets/icons/logo.svg"
    },
    {
        name: "Freehand Fourier",
        path: "../freehandfourier/index.html",
        description: "Draw anything freehand and see the Fourier approximation in real-time.",
        tags: ["math", "fourier", "visuals"],
        icon: "../freehandfourier/imgs/icon.svg"
    },
    {
        name: "AttractHM",
        path: "../attracthm/index.html",
        description: "Visualization of strange attractors and chaotic dynamical systems.",
        tags: ["physics", "chaos", "math"],
        icon: "../attracthm/favicon.svg"
    },
    {
        name: "Chaos Game",
        path: "../chaosgame/index.html",
        description: "Fractal generation through the chaos game algorithm. Iterative mathematical art.",
        tags: ["math", "fractals", "algorithms"],
        icon: "../chaosgame/images/icon.png"
    },
    {
        name: "ComplExp",
        path: "../complexp/index.html",
        description: "An explorer for complex numbers and conformal mappings.",
        tags: ["math", "visuals", "complex"],
        icon: "../complexp/imgs/icon.svg"
    },
    {
        name: "Dynagraph",
        path: "../dynagraph/index.html",
        description: "Dynamic plotting tool for functional analysis and graphing.",
        tags: ["math", "tools", "graphing"],
        icon: ""
    },
    {
        name: "E-Field",
        path: "../efield/index.html",
        description: "Simulation of electric fields and potentials for multiple point charges.",
        tags: ["physics", "electromagnetism", "simulation"],
        icon: "../efield/imgs/icon.svg"
    },
    {
        name: "TrigonoPoly",
        path: "../trigonopoly/index.html",
        description: "Interactive unit circle and trigonometric function exploration.",
        tags: ["math", "trigonometry", "education"],
        icon: ""
    },
    {
        name: "Stuff",
        path: "../stuff/index.html",
        description: "A sandbox for various tools, question extractors, and experimental components.",
        tags: ["tools", "meta", "sandbox"],
        icon: "../stuff/assets/favicon.svg"
    }
];

const grid = document.getElementById('projects-grid');
const searchInput = document.getElementById('search-input');

function createCard(project) {
    const card = document.createElement('a');
    card.href = project.path;
    card.className = 'card';
    
    const tagsHtml = project.tags.map(tag => `<span class="tag">${tag}</span>`).join('');
    
    card.innerHTML = `
        <div class="card-header">
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
