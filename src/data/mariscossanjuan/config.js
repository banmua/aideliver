import defaultConfig from '../default';
import {entityTypes} from '../../constants';

export const entity = {
    id: 'mariscossanjuan',
    url: 'mariscossanjuan.com',
    name: 'MariscosSanJuan.com',
    type: entityTypes.retails,
    subtype: entityTypes.restaurant,
}

export const navbar = {
    homeIcon: true,
    searchBar: true,
    searchIcon: true,
    cartIcon: true,
    profileIcon: true,
    leftMenu: true,
}

export const geo = {
    locations: [
        {
            name: 'San Jose, CA',
            city: 'San Jose',
            state: 'California',
            zipCodes: [],
        }, {
            name: 'Santa Clara, CA',
            city: 'Santa Clara',
            state: 'California',
            zipCodes: [],
        }, {
            name: 'Milpitas, CA',
            city: 'Milpitas',
            state: 'California',
            zipCodes: [],
        },
    ]
}

export default {
    ...defaultConfig,
    navbar,
    geo,
    entity,
}