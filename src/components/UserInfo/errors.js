import {validateEmail, validatePhone, checkTime} from '../../utils/utils';
import moment from 'moment';

export const errorMessages = {
    firstName: 'required field',
    lastName: 'required field',
    street: 'required field',
    city: 'required field',
    phone: 'please provide a valid 10-digit phone number',
    email: 'please provide a valid email address',
    deliveryDate: 'please set the delivery date to today or in the future',
    deliveryTime: 'at least 1 hour from now and between 10AM - 8PM',
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

        case 'deliveryDate': 
            const now = new Date();
            return errorChecking ? moment(state.userInfo.deliveryDT).isAfter(moment(now.minusDays(1)), 'day') : true;
            
        case 'deliveryTime': {
            const now = new Date();
            return errorChecking ? moment(state.userInfo.deliveryDT).isAfter(moment(now.addHours(1))) && checkTime(state.userInfo.deliveryDT) : true;
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

        case 'deliveryDate': 
            const now = new Date();
            return errorChecking ? moment(value).isAfter(moment(now.minusDays(1)), 'day') : true;
            
        case 'deliveryTime': {
            const now = new Date();
            return errorChecking ? moment(value).isAfter(moment(now.addHours(1))) && checkTime(value) : true;
        }
        
        default:
            return true;
    }
}