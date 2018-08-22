"use strict";

var tbody = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');
var nameSelection = document.querySelector('#name-selection');


function renderCoffee(coffee) {
    var html = '<div class="d-block col-6 coffee mb-4">';
    // html += '<td>' + coffee.id + '</td>';
    html += '<h2 class="float-left m-1">' + coffee.name + '</h2>';
    html += '<p class="float-left m-1 pt-3 text-secondary">' + coffee.roast + '</p>';
    html += '</div>';

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
    var selectedName = nameSelection.value;
    var lowercaseName = selectedName.toLowerCase();
    var filteredCoffees = [];
    console.log(selectedRoast);
    coffees.forEach(function(coffee) {
        if (coffee.name.toLowerCase() == lowercaseName) {
            if (coffee.roast === selectedRoast) {
                filteredCoffees.push(coffee);
                console.log(selectedName);
                console.log(selectedRoast);
            }else{
                filteredCoffees.push(coffee);
                console.log(selectedName);
                console.log(selectedRoast);
            }
        }




        // Attempted to sort coffee by name with else if after sorting by roast in the if statement
        // else if(selectedName === ""){
        //     if(coffee.roast === selectedRoast && coffeeNames === selectedName) {
        //         filteredCoffees.push(coffee);
        //         console.log(filteredCoffees);
        //     }
        // }
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


var nameList =[];

coffees.forEach(
    function (element, index){
        nameList.push(coffees[index].name);
        return nameList;
    }
)

console.log(nameList);
var selectedName = nameSelection.value;


function myFunction() {
    // e.preventDefault(); // don't submit the form, we just want to update the data
    //
    // var input, filter, ul, li, a, i;
    //
    // var filteredCoffees = [];
    // console.log(nameList);
    // console.log(selectedName);
    //
    // // filter = input.value.toUpperCase();
    // // ul = document.getElementById("myUL");
    // // li = ul.getElementsByTagName("li");
    // for (i = 0; i < nameList.length; i++) {
    //     // a = li[i].getElementsByTagName("a")[0];
    //     a = nameList[i];
    //     if (a.toLowerCase().indexOf(selectedName) > -1) {
    //         filteredCoffees.push(coffees[i]);
    //     }
    //     // else {
    //     //     nameList[i].style.display = "none";
    //     // }
    // }
    //
    // coffees.forEach(function(coffee) {
    //     if (coffee.name == selectedName) {
    //         filteredCoffees.push(coffee);
    //     }
    // });
    // tbody.innerHTML = renderCoffees(filteredCoffees);

}




tbody.innerHTML = renderCoffees(coffees);

submitButton.addEventListener('click', updateCoffees);
// submitButton.addEventListener('click', myFunction);
