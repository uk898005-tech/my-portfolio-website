// Initialize Lenis Smooth Scroll
const lenis = new Lenis();

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

// Register GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Custom Cursor Logic
const cursor = document.getElementById('custom-cursor');
document.addEventListener('mousemove', (e) => {
    gsap.to(cursor, {
        x: e.clientX - 10,
        y: e.clientY - 10,
        duration: 0.1,
        ease: 'power2.out'
    });
});

// Hover effects for cursor
const hoverElements = document.querySelectorAll('a, .btn, .service-card, .social-icon');
hoverElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
        gsap.to(cursor, {
            scale: 2.5,
            backgroundColor: 'rgba(0, 242, 255, 0.3)',
            duration: 0.3
        });
    });
    el.addEventListener('mouseleave', () => {
        gsap.to(cursor, {
            scale: 1,
            backgroundColor: '#00f2ff',
            duration: 0.3
        });
    });
});

// Navbar Scroll Effect
window.addEventListener('scroll', () => {
    const nav = document.getElementById('navbar');
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// Animations
// Page Load
window.addEventListener('load', () => {
    const tl = gsap.timeline();
    
    tl.from('.logo', { y: -20, opacity: 0, duration: 0.5 })
      .from('.nav-links li', { y: -20, opacity: 0, stagger: 0.1, duration: 0.5 }, '-=0.3')
      .from('.reveal-text', { y: 30, opacity: 0, stagger: 0.2, duration: 0.8, ease: 'power3.out' }, '-=0.5');
});

// Scroll Reveal Animations
const reveals = document.querySelectorAll('.reveal');
reveals.forEach(el => {
    gsap.from(el, {
        scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            toggleActions: 'play none none none'
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
    });
});

// Skill Bars Animation
gsap.utils.toArray('.skill-progress').forEach(bar => {
    const targetWidth = bar.style.width;
    bar.style.width = '0%';
    
    gsap.to(bar, {
        scrollTrigger: {
            trigger: bar,
            start: 'top 90%'
        },
        width: targetWidth,
        duration: 1.5,
        ease: 'power2.out'
    });
});

// Floating Spheres Animation
gsap.to('.gradient-sphere', {
    x: 'random(-50, 50)',
    y: 'random(-50, 50)',
    duration: 3,
    repeat: -1,
    yoyo: true,
    ease: 'sine.inOut'
});

gsap.to('.gradient-sphere.secondary', {
    x: 'random(-30, 30)',
    y: 'random(-30, 30)',
    duration: 4,
    repeat: -1,
    yoyo: true,
    ease: 'sine.inOut'
});
