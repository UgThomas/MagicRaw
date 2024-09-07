function pesquisar() {
  let section = document.getElementById("resultados-pesquisa");
  let resultados = "";
  let campoPesquisa = document
    .getElementById("campo-pesquisa")
    .value.toLowerCase()
    .trim();

  if (campoPesquisa === "") {
    section.innerHTML = "Por favor, insira uma pesquisa.";
    return;
  }

  if (!Array.isArray(dados) || !dados.length) {
    console.warn("A coleção de dados não está disponível ou está vazia.");
    section.innerHTML = "Nenhum dado disponível para pesquisa.";
    return;
  }

  for (let dado of dados) {
    if (
      dado &&
      typeof dado.nome === "string" &&
      typeof dado.descricao === "string"
    ) {
      let nomeDado = dado.nome.toLowerCase();
      let descricaoDado = dado.descricao.toLowerCase();
      tags = dado.tags.toLocaleLowerCase();

      if (
        nomeDado.includes(campoPesquisa) ||
        descricaoDado.includes(campoPesquisa) ||
        tags.includes(campoPesquisa)
      ) {
        let imageName;

        if (dado.nome === "Black Lotus") {
          imageName = "blacker-lotus.png";
        } else if (dado.nome === "Oko, Thief of Crowns") {
          imageName = "oko-thief-of-crowns.png";
        } else {
          imageName = `${dado.nome.toLowerCase().replace(/ /g, "-")}.png`;
        }

        resultados += `
            <div class="item-resultado">
              <img src="assets/${imageName}" alt="Carta ${dado.nome}">
              <h2>${dado.nome}</h2>
              <p>${dado.descricao}</p>
              <a href="${dado.link}" target="_blank">Mais Informações</a>
            </div>
          `;
      }
    } else {
      console.warn("Dado inválido ou sem nome ou descrição:", dado);
    }
  }

  section.innerHTML = resultados || "Nenhum resultado encontrado.";
}
