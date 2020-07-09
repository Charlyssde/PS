var btnIngresar = document.getElementById("btnIngresar");
var btnCita = document.getElementById("btnCita");

btnIngresar.addEventListener("click", function () {
    var password = document.getElementById("password").value;
    var username = document.getElementById("username").value;

    if (username == "" || password == "") {
        alert("No puede haber campos vacíos");
    } else {
        var ourRequest = new XMLHttpRequest();
        
        ourRequest.open('GET', '');
        
        ourRequest.onload = function () {
            if (ourRequest.status >= 200 && ourRequest.status < 400) {
                var ourData = JSON.parse(ourRequest.responseText);
                if(ourRequest.responseText.includes("NotMatch")){
                    alert("Credenciales inválidas, ingrese unas correctas");
                }else{
                    renderHTML(ourData);
                }
                
            } else {
                alert("Error de conexión");
            }

        };

        ourRequest.onerror = function () {
            console.log("Connection error");
        };
        ourRequest.send();

    }
    function renderHTML(data) {
            window.location.href = "./menu_recep.html?id_usuario=" + data.id_usuario;

    }
});

btnCita.addEventListener("click", function(){
    window.location.href = "./reg_cita.html";
});




