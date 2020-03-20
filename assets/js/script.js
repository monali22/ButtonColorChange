var buttons = document.getElementsByTagName('button');

var copyOfButtons = [];
for (let i = 0; i < buttons.length; i++) {
    copyOfButtons.push(buttons[i].classList[1]);
    console.log(buttons[i].classList[1]);
}

 console.log(copyOfButtons);

function btnChng(btnd) {
    if(btnd.value === 'red') {
        changeRed();
    }
    else if (btnd.value === 'green') {
        changeGreen();
    }
    else if (btnd.value === 'blue') {
        changeBlue();
    }
    else if (btnd.value === 'random') {
        changeRandom();
    }
    else if (btnd.value === 'reset') {
        reset();
    }
    else if (btnd.value === 'yellow') {
        changeYellow();
    }

}

function changeRed() {
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove(buttons[i].classList[1]);
        buttons[i].classList.add('btn-danger');
    }
}

function changeYellow() {
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove(buttons[i].classList[1]);
        buttons[i].classList.add('btn-warning');
    }
}

function changeGreen() {
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove(buttons[i].classList[1]);
        buttons[i].classList.add('btn-success');
    }
}

function changeBlue() {
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove(buttons[i].classList[1]);
        buttons[i].classList.add('btn-primary');
    }
}

function reset()  {
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove(buttons[i].classList[1]);
        buttons[i].classList.add(copyOfButtons[i]);
    }
}

function changeRandom() {
    var choices = ['btn-danger','btn-success','btn-primary','btn-warning'];
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove(buttons[i].classList[1]);
        buttons[i].classList.add(choices[Math.floor(Math.random()*3)]);
    }
}