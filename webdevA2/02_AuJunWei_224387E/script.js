
// Show Contact

function ShowContact()
{
  document.getElementById("HomePage").style.display = "none";
  document.getElementById("AboutPage").style.display = "none";
  document.getElementById("ContactForm").style.display = "block";

  }

// Show Home

function ShowHome()
{
  
  document.getElementById("HomePage").style.display = "block";
  document.getElementById("AboutPage").style.display = "none";
  document.getElementById("ContactForm").style.display = "none";
}

//Show About

function ShowAbout()
{
  document.getElementById("HomePage").style.display = "none";
  document.getElementById("AboutPage").style.display = "block";
  document.getElementById("ContactForm").style.display = "none";
}

//Hover Bleach Image and PopUp

var bleachPopup = document.getElementById("bleach-popup");
var bleachImage = document.getElementById("bleach");

bleachImage.addEventListener("mouseover", function() {
  bleachPopup.style.position = "absolute";
  bleachPopup.style.top = bleachImage.offsetTop + "px";
  // change `left` to `right` to make the popup appear to the right of the image
  bleachPopup.style.left = bleachImage.offsetLeft + "px";
  bleachPopup.style.display = "block";
});

bleachImage.addEventListener("mouseout", function() {
  bleachPopup.style.display = "none";
});

//Hover Boruto Image and PopUp

var borutoPopup = document.getElementById("boruto-popup");
var borutoImage = document.getElementById("boruto");

borutoImage.addEventListener("mouseover", function() {
  borutoPopup.style.position = "absolute";
  borutoPopup.style.top = borutoImage.offsetTop + "px";
  borutoPopup.style.left = borutoImage.offsetLeft + "px";
  borutoPopup.style.display = "block";
});

borutoImage.addEventListener("mouseout", function() {
  borutoPopup.style.display = "none";
});


//Hover Hell Image and PopUp

var hellPopup = document.getElementById("hell-popup");
var hellImage = document.getElementById("hell");

hellImage.addEventListener("mouseover", function() {
  hellPopup.style.position = "absolute";
  hellPopup.style.top = hellImage.offsetTop + "px";
  hellPopup.style.left = hellImage.offsetLeft + "px";
  hellPopup.style.display = "block";
});

hellImage.addEventListener("mouseout", function() {
  hellPopup.style.display = "none";
});

//Hover Kimetsu Image and PopUp

var kimetsuPopup = document.getElementById("kimetsu-popup");
var kimetsuImage = document.getElementById("kimetsu");

kimetsuImage.addEventListener("mouseover", function() {
  kimetsuPopup.style.position = "absolute";
  kimetsuPopup.style.top = kimetsuImage.offsetTop + "px";
  kimetsuPopup.style.left = kimetsuImage.offsetLeft + "px";
  kimetsuPopup.style.display = "block";
});

kimetsuImage.addEventListener("mouseout", function() {
  kimetsuPopup.style.display = "none";
});

//Hover One Image and PopUp

var onePopup = document.getElementById("one-popup");
var oneImage = document.getElementById("one");

oneImage.addEventListener("mouseover", function() {
  onePopup.style.position = "absolute";
  onePopup.style.top = oneImage.offsetTop + "px";
  onePopup.style.left = oneImage.offsetLeft + "px";
  onePopup.style.display = "block";
});

oneImage.addEventListener("mouseout", function() {
  onePopup.style.display = "none";
});

//Hover Hero Image and PopUp

var heroPopup = document.getElementById("hero-popup");
var heroImage = document.getElementById("hero");

heroImage.addEventListener("mouseover", function() {
  heroPopup.style.position = "absolute";
  heroPopup.style.top = heroImage.offsetTop + "px";
  heroPopup.style.left = heroImage.offsetLeft + "px";
  heroPopup.style.display = "block";
});

heroImage.addEventListener("mouseout", function() {
  heroPopup.style.display = "none";
});

//Hover Slime Image and PopUp

var slimePopup = document.getElementById("slime-popup");
var slimeImage = document.getElementById("slime");

slimeImage.addEventListener("mouseover", function() {
  slimePopup.style.position = "absolute";
  slimePopup.style.top = slimeImage.offsetTop + "px";
  slimePopup.style.left = slimeImage.offsetLeft + "px";
  slimePopup.style.display = "block";
});

slimeImage.addEventListener("mouseout", function() {
  slimePopup.style.display = "none";
});

//Hover Vinland Image and PopUp

var vinlandPopup = document.getElementById("vinland-popup");
var vinlandImage = document.getElementById("vinland");

vinlandImage.addEventListener("mouseover", function() {
  vinlandPopup.style.position = "absolute";
  vinlandPopup.style.top = vinlandImage.offsetTop + "px";
  vinlandPopup.style.left = vinlandImage.offsetLeft + "px";
  vinlandPopup.style.display = "block";
});

vinlandImage.addEventListener("mouseout", function() {
  vinlandPopup.style.display = "none";
});