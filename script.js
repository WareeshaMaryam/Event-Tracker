// part 1 Click Event
let ButtonOne = document.getElementById('button1');
let count = document.getElementById('count');
let incree = 0;
ButtonOne.addEventListener('click', function () {
    incree++;
    count.innerText = `Click count: ${incree}`;
})



//part 2 Mouse Event
let mouseBox = document.getElementById('box');
let result1 = document.getElementById('result1');

mouseBox.addEventListener('mousemove', function (position) {
    let X = position.clientX;
    let Y = position.clientX;
    result1.innerText = `Mouse Position: (${X} , ${Y})`
})



//part 3 Keyboard Event
let Key = document.getElementById('key');
let response = document.getElementById('response');
Key.addEventListener('keydown', function (keyPress) {
    response.innerText = `${keyPress.key}`
})



//part 4 Focus or Blur Event
let Key1 = document.getElementById('key1');
let response1 = document.getElementById('response1');
Key1.addEventListener('focusin', function () {
    response1.innerText = `focused`;
})
Key1.addEventListener('focusout', function () {
    response1.innerText = `not focused`;
})



//part 5 Window Resize Events
let widthouput = document.getElementById('width#');
let heightouput = document.getElementById('height#');
function size() {
    widthouput.innerText = window.innerWidth;
    heightouput.innerText = window.innerHeight;
}
size();
window.onresize = size;



//part 5 Touch Events
let touchBox = document.getElementById('box2');
let touchUpdate = document.getElementById('touchUpdate');
touchBox.addEventListener('touchstart', function (event) {
    let firstTouch = event.touches[0];
    touchUpdate.innerText = `Touch Position: (${firstTouch.clientX}, ${firstTouch.clientY})`;
});



//part 6 Form Submit Events
let submitForm = document.getElementById('form')
submitForm.addEventListener('submit', function (e) {
    e.preventDefault();
    document.getElementById('status').innerText = `Form Status: Submited`;
});


//part 7 Drag & Drop Event
let dragg = document.getElementById('dragArea');
let dropp = document.getElementById('dropArea');
let statuss = document.getElementById('status1');
//drag start
dragg.addEventListener('dragstart', function () {
    statuss.textContent = `start dragging`
})
//drag over
dropp.addEventListener('dragover', function (e) {
    e.preventDefault()
    statuss.textContent = `dragging over`
})
//drop
dropp.addEventListener('drop', function () {
    statuss.textContent = `dropped successfully`
    dropp.style.border = "2px double green";
})



//part 8 MediaEvent
let videoUpdate = document.getElementById('videoo');
videoUpdate.addEventListener('play', function () {
    status2.textContent = `playing`
})
videoUpdate.addEventListener('pause', function () {
    status2.textContent = `paused`
})
videoUpdate.addEventListener('ended', function () {
    status2.textContent = `ended`
})




















// let para = document.getElementsByTagName("p")[3];
//         para.style.width = "15rem";
//         para.style.height = "15rem";
//         para.style.border = "2px solid pink";
//         para.style.borderRadius = "8px";
//         para.style.backgroundColor = "palevioletred ";
//         para.style.textAlign = "center ";
//         para.style.display = "flex";
//         para.style.alignItems = "center";
//         para.style.color = "white";
//         para.style.boxShadow = "2px 20px 2px 2px grey"
