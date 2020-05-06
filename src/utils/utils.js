export const validateEmail = emailAddress => { 
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailAddress)) {
        return true;
    }
    return false;
}

export const validatePhone = phoneNumber => {
    const reg = /^\d{10}$/;
    if (phoneNumber.match(reg)) return true;
    return false;
}

export default {
    validateEmail,
    validatePhone,
}