document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling to sections
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Back to Top Button
    const backToTopButton = document.createElement('button');
    backToTopButton.innerText = '↑';
    backToTopButton.id = 'back-to-top';
    document.body.appendChild(backToTopButton);

    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Show/Hide Back to Top Button
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopButton.classList.add('visible');
        } else {
            backToTopButton.classList.remove('visible');
        }
    });
});


document.addEventListener('DOMContentLoaded', function() {
    // Existing code...

    // Contact Form Handling
    const contactForm = document.getElementById('contact-form');

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const formData = new FormData(contactForm);
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');

        if (name && email && message) {
            alert(`Thank you for your message, ${name}! We will get back to you at ${email} soon.`);
            contactForm.reset();
        } else {
            alert('Please fill out all fields.');
        }
    });
});


//  codes for search

document.addEventListener('DOMContentLoaded', function() {
    // Product Data
    const products = [
        {
            id: 1,
            name: 'Air Force',
            price: 30,
            category: 'Air Force',
            description: 'High quality Jordan for everyday use.',
            image: 'shoe1.jpg'
         },
        {
            id: 2,
            name: 'Jordan 11',
            price: 25,
            category: 'Jordan 11',
            description: 'Elegant Air Force for formal occasions.',
            image: 'shoe2.jpg'
        },
        {
            id: 3,
            name: 'Air Force',
            price: 35,
            category: 'Air Force',
            description: 'Comfortable Air Force for long distances.',
            image: 'shoe3.jpg'
        },
        {
            id: 3,
            name: 'Air Force',
            price: 35,
            category: 'Air Force',
            description: 'Comfortable Air Force for long distances.',
            image: 'shoe4.jpg'
        },
        {
            id: 3,
            name: 'Air Force',
            price: 35,
            category: 'running',
            description: 'Comfortable Air Force for long distances.',
            image: 'shoe3.jpg'
        },
        {
            id: 3,
            name: 'Air Force',
            price: 35,
            category: 'running',
            description: 'Comfortable Air Force for long distances.',
            image: 'shoe3.jpg'
        },
        {
            id: 3,
            name: 'Air Force',
            price: 35,
            category: 'running',
            description: 'Comfortable Air Force for long distances.',
            image: 'shoe3.jpg'
        },
        {
            id: 3,
            name: 'Air Force',
            price: 35,
            category: 'running',
            description: 'Comfortable Air Force for long distances.',
            image: 'shoe3.jpg'
        }
        // Add more products here
    ];

    const searchBar = document.getElementById('search-bar');
    const productGrid = document.getElementById('product-grid');
    const filterCategory = document.getElementById('filter-category');
    const filterPrice = document.getElementById('filter-price');

    function displayProducts(productsToDisplay) {
        productGrid.innerHTML = '';
        productsToDisplay.forEach(product => {
            const productCard = document.createElement('div');
            productCard.classList.add('product-card');
            productCard.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>$${product.price}</p>
                <button class="cta-button" data-id="${product.id}">View Details</button>
            `;
            productGrid.appendChild(productCard);
        });
    }
    displayProducts(products);
    function filterProducts() {
        let filteredProducts = products;

        const category = filterCategory.value;
        const price = filterPrice.value;

        if (category !== 'all') {
            filteredProducts = filteredProducts.filter(product => product.category === category);
        }

        if (price !== 'all') {
            if (price === 'under-100') {
                filteredProducts = filteredProducts.filter(product => product.price < 100);
            } else if (price === '100-200') {
                filteredProducts = filteredProducts.filter(product => product.price >= 100 && product.price <= 200);
            } else if (price === 'over-200') {
                filteredProducts = filteredProducts.filter(product => product.price > 200);
            }
        }

        displayProducts(filteredProducts);
    }
    filterCategory.addEventListener('change', filterProducts);
    filterPrice.addEventListener('change', filterProducts);

    function searchProducts() {
        const searchTerm = searchBar.value.toLowerCase();
        const filteredProducts = products.filter(product => 
            product.name.toLowerCase().includes(searchTerm) ||
            product.description.toLowerCase().includes(searchTerm)
        );

        displayProducts(filteredProducts);
    }

    searchBar.addEventListener('input', searchProducts);

    // Display all products initially
    displayProducts(products);

    // Modal Functionality
    const modal = document.getElementById('product-modal');
    const modalImg = document.getElementById('modal-img');
    const modalTitle = document.getElementById('modal-title');
    const modalDescription = document.getElementById('modal-description');
    const modalPrice = document.getElementById('modal-price');
    const closeModal = document.querySelector('.modal .close');

    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('cta-button')) {
            const productId = e.target.getAttribute('data-id');
            const product = products.find(p => p.id == productId);

            modalImg.src = product.image;
            modalTitle.textContent = product.name;
            modalDescription.textContent = product.description;
            modalPrice.textContent = `$${product.price}`;

            modal.style.display = 'block';
        }
    });

    closeModal.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
});

    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('cta-button')) {
            const productId = e.target.getAttribute('data-id');
            const product = products.find(p => p.id == productId);

            modalImg.src = product.image;
            modalTitle.textContent = product.name;
            modalDescription.textContent = product.description;
            modalPrice.textContent = `$${product.price}`;

            modal.style.display = 'none';
        }
    });

    closeModal.addEventListener('click', function() {
        modal.style.display = 'block';
    });

    window.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });

