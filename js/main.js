// Query Selectors!!! :D
let soundIcons = document.querySelectorAll('.sound_icon'),
    dropZone = document.querySelectorAll('.drop_zone'),
    draggedIcon;
const resetButton = document.getElementById('resetButton');
const iconPanel = document.getElementById('icon_panel');
const playButton = document.getElementById('playButton');
const pauseButton = document.getElementById('pauseButton');
const rewindButton = document.getElementById('rewindButton');
const volSlider = document.getElementById('volumeControl');

// Array to store references to all playing audio elements
const dropZoneAudioList = []; 

// Drag and Drop Functions !!!! :D

// Drag Function
function handleStartDrag() {
    console.log('started dragging this icon:', this);
    draggedIcon = this;
}

// Drag over Drop Zone Function
function handleDragOver(e) {
    e.preventDefault();
    console.log('dragged over drop zone');
}

// Drop Function!!!
function handleDrop(e) {
    e.preventDefault();
    console.log('dropped something in drop zone');
    if (!this.querySelector('img')) {
        const clonedIcon = draggedIcon.cloneNode(true);
        draggedIcon.parentNode.removeChild(draggedIcon);
        this.appendChild(clonedIcon);
    } else {
        const existingIcon = this.querySelector('img');
        existingIcon.parentNode.removeChild(existingIcon);
        this.appendChild(draggedIcon);
    }
}

// Reset Function!!!
function resetImages() {
    // Remove all images from drop zone
    dropZone.forEach(zone => {
        zone.innerHTML = '';
    });

    // Append all images back to icon panel
    soundIcons.forEach(icon => {
        iconPanel.appendChild(icon);
    });

    // Reset the dropZoneAudioList array
    dropZoneAudioList.length = 0;
}

// Play Audio Function
function playAudio() {
    dropZone.forEach(zone => {
        const droppedImage = zone.querySelector('img');
        if (droppedImage) {
            const trackRef = droppedImage.getAttribute('data-trackref');
            if (trackRef) {
                const audioSrc = `assets/sounds/${trackRef}`;
                const audio = new Audio(audioSrc);
                audio.play();
                dropZoneAudioList.push(audio); // Store reference to the playing audio
            } else {
                console.error('Data-trackref attribute is missing or empty.');
            }
        } else {
            console.error('No image dropped in the drop zone.');
        }
    });
}

// Pause Audio Function!!!
function pauseAudio() {
    dropZoneAudioList.forEach(audio => {
        audio.pause();
    });
}

// Rewind Audio Function!!!
function restartAudio() {
    dropZoneAudioList.forEach(audio => {
        audio.currentTime = 0;
        audio.play();
    });
}

// Volume Slider Function!!!
function setVolume() {
    console.log(this.value);
    dropZoneAudioList.forEach(audio => {
        audio.volume = this.value / 100;
    });
}

// Event listeners!!! :D

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
