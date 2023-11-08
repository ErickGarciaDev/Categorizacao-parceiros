const parceiros = [
    { parceirosId: 19660156627897, nome: 'Fernanda Santos' },
    { parceirosId: 23998058019370, nome: 'Rafael Souza' },
    { parceirosId: 92291338611, nome: 'Maria Souza' },
    { parceirosId: 77743761456, nome: 'Ana Costa' },
    { parceirosId: 47202302326, nome: 'Maria Ferreira' },
    { parceirosId: 58017232567, nome: 'Sofia Costa' },
    { parceirosId: 16733009491247, nome: 'Lucas Silva' },
    { parceirosId: 63351859919, nome: 'Rafael Souza' },
    { parceirosId: 84297701780, nome: 'Carlos Oliveira' }
]

const parceirosAgrupados = {
    PF: [],
    PJ: [],
}

const parceirosString = parceiros.map((parceiro) => {
    parceiro.parceirosId = parceiro.parceirosId.toString()
    return parceiro
})

parceirosString.forEach((parceiro) => {
    if (parceiro.parceirosId.toString().length < 14) {
        parceirosAgrupados.PF.push(parceiro)
    } else {
        parceirosAgrupados.PJ.push(parceiro)
    }
})

console.log(parceirosAgrupados)
