if('serviceWorker' in navigator) {
    navigator.serviceWorker
    .register('/sw.js')
    .then(() => 
    {
        console.log("Service worker registrado!")
    })

}


document.getElementById('form').addEventListener('submit', function(e) {
    e.preventDefault();
  
    let nome = document.getElementById('nome').value;
    let idade = parseInt(document.getElementById('idade').value);
    let peso = parseFloat(document.getElementById('peso').value);
    let altura = parseFloat(document.getElementById('altura').value);
  
    let fcm = 208 - (0.7 * idade);
    let imc = peso / (altura * altura);
    let consumo = peso * 0.035;
  
    let fichaAluno = `
      <h2>Ficha do Aluno</h2>
      <p><strong>Nome:</strong> ${nome}</p>
      <p><strong>Idade:</strong> ${idade}</p>
      <p><strong>Peso:</strong> ${peso}</p>
      <p><strong>Altura:</strong> ${altura}</p>
      <p><strong>FCM:</strong> ${fcm}</p>
      <p><strong>IMC:</strong> ${imc.toFixed(2)}</p>
    `;
  
   
    if (imc < 18.5) {
      fichaAluno += "<p>Abaixo do peso</p>";
    } else if (imc < 25) {
      fichaAluno += "<p>Peso normal</p>";
    } else if (imc < 30) {
      fichaAluno += "<p>Levemente acima do peso</p>";
    } else if (imc < 35) {
      fichaAluno += "<p>Obesidade Grau I</p>";
    } else if (imc < 40) {
      fichaAluno += "<p>Obesidade Grau II (severa)</p>";
    } else {
      fichaAluno += "<p>Obesidade Grau III (mórbida)</p>";
    }
  
    fichaAluno += `<p><strong>Consumir por dia:</strong> ${consumo.toFixed(3)} litros de água</p>`;
  

    document.getElementById('fichaAluno').innerHTML = fichaAluno;
  });
  





  