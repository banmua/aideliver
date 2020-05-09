import aideliver from './aideliver';
import phobalo from './phobalo';
import vietdrinks from './vietdrinks';

export const config = () => {
    const hostname = window.location.hostname;

    const res = aideliver; //vietdrinks; //phobalo; // default;

    if (hostname.endsWith('aideliver.com')) return aideliver;
    if (hostname.endsWith('phobalo.com')) return phobalo;
    if (hostname.endsWith('vietdrinks.com')) return vietdrinks;

    document.title = res.entity.name;
    return res;
}

export default config();