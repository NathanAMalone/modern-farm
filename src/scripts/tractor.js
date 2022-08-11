import {createAsparagus} from './seeds/asparagus.js'
import {createCorn} from './seeds/corn.js'
import {createPotato} from './seeds/potato.js'
import {createSoybean} from './seeds/soybean.js'
import {createSunflower} from './seeds/sunflower.js'
import {createWheat} from './seeds/wheat.js'
import { addPlant } from './field.js'



export const plantSeeds = (yearPlan) => {
    for (const parArray of yearPlan) {
        for (const childArray of parArray){
            if (childArray === "Asparagus") {
                addPlant(createAsparagus)
            } else {
                if (childArray === "Corn") {
                    addPlant(createCorn)
                } else {
                    if (childArray === "Potato") {
                        addPlant(createPotato)
                    } else {
                        if (childArray === "Soybean") {
                            addPlant(createSoybean)
                        } else {
                            if (childArray === "Sunflower") {
                                addPlant(createSunflower)
                            } else {
                                if (childArray === "Wheat") {
                                    addPlant(createWheat)
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    return yearPlan
}

