// Freddo’s App JavaScript

/* Data Definitions */
const menuData = {
    categories: [
        {
            id: 'freddos',
            name: { es: 'Freddos Frío/Ice Coffee', en: 'Freddos Cold/Ice Coffee' },
            items: [
                { id: 'freddo_espresso', name: { es: 'Freddo Espresso', en: 'Freddo Espresso' }, price: 3.5 },
                { id: 'freddo_cappuccino', name: { es: 'Freddo Cappuccino', en: 'Freddo Cappuccino' }, price: 4.5 },
                { id: 'ice_latte', name: { es: 'Ice Latte', en: 'Ice Latte' }, price: 4.5 },
                { id: 'ice_americano', name: { es: 'Ice Americano', en: 'Ice Americano' }, price: 4.5 },
                { id: 'tiramisu_iced', name: { es: 'Tiramisú', en: 'Tiramisu' }, price: 4.5 },
                { id: 'chocolate_iced', name: { es: 'Chocolate (frío)', en: 'Chocolate (cold)' }, price: 4.5 },
                { id: 'vainilla_iced', name: { es: 'Vainilla (frío)', en: 'Vanilla (cold)' }, price: 4.5 },
                { id: 'matcha_latte_iced', name: { es: 'Matcha Latte (frío)', en: 'Matcha Latte (iced)' }, price: 4.6 }
            ]
        },
        {
            id: 'frappes',
            name: { es: 'Frappés & Sirope', en: 'Frappes & Syrups' },
            items: [
                { id: 'frappe_cafe', name: { es: 'Frappé Café', en: 'Frappe Coffee' }, price: 4.6 },
                { id: 'frappe_yogurt', name: { es: 'Frappé Yogurt', en: 'Frappe Yogurt' }, price: 4.6 },
                { id: 'frappe_vainilla', name: { es: 'Frappé Vainilla', en: 'Frappe Vanilla' }, price: 4.6 },
                { id: 'frappe_caramelo', name: { es: 'Frappé Caramelo', en: 'Frappe Caramel' }, price: 4.6 },
                { id: 'frappe_mocha', name: { es: 'Frappé Mocha', en: 'Frappe Mocha' }, price: 4.6 },
                { id: 'frappe_chocolate', name: { es: 'Frappé Chocolate', en: 'Frappe Chocolate' }, price: 4.6 }
            ]
        },
        {
            id: 'cafes',
            name: { es: 'Cafés calientes', en: 'Hot Coffees' },
            items: [
                { id: 'espresso_single', name: { es: 'Espresso simple', en: 'Espresso single' }, price: 2.5 },
                { id: 'espresso_double', name: { es: 'Espresso doble', en: 'Espresso double' }, price: 3.2 },
                { id: 'macchiato_single', name: { es: 'Macchiato simple', en: 'Macchiato single' }, price: 2.8 },
                { id: 'macchiato_double', name: { es: 'Macchiato doble', en: 'Macchiato double' }, price: 3.5 },
                { id: 'latte_single', name: { es: 'Latte simple', en: 'Latte single' }, price: 3.2 },
                { id: 'latte_double', name: { es: 'Latte doble', en: 'Latte double' }, price: 3.9 },
                { id: 'cappuccino_single', name: { es: 'Cappuccino simple', en: 'Cappuccino single' }, price: 3.0 },
                { id: 'cappuccino_double', name: { es: 'Cappuccino doble', en: 'Cappuccino double' }, price: 4.0 },
                { id: 'chocolate_hot', name: { es: 'Chocolate caliente', en: 'Hot chocolate' }, price: 4.0 }
            ]
        },
        {
            id: 'bebidas',
            name: { es: 'Bebidas', en: 'Drinks' },
            items: [
                { id: 'agua', name: { es: 'Agua', en: 'Water' }, price: 1.2 },
                { id: 'agua_gas', name: { es: 'Agua con gas', en: 'Sparkling water' }, price: 2.0 },
                { id: 'zumos', name: { es: 'Zumos', en: 'Juices' }, price: 2.0 },
                { id: 'refrescos', name: { es: 'Refrescos', en: 'Soft drinks' }, price: 2.0 }
            ]
        },
        {
            id: 'snacks',
            name: { es: 'Snacks', en: 'Snacks' },
            items: [
                { id: 'bougatsa_sweet', name: { es: 'Bougatsa Sweet', en: 'Bougatsa Sweet' }, price: 1.5 },
                { id: 'tiropita_feta', name: { es: 'Tiropita Feta', en: 'Tiropita Feta' }, price: 1.8 },
                { id: 'cookie', name: { es: 'Cookie', en: 'Cookie' }, price: 3.0 },
                { id: 'muffin', name: { es: 'Muffin', en: 'Muffin' }, price: 3.5 }
            ]
        },
        {
            id: 'extras',
            name: { es: 'Extras', en: 'Extras' },
            items: [
                { id: 'cafe_brasil', name: { es: 'Café Brasil', en: 'Brazil Coffee' }, price: 0.5 },
                { id: 'shot_doble', name: { es: 'Shot doble', en: 'Double shot' }, price: 0.7 },
                { id: 'leche_vegetal', name: { es: 'Leche vegetal', en: 'Plant-based milk' }, price: 0.4 },
                { id: 'siropes', name: { es: 'Sirope', en: 'Syrup' }, price: 0.4 }
            ]
        }
    ]
};

// Translation strings
const translations = {
    es: {
        nav_home: 'Inicio',
        nav_menu: 'Menú',
        nav_club: 'Coffee Club',
        nav_profile: 'Perfil',
        nav_cart: 'Carrito',
        hero_welcome: 'Bienvenido a Freddo’s',
        // Actualizamos el texto de introducción para reflejar la filosofía Fika: un momento de
        // pausa y disfrute acompañado de una bebida y un dulce. Este texto aparece en la
        // página de inicio y anima al usuario a tomarse un descanso.
        hero_intro: 'Tómate un descanso y disfruta de nuestros cafés, frappés y snacks. Selecciona una categoría para empezar tu pedido.',
        button_start_order: 'Pedir ahora',
        categories_title: 'Categorías',
        category_freddos: 'Freddos Frío/Ice Coffee',
        category_cafes: 'Cafés calientes',
        category_frappes: 'Frappés & Sirope',
        category_bebidas: 'Bebidas',
        category_snacks: 'Snacks',
        category_extras: 'Extras',
        menu_title: 'Menú',
        cart_title: 'Carrito',
        button_continue_shopping: 'Seguir comprando',
        button_checkout: 'Pagar',
        checkout_title: 'Pagar',
        checkout_contact_title: 'Tus datos',
        checkout_name_label: 'Nombre',
        checkout_phone_label: 'Teléfono',
        checkout_email_label: 'Correo electrónico',
        checkout_pickup_label: 'Hora de recogida',
        button_pay_now: 'Pagar ahora',
        confirmation_title: 'Confirmación de pedido',
        button_back_home: 'Volver al inicio',
        club_title: 'Freddo’s Coffee Club',
        club_subscribe: 'Suscribirse por 9,99€/mes',
        club_unsubscribe: 'Cancelar suscripción',
        club_status_member: '¡Eres miembro!',
        club_status_non_member: 'No eres miembro todavía',
        club_benefits_title: 'Beneficios del Club',
        // El beneficio de precios sin recargo de 1€ se retira del listado
        // público; los precios siguen aplicándose automáticamente.
        club_benefit_beverage: '1 bebida gratis al mes',
        club_benefit_upgrades: '2 upgrades al mes (leche vegetal, siropes)',
        club_benefit_rewards: '10 cafés = 1 gratis',
        club_join_text: 'Únete a',
        club_level: 'Nivel',
        club_xp: 'Puntos XP',
        profile_title: 'Perfil',
        profile_membership: 'Suscripción',
        profile_orders: 'Pedidos realizados',
        profile_language: 'Idioma',
        level_bronze: 'Bronce',
        level_silver: 'Plata',
        level_gold: 'Oro',
        level_elite: 'Elite',
        pick_pickup_time_error: 'La hora de recogida debe ser al menos 20 minutos después.',
        form_validation_error: 'Por favor, completa todos los campos del formulario.',
        order_confirmation_message: '¡Gracias por tu pedido! Tu número de orden es',
        order_membership_summary: 'Tu progreso de Coffee Club:',
        order_level: 'Nivel',
        order_xp: 'XP total',
        profile_beverage_to_next: 'Cafés hasta la siguiente recompensa',
        cart_empty: 'El carrito está vacío.',
        profile_not_member: 'No eres miembro del Club aún',
        profile_member_since: 'Miembro desde',
        free_text: 'Gratis'
        , profile_progress_title: 'Progreso del Club'
        , profile_next_level: 'Próximo nivel'
        , profile_achievements_title: 'Logros y beneficios'
        , achievement_first_order: 'Primer pedido'
        , achievement_five_orders: '5 pedidos'
        , achievement_bronze_level: 'Nivel Bronce alcanzado'
        , achievement_silver_level: 'Nivel Plata alcanzado'
        , achievement_gold_level: 'Nivel Oro alcanzado'
        , achievement_elite_level: 'Nivel Elite alcanzado'
        , achievement_ten_orders: '10 cafés – Recompensa'
        // Desafíos: sección de retos para fomentar el consumo
        , profile_challenges_title: 'Desafíos'
        , challenge_three_orders: '3 cafés'
        , challenge_seven_orders: '7 cafés'
        , challenge_ten_orders: '10 cafés'
        , profile_unlockables_title: 'Desbloqueables'
        , unlockable_secret_recipe: 'Receta secreta del Club'
        , unlockable_vip_discount: 'Descuento VIP'
        , unlockable_elite_badge: 'Insignia Elite'
    },
    en: {
        nav_home: 'Home',
        nav_menu: 'Menu',
        nav_club: 'Coffee Club',
        nav_profile: 'Profile',
        nav_cart: 'Cart',
        hero_welcome: 'Welcome to Freddo’s',
        // Updated hero intro: invite users to take a break and enjoy Freddo’s without referencing Fika directly
        hero_intro: 'Take a break and enjoy our coffees, frappes and snacks. Select a category to start your order.',
        button_start_order: 'Order now',
        categories_title: 'Categories',
        category_freddos: 'Freddos Cold/Ice Coffee',
        category_cafes: 'Hot coffees',
        category_frappes: 'Frappes & Syrups',
        category_bebidas: 'Drinks',
        category_snacks: 'Snacks',
        category_extras: 'Extras',
        menu_title: 'Menu',
        cart_title: 'Cart',
        button_continue_shopping: 'Continue shopping',
        button_checkout: 'Checkout',
        checkout_title: 'Checkout',
        checkout_contact_title: 'Your details',
        checkout_name_label: 'Name',
        checkout_phone_label: 'Phone',
        checkout_email_label: 'Email',
        checkout_pickup_label: 'Pickup time',
        button_pay_now: 'Pay now',
        confirmation_title: 'Order confirmation',
        button_back_home: 'Back to home',
        club_title: 'Freddo’s Coffee Club',
        club_subscribe: 'Subscribe for €9.99/month',
        club_unsubscribe: 'Cancel subscription',
        club_status_member: 'You are a member!',
        club_status_non_member: 'You are not a member yet',
        club_benefits_title: 'Club benefits',
        // Removed: the "prices without €1 increase" benefit is no longer
        // displayed; price logic still applies automatically.
        club_benefit_beverage: '1 free drink per month',
        club_benefit_upgrades: '2 upgrades per month (plant milk, syrups)',
        club_benefit_rewards: '10 coffees = 1 free',
        club_join_text: 'Join',
        club_level: 'Level',
        club_xp: 'XP points',
        profile_title: 'Profile',
        profile_membership: 'Subscription',
        profile_orders: 'Orders placed',
        profile_language: 'Language',
        level_bronze: 'Bronze',
        level_silver: 'Silver',
        level_gold: 'Gold',
        level_elite: 'Elite',
        pick_pickup_time_error: 'Pickup time must be at least 20 minutes later.',
        form_validation_error: 'Please complete all form fields.',
        order_confirmation_message: 'Thank you for your order! Your order number is',
        order_membership_summary: 'Your Coffee Club progress:',
        order_level: 'Level',
        order_xp: 'Total XP',
        profile_beverage_to_next: 'Coffees until next reward',
        cart_empty: 'Your cart is empty.',
        profile_not_member: 'You are not yet a Club member',
        profile_member_since: 'Member since',
        free_text: 'Free'
        , profile_progress_title: 'Club progress'
        , profile_next_level: 'Next level'
        , profile_achievements_title: 'Achievements and benefits'
        , achievement_first_order: 'First order'
        , achievement_five_orders: '5 orders'
        , achievement_bronze_level: 'Bronze level reached'
        , achievement_silver_level: 'Silver level reached'
        , achievement_gold_level: 'Gold level reached'
        , achievement_elite_level: 'Elite level reached'
        , achievement_ten_orders: '10 coffees – Reward'
        // Challenges: section of goals to encourage consumption
        , profile_challenges_title: 'Challenges'
        , challenge_three_orders: '3 coffees'
        , challenge_seven_orders: '7 coffees'
        , challenge_ten_orders: '10 coffees'
        , profile_unlockables_title: 'Unlockables'
        , unlockable_secret_recipe: 'Secret club recipe'
        , unlockable_vip_discount: 'VIP discount'
        , unlockable_elite_badge: 'Elite badge'
    }
};

/* Membership thresholds and settings */
const membershipSettings = {
    price: 9.99,
    monthlyFreeDrinkValue: 3.5,
    upgradesPerMonth: 2,
    xpPerEuro: 10,
    levels: [
        { nameKey: 'level_bronze', minXp: 0, maxXp: 499 },
        { nameKey: 'level_silver', minXp: 500, maxXp: 999 },
        { nameKey: 'level_gold', minXp: 1000, maxXp: 1999 },
        { nameKey: 'level_elite', minXp: 2000, maxXp: Infinity }
    ]
};

/* Helper functions for language */
function getLanguage() {
    return localStorage.getItem('lang') || 'es';
}
function setLanguage(lang) {
    localStorage.setItem('lang', lang);
    translatePage();
}
function translatePage() {
    const lang = getLanguage();
    document.documentElement.lang = lang;
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        const translation = translations[lang][key];
        if (translation) {
            el.textContent = translation;
        }
    });
    // update placeholders if needed
    const inputs = document.querySelectorAll('input[placeholder-i18n]');
    inputs.forEach(input => {
        const key = input.getAttribute('placeholder-i18n');
        const translation = translations[lang][key];
        if (translation) {
            input.setAttribute('placeholder', translation);
        }
    });

    // Refresh dynamic content on certain pages after language change. For example,
    // the Coffee Club page has text generated in JavaScript (join text, benefits)
    // that needs to be rebuilt to reflect the new language selection.
    if (window.location.pathname.endsWith('coffee_club.html')) {
        loadClub();
    }
}

/* Membership operations */
function getMembership() {
    const data = localStorage.getItem('membership');
    if (data) return JSON.parse(data);
    return { active: false, xp: 0, level: 'level_bronze', joinDate: null, orders: 0 };
}
function setMembership(membership) {
    localStorage.setItem('membership', JSON.stringify(membership));
}
function calculateLevel(xp) {
    for (const level of membershipSettings.levels) {
        if (xp >= level.minXp && xp <= level.maxXp) {
            return level.nameKey;
        }
    }
    return membershipSettings.levels[0].nameKey;
}
function updateMembershipXp(amountEuros) {
    const membership = getMembership();
    const additionalXp = Math.round(amountEuros * membershipSettings.xpPerEuro);
    membership.xp += additionalXp;
    membership.level = calculateLevel(membership.xp);
    membership.orders += 1;
    setMembership(membership);
}
function toggleMembership() {
    const membership = getMembership();
    if (membership.active) {
        // cancel subscription
        membership.active = false;
        membership.joinDate = null;
    } else {
        membership.active = true;
        membership.joinDate = new Date().toISOString();
    }
    setMembership(membership);
    // reload page content if on club page
    if (window.location.pathname.endsWith('coffee_club.html')) {
        loadClub();
    }
    if (window.location.pathname.endsWith('profile.html')) {
        loadProfile();
    }
}

/**
 * Highlight the active navigation link based on the current page.
 * Compares the basename of the current location to each nav link's href.
 * Adds the `active` class to the matching link and removes it from others.
 */
function setActiveNav() {
    const navLinks = document.querySelectorAll('nav a');
    const currentPage = window.location.pathname.split('/').pop();
    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href');
        if (!linkPath) return;
        const linkPage = linkPath.split('/').pop();
        if (linkPage === currentPage) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

/* Cart operations */
function getCart() {
    const data = localStorage.getItem('cart');
    if (data) return JSON.parse(data);
    return [];
}
function setCart(cart) {
    localStorage.setItem('cart', JSON.stringify(cart));
}
function addToCart(itemId, extras = []) {
    const cart = getCart();
    cart.push({ id: itemId, extras });
    setCart(cart);
    alert(translations[getLanguage()].cart_title + ': ' + translations[getLanguage()].button_continue_shopping);
}
function removeFromCart(index) {
    const cart = getCart();
    cart.splice(index, 1);
    setCart(cart);
    loadCart();
}
function clearCart() {
    localStorage.removeItem('cart');
}

/* Price calculation */
function findItemById(itemId) {
    for (const category of menuData.categories) {
        const item = category.items.find(it => it.id === itemId);
        if (item) return { ...item, categoryId: category.id };
    }
    return null;
}
function findExtraById(extraId) {
    const extrasCategory = menuData.categories.find(cat => cat.id === 'extras');
    if (!extrasCategory) return null;
    return extrasCategory.items.find(it => it.id === extraId);
}
function computeItemPrice(itemId, extras = [], membershipActive) {
    const item = findItemById(itemId);
    if (!item) return 0;
    let price = item.price;
    // Determine the category of the current item so we can decide whether
    // to apply the non‑member surcharge.  Extras (shots, syrups, etc.)
    // always cost extra regardless of membership.
    const categoryId = item.categoryId;
    // Only apply the €1 surcharge to certain categories when the user is
    // not a member.  Drinks and snacks are exempt from the surcharge.
    const surchargeCategories = ['freddos', 'frappes', 'cafes'];
    if (!membershipActive && surchargeCategories.includes(categoryId)) {
        price += 1;
    }
    // Add the price of each selected extra
    for (const extraId of extras) {
        const extra = findExtraById(extraId);
        if (extra) {
            price += extra.price;
        }
    }
    return price;
}

/* Rendering functions */
function loadMenu() {
    const container = document.getElementById('menuContainer');
    if (!container) return;
    const lang = getLanguage();
    // Clear existing
    container.innerHTML = '';
    for (const category of menuData.categories) {
        // Skip extras category here
        if (category.id === 'extras') continue;
        const section = document.createElement('section');
        section.className = 'category-section';
        section.id = category.id;
        const heading = document.createElement('h2');
        heading.textContent = category.name[lang];
        section.appendChild(heading);
        const list = document.createElement('ul');
        list.className = 'item-list';
        for (const item of category.items) {
            const li = document.createElement('li');
            li.className = 'item';
            // Create separate spans for the name and the price so they can be styled
            // individually and aligned consistently across all items. Assign
            // semantic class names that are targeted in the CSS for fixed
            // column widths (see styles.css). The name span will flex to
            // take any remaining space, whereas the price and view button
            // have fixed widths for perfect vertical alignment.
            const nameSpan = document.createElement('span');
            nameSpan.className = 'item-name';
            nameSpan.textContent = item.name[lang];
            const priceSpan = document.createElement('span');
            priceSpan.className = 'item-price';
            // show membership and non-membership price
            const membership = getMembership();
            const priceMember = computeItemPrice(item.id, [], true).toFixed(2);
            const priceNon = computeItemPrice(item.id, [], false).toFixed(2);
            priceSpan.textContent = membership.active ? `${priceMember} €` : `${priceNon} €`;
            const button = document.createElement('button');
            button.className = 'btn-view';
            button.textContent = lang === 'es' ? 'Ver' : 'View';
            button.addEventListener('click', () => {
                window.location.href = `product.html?id=${item.id}`;
            });
            li.appendChild(nameSpan);
            li.appendChild(priceSpan);
            li.appendChild(button);
            list.appendChild(li);
        }
        section.appendChild(list);
        container.appendChild(section);
    }
}

function loadProduct() {
    const container = document.getElementById('productDetails');
    if (!container) return;
    const params = new URLSearchParams(window.location.search);
    const itemId = params.get('id');
    const item = findItemById(itemId);
    if (!item) {
        container.innerHTML = `<p>Producto no encontrado.</p>`;
        return;
    }
    const lang = getLanguage();
    const membership = getMembership();
    // Create content
    const title = document.createElement('h2');
    title.textContent = item.name[lang];
    const priceParagraph = document.createElement('p');
    const priceMember = computeItemPrice(item.id, [], true).toFixed(2);
    const priceNon = computeItemPrice(item.id, [], false).toFixed(2);
    priceParagraph.textContent = membership.active ? `${priceMember} €` : `${priceNon} €`;
    // Extras selection
    // Only show extras for allowed categories (freddos, frappes, cafes). Snacks and drinks do not get extras.
    let showExtras = false;
    // Determine the category of the current item
    const itemCategory = menuData.categories.find(cat => cat.items.some(i => i.id === item.id));
    const allowedCategories = ['freddos','frappes','cafes'];
    if (itemCategory && allowedCategories.includes(itemCategory.id)) {
        showExtras = true;
    }
    let extrasDiv = null;
    let extrasList = null;
    if (showExtras) {
        extrasDiv = document.createElement('div');
        extrasDiv.className = 'extras';
        const extrasHeading = document.createElement('h3');
        extrasHeading.textContent = lang === 'es' ? 'Extras' : 'Extras';
        extrasList = document.createElement('ul');
        extrasList.className = 'extras-list';
        const extrasCategory = menuData.categories.find(cat => cat.id === 'extras');
        for (const extra of extrasCategory.items) {
            const li = document.createElement('li');
            const label = document.createElement('label');
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.value = extra.id;
            label.appendChild(checkbox);
            label.appendChild(document.createTextNode(` ${extra.name[lang]} (+${extra.price.toFixed(2)} €)`));
            li.appendChild(label);
            extrasList.appendChild(li);
        }
        extrasDiv.appendChild(extrasHeading);
        extrasDiv.appendChild(extrasList);
    }
    // Add to cart button
    const addButton = document.createElement('button');
    addButton.className = 'btn-primary';
    addButton.textContent = lang === 'es' ? 'Añadir al carrito' : 'Add to cart';
    addButton.addEventListener('click', () => {
        const selectedExtras = [];
        extrasList.querySelectorAll('input:checked').forEach(input => {
            selectedExtras.push(input.value);
        });
        addToCart(item.id, selectedExtras);
        // redirect to cart
        window.location.href = 'cart.html';
    });
    container.innerHTML = '';
    container.appendChild(title);
    container.appendChild(priceParagraph);
    if (extrasDiv) {
        container.appendChild(extrasDiv);
    }
    container.appendChild(addButton);
}

function loadCart() {
    const container = document.getElementById('cartContainer');
    const summaryDiv = document.getElementById('cartSummary');
    if (!container || !summaryDiv) return;
    const cart = getCart();
    const lang = getLanguage();
    const membership = getMembership();
    container.innerHTML = '';
    summaryDiv.innerHTML = '';
    if (cart.length === 0) {
        container.innerHTML = `<p>${translations[lang].cart_empty}</p>`;
        return;
    }
    let total = 0;
    cart.forEach((itemObj, index) => {
        const item = findItemById(itemObj.id);
        const price = computeItemPrice(itemObj.id, itemObj.extras, membership.active);
        total += price;
        const div = document.createElement('div');
        div.className = 'cart-item';
        const nameSpan = document.createElement('span');
        nameSpan.textContent = item ? item.name[lang] : itemObj.id;
        const extrasSpan = document.createElement('span');
        if (itemObj.extras && itemObj.extras.length > 0) {
            const extrasNames = itemObj.extras.map(extraId => {
                const extra = findExtraById(extraId);
                return extra ? extra.name[lang] : extraId;
            });
            extrasSpan.textContent = ` + ${extrasNames.join(', ')}`;
        }
        const priceSpan = document.createElement('span');
        priceSpan.textContent = `${price.toFixed(2)} €`;
        const removeBtn = document.createElement('button');
        removeBtn.className = 'btn-secondary';
        removeBtn.textContent = 'X';
        removeBtn.addEventListener('click', () => removeFromCart(index));
        div.appendChild(nameSpan);
        div.appendChild(extrasSpan);
        div.appendChild(priceSpan);
        div.appendChild(removeBtn);
        container.appendChild(div);
    });
    // Summary
    const summaryList = document.createElement('ul');
    summaryList.className = 'profile-content';
    const totalItem = document.createElement('li');
    totalItem.textContent = `Total: ${total.toFixed(2)} €`;
    summaryList.appendChild(totalItem);
    // membership info
    const membershipInfo = document.createElement('li');
    if (membership.active) {
        membershipInfo.textContent = translations[lang].club_status_member;
    } else {
        membershipInfo.textContent = translations[lang].club_status_non_member;
    }
    summaryList.appendChild(membershipInfo);
    summaryDiv.appendChild(summaryList);
}

function loadCheckout() {
    const summaryDiv = document.getElementById('checkoutSummary');
    const form = document.getElementById('checkoutForm');
    if (!summaryDiv || !form) return;
    const cart = getCart();
    const lang = getLanguage();
    const membership = getMembership();
    summaryDiv.innerHTML = '';
    if (cart.length === 0) {
        summaryDiv.innerHTML = `<p>${translations[lang].cart_empty}</p>`;
        form.style.display = 'none';
        return;
    }
    let total = 0;
    const list = document.createElement('ul');
    list.className = 'profile-content';
    cart.forEach(itemObj => {
        const item = findItemById(itemObj.id);
        const price = computeItemPrice(itemObj.id, itemObj.extras, membership.active);
        total += price;
        const li = document.createElement('li');
        li.textContent = `${item ? item.name[lang] : itemObj.id} - ${price.toFixed(2)} €`;
        list.appendChild(li);
    });
    const totalLi = document.createElement('li');
    totalLi.textContent = `Total: ${total.toFixed(2)} €`;
    list.appendChild(totalLi);
    summaryDiv.appendChild(list);
    // Set minimum pickup time (current time + 20 min)
    const pickupInput = document.getElementById('pickupTime');
    const now = new Date();
    now.setMinutes(now.getMinutes() + 20);
    const iso = now.toISOString().slice(0, 16);
    pickupInput.min = iso;
    // Form submission
    form.onsubmit = (e) => {
        e.preventDefault();
        // validate form
        const name = form.name.value.trim();
        const phone = form.phone.value.trim();
        const email = form.email.value.trim();
        const pickupTime = form.pickupTime.value;
        if (!name || !phone || !email || !pickupTime) {
            alert(translations[lang].form_validation_error);
            return;
        }
        const pickupDate = new Date(pickupTime);
        const minDate = new Date();
        minDate.setMinutes(minDate.getMinutes() + 20);
        if (pickupDate < minDate) {
            alert(translations[lang].pick_pickup_time_error);
            return;
        }
        // finalize order
        finalizeOrder(name, phone, email, pickupTime, total);
    };
}

function finalizeOrder(name, phone, email, pickupTime, total) {
    // update membership XP
    updateMembershipXp(total);
    // store order details
    const order = {
        number: Math.floor(Math.random() * 1000000),
        items: getCart(),
        total: total,
        date: new Date().toISOString(),
        pickupTime,
        name,
        phone,
        email
    };
    localStorage.setItem('lastOrder', JSON.stringify(order));
    // clear cart
    clearCart();
    // redirect to confirmation
    window.location.href = 'confirmation.html';
}

function loadConfirmation() {
    const container = document.getElementById('confirmationDetails');
    if (!container) return;
    const lang = getLanguage();
    const orderData = localStorage.getItem('lastOrder');
    if (!orderData) {
        container.innerHTML = `<p>Pedido no encontrado.</p>`;
        return;
    }
    const order = JSON.parse(orderData);
    const membership = getMembership();
    const orderNumberP = document.createElement('p');
    orderNumberP.textContent = `${translations[lang].order_confirmation_message} #${order.number}`;
    const totalP = document.createElement('p');
    totalP.textContent = `Total: ${order.total.toFixed(2)} €`;
    const pickupP = document.createElement('p');
    const pickupDate = new Date(order.pickupTime);
    pickupP.textContent = `${lang === 'es' ? 'Recoger en' : 'Pickup at'}: ${pickupDate.toLocaleString(lang === 'es' ? 'es-ES' : 'en-US')}`;
    // membership summary
    const membershipDiv = document.createElement('div');
    const membershipTitle = document.createElement('h3');
    membershipTitle.textContent = translations[lang].order_membership_summary;
    const membershipLevelP = document.createElement('p');
    membershipLevelP.textContent = `${translations[lang].order_level}: ${translations[lang][membership.level]}`;
    const membershipXpP = document.createElement('p');
    membershipXpP.textContent = `${translations[lang].order_xp}: ${membership.xp}`;
    membershipDiv.appendChild(membershipTitle);
    membershipDiv.appendChild(membershipLevelP);
    membershipDiv.appendChild(membershipXpP);
    container.innerHTML = '';
    container.appendChild(orderNumberP);
    container.appendChild(totalP);
    container.appendChild(pickupP);
    container.appendChild(membershipDiv);
}

function loadClub() {
    const container = document.getElementById('clubContent');
    if (!container) return;
    const lang = getLanguage();
    const membership = getMembership();
    container.innerHTML = '';
    const statusP = document.createElement('p');
    statusP.className = 'club-status';
    statusP.textContent = membership.active ? translations[lang].club_status_member : translations[lang].club_status_non_member;
    container.appendChild(statusP);
    // Access the overlay element inside the hero.  If it exists, we
    // populate it with a call‑to‑action when the user is not a member.
    const overlay = document.getElementById('clubJoinOverlay');
    if (overlay) {
        // clear previous content
        overlay.innerHTML = '';
        if (!membership.active) {
            overlay.style.display = 'flex';
            // Title: join the club
            const titleDiv = document.createElement('div');
            titleDiv.className = 'overlay-title';
            titleDiv.textContent = `${translations[lang].club_join_text} Freddo’s Coffee Club`;
            overlay.appendChild(titleDiv);
            // Image showing the club design
            const img = document.createElement('img');
            img.src = 'assets/join_design.png';
            img.alt = 'Freddo’s Coffee Club';
            img.className = 'join-image';
            overlay.appendChild(img);
            // Price line using the subscription price translation
            const priceDiv = document.createElement('div');
            priceDiv.className = 'join-price';
            priceDiv.textContent = translations[lang].club_subscribe;
            overlay.appendChild(priceDiv);
            // Join button
            const joinBtn = document.createElement('button');
            joinBtn.className = 'join-button';
            // Use a succinct label for the button (subscribe)
            joinBtn.textContent = lang === 'es' ? 'Suscribirse' : 'Subscribe';
            joinBtn.addEventListener('click', () => {
                toggleMembership();
                // After subscribing, reload the page content to reflect changes
                loadClub();
            });
            overlay.appendChild(joinBtn);
        } else {
            // Hide overlay when membership is active
            overlay.style.display = 'none';
        }
    }
    // Subscription/cancellation button when user is a member.  For active
    // members, provide a button to cancel membership within the content area.
    if (membership.active) {
        const cancelBtn = document.createElement('button');
        cancelBtn.className = 'btn-primary cancel-subscription';
        cancelBtn.textContent = translations[lang].club_unsubscribe;
        cancelBtn.addEventListener('click', () => {
            toggleMembership();
            loadClub();
        });
        container.appendChild(cancelBtn);
    }
    // Show membership details if active
    // Benefits list: display icons alongside the benefit descriptions.  Each
    // benefit uses an emoji to symbolise the reward.  We avoid showing
    // pricing benefits publicly but still apply price discounts internally.
    // Prepare the benefits header and list but do not append them yet.  We will
    // insert these inside the club card body so that benefits appear
    // underneath the progress and unlockables, creating a cohesive card
    // similar to the mobile mock‑up.  If we appended them here, they would
    // appear before the progress circle, making the layout feel flat.
    const benefitsTitle = document.createElement('h3');
    benefitsTitle.textContent = translations[lang].club_benefits_title;
    const benefitsList = document.createElement('ul');
    benefitsList.className = 'club-benefits';
    const benefitItems = ['club_benefit_beverage', 'club_benefit_upgrades', 'club_benefit_rewards'];
    // Map each benefit to a Font Awesome icon.  These icons require
    // the Font Awesome stylesheet which is loaded in the HTML head.  If
    // Font Awesome fails to load, these fall back to plain emojis.
    const benefitIcons = {
        club_benefit_beverage: '<i class="fa-solid fa-mug-hot"></i>',
        club_benefit_upgrades: '<i class="fa-solid fa-star"></i>',
        club_benefit_rewards: '<i class="fa-solid fa-gift"></i>'
    };
    for (const b of benefitItems) {
        const li = document.createElement('li');
        const iconSpan = document.createElement('span');
        iconSpan.className = 'benefit-icon';
        // Use innerHTML for icons (Font Awesome) to allow HTML content.
        if (benefitIcons[b]) {
            iconSpan.innerHTML = benefitIcons[b];
        } else {
            iconSpan.textContent = '';
        }
        const textSpan = document.createElement('span');
        textSpan.className = 'benefit-text';
        textSpan.textContent = translations[lang][b];
        li.appendChild(iconSpan);
        li.appendChild(textSpan);
        benefitsList.appendChild(li);
    }
    // -----------------------------------------------------------------
    // Visual progress section inspired by Challenge 3 design
    // Determine current and next level to calculate progress within the current level
    const currentLevel = membershipSettings.levels.find(l => l.nameKey === membership.level);
    let nextLevel = membershipSettings.levels[membershipSettings.levels.length - 1];
    for (const lvl of membershipSettings.levels) {
        if (lvl.minXp > currentLevel.minXp) {
            nextLevel = lvl;
            break;
        }
    }
    const progressRange = nextLevel.maxXp - currentLevel.minXp;
    const progressValue = membership.xp - currentLevel.minXp;
    // Percentage progress toward next level (0–1).  If top level, the circle will be full.
    let percent = progressRange === Infinity ? 1 : (progressValue / progressRange);
    if (percent > 1) percent = 1;
    if (percent < 0) percent = 0;
    // Compute level index (starting at 1) for display (e.g. Nivel 2)
    const levelIndex = membershipSettings.levels.findIndex(l => l.nameKey === membership.level) + 1;
    // Points remaining until next level (or 0 if top level)
    const remainingPoints = progressRange === Infinity ? 0 : Math.max(0, nextLevel.minXp - membership.xp);
    // Build the card that will hold the level indicator, progress circle,
    // tasks, unlockables and benefits.  Using a card allows us to
    // replicate the dark‑header/light‑body split from the Challenge 3
    // mock‑up and keeps all related elements grouped together.
    const card = document.createElement('div');
    card.className = 'club-card';
    // Header section: shows the current level, progress circle and
    // remaining points.  It uses a dark background and light text.
    const headerDiv = document.createElement('div');
    headerDiv.className = 'club-card-header';
    const levelTitle = document.createElement('p');
    levelTitle.className = 'club-level-title';
    levelTitle.textContent = lang === 'es' ? `Nivel ${levelIndex}` : `Level ${levelIndex}`;
    headerDiv.appendChild(levelTitle);
    const circle = document.createElement('div');
    circle.className = 'club-progress-circle';
    circle.style.setProperty('--progress', percent);
    const valueSpan = document.createElement('span');
    valueSpan.className = 'circle-value';
    valueSpan.textContent = membership.xp;
    circle.appendChild(valueSpan);
    headerDiv.appendChild(circle);
    const remainingP = document.createElement('p');
    remainingP.className = 'club-progress-remaining';
    remainingP.textContent = `${remainingPoints} prs`;
    headerDiv.appendChild(remainingP);
    card.appendChild(headerDiv);
    // Body section of the card: tasks, unlockables and benefits.  This
    // portion uses the light background and dark text colours.
    const bodyDiv = document.createElement('div');
    bodyDiv.className = 'club-card-body';

    // Define two milestone tasks within the current level.  The first
    // represents the initial 25 XP and the second consumes the remainder
    // of the progress range.  When the user is at the final level (infinite
    // range) both bars display as full.
    const fastMax = 25;
    const fastValue = progressRange === Infinity ? fastMax : Math.min(progressValue, fastMax);
    const fikaMax = progressRange === Infinity ? 75 : Math.max(0, progressRange - fastMax);
    const fikaValue = progressRange === Infinity ? fikaMax : Math.max(0, progressValue - fastMax);
    const tasksContainer = document.createElement('div');
    tasksContainer.className = 'club-tasks';
    // Utility function to build a task row
    function buildTask(label, value, max) {
        const taskDiv = document.createElement('div');
        taskDiv.className = 'club-task';
        const header = document.createElement('div');
        header.className = 'task-header';
        const labelSpan = document.createElement('span');
        labelSpan.textContent = label;
        const valueSpan = document.createElement('span');
        valueSpan.textContent = value;
        header.appendChild(labelSpan);
        header.appendChild(valueSpan);
        taskDiv.appendChild(header);
        const barContainer = document.createElement('div');
        barContainer.className = 'task-progress-container';
        const bar = document.createElement('div');
        bar.className = 'task-progress-bar';
        const barPercent = max === 0 ? 1 : (value / max);
        // Ensure at least 2% visibility for bars when there is any progress
        let widthPercent = barPercent;
        if (barPercent > 1) widthPercent = 1;
        if (barPercent > 0 && barPercent < 0.02) widthPercent = 0.02;
        bar.style.width = `${widthPercent * 100}%`;
        barContainer.appendChild(bar);
        taskDiv.appendChild(barContainer);
        return taskDiv;
    }
    // Labels adapt to language
    const fastLabel = lang === 'es' ? 'Perido rápido' : 'Fast track';
    const fikaLabel = lang === 'es' ? 'Tiempo para Fika' : 'Fika time';
    // Append tasks
    tasksContainer.appendChild(buildTask(fastLabel, fastValue, fastMax));
    tasksContainer.appendChild(buildTask(fikaLabel, fikaValue, fikaMax));
    bodyDiv.appendChild(tasksContainer);

    // Unlockable achievements inspired by the mobile mock‑up.  Each item
    // includes an illustration and descriptive text.  Unlocking is
    // determined by XP milestones relative to the current level.  When
    // locked, items are faded; when unlocked, full opacity.
    const unlockablesDiv = document.createElement('div');
    unlockablesDiv.className = 'club-unlockables';
    // Define unlockable achievements with thresholds and assets.  Each
    // object stores per‑language titles and descriptions and uses an
    // existing asset from the assets folder.  The threshold is relative
    // to the current level’s starting XP.
    const unlockables = [
        {
            key: 'dulzura',
            title: lang === 'es' ? 'Semana de dulzura' : 'Sweetness week',
            desc: lang === 'es' ? 'Disfruta del aroma de la canela' : 'Enjoy the aroma of cinnamon',
            img: 'assets/category-snacks.png',
            threshold: 25
        },
        {
            key: 'bollos',
            title: lang === 'es' ? 'Bollos a go‑go' : 'Buns a go‑go',
            desc: lang === 'es' ? 'Desbloquea un nuevo icono' : 'Unlock new icon',
            img: 'assets/challenge2.png',
            threshold: 75
        }
    ];
    unlockables.forEach(item => {
        const unlocked = progressRange === Infinity ? true : (progressValue >= item.threshold);
        const itemDiv = document.createElement('div');
        itemDiv.className = 'unlockable-item';
        if (unlocked) {
            itemDiv.classList.add('unlockable-unlocked');
        } else {
            itemDiv.classList.add('unlockable-locked');
        }
        const img = document.createElement('img');
        img.src = item.img;
        img.alt = item.title;
        img.className = 'unlockable-image';
        itemDiv.appendChild(img);
        const textWrapper = document.createElement('div');
        textWrapper.className = 'unlockable-text';
        const titleP = document.createElement('p');
        titleP.className = 'unlockable-title';
        titleP.textContent = item.title;
        const descP = document.createElement('p');
        descP.className = 'unlockable-desc';
        descP.textContent = item.desc;
        textWrapper.appendChild(titleP);
        textWrapper.appendChild(descP);
        itemDiv.appendChild(textWrapper);
        unlockablesDiv.appendChild(itemDiv);
    });
    bodyDiv.appendChild(unlockablesDiv);

    // Append benefits into the body.  Benefits title and list were
    // created earlier.  Including them here places the benefits
    // information at the bottom of the card so it feels like part of
    // the same experience.
    bodyDiv.appendChild(benefitsTitle);
    bodyDiv.appendChild(benefitsList);

    card.appendChild(bodyDiv);
    // Finally append the card to the container.  The status and
    // subscription button appear above this card, preserving the
    // hierarchy seen in the design.
    container.appendChild(card);
}

function loadProfile() {
    const container = document.getElementById('profileContent');
    if (!container) return;
    const lang = getLanguage();
    const membership = getMembership();
    const ordersCount = membership.orders || 0;
    container.innerHTML = '';
    // List with basic details: membership status, orders count and language
    const list = document.createElement('ul');
    const liMembership = document.createElement('li');
    liMembership.textContent = `${translations[lang].profile_membership}: ${membership.active ? translations[lang].club_status_member : translations[lang].profile_not_member}`;
    const liOrders = document.createElement('li');
    liOrders.textContent = `${translations[lang].profile_orders}: ${ordersCount}`;
    const liLanguage = document.createElement('li');
    liLanguage.textContent = `${translations[lang].profile_language}: ${lang.toUpperCase()}`;
    list.appendChild(liMembership);
    list.appendChild(liOrders);
    list.appendChild(liLanguage);
    container.appendChild(list);

    // If the user is a member, show their level, XP and progress bar
    if (membership.active) {
        // Determine current and next level for progress
        const currentLvl = membershipSettings.levels.find(l => l.nameKey === membership.level);
        let nextLvl = membershipSettings.levels[membershipSettings.levels.length - 1];
        for (const lvl of membershipSettings.levels) {
            if (lvl.minXp > currentLvl.minXp) {
                nextLvl = lvl;
                break;
            }
        }
        const range = nextLvl.maxXp - currentLvl.minXp;
        const value = membership.xp - currentLvl.minXp;
        let percent = range === Infinity ? 1 : value / range;
        if (percent < 0.02) percent = 0.02;
        if (percent > 1) percent = 1;

        // Title
        const levelTitle = document.createElement('h3');
        levelTitle.textContent = `${translations[lang].profile_progress_title}`;
        container.appendChild(levelTitle);

        // Level and XP info
        const progressInfo = document.createElement('p');
        progressInfo.textContent = `${translations[lang].club_level}: ${translations[lang][membership.level]}  |  ${translations[lang].club_xp}: ${membership.xp}`;
        container.appendChild(progressInfo);

        // Progress bar
        const progContainer = document.createElement('div');
        progContainer.className = 'progress-container';
        const progBar = document.createElement('div');
        progBar.className = 'progress-bar';
        progBar.style.width = `${percent * 100}%`;
        progContainer.appendChild(progBar);
        container.appendChild(progContainer);

        // Next level info
        if (range !== Infinity) {
            const xpLeft = nextLvl.minXp - membership.xp;
            const nextLevelP = document.createElement('p');
            nextLevelP.textContent = `${translations[lang].profile_next_level}: ${translations[lang][nextLvl.nameKey]} (XP: ${membership.xp}/${nextLvl.minXp})`;
            container.appendChild(nextLevelP);
        }

        // Achievements and benefits section: show progress like a video game.
        const achievementsTitle = document.createElement('h3');
        achievementsTitle.textContent = translations[lang].profile_achievements_title;
        container.appendChild(achievementsTitle);
        const achievementsList = document.createElement('ul');
        achievementsList.className = 'achievements-list';
        // Define profile achievements with icons and conditions.  Each
        // achievement has a translation key and an icon from Font Awesome.
        const profileAchievements = [
            {
                key: 'achievement_first_order',
                icon: '<i class="fa-solid fa-coffee"></i>',
                unlocked: ordersCount >= 1
            },
            {
                key: 'achievement_five_orders',
                icon: '<i class="fa-solid fa-seedling"></i>',
                unlocked: ordersCount >= 5
            },
            {
                key: 'achievement_ten_orders',
                icon: '<i class="fa-solid fa-mug-hot"></i>',
                unlocked: ordersCount >= 10
            },
            {
                key: 'achievement_bronze_level',
                icon: '<i class="fa-solid fa-medal"></i>',
                unlocked: membership.level === 'level_bronze' || membership.level === 'level_silver' || membership.level === 'level_gold' || membership.level === 'level_elite'
            },
            {
                key: 'achievement_silver_level',
                icon: '<i class="fa-solid fa-award"></i>',
                unlocked: membership.level === 'level_silver' || membership.level === 'level_gold' || membership.level === 'level_elite'
            },
            {
                key: 'achievement_gold_level',
                icon: '<i class="fa-solid fa-trophy"></i>',
                unlocked: membership.level === 'level_gold' || membership.level === 'level_elite'
            },
            {
                key: 'achievement_elite_level',
                icon: '<i class="fa-solid fa-crown"></i>',
                unlocked: membership.level === 'level_elite'
            }
        ];
        profileAchievements.forEach(achievement => {
            const li = document.createElement('li');
            li.className = achievement.unlocked ? 'achievement-unlocked' : 'achievement-locked';
            // Icon
            const iconSpan = document.createElement('span');
            iconSpan.className = 'achievement-icon';
            iconSpan.innerHTML = achievement.icon;
            li.appendChild(iconSpan);
            // Text
            const textSpan = document.createElement('span');
            textSpan.className = 'achievement-text';
            textSpan.textContent = translations[lang][achievement.key];
            li.appendChild(textSpan);
            achievementsList.appendChild(li);
        });
        container.appendChild(achievementsList);

        // Challenges section: show tasks that unlock special badges when the user
        // reaches certain order counts. Each challenge uses a custom image icon
        // (stored in assets) instead of a font icon, and displays a progress bar.
        const challengesTitle = document.createElement('h3');
        challengesTitle.textContent = translations[lang].profile_challenges_title;
        container.appendChild(challengesTitle);
        const challengesList = document.createElement('ul');
        challengesList.className = 'challenges-list';
        // Define challenges: each challenge has a translation key, an order target
        // and an image path. The images reside in the assets directory and depict
        // cozy coffee scenes (coffee with cookies, pastries, hearts & swirls).
        const challenges = [
            {
                key: 'challenge_three_orders',
                target: 3,
                image: 'assets/challenge1.png'
            },
            {
                key: 'challenge_seven_orders',
                target: 7,
                image: 'assets/challenge2.png'
            },
            {
                key: 'challenge_ten_orders',
                target: 10,
                image: 'assets/challenge3.png'
            }
        ];
        challenges.forEach(challenge => {
            const li = document.createElement('li');
            const completed = ordersCount >= challenge.target;
            li.className = completed ? 'challenge-unlocked' : 'challenge-locked';
            // Image for the challenge
            const img = document.createElement('img');
            img.src = challenge.image;
            img.alt = translations[lang][challenge.key];
            img.className = 'challenge-image';
            li.appendChild(img);
            // Text label
            const textSpan = document.createElement('span');
            textSpan.className = 'challenge-text';
            textSpan.textContent = translations[lang][challenge.key];
            li.appendChild(textSpan);
            // Progress bar for the challenge
            const progressContainer = document.createElement('div');
            progressContainer.className = 'challenge-progress-container';
            const progressBar = document.createElement('div');
            progressBar.className = 'challenge-progress-bar';
            let percent2 = ordersCount / challenge.target;
            if (percent2 > 1) percent2 = 1;
            // Minimum width to visually represent progress when not started
            if (percent2 < 0.05) percent2 = 0.05;
            progressBar.style.width = `${percent2 * 100}%`;
            progressContainer.appendChild(progressBar);
            li.appendChild(progressContainer);
            challengesList.appendChild(li);
        });
        container.appendChild(challengesList);

        // Unlockables section: special features unlocked when reaching certain order counts.
        const unlockablesTitle = document.createElement('h3');
        unlockablesTitle.textContent = translations[lang].profile_unlockables_title;
        container.appendChild(unlockablesTitle);
        const unlockablesList = document.createElement('ul');
        unlockablesList.className = 'unlockables-list';
        const unlockables = [
            {
                key: 'unlockable_secret_recipe',
                target: 3,
                image: 'assets/challenge1.png'
            },
            {
                key: 'unlockable_vip_discount',
                target: 7,
                image: 'assets/challenge2.png'
            },
            {
                key: 'unlockable_elite_badge',
                target: 10,
                image: 'assets/challenge3.png'
            }
        ];
        unlockables.forEach(unlockable => {
            const li = document.createElement('li');
            const unlocked = ordersCount >= unlockable.target;
            li.className = unlocked ? 'unlockable-unlocked' : 'unlockable-locked';
            // Image representing the unlockable feature
            const img = document.createElement('img');
            img.src = unlockable.image;
            img.alt = translations[lang][unlockable.key];
            img.className = 'unlockable-image';
            li.appendChild(img);
            // Text label for the unlockable
            const text = document.createElement('span');
            text.className = 'unlockable-text';
            text.textContent = translations[lang][unlockable.key];
            li.appendChild(text);
            unlockablesList.appendChild(li);
        });
        container.appendChild(unlockablesList);
    }
}

/* Common initialization */
function initPage() {
    // init language select
    const langSelect = document.getElementById('languageSelect');
    if (langSelect) {
        langSelect.value = getLanguage();
        langSelect.addEventListener('change', (e) => {
            setLanguage(e.target.value);
        });
    }
    translatePage();
    // Highlight the active navigation link.  Determine current page
    // by comparing the path portion of the href to the current
    // pathname (basename).  This function adds the `active` class
    // appropriately.
    setActiveNav();
    // determine which page we are on
    const pathname = window.location.pathname;
    if (pathname.endsWith('menu.html')) {
        loadMenu();
    } else if (pathname.endsWith('product.html')) {
        loadProduct();
    } else if (pathname.endsWith('cart.html')) {
        loadCart();
    } else if (pathname.endsWith('checkout.html')) {
        loadCheckout();
    } else if (pathname.endsWith('confirmation.html')) {
        loadConfirmation();
    } else if (pathname.endsWith('coffee_club.html')) {
        loadClub();
    } else if (pathname.endsWith('profile.html')) {
        loadProfile();
    }
}
// Run init on DOM ready
document.addEventListener('DOMContentLoaded', initPage);