function newParagraph() {
  var elementH = document.createElement("h1");
  var box = document.getElementById("box");
  box.appendChild(elementH);
  var text = document.createTextNode("the battle of Frupsig");
  elementH.appendChild(text);

  var element = document.createElement("p"); //creates a paragraph
  //create a variable to hold our div. ie where to attach the element
  var box = document.getElementById("box"); // this could be removed as it already upwards
  //append the paragraph created to the the div. this attaches the  paragraph to the div. using the appendChild object.
  box.appendChild(element);
  var text = document.createTextNode(
    " rem ipsum ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum pariatur sunt libero! Officiis id veritatis obcaecati possimus, libero, odit vel perferendis eos temporibus consequatur praesentium ducimus, sit nostrum! Non, hic! Tenetur, iste illum? Nesciunt earum qui dolorem dicta. Aliquid, beatae aspernatur alias in, libero dolorem maxime vitae nostrum, molestias culpa officiis velit Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum pariatur sunt libero! Officiis id veritatis obcaecati possimus, libero, odit vel perferendis eos temporibus consequatur praesentium ducimus, sit nostrum! Non, hic! Tenetur, iste illum? Nesciunt earum qui dolorem dicta. Aliquid, beatae aspernatur alias in, libero dolorem maxime vitae nostrum, molestias culpa officiis velit. Nostrum pariatur sunt libero! Officiisdolor sit consectetur adipisicing elit. Nostrum pariatur sunt libero! Officiis id veritatis obcaecati possimus, libero, odit vel perferendis eos temporibus consequatur praesentium ducimus, sit nostrum! Non, hic! Tenetur, iste illum? Nesciunt earum qui dolorem dicamsectetur adipisicing us, libero, odit vel perferen"
  );
  element.appendChild(text);

  //creating attribute
  var pAttribute = document.createAttribute("id"); //creates attribute. id shows the type of attribute. it could be a link, class etc
  pAttribute.value = "test"; // sets the atribute as it is in the css
  element.setAttributeNode(pAttribute); // links the attribute to the element concerned

  var elementH2 = document.createElement("h1");
  var box = document.getElementById("box");
  box.appendChild(elementH2);
  var text1 = document.createTextNode("the royale battle");
  elementH2.appendChild(text1);
  //creating attribute for h1

  var fAttribute = document.createAttribute("id");
  fAttribute.value = "test2";
  elementH2.setAttributeNode(fAttribute);
}

function swap() {
  var frosh = document.createElement("li");
  var rotate = document.getElementById("list");
  rotate.appendChild(frosh);
  //var turned = document.createTextNode("ghosts");
  //frosh.appendChild(turned);
  frosh.textContent = "ghosts"; // this is another way around appendChild
}

//deleting item ok
function free() {
  var elementRem = document.getElementsByTagName("h1")[1]; //targets the element tag and specifies the node to be removed as well.
  var parent = elementRem.parentNode; // specifies the parent node from where we wanna remove the child node from.
  // parentNode is a property which gets the property of the heading node which of course is the section
  parent.removeChild(elementRem); //removes the element
}

console.log("naza");

// this is a new change
