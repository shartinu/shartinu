
let count = 0;
function playFart() {
    const audio = document.getElementById("fart-sound");
    audio.play();
    count++;
    document.getElementById("counter").innerText = count;
}
    