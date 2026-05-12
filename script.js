const url = `https://picsum.photos/v2/list`;
const body = document.querySelector("body");
const main = document.querySelector("main");
const button = document.querySelector("button");

//Criação de função assincrona para buscar os dados da URL
async function getDados(url) {
  //Váriavel para armazenar os dados do Fetch
  //! Await dentro dos () aguarda o retorno da busca
  //! Await fora aguarda para os dados serem transformados em JSON
  const dados = await (await fetch(url)).json();
  // console.table(dados);
  filtrarDados(dados);
}
//Inicia a função e passa a variavel "url" como parametro de busca!

getDados(url);

function filtrarDados(dados) {
  const urlIMG = dados.forEach((elemento) => {
    inserirIMG(elemento.download_url);
  });
}

function estilizarPage() {
  body.className = "flex-col items-center justify-center bg - white";
  main.classList.add("columns-3", "gap-15", "p-24", "*:mt-10");
}

estilizarPage();

function inserirIMG(url) {
  //cria o elemento IMG
  let img = document.createElement("img");
  //adiciona o url no src do img
  img.src = url;
  main.appendChild(img);
}

//colocar o botao pra trocar de tema sol e lua no canto direito em cima
// colocar centralizado abaixo de cada foto o autor em baixo centralizado

button.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  button.classList.toggle("dark-mode");

  if (body.classList.contains("dark-mode")) {
    button.textContent = "Modo Claro";
    button.style.backgroundColor = "white";
    button.style.color = "black";
  } else {
    button.textContent = "Modo Escuro";
    h1.textContent = "Dark Mode Desativado";
    button.style.backgroundColor = "black";
    button.style.color = "white";
  }
});
