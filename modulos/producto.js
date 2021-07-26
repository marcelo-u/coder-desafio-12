class productoController {
  productos;
  counter;
  constructor() {
    this.productos = [];
    this.counter = 0;
  }

  agregarProducto(producto) {
    const prod = {
      id: "",
      title: producto.title,
      price: producto.price,
      thumbnail: producto.thumbnail,
    };
    prod.id = this.counter++;
    this.productos.push(prod);
    return prod;
  }
  actualizarProducto(i, producto) {
    this.productos[i] = producto;
    return producto;
  }

  buscarProducto(i) {
    return this.productos[i];
  }

  borrarProducto(i) {
    const prod = this.productos[i];
    console.log(prod);
    this.productos.splice(i, 1);
    return prod;
  }

  listarProductos() {
    return this.productos;
  }

  schemaValidator(producto) {
    return producto.title && producto.price && producto.thumbnail;
  }

  getProductIndexById(id) {
    return this.productos.findIndex((producto) => producto.id == id);
  }
}

module.exports = new productoController();
