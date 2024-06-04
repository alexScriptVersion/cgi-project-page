// Data fetching (No error handling! Can fix later.)
let jsonData;

document.addEventListener('DOMContentLoaded', function() {
    fetchData();
    //alert("Data fetched!");
}, false);

function fetchData() {
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(data => {
      jsonData = data;
    })
    .then(() => {
      console.log(jsonData);
    })
}

// Responsive Nav
$(function () {
    menu = $("nav ul");

    $("#openup").on("click", function (e) {
        e.preventDefault();
        menu.slideToggle();
    });

    $(window).resize(function () {
        var w = $(this).width();
        if (w > 580 && menu.is(":hidden")) {
            menu.removeAttr("style");
        }
    });

    $("nav li").on("click", function (e) {
        var w = $(window).width();
        if (w < 580) {
            menu.slideToggle();
        }
    });
    $(".open-menu").height($(window).height());
});

// Smooth Scrolling
$('.cf a').on('click', function (event) {
    if (this.hash !== '') {
        event.preventDefault();

        const hash = this.hash;

        $('html, body').animate(
            {
                scrollTop: $(hash).offset().top
            },
            800,
            function () {
                window.location.hash = hash;
            }
        );
    }
});

// Search bar
const input = document.querySelector('input[type="search"]');

input.addEventListener("search", () => {
    // remove the status section for previous project
    if (document.getElementById("status") != null) {
        removeStatusSection();
    }
    console.log(`The term searched for was "${input.value}"`);
    console.log(jsonData[input.value].completed);
    if (jsonData[input.value].completed) {
        addStatusSection()
    }
    // Check if the project is there
        // if object.dnr.includes(input.value):
    // Get status of project
    // Create new status-section
    // Display status in it
});

/*
Other version to try if the addEventListener does not work:
input.onsearch = () => {
    console.log(`The term searched for was ${input.value}`);
};
*/

function addStatusSection(status) {
    const statusSection = document.createElement("section")
    statusSection.id = "status"
    
    const newDiv = document.createElement("div")
    newDiv.className = "container"
    
    const newTitle = document.createElement("h3")
    newTitle.innerText = `Projekt: ${input.value}`
    
    const newPara = document.createElement("p")
    newPara.innerText = `Status: ${status}`
    
    statusSection.appendChild(newDiv)
    newDiv.appendChild(newTitle)
    newDiv.appendChild(newPara)
    
    const showcase = document.querySelector("#showcase")
    showcase.after(statusSection)
}

function removeStatusSection() {
    const statusSection = document.querySelector("#status")
    statusSection.remove()

}

//addStatusSection()

// Read CSV file to get data: https://www.naukri.com/code360/library/how-to-read-csv-file-in-javascript

// Or maybe I need to create an intermediate node.js script where i work with the data and then export it in an appropriate format to this file.