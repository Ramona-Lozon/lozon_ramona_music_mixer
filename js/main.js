// my code 

// query selectors
let soundIcons = document.querySelectorAll('.sound_icon'),
dropZone = document.querySelectorAll('.drop_zone'),
draggedIcon;

// Functions

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
    
// event listeners!!!

// drag item event listener
soundIcons.forEach(icon => icon.addEventListener('dragstart', handleStartDrag));

// dragover event listener
dropZone.forEach(zone => zone.addEventListener("dragover", handleDragOver));

// drop event listener
dropZone.forEach(zone => zone.addEventListener("drop", handleDrop));
