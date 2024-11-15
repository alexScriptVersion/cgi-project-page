// Hardcoded data
const dataInJson = [{"dnr": "4.1-163-2022", "column_id": "177"}, {"dnr": "4.1-662-2022", "column_id": "3"}, {"dnr": "4.1-796-2022", "column_id": "176"}, {"dnr": "4.1-328-2023", "column_id": "177"}, {"dnr": "386-2023", "column_id": "3"}, {"dnr": "425-2023", "column_id": "176"}, {"dnr": "434-2023", "column_id": "134"}, {"dnr": "539-2023", "column_id": "177"}, {"dnr": "543-2023", "column_id": "3"}, {"dnr": "lare 2023 individ p420136", "column_id": "176"}, {"dnr": "602-2023", "column_id": "3"}, {"dnr": "619-2023", "column_id": "177"}, {"dnr": "630-2023", "column_id": "3"}, {"dnr": "666-2023", "column_id": "2"}, {"dnr": "686-2023", "column_id": "3"}, {"dnr": "705-2023", "column_id": "177"}, {"dnr": "707-2023", "column_id": "176"}, {"dnr": "735-2023", "column_id": "176"}, {"dnr": "761-2023", "column_id": "176"}, {"dnr": "793-2023", "column_id": "2"}, {"dnr": "811-2023", "column_id": "177"}, {"dnr": "824-2023", "column_id": "177"}, {"dnr": "s\u00e4l populationstillh\u00f6righet", "column_id": "177"}, {"dnr": "133-2024", "column_id": "4"}, {"dnr": "etiskt analys av lejon polisen dnr 003-2024", "column_id": "134"}, {"dnr": "156-2024", "column_id": "4"}, {"dnr": "166-2024", "column_id": "4"}, {"dnr": "188-2024", "column_id": "4"}, {"dnr": "221-2024", "column_id": "4"}, {"dnr": "187-2024", "column_id": "4"}, {"dnr": "198-2024", "column_id": "4"}, {"dnr": "199-2024", "column_id": "4"}, {"dnr": "204-2024", "column_id": "176"}, {"dnr": "205-2024", "column_id": "4"}, {"dnr": "224-2024", "column_id": "4"}, {"dnr": "r snp 2024", "column_id": "1"}, {"dnr": "226-2024", "column_id": "4"}, {"dnr": "309-2024", "column_id": "134"}, {"dnr": "231-2024", "column_id": "4"}, {"dnr": "ndent project ssis", "column_id": "176"}, {"dnr": "234-2024", "column_id": "4"}, {"dnr": "249-2024", "column_id": "3"}, {"dnr": "276-2024", "column_id": "4"}, {"dnr": "273-2024", "column_id": "4"}, {"dnr": "260-2024", "column_id": "4"}, {"dnr": "270-2024", "column_id": "4"}, {"dnr": "271-2024", "column_id": "4"}, {"dnr": "272-2024", "column_id": "4"}, {"dnr": "285-2024", "column_id": "4"}, {"dnr": "288-2024", "column_id": "4"}, {"dnr": "289-2024", "column_id": "4"}, {"dnr": "291-2024", "column_id": "4"}, {"dnr": "293-2024", "column_id": "4"}, {"dnr": "299-2024", "column_id": "4"}, {"dnr": "298-2024", "column_id": "4"}, {"dnr": "300-2024", "column_id": "4"}, {"dnr": "301-2024", "column_id": "4"}, {"dnr": "302-2024", "column_id": "4"}, {"dnr": "303-2024", "column_id": "4"}, {"dnr": "304-2024", "column_id": "4"}, {"dnr": "306-2024", "column_id": "4"}, {"dnr": "312-2024", "column_id": "4"}, {"dnr": "311-2024", "column_id": "4"}, {"dnr": "308-2024", "column_id": "4"}, {"dnr": "310-2024", "column_id": "4"}, {"dnr": "315-2024", "column_id": "4"}, {"dnr": "321-2024", "column_id": "4"}, {"dnr": "322-2024", "column_id": "4"}, {"dnr": "323-2024", "column_id": "4"}, {"dnr": "324-2024", "column_id": "4"}, {"dnr": "332-2024 lynx sample arrived 16-05-2024", "column_id": "2"}, {"dnr": "333-2024", "column_id": "4"}, {"dnr": "334-2024", "column_id": "4"}, {"dnr": "337-2024", "column_id": "4"}, {"dnr": "339-2024", "column_id": "4"}, {"dnr": "341-2024", "column_id": "4"}, {"dnr": "345-2024", "column_id": "134"}, {"dnr": "348-2024", "column_id": "4"}, {"dnr": "350-2024", "column_id": "3"}, {"dnr": "352-2024", "column_id": "2"}, {"dnr": "353-2024", "column_id": "3"}, {"dnr": "356-2024", "column_id": "4"}, {"dnr": "363-2024", "column_id": "4"}, {"dnr": "361-2024", "column_id": "4"}, {"dnr": "362-2024", "column_id": "4"}, {"dnr": "365-2024", "column_id": "4"}, {"dnr": "410-2024", "column_id": "3"}, {"dnr": "367-2024", "column_id": "4"}, {"dnr": "374-2024", "column_id": "134"}, {"dnr": "376-2024", "column_id": "4"}, {"dnr": "377-2024", "column_id": "4"}, {"dnr": "378-2024", "column_id": "4"}, {"dnr": "379-2024", "column_id": "4"}, {"dnr": "380-2024", "column_id": "4"}, {"dnr": "388-2024", "column_id": "176"}, {"dnr": "392-2024", "column_id": "134"}, {"dnr": "404-2024", "column_id": "3"}, {"dnr": "393-2024", "column_id": "4"}, {"dnr": "396-2024", "column_id": "4"}, {"dnr": "397-2024", "column_id": "4"}, {"dnr": "lys \u00e5v vattenprover veronica lindstr\u00f6m naturf\u00f6retaget 408-2024", "column_id": "3"}, {"dnr": "429-2024", "column_id": "4"}, {"dnr": "430-2024", "column_id": "4"}, {"dnr": "428-2024", "column_id": "4"}, {"dnr": "427-2024", "column_id": "4"}, {"dnr": "0 year old shoe from norrt\u00e4lje", "column_id": "177"}, {"dnr": "433-2024", "column_id": "176"}, {"dnr": "437-2024", "column_id": "4"}, {"dnr": "446-2024", "column_id": "4"}, {"dnr": "445-2024", "column_id": "4"}, {"dnr": "447-2024", "column_id": "4"}, {"dnr": "449-2024", "column_id": "134"}, {"dnr": "454-2024", "column_id": "4"}, {"dnr": "a analys \u00e5v vattenprover kr\u00e4ftmannen test", "column_id": "4"}, {"dnr": "483-2024", "column_id": "4"}, {"dnr": "485-2024", "column_id": "4"}, {"dnr": "506-2024", "column_id": "1"}, {"dnr": "513-2024", "column_id": "134"}, {"dnr": "520-2024", "column_id": "134"}, {"dnr": "521-2024", "column_id": "2"}, {"dnr": "543-2024", "column_id": "176"}, {"dnr": "602-2024", "column_id": "1"}, {"dnr": "604-2024", "column_id": "176"}, {"dnr": "626-2024", "column_id": "176"}, {"dnr": "638-2024", "column_id": "176"}, {"dnr": "648-2024", "column_id": "1"}, {"dnr": "649-2024", "column_id": "176"}, {"dnr": "646-2024", "column_id": "1"}, {"dnr": "645-2024", "column_id": "1"}, {"dnr": "652-2024", "column_id": "1"}, {"dnr": "656-2024", "column_id": "1"}, {"dnr": "667-2024", "column_id": "1"}]

const listOfProjects = JSON.parse(JSON.stringify(dataInJson))
//console.log(listOfProjects)

// Column ID's
    // id 1 = Incoming --> NOT relevant since they need a dnr to search
    // id 2 = To be started
    // id 176 = On going
    // id 134 = Lab-work done
    // id 177 = In analysis
    // id 3 = Finished projects
    // id 4 = Invoiced projects

const statuses = {
    id1: "Vi har mottagit proverna, men inte börjat arbeta med dem.",
    id2: "Vi har mottagit proverna, men inte börjat arbeta med dem.",
    id176: "Vi har börjat arbeta med proverna i labbet.",
    id134: "V är klara med proverna i labbet. Om sekvensering ingår i projektet så har proverna skickats till sekvenseringscenter.",
    id177: "Vi har fått resultat från sekvensering och analyserar dessa.",
    id13: "Projektet är klart.",
    id4: "Projektet har fakturerats.",
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
        if (w > 480 && menu.is(":hidden")) {
            menu.removeAttr("style");
        }
    });

    $("nav li").on("click", function (e) {
        var w = $(window).width();
        if (w < 480) {
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

// Remove previous status section before adding a new one 
function removeStatusSection() {
    const statusSection = document.querySelector("#status")
    statusSection.remove()
}

// Scroll into view
function focusStatusSection() {
    document.getElementById('status').scrollIntoView({
        behavior: 'smooth',
        block: "end"
    });
}

// Add new status section
function addStatusSection(dnr, status, notFound = false) {
    const statusSection = document.createElement("section");
    statusSection.id = "status";

    const newDiv = document.createElement("div");
    newDiv.className = "container";

    const newTitle = document.createElement("h3")

    if (notFound) {
        newTitle.innerText = `Sökterm: "${dnr}" - Inget projekt hittades.`;
    } else {
        newTitle.innerText = `Projekt: ${dnr}`;
    }

    const newPara = document.createElement("p");
    newPara.innerText = `${status}`;

    statusSection.appendChild(newDiv)
    newDiv.appendChild(newTitle);
    newDiv.appendChild(newPara);

    const showcase = document.querySelector("#showcase");
    showcase.after(statusSection);

    focusStatusSection();
}


// Search for proejct event
input.addEventListener("keypress", function (event) {
    // If the user presses the "Enter" key on the keyboard
    if (event.key === "Enter") {
        // Cancel the default action, if needed
        event.preventDefault();

        // remove the status section for previous project
        if (document.getElementById("status") != null) {
            removeStatusSection();
        }

        // Check if the project is there
        for (let key in listOfProjects) {
            //console.log(typeof(input.value))
            if (listOfProjects[key].dnr == input.value) {
                current_dnr = listOfProjects[key].dnr;
                console.log(current_dnr);

                console.log(listOfProjects[key]);
                
                // check what column_id the projects has, then create an appropriate status section
                switch (listOfProjects[key].column_id) {
                    case "1":
                        console.log("ID: 1");
                        addStatusSection(current_dnr, statuses.id1)
                        break;
                    case "2":
                        console.log("ID: 2");
                        addStatusSection(current_dnr, statuses.id2)
                        break;
                    case "176":
                        console.log("ID: 176");
                        addStatusSection(current_dnr, statuses.id176)
                        break;
                    case "134":
                        console.log("ID: 134");
                        addStatusSection(current_dnr, statuses.id134)
                        break;
                    case "177":
                        console.log("ID: 177");
                        addStatusSection(current_dnr, statuses.id177)
                        break;
                    case "3":
                        console.log("ID: 3");
                        addStatusSection(current_dnr, statuses.id3)
                        break;
                    case "4":
                        console.log("ID: 4");
                        addStatusSection(current_dnr, statuses.id4)
                        break;
                    default:
                        console.log("ID not found???");
                }
                break;
            } else {
                console.log("Project not found")
                //addStatusSection(input.value, "", true)
            }
        }
    }
});

/*
input.addEventListener("search", (event) => {


  event.preventDefault();

  // Check if the project is there
  for (let key in listOfProjects) {
      //console.log(typeof(input.value))
      if (listOfProjects[key].dnr.includes(input.value)) {
          // Get status of project, Create new status-section, Display status in it
          if (listOfProjects[key].subtask_fakturerad == 2) {
              addStatusSection("fakturerad")
          }
          else if (listOfProjects[key].subtask_rapport == 2) {
              addStatusSection("rapport")
          }
          else {
              addStatusSection("diarienummer")
          }
          // console.log('PROJECT FOUND')
          break
      } else {
          //console.log("Project not found")
      }
  }
});
*/

/*
Other version to try if the addEventListener does not work:
input.onsearch = () => {
    console.log(`The term searched for was ${input.value}`);
};
*/





//addStatusSection()

// Read CSV file to get data: https://www.naukri.com/code360/library/how-to-read-csv-file-in-javascript

// Or maybe I need to create an intermediate node.js script where i work with the data and then export it in an appropriate format to this file.