let form = document.getElementById('formProduct');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  let carName = document.getElementById("carName").value;
  let carModel = document.getElementById("carModel").value;
  let carYear = document.getElementById("carYear").value;
  let productName = document.getElementById("productName").value;
  let productQuantity = document.getElementById("productQuantity").value;

  let productData = {
      Marca: carName,
      Modelo: carModel,
      Ano: carYear,
      Produto: productName,
      Quantidade: productQuantity
  }

  let products = JSON.stringify(productData);
  localStorage.setItem("productData", products);
  swal('Tudo certo', 'Cadastro realizado com sucesso!', 'success');

  document.getElementById("formProduct").reset();
})

  
