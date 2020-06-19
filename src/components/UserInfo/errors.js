import {validateEmail, validatePhone, checkTime} from '../../utils/utils';
import moment from 'moment';
import cc from 'coupon-code';

export const errorMessages = {
    firstName: 'required field',
    lastName: 'required field',
    street: 'required field',
    city: 'required field',
    phone: 'please provide a valid 10-digit phone number',
    email: 'please provide a valid email address',
    referrer: 'incorrect or expired coupon code',
    deliveryDate: 'next day and later',
    deliveryTime: 'select time',
}

Date.prototype.addHours = function(h) {
    this.setTime(this.getTime() + (h*60*60*1000));
    return this;
}

Date.prototype.minusDays = function(d) {
    this.setTime(this.getTime() - (d*24*60*60*1000));
    return this;
}

export const isValid2 = (fieldName, state, errorChecking = false) => {
    switch (fieldName) {
        case 'firstName': 
            return errorChecking ? !!state.userInfo.firstName : true;
        
        case 'lastName': 
            return errorChecking ? !!state.userInfo.lastName : true;

        case 'street': 
            return errorChecking ? !!state.userInfo.street : true;

        case 'city': 
            return errorChecking ? !!state.userInfo.city : true;

        case 'phone': 
            return errorChecking ? validatePhone(state.userInfo.phone) : true;
        
        case 'email': 
            return errorChecking ? validateEmail(state.userInfo.email) : true;

        case 'referrer': {
            const {referrer = ''} = state.userInfo;
            //const isValidCoupon = referrer.trim() === '';
            const isValidCoupon = referrer === 'BuyTwoGetOneFree29' || referrer.trim() === '';
            //const isValidCoupon = cc.validate(referrer) || referrer.trim() === ''
            return errorChecking ? isValidCoupon : true;
        }

        case 'deliveryDate': {
            if (!errorChecking) return true;
            const val = moment(state.userInfo.deliveryDT);
            const valStartOfDay = val.startOf('day');
            const tomorrow = moment().add(1, 'days').startOf('day');
            const isFriSatSun = [5, 6, 0].includes(valStartOfDay.day());

            return valStartOfDay.isSameOrAfter(tomorrow);
            //return valStartOfDay.isSameOrAfter(tomorrow) && isFriSatSun;
        }
            
        // case 'deliveryTime': {
        //     if (!errorChecking) return true;

        //     const val = moment(state.userInfo.deliveryDT);
        //     const startOfDay = moment(state.userInfo.deliveryDT).startOf('day');
        //     const openTime = moment(startOfDay).add(9, 'hours');
        //     const closeTime = moment(startOfDay).add(18, 'hours').add(31, 'minutes');
        //     const twoHoursFromNow = moment().add(2, 'hours');
        //     const isMonToFri = [1,2,3,4,5].includes(val.day()); 
        //     const hour = val.get('hour');
        //     const min = val.get('minutes');

        //     if (isMonToFri) {
        //         const fiveThirty = moment(startOfDay).add(17, 'hours').add(30, 'minutes');
        //         const sixThirty = moment(startOfDay).add(18, 'hours').add(31, 'minutes');
        //         return val.isSameOrAfter(twoHoursFromNow)
        //             && val.isSameOrAfter(fiveThirty) 
        //             && sixThirty.isSameOrAfter(val);
        //         //return hour === 18 && min === 30;
        //     }
            
        //     return val.isSameOrAfter(twoHoursFromNow) 
        //             && val.isSameOrAfter(openTime) 
        //             && closeTime.isSameOrAfter(val);
        // }

        
        default:
            return true;
    }
}

export const isValid = (fieldName, value, errorChecking = false) => {
    switch (fieldName) {
        case 'firstName': 
            return errorChecking ? !!value : true;
        
        case 'lastName': 
            return errorChecking ? !!value : true;

        case 'street': 
            return errorChecking ? !!value : true;

        case 'city': 
            return errorChecking ? !!value : true;

        case 'phone': 
            return errorChecking ? validatePhone(value) : true;
        
        case 'email': 
            return errorChecking ? validateEmail(value) : true;

        case 'referrer': {
            const referrer = value || '';
            //const isValidCoupon = referrer.trim() === '';
            const isValidCoupon = referrer === 'BuyTwoGetOneFree29' || referrer.trim() === '';
            //const isValidCoupon = cc.validate(referrer) || referrer.trim() === ''
            return errorChecking ? isValidCoupon : true;
        }

        case 'deliveryDate': {
            const val = moment(value);
            const valStartOfDay = val.startOf('day');
            const tomorrow = moment().add(1, 'days').startOf('day');
            const isFriSatSun = [5, 6, 0].includes(valStartOfDay.day());

            return valStartOfDay.isSameOrAfter(tomorrow) && isFriSatSun;
        }

        // case 'deliveryTime': {
        //     const val = moment(value);

        //     const openTime = moment(moment(value).startOf('day')).add(9, 'hours');
        //     const closeTime = moment(moment(value).startOf('day')).add(18, 'hours').add(31, 'minutes');
        //     const twoHoursFromNow = moment().add(2, 'hours');
        //     const isMonToFri = [1,2,3,4,5].includes(val.day()); 
        //     const hour = val.get('hour');
        //     const min = val.get('minutes');

        //     if (isMonToFri) {
        //         return hour === 18 && min === 30;
        //     }
            
        //     return val.isSameOrAfter(twoHoursFromNow) 
        //             && val.isSameOrAfter(openTime) 
        //             && closeTime.isSameOrAfter(val);
        // }
        
        default:
            return true;
    }
}