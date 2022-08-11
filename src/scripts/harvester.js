
export const  harvestPlants = (plantsArray) => {
    let seedArray = []
    for (const array of plantsArray) {
        if (array === "Corn") {
            seedArray.push(array)*array.output/2
        } else { 
            seedArray.push(array)*array.output
        }
    }
    return seedArray
}