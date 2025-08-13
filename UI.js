// Servicios basados en la información del PDF - PRECIOS EN QUETZALES
const servicios = [
    // DIAGNÓSTICO DE MARCA
    {
        id: 1,
        nombre: "Auditoría Completa de Marca",
        categoria: "diagnostico",
        precio: 1950.00,
        precioOriginal: 2340.00,
        imagen: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        descripcion: "Análisis profundo de tu marca actual, incluyendo identidad visual, posicionamiento y percepción del mercado.",
        descuento: 17
    },
    {
        id: 2,
        nombre: "Investigación de Mercado",
        categoria: "diagnostico",
        precio: 1404.00,
        imagen: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        descripcion: "Estudio detallado de tu mercado objetivo, competencia y oportunidades de crecimiento."
    },
    {
        id: 3,
        nombre: "Análisis de Competencia",
        categoria: "diagnostico",
        precio: 1170.00,
        imagen: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        descripcion: "Evaluación exhaustiva de tus competidores directos e indirectos para identificar ventajas competitivas."
    },

    // TRANSFORMACIÓN DE IMAGEN CORPORATIVA
    {
        id: 4,
        nombre: "Rediseño de Logo Profesional",
        categoria: "transformacion",
        precio: 2730.00,
        imagen: "https://images.unsplash.com/photo-1626785774573-4b799315345d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        descripcion: "Creación de un logo moderno, memorable y versátil que represente perfectamente tu marca."
    },
    {
        id: 5,
        nombre: "Manual de Identidad Corporativa",
        categoria: "transformacion",
        precio: 3900.00,
        precioOriginal: 5070.00,
        imagen: "https://images.unsplash.com/photo-1542744094-3a31f272c490?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        descripcion: "Guía completa de uso de tu identidad visual con especificaciones técnicas y aplicaciones.",
        descuento: 23
    },
    {
        id: 6,
        nombre: "Renovación de Imagen Completa",
        categoria: "transformacion",
        precio: 6240.00,
        imagen: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        descripcion: "Transformación integral de tu imagen corporativa incluyendo logo, colores, tipografías y aplicaciones."
    },

    // SISTEMAS GRÁFICOS COMPLETOS
    {
        id: 7,
        nombre: "Papelería Corporativa Completa",
        categoria: "sistemas",
        precio: 2184.00,
        imagen: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        descripcion: "Diseño de tarjetas de presentación, hojas membretadas, sobres, facturas y documentos oficiales."
    },
    {
        id: 8,
        nombre: "Material Publicitario",
        categoria: "sistemas",
        precio: 2496.00,
        imagen: "https://images.unsplash.com/photo-1493612276216-ee3925520721?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        descripcion: "Flyers, brochures, catálogos, banners y todo el material promocional para tu empresa."
    },
    {
        id: 9,
        nombre: "Señalética Empresarial",
        categoria: "sistemas",
        precio: 3510.00,
        precioOriginal: 4290.00,
        imagen: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        descripcion: "Diseño de rótulos, señales internas y sistema de wayfinding para tu empresa.",
        descuento: 18
    },

    // SOLUCIONES DE BRANDING
    {
        id: 10,
        nombre: "Estrategia de Marca Integral",
        categoria: "branding",
        precio: 4680.00,
        imagen: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        descripcion: "Desarrollo completo de estrategia de marca, posicionamiento y propuesta de valor única."
    },
    {
        id: 11,
        nombre: "Naming y Concepto Creativo",
        categoria: "branding",
        precio: 3120.00,
        imagen: "https://images.unsplash.com/photo-1434626881859-194d67b2b86f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        descripcion: "Creación del nombre perfecto y desarrollo del concepto creativo para tu marca."
    },
    {
        id: 12,
        nombre: "Arquitectura de Marca",
        categoria: "branding",
        precio: 5850.00,
        precioOriginal: 7020.00,
        imagen: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        descripcion: "Estructuración completa del portfolio de marcas y submarcas de tu empresa.",
        descuento: 17
    },

    // CAMPAÑAS DE LANZAMIENTO/RELANZAMIENTO
    {
        id: 13,
        nombre: "Campaña de Lanzamiento 360°",
        categoria: "campanas",
        precio: 9360.00,
        imagen: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        descripcion: "Estrategia completa de lanzamiento con material gráfico, plan de medios y comunicación integral."
    },
    {
        id: 14,
        nombre: "Relanzamiento de Marca",
        categoria: "campanas",
        precio: 7800.00,
        precioOriginal: 10400.00,
        imagen: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        descripcion: "Renovación completa de imagen y estrategia para marcas existentes.",
        descuento: 25
    },

    // ASESORÍA EN POSICIONAMIENTO Y REPUTACIÓN
    {
        id: 15,
        nombre: "Consultoría Estratégica de Marca",
        categoria: "asesoria",
        precio: 3120.00,
        imagen: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        descripcion: "Asesoramiento especializado para definir y fortalecer la estrategia de tu marca en el mercado."
    },
    {
        id: 16,
        nombre: "Gestión de Reputación Online",
        categoria: "asesoria",
        precio: 2730.00,
        precioOriginal: 3510.00,
        imagen: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        descripcion: "Monitoreo y gestión de la reputación digital de tu marca en todas las plataformas.",
        descuento: 22
    },
    {
        id: 17,
        nombre: "Workshop de Branding Empresarial",
        categoria: "asesoria",
        precio: 1950.00,
        imagen: "https://images.unsplash.com/photo-1553484771-371a605b060b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        descripcion: "Capacitación especializada para equipos sobre implementación y gestión de marca."
    }
];

// Estado de la aplicación
let carrito = [];
let filtroActual = 'all';

// Elementos del DOM
const serviciosGrid = document.getElementById('servicios-grid');
const cartCount = document.getElementById('cart-count');
const cartItems = document.getElementById('cart-items');
const cartTotal = document.getElementById('cart-total');
const checkoutBtn = document.getElementById('checkout-btn');

// Inicialización cuando el DOM está listo
document.addEventListener('DOMContentLoaded', function() {
    // Validar que los elementos existen antes de usarlos
    const serviciosGridElement = document.getElementById('servicios-grid');
    if (serviciosGridElement) {
        cargarServicios();
    } else {
        console.warn('Elemento servicios-grid no encontrado');
    }
    
    actualizarCarrito();
    initEventListeners();
    initScrollEffects();
    initResponsiveFeatures();
});

// Nuevas funciones para características responsivas
function initResponsiveFeatures() {
    // Mejorar el comportamiento del navbar en dispositivos móviles
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    
    if (navbarToggler && navbarCollapse) {
        // Cerrar menú cuando se hace clic en un enlace (móviles)
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth < 992) {
                    const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
                        hide: true
                    });
                }
            });
        });
        
        // Cerrar menú cuando se hace clic fuera (móviles)
        document.addEventListener('click', (e) => {
            if (window.innerWidth < 992) {
                if (!navbarCollapse.contains(e.target) && !navbarToggler.contains(e.target)) {
                    if (navbarCollapse.classList.contains('show')) {
                        const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
                            hide: true
                        });
                    }
                }
            }
        });
    }
    
    // Optimizar imágenes para diferentes dispositivos
    optimizeImagesForDevice();
    
    // Mejorar el comportamiento de los modales en móviles
    optimizeModalsForMobile();
    
    // Ajustar comportamiento de scroll en dispositivos táctiles
    optimizeScrollForTouch();
}

function optimizeImagesForDevice() {
    const images = document.querySelectorAll('img');
    const isHighDPI = window.devicePixelRatio > 1;
    const isMobile = window.innerWidth < 768;
    
    images.forEach(img => {
        // Lazy loading para mejor rendimiento
        img.loading = 'lazy';
        
        // Optimizar quality según el dispositivo
        if (img.src.includes('unsplash.com')) {
            let quality = isMobile ? '60' : '80';
            if (isHighDPI) quality = '85';
            
            img.src = img.src.replace(/&q=\d+/, `&q=${quality}`);
        }
    });
}

function optimizeModalsForMobile() {
    const modals = document.querySelectorAll('.modal');
    
    modals.forEach(modal => {
        modal.addEventListener('show.bs.modal', function() {
            // Prevenir scroll del body en móviles
            if (window.innerWidth < 768) {
                document.body.style.overflow = 'hidden';
                document.body.style.paddingRight = '0px';
            }
        });
        
        modal.addEventListener('hidden.bs.modal', function() {
            // Restaurar scroll del body
            document.body.style.overflow = '';
            document.body.style.paddingRight = '';
        });
    });
}

function optimizeScrollForTouch() {
    // Mejorar el smooth scroll en dispositivos táctiles
    if ('ontouchstart' in window) {
        document.documentElement.style.scrollBehavior = 'smooth';
        
        // Optimizar el scroll para iOS Safari
        const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
        if (isIOS) {
            document.body.style.webkitOverflowScrolling = 'touch';
        }
    }
}

// Función mejorada para cargar servicios con validación
function cargarServicios() {
    if (!serviciosGrid) {
        console.error('Grid de servicios no encontrado');
        return;
    }
    mostrarServicios(servicios);
}

// Event Listeners mejorados para responsive
function initEventListeners() {
    // Filtros de productos
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const filtro = this.getAttribute('data-filter');
            setFiltroActivo(this);
            filtrarServicios(filtro);
        });
    });

    // Enlaces de categorías (incluir footer links)
    document.querySelectorAll('[data-category]').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const categoria = this.getAttribute('data-category');
            filtrarPorCategoria(categoria);
        });
    });

    // Enlaces del footer con data-category
    document.querySelectorAll('.footer-link[data-category]').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const categoria = this.getAttribute('data-category');
            filtrarPorCategoria(categoria);
            
            // Scroll suave a la sección de servicios
            setTimeout(() => {
                const serviciosSection = document.getElementById('servicios');
                if (serviciosSection) {
                    serviciosSection.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }, 100);
        });
    });

    // Smooth scroll para navegación mejorado
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                // Ajustar offset según el dispositivo
                const offset = window.innerWidth < 768 ? 80 : 100;
                const targetPosition = target.offsetTop - offset;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Checkout button
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', function() {
            if (carrito.length > 0) {
                enviarPorWhatsApp();
            }
        });
    }
    
    // Event listeners para cambios de orientación
    window.addEventListener('orientationchange', function() {
        setTimeout(() => {
            // Recalcular dimensiones después del cambio de orientación
            window.dispatchEvent(new Event('resize'));
        }, 100);
    });
    
    // Event listener para cambios de tamaño de ventana
    let resizeTimeout;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            // Reoptimizar para el nuevo tamaño
            optimizeImagesForDevice();
        }, 250);
    });
}

// Efectos de scroll mejorados para responsive
function initScrollEffects() {
    let ticking = false;

    function updateOnScroll() {
        const navbar = document.querySelector('.navbar');
        const scrollY = window.scrollY;
        
        // Navbar transparency on scroll con ajustes responsive
        const threshold = window.innerWidth < 768 ? 50 : 100;
        
        if (scrollY > threshold) {
            navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.98)';
            navbar.style.backdropFilter = 'blur(20px)';
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.backgroundColor = 'rgba(255, 255, 255, 1)';
            navbar.style.backdropFilter = 'blur(10px)';
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.04)';
        }

        // Highlight active nav link based on scroll position
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-link');
        let current = '';
        
        const offset = window.innerWidth < 768 ? 100 : 150;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - offset;
            if (scrollY >= sectionTop) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });

        ticking = false;
    }

    function requestTick() {
        if (!ticking) {
            requestAnimationFrame(updateOnScroll);
            ticking = true;
        }
    }

    window.addEventListener('scroll', requestTick, { passive: true });
}

function mostrarServicios(serviciosArray) {
    serviciosGrid.innerHTML = '';
    
    if (serviciosArray.length === 0) {
        serviciosGrid.innerHTML = `
            <div class="col-12 text-center">
                <p class="text-muted">No se encontraron servicios.</p>
            </div>
        `;
        return;
    }

    serviciosArray.forEach((servicio, index) => {
        const servicioCard = crearServicioCard(servicio);
        serviciosGrid.appendChild(servicioCard);
        
        // Animación escalonada optimizada para móviles
        const delay = window.innerWidth < 768 ? index * 50 : index * 100;
        setTimeout(() => {
            servicioCard.classList.add('fade-in-up');
        }, delay);
    });
}

function crearServicioCard(servicio) {
    const col = document.createElement('div');
    col.className = 'col-lg-3 col-md-4 col-sm-6 col-12';
    
    const descuentoHtml = servicio.descuento ? 
        `<div class="discount-badge">-${servicio.descuento}%</div>` : '';
    
    const precioOriginalHtml = servicio.precioOriginal ? 
        `<span class="product-original-price me-2">Q${servicio.precioOriginal.toLocaleString('es-GT', {minimumFractionDigits: 2})}</span>` : '';
    
    col.innerHTML = `
        <div class="card product-card h-100 position-relative">
            ${descuentoHtml}
            <img src="${servicio.imagen}" class="card-img-top product-img" alt="${servicio.nombre}" loading="lazy">
            <div class="card-body d-flex flex-column">
                <h5 class="card-title">${servicio.nombre}</h5>
                <p class="card-text text-muted flex-grow-1">${servicio.descripcion}</p>
                <div class="mt-auto">
                    <div class="d-flex align-items-center justify-content-between mb-3">
                        <div class="price-container">
                            ${precioOriginalHtml}
                            <span class="product-price">Q${servicio.precio.toLocaleString('es-GT', {minimumFractionDigits: 2})}</span>
                        </div>
                    </div>
                    <button class="btn btn-primary w-100" onclick="agregarAlCarrito(${servicio.id})">
                        <i class="bi bi-cart-plus me-2"></i>Contratar Servicio
                    </button>
                </div>
            </div>
        </div>
    `;
    
    return col;
}

// Resto de funciones (sin cambios significativos, solo optimizaciones menores)
function setFiltroActivo(botonActivo) {
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
        btn.classList.add('btn-outline-primary');
        btn.classList.remove('btn-primary');
    });
    
    botonActivo.classList.add('active');
    botonActivo.classList.add('btn-primary');
    botonActivo.classList.remove('btn-outline-primary');
}

function filtrarServicios(filtro) {
    filtroActual = filtro;
    
    if (filtro === 'all') {
        mostrarServicios(servicios);
    } else {
        const serviciosFiltrados = servicios.filter(servicio => servicio.categoria === filtro);
        mostrarServicios(serviciosFiltrados);
    }
}

function filtrarPorCategoria(categoria) {
    // Validar si la categoría existe
    if (!categoria || categoria === 'all') {
        categoria = 'all';
    }
    
    const filtroBtn = document.querySelector(`[data-filter="${categoria}"]`);
    if (filtroBtn) {
        setFiltroActivo(filtroBtn);
        filtrarServicios(categoria);
    } else {
        // Si no existe el botón filtro, mostrar todos
        const todoBtn = document.querySelector('[data-filter="all"]');
        if (todoBtn) {
            setFiltroActivo(todoBtn);
            filtrarServicios('all');
        }
    }
    
    // Scroll suave a la sección de servicios con validación
    setTimeout(() => {
        const serviciosSection = document.getElementById('servicios');
        if (serviciosSection) {
            const offset = window.innerWidth < 768 ? 80 : 100;
            const targetPosition = serviciosSection.offsetTop - offset;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    }, 100);
}

// Funciones del carrito (actualizadas con formato de quetzales)
function agregarAlCarrito(servicioId) {
    const servicio = servicios.find(p => p.id === servicioId);
    if (!servicio) return;
    
    const itemExistente = carrito.find(item => item.id === servicioId);
    
    if (itemExistente) {
        itemExistente.cantidad += 1;
    } else {
        carrito.push({
            ...servicio,
            cantidad: 1
        });
    }
    
    actualizarCarrito();
    mostrarNotificacion(`${servicio.nombre} agregado al carrito`);
}

function eliminarDelCarrito(servicioId) {
    carrito = carrito.filter(item => item.id !== servicioId);
    actualizarCarrito();
    mostrarNotificacion('Servicio eliminado del carrito');
}

function cambiarCantidad(servicioId, nuevaCantidad) {
    if (nuevaCantidad <= 0) {
        eliminarDelCarrito(servicioId);
        return;
    }
    
    const item = carrito.find(item => item.id === servicioId);
    if (item) {
        item.cantidad = nuevaCantidad;
        actualizarCarrito();
    }
}

function actualizarCarrito() {
    const cantidadTotal = carrito.reduce((total, item) => total + item.cantidad, 0);
    const precioTotal = carrito.reduce((total, item) => total + (item.precio * item.cantidad), 0);
    
    // Actualizar contador
    if (cartCount) {
        cartCount.textContent = cantidadTotal;
    }
    
    // Actualizar total con formato de quetzales
    if (cartTotal) {
        cartTotal.textContent = `Q${precioTotal.toLocaleString('es-GT', {minimumFractionDigits: 2})}`;
    }
    
    // Actualizar contenido del carrito
    if (cartItems) {
        mostrarItemsCarrito();
    }
    
    // Habilitar/deshabilitar botón de checkout
    if (checkoutBtn) {
        checkoutBtn.disabled = carrito.length === 0;
        
        // Actualizar el evento click para WhatsApp
        checkoutBtn.onclick = function() {
            if (carrito.length > 0) {
                enviarPorWhatsApp();
            }
        };
    }
}

function mostrarItemsCarrito() {
    if (carrito.length === 0) {
        cartItems.innerHTML = `
            <div class="text-center py-5 text-muted">
                <i class="bi bi-briefcase-fill" style="font-size: 3rem;"></i>
                <p class="mt-3">No has seleccionado ningún servicio</p>
            </div>
        `;
        return;
    }
    
    cartItems.innerHTML = carrito.map(item => `
        <div class="cart-item">
            <div class="row align-items-center">
                <div class="col-md-2">
                    <img src="${item.imagen}" alt="${item.nombre}" class="img-fluid rounded">
                </div>
                <div class="col-md-4">
                    <h6 class="mb-0">${item.nombre}</h6>
                    <small class="text-muted">${item.descripcion.substring(0, 50)}...</small>
                </div>
                <div class="col-md-2">
                    <div class="quantity-controls">
                        <button class="quantity-btn" onclick="cambiarCantidad(${item.id}, ${item.cantidad - 1})">
                            <i class="bi bi-dash"></i>
                        </button>
                        <span class="mx-2">${item.cantidad}</span>
                        <button class="quantity-btn" onclick="cambiarCantidad(${item.id}, ${item.cantidad + 1})">
                            <i class="bi bi-plus"></i>
                        </button>
                    </div>
                </div>
                <div class="col-md-2">
                    <span class="fw-bold">Q${item.precio.toLocaleString('es-GT', {minimumFractionDigits: 2})}</span>
                </div>
                <div class="col-md-2">
                    <button class="btn btn-outline-danger btn-sm" onclick="eliminarDelCarrito(${item.id})">
                        <i class="bi bi-trash"></i>
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

function enviarPorWhatsApp() {
    if (carrito.length === 0) {
        mostrarNotificacion('No hay servicios seleccionados');
        return;
    }

    // Validar que hay servicios válidos
    const serviciosValidos = carrito.filter(item => item && item.nombre && item.precio);
    if (serviciosValidos.length === 0) {
        mostrarNotificacion('Error: No hay servicios válidos en el carrito');
        return;
    }

    const mensajeItems = serviciosValidos.map(item => 
        `• ${item.nombre} (Cantidad: ${item.cantidad || 1}) - Q${((item.precio || 0) * (item.cantidad || 1)).toLocaleString('es-GT', {minimumFractionDigits: 2})}`
    ).join('\n');
    
    const total = serviciosValidos.reduce((sum, item) => sum + ((item.precio || 0) * (item.cantidad || 1)), 0);
    
    const mensaje = `¡Hola Marquesa GT! 👋

Me interesa contratar los siguientes servicios:

${mensajeItems}

📝 *Total: Q${total.toLocaleString('es-GT', {minimumFractionDigits: 2})}*

¿Podrían enviarme más información sobre estos servicios y el proceso para continuar?

¡Gracias! 😊`;
    
    const numeroWhatsApp = '50257687221';
    const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensaje)}`;
    
    // Abrir WhatsApp en nueva ventana
    try {
        window.open(url, '_blank');
        
        // Cerrar modal después del envío exitoso
        const modal = bootstrap.Modal.getInstance(document.getElementById('carritoModal'));
        if (modal) {
            modal.hide();
        }
        
        mostrarNotificacion('¡Mensaje enviado a WhatsApp! Pronto nos pondremos en contacto contigo.');
        
    } catch (error) {
        console.error('Error al abrir WhatsApp:', error);
        mostrarNotificacion('Error al abrir WhatsApp. Por favor, intenta nuevamente.');
    }
}

function mostrarNotificacion(mensaje, tipo = 'success') {
    // Validar mensaje
    if (!mensaje || typeof mensaje !== 'string') {
        return;
    }

    // Remover notificaciones existentes
    const notificacionesExistentes = document.querySelectorAll('.notification-custom');
    notificacionesExistentes.forEach(notif => {
        if (notif.parentNode) {
            notif.parentNode.removeChild(notif);
        }
    });

    // Crear elemento de notificación
    const notificacion = document.createElement('div');
    notificacion.className = `alert alert-${tipo} position-fixed notification-custom`;
    notificacion.style.cssText = `
        top: 100px;
        right: 20px;
        z-index: 9999;
        min-width: 300px;
        max-width: 400px;
        animation: slideInRight 0.3s ease;
        box-shadow: 0 10px 30px rgba(0,0,0,0.2);
        border: none;
        border-radius: 10px;
    `;
    
    const icono = tipo === 'success' ? 'bi-check-circle-fill' : 
                  tipo === 'warning' ? 'bi-exclamation-triangle-fill' : 
                  tipo === 'danger' ? 'bi-x-circle-fill' : 'bi-info-circle-fill';
    
    notificacion.innerHTML = `
        <div class="d-flex align-items-center">
            <i class="bi ${icono} me-2"></i>
            <span>${mensaje}</span>
            <button type="button" class="btn-close ms-auto" onclick="this.parentElement.parentElement.remove()"></button>
        </div>
    `;
    
    document.body.appendChild(notificacion);
    
    // Remover después de 4 segundos
    setTimeout(() => {
        if (notificacion.parentNode) {
            notificacion.style.animation = 'slideOutRight 0.3s ease';
            setTimeout(() => {
                if (notificacion.parentNode) {
                    notificacion.parentNode.removeChild(notificacion);
                }
            }, 300);
        }
    }, 4000);
}

// Exportar funciones para uso global
window.agregarAlCarrito = agregarAlCarrito;
window.eliminarDelCarrito = eliminarDelCarrito;
window.cambiarCantidad = cambiarCantidad;
window.filtrarPorCategoria = filtrarPorCategoria;
