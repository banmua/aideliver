import aideliver from './aideliver';
import phobalo from './phobalo';
import vietdrinks from './vietdrinks';
import goldenrimrealty from './goldenrimrealty';
import costcotogo from './costcotogo';
import mariscossanjuan from './mariscossanjuan';


export const config = () => {
    const hostname = window.location.hostname;

    const res = mariscossanjuan; //phobalo; //costcotogo; //goldenrimrealty; //vietdrinks; // default;

    if (hostname.endsWith('aideliver.com')) return aideliver;
    if (hostname.endsWith('phobalo.com')) return phobalo;
    if (hostname.endsWith('vietdrinks.com')) return vietdrinks;
    if (hostname.endsWith('goldenrimrealty.com')) return goldenrimrealty;
    if (hostname.endsWith('costcotogo.com')) return costcotogo;
    if (hostname.endsWith('mariscossanjuan.com')) return mariscossanjuan;


    document.title = res.entity.name;
    return res;
}

export default config();