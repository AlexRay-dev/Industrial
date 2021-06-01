// /* Example-tabs */
// const tabsExampleBtn = document.querySelectorAll(".map__item");
// const tabsExampleItem = document.querySelectorAll(".map__tabs-item");

// tabsExampleBtn.forEach(onTabBtnClick)

// function onTabBtnClick(item) {
//     item.addEventListener('click', function () {
//         let currentBtn = item;
//         let tabId = currentBtn.getAttribute("data-tab");
//         let currentTab = document.querySelector(tabId)

//         if (!currentBtn.classList.contains("map__item--active")) {
//             tabsExampleBtn.forEach(function (item) {
//                 item.classList.remove("map__item--active")
//             });

//             tabsExampleItem.forEach(function (item) {
//                 item.classList.remove("map__tabs-item--active")
//             });

//             currentBtn.classList.add("map__item--active");
//             currentTab.classList.add("map__tabs-item--active")
//         };
//     });
// };
// /* Example-tabs */



/* Example-tabs */
const tabsExampleBtn = document.querySelectorAll(".map__item");
const tabsExampleItem = document.querySelectorAll(".map__tabs-item");

tabsExampleBtn.forEach(onTabBtnClick)

function onTabBtnClick(item) {
    item.addEventListener('mouseover', function () {
        let currentBtn = item;
        let tabId = currentBtn.getAttribute("data-tab");
        let currentTab = document.querySelector(tabId)


            currentBtn.classList.add("map__item--active");
            currentTab.classList.add("map__tabs-item--active")
    });
    item.addEventListener('mouseout', function () {
        let currentBtn = item;
        let tabId = currentBtn.getAttribute("data-tab");
        let currentTab = document.querySelector(tabId)


            currentBtn.classList.remove("map__item--active");
            currentTab.classList.remove("map__tabs-item--active")
    });
};
/* Example-tabs */
