 function validateForm() {
    const valorEmprestado = document.getElementById("valorEmprestado").value;
    const taxaJuros = document.getElementById("taxaJuros").value;
    const nroParcelas = document.getElementById("nroParcelas").value;

    if (valorEmprestado <= 0 || taxaJuros <= 0 || nroParcelas <= 0) {
        alert("Por favor, preencha todos os campos com valores válidos.");
        return false;
    }

    return true;
}

  function getQueryParams() {
    const urlParams = new URLSearchParams(window.location.search);
    return {
        valorEmprestado: parseFloat(urlParams.get('valorEmprestado')),
        taxaJuros: parseFloat(urlParams.get('taxaJuros')),
        nroParcelas: parseInt(urlParams.get('nroParcelas'))
    };
}

 function calcularSimulacao() {
    const params = getQueryParams();
    const valorReal = params.valorEmprestado * (1 + (params.taxaJuros / 100) * params.nroParcelas);
    const valorParcela = valorReal / params.nroParcelas;

    document.getElementById('result').innerHTML = `
        <p>Valor Total do Empréstimo: R$ ${valorReal.toFixed(2)}</p>
        <p>Valor de Cada Parcela: R$ ${valorParcela.toFixed(2)}</p>
    `;
}

 if (window.location.pathname.includes('simulador.html')) {
    calcularSimulacao();
}
