var app = new Vue({
    el: "#onion",
    data: {
        products: [
            {
                id: 1, title: "Yellow Onion", short_text: "Classic and Versatile Yellow Onion", image: 'img/onion2.png',
                desc: {
                    plant: {
                        p1: "Hardy plant with strong disease resistance.",
                        p2: "High yield and adaptable to various climates.",
                        p3: "Matures in 90-120 days after planting."
                    },
                    fruit: {
                        f1: "Golden-brown skin with white, pungent flesh.",
                        f2: "Rich in antioxidants and sulfur compounds.",
                        f3: "Average bulb size: 6-10 cm in diameter."
                    },
                    cycle: {c1: "Spring", c2: "Summer"},
                    color: "Yellow"
                }
            },
            {
                id: 2, title: "Red Onion", short_text: "Mild and Sweet Red Onion", image: 'img/onion1.png',
                desc: {
                    plant: {
                        p1: "Resistant to common onion diseases.",
                        p2: "Perfect for fresh consumption and storage.",
                        p3: "Matures in 100-130 days after planting."
                    },
                    fruit: {
                        f1: "Deep red skin with mild, slightly sweet flavor.",
                        f2: "High in flavonoids and vitamin C.",
                        f3: "Average bulb size: 7-12 cm in diameter."
                    },
                    cycle: {c1: "Summer", c2: "Autumn"},
                    color: "Red"
                }
            },
            {
                id: 3, title: "Shallot", short_text: "Delicate and Aromatic Shallot", image: 'img/onion3.png',
                desc: {
                    plant: {
                        p1: "Compact plant ideal for dense planting.",
                        p2: "Highly productive with excellent disease resistance.",
                        p3: "Matures in 90-110 days."
                    },
                    fruit: {
                        f1: "Small bulbs with a rich, mild onion-garlic flavor.",
                        f2: "Great for gourmet cooking and salads.",
                        f3: "Average bulb size: 4-7 cm in diameter."
                    },
                    cycle: {c1: "Spring", c2: "Summer"},
                    color: "Pink"
                }
            },
            {
                id: 4, title: "White Onion", short_text: "Crisp and Mild White Onion", image: 'img/onion4.png',
                desc: {
                    plant: {
                        p1: "Drought-resistant and easy to grow.",
                        p2: "Produces uniform and firm bulbs.",
                        p3: "Matures in 100-120 days."
                    },
                    fruit: {
                        f1: "Smooth white skin with a clean, sharp taste.",
                        f2: "Perfect for fresh dishes and salsas.",
                        f3: "Average bulb size: 6-9 cm in diameter."
                    },
                    cycle: {c1: "Spring", c2: "Autumn"},
                    color: "White"
                }
            },
            {
                id: 5, title: "White Onion Premium", short_text: "High-Quality White Onion with Exceptional Flavor", image: 'img/onion5.png',
                desc: {
                    plant: {
                        p1: "Medium-sized plant with excellent disease resistance.",
                        p2: "Produces large, high-quality bulbs.",
                        p3: "Matures in 100-130 days."
                    },
                    fruit: {
                        f1: "Classic white skin with a balanced mild taste.",
                        f2: "Excellent for fresh eating and cooking.",
                        f3: "Average bulb size: 7-10 cm in diameter."
                    },
                    cycle: {c1: "Spring", c2: "Winter"},
                    color: "White"
                }
            }
        ],
        product: [],
        cart: [],
        contactFields: [{
            name: "",
            companyName: "",
            position: "",
            city: "",
            country: "",
            telephone: "",
            email: "",
            youAre: "",
            otherSpecify: "",
            interested: "",
            capcha: ""
        }],
        btnVisible: 0,
        cartVisible: 0,
        formSubmitted: false,
        formVisible: 1
    },
    mounted: function () {
        this.getProduct();
        this.checkInCart();
        this.getCart();
    },
    methods: {
        getProduct: function () {
            if (window.location.hash) {
                var id = window.location.hash.replace('#', '');
                if (this.products && this.products.length > 0) {
                    for (i in this.products) {
                        if (this.products[i] && this.products[i].id && id == this.products[i].id) this.product = this.products[i];
                    }
                }
            }
        },
        checkInCart: function () {
            console.log("Checking if product is in cart");
        },
        getCart: function () {
            console.log("Fetching cart data");
        }
    }
});