var app = new Vue({
el: "#app",
data : {
    saludo: "Primera variable del data.",
    a: 100,
    b: 3,
    mensaje: "mensaje Inicial",
    contador: 0
},
methods: {
    // puede retornar, consolelog, etc.
    calculo(){
       return this.a * this.b;
    },
    sumarContador() {
        this.contador ++;
    },
    restarContador() {
        if (this.contador===0) {
            alert("Valor no puede ser menor a cero.");
        } else {
            this.contador --;
        }
    }
},
computed: {
    // debe RETORNAR si os i el valor.
    // NO puede recibir parámetros (usar methods si es necesario)
    // puede en su interior usar methods.
    duplicar() {
        return this.a*2;
    },
}
});