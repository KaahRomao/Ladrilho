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
  main.classList.add(
    "grid",
    "grid-cols-1",
    "md:grid-cols-2",
    "lg:grid-cols-3",
    "gap-6",
    "p-24",
  );
  header.className = "flex m-5 flex h-25 w-full justify-end";
  moon.className =
    "hover:cursor-pointer hover:scale-125 m-10 sm:size-10 md:size-12 lg:size-16";
}

estilizarPage();

function inserirIMG(url, autor) {
  let figure = document.createElement("figure");
  figure.classList.add("flex", "flex-col", "items-center");

  let img = document.createElement("img");
  img.src = url;
  img.className =
    "w-full h-70 rounded-lg shadow-md hover:scale-105 transition-transform duration-300 object-cover blur-sm hover:blur-none";
  figure.appendChild(img);

  let figcaption = document.createElement("figcaption");
  figcaption.innerText = autor;
  figcaption.classList.add("text-center", "text-sm", "mt-2", "text-gray-500");
  figure.appendChild(figcaption);

  main.appendChild(figure);
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
