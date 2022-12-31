import {nice_equip} from '../static/nice_equip_lore.js'

export const getCraftEssences = (req, res) => {
    res.json(nice_equip.map(craftEssence => ({
        id: craftEssence.id,
        name: craftEssence.name,
    })))
}