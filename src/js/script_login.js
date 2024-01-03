
// Parte de js da tela de login
function ObterDados(){

  const url = "https://reqres.in/api/login" //dizendo onde estao os dados
  let req = new XMLHttpRequest() // fazendo o pedido dos dados
  req.open("GET", url)//abrindo a lista
  req.responseType = 'json' // lingua de programação usada
  req.send() // obtendo todas as informações, se eu quiser um tipo de informaçao especidica eu posso colocar dentro dos parenteses tipo send(nome [ou alex])
  
  req.onload = function(){//espera a requisição carregar, e ela volta com uma função
      let users = req.response //recebe a resposta da requisição

      let nov = users.data //o data é um json dentro do arquivo req, posso escolher outros

      console.log(nov) // com tratamento

      nov.forEach(element => { // faça em cada linha enquanto ouver linha
        console.log(element)
    });
    console.log("email: eve.holt@reqres.in, senha: cityslicka");
  }
}
ObterDados();
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
  let email = document.getElementById('email');
  let password = document.getElementById('password');

  let but = document.getElementById("telaIni");

  const data = {
    email: email.value,
    password: password.value
  };
  console.log(data)

  fetch('https://reqres.in/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then(response => {
      if (!response.ok) {
        throw new Error('Credenciais inválidas');
      }else{
        console.log('Login bem-sucedido:', data); 
        but.style.display = "block";
        email.value = "";
        password.value = "";
      }
      return response.json();
    })/*.then(data => {
      
      console.log('Login bem-sucedido:', data); 
      but.style.display = "block";
      email.value = "";
      password.value = "";
    })*/
    .catch(error => {
      console.error('Erro de login:', error);
      alert("Erro ao fazer o login, por favor verificar dados inseridos")
    });
});