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
    myHeading.innerHTML = 'I have been mostly working in data analysis to generate insights for operation or sales team to reach KPI., ' + myName;
  }

  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    var storedName = localStorage.getItem('name');
    myHeading.innerHTML = 'Mozilla is cool, ' + storedName;
  }

  myButton.onclick = function() {
    setUserName();
  }
