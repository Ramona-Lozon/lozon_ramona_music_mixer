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
//   bug fix required??
if(!this.querySelector('img'))this.appendChild(draggedIcon);
        this.appendChild(draggedPiece);
    }

// event listeners!!!

// drag item event listener
soundIcons.forEach(icon => icon.addEventListener('dragstart', handleStartDrag));

// dragover event listener
dropZone.forEach(zone => zone.addEventListener("dragover", handleDragOver));

// drop event listener
dropZone.forEach(zone => zone.addEventListener("drop", handleDrop));
