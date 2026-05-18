
//Objeto INTERNO
const usuarioDb = {
  email: "email@email.com",
  senha: "12345",
  nome: "José Antonio",
  avatar: "https://placehold.co/100x100/e6e6e6/444444.png?text=usu%C3%A1rio&font=roboto"
}


//Capturando o botão de entrar
const botaoEntrar = document.getElementById("btnEntrar");

//Atrelando ao botão uma função que vai receber dois parâmetros.
// O primeiro será o evento de tela, o segundo será a função de callBack ou função anônima.

botaoEntrar.addEventListener("click", function (e) {

  e.preventDefault();

  //Para casa:
  //Capturar os campos de email e senha.
  //Armazenar em variáveis.
  //Imprimir seus valores.
  const email = document.querySelector("#idEmail");
  const senha = document.querySelector("#idSenha");
  const divMsg = document.querySelector("#msg");
  const modalDialog = document.querySelector("#meuModal");
  const botaoModal = document.querySelector("#btnFechar");

  //Armazenar os dados que chegam do form em um objeto:
  const userForm = {
    email: email.value,
    senha: senha.value
  }

  botaoModal.addEventListener("click", function () {
      modalDialog.close();
      modalDialog.classList.toggle("modal-danger");
    });

  //Validação
  try {

    if (usuarioDb) {

      if ((usuarioDb.email === userForm.email) && (usuarioDb.senha === userForm.senha)) {

        //Abrindo o dialog e deixando o fundo livre.
        // modalDialog.show();

        //Abrindo o dialog e travando o fundo.
        modalDialog.showModal();

        //Adicionar a mensagem de sucesso para o usuário no modal!
        //Vamos usar o innerHTML para injetar 2 <p> com o texto na div=msg.
        //Mas para isso necessitamos capturar a div=msg antes

        let contador = 5;

        //Injetando os 2 <p> com a mensagem de sucesso.
        divMsg.innerHTML = `<p>Login realizado com Sucesso!</p><p>Você será redirecionado em ${contador} segundos...</p>`;

        //Temporizador de redirecionamento com setInterval.
        const intervalo = setInterval(function () {

          contador--;
          divMsg.innerHTML = `<p>Login realizado com Sucesso!</p><p>Você será redirecionado em ${contador} segundos...</p>`;

          if (contador === 0) {
            clearInterval(intervalo);
            //Redirecionamento do usuário para uma nova página!!
            window.location.href = "../index.html";
          }

        }, 1000);

      } else {
        throw Error("Email ou Senha incorretos.");
      }

    } else {
      throw Error("Ocorreu um erro no acesso as informações do usuário.");
    }

  } catch (error) {
    modalDialog.showModal();
    modalDialog.toggleAttribute("open");
    modalDialog.classList.toggle("modal-danger")
    divMsg.innerHTML = `<p>${error.message}</p>`;
    console.error(error);
  }

});


//Pra casa
//Reutilzxar o MODAL para as mensagens de erro!!!
