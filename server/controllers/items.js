import { nice_item } from '../static/nice_item.js'

export const getItems = (req, res) => {
    // Removes every instance of 'Servant Coin' from the item data
    const items = nice_item.map(item => {
        if (item.name != 'Servant Coin') {
            //console.log(item.name)
            return ({
                id: item.id,
                name: item.name,
            })
        }
    })

    // Filter out all the null array elements
    const itemsFiltered = items.filter(function (el) {
        return el != null;
    });

    //console.log(itemsFiltered)

    res.json(itemsFiltered)
}