const app = Vue.createApp({
    data: function() {
        return {
            cart:0,
            product: 'Socks',
            description: 'I love socks',
            image: './assets/images/socks-green.png',
            //url: 'https://www.vuemastery.com/',
            inventory: 100,
            //onSale: true,
            details: ['50% cotton', '30% wool', '20% polyester'],
            //sizes: ['S', 'M', 'L', 'XL'],
            variants: [
                { id: 2234, color: 'Green', image:'./assets/images/socks-green.png'},
                { id: 2235, color: 'Blue', image:'./assets/images/socks-blue.png'}
            ]
        }
    },
    methods: {
        addToCart() {
            this.cart += 1
        },
        updateImage(variantImage) {
            this.image = variantImage
        },
        removeFromCart() {
            if (this.cart >= 1) {
                this.cart -= 1
            }
        }
    }
})
