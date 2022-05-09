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


Vue.component('producto2', {
    data() {
        return {

        }
    },
    props: {
        id: {
            type: Number,
            required: true
        },
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
        },
        stock: {
            type: Number,
            required: true
        },
        addBtn: {
            type: Boolean
        }
    },
    template:
    `
    <tr v-bind:class="{ tdNoDisponible: !addBtn }">>
    <th scope="row">{{ id }}</th>
    <td>$ {{ price }}</td>
    <td><img :src="img" class="card-img-top imgTabla" :alt="name"></td>
    <td>{{ name }}</td>
    <td>{{ desc }}</td>
    <td>{{ stock }}</td>
    <td>
    <button v-if="addBtn" type="button" class="btn btn-success">Añadir</button>
    <p v-else="addBtn" class="noDisponible">No disponible</p>
    </td>
    </tr>
    `
})


var app = new Vue({
    el: "#app",
    data: {
        products: [
            {
                id: 1,
                name: 'Churu clásico unidad',
                price: 1500,
                desc: 'Clásico churu sabor atún.',
                img: './img/churu.jpg',
                stock: 2
            },
            {
                id: 2,
                name: 'Bravery 7kg.',
                price: 45000,
                desc: 'Alimento Bravery sabor salmón.',
                img: './img/bravery.jpg',
                stock: 0
            },
            {
                id: 3,
                name: 'Matisse 7kg.',
                price: 43200,
                desc: 'Alimento Mattise sabor salmón.',
                img: './img/mattise.jpg',
                stock: 3
            },
            {
                id: 4,
                name: 'Leonardo lata.',
                price: 3450,
                desc: 'Alimento humedo marca exclusiva.',
                img: './img/leonardo.jpg',
                stock: 7
            },
            {
                id: 5,
                name: 'Leonardo kitten.',
                price: 46200,
                desc: 'Leonardo kitten sabor inigualable.',
                img: './img/Leonardo_2.jpg',
                stock: 0
            },
            {
                id: 6,
                name: 'Proplan urinary.',
                price: 33600,
                desc: 'Para el cuidado de sus riñones.',
                img: './img/proplan_urinary.jpg',
                stock: 1
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
        <h1> Alimentos de gato a la venta</h1>
        <br>
        <table class="table">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">Precio</th>
                <th scope="col">Foto</th>
                <th scope="col">Nombre</th>
                <th scope="col">Descripción</th>
                <th scope="col">Stock</th>
                <th scope="col">Añadir</th>
                </tr>
            </thead>
            <tbody>
            <producto2 v-for="(item, i) in products"
                :key="i"
                :id="item.id"
                :name="item.name"
                :price="item.price"
                :desc="item.desc"
                :img="item.img"
                :stock="item.stock"
                :addBtn="item.stock > 0"
            />
            </tbody>
        </table>
        </div>
    `
})