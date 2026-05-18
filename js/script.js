// Objeto interno usado para validar o login.
const usuarioDb = {
    email: "email@email.com",
    senha: "12345",
    nome: "Jose Antonio",
    avatar: "https://placehold.co/100x100/e6e6e6/444444.png?text=usuario&font=roboto"
};

// As funcoes abaixo existem porque o index.html chama as duas no onclick do link de login.
function saudacao() {
    console.log("Bem-vindo ao Esporte Total!");
}

function saudacao2() {
    console.log("Abrindo a tela de login...");
}

const botaoEntrar = document.getElementById("btnEntrar");
const modalDialog = document.querySelector("#meuModal");
const botaoModal = document.querySelector("#btnFechar");
const divMsg = document.querySelector("#msg");

let intervalo;

function fecharModal() {
    if (modalDialog) {
        modalDialog.close();
    }
}

function iniciarContagemRegressiva(mensagem, paginaDestino) {
    let contador = 5;

    clearInterval(intervalo);

    divMsg.innerHTML = `<p>${mensagem}<br>Você será redirecionado em ${contador} segundos...</p>`;

    intervalo = setInterval(function() {
        contador--;

        divMsg.innerHTML = `<p>${mensagem}<br>Você será redirecionado em ${contador} segundos...</p>`;

        if (contador === 0) {
            clearInterval(intervalo);
            window.location.href = paginaDestino;
        }
    }, 1000);
}

modalDialog.classList.remove("modal-sucesso", "modal-erro");

if (botaoModal) {
    botaoModal.addEventListener("click", fecharModal);
}

if (botaoEntrar && modalDialog && divMsg) {
    botaoEntrar.addEventListener("click", function(e) {
        e.preventDefault();

        const email = document.querySelector("#idEmail");
        const senha = document.querySelector("#idSenha");

        const userForm = {
            email: email.value,
            senha: senha.value
        };

        try {
            if (!usuarioDb) {
                throw Error("Ocorreu um erro no acesso as informacoes do usuario.");
            }

            modalDialog.showModal();

            if (usuarioDb.email === userForm.email && usuarioDb.senha === userForm.senha) {
                iniciarContagemRegressiva("Login realizado com sucesso!", "./index.html");
                modalDialog.classList.add("modal-sucesso");
            } else {
                iniciarContagemRegressiva("Dados incorretos. Tente novamente.", "./login.html");
                modalDialog.classList.add("modal-erro");
            }
        } catch (error) {
            console.error(error);
            divMsg.innerHTML = `<p>${error.message}</p>`;
        }
    });
}
