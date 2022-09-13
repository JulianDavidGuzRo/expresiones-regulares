const nombres = document.querySelector("#inputNames");
const edad  = document.querySelector("#inputAge");
const correo = document.querySelector("#inputEmail");
const ciudad = document.querySelector("#inputCity");
const politicaData = document.querySelector("#checkPolitica");
const formulario = document.querySelector("#form");
// validacion de formularios

formulario.addEventListener("submit",(e)=>{
    e.preventDefault();
    if(validFieldsForm() === -1){
        alert ("Error en formulario");
    }
});

const validFieldsForm = () =>{
    const values = Object.values(validFields);
    let response = value.findIndex(e => e === flase);
    return response;
}

//Objeto de validaion 

let validFields ={
    nom:false,
    edad:false,
    mail:false,
    ciud:false,
    politica:false
}

nombres.addEventListener("change",(event) => {
    const inputNombre = event.target.value;
    const patronNombres = /^([a-zA-ZÀ-ÖØ-öø-ÿ]{3,25})([\s]?)([a-zA-ZÀ-ÖØ-öø-ÿ]{0,25})$/g;
// ternario
validFields.nom = inputNombre.match(patronNombres) ? true : false;
console.log(Object.values(validFields));
});
edad.addEventListener("change", function (e) {
    console.log("en edad");

    const patronEdad = /(^[0-9]{1,2}$)/g;
    if (parseInt(edad.value) >= 18){
        if(edad.value.match(patronEdad)) {
            validFields.edad = true;
        }else{
            alert("error en edad");
        }
    }else{
        alert("error en edad");
    }
        console.log(Object.values(validFields));

});

politicaData.addEventListener("change",(event) => {
    validFields.politica = politicaData.checked === true ? true : false;
    console.log(Object.values(validFields));
});

correo.addEventListener("change", function (e) {
    console.log("en edad");

    const patronEdad = /(^[0-9]{1,2}$)/g;
    if (parseInt(edad.value) >= 18){
        if(edad.value.match(patronEdad)) {
            validFields.edad = true;
        }else{
            alert("error en edad");
        }
    }else{
        alert("error en edad");
    }
        console.log(Object.values(validFields));

});



if (parseInt(correo.value) == true) {
    System.out.println("El email ingresado es válido.");
} else {
    System.out.println("El email ingresado es inválido.");
}



