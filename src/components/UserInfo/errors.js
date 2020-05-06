import {validateEmail, validatePhone} from '../../utils/utils';

export const errorMessages = {
    firstName: 'required field',
    lastName: 'required field',
    street: 'required field',
    city: 'required field',
    phone: 'please provide a valid 10-digit phone number',
    email: 'please provide a valid email address',
    deliveryDate: 'please set the delivery date to today or in the future',
    deliveryTime: 'please set the delivery time to 1 hour from now or later',
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
            return errorChecking ? !!value : true;
            
        case 'deliveryTime': 
            return errorChecking ? !!value : true;
        
        default:
            return true;
    }
}