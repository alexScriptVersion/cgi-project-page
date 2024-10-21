// Hardcoded data
const dataInJson = [{ "dnr": "DNA-analys dietprover SLU aqua Dnr: 4.1-662-2022", "subtask_diarienummer": "2", "subtask_rapport": "0", "subtask_fakturerad": "2" }, { "dnr": "DNA-analys av vedlevande evertebrater_II Naturvårdsverket Dnr: 4.1-796-2022", "subtask_diarienummer": "2", "subtask_rapport": "0", "subtask_fakturerad": "0" }, { "dnr": "DNA-analyser av vattenprover Norrbotten lst Dnr: 4.1-328-2023", "subtask_diarienummer": "2", "subtask_rapport": "0", "subtask_fakturerad": "2" }, { "dnr": "DNA-analys av vattenprov Norra Sämsjön FVOF Dnr: 386-2023", "subtask_diarienummer": "2", "subtask_rapport": "2", "subtask_fakturerad": "2" }, { "dnr": "DNA-analys av vattenprover Hydrophyta Ekologikonsult Dnr: 434-2023", "subtask_diarienummer": "2", "subtask_rapport": "0", "subtask_fakturerad": "0" }, { "dnr": "DNA-analys av Euphrasia populationer Gotlands lst Dnr: 539-2023", "subtask_diarienummer": "2", "subtask_rapport": "0", "subtask_fakturerad": "2" }, { "dnr": "DNA-analys av vattenprover SGS Analytics Dnr: 543-2023", "subtask_diarienummer": "2", "subtask_rapport": "2", "subtask_fakturerad": "2" }, { "dnr": "Tumlare Anna Roos individ P420136", "subtask_diarienummer": "0", "subtask_rapport": "0", "subtask_fakturerad": "0" }, { "dnr": "DNA-analys av vattenprover Hushållningssällskapet Dnr: 602-2023", "subtask_diarienummer": "2", "subtask_rapport": "0", "subtask_fakturerad": "2" }, { "dnr": "DNA-analys av vattenprover SLU/Åsa Birgitta Dnr: 619-2023", "subtask_diarienummer": "2", "subtask_rapport": "0", "subtask_fakturerad": "0" }, { "dnr": "DNA-analys av tall-prover Trädkontoret Dnr: 630-2023", "subtask_diarienummer": "2", "subtask_rapport": "0", "subtask_fakturerad": "0" }, { "dnr": "DNA-analys av vattenprover Östergötland lst/Tommy Dnr: 666-2023", "subtask_diarienummer": "2", "subtask_rapport": "0", "subtask_fakturerad": "2" }, { "dnr": "Mårdhund kullsyskon Jägareförbundet Dnr: 686-2023", "subtask_diarienummer": "2", "subtask_rapport": "0", "subtask_fakturerad": "0" }, { "dnr": "DNA-analys av vattenprover Klarälvens vattenråd Dnr: 705-2023", "subtask_diarienummer": "2", "subtask_rapport": "0", "subtask_fakturerad": "0" }, { "dnr": "DNA-analys av vattenprover Värmlands lst Dnr: 707-2023", "subtask_diarienummer": "2", "subtask_rapport": "0", "subtask_fakturerad": "2" }, { "dnr": "DNA-analys mindre vattensalamander Calluna Dnr: 735-2023", "subtask_diarienummer": "2", "subtask_rapport": "0", "subtask_fakturerad": "0" }, { "dnr": "DNA-analys av vatten och sedimentprover Västra Götaland lst Dnr: 761-2023", "subtask_diarienummer": "2", "subtask_rapport": "0", "subtask_fakturerad": "2" }, { "dnr": "DNA-analys av DNA-extrakt Det danske sjældenhedsudvalg Dnr: 793-2023", "subtask_diarienummer": "2", "subtask_rapport": "0", "subtask_fakturerad": "0" }, { "dnr": "DNA-analys av fågelspillning Greenland Institute of Natural Resources Dnr: 800-2023", "subtask_diarienummer": "2", "subtask_rapport": "0", "subtask_fakturerad": "2" }, { "dnr": "DNA-analys av fiskägg SLU-Aqua/Filip Dnr: 802-2023", "subtask_diarienummer": "2", "subtask_rapport": "0", "subtask_fakturerad": "0" }, { "dnr": "DNA-analys av mikrobiota säl MAF/Bitte Dnr: 811-2023", "subtask_diarienummer": "2", "subtask_rapport": "0", "subtask_fakturerad": "0" }, { "dnr": "DNA-analys av vattenprover Niras_II Dnr: 824-2023", "subtask_diarienummer": "2", "subtask_rapport": "0", "subtask_fakturerad": "0" }, { "dnr": "DNA-analys av diet Lunds universitet/Johanna Dnr: 837-2023", "subtask_diarienummer": "2", "subtask_rapport": "0", "subtask_fakturerad": "0" }, { "dnr": "DNA-analys fladdermusspillning Sweco Dnr:  49-2024", "subtask_diarienummer": "2", "subtask_rapport": "0", "subtask_fakturerad": "0" }, { "dnr": "Gråsäl populationstillhörighet", "subtask_diarienummer": "0", "subtask_rapport": "0", "subtask_fakturerad": "0" }, { "dnr": "DNA-analys av fladdermusspillning Calluna/Andre Dnr: 133-2024", "subtask_diarienummer": "2", "subtask_rapport": "0", "subtask_fakturerad": "0" }, { "dnr": "Genetiskt analys av lejon Polisen dnr 03-2024", "subtask_diarienummer": "2", "subtask_rapport": "0", "subtask_fakturerad": "0" }, { "dnr": "DNA-analys av vattenprover Västra Götalands lst Dnr: 154-2024", "subtask_diarienummer": "2", "subtask_rapport": "0", "subtask_fakturerad": "0" }, { "dnr": "DNA-analyser av vattenprover Sweco/Peter Dnr: 166-2024", "subtask_diarienummer": "2", "subtask_rapport": "2", "subtask_fakturerad": "0" }, { "dnr": "DNA-analys av vattenprover Sweco/Johanna_II Dnr: 188-2024", "subtask_diarienummer": "2", "subtask_rapport": "2", "subtask_fakturerad": "0" }, { "dnr": "DNA-analys björn Polisen Dnr: 221-2024", "subtask_diarienummer": "0", "subtask_rapport": "0", "subtask_fakturerad": "0" }, { "dnr": "DNA-analys vattenprover Naturföretaget Dnr: 187-2024", "subtask_diarienummer": "0", "subtask_rapport": "0", "subtask_fakturerad": "0" }, { "dnr": "DNA-analys av vattenprover AFRY/Frida Dnr: 198-2024", "subtask_diarienummer": "2", "subtask_rapport": "2", "subtask_fakturerad": "0" }, { "dnr": "DNA-analys av vattenprover WSP/Frida Dnr: 199-2024", "subtask_diarienummer": "2", "subtask_rapport": "2", "subtask_fakturerad": "0" }, { "dnr": "DNA-analys av vattenprover Calluna/Martin Dnr: 204-2024", "subtask_diarienummer": "2", "subtask_rapport": "0", "subtask_fakturerad": "0" }, { "dnr": "DNA-analys av vattenprover Trapezia Dnr: 224-2024", "subtask_diarienummer": "2", "subtask_rapport": "2", "subtask_fakturerad": "0" }, { "dnr": "Bear SNP 2024", "subtask_diarienummer": "0", "subtask_rapport": "0", "subtask_fakturerad": "0" }, { "dnr": "DNA-analys av vattenprover Norconsult Dnr: 226-2024", "subtask_diarienummer": "2", "subtask_rapport": "2", "subtask_fakturerad": "0" }, { "dnr": "DNA-analys av växtmaterial Värmlands lst Dnr: 309-2024", "subtask_diarienummer": "0", "subtask_rapport": "0", "subtask_fakturerad": "0" }, { "dnr": "DNA-analys av vattenprover WSP/Erik Dnr: 231-2024", "subtask_diarienummer": "0", "subtask_rapport": "0", "subtask_fakturerad": "0" }, { "dnr": "DNA-analys av vattenprov Västra Mölndalsåns FVOF Dnr: 232-2024", "subtask_diarienummer": "0", "subtask_rapport": "0", "subtask_fakturerad": "0" }, { "dnr": "Stundent project SSIS", "subtask_diarienummer": "0", "subtask_rapport": "0", "subtask_fakturerad": "0" }, { "dnr": "DNA-analys av vattenprover Sweco/Johanna_I Dnr: 234-2024", "subtask_diarienummer": "2", "subtask_rapport": "2", "subtask_fakturerad": "0" }, { "dnr": "DNA-analys av vattenprov Calluna/Eric Dnr: 276-2024", "subtask_diarienummer": "2", "subtask_rapport": "2", "subtask_fakturerad": "0" }, { "dnr": "DNA-analys av vattenprover Örnborg Kyrkander AB Dnr: 273-2024", "subtask_diarienummer": "2", "subtask_rapport": "2", "subtask_fakturerad": "0" }, { "dnr": "eDNA analyser groddjur SWECO Dnr: 260-2024", "subtask_diarienummer": "0", "subtask_rapport": "0", "subtask_fakturerad": "0" }, { "dnr": "DNA-analys av vattenprover WSP/Marina_I Dnr: 270-2024", "subtask_diarienummer": "2", "subtask_rapport": "2", "subtask_fakturerad": "0" }, { "dnr": "DNA-analys av vattenprover WSP/Marina_II Dnr: 271-2024", "subtask_diarienummer": "2", "subtask_rapport": "2", "subtask_fakturerad": "0" }, { "dnr": "DNA-analys av vattenprover WSP/Marina_III Dnr: 272-2024", "subtask_diarienummer": "0", "subtask_rapport": "0", "subtask_fakturerad": "0" }, { "dnr": "DNA-analys av vattenprover Ekoll Dnr: 285-2024", "subtask_diarienummer": "2", "subtask_rapport": "2", "subtask_fakturerad": "0" }, { "dnr": "DNA-analys av vattenprover Calluna/Andre_I Dnr: 288-2024", "subtask_diarienummer": "2", "subtask_rapport": "2", "subtask_fakturerad": "0" }, { "dnr": "DNA-analys av vattenprover Calluna/Andre_II Dnr: 289-2024", "subtask_diarienummer": "2", "subtask_rapport": "2", "subtask_fakturerad": "0" }, { "dnr": "DNA-analys av vattenprover Norconsult/Cecilia Dnr: 291-2024", "subtask_diarienummer": "2", "subtask_rapport": "0", "subtask_fakturerad": "0" }, { "dnr": "DNA-analys av vattenprover. Norconsult/Magdalena Dnr: 293-2024", "subtask_diarienummer": "0", "subtask_rapport": "0", "subtask_fakturerad": "0" }, { "dnr": "DNA-analys av vattenprover Greensway/Bällsta Dnr: 299-2024", "subtask_diarienummer": "2", "subtask_rapport": "2", "subtask_fakturerad": "0" }, { "dnr": "DNA-analys av vattenprover Greensway/Vallentuna Dnr: 298-2024", "subtask_diarienummer": "2", "subtask_rapport": "2", "subtask_fakturerad": "0" }, { "dnr": "DNA-analys av vattenprov Sweco/Anton Dnr: 300-2024", "subtask_diarienummer": "2", "subtask_rapport": "2", "subtask_fakturerad": "0" }, { "dnr": "DNA-analys av vattenprover Calluna/Andre_III Dnr: 301-2024", "subtask_diarienummer": "2", "subtask_rapport": "2", "subtask_fakturerad": "0" }, { "dnr": "DNA-analys av vattenprover Calluna/Andre_IV Dnr: 302-2024", "subtask_diarienummer": "2", "subtask_rapport": "2", "subtask_fakturerad": "0" }, { "dnr": "DNA-analys av vattenprover Calluna/Andre_V Dnr: 303-2024", "subtask_diarienummer": "2", "subtask_rapport": "2", "subtask_fakturerad": "0" }, { "dnr": "DNA-analys av vattenprover Calluna/Andre_VI Dnr: 304-2024", "subtask_diarienummer": "2", "subtask_rapport": "2", "subtask_fakturerad": "0" }, { "dnr": "DNA-analys av fiskrom C-J Natur Dnr: 306-2024", "subtask_diarienummer": "2", "subtask_rapport": "0", "subtask_fakturerad": "0" }, { "dnr": "DNA-analys av vattenprover Örnborg & Kyrkander/Tove Dnr: 312-2024", "subtask_diarienummer": "2", "subtask_rapport": "2", "subtask_fakturerad": "0" }, { "dnr": "DNA-analys av vattenprover Örnborg & Kyrkander/Ann Dnr: 311-2024", "subtask_diarienummer": "2", "subtask_rapport": "2", "subtask_fakturerad": "0" }, { "dnr": "DNA-analys av vattenprover Calluna/Andre_VII Dnr: 308-2024", "subtask_diarienummer": "2", "subtask_rapport": "2", "subtask_fakturerad": "0" }, { "dnr": "DNA-analys av vattenprover Sweco/Johanna_IV Dnr: 310-2024", "subtask_diarienummer": "2", "subtask_rapport": "2", "subtask_fakturerad": "0" }, { "dnr": "DNA-analys av vattenprover WSP/Erik Dnr: 315-2024", "subtask_diarienummer": "0", "subtask_rapport": "0", "subtask_fakturerad": "0" }, { "dnr": "DNA-analys av vattenprov WSP/Mikael Dnr: 320-2024", "subtask_diarienummer": "0", "subtask_rapport": "0", "subtask_fakturerad": "0" }, { "dnr": "DNA-analys av vattenprover Örnborg & Kyrkander/Jonas_I Dnr: 321-2024", "subtask_diarienummer": "2", "subtask_rapport": "2", "subtask_fakturerad": "0" }, { "dnr": "DNA-analys av vattenprover Örnborg & Kyrkander/Jonas_II Dnr: 322-2024", "subtask_diarienummer": "0", "subtask_rapport": "0", "subtask_fakturerad": "0" }, { "dnr": "DNA-analys av vattenprover WSP/Oscar Dnr: 323-2024", "subtask_diarienummer": "2", "subtask_rapport": "2", "subtask_fakturerad": "0" }, { "dnr": "DNA-analys av vattenprover Sweco/Johanna_K Dnr: 324-2024", "subtask_diarienummer": "2", "subtask_rapport": "2", "subtask_fakturerad": "0" }, { "dnr": "Dnr: 332-2024 Lynx sample arrived 16-05-2024", "subtask_diarienummer": "0", "subtask_rapport": "0", "subtask_fakturerad": "0" }, { "dnr": "DNA-analys av vattenprover Calluna/Mika_I Dnr: 333-2024", "subtask_diarienummer": "0", "subtask_rapport": "0", "subtask_fakturerad": "0" }, { "dnr": "DNA-analys av vattenprover Calluna/Mika_II Dnr: 334-2024", "subtask_diarienummer": "0", "subtask_rapport": "0", "subtask_fakturerad": "0" }, { "dnr": "DNA-analys av vattenprover Ecogain/Sofia Dnr: 337-2024", "subtask_diarienummer": "2", "subtask_rapport": "0", "subtask_fakturerad": "0" }, { "dnr": "DNA-analys av vattenprover Enviroplanning AB Dnr: 338-2024", "subtask_diarienummer": "0", "subtask_rapport": "0", "subtask_fakturerad": "0" }, { "dnr": "DNA-analys av vattenprover Jakobi/Kalle Dnr: 341-2024", "subtask_diarienummer": "0", "subtask_rapport": "0", "subtask_fakturerad": "0" }, { "dnr": "DNA-analys av vattenprover Norrköpings kommun Dnr: 348-2024", "subtask_diarienummer": "0", "subtask_rapport": "0", "subtask_fakturerad": "0" }, { "dnr": "DNA-analys av vattenprover Örnborg & Kyrkander/Jonas Dnr: 350-2024", "subtask_diarienummer": "2", "subtask_rapport": "0", "subtask_fakturerad": "0" }, { "dnr": "DNA-analyser av älgprover Polisen Dnr: 352-2024", "subtask_diarienummer": "2", "subtask_rapport": "0", "subtask_fakturerad": "0" }, { "dnr": "DNA-analys av vattenprover Örnborg & Kyrkander Dnr: 363-2024", "subtask_diarienummer": "2", "subtask_rapport": "0", "subtask_fakturerad": "0" }, { "dnr": "DNA-analys av vattenprover Enviroplanning Dnr: 361-2024", "subtask_diarienummer": "2", "subtask_rapport": "0", "subtask_fakturerad": "0" }, { "dnr": "DNA-analys av vattenprover AFRY/Frida Dnr: 362-2024", "subtask_diarienummer": "2", "subtask_rapport": "0", "subtask_fakturerad": "0" }, { "dnr": "DNA-analyser av vattenprover Calluna/Vide Dnr: 365-2024", "subtask_diarienummer": "0", "subtask_rapport": "0", "subtask_fakturerad": "0" }, { "dnr": "DNA-analys av vattenprover AFRY/Elsa Dnr: 367-2024", "subtask_diarienummer": "0", "subtask_rapport": "0", "subtask_fakturerad": "0" }]

const listOfProjects = JSON.parse(JSON.stringify(dataInJson))
//console.log(listOfProjects)

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
function addStatusSection(dnr, status) {
    const statusSection = document.createElement("section");
    statusSection.id = "status";

    const newDiv = document.createElement("div");
    newDiv.className = "container";

    const newTitle = document.createElement("h3")
    newTitle.innerText = `Projekt: ${dnr}`;

    const newPara = document.createElement("p");
    newPara.innerText = `Status: ${status}`;

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
            if (listOfProjects[key].dnr.includes(input.value)) {
                fullDnr = listOfProjects[key].dnr;
                console.log(fullDnr);
                // Get status of project, Create new status-section, Display status in it      
                if (listOfProjects[key].subtask_fakturerad == 2) {
                    addStatusSection(fullDnr, "fakturerad")
                }
                else if (listOfProjects[key].subtask_rapport == 2) {
                    addStatusSection(fullDnr, "rapport")
                }
                else {
                    addStatusSection(fullDnr, "diarienummer")
                }
                // console.log('PROJECT FOUND')
                break
            } else {
                console.log("Project not found")
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