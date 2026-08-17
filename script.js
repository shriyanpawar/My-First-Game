/* =========================
   LIVE CLOCK
========================= */

function updateTime() {

    const timeElement =
        document.getElementById("timeElement");

    if (timeElement) {

        timeElement.textContent =
            new Date().toLocaleString();

    }
}


updateTime();


setInterval(
    updateTime,
    1000
);


/* =========================
   WINDOW Z-INDEX
========================= */

let biggestIndex = 100;


/* =========================
   MAKE WINDOW DRAGGABLE
========================= */

function makeDraggable(
    windowElement,
    headerElement
) {

    let isDragging = false;

    let offsetX = 0;
    let offsetY = 0;


    headerElement.addEventListener(
        "mousedown",
        function (event) {

            /*
             Don't drag when clicking
             window buttons.
            */

            if (
                event.target.closest(
                    ".window-button"
                )
            ) {

                return;

            }


            /*
             Don't drag maximized
             windows.
            */

            if (
                windowElement.classList.contains(
                    "maximized"
                )
            ) {

                return;

            }


            isDragging = true;


            const rect =
                windowElement.getBoundingClientRect();


            offsetX =
                event.clientX -
                rect.left;


            offsetY =
                event.clientY -
                rect.top;


            /*
             Bring window to front.
            */

            biggestIndex++;

            windowElement.style.zIndex =
                biggestIndex;

        }
    );


    document.addEventListener(
        "mousemove",
        function (event) {

            if (!isDragging) {

                return;

            }


            let newLeft =
                event.clientX -
                offsetX;


            let newTop =
                event.clientY -
                offsetY;


            /*
             Keep window inside screen.
            */

            const maxLeft =
                window.innerWidth -
                windowElement.offsetWidth;


            const maxTop =
                window.innerHeight -
                windowElement.offsetHeight;


            newLeft =
                Math.max(
                    0,
                    Math.min(
                        newLeft,
                        maxLeft
                    )
                );


            newTop =
                Math.max(
                    70,
                    Math.min(
                        newTop,
                        maxTop
                    )
                );


            windowElement.style.left =
                newLeft + "px";


            windowElement.style.top =
                newTop + "px";

        }
    );


    document.addEventListener(
        "mouseup",
        function () {

            isDragging = false;

        }
    );

}


/* =========================
   WELCOME WINDOW
========================= */

const welcomeWindow =
    document.getElementById(
        "welcomeWindow"
    );

const welcomeHeader =
    document.getElementById(
        "welcomeHeader"
    );

const welcomeOpen =
    document.getElementById(
        "welcomeOpen"
    );

const welcomeClose =
    document.getElementById(
        "welcomeClose"
    );

const welcomeMinimize =
    document.getElementById(
        "welcomeMinimize"
    );

const welcomeMaximize =
    document.getElementById(
        "welcomeMaximize"
    );


/*
 Welcome window is visible
 automatically because its CSS
 does not contain display:none.
*/


/* OPEN */

welcomeOpen.addEventListener(
    "click",
    function () {

        welcomeWindow.style.display =
            "flex";

        biggestIndex++;

        welcomeWindow.style.zIndex =
            biggestIndex;

    }
);


/* CLOSE */

welcomeClose.addEventListener(
    "click",
    function () {

        welcomeWindow.style.display =
            "none";

    }
);


/* MINIMIZE */

welcomeMinimize.addEventListener(
    "click",
    function () {

        welcomeWindow.style.display =
            "none";

    }
);


/* MAXIMIZE */

let welcomeMaximized = false;


welcomeMaximize.addEventListener(
    "click",
    function () {

        welcomeMaximized =
            !welcomeMaximized;


        if (welcomeMaximized) {

            welcomeWindow.classList.add(
                "maximized"
            );

            welcomeMaximize.textContent =
                "❐";

        } else {

            welcomeWindow.classList.remove(
                "maximized"
            );

            welcomeMaximize.textContent =
                "□";

        }

    }
);


/* Make welcome draggable */

makeDraggable(
    welcomeWindow,
    welcomeHeader
);



/* =========================
   LIBRARY OF OHARA
========================= */

const libraryIcon =
    document.getElementById(
        "libraryIcon"
    );

const libraryWindow =
    document.getElementById(
        "libraryWindow"
    );

const libraryHeader =
    document.getElementById(
        "libraryHeader"
    );

const libraryClose =
    document.getElementById(
        "libraryClose"
    );

const libraryMinimize =
    document.getElementById(
        "libraryMinimize"
    );

const libraryMaximize =
    document.getElementById(
        "libraryMaximize"
    );


/* OPEN */

libraryIcon.addEventListener(
    "click",
    function () {

        libraryWindow.style.display =
            "flex";

        biggestIndex++;

        libraryWindow.style.zIndex =
            biggestIndex;

    }
);


/* CLOSE */

libraryClose.addEventListener(
    "click",
    function () {

        libraryWindow.style.display =
            "none";

    }
);


/* MINIMIZE */

libraryMinimize.addEventListener(
    "click",
    function () {

        libraryWindow.style.display =
            "none";

    }
);


/* MAXIMIZE */

let libraryMaximized = false;


libraryMaximize.addEventListener(
    "click",
    function () {

        libraryMaximized =
            !libraryMaximized;


        if (libraryMaximized) {

            libraryWindow.classList.add(
                "maximized"
            );

            libraryMaximize.textContent =
                "❐";

        } else {

            libraryWindow.classList.remove(
                "maximized"
            );

            libraryMaximize.textContent =
                "□";

        }

    }
);


/* Make library draggable */

makeDraggable(
    libraryWindow,
    libraryHeader
);



/* =========================
   SHRIYAN HUB
========================= */

const shriyanHubIcon =
    document.getElementById(
        "shriyanHubIcon"
    );

const shriyanHubWindow =
    document.getElementById(
        "shriyanHubWindow"
    );

const shriyanHubHeader =
    document.getElementById(
        "shriyanHubHeader"
    );

const hubClose =
    document.getElementById(
        "hubClose"
    );

const hubMinimize =
    document.getElementById(
        "hubMinimize"
    );

const hubMaximize =
    document.getElementById(
        "hubMaximize"
    );


/* OPEN HUB */

shriyanHubIcon.addEventListener(
    "click",
    function () {

        shriyanHubWindow.style.display =
            "flex";

        biggestIndex++;

        shriyanHubWindow.style.zIndex =
            biggestIndex;

    }
);


/* CLOSE HUB */

hubClose.addEventListener(
    "click",
    function () {

        shriyanHubWindow.style.display =
            "none";

    }
);


/* MINIMIZE HUB */

hubMinimize.addEventListener(
    "click",
    function () {

        shriyanHubWindow.style.display =
            "none";

    }
);


/* MAXIMIZE HUB */

let hubMaximized = false;


hubMaximize.addEventListener(
    "click",
    function () {

        hubMaximized =
            !hubMaximized;


        if (hubMaximized) {

            shriyanHubWindow.classList.add(
                "maximized"
            );

            hubMaximize.textContent =
                "❐";

        } else {

            shriyanHubWindow.classList.remove(
                "maximized"
            );

            hubMaximize.textContent =
                "□";

        }

    }
);


/* Make Hub draggable */

makeDraggable(
    shriyanHubWindow,
    shriyanHubHeader
);