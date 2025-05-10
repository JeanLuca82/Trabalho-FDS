let botao = document.querySelector("#botao");
let mensagem = document.querySelector("#mensagem");

botao.addEventListener("click",resposta);

function resposta(){
    mensagem.innerHTML = "Olá! Se você está vendo esta mensagem é porque visitou o meu site. Aqui você encontrará várias informações sobre minha vida pessoal. Obrigado pelo acesso!";
    mensagem.classList.add("ativo")
    
}
