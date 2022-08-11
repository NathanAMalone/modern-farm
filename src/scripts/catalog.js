export const catalog = (harvestArray) => {

    let htmlString=''

    for (const food of harvestArray) {
        htmlString += `
        <section class="plant">${food.type}</section> 
        `

        return htmlString
    }
}