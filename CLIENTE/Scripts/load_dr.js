var sel = document.getElementById('doctor');

var ourRequest = new XMLHttpRequest();
ourRequest.open('GET', 'URL DEL GET DOCTORES');
ourRequest.onload = function () {
  if (ourRequest.status >= 200 && ourRequest.status < 400) {
    var ourData = JSON.parse(ourRequest.responseText);
    renderHTML(ourData);
  } else {
    console.log("We connected to the server, but it returned an error.");
  }

};

ourRequest.onerror = function () {
  console.log("Connection error");
};

ourRequest.send();

function renderHTML(data) {
    for(var i = 0; i < data.length; i++) {
        var opt = document.createElement('option');
        opt.innerHTML = data[i].nombre;
        opt.value = data[i].id;
        sel.appendChild(opt);
    }
}