// Query Selectors!!! :D


let soundIcons = document.querySelectorAll('.sound_icon'),
    dropZone = document.querySelectorAll('.drop_zone'),
    draggedIcon;
const resetButton = document.getElementById('resetButton');
const iconPanel = document.getElementById('icon_panel');

// Drag and Drop Functions !!!! :D


// Drag Function
function handleStartDrag() { 
    console.log('started dragging this icon:', this);
    draggedIcon = this;
}

// Drag over Drop Zone Function
function handleDragOver(e) {
    e.preventDefault();
    console.log('dragged over me'); 
}

// Drop Function!!!
function handleDrop(e) { 
    e.preventDefault();
    console.log('dropped something on me');
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
}


// audio Functions!!! :D


// Play Audio Function
// function playAudio() {
//     const droppedImage = document.querySelector('.drop_zone img');
//     if (droppedImage) {
//         const trackRef = droppedImage.getAttribute('data-trackref');
//         if (trackRef) {
//             const audioSrc = `assets/sounds/${trackRef}`;
//             dropZoneAudio = new Audio(audioSrc);
//             dropZoneAudio.play();
//         } else {
//             console.error('Data-trackref attribute is missing or empty.');
//         }
//     } else {
//         console.error('No image dropped in the drop zone.');
//     }
// }

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
            } else {
                console.error('Data-trackref attribute is missing or empty.');
            }
        } else {
            console.error('No image dropped in the drop zone.');
        }
    });
}


// pause Audio Function!!!
function pauseAudio() {
    dropZoneAudio.pause();
}


// Rewind Audio Function!!!
function restartAudio() {
}

// Volume Slider Function!!!
function setVolume() {
}


// event listeners!!! :D


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