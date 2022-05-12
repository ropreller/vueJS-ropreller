Vue.component('cat-product', {
    data() {
        return {

        }
    },
    props: {
        titles: {
            type: Array,
            required: true
        },
        products: {
            type: Array,
            required: true
        },
    },
    template:
    `
    <div>  
    <table class="table">
            <thead>
                <tr>
                    <th v-for="(item, i) in titles" :key="i" scope="col">{{ item }}</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, i) in products" :key="i">
                   <td>{{ item.id }}</td>
                   <td>{{ item.price }}</td>
                   <td><img :src="item.img" class="imgTabla" /></td>
                   <td>{{ item.name }}</td>
                   <td>{{ item.desc }}</td>
                   <td>{{ item.stock }}</td>
                   <td>
                   <button v-if="item.stock>0" type="button" class="btn btn-success">Añadir</button>
                   <p v-else class="noDisponible">No disponible</p>
                   </td>
                </tr>

            </tbody>
        </table>
    </div>
    `
})


var app = new Vue({
    el: "#app",
    data: {
        tableRender : {
            titles: ['ID','Precio','Foto','Nombre','Descripcion','Stock','Añadir'],
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
    },
})