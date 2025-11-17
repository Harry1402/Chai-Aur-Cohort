
document.addEventListener('DOMContentLoaded', () => {
   
    const moodButtons = document.querySelectorAll('.mood-btn');
    const noteInput = document.getElementById('note');
    const saveButton = document.getElementById('save-btn');
    const todayMood = document.getElementById('today-mood');
    const saveMessage = document.getElementById('save-message');
    const body = document.body;

    let selectedMood = null;

    const moods = ['happy', 'sad', 'angry', 'tired', 'excited'];
    const savedMood = localStorage.getItem('mood'); 
    const savedNote = localStorage.getItem('note'); 
    const savedDate = localStorage.getItem('date'); 
    const today = new Date().toLocaleDateString();


    if (savedDate === today) {

        if (savedMood) {
            todayMood.innerHTML = `Your mood: <span>${savedMood}</span>`; 
            body.classList.remove(...moods); 
            body.classList.add(savedMood); 
        }

        if (savedNote) {
            noteInput.value = savedNote;
        }
    }


    moodButtons.forEach(button => {
        button.addEventListener('click', () => {

            selectedMood = button.dataset.mood;


            moodButtons.forEach(btn => btn.classList.remove('selected'));


            button.classList.add('selected');


            body.classList.remove(...moods);
            body.classList.add(selectedMood);
            
        });
    });

    
});