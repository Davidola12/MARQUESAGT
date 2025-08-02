// Datos de productos
const productos = [
    // Cuidado de la Piel
    {
        id: 1,
        nombre: "Serum Vitamina C",
        categoria: "skincare",
        precio: 29.99,
        precioOriginal: 39.99,
        imagen: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        descripcion: "Serum antioxidante con vitamina C pura para iluminar y proteger la piel.",
        descuento: 25
    },
    {
        id: 2,
        nombre: "Crema Hidratante Anti-edad",
        categoria: "skincare",
        precio: 45.99,
        imagen: "https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        descripcion: "Crema hidratante con ácido hialurónico y retinol para combatir los signos del envejecimiento."
    },
    {
        id: 3,
        nombre: "Limpiador Facial Suave",
        categoria: "skincare",
        precio: 19.99,
        imagen: "https://images.unsplash.com/photo-1571875257727-256c39da42af?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        descripcion: "Limpiador facial suave para todo tipo de piel, elimina impurezas sin resecar."
    },
    {
        id: 4,
        nombre: "Mascarilla de Arcilla",
        categoria: "skincare",
        precio: 24.99,
        precioOriginal: 34.99,
        imagen: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        descripcion: "Mascarilla purificante de arcilla bentonita para piel grasa y mixta.",
        descuento: 29
    },

    // Maquillaje
    {
        id: 5,
        nombre: "Base de Maquillaje HD",
        categoria: "makeup",
        precio: 32.99,
        imagen: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        descripcion: "Base de maquillaje de alta definición con cobertura completa y acabado natural."
    },
    {
        id: 6,
        nombre: "Paleta de Sombras Sunset",
        categoria: "makeup",
        precio: 38.99,
        precioOriginal: 49.99,
        imagen: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        descripcion: "Paleta de 12 sombras en tonos cálidos perfecta para looks de día y noche.",
        descuento: 22
    },
    {
        id: 7,
        nombre: "Labial Mate Duradero",
        categoria: "makeup",
        precio: 16.99,
        imagen: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        descripcion: "Labial mate de larga duración disponible en 8 tonos vibrantes."
    },
    {
        id: 8,
        nombre: "Rubor Natural Glow",
        categoria: "makeup",
        precio: 22.99,
        imagen: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        descripcion: "Rubor en polvo con acabado natural para un look fresco y luminoso."
    },

    // Hogar
    {
        id: 9,
        nombre: "Vela Aromática Lavanda",
        categoria: "home",
        precio: 18.99,
        imagen: "https://images.unsplash.com/photo-1602874801652-9c1b5de5cd3c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        descripcion: "Vela de cera de soja con aroma relajante de lavanda, 40 horas de duración."
    },
    {
        id: 10,
        nombre: "Difusor de Aceites Esenciales",
        categoria: "home",
        precio: 55.99,
        precioOriginal: 75.99,
        imagen: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        descripcion: "Difusor ultrasónico de aceites esenciales con luces LED y temporizador.",
        descuento: 26
    },
    {
        id: 11,
        nombre: "Set de Toallas Bambú",
        categoria: "home",
        precio: 42.99,
        imagen: "https://images.unsplash.com/photo-1631889993959-41b4e9c6e3c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        descripcion: "Set de 4 toallas de bambú ultra suaves, antibacterianas y ecológicas."
    },
    {
        id: 12,
        nombre: "Organizador de Baño",
        categoria: "home",
        precio: 28.99,
        imagen: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        descripcion: "Organizador de baño de bambú con múltiples compartimentos para cosméticos."
    }
];

// Estado de la aplicación
let carrito = [];
let filtroActual = 'all';

// Elementos del DOM
const productosGrid = document.getElementById('productos-grid');
const cartCount = document.getElementById('cart-count');
const cartItems = document.getElementById('cart-items');
const cartTotal = document.getElementById('cart-total');
const checkoutBtn = document.getElementById('checkout-btn');

// Inicialización cuando el DOM está listo
document.addEventListener('DOMContentLoaded', function() {
    cargarProductos();
    actualizarCarrito();
    initEventListeners();
    initScrollEffects();
});

// Event Listeners
function initEventListeners() {
    // Filtros de productos
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const filtro = this.getAttribute('data-filter');
            setFiltroActivo(this);
            filtrarProductos(filtro);
        });
    });

    // Enlaces de categorías
    document.querySelectorAll('[data-category]').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const categoria = this.getAttribute('data-category');
            filtrarPorCategoria(categoria);
        });
    });

    // Smooth scroll para navegación
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

    // Checkout button
    checkoutBtn.addEventListener('click', function() {
        if (carrito.length > 0) {
            alert('¡Gracias por tu compra! Redirigiendo al proceso de pago...');
            // Aquí podrías integrar con un sistema de pago real
        }
    });
}

// Efectos de scroll
function initScrollEffects() {
    // Navbar transparency on scroll
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 100) {
            navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
        } else {
            navbar.style.backgroundColor = 'rgba(255, 255, 255, 1)';
        }
    });

    // Highlight active nav link based on scroll position
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', function() {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            if (window.scrollY >= sectionTop) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

// Cargar y mostrar productos
function cargarProductos() {
    mostrarProductos(productos);
}

function mostrarProductos(productosArray) {
    productosGrid.innerHTML = '';
    
    if (productosArray.length === 0) {
        productosGrid.innerHTML = `
            <div class="col-12 text-center py-5">
                <i class="bi bi-search" style="font-size: 3rem; color: var(--text-muted);"></i>
                <p class="mt-3 text-muted">No se encontraron productos en esta categoría.</p>
            </div>
        `;
        return;
    }

    productosArray.forEach((producto, index) => {
        const productoCard = crearProductoCard(producto);
        productosGrid.appendChild(productoCard);
        
        // Añadir animación con delay
        setTimeout(() => {
            productoCard.classList.add('fade-in-up');
        }, index * 100);
    });
}

function crearProductoCard(producto) {
    const col = document.createElement('div');
    col.className = 'col-lg-3 col-md-4 col-sm-6';
    
    const descuentoHtml = producto.descuento ? 
        `<div class="discount-badge">-${producto.descuento}%</div>` : '';
    
    const precioOriginalHtml = producto.precioOriginal ? 
        `<span class="product-original-price me-2">$${producto.precioOriginal}</span>` : '';

    col.innerHTML = `
        <div class="card product-card h-100 position-relative">
            ${descuentoHtml}
            <img src="${producto.imagen}" class="card-img-top product-img" alt="${producto.nombre}">
            <div class="card-body d-flex flex-column">
                <h6 class="card-title fw-bold">${producto.nombre}</h6>
                <p class="card-text text-muted small flex-grow-1">${producto.descripcion}</p>
                <div class="d-flex justify-content-between align-items-center mt-auto">
                    <div>
                        ${precioOriginalHtml}
                        <span class="product-price">$${producto.precio}</span>
                    </div>
                    <button class="btn btn-outline-primary btn-sm" onclick="agregarAlCarrito(${producto.id})">
                        <i class="bi bi-cart-plus"></i>
                    </button>
                </div>
            </div>
        </div>
    `;
    
    return col;
}

// Filtros de productos
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

function filtrarProductos(filtro) {
    filtroActual = filtro;
    
    if (filtro === 'all') {
        mostrarProductos(productos);
    } else {
        const productosFiltrados = productos.filter(producto => producto.categoria === filtro);
        mostrarProductos(productosFiltrados);
    }
}

function filtrarPorCategoria(categoria) {
    // Scroll to productos section
    document.getElementById('productos').scrollIntoView({
        behavior: 'smooth'
    });
    
    // Set active filter
    setTimeout(() => {
        const filterBtn = document.querySelector(`[data-filter="${categoria}"]`);
        if (filterBtn) {
            setFiltroActivo(filterBtn);
            filtrarProductos(categoria);
        }
    }, 500);
}

// Funciones del carrito
function agregarAlCarrito(productoId) {
    const producto = productos.find(p => p.id === productoId);
    if (!producto) return;

    const itemExistente = carrito.find(item => item.id === productoId);
    
    if (itemExistente) {
        itemExistente.cantidad++;
    } else {
        carrito.push({
            ...producto,
            cantidad: 1
        });
    }
    
    actualizarCarrito();
    mostrarNotificacion(`${producto.nombre} agregado al carrito`);
}

function eliminarDelCarrito(productoId) {
    carrito = carrito.filter(item => item.id !== productoId);
    actualizarCarrito();
}

function cambiarCantidad(productoId, nuevaCantidad) {
    if (nuevaCantidad <= 0) {
        eliminarDelCarrito(productoId);
        return;
    }
    
    const item = carrito.find(item => item.id === productoId);
    if (item) {
        item.cantidad = nuevaCantidad;
        actualizarCarrito();
    }
}

function actualizarCarrito() {
    // Actualizar contador
    const totalItems = carrito.reduce((total, item) => total + item.cantidad, 0);
    cartCount.textContent = totalItems;
    cartCount.style.display = totalItems > 0 ? 'block' : 'none';
    
    // Actualizar contenido del carrito
    if (carrito.length === 0) {
        cartItems.innerHTML = `
            <div class="text-center py-5 text-muted">
                <i class="bi bi-cart-x" style="font-size: 3rem;"></i>
                <p class="mt-3">Tu carrito está vacío</p>
            </div>
        `;
        checkoutBtn.disabled = true;
    } else {
        cartItems.innerHTML = carrito.map(item => crearItemCarrito(item)).join('');
        checkoutBtn.disabled = false;
    }
    
    // Actualizar total
    const total = carrito.reduce((sum, item) => sum + (item.precio * item.cantidad), 0);
    cartTotal.textContent = total.toFixed(2);
}

function crearItemCarrito(item) {
    return `
        <div class="cart-item">
            <div class="row align-items-center">
                <div class="col-3">
                    <img src="${item.imagen}" alt="${item.nombre}" class="img-fluid">
                </div>
                <div class="col-5">
                    <h6 class="mb-1">${item.nombre}</h6>
                    <p class="text-muted small mb-0">$${item.precio} c/u</p>
                </div>
                <div class="col-2">
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
                <div class="col-2 text-end">
                    <div class="fw-bold">$${(item.precio * item.cantidad).toFixed(2)}</div>
                    <button class="btn btn-link text-danger p-0 small" onclick="eliminarDelCarrito(${item.id})">
                        <i class="bi bi-trash"></i> Eliminar
                    </button>
                </div>
            </div>
        </div>
    `;
}

// Función para mostrar notificaciones
function mostrarNotificacion(mensaje) {
    // Crear elemento de notificación
    const notification = document.createElement('div');
    notification.className = 'alert alert-success position-fixed';
    notification.style.cssText = `
        top: 100px;
        right: 20px;
        z-index: 9999;
        min-width: 300px;
        opacity: 0;
        transform: translateX(100%);
        transition: all 0.3s ease;
    `;
    notification.innerHTML = `
        <i class="bi bi-check-circle-fill me-2"></i>
        ${mensaje}
    `;
    
    document.body.appendChild(notification);
    
    // Animar entrada
    setTimeout(() => {
        notification.style.opacity = '1';
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Animar salida y remover
    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Función para búsqueda (opcional para expansión futura)
function buscarProductos(termino) {
    const resultados = productos.filter(producto => 
        producto.nombre.toLowerCase().includes(termino.toLowerCase()) ||
        producto.descripcion.toLowerCase().includes(termino.toLowerCase())
    );
    mostrarProductos(resultados);
}

// Función para ordenar productos (opcional para expansión futura)
function ordenarProductos(criterio) {
    let productosOrdenados = [...productos];
    
    switch (criterio) {
        case 'precio-asc':
            productosOrdenados.sort((a, b) => a.precio - b.precio);
            break;
        case 'precio-desc':
            productosOrdenados.sort((a, b) => b.precio - a.precio);
            break;
        case 'nombre':
            productosOrdenados.sort((a, b) => a.nombre.localeCompare(b.nombre));
            break;
    }
    
    mostrarProductos(productosOrdenados);
}

// Exportar funciones para uso global
window.agregarAlCarrito = agregarAlCarrito;
window.eliminarDelCarrito = eliminarDelCarrito;
window.cambiarCantidad = cambiarCantidad;