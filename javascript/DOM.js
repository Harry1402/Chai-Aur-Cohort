// function ChangeBackgroundBlack() {
//     document.body.style.backgroundColor = 'black'
// }
// function ChangeBackgroundWhite() {
//     document.body.style.backgroundColor = 'White'
// }
// function ChangeBackgroundColor(color) {
//     document.body.style.backgroundColor = color
// }

const ThemeButton = document.getElementById('Theme-button')

ThemeButton.addEventListener("click", () => {
    // document.body.style.backgroundColor = 'black'

    const Themecolr = document.body.style.backgroundColor;

    if (!Themecolr || Themecolr === "white") {
        document.body.style.backgroundColor = 'black'
    }
    else {
        document.body.style.backgroundColor = 'white'
    }

})