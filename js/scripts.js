// alert("Hello! I am an alert box!!");


// a <p> with red text that says “Hey I’m red!
var paraRed = document.createElement('p');
var position = document.querySelector('.content');
position.appendChild(paraRed);

paraRed.textContent = "make this paragraph red";
paraRed.style.color = 'red'; 

// an <h3> with blue text that says “I’m a blue h3!”
var headerBlue = document.createElement('h3');
var position = document.querySelector('.content');
position.appendChild(headerBlue);

headerBlue.textContent = "I'm a blue h3!";
headerBlue.style.color = 'blue';

// <!-- a <div> with a black border and pink background color 
// with the following elements inside of it:
// another <h1> that says “I’m in a div”
var newDiv = document.createElement('div')
var positionDiv = document.querySelector('body');

positionDiv.appendChild(newDiv);
newDiv.style.cssText = 'border: 1px black solid; background: pink; width: 300px; height: 300px;';
newDiv.setAttribute('id', 'yolo');

var headerPink = document.createElement('h1');
var positionPink = document.querySelector('#yolo');
headerPink.textContent = "im in the div!"

var paraPink = document.createElement('p');
paraPink.textContent = "me too!"


positionPink.appendChild(headerPink);
positionPink.appendChild(paraPink);



