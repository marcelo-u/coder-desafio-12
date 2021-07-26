const socket = io();
const tableBody = document.querySelector("#product-tbody");

socket.on("list:products", (data) => {
  /**
   * en esta versión limpio el html y vuelvo a dibujar
   * todo el array de productos
   * TODO: enviar de a 1 elemento y tener en cuenta acá
   * el comportamiento al borrar y modificar.
   */
  tableBody.innerHTML = "";
  if (data.length) {
    data.forEach((prod, index) => {
      tableBody.innerHTML += `<tr>
          <td>${prod.id}</td>
          <td><strong>${prod.title}</strong></td>
          <td>${prod.price}</td>
          <td><img src="${prod.thumbnail}" width="30" /></td>
          </tr>`;
    });
  }
});
