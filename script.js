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
let biggestIndex = 100;
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

       

            if (
                event.target.closest(
                    ".window-button"
                )
            ) {

                return;

            }


        

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
welcomeClose.addEventListener(
    "click",
    function () {

        welcomeWindow.style.display =
            "none";

    }
);
welcomeMinimize.addEventListener(
    "click",
    function () {

        welcomeWindow.style.display =
            "none";

    }
);
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
makeDraggable(
    welcomeWindow,
    welcomeHeader
);
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
libraryClose.addEventListener(
    "click",
    function () {

        libraryWindow.style.display =
            "none";

    }
);
libraryMinimize.addEventListener(
    "click",
    function () {

        libraryWindow.style.display =
            "none";

    }
);
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
makeDraggable(
    libraryWindow,
    libraryHeader
);
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
hubClose.addEventListener(
    "click",
    function () {

        shriyanHubWindow.style.display =
            "none";

    }
);
hubMinimize.addEventListener(
    "click",
    function () {

        shriyanHubWindow.style.display =
            "none";

    }
);
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
makeDraggable(
    shriyanHubWindow,
    shriyanHubHeader
);