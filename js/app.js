//Quantidades iniciais de ingressos disponíveis
let ingressosDisponiveis = {
    pista: 100,
    superior: 200,
    inferior: 400
};


//Função para atualizar a quantidade de ingressos disponíveis e verificar se estão esgotados
function comprar() {
    const tipoIngresso = document.getElementById('tipo-ingresso').value;
    const qtd = parseInt(document.getElementById('qtd').value);

    if (ingressosDisponiveis[tipoIngresso] === 0) {
        alert(`Ingressos para ${tipoIngresso} estão esgotados!`);
        return;
    }

    if (qtd > ingressosDisponiveis[tipoIngresso]) {
        alert('Quantidade solicitada maior do que a disponível!');
        return;
    }

    if (qtd <= ingressosDisponiveis[tipoIngresso]) {
        ingressosDisponiveis[tipoIngresso] -= qtd;
        atualizarQuantidadeDisponivel(tipoIngresso);
    }

     //Se a quantidade for reduzida a 0, não exibir o alerta imediatamente, mas na próxima tentativa
    if (ingressosDisponiveis[tipoIngresso] === 0) {
        //Não exibe o alerta agora, será na próxima tentativa de compra
        alert(`Últimos ingressos para ${tipoIngresso} foram comprados!`);
    }
}


//Função para atualizar a exibição da quantidade disponível
function atualizarQuantidadeDisponivel(tipo) {
    document.getElementById(`qtd-${tipo}`).innerText = ingressosDisponiveis[tipo];
}