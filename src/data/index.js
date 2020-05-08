import phobalo from './phobalo';
import vietdrinks from './vietdrinks';

export const config = () => {
    const hostname = window.location.hostname;
    if (hostname.endsWith('phobalo.com')) return phobalo;
    if (hostname.endsWith('vietdrinks.com')) return vietdrinks;

    return phobalo; // default
}

export default config();