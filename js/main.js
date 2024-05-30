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
    console.log(`The term searched for was "${input.value}"`);
    // Check if the project is there
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

// Read CSV file to get data: https://www.naukri.com/code360/library/how-to-read-csv-file-in-javascript

function addStatusSection(status) {
    const newSection = document.createElement("section")
    newSection.id = "status"
    
    const newDiv = document.createElement("div")
    newDiv.className = "container"
    
    const newTitle = document.createElement("h3")
    newTitle.innerText = `Projekt: ${input.value}`
    
    const newPara = document.createElement("p")
    newPara.innerText = `Status: ${status}`
    
    newSection.appendChild(newDiv)
    newDiv.appendChild(newTitle)
    newDiv.appendChild(newPara)
    
    const showcase = document.querySelector("#showcase")
    showcase.after(newSection)
}

//addStatusSection()
