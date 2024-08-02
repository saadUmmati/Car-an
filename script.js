

const button1 = document.getElementById("btn1");
const button2 = document.getElementById("btn2");
const mainMenu = document.getElementById("mainMenuId");
const sticky = mainMenu.offsetTop;


if(window.innerWidth >= 624){
    window.onscroll = function(){
        if(window.screenY >= sticky){
                mainMenu.classList.add("sticky");
        }
        else{
            mainMenu.classList.remove("sticky");
        }
    }
}
else if(window.innerWidth < 624){
    mainMenu.classList.remove("sticky");
}


function toggleMenu() {
    // Toggle visibility of menu and buttons
    if (mainMenu.classList.contains('showMenu')) {
        mainMenu.classList.remove('showMenu');
        mainMenu.classList.add('hideMenu');
        button1.classList.remove('hideMenu');
        button1.classList.remove('btn');
        button1.classList.add('showMenu');
        button2.classList.remove('showMenu');
        button2.classList.remove('btn-2');
        button2.classList.add('hideMenu');
    } else {
        mainMenu.classList.remove('hideMenu');
        mainMenu.classList.add('showMenu');
        button1.classList.add('hideMenu');
        button2.classList.remove('hideMenu');
        button2.classList.remove('.btn-2');
        button2.classList.add('showMenu');
    }
}

// Event listeners for buttons
button1.addEventListener('click', toggleMenu);
button2.addEventListener('click', toggleMenu);
