const premio = new Map();
premio.set(11, 6);
premio.set(12, 12);
premio.set(13, 30);
premio.set(14, 1500);
premio.set(15, 1500000);

function generateRandomSets(numberOfSets) {
    let allNumbers = Array.from({ length: 25 }, (_, i) => i + 1);
    let generatedSets = new Set();
    let allSets = [];

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    function isUniqueSet(set) {
        return !generatedSets.has(set.toString());
    }

    function generateSet() {
        let set;
        do {
            shuffleArray(allNumbers);
            set = allNumbers.slice(0, 15).sort((a, b) => a - b);
        } while (!isUniqueSet(set));
        return set;
    }

    for (let i = 0; i < numberOfSets; i++) {
        const firstSet = generateSet();
        generatedSets.add(firstSet.toString());

        const remainingNumbers = allNumbers.slice(15);
        shuffleArray(remainingNumbers);
        const secondSet = remainingNumbers.concat(allNumbers.slice(0, 5)).sort((a, b) => a - b);
        generatedSets.add(secondSet.toString());

        console.log(`Set ${i * 2 + 1}:`, firstSet);
        console.log(`Set ${i * 2 + 2}:`, secondSet);

        allSets.push(firstSet);
        allSets.push(secondSet);
        
    }

    return allSets;
}

function simularSorteio(sets) {

    var ganhos = 0;

    //Simulação de um sorteio, sorteando 15 números de 1 a 25, sem repetição
    const drawnNumbers = [];
    let allNumbers = Array.from({ length: 25 }, (_, i) => i + 1);
    let remainingNumbers = allNumbers.slice(0);
    for (let i = 0; i < 15; i++) {
        const index = Math.floor(Math.random() * remainingNumbers.length);
        const drawnNumber = remainingNumbers.splice(index, 1)[0];
        drawnNumbers.push(drawnNumber);
    }

    //ordenando os números sorteados
    drawnNumbers.sort((a, b) => a - b);
    //Verificando quantos acertos cada set teve
    const results = [];
    sets.forEach(set => {
        const hits = set.filter(number => drawnNumbers.includes(number)).length;
        results.push({ set, hits });
    });

    //Ordenando os sets por quantidade de acertos
    results.sort((a, b) => b.hits - a.hits);

    // Filtra para manter apenas os sets com 11 ou mais acertos
    const filteredResults = results.filter(result => result.hits >= 11);

    //Calculando os ganhos
    filteredResults.forEach(result => {
        ganhos += premio.get(result.hits);
    })

    //Imprimindo os resultados
    console.log('Números sorteados: ', drawnNumbers);
    //console.log('Resultados: ', filteredResults);
    console.log('Total de acertos: ', filteredResults.length);
    console.log('Ganhos: R$', ganhos.toFixed(2));

    return ganhos;

}


const sets = generateRandomSets(17)
simularSorteio(sets)

/*
var ganhos = 0;
var i = 0;

while (ganhos < 1000000){
    console.log("Sorteio: ", i)
    ganhos = simularSorteio(sets)
    i++
}
*/






