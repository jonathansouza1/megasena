function generateRandomSets(numberOfSets) {
    let allNumbers = Array.from({ length: 25 }, (_, i) => i + 1);
    let generatedSets = new Set();

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
    }
}

// Exemplo de uso
generateRandomSets(17)
