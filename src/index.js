function updateLosAngelesTime() {
  let losAngelesElement = document.querySelector("#los-angeles");
  let losAngelesDateElement = losAngelesElement.querySelector(".date");
  let losAngelesTimeElement = losAngelesElement.querySelector(".time");
  let losAngelesTime = moment().tz("America/Los_Angeles");

  losAngelesDateElement.innerHTML = losAngelesTime.format("DD. MMMM YYYY");
  losAngelesTimeElement.innerHTML = losAngelesTime.format("HH:mm:ss");
}

function updateDublinTime() {
  let dublinElement = document.querySelector("#dublin");
  let dublinDateElement = dublinElement.querySelector(".date");
  let dublinTimeElement = dublinElement.querySelector(".time");
  let dublinTime = moment().tz("Europe/Dublin");

  dublinDateElement.innerHTML = dublinTime.format("DD. MMMM YYYY");
  dublinTimeElement.innerHTML = dublinTime.format("HH:mm:ss");
}

function updateAucklandTime() {
  let aucklandElement = document.querySelector("#auckland");
  let aucklandDateElement = aucklandElement.querySelector(".date");
  let aucklandTimeElement = aucklandElement.querySelector(".time");
  let aucklandTime = moment().tz("Pacific/Auckland");

  aucklandDateElement.innerHTML = aucklandTime.format("DD. MMMM YYYY");
  aucklandTimeElement.innerHTML = aucklandTime.format("HH:mm:ss");
}

setInterval(updateLosAngelesTime, 1000);
setInterval(updateDublinTime, 1000);
setInterval(updateAucklandTime, 1000);
