
var planets = [ 
        ['Pluto', 0.06], 
        ['Neptune', 1.148], 
        ['Uranus', 0.917], 
        ['Saturn', 1.139], 
        ['Jupiter', 2.640], 
        ['Mars', 0.3895], 
        ['Moon', 0.1655], 
        ['Earth', 1], 
        ['Venus', 0.9032], 
        ['Mercury', 0.377], 
        ['Sun', 27.9] 
    ];

var dropdown = document.getElementById("planets");

planets.forEach(function (planet) {
    var option = document.createElement("option");
    option.textContent = planet[0];
    option.value = planet[0]
    dropdown.appendChild(option)
});

function calculateWeight(weight, planetName) {
    var gravity = 0;

    planets.forEach(function (planet) {
        if (planet[0] === planetName) {
            gravity = planet[1];
        }
    });
    return weight * gravity;
}

function handleClickEvent(e) {
    
    var userWeight = document.getElementById("user-weight").value;

    var planetName = document.getElementById("planets").value;

    if (userWeight === "" || planetName === "") {
        document.getElementById("output").textContent = "Please enter your weight and select a planet.";
        return;
    }


    userWeight = Number(userWeight);

    var result = calculateWeight(userWeight, planetName);

    document.getElementById("output").textContent = `If you were on ${planetName}, you would weigh ${result.toFixed(2)}lbs!`;

    
};

document.getElementById("calculate-button").onclick = handleClickEvent;
