// ===========================
// DATOS DE TARJETAS
// ===========================
const tracksData = [
    // Consciousness Series (15)
    { id: 1, title: "Consciousness 1", image: "images/Consciousness 1.webp", description: "Un viaje sónico a través de nebulosas interestelares con sintetizadores modulares y ritmos explosivos.", audio: "audio/Alien1.mp3", displayName: "Cosmic Drift" },
    { id: 2, title: "Consciousness 2", image: "images/Consciousness 2.webp", description: "Inyección de beats neuroalienígenas con armonías psicodélicas y bajos profundos que resuenan en tu mente.", audio: "audio/Alien2.mp3", displayName: "Neural Nexus" },
    { id: 3, title: "Consciousness 3", image: "images/Consciousness 3.webp", description: "Ambientes etéreos mezclados con frecuencias multidimensionales que transportan a realidades alternativas.", audio: "audio/Alien3.mp3", displayName: "Digital Dreamscape" },
    { id: 4, title: "Consciousness 4", image: "images/Consciousness 4.webp", description: "Secuencias intraestelares que narran el viaje espacial a través del cosmos con armonía celestial.", audio: "audio/Alien4.mp3", displayName: "Mindset" },
    { id: 5, title: "Consciousness 5", image: "images/Consciousness 5.webp", description: "Pasajes dimensionales que transportan a mundos nuevos que aparecen tan familiares para el espíritu.", audio: "audio/Alien5.mp3", displayName: "Start Now" },
    { id: 6, title: "Consciousness 6", image: "images/Consciousness 6.webp", description: "Pórtico a la nueva realidad manifestada a través de la frecuencia con prudencia dirijida y sabiamente enfocada.", audio: "audio/Alien6.mp3", displayName: "Strongest Frequency" },
    { id: 7, title: "Consciousness 7", image: "images/Consciousness 7.webp", description: "Espacio donde la luz interactúa para devolver el brillo espiritual al aspirante de la libertad interna.", audio: "audio/Alien7.mp3", displayName: "Secret Technique" },
    { id: 8, title: "Consciousness 8", image: "images/Consciousness 8.webp", description: "Relación y entendimiento pleno de unidad con cada ser viviente que permanece puro en el infinito.", audio: "audio/Alien8.mp3", displayName: "Consciousness 8" },
    { id: 9, title: "Consciousness 9", image: "images/Consciousness 9.webp", description: "Profundidad oceánica de la mente que indaga profundas verdades inmutables que crean la realidad.", audio: "audio/Alien9.mp3", displayName: "Consciousness 9" },
    { id: 10, title: "Manifested 1", image: "images/Manifested 1.webp", description: "Complementariedad entre la mente interna y el viaje externo a través del cosmos universal que se manifiesta infinitamente.", audio: "audio/Alien10.mp3", displayName: "Spiritual Mind Game" },
    { id: 11, title: "Manifested 2", image: "images/Manifested 2.webp", description: "Dinámismo y fatalidad que se desarrollan entre los seres vivientes que se alimentan unos de otros.", audio: "audio/Alien11.mp3", displayName: "Manifested 2" },
    { id: 12, title: "Manifested 3", image: "images/Manifested 3.webp", description: "Conexión de imágenes mentales que se convierten en memoria enteógena desbordada en meditaciones.", audio: "audio/Alien12.mp3", displayName: "Manifested 3" },
    { id: 13, title: "Manifested 4", image: "images/Manifested 4.webp", description: "Naves interestelares con controles de pianos con voces de seres superiores que dejan su llamado codificado.", audio: "audio/Alien13.mp3", displayName: "Manifested 4" },
    { id: 14, title: "Manifested 5", image: "images/Manifested 5.webp", description: "Ondas estables de pulsiones con baterías que saltan para que bailen los recién llegados a este mundo.", audio: "audio/Alien14.mp3", displayName: "Underlying Energy" },
    { id: 15, title: "Manifested 6", image: "images/Manifested 6.webp", description: "Meditación sobre ciclos planetarios y sus implicaciones en la transmutación genética para adaptarse a la atmósfera.", audio: "audio/Alien15.mp3", displayName: "Behind Reality" },
    
    // New Tracks (12)
    { id: 16, title: "Manifested 7", image: "images/NewMind1.webp", description: "Fusión mecánico cuántica de sintonia etérea creando sensaciones que restauran la paz emocional.", audio: "audio/Alien16.mp3", displayName: "Quantum Wave" },
    { id: 17, title: "Manifested 8", image: "images/NewMind2.webp", description: "Vibración universal capturada en frecuencias del alma armonizada con seres galácticos.", audio: "audio/Alien17.mp3", displayName: "Cosmic Resonance" },
    { id: 18, title: "Manifested 9", image: "images/NewMind3.webp", description: "Puerta sónica a dimensiones paralelas donde la realidad se transforma constantemente.", audio: "audio/Alien18.mp3", displayName: "Dimensional Gate" },
    { id: 19, title: "Meditation 1", image: "images/NewMind4.webp", description: "Ondas de civilizaciones extraterrestres sincronizadas en acordes cósmicos expansivos.", audio: "audio/Alien19.mp3", displayName: "Alien Symphony" },
    { id: 20, title: "Meditation 2", image: "images/NewMind5.webp", description: "Estallido de sonido que envuelve y aprieta transportando al nacimiento de galaxias distantes.", audio: "audio/Alien20.mp3", displayName: "Sonic Nebula" },
    { id: 21, title: "Meditation 3", image: "images/NewMind6.webp", description: "ADN transmutado en ondas electromagnéticas que reescriben la consciencia auditiva.", audio: "audio/Alien21.mp3", displayName: "Digital DNA" },
    { id: 22, title: "Meditation 4", image: "images/NewMind7.webp", description: "Torbellino de colores sonoros que espiralizan el ser interno de la percepción sensorial.", audio: "audio/Alien22.mp3", displayName: "Psycho Vortex" },
    { id: 23, title: "Meditation 5", image: "images/NewMind8.webp", description: "Refracción de luz estelar convertida en música que brilla con patrones geométricos y símbolos sagrados.", audio: "audio/Alien23.mp3", displayName: "Crystal Light" },
    { id: 24, title: "Meditation 6", image: "images/NewMind9.webp", description: "Latidos del universo que encuentran orden en la complejidad de la entropía sonora para el balance cósmico.", audio: "audio/Alien24.mp3", displayName: "Chaos Pulse" },
    { id: 25, title: "Meditation 7", image: "images/NewMind10.webp", description: "Elevación progresiva de frecuencias que llevan la consciencia hacia planos superiores de existencia.", audio: "audio/Alien25.mp3", displayName: "Ethereal Ascent" },
    { id: 26, title: "Meditation 8", image: "images/NewMind11.webp", description: "Sonido primigenio del universo temprano en expresión infinita cuyo eco del Big Bang reinterpreta.", audio: "audio/Alien26.mp3", displayName: "Primordial Echo" },
    { id: 27, title: "Meditation 9", image: "images/NewMind12.webp", description: "Transmutación constante de estructuras sonoras que evolucionan a planos superiores de la mente universal.", audio: "audio/Alien27.mp3", displayName: "Sonic Metamorphosis" }
];

// ===========================
// VARIABLES GLOBALES
// ===========================
let currentAudio = null;
let currentTrackName = "";
let isPlaying = false;
let progressInterval = null;
let playButtons = [];
let stopButtons = [];

// Elementos DOM
const currentTrackText = document.getElementById('current-track-text');
const progressBar = document.getElementById('progress-bar');
const currentTimeElement = document.getElementById('current-time');
const totalTimeElement = document.getElementById('total-time');
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const currentYear = document.getElementById('current-year');
const cardsContainer = document.getElementById('cards-container');

// ===========================
// INICIALIZACIÓN
// ===========================
document.addEventListener('DOMContentLoaded', function() {
    // Generar tarjetas dinámicamente
    generateCards();
    
    // Configurar año actual en el footer
    currentYear.textContent = new Date().getFullYear();
    
    // Configurar menú hamburguesa
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    // Cerrar menú al hacer clic en un enlace
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
    
    // Obtener referencias a botones generados dinámicamente
    playButtons = document.querySelectorAll('.play-btn');
    stopButtons = document.querySelectorAll('.stop-btn');
    
    // Configurar event listeners para botones de reproducción
    playButtons.forEach(button => {
        button.addEventListener('click', function() {
            const audioSrc = this.getAttribute('data-audio');
            const trackName = this.getAttribute('data-track');
            playAudio(audioSrc, trackName, this);
        });
    });
    
    // Configurar event listeners para botones de detener
    stopButtons.forEach(button => {
        button.addEventListener('click', function() {
            stopAudio();
        });
    });
    
    // Inicializar efectos psicodélicos
    initPsychoEffects();
    
    // Configurar animación de onda de audio
    initAudioWaveAnimation();
});

// ===========================
// GENERADOR DE TARJETAS
// ===========================
function generateCards() {
    cardsContainer.innerHTML = '';
    
    tracksData.forEach((track, index) => {
        // Seleccionar efecto aleatorio (1-6)
        const randomEffect = Math.floor(Math.random() * 6) + 1;
        
        const cardHTML = `
            <div class="card">
                <div class="card-image">
                    <img src="${track.image}" alt="${track.displayName}">
                    <div class="card-overlay">
                        <div class="psycho-effect" data-effect="${randomEffect}"></div>
                    </div>
                </div>
                <div class="card-content">
                    <h3 class="track-title">${track.title}</h3>
                    <p class="track-description">${track.description}</p>
                    <div class="card-actions">
                        <button class="play-btn" data-audio="${track.audio}" data-track="${track.displayName}">
                            <i class="fas fa-play"></i> Reproducir
                        </button>
                        <button class="stop-btn" disabled>
                            <i class="fas fa-stop"></i> Detener
                        </button>
                    </div>
                    <div class="audio-indicator">
                        <div class="audio-wave">
                            <div class="wave-bar"></div>
                            <div class="wave-bar"></div>
                            <div class="wave-bar"></div>
                            <div class="wave-bar"></div>
                            <div class="wave-bar"></div>
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        cardsContainer.insertAdjacentHTML('beforeend', cardHTML);
    });
}

// Función para reproducir audio
function playAudio(audioSrc, trackName, buttonElement) {
    // Si ya hay un audio reproduciéndose, detenerlo primero
    if (currentAudio) {
        stopAudio();
    }
    
    // Crear nuevo elemento de audio
    currentAudio = new Audio(audioSrc);
    currentTrackName = trackName;
    
    // Establecer volumen optimizado (85% para mejor calidad sin distorsión)
    currentAudio.volume = 0.85;
    
    // Actualizar UI
    currentTrackText.textContent = `Reproduciendo: ${trackName}`;
    updateButtonStates(buttonElement);
    
    // Configurar eventos del audio
    currentAudio.addEventListener('loadedmetadata', function() {
        // Establecer duración total
        const totalSeconds = Math.floor(currentAudio.duration);
        totalTimeElement.textContent = formatTime(totalSeconds);
        
        // Establecer tiempo actual
        currentTimeElement.textContent = "0:00";
        
        // Iniciar reproducción
        currentAudio.play();
        isPlaying = true;
        
        // Iniciar actualización de progreso
        progressInterval = setInterval(updateProgress, 100);
    });
    
    currentAudio.addEventListener('ended', function() {
        stopAudio();
    });
    
    currentAudio.addEventListener('error', function() {
        currentTrackText.textContent = "Error al cargar el audio";
        stopAudio();
    });
}

// Función para detener audio
function stopAudio() {
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
        currentAudio = null;
    }
    
    // Restablecer UI
    currentTrackText.textContent = "Ninguna pista reproduciéndose";
    progressBar.style.width = "0%";
    currentTimeElement.textContent = "0:00";
    isPlaying = false;
    
    // Limpiar intervalo de progreso
    if (progressInterval) {
        clearInterval(progressInterval);
        progressInterval = null;
    }
    
    // Restablecer estados de botones
    resetButtonStates();
}

// Función para actualizar la barra de progreso
function updateProgress() {
    if (currentAudio && !isNaN(currentAudio.duration)) {
        const progressPercent = (currentAudio.currentTime / currentAudio.duration) * 100;
        progressBar.style.width = `${progressPercent}%`;
        
        // Actualizar tiempo actual
        currentTimeElement.textContent = formatTime(Math.floor(currentAudio.currentTime));
    }
}

// Función para formatear tiempo (segundos a MM:SS)
function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
}

// Función para actualizar estados de botones
function updateButtonStates(activePlayButton) {
    // Deshabilitar todos los botones de reproducción
    playButtons.forEach(button => {
        button.disabled = true;
        button.innerHTML = '<i class="fas fa-pause"></i> Reproduciendo';
    });
    
    // Habilitar todos los botones de detener
    stopButtons.forEach(button => {
        button.disabled = false;
    });
    
    // Marcar el botón activo
    if (activePlayButton) {
        activePlayButton.classList.add('active');
    }
}

// Función para restablecer estados de botones
function resetButtonStates() {
    // Habilitar todos los botones de reproducción
    playButtons.forEach(button => {
        button.disabled = false;
        button.innerHTML = '<i class="fas fa-play"></i> Reproducir';
        button.classList.remove('active');
    });
    
    // Deshabilitar todos los botones de detener
    stopButtons.forEach(button => {
        button.disabled = true;
    });
}

// Inicializar efectos psicodélicos
function initPsychoEffects() {
    // Efecto principal en hero section
    const psychoContainer = document.getElementById('psycho-container');
    if (psychoContainer) {
        createPsychoEffect(psychoContainer, 'hero');
    }
    
    // Efecto en la sección about
    const aboutPsycho = document.getElementById('about-psycho');
    if (aboutPsycho) {
        createPsychoEffect(aboutPsycho, 'about');
    }
    
    // Efectos en tarjetas
    const psychoEffects = document.querySelectorAll('.psycho-effect');
    psychoEffects.forEach((effect, index) => {
        const effectType = effect.getAttribute('data-effect');
        createPsychoEffect(effect, `card-${effectType}`);
    });
}

// Crear efecto psicodélico
function createPsychoEffect(container, type) {
    // 6 colores en lugar de 4
    const colors = [
        '#00e5ff', // neon-blue
        '#ff00cc', // neon-pink
        '#14f139ff', // neon-green
        '#080b94ff', // deep-blue
        '#a50e91ff', // dark-pink
        '#0f6914ff', // dark-green
    ];
    
    // Diferentes efectos según el tipo
    if (type === 'hero') {
        // Efecto de partículas para hero
        for (let i = 0; i < 50; i++) {
            const particle = document.createElement('div');
            particle.style.position = 'absolute';
            particle.style.width = `${Math.random() * 10 + 5}px`;
            particle.style.height = particle.style.width;
            particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            particle.style.borderRadius = '50%';
            particle.style.left = `${Math.random() * 100}%`;
            particle.style.top = `${Math.random() * 100}%`;
            particle.style.opacity = '0.7';
            particle.style.filter = 'blur(1px)';
            
            // Animación
            const animation = particle.animate([
                { transform: 'translate(0, 0) scale(1)', opacity: 0.7 },
                { transform: `translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px) scale(${Math.random() * 0.5 + 0.5})`, opacity: 0.3 },
                { transform: 'translate(0, 0) scale(1)', opacity: 0.7 }
            ], {
                duration: Math.random() * 5000 + 3000,
                iterations: Infinity,
                direction: 'alternate'
            });
            
            container.appendChild(particle);
        }
    } else if (type.startsWith('card')) {
        // Efecto de ondas para tarjetas con color basado en data-effect
        const effectNumber = parseInt(type.split('-')[1]);
        const color = colors[(effectNumber - 1) % colors.length];
        
        for (let i = 0; i < 5; i++) {
            const wave = document.createElement('div');
            wave.style.position = 'absolute';
            wave.style.width = '100%';
            wave.style.height = '100%';
            wave.style.border = `2px solid ${color}`;
            wave.style.borderRadius = '10px';
            wave.style.opacity = '0';
            wave.style.transform = 'scale(0.8)';
            
            // Animación
            const animation = wave.animate([
                { opacity: 0.7, transform: 'scale(0.8)' },
                { opacity: 0, transform: 'scale(1.2)' }
            ], {
                duration: 2000,
                delay: i * 400,
                iterations: Infinity
            });
            
            container.appendChild(wave);
        }
    } else if (type === 'about') {
        // Efecto de gradiente animado para about
        const gradientAnimation = container.animate([
            { backgroundPosition: '0% 50%' },
            { backgroundPosition: '100% 50%' },
            { backgroundPosition: '0% 50%' }
        ], {
            duration: 10000,
            iterations: Infinity
        });
    }
}

// Inicializar animación de onda de audio
function initAudioWaveAnimation() {
    const audioWaves = document.querySelectorAll('.audio-wave');
    
    audioWaves.forEach(wave => {
        const bars = wave.querySelectorAll('.wave-bar');
        
        bars.forEach((bar, index) => {
            // Animación aleatoria para cada barra
            const randomHeight = () => Math.floor(Math.random() * 20) + 5;
            const randomDelay = Math.random() * 1000;
            
            setInterval(() => {
                bar.style.height = `${randomHeight()}px`;
            }, 100 + index * 50 + randomDelay);
        });
    });
}

// Efecto de scroll suave para enlaces internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Efecto de parallax en hero section
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        const heroHeight = hero.offsetHeight;
        if (scrolled < heroHeight) {
            const speed = 0.5;
            const yPos = -(scrolled * speed);
            hero.style.backgroundPosition = `center ${yPos}px`;
        }
    }
});