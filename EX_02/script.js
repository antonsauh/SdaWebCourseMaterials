

window.onload = () => {

    if(window.location.href.includes('index.html')) {
        // here goes the code for the main page
    } else {
        //herre goes the code for other pages
    }
    document.getElementById("about-me").addEventListener('click', myFunction)
};

function myFunction() {
    window.open('about_me.html', '_self');
}

// let myFunction = function () {
//
// }
function goBackToMainPage() {
    window.open('index.html', '_self');
}