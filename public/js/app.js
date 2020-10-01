"use strict";
var drag = function (e) {
    console.log({ drag: e });
}, dragStart = function (e) {
    console.log({ dragStart: e });
}, dragEnter = function (e) {
    console.log({ dragEnter: e });
}, dragLeave = function (e) {
    console.log({ dragLeave: e });
}, dragOver = function (e) {
    console.log({ dragOver: e });
}, dragEnd = function (e) {
    console.log({ dragEnd: e });
}, drop = function (e) {
    console.log({ drop: e });
};
// Element Selector
var slider = document.querySelector('.featured');
// slider.addEventListener('drag', drag)
slider.addEventListener('dragstart', dragStart);
slider.addEventListener('dragenter', dragEnter);
slider.addEventListener('dragleave', dragLeave);
slider.addEventListener('dragover', dragOver);
slider.addEventListener('dragend', dragEnd);
slider.addEventListener('drop', drop);
