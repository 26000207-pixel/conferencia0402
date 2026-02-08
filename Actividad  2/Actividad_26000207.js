// Decirle al usuario su signo zodiacal
alert("Bienvenidos Creyentes del Horoscopo")

 //Hay que definir los dias que son validos por mes
 var diasPorMes = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
var mes, dia, signo;
var fechaValida = false

//Bucle hasta que el usuario diga la fecha correcta
while(!fechaValida){
    mes = Number(prompt("Ingresa tu mes de nacimiento:"));
    dia = Number(prompt("Ingresa tu dia de nacimiento"));

    //comprobacion 
    if (mes >= 1 && mes <=12 && dia >= 1 && dia <= diasPorMes[mes -1]){
        fechaValida = true; // para salir del bucle tiene que estar correcta la fecha
    } else{
      alert("❎Fecha incorrecta, intenta de nuevo"); 
    }
}


  
    //Datos segun la tabla de fechas
    if ((mes === 3 && dia  >= 21) || (mes === 4 && dia <= 20)){
        signo = "Aries";
    }else if((mes === 4 && dia  >= 21) || (mes === 5 && dia <= 20)){
        signo = "Tauro";
    }else if ((mes === 5 && dia >= 21) || (mes === 6 && dia <= 20)){
        signo = "Geminis";
    }else if ((mes === 6 && dia >= 21) || (mes === 7 && dia <= 22)){
        signo = "Cancer";
    }else if ((mes === 7 && dia >= 23) || (mes === 8 && dia <= 23)){
        signo = "Leo";
    }else if ((mes === 8 && dia >= 24) || (mes === 9 && dia <= 22)){
        signo = "Virgo";
    }else if ((mes === 9 && dia >= 23) || (mes === 10 && dia <= 23)){
        signo ="Libra";
    }else if ((mes === 10 && dia >= 24) || (mes === 11 && dia <= 22)){
        signo ="Escorpio";
    }else if ((mes === 11 && dia >= 23) || (mes === 12 && dia <= 21)){
        signo ="Sagitario";
    }else if ((mes === 12 && dia >= 22) || (mes === 1 && dia <= 20)){
        signo = "Capricornio";
    }else if((mes === 1 && dia >= 21) || (mes === 2 && dia <= 19)){
        signo ="Acuario";
    }else {
        signo ="Piscis";
    }

    //Resultado
    alert("🌟Tu signo zodiacal es: "+ signo)