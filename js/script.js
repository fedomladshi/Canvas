"use strict";
let flagMove = false;
let flagTransform = false;
let flagPaintBucket = false;
let flagChooseColor = '#cccccc';
let FlagDrag = 1;

const field1 = document.getElementById('thing1');
const field2 = document.getElementById('thing2');
const field3 = document.getElementById('thing3');
const field4 = document.getElementById('thing4');
const field5 = document.getElementById('thing5');
const field6 = document.getElementById('thing6');
const field7 = document.getElementById('thing7');
const field8 = document.getElementById('thing8');
const field9 = document.getElementById('thing9');

let dragImage = null;
let dragShiftX;
let dragShiftY;

field1.addEventListener('mouseover', mouseOver, false);
field1.addEventListener('mouseout', mouseOut, false);
field1.addEventListener('mousedown', dragStart, false);
field1.addEventListener('click', circle, false);

field2.addEventListener('mouseover', mouseOver, false);
field2.addEventListener('mouseout', mouseOut, false);
field2.addEventListener('mousedown', dragStart, false);
field2.addEventListener('click', circle, false);

field3.addEventListener('mouseover', mouseOver, false);
field3.addEventListener('mouseout', mouseOut, false);
field3.addEventListener('mousedown', dragStart, false);
field3.addEventListener('click', circle, false);


field4.addEventListener('mouseover', mouseOver, false);
field4.addEventListener('mouseout', mouseOut, false);
field4.addEventListener('mousedown', dragStart, false);
field4.addEventListener('click', circle, false);


field5.addEventListener('mouseover', mouseOver, false);
field5.addEventListener('mouseout', mouseOut, false);
field5.addEventListener('mousedown', dragStart, false);
field5.addEventListener('click', circle, false);

field6.addEventListener('mouseover', mouseOver, false);
field6.addEventListener('mouseout', mouseOut, false);
field6.addEventListener('mousedown', dragStart, false);
field6.addEventListener('click', circle, false);

field7.addEventListener('mouseover', mouseOver, false);
field7.addEventListener('mouseout', mouseOut, false);
field7.addEventListener('mousedown', dragStart, false);
field7.addEventListener('click', circle, false);


field8.addEventListener('mouseover', mouseOver, false);
field8.addEventListener('mouseout', mouseOut, false);
field8.addEventListener('mousedown', dragStart, false);
field8.addEventListener('click', circle, false);

field9.addEventListener('mouseover', mouseOver, false);
field9.addEventListener('mouseout', mouseOut, false);
field9.addEventListener('mousedown', dragStart, false);
field9.addEventListener('click', circle, false);



var chooseColor = document.getElementById('chooseColor');
var color = chooseColor.value;
chooseColor.addEventListener('input', function(){
    document.getElementById('oldAnotherColor').style.backgroundColor = document.getElementById('oldColor').style.backgroundColor;
    document.getElementById('oldColor').style.backgroundColor = document.getElementById('prevColor').style.backgroundColor;
    document.getElementById('prevColor').style.backgroundColor = document.getElementById('currentColor').style.backgroundColor;
    document.getElementById('currentColor').style.backgroundColor = chooseColor.value;
    flagChooseColor = chooseColor.value;
}, false);

function circle(EO){
    if(flagTransform){
        EO = EO || window.event;
        var computedStyle = getComputedStyle(EO.target);
        if(computedStyle.borderRadius === "0%"){
            EO.target.style.borderRadius = "50%";
        }else{
            EO.target.style.borderRadius = "0%";
        }
    }
    if(flagPaintBucket){
        EO = EO || window.event;
        var computedStyle = getComputedStyle(EO.target);

        console.log(this);

        EO.target.style.backgroundColor = flagChooseColor;
    }
}

function mouseOver(EO) {
    EO = EO || window.event;
}

function mouseOut(EO) {
    EO = EO || window.event;
}

function dragStart (EO) {
    if (flagMove == true) {
        document.body.style.cursor = 'pointer';
        EO = EO || window.event;
        dragImage = EO.target;
        dragImage.ondragstart = function() {
            return false;
        }
        console.log(EO);
FlagDrag = FlagDrag+1;

        dragImage.style.zIndex = FlagDrag;

        dragImage.style.position = 'absolute';
        var mouseX = EO.pageX;
        var mouseY = EO.pageY;
        var imageX = dragImage.offsetLeft;
        var imageY = dragImage.offsetTop;
        dragShiftX = mouseX - imageX;
        dragShiftY = mouseY - imageY;
        window.onmousemove = dragMove;
        window.onmouseup = dragStop;
    }  
}

function dragMove (EO) {
    EO = EO || window.event;
    var mouseX = EO.pageX;
    var mouseY = EO.pageY;
    var imageX = mouseX - dragShiftX;
    var imageY = mouseY - dragShiftY;
    document.body.style.cursor = 'pointer';
    dragImage.style.left = imageX + "px";
    dragImage.style.top = imageY + "px";
}

function dragStop () {
    document.body.style.cursor = 'default';
    window.onmousemove = null;
    window.onmouseup = null;
}

