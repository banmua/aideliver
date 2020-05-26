import {validateEmail, validatePhone, checkTime} from '../../utils/utils';
import moment from 'moment';

export const errorMessages = {
    firstName: 'required field',
    lastName: 'required field',
    street: 'required field',
    city: 'required field',
    phone: 'please provide a valid 10-digit phone number',
    email: 'please provide a valid email address',
    deliveryDate: 'please set the date to next day and later',
    deliveryTime: 'available time: Mon-Fri: 6:30 PM, Sat-Sun: 11 AM - 6:30 PM',
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

        case 'deliveryDate': {
            if (!errorChecking) return true;
            const val = moment(state.userInfo.deliveryDT);
            const valStartOfDay = val.startOf('day');
            const tomorrow = moment().add(1, 'days').startOf('day');
            const isFriSatSun = [5, 6, 0].includes(valStartOfDay.day());

            return valStartOfDay.isSameOrAfter(tomorrow);
            //return valStartOfDay.isSameOrAfter(tomorrow) && isFriSatSun;
        }
            
        case 'deliveryTime': {
            if (!errorChecking) return true;

            const val = moment(state.userInfo.deliveryDT);
            const startOfDay = moment(state.userInfo.deliveryDT).startOf('day');
            const openTime = moment(startOfDay).add(11, 'hours');
            const closeTime = moment(startOfDay).add(18, 'hours').add(31, 'minutes');
            const twoHoursFromNow = moment().add(2, 'hours');
            const isMonToFri = [1,2,3,4,5].includes(val.day()); 
            const hour = val.get('hour');
            const min = val.get('minutes');

            if (isMonToFri) {
                return hour === 18 && min === 30;
            }
            
            return val.isSameOrAfter(twoHoursFromNow) 
                    && val.isSameOrAfter(openTime) 
                    && closeTime.isSameOrAfter(val);
        }

        
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

        case 'deliveryDate2': {
            const now = moment(new Date());
            if (!errorChecking) return true;
            const val = moment(value);
            return val.isSameOrAfter(now.add(1, 'days'));
        }

        case 'deliveryDate3': {
            const value = moment(value);
            const startOfDay = moment(value).startOf('day');
            const openTime = moment(startOfDay).add(11, 'hours');
            const closeTime = moment(startOfDay).add(18, 'hours').add(31, 'minutes'); //add(1, 'seconds');
            const twoHoursFromNow = moment().add(2, 'hours');
            
            return value.isSameOrAfter(twoHoursFromNow) && value.isSameOrAfter(openTime) && closeTime.isSameOrAfter(value);
            //return value.isSameOrAfter(twoHoursFromNow) && value.isSameOrAfter(openTime) && closeTime.isSameOrAfter(value);
        }

        case 'deliveryDate': {
            const val = moment(value);
            const valStartOfDay = val.startOf('day');
            const tomorrow = moment().add(1, 'days').startOf('day');
            const isFriSatSun = [5, 6, 0].includes(valStartOfDay.day());

            return valStartOfDay.isSameOrAfter(tomorrow) && isFriSatSun;
        }

        case 'deliveryTime': {
            const val = moment(value);

            const openTime = moment(moment(value).startOf('day')).add(11, 'hours');
            const closeTime = moment(moment(value).startOf('day')).add(18, 'hours').add(31, 'minutes');
            const twoHoursFromNow = moment().add(2, 'hours');
            const isMonToFri = [1,2,3,4,5].includes(val.day()); 
            const hour = val.get('hour');
            const min = val.get('minutes');

            if (isMonToFri) {
                return hour === 18 && min === 30;
            }
            
            return val.isSameOrAfter(twoHoursFromNow) 
                    && val.isSameOrAfter(openTime) 
                    && closeTime.isSameOrAfter(val);
        }

        case 'deliveryTime_OLD': {
            const now = new Date();
            return errorChecking ? moment(value).isAfter(moment(now.addHours(1))) && checkTime(value) : true;
        }
        
        default:
            return true;
    }
}