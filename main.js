(function() {
    "use strict";

    var tbody = document.querySelector('#coffees');
    var submitButton = document.querySelector('#submit');
    var addButton = document.querySelector('#add');
    var roastSelection = document.querySelector('#roast-selection');
    var nameSelection = document.querySelector('#name-selection');
    var roastInput = document.querySelector('#roast-input');
    var nameInput = document.querySelector('#name-input');

    function renderCoffee(coffee) {
        var html = '<div class="col-6 coffee mb-4">';
        // html += '<td>' + coffee.id + '</td>';
        html += '<h2 class="float-left m-1">' + coffee.name + '</h2>';
        html += '<p class="float-left m-1 pt-3 text-secondary">' + coffee.roast + '</p>';
        html += '</div>';

        return html;
    }

    function renderCoffees(coffees) {
        var html = '';
        for (var i = 0; i <= coffees.length - 1; i++) {
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

        if (selectedRoast === "all") {
            coffees.forEach(function (coffee) {
                    if (coffee.name.toLowerCase().indexOf(lowercaseName) > -1) {
                        filteredCoffees.push(coffee);
                        console.log(selectedName);
                        console.log(selectedRoast);
                }
            });

        } else {
            coffees.forEach(function (coffee) {
                if (coffee.roast === selectedRoast) {
                    if (coffee.name.toLowerCase().indexOf(lowercaseName) > -1) {
                        filteredCoffees.push(coffee);
                        console.log(selectedName);
                        console.log(selectedRoast);
                    }
                }
            })
        }
        ;
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

    function addCoffee(e) {
        e.preventDefault(); // don't submit the form, we just want to update the data
        var object = {
            id: coffees.length + 1,
            name: nameInput.value,
            roast: roastInput.value
        };

        console.log(object);
        return coffees.push(object);
    };

    console.log(nameInput);
    console.log(roastInput);

    submitButton.addEventListener('click', updateCoffees);
    addButton.addEventListener('click', addCoffee);

})();
