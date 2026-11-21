// get all the tabs and all the pages

const tabs = document.querySelectorAll(".tab");

const pages = document.querySelectorAll(".page");



// shows the page at a position and highlights its tab
function showPage(number) {

    // hide every page and unhighlight every tab
    for (let i = 0; i < pages.length; i++) {
        pages[i].classList.remove("active");
        tabs[i].classList.remove("active");
    }



    // show the page and highlight the tab at that position
    pages[number].classList.add("active");
    tabs[number].classList.add("active");

    // if we leave the Call page which is at position 0, pause the video
    if (number !== 0) {

        document.getElementById("call-video").pause();
    }
}

// when a tab is clicked, show the page in the same position
for (let i = 0; i < tabs.length; i++) {

    tabs[i].addEventListener("click", function () {
        showPage(i);
    });
}



