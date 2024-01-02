const combinations = []

//generate combinations of 6 uniques numbers between 1 and 60 ignoring numbers of array combinations
function generateCombination() {

    const combination = []

    while (combination.length < 6) {

        const number = Math.floor(Math.random() * 60) + 1;

        if (!combination.includes(number) && !combinations.some(combination => combination.includes(number)))
            combination.push(number)
    }

    //Retorna as combinações em ordem crescente
    return combination.sort((a, b) => a - b)

}

for (i = 0; i < 10; i++)
    combinations.push(generateCombination())


console.log(combinations)