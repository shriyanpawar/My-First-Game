document.addEventListener(
    "DOMContentLoaded",
    () => {


        /* ==================================================
           WINDOW Z-INDEX
        ================================================== */

        let biggestIndex = 10;



        /* ==================================================
           CLOCK
        ================================================== */

        const updateTime = () => {

            const currentTime =
                new Date().toLocaleString();

            const timeElement =
                document.querySelector(
                    "#timeElement"
                );

            if (timeElement) {

                timeElement.textContent =
                    currentTime;

            }

        };

        updateTime();

        setInterval(
            updateTime,
            1000
        );



        /* ==================================================
           WINDOWS
        ================================================== */

        const welcomeWindow =
            document.querySelector(
                "#welcomeWindow"
            );

        const calculatorWindow =
            document.querySelector(
                "#calculatorWindow"
            );

        const libraryWindow =
            document.querySelector(
                "#libraryWindow"
            );

        const hubWindow =
            document.querySelector(
                "#hubWindow"
            );

        const weatherWindow =
            document.querySelector(
                "#weatherWindow"
            );

        const calendarWindow =
            document.querySelector(
                "#calendarWindow"
            );



        /* ==================================================
           HEADERS
        ================================================== */

        const welcomeHeader =
            document.querySelector(
                "#welcomeHeader"
            );

        const calculatorHeader =
            document.querySelector(
                "#calculatorHeader"
            );

        const libraryHeader =
            document.querySelector(
                "#libraryHeader"
            );

        const hubHeader =
            document.querySelector(
                "#hubHeader"
            );

        const weatherHeader =
            document.querySelector(
                "#weatherHeader"
            );

        const calendarHeader =
            document.querySelector(
                "#calendarHeader"
            );



        /* ==================================================
           BRING WINDOW TO FRONT
        ================================================== */

        const bringToFront =
            (windowElement) => {

                biggestIndex++;

                windowElement.style.zIndex =
                    biggestIndex;

            };



        /* ==================================================
           DRAGGING SYSTEM
        ================================================== */

        const makeWindowDraggable =
            (
                windowElement,
                headerElement
            ) => {

                let isDragging =
                    false;

                let offsetX = 0;

                let offsetY = 0;


                headerElement.addEventListener(
                    "mousedown",
                    (event) => {

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


                        bringToFront(
                            windowElement
                        );


                        const rectangle =
                            windowElement.getBoundingClientRect();


                        offsetX =
                            event.clientX -
                            rectangle.left;


                        offsetY =
                            event.clientY -
                            rectangle.top;


                        event.preventDefault();

                    }
                );


                document.addEventListener(
                    "mousemove",
                    (event) => {

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
                                60,
                                Math.min(
                                    newTop,
                                    maxTop
                                )
                            );


                        windowElement.style.left =
                            `${newLeft}px`;


                        windowElement.style.top =
                            `${newTop}px`;

                    }
                );


                document.addEventListener(
                    "mouseup",
                    () => {

                        isDragging =
                            false;

                    }
                );

            };



        /* ==================================================
           INITIALIZE DRAGGING
        ================================================== */

        makeWindowDraggable(
            welcomeWindow,
            welcomeHeader
        );

        makeWindowDraggable(
            calculatorWindow,
            calculatorHeader
        );

        makeWindowDraggable(
            libraryWindow,
            libraryHeader
        );

        makeWindowDraggable(
            hubWindow,
            hubHeader
        );

        makeWindowDraggable(
            weatherWindow,
            weatherHeader
        );

        makeWindowDraggable(
            calendarWindow,
            calendarHeader
        );



        /* ==================================================
           WINDOW FOCUS
        ================================================== */

        [
            welcomeWindow,
            calculatorWindow,
            libraryWindow,
            hubWindow,
            weatherWindow,
            calendarWindow
        ].forEach(
            (windowElement) => {

                windowElement.addEventListener(
                    "mousedown",
                    () => {

                        bringToFront(
                            windowElement
                        );

                    }
                );

            }
        );



        /* ==================================================
           WELCOME
        ================================================== */

        const welcomeOpen =
            document.querySelector(
                "#welcomeOpen"
            );

        const welcomeClose =
            document.querySelector(
                "#welcomeClose"
            );

        const welcomeMinimize =
            document.querySelector(
                "#welcomeMinimize"
            );

        const welcomeMaximize =
            document.querySelector(
                "#welcomeMaximize"
            );


        welcomeOpen.addEventListener(
            "click",
            () => {

                welcomeWindow.style.display =
                    "block";

                bringToFront(
                    welcomeWindow
                );

            }
        );


        welcomeClose.addEventListener(
            "click",
            () => {

                welcomeWindow.style.display =
                    "none";

            }
        );


        welcomeMinimize.addEventListener(
            "click",
            () => {

                welcomeWindow.style.display =
                    "none";

            }
        );


        welcomeMaximize.addEventListener(
            "click",
            () => {

                const maximized =
                    welcomeWindow.classList.toggle(
                        "maximized"
                    );

                welcomeMaximize.textContent =
                    maximized
                        ? "❐"
                        : "□";

            }
        );



        /* ==================================================
           CALCULATOR
        ================================================== */

        const calculatorIcon =
            document.querySelector(
                "#calculatorIcon"
            );

        const calculatorClose =
            document.querySelector(
                "#calculatorClose"
            );

        const calculatorMinimize =
            document.querySelector(
                "#calculatorMinimize"
            );

        const calculatorMaximize =
            document.querySelector(
                "#calculatorMaximize"
            );


        calculatorIcon.addEventListener(
            "click",
            () => {

                calculatorWindow.style.display =
                    "block";

                bringToFront(
                    calculatorWindow
                );

            }
        );


        calculatorClose.addEventListener(
            "click",
            () => {

                calculatorWindow.style.display =
                    "none";

            }
        );


        calculatorMinimize.addEventListener(
            "click",
            () => {

                calculatorWindow.style.display =
                    "none";

            }
        );


        calculatorMaximize.addEventListener(
            "click",
            () => {

                const maximized =
                    calculatorWindow.classList.toggle(
                        "maximized"
                    );

                calculatorMaximize.textContent =
                    maximized
                        ? "❐"
                        : "□";

            }
        );



        /* ==================================================
           CALCULATOR LOGIC
        ================================================== */

        const calculatorDisplay =
            document.querySelector(
                "#calculatorDisplay"
            );

        const calculatorButtons =
            document.querySelectorAll(
                ".calculator-button"
            );

        let calculatorExpression =
            "";


        calculatorButtons.forEach(
            (button) => {

                button.addEventListener(
                    "click",
                    () => {

                        const value =
                            button.dataset.value;


                        if (
                            value === "C"
                        ) {

                            calculatorExpression =
                                "";

                            calculatorDisplay.value =
                                "0";

                            return;

                        }


                        if (
                            value === "="
                        ) {

                            if (
                                calculatorExpression
                                === ""
                            ) {

                                return;

                            }


                            try {

                                if (
                                    !/^[0-9+\-*/(). ]+$/.test(
                                        calculatorExpression
                                    )
                                ) {

                                    throw new Error();

                                }


                                const result =
                                    Function(
                                        `"use strict"; return (${calculatorExpression})`
                                    )();


                                if (
                                    !Number.isFinite(
                                        result
                                    )
                                ) {

                                    throw new Error();

                                }


                                calculatorDisplay.value =
                                    result;

                                calculatorExpression =
                                    String(result);

                            }

                            catch {

                                calculatorDisplay.value =
                                    "Error";

                                calculatorExpression =
                                    "";

                            }

                            return;

                        }


                        calculatorExpression +=
                            value;

                        calculatorDisplay.value =
                            calculatorExpression;

                    }
                );

            }
        );



        /* ==================================================
           LIBRARY
        ================================================== */

        const libraryIcon =
            document.querySelector(
                "#libraryIcon"
            );

        const libraryClose =
            document.querySelector(
                "#libraryClose"
            );

        const libraryMinimize =
            document.querySelector(
                "#libraryMinimize"
            );

        const libraryMaximize =
            document.querySelector(
                "#libraryMaximize"
            );


        libraryIcon.addEventListener(
            "click",
            () => {

                libraryWindow.style.display =
                    "block";

                bringToFront(
                    libraryWindow
                );

            }
        );


        libraryClose.addEventListener(
            "click",
            () => {

                libraryWindow.style.display =
                    "none";

            }
        );


        libraryMinimize.addEventListener(
            "click",
            () => {

                libraryWindow.style.display =
                    "none";

            }
        );


        libraryMaximize.addEventListener(
            "click",
            () => {

                const maximized =
                    libraryWindow.classList.toggle(
                        "maximized"
                    );

                libraryMaximize.textContent =
                    maximized
                        ? "❐"
                        : "□";

            }
        );



        /* ==================================================
           SHRIYAN HUB
        ================================================== */

        const hubIcon =
            document.querySelector(
                "#hubIcon"
            );

        const hubClose =
            document.querySelector(
                "#hubClose"
            );

        const hubMinimize =
            document.querySelector(
                "#hubMinimize"
            );

        const hubMaximize =
            document.querySelector(
                "#hubMaximize"
            );


        hubIcon.addEventListener(
            "click",
            () => {

                hubWindow.style.display =
                    "block";

                bringToFront(
                    hubWindow
                );

            }
        );


        hubClose.addEventListener(
            "click",
            () => {

                hubWindow.style.display =
                    "none";

            }
        );


        hubMinimize.addEventListener(
            "click",
            () => {

                hubWindow.style.display =
                    "none";

            }
        );


        hubMaximize.addEventListener(
            "click",
            () => {

                const maximized =
                    hubWindow.classList.toggle(
                        "maximized"
                    );

                hubMaximize.textContent =
                    maximized
                        ? "❐"
                        : "□";

            }
        );



        /* ==================================================
           WEATHER
        ================================================== */

        const weatherIcon =
            document.querySelector(
                "#weatherIcon"
            );

        const weatherClose =
            document.querySelector(
                "#weatherClose"
            );

        const weatherMinimize =
            document.querySelector(
                "#weatherMinimize"
            );

        const weatherMaximize =
            document.querySelector(
                "#weatherMaximize"
            );

        const weatherCity =
            document.querySelector(
                "#weatherCity"
            );

        const weatherSearchButton =
            document.querySelector(
                "#weatherSearchButton"
            );

        const weatherStatus =
            document.querySelector(
                "#weatherStatus"
            );

        const weatherTemperature =
            document.querySelector(
                "#weatherTemperature"
            );

        const weatherDescription =
            document.querySelector(
                "#weatherDescription"
            );

        const weatherEmoji =
            document.querySelector(
                "#weatherEmoji"
            );

        const weatherLocation =
            document.querySelector(
                "#weatherLocation"
            );

        const weatherHumidity =
            document.querySelector(
                "#weatherHumidity"
            );

        const weatherWind =
            document.querySelector(
                "#weatherWind"
            );

        const weatherRain =
            document.querySelector(
                "#weatherRain"
            );

        const weatherForecast =
            document.querySelector(
                "#weatherForecast"
            );



        const getWeatherDescription =
            (code) => {

                const weatherCodes = {

                    0: ["Clear sky", "☀️"],
                    1: ["Mainly clear", "🌤️"],
                    2: ["Partly cloudy", "⛅"],
                    3: ["Overcast", "☁️"],
                    45: ["Fog", "🌫️"],
                    48: ["Rime fog", "🌫️"],
                    51: ["Light drizzle", "🌦️"],
                    53: ["Drizzle", "🌦️"],
                    55: ["Heavy drizzle", "🌧️"],
                    61: ["Light rain", "🌦️"],
                    63: ["Rain", "🌧️"],
                    65: ["Heavy rain", "🌧️"],
                    71: ["Light snow", "🌨️"],
                    73: ["Snow", "❄️"],
                    75: ["Heavy snow", "❄️"],
                    80: ["Rain showers", "🌦️"],
                    81: ["Rain showers", "🌧️"],
                    82: ["Heavy rain showers", "⛈️"],
                    95: ["Thunderstorm", "⛈️"],
                    96: ["Thunderstorm + hail", "⛈️"],
                    99: ["Thunderstorm + hail", "⛈️"]

                };


                return (
                    weatherCodes[code] ||
                    ["Unknown", "🌡️"]
                );

            };



        const searchWeather =
            async () => {

                const city =
                    weatherCity.value.trim();


                if (!city) {

                    weatherStatus.textContent =
                        "Please enter a city.";

                    return;

                }


                weatherStatus.classList.remove(
                    "weather-error"
                );


                weatherStatus.textContent =
                    "Finding location...";


                try {

                    const geocodeURL =
                        `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=1&language=en&format=json`;


                    const geocodeResponse =
                        await fetch(
                            geocodeURL
                        );


                    if (
                        !geocodeResponse.ok
                    ) {

                        throw new Error(
                            "Could not find location."
                        );

                    }


                    const geocodeData =
                        await geocodeResponse.json();


                    if (
                        !geocodeData.results ||
                        geocodeData.results.length === 0
                    ) {

                        throw new Error(
                            "City not found."
                        );

                    }


                    const location =
                        geocodeData.results[0];


                    weatherStatus.textContent =
                        "Loading weather...";


                    const weatherURL =
                        `https://api.open-meteo.com/v1/forecast?latitude=${location.latitude}&longitude=${location.longitude}&current=temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max&forecast_days=5&timezone=auto`;


                    const weatherResponse =
                        await fetch(
                            weatherURL
                        );


                    if (
                        !weatherResponse.ok
                    ) {

                        throw new Error(
                            "Weather service unavailable."
                        );

                    }


                    const weatherData =
                        await weatherResponse.json();


                    displayWeather(
                        location,
                        weatherData
                    );

                }

                catch (error) {

                    weatherStatus.textContent =
                        error.message;

                    weatherStatus.classList.add(
                        "weather-error"
                    );

                }

            };



        const displayWeather =
            (
                location,
                weatherData
            ) => {

                const current =
                    weatherData.current;


                const weather =
                    getWeatherDescription(
                        current.weather_code
                    );


                weatherStatus.textContent =
                    "Weather updated successfully.";


                weatherStatus.classList.remove(
                    "weather-error"
                );


                weatherEmoji.textContent =
                    weather[1];


                weatherTemperature.textContent =
                    `${Math.round(current.temperature_2m)}°C`;


                weatherDescription.textContent =
                    weather[0];


                weatherLocation.textContent =
                    `${location.name}, ${location.country}`;


                weatherHumidity.textContent =
                    `${current.relative_humidity_2m}%`;


                weatherWind.textContent =
                    `${Math.round(current.wind_speed_10m)} km/h`;


                weatherRain.textContent =
                    `${weatherData.daily.precipitation_probability_max[0] ?? 0}%`;


                weatherForecast.innerHTML =
                    "";


                const daily =
                    weatherData.daily;


                for (
                    let i = 0;
                    i < daily.time.length;
                    i++
                ) {

                    const date =
                        new Date(
                            daily.time[i] +
                            "T12:00:00"
                        );


                    const day =
                        date.toLocaleDateString(
                            undefined,
                            {
                                weekday: "short"
                            }
                        );


                    const forecastWeather =
                        getWeatherDescription(
                            daily.weather_code[i]
                        );


                    const maxTemperature =
                        Math.round(
                            daily.temperature_2m_max[i]
                        );


                    const minTemperature =
                        Math.round(
                            daily.temperature_2m_min[i]
                        );


                    const rain =
                        daily.precipitation_probability_max[i]
                        ?? 0;


                    const card =
                        document.createElement(
                            "div"
                        );


                    card.className =
                        "forecast-card";


                    card.innerHTML = `

                        <div class="forecast-day">
                            ${day}
                        </div>

                        <div class="forecast-emoji">
                            ${forecastWeather[1]}
                        </div>

                        <div class="forecast-temperature">
                            ${maxTemperature}° /
                            ${minTemperature}°
                        </div>

                        <div class="forecast-rain">
                            🌧️ ${rain}%
                        </div>

                    `;


                    weatherForecast.appendChild(
                        card
                    );

                }

            };



        weatherIcon.addEventListener(
            "click",
            () => {

                weatherWindow.style.display =
                    "block";

                bringToFront(
                    weatherWindow
                );

                searchWeather();

            }
        );


        weatherSearchButton.addEventListener(
            "click",
            searchWeather
        );


        weatherCity.addEventListener(
            "keydown",
            (event) => {

                if (
                    event.key === "Enter"
                ) {

                    searchWeather();

                }

            }
        );


        weatherClose.addEventListener(
            "click",
            () => {

                weatherWindow.style.display =
                    "none";

            }
        );


        weatherMinimize.addEventListener(
            "click",
            () => {

                weatherWindow.style.display =
                    "none";

            }
        );


        weatherMaximize.addEventListener(
            "click",
            () => {

                const maximized =
                    weatherWindow.classList.toggle(
                        "maximized"
                    );

                weatherMaximize.textContent =
                    maximized
                        ? "❐"
                        : "□";

            }
        );



        /* ==================================================
           CALENDAR
        ================================================== */

        const calendarIcon =
            document.querySelector(
                "#calendarIcon"
            );

        const calendarClose =
            document.querySelector(
                "#calendarClose"
            );

        const calendarMinimize =
            document.querySelector(
                "#calendarMinimize"
            );

        const calendarMaximize =
            document.querySelector(
                "#calendarMaximize"
            );

        const calendarMonth =
            document.querySelector(
                "#calendarMonth"
            );

        const calendarDays =
            document.querySelector(
                "#calendarDays"
            );

        const previousMonth =
            document.querySelector(
                "#previousMonth"
            );

        const nextMonth =
            document.querySelector(
                "#nextMonth"
            );

        const todayButton =
            document.querySelector(
                "#todayButton"
            );


        const today =
            new Date();


        let calendarDate =
            new Date(
                today.getFullYear(),
                today.getMonth(),
                1
            );



        const renderCalendar =
            () => {

                const year =
                    calendarDate.getFullYear();

                const month =
                    calendarDate.getMonth();


                const monthName =
                    calendarDate.toLocaleDateString(
                        undefined,
                        {
                            month: "long",
                            year: "numeric"
                        }
                    );


                calendarMonth.textContent =
                    monthName;


                calendarDays.innerHTML =
                    "";


                const firstDay =
                    new Date(
                        year,
                        month,
                        1
                    ).getDay();


                const daysInMonth =
                    new Date(
                        year,
                        month + 1,
                        0
                    ).getDate();


                for (
                    let i = 0;
                    i < firstDay;
                    i++
                ) {

                    const emptyDay =
                        document.createElement(
                            "div"
                        );

                    emptyDay.className =
                        "calendar-day empty";

                    calendarDays.appendChild(
                        emptyDay
                    );

                }


                for (
                    let day = 1;
                    day <= daysInMonth;
                    day++
                ) {

                    const dayElement =
                        document.createElement(
                            "div"
                        );


                    dayElement.className =
                        "calendar-day";


                    dayElement.textContent =
                        day;


                    if (
                        day === today.getDate() &&
                        month === today.getMonth() &&
                        year === today.getFullYear()
                    ) {

                        dayElement.classList.add(
                            "today"
                        );

                    }


                    calendarDays.appendChild(
                        dayElement
                    );

                }

            };


        renderCalendar();



        previousMonth.addEventListener(
            "click",
            () => {

                calendarDate.setMonth(
                    calendarDate.getMonth() - 1
                );

                renderCalendar();

            }
        );


        nextMonth.addEventListener(
            "click",
            () => {

                calendarDate.setMonth(
                    calendarDate.getMonth() + 1
                );

                renderCalendar();

            }
        );


        todayButton.addEventListener(
            "click",
            () => {

                calendarDate =
                    new Date(
                        today.getFullYear(),
                        today.getMonth(),
                        1
                    );

                renderCalendar();

            }
        );


        calendarIcon.addEventListener(
            "click",
            () => {

                calendarWindow.style.display =
                    "block";

                bringToFront(
                    calendarWindow
                );

            }
        );


        calendarClose.addEventListener(
            "click",
            () => {

                calendarWindow.style.display =
                    "none";

            }
        );


        calendarMinimize.addEventListener(
            "click",
            () => {

                calendarWindow.style.display =
                    "none";

            }
        );


        calendarMaximize.addEventListener(
            "click",
            () => {

                const maximized =
                    calendarWindow.classList.toggle(
                        "maximized"
                    );

                calendarMaximize.textContent =
                    maximized
                        ? "❐"
                        : "□";

            }
        );


    }
);