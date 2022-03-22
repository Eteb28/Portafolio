
var totalDeGastos=0;
var totalDeIngresos=0;

function gastos() 
{
    let totgastos=0;
    let tarjetaNaranja = 0;
    let tarjetaNativa = 0;
    let tarjetaSantanderVisa = 0;
    let tarjetaSantanderAmex = 0;
    let procrear = 0;
    let toyotaPlan = 0;
    let jerarquicosSalud = 0;
    let impuetosSanBenito = 0;
    let coopAgua = 0;
    let enersa = 0;
    let mantHipotecario = 0;
    let garrafa = 0;
    let abonosCelulares = 0;
    let desagotePoso = 0;
    let combustible = 0;
    let gastosVarios = 0;
    let uvas=0;
    let valroUVA=0;
    
    var gastos[][];

    for (let i = 0; i < array.length; index++) {
        const element = array[i];
        
    }
    uvas=parseInt (prompt("Cantidad de UVAs"));
    valroUVA=parseInt(prompt("Valor del UVA al 15 del mes"));
    procrear=uvas*valroUVA;
    totgastos= (tarjetaNaranja+tarjetaNativa+tarjetaSantanderAmex
    +tarjetaSantanderVisa+procrear+toyotaPlan+
    jerarquicosSalud+impuetosSanBenito+coopAgua+
    enersa+mantHipotecario+garrafa+abonosCelulares+
    desagotePoso+combustible+gastosVarios);
    
    return (totgastos);
}
function ingresos() {
    let sueldo = 0;
    let horasExtras = 0;
    let refrigerio = 0;
    let totIngresos=0;
    sueldo=parseInt(prompt("Sueldo del Mes:")) ;
    horasExtras=parseInt(prompt("Horas Extras del Mes:")) ;
    refrigerio=parseInt(prompt("Refrgerio del Mes:")) ;

    totIngresos=(sueldo+horasExtras+refrigerio)
    return(totIngresos);
}

totalDeGastos=gastos();
totalDeIngresos=ingresos();