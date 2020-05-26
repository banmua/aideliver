export const validateEmail = emailAddress => { 
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailAddress)) {
        return true;
    }
    return false;
}

export const validatePhone = phoneNumber => {
    //const reg = /^\d{10}$/;
    const reg = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    if (phoneNumber.match(reg)) return true;
    return false;
}

export const checkTime = (date) => {
    var hours = date.getHours();
    var mins = date.getMinutes();
    var day = date.getDay();
    return hours >= 11 && (hours <19);     // 11 AM to 7 PM
}

export default {
    validateEmail,
    validatePhone,
    checkTime,
}