import {nice_mystic_code} from '../static/nice_mystic_code.js'

export const getMysticCodes = (req, res) => {
    res.json(nice_mystic_code.map(mysticCode => ({
        id: mysticCode.id,
        name: mysticCode.name,
    })))
}