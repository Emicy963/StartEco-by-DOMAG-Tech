document.addEventListener('DOMContentLoaded', () => {
    const formProjetos = document.getElementById('form-projetos');

    formProjetos.addEventListener('submit', (e) => {
        e.preventDefault();

        const nomeProjeto = document.getElementById('projeto-nome').value;
        const descricaoProjeto = document.getElementById('projeto-descricao').value;
        const localProjeto = document.getElementById('projeto-local').value;
        const dataInicioProjeto = document.getElementById('projeto-data-inicio').value;
        const dataFimProjeto = document.getElementById('projeto-data-fim').value;

        console.log(`Projeto Cadastrado:
            Nome: ${nomeProjeto},
            Descrição: ${descricaoProjeto},
            Localização: ${localProjeto}, 
            Data de Início: ${dataInicioProjeto},
            Data de Fim: ${dataFimProjeto}`);
        
        alert('Projeto cadastrado com sucesso!');
        formProjetos.reset();
    });
});


document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('form-energia').addEventListener('submit', (e) => {
        e.preventDefault();
        const projeto = document.getElementById('energia-projeto').value;
        const consumo = document.getElementById('energia-consumo').value;
        const data = document.getElementById('energia-data').value;

        console.log(`Consumo de Energia registrado para o projeto ${projeto}: ${consumo} kWh em ${data}`);
        alert('Consumo de energia registrado com sucesso!');
        e.target.reset();
    });


    document.getElementById('form-residuos').addEventListener('submit', (e) => {
        e.preventDefault();
        const projeto = document.getElementById('residuos-projeto').value;
        const quantidade = document.getElementById('residuos-quantidade').value;
        const tipo = document.getElementById('residuos-tipo').value;

        console.log(`Resíduos registrados para o projeto ${projeto}: ${quantidade} kg de ${tipo}`);
        alert('Resíduos registrados com sucesso!');
        e.target.reset();
    });


    document.getElementById('form-areas-verdes').addEventListener('submit', (e) => {
        e.preventDefault();
        const projeto = document.getElementById('areas-verdes-projeto').value;
        const tamanho = document.getElementById('areas-verdes-tamanho').value;
        const descricao = document.getElementById('areas-verdes-descricao').value;

        console.log(`Área Verde cadastrada para o projeto ${projeto}: ${tamanho} m² - ${descricao}`);
        alert('Área verde cadastrada com sucesso!');
        e.target.reset();
    });



    document.getElementById('form-agua').addEventListener('submit', (e) => {
        e.preventDefault();
        const projeto = document.getElementById('agua-projeto').value;
        const uso = document.getElementById('agua-uso').value;

        console.log(`Uso de Água registrado para o projeto ${projeto}: ${uso} litros`);
        alert('Uso de água registrado com sucesso!');
        e.target.reset();
    });



    document.getElementById('gerar-relatorio').addEventListener('click', () => {
        const output = document.getElementById('relatorio-output');
        output.innerHTML = "<p>Relatório de Impacto Sustentável gerado com sucesso! Detalhes estão disponíveis no sistema.</p>";
    });
});