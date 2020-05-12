import {validateEmail, validatePhone, checkTime} from '../../utils/utils';
import moment from 'moment';

export const errorMessages = {
    firstName: 'required field',
    lastName: 'required field',
    street: 'required field',
    city: 'required field',
    phone: 'please provide a valid 10-digit phone number',
    email: 'please provide a valid email address',
    deliveryDate: 'we are still in beta, please set to the next day and later',
    deliveryTime: 'please set the time between 10AM - 8PM',
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

            const now = moment();
            const value = moment(state.userInfo.deliveryDT).startOf('day');
            const tomorrow = moment().add(1, 'days').startOf('day');

            return value.isSameOrAfter(tomorrow);
        }
            
        case 'deliveryTime': {
            if (!errorChecking) return true;

            const value = moment(state.userInfo.deliveryDT);
            const startOfDay = moment(state.userInfo.deliveryDT).startOf('day');
            const openTime = moment(startOfDay).add(10, 'hours');
            const closeTime = moment(startOfDay).add(20, 'hours').add(1, 'seconds');
            const twoHoursFromNow = moment().add(2, 'hours');
            
            return value.isSameOrAfter(twoHoursFromNow) && value.isSameOrAfter(openTime) && closeTime.isSameOrAfter(value);
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

        case 'deliveryDate': {
            const now = moment(new Date());
            if (!errorChecking) return true;
            const val = moment(value);
            return val.isSameOrAfter(now.add(1, 'days'));
        }

        case 'deliveryTime': {
            const now = new Date();
            return errorChecking ? moment(value).isAfter(moment(now.addHours(1))) && checkTime(value) : true;
        }
        
        default:
            return true;
    }
}