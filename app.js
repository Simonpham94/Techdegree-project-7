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

const names = [
    'Victoria Chambers', 
    'Dale Bryd', 
    'Dawn Wood', 
    'Dan Oliver'
]; 
  
// const userName = 
// document.getElementById('userField').addEventListener('input', e =>{
//     let userNameArray = []; 
//     if(e.target.value) {
//         userNameArray = names.filter(name => name.toLowerCase().includes(e.target.value)); 
//         // userNameArray = userNameArray.map(name =>`<li>${name}</li>`)
//     }; 
//     showUserNameArray(userNameArray); 
// })

// function showUserNameArray(userNameArray){
//     const html =  !userNameArray.length ? '' : userNameArray.join('');
    
// } 
const fruits = ['Apple', 'Orange', 'Mango', 'Watermelon', 'Kiwi', 'Banana', 'Grapes'];

document.getElementById('userField').addEventListener('input', (e)=>{
 
    let fruitsArray = [];
    
    if(e.target.value){
        fruitsArray = fruits.filter(fruit => fruit.toLowerCase().includes(e.target.value));
        fruitsArray = fruitsArray.map(fruit => `<li>${fruit}</li>`)
    }
 
    showFruitsArray(fruitsArray);
});
 
function showFruitsArray(fruitsArray){
    const html = !fruitsArray.length ? '' : fruitsArray.join('');
    document.querySelector('ul').innerHTML = html;
}





   
    