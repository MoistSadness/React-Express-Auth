import {nice_servant} from '../static/nice_servant_lore.js'

export const getServants = (req, res) => {
    res.json(nice_servant.map(servant => ({
        id: servant.id,
        name: servant.name,
    })))
}