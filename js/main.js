// my code 

// query selectors

let soundIcons = document.querySelectorAll('.sound_icon'),
    dropZone = document.querySelectorAll('.drop_zone'),
    draggedIcon;
const resetButton = document.getElementById('resetButton');
const iconPanel = document.getElementById('icon_panel');

// Audio Query Selectors
playButton = document.querySelector('#playButton'),
pauseButton = document.querySelector('#pauseButton'),
rewindButton = document.querySelector('#rewindButton'),
volSlider = document.querySelector('#volumeControl'),
volAmount = document.querySelector('#volumeAmt');

// Drag and Drop Functions!!! :D

// drag item function
function handleStartDrag() { 
    console.log('started dragging this icon:', this);
    draggedIcon = this;
}

// drag over drop zone function
function handleDragOver(e) {
    e.preventDefault();
    console.log('dragged over me'); 
}

// drop item in container function
function handleDrop(e) { 
    e.preventDefault();
    console.log('dropped something on me');

    // If there is no image already in the drop zone
    if (!this.querySelector('img')) {
        // Clone the dragged icon
        const clonedIcon = draggedIcon.cloneNode(true);
        // Remove the original icon from the icon panel
        draggedIcon.parentNode.removeChild(draggedIcon);
        // Append the cloned icon to the drop zone
        this.appendChild(clonedIcon);
    } else {
        // If there is already an image in the drop zone, replace it with the dragged icon
        const existingIcon = this.querySelector('img');
        // Remove the existing icon from the drop zone
        existingIcon.parentNode.removeChild(existingIcon);
        // Append the dragged icon to the drop zone
        this.appendChild(draggedIcon);
    }
}

// Reset Function
function resetImages() {
    // Remove all images from drop zone
    dropZone.forEach(zone => {
        zone.innerHTML = '';
    });

    // Append all images back to icon panel
    soundIcons.forEach(icon => {
        iconPanel.appendChild(icon);
    });
}

// music finctions!!! :D

function playAudio() {
    dropZoneAudio.play();
}
function restartAudio() {
    dropZoneAudio.currentTime = 0;
    playAudio();
}
function pauseAudio() {
    dropZoneAudio.pause();
}

function displayVolume() {
    volAmount.innerText = volSlider.value;
}

displayVolume();

function setVolume() {
    console.log(this.value);
    dropZoneAudio.volume = this.value / 100;
    // need to debug this so that the input slider matches the volume output
    displayVolume();
}

// event listeners!!!

// drag item event listener
soundIcons.forEach(icon => icon.addEventListener('dragstart', handleStartDrag));

// dragover event listener
dropZone.forEach(zone => zone.addEventListener("dragover", handleDragOver));

// drop event listener
dropZone.forEach(zone => zone.addEventListener("drop", handleDrop));

// Event listener for reset button
resetButton.addEventListener('click', resetImages);

//play button event listener
playButton.addEventListener('click', playAudio);

//rewind button event listener
rewindButton.addEventListener('click', restartAudio);

//pause button event listener
pauseButton.addEventListener('click', pauseAudio);

//volume slider event listener
volSlider.addEventListener('input', setVolume);

