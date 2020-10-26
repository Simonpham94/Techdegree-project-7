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

//DROPDOWN MENU FROM THE ALERT ICON

const iconBell = document.getElementById('icon-bell'); 
const notifications = document.getElementById('notifications');
const notifBanner = document.querySelectorAll('.notif-banner');
let timesClicked = 0;  

iconBell.addEventListener('click', () =>{

    //create notif
    timesClicked++; 
    notifications.className = ('iconBell'); 
    notifications.innerHTML =
    `
        <div class = "notif-banner">
            <p> <strong>Alex Truong</strong> liked your post</p>
            <p class = "alert-notif-close">x</p>
        </div>

        <div class = "notif-banner">
            <p><strong>Alex Truong</strong> mentioned you in a comment</p>
            <p class = "alert-notif-close">x</p>
        </div>
    `
    //click the bell icon to show or hide the notifications
    if (timesClicked % 2 == 0){
        notifications.style.display = 'none'; 
    } else {
        notifications.style.display = 'block';
    }

})

    
for ( let i = 0; i < notifBanner.length; i++) {
    notifBanner[i].addEventListener('click', e => {
        const element = e.target; 
        if (element.classList.contains('alert-notif-close')) {
            notifBanner[i].style.display = 'none'; 
        }
    })
}
        
        





   
    