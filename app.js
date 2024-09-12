function pesquisar() {
    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById('resultados-pesquisa');
    //console.log(section);

    // Obtém o valor do campo de pesquisa
    let campoPesquisa = document.getElementById('campo-pesquisa').value;
    console.log(campoPesquisa);

    // se o campoPesquisa for uma string sem nada
    if (campoPesquisa == '') {
        section.innerHTML = '<p>Não foi possível encontrar resultados para a pesquisa. Você precisa digitar a raça da personagem.</p>';
        return;
    }

    campoPesquisa = campoPesquisa.toLowerCase();

    // Inicializa uma string vazia para armazenar os resultados formatados
    let resultados = '';
    let etnia = '';
    let descricao = '';
    let habilidade = '';
    let tags = '';

    // Itera sobre cada dado na lista de dados
    for (let dado of dados) {
        etnia = dado.etnia.toLowerCase(); 
        descricao = dado.descricao.toLowerCase(); 
        habilidade = dado.habilidade.toLowerCase(); 
        tags = dado.tags.toLowerCase();

        // se etnia includes campoPesquisa
        if (etnia.includes(campoPesquisa) || descricao.includes(campoPesquisa) || habilidade.includes(campoPesquisa) || tags.includes(campoPesquisa)) {   
            // Cria um novo elemento HTML para cada item de resultado
            resultados += `
            <div class='item-resultado'>
                <h2>
                    <a href='#' target='_blank'>${dado.etnia}</a>
                </h2>
                <p class='descricao-meta'>${dado.descricao}</p>
                <ul>
                    <li>${dado.habilidade}</li>
                </ul>
                <a href=${dado.link} target='_blank'>Ver video</a> </div>
            `;
            }

    }

    // Se não houver resultados, exibe uma mensagem
    if (!resultados) {
        resultados = '<p>Não foi possível encontrar resultados para a pesquisa.</p>';
    }

    // Atribui o HTML gerado à seção de resultados
    section.innerHTML = resultados;
}

