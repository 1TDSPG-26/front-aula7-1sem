// Objeto INTERNO
const usuarioDb = {
    email: "email@email.com",
    senha: "12345",
    nome: "José Antonio",
    avatar: "https://placehold.co/100x100/e6e6e6/444444.png?text=usu%C3%A1rio&font=roboto"
}
function abrirModal(tipo) {
    const modalDialog = document.querySelector("#meuModal");
    const divMsg = document.querySelector("#msg");
    const botaoModal = document.querySelector("#btnFechar");

    // Estilo condicional do modal
    if (tipo === "sucesso") {
        modalDialog.style.backgroundColor = "#42af51";
        modalDialog.style.color = "#0a6b17";
        botaoModal.style.backgroundColor = "#359742";
        botaoModal.style.borderColor = "#0a6b17";

        let contador = 5;
        divMsg.innerHTML = `<p>Login realizado com Sucesso!</p><p>Você será redirecionado em ${contador} segundos...</p>`;


    } else if (tipo === "erro") {
        modalDialog.style.backgroundColor = "#af4242";
        modalDialog.style.color = "#6b0a0a";
        botaoModal.style.backgroundColor = "#973535";
        botaoModal.style.borderColor = "#6b0a0a";

        divMsg.innerHTML = `<p>Email ou Senha incorretos.</p><p>Verifique suas credenciais e tente novamente.</p>`;
    }

    modalDialog.showModal();

    // Listener do botão fechar (clone para evitar listeners duplicados)
    const novoBotao = botaoModal.cloneNode(true);
    botaoModal.parentNode.replaceChild(novoBotao, botaoModal);
    novoBotao.addEventListener("click", function () {
        modalDialog.close();
    });
}

// ─── Evento do botão Entrar ──
const email = document.querySelector("#idEmail");
const senha = document.querySelector("#idSenha");

const userForm = {
    email: email.value,
    senha: senha.value
}
const botaoEntrar = document.getElementById("btnEntrar");

botaoEntrar.addEventListener("click", function (e) {
    e.preventDefault();


    try {
        if (!usuarioDb) {
            throw Error("Ocorreu um erro no acesso as informações do usuário.");
        }

        if ((usuarioDb.email === userForm.email) && (usuarioDb.senha === userForm.senha)) {
            abrirModal("sucesso");
        } else {
            throw Error("Email ou Senha incorretos.");
        }

    } catch (error) {
        console.error(error);
        abrirModal("erro");
    }
});