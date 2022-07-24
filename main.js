const app = Vue.createApp({
    data: function() {
        return {
            product: 'Socks',
            description: 'I love socks',
            image: './assets/images/socks-green.png',
            //url: 'https://www.vuemastery.com/',
            inventory: 100,
            //onSale: true,
            details: ['50% cotton', '30% wool', '20% polyester'],
            //sizes: ['S', 'M', 'L', 'XL'],
            variants: [
                { id: 2234, color: 'Green'},
                { id: 2235, color: 'Blue'}
            ]
        }
    }
})
