let fieldPlants = []
let plant = []

export const addPlant = (seedObj) => {
    if (Array.isArray(seedObj)) {
        let indivCorn = {
            type: "Corn",
            height: 180,
            output: 6
        }
        fieldPlants.push(indivCorn)
        fieldPlants.push(indivCorn)
    } else {
    fieldPlants.push(seedObj)
    }
    return seedObj
}

export const usePlants = () => {
    plant = [...fieldPlants]
    return plant
}
1