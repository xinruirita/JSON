let myJSONDatabase = [

  {
    "title": "Ice Cream",
    "favorite_color":"#FABE1F",
    "flavour":["Mango", "Caramel","Vanilla"],
  },
  {
    "title" : "Cake",
    "favorite_color":"#FABE1F",
    "flavour":["Chocolate","Cheese","Cream"],
  },
  {
    "title": "Drink",
    "favorite_color":"#FABE1F",
    "flavour":["Fruit Tea","Boba Tea","Vanilla Latte"],
  }

];

for (var i=0; i< myJSONDatabase.length; i++) {
  createElementProper(myJSONDatabase[i]);
}

for (var i=0;i < incomingJSON['flavour'].length; i++){
  var flavourString = "<li>" + incomingJSON['flavour'][i] + "</li>";
  incompleteHTML += flavourString;
}

incompleteHTML += "</ul></div>";
contentGridElement.innerHTML = incompleteHTML;
console.log(incompleteHTML);

createElementProper(myJSON);

function createElementProper(incomingJSON){
  let contentElement= document.createELement("DIV");
  contentElement.style.backgroundColor =incomingJSON['favorite_color'];
  contentElement.style.fontFammily = incomingJSON['favorite_font'];
  contentElement.ClassList.add('contentItem');


let contentHeading = document.createElement('H1');
contentHeading.classList,add('contentTitle');
pContentHeading.innerText = incomingJSON['title'];
pContentELement.appendChild(pContentHeading);

let contentSubhead = document.createElement('H4');
contentSubhead.innerText = "flavour:";
contentELement.appendChild(pContentSubhead);

let contentFlavourList = document.createElement('UL');
contentELement.appendChild(pContentFlavourList);

for (var i=0;i,incomingJSON['flavour'].length;i++){
  var currentFlavourString = incomingJSON['flavour'][i];
  var pFlavourItem = document.creatElement('LI');
  pFlavourItem.innerText = currrentFlavourString;
  contentFlavourList.appendChild(pFlavourItem);

  contentGridElement.appendchild(pContentELement);
}


//let pImage = document.creatElement("IMG");
//pImage.ClassList.add('footerImage');
//pImage.src = incomingJSON['picture_url'];
//pContentElement.appendChild(pImage);
}
