"use strict"

function renderCoffee(coffee) {
    var html = '<tr class="coffee">';
    // html += '<td>' + coffee.id + '</td>';
    html += '<h2>' + coffee.name + '</h2>';
    html += '<p>' + coffee.roast + '</p>';
    html += '</tr>';

    return html;
}

function renderCoffees(coffees) {
    var html = '';
    for(var i = 0; i <= coffees.length - 1; i++) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    var filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if (coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee);
        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
}

// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
var coffees = [
    {id: 1, name: 'Light City', roast: 'light'},
    {id: 2, name: 'Half City', roast: 'light'},
    {id: 3, name: 'Cinnamon', roast: 'light'},
    {id: 4, name: 'City', roast: 'medium'},
    {id: 5, name: 'American', roast: 'medium'},
    {id: 6, name: 'Breakfast', roast: 'medium'},
    {id: 7, name: 'High', roast: 'dark'},
    {id: 8, name: 'Continental', roast: 'dark'},
    {id: 9, name: 'New Orleans', roast: 'dark'},
    {id: 10, name: 'European', roast: 'dark'},
    {id: 11, name: 'Espresso', roast: 'dark'},
    {id: 12, name: 'Viennese', roast: 'dark'},
    {id: 13, name: 'Italian', roast: 'dark'},
    {id: 14, name: 'French', roast: 'dark'},
];

// for(var i = 0; i <= coffees.length; i++){
//     document.getElementById("name") = coffees[i].name;
//     document.getElementById("roast") = coffees[i].roast;
// }

// for (var i = 0; i < coffees.length; i++) {
//     ("<div class="results" />").text(coffees[i]).appendTo('body');
// }

var temp;

for (var i = 0; i < coffees.length; i++) {
    temp = document.createElement('div');
    temp.className = 'results';
    temp.appendChild(createElement('h2'));
    temp.className = "names";
    temp.innerHTML = coffees[i].name;
    temp = document.createElement('p');
    temp.className = "roast";
    temp.innerHTML = coffees[i].roast;
    // temp.innerHTML = coffees[i].name + " "+ coffees[i].roast;
    document.getElementsByTagName('body')[0].appendChild(temp);
}


var tbody = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');

tbody.innerHTML = renderCoffees(coffees);

submitButton.addEventListener('click', updateCoffees);
