const validation = (userData) => { // funcion GENERICA;

    const errors = {}; // aca se almacenan los errores;
    if(!/\S+@\S+\.\S+/.test(userData.email)){
        errors.email = 'Tiene que proporcionar un email valido';  
    }
    if(!userData.email){
        errors.email = 'Debes ingresar un email';
    }
    if(userData.email.length > 35){
        errors.email = 'No debe tener mas de 35 caracteres';
    }
    // if(!/[0-9]{1,}[A-Za-z]{1,}/g.test(userData.password)){
    //     errors.password = 'La contraseña debe tener al menos un número';
    // }
    if(userData.password.length < 6 || userData.password.length > 10){
        errors.password = 'Debe tener un rango entre 6 y 10 caracteres';
    }
    return errors;
}

export default validation;