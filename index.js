var numberOfDrumButtons = document.querySelectorAll(".drum").length;

// Detecting Button Press
for (var i = 0; i < numberOfDrumButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {

        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);

        switch (buttonInnerHTML) {
            case "w":
                var audio = new Audio("../Drum Kit Starting Files/sounds/tom-4.mp3");
                audio.play();
                break;

            case "a":
                var audio = new Audio("../Drum Kit Starting Files/sounds/tom-3.mp3");
                audio.play();
                break;

            case "s":
                var audio = new Audio("../Drum Kit Starting Files/sounds/tom-2.mp3");
                audio.play();
                break;

            case "d":
                var audio = new Audio("../Drum Kit Starting Files/sounds/tom-1.mp3");
                audio.play();
                break;

            case "j":
                var audio = new Audio("../Drum Kit Starting Files/sounds/snare.mp3");
                audio.play();
                break;

            case "k":
                var audio = new Audio("../Drum Kit Starting Files/sounds/kick-bass.mp3");
                audio.play();
                break;

            case "l":
                var audio = new Audio("../Drum Kit Starting Files/sounds/crash.mp3");
                audio.play();
                break;

            default: console.log(buttonInnerHTML);
                break;
        }
    });
};


// Detecting Keyboard Press (Callback function)
document.addEventListener("keydown", function (event) {
    makeSound(event.key);
    buttonAnimation(event.key);
});


function makeSound(key) {
    switch (key) {
        case "w":
            var audio = new Audio("../Drum Kit Starting Files/sounds/tom-4.mp3");
            audio.play();
            break;

        case "a":
            var audio = new Audio("../Drum Kit Starting Files/sounds/tom-3.mp3");
            audio.play();
            break;

        case "s":
            var audio = new Audio("../Drum Kit Starting Files/sounds/tom-2.mp3");
            audio.play();
            break;

        case "d":
            var audio = new Audio("../Drum Kit Starting Files/sounds/tom-1.mp3");
            audio.play();
            break;

        case "j":
            var audio = new Audio("../Drum Kit Starting Files/sounds/snare.mp3");
            audio.play();
            break;

        case "k":
            var audio = new Audio("../Drum Kit Starting Files/sounds/kick-bass.mp3");
            audio.play();
            break;

        case "l":
            var audio = new Audio("../Drum Kit Starting Files/sounds/crash.mp3");
            audio.play();
            break;

        default: console.log(buttonInnerHTML);
            break;
    }
}


// Adding Animation
function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function () {
        activeButton.classList.remove("pressed");
    }, 100);
}