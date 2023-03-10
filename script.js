// Write your JavaScript code here!

// const { pickPlanet, addDestinationInfo } = require("./scriptHelper");

window.addEventListener("load", function () {
    //Dear god just to relieve the eye strain
    document.body.style.backgroundColor = "#181a1b";
    document.body.style.color = "#e2e6e3";
    document.getElementById("launchForm").style.backgroundColor = "#1e2729";
    document.getElementById("launchStatusCheck").style.backgroundColor = "#1e2729";
    document.getElementById("missionTarget").style.backgroundColor = "#1e2729";
    document.getElementById("launchForm").style.borderColor = "#8c8273";
    document.getElementById("launchStatusCheck").style.borderColor = "#8c8273";
    document.getElementById("missionTarget").style.borderColor = "#8c8273";

    let listedPlanets; // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch();
    console.log(`listedPlantesResponse = ${listedPlanetsResponse}`);

    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(`listedPlanets 1 = ${listedPlanets}`);
    }).then(function () {
        console.log(`listedPlanets 2 = ${listedPlanets}`);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
        let chosenPlanet = pickPlanet(listedPlanets);
        addDestinationInfo(document, chosenPlanet.name, chosenPlanet.diameter, chosenPlanet.star, chosenPlanet.distance, chosenPlanet.moons, chosenPlanet.image);
    })
    document.getElementById("formSubmit").addEventListener("click", function () {
        formSubmission(document, pilotName.value, copilotName.value, fuelLevel.value, cargoMass.value); //Had test as second parameter and I have no idea why
    });
});