
const toogleButton = document.getElementById('toggleButton');

const statuspara = document.getElementById('status');

const bulb = document.getElementById('bulb');
const body = document.getElementById('body')

toogleButton.addEventListener("click", () => {
    console.log("inside event");

    if (bulb.classList.contains('off')) {
        bulb.classList.replace('off', "on");
        statuspara.textContent = 'Status: ONN';
        toogleButton.textContent = 'Turn OFF';
        body.classList.add("dark-mode");
    } else {
        bulb.classList.replace('on', 'off');
        statuspara.textContent = 'Status: OFF';
        toogleButton.textContent = 'Turn ON';
        body.classList.remove('dark-mode')
    }

})

