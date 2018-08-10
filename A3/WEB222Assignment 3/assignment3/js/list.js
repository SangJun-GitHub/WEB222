// Data for the "HTML Lists" Page

var fruits = [ "Apples","Oranges","Pears","Grapes","Pineapples","Mangos" ];

var directory = [
    {type: "file", name: "file1.txt"},
    {type: "file", name: "file2.txt"},
    {type: "directory", name: "HTML Files", files: [{type: "file", name: "file1.html"},{type: "file", name: "file2.html"}]},
    {type: "file", name: "file3.txt"},
    {type: "directory", name: "JavaScript Files", files: [{type: "file", name: "file1.js"},{type: "file", name: "file2.js"},{type: "file", name: "file3.js"}]}
];

window.onload = function () 
{
    //Fruits    
    var FruitsList = document.querySelector("#Fruits"); 
    var Fruits = "<ol>";
    for (var i = 0; i < fruits.length; i++) 
    { 
        Fruits += `<li>${fruits[i]}</li>`; 
    }
    Fruits += "</ol>";
    FruitsList.innerHTML = Fruits;

    //Files
    var FilesList = document.querySelector("#Files");
    var Files = "<ul>";
    for (var i = 0; i < directory.length; i++) 
    {
        Files += "<li>"; 
        if (directory[i].type == "file") 
        {
            Files += directory[i].name;
        } 
        else if (directory[i].type == "directory") 
        {
             Files += directory[i].name + "<ul>"; 
            for (var j = 0; j < directory[i].files.length; j++) 
            { 
                Files += `<li>${directory[i].files[j].name}</li>`; 
            } 
            Files += "</ul>"; 
        } 
        Files += "</li>"
    }
    Files += "</ul>";
    FilesList.innerHTML = Files;
}