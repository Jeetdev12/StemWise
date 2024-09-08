export const checkValidData = (email, password) => {

    const isEmailAddres = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    const isPassword = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/.test(password)

    if (!isEmailAddres) return " Invalid email id";
    if (!isPassword) return "Invalid password";


    return null;




};