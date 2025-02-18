//motion path visualization
const mySVG = document.getElementsByTagName("svg")[0];

if (typeof tl !== 'undefined') {
    tl.eventCallback("onUpdate", showFrame);
    tl.seek(0)
    tl.pause()
}

// create a new p element and append it after the element with id="prompt"
let frameCount = document.getElementById("frame-count");
let frameNum = 0;
frameCount.textContent = `frame: 0 / ${tl.totalDuration() * 60}`;

function showFrame() {
    frameNum = Math.floor(tl.time() * 60);
    frameCount.textContent = `frame: ${frameNum} / ${tl.totalDuration() * 60}`;
}

function play() {
    tl.seek(0)
    tl.play()
}
