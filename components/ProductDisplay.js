app.component('product-display', {
    props: {
        premium: {
            type: Boolean,
            required: true
        }
    },
    template:
    /*html*/  
    `<div class="product-display">
    <div class="product-container">
      <div class="product-image">
        <img v-bind:src="image">
      </div>

      <div class="product-info">
        <h1>{{ title }}</h1>
        <p>{{ description }}</p>
        <!--<a :href="url">Made by Vue</a>-->
        <p v-if="inStock">In Stock</p>
        <p v-else>Out of Stock</p>

        <p>Shipping: {{ shipping }}</p>

        <!--<p v-if="onSale">On Sale!</p>-->
        <!--<<p v-for="(size, index) in sizes" :key="index">{{ size }}</p>-->
        <ul>
          <li v-for="detail in details">{{ detail }}</li>
        </ul>

        <div v-for="(variant, index) in variants" :key="variant.id" 
        @mouseover="updateVariant(index)"
        class="color-circle"
        :style="{ backgroundColor: variant.color }"></div>

        <button 
        class="button"
        :class="{ disabledButton: !inStock }"
        :disabled="!inStock"
        @click="addToCart">
        Add to Cart</button>

        <button class="button" v-on:click="removeFromCart">Remove Item</button>
        
      </div>

    </div>
  </div>`,
  data() {
    return {
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
        },
        shipping() {
            if (this.premium) {
                return 'Free'
            }
            return 2.99
        }
    }
})

