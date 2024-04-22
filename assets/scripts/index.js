const begin = document.getElementById('begin').addEventListener('click', () => {
  let section = document.getElementById('home');
  var newHTML = `
    <section id="question-1">
      <div class="col-lg text-light px-3">
        <div class="row-lg text-center a-top-row-2">
        </div>
        <div class="container a-home-text">
          <div class="row-lg text-start pt-3 mx-4">
            <h1>Inside which HTML element do you link a JavaScript file?</h1>
          </div>
          <div class="row-lg text-start mx-4 my-3 fs-4 pt-2">
            <input type="checkbox" class="mx-2">
            <p class="d-inline-block">js</p>
            <div></div>
            <input type="checkbox" class="mx-2">
            <p class="d-inline-block" class="mx-2">script</p>
            <div></div>
            <input type="checkbox" class="mx-2">
            <p class="d-inline-block" class="mx-2">scripting</p>
            <div></div>
            <input type="checkbox" class="mx-2">
            <p class="d-inline-block" class="mx-2">javascript</p>
          </div>
          <div class="row-lg text-start mx-4">
            <button type="button" class="btn btn-success mt-2 mb-4" id="next">Next &#8594</button>
          </div>
        </div>
      </div>
    </section>
    `;
    section.innerHTML = newHTML;
});