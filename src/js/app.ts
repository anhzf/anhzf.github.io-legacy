var
    drag = function (e: DragEvent) {
        console.log({ drag: e })
    },
    dragStart = function (e: DragEvent) {
        console.log({ dragStart: e })
    },
    dragEnter = function (e: DragEvent) {
        console.log({ dragEnter: e })
    },
    dragLeave = function (e: DragEvent) {
        console.log({ dragLeave: e })
    },
    dragOver = function (e: DragEvent) {
        console.log({ dragOver: e })
    },
    dragEnd = function (e: DragEvent) {
        console.log({ dragEnd: e })
    },
    drop = function (e: DragEvent) {
        console.log({ drop: e })
    }


// Element Selector
var slider = document.querySelector('.featured') as HTMLDivElement;

// slider.addEventListener('drag', drag)
slider.addEventListener('dragstart', dragStart)
slider.addEventListener('dragenter', dragEnter)
slider.addEventListener('dragleave', dragLeave)
slider.addEventListener('dragover', dragOver)
slider.addEventListener('dragend', dragEnd)
slider.addEventListener('drop', drop)
