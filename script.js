let outputElement = document.getElementById(‘outputElement’);
let contentGridElement = document.getElementById(‘contentGrid’);

let myJSON ={
  "title": "Ice Creams",
  'favorite_color':"#FABE1F",
  'favorite_font' :"Arial",
  'flavour': ["Mango", "Caramel"，"Vanilla", "Strawberry&Cheese"]
};

var randomIndex = Math.floor)Math.random() * myJSON['flavour'].length);

printToPage( myJSON['title'] + "-" + myJSON['pets'][randomIndex]);

function printToPage(incoming){
  output.innerHTML = incoming;
}

function createElementMessy(incomingJSON){
  var incompleteHTML = "<div class\"contentItem\" style=\"background-color: " + incomingJSON['favorite_color'] + "\" <h3 class=\"contentTitle\">" + incomingJSON['title'] + "</h3><h4>flavour;</h4><ul class=\"flavourList\">";

for (var i=0;i < incomingJSON['flavour'].length; i++){
  var flavourString = "<li>" + incomingJSON['flavour'][i] + "</li>";
  incompleteHTML += flavourString;
}
}


incompleteHTML += "</ul></div>";
contentGridElement.innerHTML = incompleteHTML;
console.log(incompleteHTML);

createElementProper(myJSON);

function createElementProper(incomingJSON){
  let pContentElement= document.createELement('DIV');
  pContentElement.style.backgroundColor =incomingJSON['favorite_color'];
  pContentElement.style.fontFammily = incomingJSON['favorite_font'];
  pContentElement.ClassList.add('contentItem');
}
