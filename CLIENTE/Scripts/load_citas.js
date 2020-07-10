var container = document.getElementById("viewCitas");

var ourRequest = new XMLHttpRequest();
ourRequest.open('GET', 'URL DE GET DE LAS CITAS');
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

    for (i = 0; i < data.lenght; i++) {
        const card = document.createElement('div');
        card.classList = 'card-body';

        // Construct card content
        const content = `
    <div class="card">
    <div class="card-header" id="heading">
      <h5 class="mb-0">-${data[i].fecha}</h5>
    </div>
    <div id="collapse-${data[i].id}" class="collapse show" aria-labelledby="heading-${data[i].id}" data-parent="#accordion">
      <div class="card-body">

        <h5>${data[i].hora}</h5>
        <p>${data[i].nombrePaciente}</p>
        <p>${data[i].nombreDoctor}</p>
      </div>
    </div>
  </div>
  `;

        // Append newyly created card element to the container
        container.innerHTML += content;
    }
}