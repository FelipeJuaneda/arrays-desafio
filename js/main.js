class Producto{
    constructor(local, precio, espacio){
        this.local=local;
        this.precio=precio;
        this.espacio=espacio;
    }
    //metodos
    descuento(valor){
        this.precio = this.precio - valor;
    }
    mostrar(){
        return "El " + this.local + " cuesta " + this.precio + " pesos POR MES " + "y cuenta con un espacio de " + this.espacio;
    }
}

const productos= [];
productos.push(new Producto("Local 1", 5000,"3m x 4m"));
productos.push(new Producto("Local 2", 7000, "5,5m x 5m"));
productos.push(new Producto("Local 3", 8000, "6m x 6m"));
productos.push(new Producto("Local 4", 10000, "8 x 7m"));


for (const producto of productos) {
    alert("El " + producto.local + " cuesta " + producto.precio+ " pesos POR MES" + "\n"+ " Y cuenta con un espacio de " + producto.espacio)
}

