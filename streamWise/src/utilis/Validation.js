

export const checkValidData = (email, password) => {
    const isEmailAddres = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    const isPassword = /^(?=.*?[0-9])(?=.*?[A-Za-z]).{8,32}$/.test(password)

    if (!isEmailAddres) return "Please Enter correct email ";
    if (!isPassword) return "Please enter correct password ";

    return null;

};