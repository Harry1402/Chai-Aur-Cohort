const nameinput = document.getElementById("nameInput");
const jobinput = document.getElementById("jobInput");
const ageinput = document.getElementById("ageInput");
const bioinput = document.getElementById("bioInput");

const previewcard = document.querySelector(".preview-card");

const nameevent = document.getElementById("nameDisplay");
const jobevent =document.getElementById("jobDisplay");
const ageevent =document.getElementById('ageDisplay');
const bioevent =document.getElementById('bioDisplay');

// jobDisplay,ageDisplay ,bioDisplay

nameinput.addEventListener('input',(event)=>{
    // console.log('Live value:', event.target.value);
    nameevent.textContent = event.target.value ;
})

jobinput.addEventListener('input',(event)=>{
    // console.log('Live value:', event.target.value);
    jobevent.textContent = event.target.value ;
})

ageinput.addEventListener('input',(event)=>{
    // console.log('Live value:', event.target.value);
    ageevent.textContent = event.target.value ;
})

bioinput.addEventListener('input',(event)=>{
    // console.log('Live value:', event.target.value);
    bioevent.textContent = event.target.value ;
})

