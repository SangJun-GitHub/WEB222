/********************************************************************************* 
* 
* WEB222 – Assignment #4b 
* 
* I declare that this assignment is my own work in accordance with Seneca 
* Academic Policy. No part of this assignment has been copied manually or 
* electronically from any other source (including web sites) or distributed to 
* other students. 
* 
* Name: Sang Jun Park Student ID: 112293170 Date: 2018.03.26 
* 
********************************************************************************/

var filterType = ""; // sets the filter type to "" (will later be dog, cat or bird)
var filterAgeMin = 0; // sets the filter age min to 0 (for no minimum age filter)
var filterAgeMax = Number.MAX_VALUE; // sets the filter age max to the largest number possible (for no maximum age filter)

window.onload = loadTableWithFilters;

function loadTableWithFilters() 
{
    var tableBody = document.querySelector('#main-table-body');
    tableBody.innerHTML = "";

    for (var i = 0; i < petData.length; i++) 
    {
        document.querySelector("#main-table-body")
        if ((filterType == "" || filterType == petData[i].type) && petData[i].age >= filterAgeMin && petData[i].age <= filterAgeMax) 
        {     
            var tableRow = document.createElement("tr");

            var rowImage = document.createElement("td");
            var petimage = document.createElement("img");
            petimage.setAttribute("src", petData[i].image.src);
            petimage.setAttribute("alt", petData[i].image.alt);
            petimage.setAttribute("width", petData[i].image.width);
            petimage.setAttribute("height", petData[i].image.height);
            rowImage.appendChild(petimage);
            tableRow.appendChild(rowImage);

            var rowInfo = document.createElement("td");

            var heading = document.createElement("h4");
            var petName = document.createTextNode(petData[i].name);
            heading.appendChild(petName);
            rowInfo.appendChild(heading);

            var petDetail = document.createElement("p");
            petDetail.innerHTML = petData[i].description.toString();
            rowInfo.appendChild(petDetail);

            var rowInfoSpan = document.createElement("span");
            var petAge = document.createTextNode(`Age: ${petData[i].age} years old.`);

            rowInfoSpan.appendChild(petAge);
            rowInfo.appendChild(rowInfoSpan);
            tableRow.appendChild(rowInfo);
            document.querySelector("#main-table-body").appendChild(tableRow);
        }
    }
};

function filterDog() 
{
    filterType = "dog";
    loadTableWithFilters();
}

function filterCat() 
{
    filterType = "cat";
    loadTableWithFilters();
}

function filterBird() 
{
    filterType = "bird";
    loadTableWithFilters();
}

function filter_zero_1() 
{
    filterAgeMin = 0;
    filterAgeMax = 1;
    loadTableWithFilters();
}

function filter_1_3() 
{
    filterAgeMin = 1;
    filterAgeMax = 3;
    loadTableWithFilters();
}

function filter_4_plus() 
{
    filterAgeMin = 4;
    filterAgeMax = Number.MAX_VALUE;
    loadTableWithFilters();
}

function filterAllPets() 
{
    filterType = "";
    filterAgeMin = 0;
    filterAgeMax = Number.MAX_VALUE;
    loadTableWithFilters();
}