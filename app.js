//sounds
let boom = document.getElementById("boom");
let clap = document.getElementById("clap");
let hihat = document.getElementById("hihat");
let kick = document.getElementById("kick");
let openhat = document.getElementById("openhat");
let ride = document.getElementById("ride");
let snare = document.getElementById("snare");
let tink = document.getElementById("tink");
let tom = document.getElementById("tom");

// document.addEventListener('keypress', (event) => { //here i have targetted the event in the parameter and selected the keypress event
//     console.log(event)
// })

document.addEventListener('keypress', (keyValue) => { //i have included a keyValue parameter as i want to target the key.code in the function
    const selectedKey = document.getElementsByClassName(`${keyValue.key}`)[0] //this means that we are connected to the divs aka key in html. the 0 will return the first thing thats inside the array, wich is the div with text inside 
    selectedKey.style.backgroundColor = '#fdd835'
    setTimeout(() => {
        selectedKey.style.backgroundColor = '#e0e0e0'
    }, 500 //half a second
    )

    if (keyValue.keyCode == 97) {
        boom.pause()
        boom.currentTime = 0
        boom.play();
    } else if (keyValue.keyCode == 115) {
        clap.pause()
        clap.currentTime = 0
        clap.play();
    } else if (keyValue.keyCode == 100) {
        hihat.pause()
        hihat.currentTime = 0
        hihat.play();
    } else if (keyValue.keyCode == 102) {
        kick.pause()
        kick.currentTime = 0
        kick.play();
    } else if (keyValue.keyCode == 103) {
        openhat.pause()
        openhat.currentTime = 0
        openhat.play();
    } else if (keyValue.keyCode == 104) {
        ride.pause()
        ride.currentTime = 0
        ride.play();
    } else if (keyValue.keyCode == 106) {
        snare.pause()
        snare.currentTime = 0
        snare.play();
    } else if (keyValue.keyCode == 107) {
        tink.pause()
        tink.currentTime = 0
        tink.play();
    } else if (keyValue.keyCode == 108) {
        tom.pause()
        tom.currentTime = 0
        tom.play();
    }
})

