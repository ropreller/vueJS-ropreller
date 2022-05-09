// Debe tener la propiedad "template" en el parámetro objeto -> important!
Vue.component('primer-comp', {
    // Data, como función, debe retornar valores dentro de un objeto:
    data() {
        return {
            contador: 0
        }
    },
    template:
        `<div>
    <h3>Contador para clase <button @click="sumarContador()" type="button" class="btn btn-success">+</button>
    <span class="badge bg-secondary" v-text="contador"></span> <button @click="restarContador()"
    type="button" class="btn btn-danger">-</button></h3>
    </div>`,
    methods: {
        sumarContador() {
            this.contador++;
        },
        restarContador() {
            if (this.contador === 0) {
                alert("Valor no puede ser menor a cero.");
            } else {
                this.contador--;
            }
        }
    }
})

Vue.component('producto', {
    data() {
        return {

        }
    },
    props: {
        name: {
            type: String,
            required: true
        },
        price : {
            type: Number,
            required: true
        },
        desc: {
            type: String,
            required: true
        },
        img: {
            type: String,
            required: true
        }
    },
    template:
    `
    <div class="productContent">
        <div class="card" style="width: 18rem;">
            <img :src="img" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">{{ name }}</h5>
                <h3 class="card-title">$ {{ price }}</h3>
                <p class="card-text">{{ desc }}</p>
                <a href="#" class="btn btn-primary">Ver</a>
            </div>
        </div>
    </div>
    `
})

ppp

var app = new Vue({
    el: "#app",
    data: {
        products: [
            {
                name: 'Churu clásico unidad',
                price: 1500,
                desc: 'Clásico churu sabor atún.',
                img: './img/churu.jpg'
            },
            {
                name: 'Bravery 7kg.',
                price: 45000,
                desc: 'Alimento Bravery sabor salmón.',
                img: './img/bravery.jpg'
            },
            {
                name: 'Matisse 7kg.',
                price: 43200,
                desc: 'Alimento Mattise sabor salmón.',
                img: './img/mattise.jpg'
            }
        ]
    },
    methods: {
        // puede retornar, consolelog, etc.
    },
    computed: {
        // debe RETORNAR si os i el valor.
        // NO puede recibir parámetros (usar methods si es necesario)
        // puede en su interior usar methods.
    },
    template: // Puede almacenar otros componentes
        `
        <div>
        <h1> Elemento tomado desde template #app</h1>
        <br>
        <primer-comp />
        <producto v-for="(item, i) in products" :key="i"
            :name="item.name"
            :price="item.price"
            :desc="item.desc"
            :img="item.img"
        />
        </div>
    `
})