var sel = document.getElementById('doctor');

var ourRequest = new XMLHttpRequest();
ourRequest.open('GET', 'https://localhost:44318/api/Doctors');
ourRequest.onload = function () {
  if (ourRequest.status >= 200 && ourRequest.status < 400) {
console.log(ourRequest.responseText);    
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
        opt.innerHTML = data[i].Nombres;
        opt.value = data[i].Id;
        sel.appendChild(opt);
    }
}