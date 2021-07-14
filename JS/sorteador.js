const SubmeterFormulario = () => {
   const rangeInicial = document.getElementById("RangeInicial").value;
   const rangeFinal = document.getElementById("RangeFinal").value;
   const minhaAposta = document.getElementById("Aposta").value;

   realizarSorteio(+rangeInicial, +rangeFinal, +minhaAposta);
}


const realizarSorteio = (rangeInicial, rangeFinal, minhaAposta) => {
   
    if (!rangeInicial) {
        alert('Informe o rangeInicial!');
        return;
    }

    if (!rangeFinal) {
        alert('Informe o rangeFinal!');
        return;
    }

    if (!minhaAposta) {
        alert('Informe sua aposta!');
        return;
    }

    const numeroSorteado = novoSorteio(rangeInicial, rangeFinal);

    if (numeroSorteado === minhaAposta ) {
        alert('Parabéns, voce acertou!');
        return;
    }

    alert(`Errou! O numero sortado foi ${numeroSorteado}`);
        
}

const novoSorteio = (rangeInicial, rangeFinal) => {
        return (Math.floor(Math.random() * (rangeFinal - rangeInicial + 1)) + rangeInicial);
}