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
            id: 4,
            name: 'Air Force',
            price: 35,
            category: 'Air Force',
            description: 'Comfortable Air Force for long distances.',
            image: 'shoe4.jpg'
        },
        {
            id: 3,
            name: 'Air Force',
            price: 30,
            category: 'running',
            description: 'Comfortable Air Force for long distances.',
            image: 'shoe5.jpg'
        },
        {
            id: 3,
            name: 'Air Force',
            price: 35,
            category: 'running',
            description: 'Comfortable Air Force for long distances.',
            image: 'shoe6.jpg'
        },
        {
            id: 3,
            name: 'Air Force',
            price: 35,
            category: 'running',
            description: 'Comfortable Air Force for long distances.',
            image: 'shoe7.jpg'
        },
        {
            id: 3,
            name: 'Air Force',
            price: 35,
            category: 'running',
            description: 'Comfortable Air Force for long distances.',
            image: 'shoe8.jpg'
        },
        {
            id: 3,
            name: 'Air Force',
            price: 35,
            category: 'running',
            description: 'Comfortable Air Force for long distances.',
            image: 'shoe9.jpg'
        },
        {
            id: 3,
            name: 'Air Force',
            price: 35,
            category: 'running',
            description: 'Comfortable Air Force for long distances.',
            image: 'shoe10.jpg'
        },
        {
            id: 3,
            name: 'Air Force',
            price: 35,
            category: 'running',
            description: 'Comfortable Air Force for long distances.',
            image: 'shoe11.jpg'
        },
        {
            id: 3,
            name: 'Air Force',
            price: 35,
            category: 'running',
            description: 'Comfortable Air Force for long distances.',
            image: 'shoe12.jpg'
        },
        {
            id: 3,
            name: 'Air Force',
            price: 35,
            category: 'running',
            description: 'Comfortable Air Force for long distances.',
            image: 'shoe13.jpg'
        },
        {
            id: 3,
            name: 'Air Force',
            price: 35,
            category: 'running',
            description: 'Comfortable Air Force for long distances.',
            image: 'shoe14.jpg'
        },
        {
            id: 3,
            name: 'Air Force',
            price: 35,
            category: 'running',
            description: 'Comfortable Air Force for long distances.',
            image: 'shoe15.jpg'
        },
        {
            id: 3,
            name: 'Air Force',
            price: 35,
            category: 'running',
            description: 'Comfortable Air Force for long distances.',
            image: 'shoe16.jpg'
        },
        {
            id: 3,
            name: 'Air Force',
            price: 35,
            category: 'running',
            description: 'Comfortable Air Force for long distances.',
            image: 'shoe17.jpg'
        },
        {
            id: 3,
            name: 'Air Force',
            price: 35,
            category: 'running',
            description: 'Comfortable Air Force for long distances.',
            image: 'shoe18.jpg'
        },
        {
            id: 3,
            name: 'Air Force',
            price: 35,
            category: 'running',
            description: 'Comfortable Air Force for long distances.',
            image: 'shoe19.jpg'
        },
        {
            id: 3,
            name: 'Air Force',
            price: 35,
            category: 'running',
            description: 'Comfortable Air Force for long distances.',
            image: 'shoe20.jpg'
        },
        {
            id: 3,
            name: 'Air Force',
            price: 35,
            category: 'running',
            description: 'Comfortable Air Force for long distances.',
            image: 'shoe21.jpg'
        },
        {
            id: 3,
            name: 'Air Force',
            price: 35,
            category: 'running',
            description: 'Comfortable Air Force for long distances.',
            image: 'shoe22.jpg'
        },

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
            id: 4,
            name: 'Air Force',
            price: 35,
            category: 'Air Force',
            description: 'Comfortable Air Force for long distances.',
            image: 'shoe4.jpg'
        },
        {
            id: 3,
            name: 'Air Force',
            price: 30,
            category: 'running',
            description: 'Comfortable Air Force for long distances.',
            image: 'shoe5.jpg'
        },
        {
            id: 3,
            name: 'Air Force',
            price: 35,
            category: 'running',
            description: 'Comfortable Air Force for long distances.',
            image: 'shoe6.jpg'
        },
        {
            id: 3,
            name: 'Air Force',
            price: 35,
            category: 'running',
            description: 'Comfortable Air Force for long distances.',
            image: 'shoe7.jpg'
        },
        {
            id: 3,
            name: 'Air Force',
            price: 35,
            category: 'running',
            description: 'Comfortable Air Force for long distances.',
            image: 'shoe8.jpg'
        },
        {
            id: 3,
            name: 'Air Force',
            price: 35,
            category: 'running',
            description: 'Comfortable Air Force for long distances.',
            image: 'shoe9.jpg'
        },
        {
            id: 3,
            name: 'Air Force',
            price: 35,
            category: 'running',
            description: 'Comfortable Air Force for long distances.',
            image: 'shoe10.jpg'
        },
        {
            id: 3,
            name: 'Air Force',
            price: 35,
            category: 'running',
            description: 'Comfortable Air Force for long distances.',
            image: 'shoe11.jpg'
        },
        {
            id: 3,
            name: 'Air Force',
            price: 35,
            category: 'running',
            description: 'Comfortable Air Force for long distances.',
            image: 'shoe12.jpg'
        },
        {
            id: 3,
            name: 'Air Force',
            price: 35,
            category: 'running',
            description: 'Comfortable Air Force for long distances.',
            image: 'shoe13.jpg'
        },
        {
            id: 3,
            name: 'Air Force',
            price: 35,
            category: 'running',
            description: 'Comfortable Air Force for long distances.',
            image: 'shoe14.jpg'
        },
        {
            id: 3,
            name: 'Air Force',
            price: 35,
            category: 'running',
            description: 'Comfortable Air Force for long distances.',
            image: 'shoe15.jpg'
        },
        {
            id: 3,
            name: 'Air Force',
            price: 35,
            category: 'running',
            description: 'Comfortable Air Force for long distances.',
            image: 'shoe16.jpg'
        },
        {
            id: 3,
            name: 'Air Force',
            price: 35,
            category: 'running',
            description: 'Comfortable Air Force for long distances.',
            image: 'shoe17.jpg'
        },
        {
            id: 3,
            name: 'Air Force',
            price: 35,
            category: 'running',
            description: 'Comfortable Air Force for long distances.',
            image: 'shoe18.jpg'
        },
        {
            id: 3,
            name: 'Air Force',
            price: 35,
            category: 'running',
            description: 'Comfortable Air Force for long distances.',
            image: 'shoe19.jpg'
        },
        {
            id: 3,
            name: 'Air Force',
            price: 35,
            category: 'running',
            description: 'Comfortable Air Force for long distances.',
            image: 'shoe20.jpg'
        },
        {
            id: 3,
            name: 'Air Force',
            price: 35,
            category: 'running',
            description: 'Comfortable Air Force for long distances.',
            image: 'shoe21.jpg'
        },
        {
            id: 3,
            name: 'Air Force',
            price: 35,
            category: 'running',
            description: 'Comfortable Air Force for long distances.',
            image: 'shoe22.jpg'
        },
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
            id: 4,
            name: 'Air Force',
            price: 35,
            category: 'Air Force',
            description: 'Comfortable Air Force for long distances.',
            image: 'shoe4.jpg'
        },
        {
            id: 3,
            name: 'Air Force',
            price: 30,
            category: 'running',
            description: 'Comfortable Air Force for long distances.',
            image: 'shoe5.jpg'
        },
        {
            id: 3,
            name: 'Air Force',
            price: 35,
            category: 'running',
            description: 'Comfortable Air Force for long distances.',
            image: 'shoe6.jpg'
        },
        {
            id: 3,
            name: 'Air Force',
            price: 35,
            category: 'running',
            description: 'Comfortable Air Force for long distances.',
            image: 'shoe7.jpg'
        },
        {
            id: 3,
            name: 'Air Force',
            price: 35,
            category: 'running',
            description: 'Comfortable Air Force for long distances.',
            image: 'shoe8.jpg'
        },
        {
            id: 3,
            name: 'Air Force',
            price: 35,
            category: 'running',
            description: 'Comfortable Air Force for long distances.',
            image: 'shoe9.jpg'
        },
        {
            id: 3,
            name: 'Air Force',
            price: 35,
            category: 'running',
            description: 'Comfortable Air Force for long distances.',
            image: 'shoe10.jpg'
        },
        {
            id: 3,
            name: 'Air Force',
            price: 35,
            category: 'running',
            description: 'Comfortable Air Force for long distances.',
            image: 'shoe11.jpg'
        },
        {
            id: 3,
            name: 'Air Force',
            price: 35,
            category: 'running',
            description: 'Comfortable Air Force for long distances.',
            image: 'shoe12.jpg'
        },
        {
            id: 3,
            name: 'Air Force',
            price: 35,
            category: 'running',
            description: 'Comfortable Air Force for long distances.',
            image: 'shoe13.jpg'
        },
        {
            id: 3,
            name: 'Air Force',
            price: 35,
            category: 'running',
            description: 'Comfortable Air Force for long distances.',
            image: 'shoe14.jpg'
        },
        {
            id: 3,
            name: 'Air Force',
            price: 35,
            category: 'running',
            description: 'Comfortable Air Force for long distances.',
            image: 'shoe15.jpg'
        },
        {
            id: 3,
            name: 'Air Force',
            price: 35,
            category: 'running',
            description: 'Comfortable Air Force for long distances.',
            image: 'shoe16.jpg'
        },
        {
            id: 3,
            name: 'Air Force',
            price: 35,
            category: 'running',
            description: 'Comfortable Air Force for long distances.',
            image: 'shoe17.jpg'
        },
        {
            id: 3,
            name: 'Air Force',
            price: 35,
            category: 'running',
            description: 'Comfortable Air Force for long distances.',
            image: 'shoe18.jpg'
        },
        {
            id: 3,
            name: 'Air Force',
            price: 35,
            category: 'running',
            description: 'Comfortable Air Force for long distances.',
            image: 'shoe19.jpg'
        },
        {
            id: 3,
            name: 'Air Force',
            price: 35,
            category: 'running',
            description: 'Comfortable Air Force for long distances.',
            image: 'shoe20.jpg'
        },
        {
            id: 3,
            name: 'Air Force',
            price: 35,
            category: 'running',
            description: 'Comfortable Air Force for long distances.',
            image: 'shoe21.jpg'
        },
        {
            id: 3,
            name: 'Air Force',
            price: 35,
            category: 'running',
            description: 'Comfortable Air Force for long distances.',
            image: 'shoe22.jpg'
        },
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
            id: 4,
            name: 'Air Force',
            price: 35,
            category: 'Air Force',
            description: 'Comfortable Air Force for long distances.',
            image: 'shoe4.jpg'
        },
        {
            id: 3,
            name: 'Air Force',
            price: 30,
            category: 'running',
            description: 'Comfortable Air Force for long distances.',
            image: 'shoe5.jpg'
        },
        {
            id: 3,
            name: 'Air Force',
            price: 35,
            category: 'running',
            description: 'Comfortable Air Force for long distances.',
            image: 'shoe6.jpg'
        },
        {
            id: 3,
            name: 'Air Force',
            price: 35,
            category: 'running',
            description: 'Comfortable Air Force for long distances.',
            image: 'shoe7.jpg'
        },
        {
            id: 3,
            name: 'Air Force',
            price: 35,
            category: 'running',
            description: 'Comfortable Air Force for long distances.',
            image: 'shoe8.jpg'
        },
        {
            id: 3,
            name: 'Air Force',
            price: 35,
            category: 'running',
            description: 'Comfortable Air Force for long distances.',
            image: 'shoe9.jpg'
        },
        {
            id: 3,
            name: 'Air Force',
            price: 35,
            category: 'running',
            description: 'Comfortable Air Force for long distances.',
            image: 'shoe10.jpg'
        },
        {
            id: 3,
            name: 'Air Force',
            price: 35,
            category: 'running',
            description: 'Comfortable Air Force for long distances.',
            image: 'shoe11.jpg'
        },
        {
            id: 3,
            name: 'Air Force',
            price: 35,
            category: 'running',
            description: 'Comfortable Air Force for long distances.',
            image: 'shoe12.jpg'
        },
        {
            id: 3,
            name: 'Air Force',
            price: 35,
            category: 'running',
            description: 'Comfortable Air Force for long distances.',
            image: 'shoe13.jpg'
        },
        {
            id: 3,
            name: 'Air Force',
            price: 35,
            category: 'running',
            description: 'Comfortable Air Force for long distances.',
            image: 'shoe14.jpg'
        },
        {
            id: 3,
            name: 'Air Force',
            price: 35,
            category: 'running',
            description: 'Comfortable Air Force for long distances.',
            image: 'shoe15.jpg'
        },
        {
            id: 3,
            name: 'Air Force',
            price: 35,
            category: 'running',
            description: 'Comfortable Air Force for long distances.',
            image: 'shoe16.jpg'
        },
        {
            id: 3,
            name: 'Air Force',
            price: 35,
            category: 'running',
            description: 'Comfortable Air Force for long distances.',
            image: 'shoe17.jpg'
        },
        {
            id: 3,
            name: 'Air Force',
            price: 35,
            category: 'running',
            description: 'Comfortable Air Force for long distances.',
            image: 'shoe18.jpg'
        },
        {
            id: 3,
            name: 'Air Force',
            price: 35,
            category: 'running',
            description: 'Comfortable Air Force for long distances.',
            image: 'shoe19.jpg'
        },
        {
            id: 3,
            name: 'Air Force',
            price: 35,
            category: 'running',
            description: 'Comfortable Air Force for long distances.',
            image: 'shoe20.jpg'
        },
        {
            id: 3,
            name: 'Air Force',
            price: 35,
            category: 'running',
            description: 'Comfortable Air Force for long distances.',
            image: 'shoe21.jpg'
        },
        {
            id: 3,
            name: 'Air Force',
            price: 35,
            category: 'running',
            description: 'Comfortable Air Force for long distances.',
            image: 'shoe22.jpg'
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
        },
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
