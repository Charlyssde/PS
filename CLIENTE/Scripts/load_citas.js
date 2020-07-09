var container = document.getElementById("viewCitas");

var ourRequest = new XMLHttpRequest();
ourRequest.open('GET', '');
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

    for (i = 0; i < 5; i++) {
        var idx = "dah";
        const card = document.createElement('div');
        card.classList = 'card-body';

        // Construct card content
        const content = `
    <div class="card">
    <div class="card-header" id="heading-${idx}">
      <h5 class="mb-0">Something I guess</h5>
    </div>
    <div id="collapse-${idx}" class="collapse show" aria-labelledby="heading-${idx}" data-parent="#accordion">
      <div class="card-body">

        <h5>${idx}</h5>
        <p>${idx}</p>
        <p>${idx}</p>
      </div>
    </div>
  </div>
  `;

        // Append newyly created card element to the container
        container.innerHTML += content;
    }
}