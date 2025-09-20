const dragTarget = document.getElementById('drag');
const dropZone = document.getElementById('drop');

let offsetX, offsetY;

dragTarget.addEventListener('pointerdown', (e) => {
    offsetX = e.offsetX;
    offsetY = e.offsetY;
    dragTarget.setPointerCapture(e.pointerId);
});

dragTarget.addEventListener('pointermove', (e) => {
    if (dragTarget.hasPointerCapture(e.pointerId)) {
        dragTarget.style.position = 'absolute';
        dragTarget.style.left = (e.clientX - offsetX) + 'px';
        dragTarget.style.top = (e.clientY - offsetY) + 'px';
    }
});

dragTarget.addEventListener('pointerup', (e) => {
    dragTarget.releasePointerCapture(e.pointerId);
    const dragRect = dragTarget.getBoundingClientRect();
    const dropRect = dropZone.getBoundingClientRect();

    const isInside = (
        dragRect.left + dragRect.width/2 > dropRect.left &&
        dragRect.right - dragRect.width/2 < dropRect.right &&
        dragRect.top + dragRect.height/2 > dropRect.top &&
        dragRect.bottom - dragRect.height/2 < dropRect.bottom
    );

    if (isInside) {
        alert("Great job! Exercise completed!");
    } else {
        alert("Try again!");
    }
});

function resetExercise() {
    dragTarget.style.position = 'static';
}
