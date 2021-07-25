let form = document.getElementById('formClient');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  
  let clientName = document.getElementById("clientName").value;
  let clientEmail = document.getElementById("clientEmail").value;
  let clientPhone = document.getElementById("clientPhone").value;
  let clientCpf = document.getElementById("clientCpf").value;
  let brandCard = document.getElementById("brandCar").value;
  let modelCar = document.getElementById("modelCar").value;
  let yearCar = document.getElementById("yearCar").value;

  let clientData = {
    Nome: clientName,
    Email: clientEmail,
    Telefone: clientPhone,
    CPF: clientCpf,
    Marca: brandCard,
    Modelo: modelCar,
    Ano: yearCar
}

  let clients = JSON.stringify(clientData);
  localStorage.setItem("clientData", clients);
  swal('Tudo certo', 'Cadastro realizado com sucesso!', 'success');

  document.getElementById("formClient").reset();
})
