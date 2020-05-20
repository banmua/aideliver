import defaultConfig from '../default';
import {entityTypes} from '../../constants';

export const navbar = {
    homeIcon: true,
    searchBar: false,
    searchIcon: false,
    cartIcon: true,
    profileIcon: true,
    leftMenu: false,
}

export default {
    ...defaultConfig,
    navbar,
}