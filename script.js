// Initialize Lottie animation
let lottieAnimation;

document.addEventListener('DOMContentLoaded', function() {
    // Load Lottie animation
    lottieAnimation = bodymovin.loadAnimation({
        container: document.getElementById('lottie-bg'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'Scene-17.json',
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    });

    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 1s ease-out forwards';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all sections
    document.querySelectorAll('section').forEach(section => {
        if (!section.classList.contains('hero')) {
            section.style.opacity = '0';
            observer.observe(section);
        }
    });

    // Parallax effect for hero elements
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallax = document.querySelector('.hero-content');
        const palmLeft = document.querySelector('.palm-left');
        const palmRight = document.querySelector('.palm-right');
        
        if (parallax) {
            parallax.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
        
        if (palmLeft) {
            palmLeft.style.transform = `translateY(${scrolled * 0.3}px) scaleX(-1)`;
        }
        
        if (palmRight) {
            palmRight.style.transform = `translateY(${scrolled * 0.3}px)`;
        }

        // Navbar stays consistent on scroll
        const navbar = document.querySelector('.navbar');
        navbar.style.background = 'rgba(255, 255, 255, 0.1)';
    });

    // Add hover effect to cards
    document.querySelectorAll('.about-card, .step-card, .roadmap-item').forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0)';
        });
    });

    // Animate numbers on scroll
    const animateNumbers = () => {
        const numbers = document.querySelectorAll('.stat-number');
        
        numbers.forEach(number => {
            const target = number.innerText;
            const isPercentage = target.includes('%');
            const isBillion = target.includes('B');
            
            let finalValue = 0;
            let suffix = '';
            
            if (isPercentage) {
                finalValue = parseInt(target);
                suffix = '%';
            } else if (isBillion) {
                finalValue = 1;
                suffix = 'B';
            } else {
                finalValue = parseInt(target) || 100;
                suffix = '';
            }
            
            let current = 0;
            const increment = finalValue / 50;
            
            const timer = setInterval(() => {
                current += increment;
                if (current >= finalValue) {
                    current = finalValue;
                    clearInterval(timer);
                }
                number.innerText = Math.floor(current) + suffix;
            }, 30);
        });
    };

    // Trigger number animation when tokenomics section is visible
    const tokenomicsSection = document.querySelector('.tokenomics-section');
    const tokenomicsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateNumbers();
                tokenomicsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    if (tokenomicsSection) {
        tokenomicsObserver.observe(tokenomicsSection);
    }

    // Add particle effects to hero
    createParticles();
});

// Copy contract address function
function copyContract() {
    const contractText = document.getElementById('contract').innerText;
    navigator.clipboard.writeText(contractText).then(() => {
        const copyBtn = document.querySelector('.copy-btn');
        const originalText = copyBtn.innerText;
        copyBtn.innerText = '✅';
        setTimeout(() => {
            copyBtn.innerText = originalText;
        }, 2000);
    });
}

// Create floating particles
function createParticles() {
    const particleCount = 20;
    const hero = document.querySelector('.hero');
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.cssText = `
            position: absolute;
            width: 4px;
            height: 4px;
            background: rgba(255, 215, 0, 0.6);
            border-radius: 50%;
            pointer-events: none;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation: particleFloat ${10 + Math.random() * 20}s linear infinite;
            animation-delay: ${Math.random() * 5}s;
        `;
        hero.appendChild(particle);
    }
    
    // Add particle animation to styles
    const style = document.createElement('style');
    style.textContent = `
        @keyframes particleFloat {
            0% {
                transform: translateY(0) translateX(0);
                opacity: 0;
            }
            10% {
                opacity: 1;
            }
            90% {
                opacity: 1;
            }
            100% {
                transform: translateY(-100vh) translateX(${Math.random() * 200 - 100}px);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
}

// Add mouse trail effect
document.addEventListener('mousemove', (e) => {
    const trail = document.createElement('div');
    trail.className = 'mouse-trail';
    trail.style.cssText = `
        position: fixed;
        width: 10px;
        height: 10px;
        background: radial-gradient(circle, rgba(255, 215, 0, 0.5) 0%, transparent 70%);
        border-radius: 50%;
        pointer-events: none;
        left: ${e.clientX}px;
        top: ${e.clientY}px;
        transform: translate(-50%, -50%);
        animation: trailFade 1s ease-out forwards;
        z-index: 9999;
    `;
    document.body.appendChild(trail);
    
    setTimeout(() => {
        trail.remove();
    }, 1000);
});

// Add trail fade animation
if (!document.querySelector('#trail-style')) {
    const trailStyle = document.createElement('style');
    trailStyle.id = 'trail-style';
    trailStyle.textContent = `
        @keyframes trailFade {
            0% {
                opacity: 1;
                transform: translate(-50%, -50%) scale(1);
            }
            100% {
                opacity: 0;
                transform: translate(-50%, -50%) scale(3);
            }
        }
    `;
    document.head.appendChild(trailStyle);
}