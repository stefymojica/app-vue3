const app = Vue.createApp({
    data: function() {
        return {
            cart:0,
            product: 'Socks',
            description: 'I love socks',
            selectedVariant: 0,
            brand: 'Vue Mastery',
            //url: 'https://www.vuemastery.com/',
            //onSale: true,
            details: ['50% cotton', '30% wool', '20% polyester'],
            //sizes: ['S', 'M', 'L', 'XL'],
            variants: [
                { id: 2234, color: 'Green', image:'./assets/images/socks-green.png', quantity: 50},
                { id: 2235, color: 'Blue', image:'./assets/images/socks-blue.png', quantity: 0}
            ]
        }
    },
    methods: {
        addToCart() {
            this.cart += 1
        },
        updateVariant(index) {
            this.selectedVariant = index
        },
        removeFromCart() {
            if (this.cart >= 1) {
                this.cart -= 1
            }
        }
    },
    computed: {
        title() {
            return this.brand + ' ' + this.product
        },
        image() {
            return this.variants[this.selectedVariant].image
        },
        inStock() {
            return this.variants[this.selectedVariant].quantity
        }
    }
})
