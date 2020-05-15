import aideliver from './aideliver';
import phobalo from './phobalo';
import vietdrinks from './vietdrinks';
import goldenrimrealty from './goldenrimrealty';

export const config = () => {
    const hostname = window.location.hostname;

    const res = phobalo; //goldenrimrealty; //vietdrinks; // default;

    if (hostname.endsWith('aideliver.com')) return aideliver;
    if (hostname.endsWith('phobalo.com')) return phobalo;
    if (hostname.endsWith('vietdrinks.com')) return vietdrinks;
    if (hostname.endsWith('goldenrimrealty.com')) return goldenrimrealty;

    document.title = res.entity.name;
    return res;
}

export default config();