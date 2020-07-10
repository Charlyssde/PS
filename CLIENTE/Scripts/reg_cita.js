var datePicker = document.getElementById("fecha");
datePicker.min = new Date().toISOString().split("T")[0];
var curpValidada = false;
var btnGuardar = document.getElementById("btnGuardar");


btnGuardar.addEventListener("click", function(){
    var hora = document.getElementById("hora").value;
    var fecha = document.getElementById("fecha").value;
    var curp = document.getElementById("curp").value;
    var doctor = document.getElementById("doctor").value;

    if (hora == "" || fecha == "" || !curpValidada || doctor == "") {
        //alert("No se pueden quedar los campos vacíos");
    } else {
        var ourRequest = new XMLHttpRequest();
        ourRequest.open('POST', 'URL CON PARAMETROS');
        ourRequest.onload = function () {
            if (ourRequest.status >= 200 && ourRequest.status < 400) {
                alert("EXITO AL GUARDAR");
            } else {
                alert("ERROR DE CONEXION");
            }

        };

        ourRequest.onerror = function () {
            alert("ERROR DE CONEXION");
        };
        

        ourRequest.send();
    }
});


function curpValida(curp) {
    var re = /^([A-Z][AEIOUX][A-Z]{2}\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\d|3[01])[HM](?:AS|B[CS]|C[CLMSH]|D[FG]|G[TR]|HG|JC|M[CNS]|N[ETL]|OC|PL|Q[TR]|S[PLR]|T[CSL]|VZ|YN|ZS)[B-DF-HJ-NP-TV-Z]{3}[A-Z\d])(\d)$/,
        validado = curp.match(re);
	
    if (!validado)  //Coincide con el formato general?
    	return false;
    
    //Validar que coincida el dígito verificador
    function digitoVerificador(curp17) {
        //Fuente https://consultas.curp.gob.mx/CurpSP/
        var diccionario  = "0123456789ABCDEFGHIJKLMNÑOPQRSTUVWXYZ",
            lngSuma      = 0.0,
            lngDigito    = 0.0;
        for(var i=0; i<17; i++)
            lngSuma = lngSuma + diccionario.indexOf(curp17.charAt(i)) * (18 - i);
        lngDigito = 10 - lngSuma % 10;
        if (lngDigito == 10) return 0;
        return lngDigito;
    }
  
    if (validado[2] != digitoVerificador(validado[1])) 
    	return false;
        
    return true; //Validado
}
function validarInput(input) {
    var curp = input.value.toUpperCase(),
        resultado = document.getElementById("resultado"),
        valido = "No válido";
        
    if (curpValida(curp)) { // ⬅️ Acá se comprueba
    	valido = "Válido";
        resultado.classList.add("ok");
        curpValidada = true;
    } else {
        resultado.classList.remove("ok");
        curpValidada = false;
    }
        
    resultado.innerText = "Formato: " + valido;
}


var btnBack = document.getElementById("btnBack");
btnBack.addEventListener("click", function(){
    window.history.back();
});