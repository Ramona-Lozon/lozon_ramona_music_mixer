// let theButtons = document.querySelectorAll("#crickets", "#fire", "#frog", "#rainwater", "#stream", "#wind"),
// 	soundIcon = document.querySelectorAll("#crickets", "#fire", "#frog", "#rainwater", "#stream", "#wind"),
// 	dropZone = document.querySelectorAll('.drop_zone'),
//     draggedPiece;

//     function handleStartDrag() { 
//         console.log('started dragging this piece:', this);
//         draggedPiece = this;
//     }

//     function handleDragOver(e) {
//         e.preventDefault();
//         console.log('dragged over me'); 
//     }

//     function handleDrop(e) { 
//         e.preventDefault();
//         console.log('dropped something on me');
// //   bug fix required??
//         this.appendChild(draggedPiece);
//     }

//     // drag event handling
// soundIcon.forEach(piece => piece.addEventListener("dragstart", handleStartDrag));

// // dragover and the drop event
// dropZone.forEach(zone => zone.addEventListener("dragover", handleDragOver));

// // drop event handling
// dropZone.forEach(zone => zone.addEventListener("drop", handleDrop));


// my code 
// let soundIcons = document.querySelectorAll('.sound_icon'),
// dropZone = document.querySelectorAll('.drop_zone'),
// draggedIcon;

// // Functions
//     function handleStartDrag() { 
//         console.log('started dragging this icon:', this);
//         draggedIcon = this;
//     }

//     function handleDragOver(e) {
//         e.preventDefault();
//         console.log('dragged over me'); 
//     }

//     function handleDrop(e) { 
//         e.preventDefault();
//         console.log('dropped something on me');
// //   bug fix required??
//         this.appendChild(draggedPiece);
//     }

//     // event listeners
// soundIcons.forEach(icon => icon.addEventListener('dragstart', handleStartDrag));

// // dragover and the drop event
// dropZone.forEach(zone => zone.addEventListener("dragover", handleDragOver));

// // drop event handling
// dropZone.forEach(zone => zone.addEventListener("drop", handleDrop));



// chatgpt code
let soundIcons = document.querySelectorAll('.sound_icon'),
    dropZone = document.querySelector('.drop_zone'),
    draggedIcon;

// Functions
function handleStartDrag() {
    console.log('started dragging this icon:', this);
    draggedIcon = this;
}

function handleDragOver(e) {
    e.preventDefault();
    console.log('dragged over me');
}

function handleDrop(e) {
    e.preventDefault();
    console.log('dropped something on me');
    if(!this.querySelector('img'))this.appendChild(draggedIcon);
    // must fix so new dragged pieces are also added to drop zone
} 

// Event listeners
soundIcons.forEach(icon => {
    icon.setAttribute('draggable', 'true');
    icon.addEventListener('dragstart', handleStartDrag);
});

dropZone.addEventListener("dragover", handleDragOver);
dropZone.addEventListener("drop", handleDrop);


