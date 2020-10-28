//ALERT BANNER

const alertBanner = document.getElementById('alert'); 

    // create the html for the banner
    alertBanner.innerHTML = 
        `
            <div class = "alert-banner">
                <p><strong>Alert:</strong> you have <strong>6</strong> overdue tasks to complete</p>
                <p class = "alert-banner-close">x</p>
            </div>
        `
    alertBanner.addEventListener('click', e => {
        const element = e.target; 
        if (element.classList.contains('alert-banner-close')) {
            alertBanner.style.display = 'none'; 
        }

    }); 
 
//MESSAGING SECTION 

const user = document.getElementById('userField'); 
const message = document.getElementById('messageField'); 
const send = document.getElementById('send'); 

send.addEventListener('click', () =>{
    // ensure user and message fields are filled out
    if (user.value === '' && message.value === '') { 
     alert("Please fill out user and message fields before sending");
    } else if (user.value === '') {
        alert ('Please fill out user field before sending');
    } else if (message.value === '') {
        alert('Please fill out message field before sending');
    } else {
        alert(`Message successfully sent to: ${user.value}`);
    }
    
});

//POPUP MENU FROM THE ALERT ICON

const iconBell = document.getElementById('icon-bell'); 
const notifications = document.getElementById('notifications');
const notifBanner = document.querySelectorAll('.notif-banner');
const notifAlert = document.getElementById('notifAlert'); 

let timesClicked = 0;  

iconBell.addEventListener('click', () =>{

    notifAlert.style.display = 'none'; 
    //create notif
    timesClicked++; 
    notifications.className = ('iconBell'); 
    notifications.innerHTML =
    `
        <div id = "notif1" class = "notif-banner">
            <p> <strong>Alex Truong</strong> liked your post</p>
            <p id = "del1" class = "alert-notif-close">x</p>
        </div>

        <div id = "notif2" class = "notif-banner">
            <p><strong>Alex Truong</strong> mentioned you in a comment</p>
            <p id = "del2" class = "alert-notif-close">x</p>
        </div>
    `

    //click the bell icon to show or hide the notifications
    if (timesClicked % 2 == 0){
        notifications.style.display = 'none'; 
    } else {
        notifications.style.display = 'block';
    }


    //click 'x' button to delete a notification
    const del1 = document.getElementById('del1'); 
    const del2 = document.getElementById('del2'); 
    const notif1 = document.getElementById('notif1'); 
    const notif2 = document.getElementById('notif2');   
    del1.addEventListener('click', e => {
        notif1.style.display = 'none'; 
    })
    del2.addEventListener('click', e => {
        notif2.style.display = 'none'; 
    })
    
})

//AUTOCOMPLETE FEATURE

const usersNames = [
    {name: 'Victoria Chambers'}, 
    {name: 'Dale Byrd'}, 
    {name: 'Dawn Wood'}, 
    {name: 'Dan Oliver'}
]; 

const searchInput = document.querySelector('.form-field'); 
const suggestionsPanel = document.querySelector('.suggestions'); 

searchInput.addEventListener('input', function(){
    const input = searchInput.value.toLowerCase(); 
    suggestionsPanel.innerHTML = ''; 
    const suggestions = usersNames.filter(function(usersName){
        return usersName.name.toLowerCase().includes(input); 
    }); 

    suggestions.forEach(function(suggested) {
        const div = document.createElement('div'); 
        div.innerHTML = suggested.name; 
        suggestionsPanel.appendChild(div); 
    }); 
    if(input == '') {
        suggestionsPanel.innerHTML = ''; 
    }

    //Click on a suggestion to replace the input with the suggestion
    const divs = document.querySelector('.suggestions').childNodes;
    for (let i = 0; i <divs.length; i++) {
        divs[i].addEventListener('click', e => {
            searchInput.value = e.target.textContent;
            for (let j = 0; j < divs.length; j++) {
                divs[j].style.display = 'none'; 
            } 
        })
    }
    
})



  
//LOCAL STORAGE

const toggle1 = document.getElementById('myonoffswitch'); 
const toggle2 = document.getElementById('myonoffswitch2'); 
const timeZone = document.getElementById('timezone'); 


    //Create const for saved values
    const switchPref1 = localStorage.getItem('switchPref1'); 
    const switchPref2 = localStorage.getItem('switchPref2'); 
    const timeZonePref = localStorage.getItem('timeZonePref')

    //Set value of ID basd on saved profile settings
    const loadSettings = function() {
        if (switchPref1 !== null) {
            toggle1.checked = (switchPref1 === 'true'); 
        }
        if (switchPref2 !== null) {
            toggle2.checked = (switchPref2 === 'true'); 
        }
        if (timeZonePref !== null) {
            timeZone.selected = (timeZonePref === 'true');
        }
    }


    // Check if localStorage is available

    function testStorage() {
        const test = 'test'; 
        try {
            localStorage.setItem(test, test); 
            localStorage.removeItem(test); 
            return true; 
        }   catch(e) {
            return false; 
        }
    }
  
    // Runs function if localStorage is enabled
    if(testStorage() === true) {
        // Save settings to local storage when save button pushed
        document.getElementById('save').addEventListener('click', function() {
            localStorage.setItem('switchPref1', toggle1.checked); 
            localStorage.setItem('switchPref2', toggle2.checked); 
            localStorage.setItem('timeZonePref', timeZone.selected)
            alert('Settings successfully saved!'); 
        }); 
        // Send all settings back to default values when cancel pushed
        document.getElementById('cancel').addEventListener('click', function(){
            const cancel = confirm('Are you sure you want to cancel changes?'); 

            if (cancel) {
                localStorage.setItem('switchPref1', toggle1.checked = null)
                localStorage.setItem('switchPref2', toggle2.checked = null)
                localStorage.setItem('timezonePref', timeZone.selected = null)
            }
        }); 

        // Run function to load correct settings
         loadSettings();

    }


   
    