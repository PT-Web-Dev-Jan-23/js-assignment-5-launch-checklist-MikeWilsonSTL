// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.
    /*
                 <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: </li>
                     <li>Diameter: </li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: </li>
                     <li>Number of Moons: </li>
                 </ol>
                 <img src="">
    */
    document.getElementById("missionTarget").innerHTML += `<h1>Mission Destination</h1>`;
    document.getElementById("missionTarget").innerHTML += `<ol>`;
    document.getElementById("missionTarget").innerHTML += `<li>${name}</li>`;
    document.getElementById("missionTarget").innerHTML += `<li>${diameter}</li>`;
    document.getElementById("missionTarget").innerHTML += `<li>${star}</li>`;
    document.getElementById("missionTarget").innerHTML += `<li>${distance}</li>`;
    document.getElementById("missionTarget").innerHTML += `<li>${moons}</li>`;
    document.getElementById("missionTarget").innerHTML += `</ol>`;
    document.getElementById("missionTarget").innerHTML += `<img src="${imageUrl}">`;
}

function validateInput(testInput) {
    if (testInput === "") {
        return "Empty";
    }
    else if (isNaN(testInput)) {
        return "Not a Number";
    }
    else {
        return "Is a Number";
    }
}

function formSubmission(document, pilot, coPilot, fuelLevel, cargoLevel) {
    let pilotInput = validateInput(pilot);
    let copilotInput = validateInput(coPilot);
    let fuelInput = validateInput(fuelLevel);
    let cargoInput = validateInput(cargoLevel);

    if (pilotInput === "Empty" && copilotInput === "Empty" && fuelInput === "Empty" && cargoInput === "Empty") {
        alert("Oh come on, you didn't enter a single thing!");
        event.preventDefault();
        return "";
    }

    if (pilotInput !== "Not a Number" || copilotInput !== "Not a Number") {
        alert("Pilot names must be strings! Try again.");
        event.preventDefault();
        return "";
    }

    if (fuelInput !== "Is a Number" || cargoInput !== "Is a Number") {
        alert("Cargo and Fuel fields must be numbers! Try again.");
        event.preventDefault();
        return "";
    }

    if (pilotInput === "Empty" || copilotInput === "Empty" || fuelInput === "Empty" || cargoInput === "Empty") {
        alert("All fields need to be filled! Try again.");
        event.preventDefault();
        return "";
    }

    let launchStatus = `<span style="color: green;">Shuttle is Ready for Launch</span>`;
    let pilotText = `<li>Pilot ${pilot} is ready to launch</li>`;
    let coPilotText = `<li>Co-pilot ${coPilot} is ready to launch</li>`;
    let fuelLevelText = `<li>Fuel level high enough for launch</li>`;
    let cargoLevelText = `<li>Cargo mass low enough for launch</li>`;

    if (fuelLevel < 10000) {
        launchStatus = `<span style="color: red;">Shuttle is Not Ready for Launch</span>`;
        fuelLevelText = `<li>Fuel level too low for launch</li>`;
    }
    if (cargoLevel > 10000) {
        launchStatus = `<span style="color: red;">Shuttle is Not Ready for Launch</span>`;
        cargoLevelText = `<li>Cargo mass too heavy for launch</li>`;
    }

    document.getElementById("faultyItems").style.visibility = "visible";
    document.getElementById("launchStatus").innerHTML = launchStatus;
    document.getElementById("pilotStatus").innerHTML = pilotText;
    document.getElementById("copilotStatus").innerHTML = coPilotText;
    document.getElementById("fuelStatus").innerHTML = fuelLevelText;
    document.getElementById("cargoStatus").innerHTML = cargoLevelText;
    event.preventDefault();
}

async function myFetch() {
    let planetsReturned = [];
    const response = await fetch('https://handlers.education.launchcode.org/static/planets.json');
    const json = await response.json();

    for (let x in json) {
        planetsReturned.push(json[x]);
    }

    return planetsReturned;
}

function pickPlanet(planets) {
    return planets[Math.floor(Math.random() * 6)];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;
