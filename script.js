let contentGridElement = document.getElementById("contentGrid");

let myJSONDatabase = [

  {
    "title": "Ice Cream",
    "favorite_color": "#FABE1F",
    "flavour": ["Mango", "Caramel", "Vanilla"],
  },
  {
    "title": "Cake",
    "favorite_color": "#F8CDDB",
    "flavour": ["Chocolate", "Cheese", "Cream"],
  },
  {
    "title": "Drink",
    "favorite_color": "#CFDDD2",
    "flavour": ["Fruit Tea", "Boba Tea", "Vanilla Latte"],
  }

];

for (let i = 0; i < myJSONDatabase.length; i++) {
  console.log("Creating element...");
  createElementProper(myJSONDatabase[i]);
}

// for (var i=0;i < incomingJSON['flavour'].length; i++){
//   var flavourString = "<li>" + incomingJSON['flavour'][i] + "</li>";
//   incompleteHTML += flavourString;
// }
//
// incompleteHTML += "</ul></div>";
// contentGridElement.innerHTML = incompleteHTML;
// console.log(incompleteHTML);
//
// createElementProper(myJSON);

function createElementProper(incomingJSON) {
  /* PROF NOTE: Correct capitalization is required, and your createElement function was accidentally writen as createELement */
  // let contentElement= document.createELement("DIV");
  let contentElement = document.createElement("DIV");
  contentElement.style.backgroundColor = incomingJSON['favorite_color'];
  contentElement.style.fontFammily = incomingJSON['favorite_font'];
  /* PROF NOTE: Again, capitalization: the classList object uses camel case- no capital first letter */
  // contentElement.ClassList.add('contentItem');
  contentElement.classList.add('contentItem');


  let contentHeading = document.createElement('H1');
  /* PROF NOTE: Here you accidentally used a comma instead of a period */
  // contentHeading.classList,add('contentTitle');
  contentHeading.classList.add('contentTitle');
  /* PROF NOTE: Here you accidentally have the letter "p" before your variables and a capital L for contentElement */
  // pContentHeading.innerText = incomingJSON['title'];
  // pContentELement.appendChild(pContentHeading);
  contentHeading.innerText = incomingJSON['title'];
  contentElement.appendChild(contentHeading);

  let contentSubhead = document.createElement('H4');
  contentSubhead.innerText = "flavour:";
  /* PROF NOTE: Capital L in the variable name, extra p in other variable */
  // contentELement.appendChild(pContentSubhead);
  contentElement.appendChild(contentSubhead);

  let contentFlavourList = document.createElement('UL');
  /* PROF NOTE: Capital L in the variable name, extra p in other variable */
  // contentELement.appendChild(pContentFlavourList);
  contentElement.appendChild(contentFlavourList);

  /* PROF NOTE: Incorrect syntax in for loop– should be "i < array.length", not a comma */
  // for (var i = 0; i, incomingJSON['flavour'].length; i++) {
  for (var i = 0; i < incomingJSON['flavour'].length; i++) {
    var currentFlavourString = incomingJSON['flavour'][i];
    /* PROF NOTE: Accidentally wrote "creatElement" instead of "createElement" */
    // var pFlavourItem = document.creatElement('LI');
    var pFlavourItem = document.createElement('LI');
    /* PROF NOTE: Accidentally wrote "currrentFlavourString" with three r's */
    // pFlavourItem.innerText = currrentFlavourString;
    pFlavourItem.innerText = currentFlavourString;
    contentFlavourList.appendChild(pFlavourItem);

    /* PROF NOTE: - Extra p in variable name
                  - Never declared and set "contentGridElement" - I added it to the top of the script
                  - apependChild() function written all lower case on accident
    */
    // contentGridElement.appendchild(pContentELement);
    contentGridElement.appendChild(contentElement);
    console.log("Element addedd...");
  }


  //let pImage = document.creatElement("IMG");
  //pImage.ClassList.add('footerImage');
  //pImage.src = incomingJSON['picture_url'];
  //pContentElement.appendChild(pImage);
}
