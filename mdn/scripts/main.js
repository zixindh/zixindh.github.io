var myImage = document.querySelector('img');

myImage.onclick = function() {
  var mySrc = myImage.getAttribute('src');
  if(mySrc ==='images/atl.png'){
    myImage.setAttribute ('src','images/chi.png');
  }else{
    myImage.setAttribute('src','images/atl.png');
  }
  }
  var myButton = document.querySelector('button');
  var myHeading = document.querySelector('h1');

  function setUserName() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'This is Heng, ' + myName;
  }

  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    var storedName = localStorage.getItem('name');
    myHeading.innerHTML = 'This is Heng, ' + storedName;
  }

  myButton.onclick = function() {
    setUserName();
  }
