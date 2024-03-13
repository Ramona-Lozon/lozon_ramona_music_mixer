// Query Selectors!!! :D

let soundIcons = document.querySelectorAll('.sound_icon'),
    dropZone = document.querySelectorAll('.drop_zone'),
    draggedIcon;
const resetButton = document.getElementById('resetButton');
const iconPanel = document.getElementById('icon_panel');

// Functions !!!! :D

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