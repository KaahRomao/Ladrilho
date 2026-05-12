const url = `https://picsum.photos/v2/list`;
const body = document.querySelector("body");
const main = document.querySelector("main");
const header = document.querySelector("header");
const img = document.querySelector("#moon");
const figcaption = document.querySelector("figcaption");

//Criação de função assincrona para buscar os dados da URL
async function getDados(url) {
  //Váriavel para armazenar os dados do Fetch
  //! Await dentro dos () aguarda o retorno da busca
  //! Await fora aguarda para os dados serem transformados em JSON
  const dados = await (await fetch(url)).json();
  console.table(dados);
  filtrarDados(dados);
}
//Inicia a função e passa a variavel "url" como parametro de busca!

getDados(url);

function filtrarDados(dados) {
  const urlIMG = dados.forEach((elemento) => {
    inserirIMG(elemento.download_url, elemento.author);
  });
}

function estilizarPage() {
  body.className = "flex-col items-center justify-center bg - white";
  main.classList.add("columns-3", "gap-15", "p-24", "*:mt-10");
  header.className = "flex m-5 flex h-25 w-full justify-end";
  moon.className = "size-16 hover:cursor-pointer hover:scale-125 m-10";
}

estilizarPage();

function inserirIMG(url, autor) {
  //cria o elemento IMG
  let img = document.createElement("img");
  //adiciona o url no src do img
  img.src = url;
  main.appendChild(img);
  //cria o elemento FIGCAPTION
  let figcaption = document.createElement("figcaption");
  //adiciona o autor no texto do figcaption
  figcaption.innerText = autor;
  main.appendChild(figcaption);
}

// colocar o botao pra trocar de tema sol e lua no canto direito em cima
// colocar centralizado abaixo de cada foto o autor em baixo centralizado

moon.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  moon.classList.toggle("./assets/js/moon-solid-full.svg");

  if (body.classList.contains("dark-mode")) {
    moon.src = "./assets/js/sun-regular-full.svg";
  } else {
    moon.src = "./assets/js/moon-solid-full.svg";
    body.classList.remove("dark-mode");
  }
});
