console.log("Welcome to the main module")
import { createPlan } from './plan.js'
import { createAsparagus } from './seeds/asparagus.js'
import { createPotato } from './seeds/potato.js'
import { createSoybean } from './seeds/soybean.js'
import { createSunflower } from './seeds/sunflower.js'
import { createWheat } from './seeds/wheat.js'
import { createCorn } from './seeds/corn.js'
import { addPlant, usePlants } from './field.js'
import { plantSeeds } from './tractor.js'
import { harvestPlants } from './harvester.js'
import { catalog } from './catalog.js'

const yearlyPlan = createPlan()
console.log(yearlyPlan)
const asparagusSeed = createAsparagus()
console.log(asparagusSeed)
 
let seed = createPotato
addPlant(seed)
let planted = usePlants()
console.log(planted) 

const plantedSeeds = plantSeeds(yearlyPlan)
console.log(plantedSeeds)

const plant = usePlants()
const harvested = harvestPlants(plant)
console.log(harvested)

const cat = catalog(usePlants())
console.log(cat)