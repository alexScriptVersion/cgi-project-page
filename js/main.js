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
});

/*
Other version to try if the addEventListener does not work:
input.onsearch = () => {
    console.log(`The term searched for was ${input.value}`);
};
*/