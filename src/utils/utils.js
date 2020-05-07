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

export const checkTime = (date) => {
    var hours = date.getHours();
    var mins = date.getMinutes();
    var day = date.getDay();
    return hours >= 10 && (hours <20);     // 10 AM to 8 PM
}

export default {
    validateEmail,
    validatePhone,
    checkTime,
}