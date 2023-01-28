class UI {
  // print all messages to show
  printMessage(message, className) {
    // create div
    const div = document.createElement("div");

    // append class list to div
    div.className = className;

    // append message to the div
    div.appendChild(document.createTextNode(message));
    // access to the div that want to show message card

    const result = document.querySelector(".messages");

    // append div to the result
    result.appendChild(div);

    // remove message after 2.5 second
    this.removeMessage();
  }
  // remove message after 2.5 second
  removeMessage() {
    setTimeout(() => {
      document.querySelector(".messages div").remove();
    }, 2500);
  }

  // Showing result of API
  createTemplate(result, currency) {
    // check  if exist previuos result, then need to remove first
    const prevResult = document.querySelector("#result div");
    if (prevResult) {
      prevResult.remove();
    }

    //check the name of currency
    let currencyName;
    switch (currencyName) {
      case "USD":
        currencyName = "Dollar";
        break;

      case "GBP":
        currencyName = "Pound";
        break;

      case "EUR":
        currencyName = "Euro";
        break;
    }

    // create template for show
    let HTMLTemplate = `
            <div class= "card cyan darken-3>
                <div class="card-content white-text">
                    <span class="card-title">Result</span>
                    <img style="width: 50px" src="${result.logo_url}"
                    <p>The Price of ${result.name} from ${currencyName} is: ${result.price}</p>
                    <p>Last Hour: ${result["1h"].price_change}</p>
                    <p>Last Day: ${result["1d"].price_change}</p>
                    <p>Last Week: ${result["7d"].price_change}</p>
                    <p>Last Month: ${result["30d"].price_change}</p>
                </div>
            </div>
        `;
    // showing spinner for 2second
    this.showSpinner();
    // show the result after spinner
    this.showResult(HTMLTemplate);
  }

  // show spinner before showing result
  showSpinner() {
    const spinnerGif = document.createElement("img");
    spinnerGif.src = "../img/spinner.gif";
    // append spinner to html
    document.querySelector(".spinner").appendChild(spinnerGif);
  }

  // showing the result of api
  showResult(HTMLTemplate) {
    setTimeout(() => {
      // remove spinner
      document.querySelector(".spinner img").remove();

      // access to the result tag
      const resultDiv = document.querySelector("#result");
      // append to the resultDiv
      resultDiv.innerHTML = HTMLTemplate;
    }, 2000);
  }
}
