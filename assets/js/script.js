/* ═══════════════════════════════════════════════════════
   MI MUHAMMADIYAH BARUAMBA - JAVASCRIPT
   Website resmi Madrasah Ibtidaiyah Muhammadiyah Baruamba
   ═══════════════════════════════════════════════════════ */

/* ═══════════ CATATAN PENTING ═══════════
   Semua data (fasilitas, guru, prestasi, berita) sudah dipindahkan ke HTML statis.
   
   UNTUK EDIT DATA, LANGSUNG EDIT FILE HTML:
   - Fasilitas  → pages/fasilitas.html
   - Guru       → pages/guru.html  
   - Prestasi   → pages/prestasi.html
   - Galeri     → pages/galeri.html
   
   File ini hanya berisi fungsi interaktif (navbar, scroll, form, dll).
   ═════════════════════════════════════════════════ */

// ═══════════ MOBILE VIEWPORT HEIGHT FIX ═══════════
// Fix for iOS Safari 100vh issue
(function() {
  'use strict';
  
  function setAppHeight() {
    const doc = document.documentElement;
    doc.style.setProperty('--app-height', `${window.innerHeight}px`);
  }
  
  window.addEventListener('resize', setAppHeight);
  window.addEventListener('orientationchange', setAppHeight);
  setAppHeight();
})();

// ═══════════ PAGE TRANSITION DISABLED FOR NAVBAR PERSISTENCE ═══════════
// Page transition has been disabled to keep navbar fixed and persistent
// across page navigation without flickering or refresh effects

// ═══════════ INTERNAL LINK NAVIGATION (NO TRANSITION) ═══════════
// Direct navigation without page transition for instant navbar persistence
// Links will navigate immediately without animation to maintain navbar fixed state

// ═══════════ SMOOTH SCROLL FOR ANCHOR LINKS ═══════════
document.addEventListener('DOMContentLoaded', () => {
  'use strict';
  
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  
  anchorLinks.forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      
      // Skip empty or just # links
      if (!targetId || targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        
        // Smooth scroll to target
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
        
        // Update URL without page reload
        if (history.pushState) {
          history.pushState(null, null, targetId);
        }
      }
    });
  });
});

// ═══════════ NAV SCROLL ═══════════
document.addEventListener('DOMContentLoaded', () => {
  'use strict';
  
  setTimeout(() => {
    const nav = document.getElementById('nav');
    const navLinks = document.querySelectorAll('.nav-links a');
    const sections = document.querySelectorAll('section[id]');

    if (nav) {
      let ticking = false;
      
      window.addEventListener('scroll', () => {
        if (!ticking) {
          window.requestAnimationFrame(() => {
            // Add shadow on scroll
            nav.classList.toggle('scrolled', window.scrollY > 30);

            // Update active link based on scroll position
            let current = '';
            sections.forEach(s => {
              const sectionTop = s.offsetTop - 120;
              const sectionHeight = s.offsetHeight;
              if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                current = s.id;
              }
            });
            
            navLinks.forEach(a => {
              a.classList.remove('active');
              if (current && a.getAttribute('href') === '#' + current) {
                a.classList.add('active');
              }
            });
            
            ticking = false;
          });
          
          ticking = true;
        }
      });
    }

    // ═══════════ DROPDOWN MENU ═══════════
    const dropdowns = document.querySelectorAll('.nav-links .dropdown');
    let dropdownTimeout = null;
    
    dropdowns.forEach(dropdown => {
      const dropdownLink = dropdown.querySelector('a');
      const dropdownMenu = dropdown.querySelector('.dropdown-menu');
      
      if (dropdownLink && dropdownMenu) {
        // Prevent default link behavior on dropdown parent
        dropdownLink.addEventListener('click', (e) => {
          e.preventDefault();
          
          // On mobile or touch devices, toggle dropdown
          if (window.innerWidth <= 900 || ('ontouchstart' in window)) {
            // Close other dropdowns
            dropdowns.forEach(d => {
              if (d !== dropdown) {
                d.classList.remove('active');
              }
            });
            
            // Toggle current dropdown
            dropdown.classList.toggle('active');
          }
        });
        
        // Desktop hover behavior with delay
        dropdown.addEventListener('mouseenter', () => {
          if (window.innerWidth > 900) {
            clearTimeout(dropdownTimeout);
            dropdown.classList.add('active');
          }
        });
        
        dropdown.addEventListener('mouseleave', () => {
          if (window.innerWidth > 900) {
            dropdownTimeout = setTimeout(() => {
              dropdown.classList.remove('active');
            }, 300);
          }
        });
        
        // Keep dropdown open when hovering over menu items
        dropdownMenu.addEventListener('mouseenter', () => {
          clearTimeout(dropdownTimeout);
        });
      }
    });
    
    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
      if (!e.target.closest('.dropdown')) {
        dropdowns.forEach(dropdown => {
          dropdown.classList.remove('active');
        });
      }
    });
    
    // Close dropdown on ESC key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        dropdowns.forEach(dropdown => {
          dropdown.classList.remove('active');
        });
      }
    });
    
    // Close dropdowns when window is resized to desktop
    let resizeTimer;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        if (window.innerWidth > 900) {
          dropdowns.forEach(dropdown => {
            dropdown.classList.remove('active');
          });
        }
      }, 250);
    });

    // ═══════════ MOBILE NAV ═══════════
    const navToggle = document.getElementById('navToggle');
    const navMobile = document.getElementById('navMobile');
    const overlayMob = document.getElementById('overlayMobile');

    if (navToggle && navMobile && overlayMob) {
      function closeMobile() { 
        if (navMobile && overlayMob) {
          navMobile.classList.remove('open'); 
          overlayMob.classList.remove('open'); 
          navToggle.classList.remove('active');
          document.body.style.overflow = '';
        }
      }
      
      function openMobile() {
        if (navMobile && overlayMob) {
          navMobile.classList.add('open'); 
          overlayMob.classList.add('open'); 
          navToggle.classList.add('active');
          document.body.style.overflow = 'hidden';
        }
      }
      
      navToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        if (navMobile.classList.contains('open')) {
          closeMobile();
        } else {
          openMobile();
        }
      });
      
      overlayMob.addEventListener('click', closeMobile);
      
      // Close mobile menu when clicking on a link (except dropdown toggle)
      navMobile.querySelectorAll('a:not(.mobile-dropdown-toggle)').forEach(a => {
        a.addEventListener('click', () => {
          setTimeout(closeMobile, 150);
        });
      });
      
      // Mobile dropdown toggle
      const mobileDropdowns = navMobile.querySelectorAll('.mobile-dropdown');
      mobileDropdowns.forEach(dropdown => {
        const toggle = dropdown.querySelector('.mobile-dropdown-toggle');
        if (toggle) {
          toggle.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            
            // Close other dropdowns
            mobileDropdowns.forEach(d => {
              if (d !== dropdown) {
                d.classList.remove('active');
              }
            });
            
            // Toggle current dropdown
            dropdown.classList.toggle('active');
          });
        }
      });
      
      // Close on ESC key
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && navMobile && navMobile.classList.contains('open')) {
          closeMobile();
        }
      });
    }
  }, 100);
});

// ═══════════ COUNTER ═══════════
function animateCounter(el) {
  'use strict';
  
  if (!el || !el.dataset.target) return;
  
  const target = +el.dataset.target;
  const duration = 1500;
  const start = performance.now();
  
  function update(now) {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.round(eased * target);
    if (progress < 1) {
      requestAnimationFrame(update);
    } else {
      el.textContent = target;
    }
  }
  requestAnimationFrame(update);
}

// ═══════════ REVEAL ON SCROLL ═══════════
document.addEventListener('DOMContentLoaded', () => {
  'use strict';
  
  const reveals = document.querySelectorAll('.reveal');
  const counters = document.querySelectorAll('.counter');
  let countersDone = false;
  let ticking = false;

  function checkReveal() {
    const wh = window.innerHeight;
    
    reveals.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < wh * 0.88 && !el.classList.contains('visible')) {
        el.classList.add('visible');
      }
    });
    
    // Counters
    if (!countersDone && counters.length > 0) {
      const statsEl = document.querySelector('.stats');
      if (statsEl) {
        const rect = statsEl.getBoundingClientRect();
        if (rect.top < wh * 0.9) {
          counters.forEach(animateCounter);
          countersDone = true;
        }
      }
    }
  }
  
  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        checkReveal();
        ticking = false;
      });
      ticking = true;
    }
  });
  
  // Initial check
  checkReveal();

  // ═══════════ SCROLL TOP ═══════════
  const scrollTopBtn = document.getElementById('scrollTop');
  if (scrollTopBtn) {
    let scrollTicking = false;
    
    window.addEventListener('scroll', () => {
      if (!scrollTicking) {
        window.requestAnimationFrame(() => {
          scrollTopBtn.classList.toggle('visible', window.scrollY > 500);
          scrollTicking = false;
        });
        scrollTicking = true;
      }
    });
    
    scrollTopBtn.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
});

// ═══════════ CONTACT FORM ═══════════
document.addEventListener('DOMContentLoaded', () => {
  'use strict';
  
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const toast = document.getElementById('toast');
      if (toast) {
        toast.classList.add('show');
        setTimeout(() => toast.classList.remove('show'), 3400);
      }
      
      // Get form data
      const formData = new FormData(this);
      const nama = formData.get('nama') || 'N/A';
      const email = formData.get('email') || 'N/A';
      const telepon = formData.get('telepon') || 'N/A';
      const pesan = formData.get('pesan') || 'N/A';
      
      // Optional: Redirect to WhatsApp
      const message = `Halo, saya ingin bertanya:\n\nNama: ${nama}\nEmail: ${email}\nTelepon: ${telepon}\nPesan: ${pesan}`;
      // window.open(`https://wa.me/6285228929488?text=${encodeURIComponent(message)}`, '_blank');
      
      // Reset form
      this.reset();
    });
  }
});

// ═══════════ REGISTRATION FORM ═══════════
document.addEventListener('DOMContentLoaded', () => {
  'use strict';
  
  const registrationForm = document.getElementById('registrationForm');
  if (registrationForm) {
    registrationForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const formData = new FormData(this);
      
      // Build WhatsApp message
      const message = `*PENDAFTARAN SISWA BARU MI MUHAMMADIYAH BARUAMBA*\n\n` +
        `*DATA CALON SISWA*\n` +
        `Nama: ${formData.get('namaLengkap')}\n` +
        `Jenis Kelamin: ${formData.get('jenisKelamin')}\n` +
        `Tempat/Tanggal Lahir: ${formData.get('tempatLahir')}, ${formData.get('tanggalLahir')}\n` +
        `Alamat: ${formData.get('alamatSiswa')}\n` +
        `Asal TK/RA: ${formData.get('asalTK') || '-'}\n` +
        `Tahun Ajaran: ${formData.get('tahunAjaran')}\n\n` +
        `*DATA ORANG TUA*\n` +
        `Nama Ayah: ${formData.get('namaAyah')}\n` +
        `Pekerjaan Ayah: ${formData.get('pekerjaanAyah') || '-'}\n` +
        `Nama Ibu: ${formData.get('namaIbu')}\n` +
        `Pekerjaan Ibu: ${formData.get('pekerjaanIbu') || '-'}\n` +
        `No. Telepon: ${formData.get('noTelepon')}\n` +
        `Email: ${formData.get('email') || '-'}`;
      
      // Open WhatsApp with message
      window.open(`https://wa.me/6285228929488?text=${encodeURIComponent(message)}`, '_blank');
      
      // Show success message
      alert('Terima kasih! Anda akan diarahkan ke WhatsApp untuk melengkapi pendaftaran.');
      
      // Reset form
      this.reset();
    });
  }
});

// ═══════════ GALLERY FILTER ═══════════
document.addEventListener('DOMContentLoaded', () => {
  'use strict';
  
  const filterButtons = document.querySelectorAll('.filter-btn');
  const galleryItems = document.querySelectorAll('.gallery-item');

  if (filterButtons.length > 0 && galleryItems.length > 0) {
    // Initialize all items as visible
    galleryItems.forEach(item => {
      item.style.display = 'block';
      item.style.opacity = '1';
      item.style.transform = 'scale(1)';
      item.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
    });

    filterButtons.forEach(btn => {
      btn.addEventListener('click', function() {
        // Update active button
        filterButtons.forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        
        const filter = this.dataset.filter;
        
        // Count visible items for animation delay
        let visibleCount = 0;
        
        // Filter items with smooth animation
        galleryItems.forEach((item) => {
          const category = item.dataset.category;
          const shouldShow = filter === 'all' || category === filter;
          
          if (shouldShow) {
            // Show with fade-in animation
            item.style.display = 'block';
            setTimeout(() => {
              item.style.opacity = '1';
              item.style.transform = 'scale(1)';
            }, visibleCount * 50); // Staggered animation
            visibleCount++;
          } else {
            // Hide with fade-out animation
            item.style.opacity = '0';
            item.style.transform = 'scale(0.9)';
            setTimeout(() => {
              item.style.display = 'none';
            }, 300);
          }
        });
      });
    });
  }
});

// ═══════════ DROPDOWN HOVER (Desktop) ═══════════
document.addEventListener('DOMContentLoaded', () => {
  'use strict';
  
  const dropdowns = document.querySelectorAll('.nav-links .dropdown');
  
  dropdowns.forEach(dropdown => {
    let timeoutId;
    
    dropdown.addEventListener('mouseenter', function() {
      clearTimeout(timeoutId);
      const menu = this.querySelector('.dropdown-menu');
      if (menu) {
        menu.style.display = 'block';
        setTimeout(() => {
          menu.style.opacity = '1';
          menu.style.transform = 'translateY(0)';
        }, 10);
      }
    });
    
    dropdown.addEventListener('mouseleave', function() {
      const menu = this.querySelector('.dropdown-menu');
      if (menu) {
        timeoutId = setTimeout(() => {
          menu.style.opacity = '0';
          menu.style.transform = 'translateY(-10px)';
          setTimeout(() => {
            menu.style.display = 'none';
          }, 300);
        }, 100);
      }
    });
  });
});

// ═══════════ IMAGE LAZY LOADING ═══════════
document.addEventListener('DOMContentLoaded', () => {
  'use strict';
  
  const images = document.querySelectorAll('img[data-src]');
  
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.removeAttribute('data-src');
          observer.unobserve(img);
        }
      });
    });
    
    images.forEach(img => imageObserver.observe(img));
  } else {
    // Fallback for older browsers
    images.forEach(img => {
      img.src = img.dataset.src;
      img.removeAttribute('data-src');
    });
  }
});
