var textNum; 
var pronounNum = -1; 

var subject;
var object;
var possPro; 
var possAdj;
var reflexive; 

var blanks; 
var checks; 
var answers; 

var isCorrect = true;
/*
Pronoun key:
0 - subject
1 - object
2 - possessive pronouns
3 - possessive adjectives
4 - reflective pronouns

*/

function generateText() {
    if (pronounNum < 0) {
        alert("Please select a pronoun to use!");
        document.getElementById("go-btn").style.backgroundColor = "#FFF5DA";
        return; 
    } else {
        if (pronounNum == 0) {
            subject = "he";
            object = "him";
            possPro = "his";
            possAdj = "his";
            reflexive = "himself";
        } else if (pronounNum == 1) {
            //she
            subject = "she";
            object = "her";
            possPro = "hers";
            possAdj = "her";
            reflexive = "herself";
            
            
        } else if (pronounNum == 2) {
          subject = "they";
          object = "them";
          possPro = "theirs";
          possAdj = "their";
          reflexive = "themselves";
            
        } else if (pronounNum == 3) {
          subject = "it";
          object = "it";
          possPro = "its";
          possAdj = "its";
          reflexive = "itself";
            
        } else if (pronounNum == 4) {
          subject = "xe";
          object = "xem";
          possPro = "xyr";
          possAdj = "xyr";
          reflexive = "xemself";
            
        } else if (pronounNum == 5) {
            
            subject = "ze";
          object = "zir";
          possPro = "zirs";
          possAdj = "zir";
          reflexive = "zelf";
            
        } else if (pronounNum == 6) {
            //fae
            subject = "fae";
          object = "faer";
          possPro = "faer";
          possAdj = "faer";
          reflexive = "faeself";
        } else if (pronounNum == 7) {
            //per
            subject = "per";
          object = "per";
          possPro = "pers";
          possAdj = "per";
          reflexive = "perself";
            
        } else {
            //ey
            subject = "ey";
          object = "em";
          possPro = "eirs";
          possAdj = "eir";
          reflexive = "eirself";
            
        }
    }
    document.getElementById("select").style.display = "none";
    var elems = document.getElementsByClassName("pronoun-paragraph");
    console.log(elems);
    
    // specify a random index
    var index = Math.floor(Math.random() * elems.length);
    console.log(index);
    textNum = index; 


    // get the random element
    var randomElement = elems[index];
    console.log(randomElement);

    randomElement.style.display = 'block';
    document.getElementById("check-btn").style.display = "block";

    document.getElementById("go-btn").style.display = "none";
  }

function checkText() {
    if (textNum == 0) {
        isCorrect = (document.getElementById("apple1").value.toLowerCase() == subject.toLowerCase()
        && document.getElementById("apple1").value.toLowerCase() == possAdj.toLowerCase()
        && document.getElementById("apple1").value.toLowerCase() == subject.toLowerCase()
        && document.getElementById("apple1").value.toLowerCase() == possAdj.toLowerCase()
        && document.getElementById("apple1").value.toLowerCase() == possAdj.toLowerCase()
        && document.getElementById("apple1").value.toLowerCase() == possAdj.toLowerCase()
        && document.getElementById("apple1").value.toLowerCase() == subject.toLowerCase()
        && document.getElementById("apple1").value.toLowerCase() == object.toLowerCase()
        && document.getElementById("apple1").value.toLowerCase() == object.toLowerCase()
        );
  
    } else if (textNum == 1) {
        isCorrect = (document.getElementById("quill1").value.toLowerCase() == subject.toLowerCase()
        && document.getElementById("quill2").value.toLowerCase() == reflexive.toLowerCase()
        && document.getElementById("quill3").value.toLowerCase() == possAdj.toLowerCase()
        && document.getElementById("quill4").value.toLowerCase() == subject.toLowerCase()
        && document.getElementById("quill5").value.toLowerCase() == subject.toLowerCase()
        && document.getElementById("quill6").value.toLowerCase() == subject.toLowerCase()
        && document.getElementById("quill7").value.toLowerCase() == subject.toLowerCase()
        && document.getElementById("quill8").value.toLowerCase() == subject.toLowerCase()
        && document.getElementById("quill9").value.toLowerCase() == possAdj.toLowerCase()
        && document.getElementById("quill10").value.toLowerCase() == subject.toLowerCase()
        && document.getElementById("quill11").value.toLowerCase() == object.toLowerCase()
        );
  
    } else if (textNum == 2) {
      isCorrect = (document.getElementById("mishap1").value.toLowerCase() == reflexive.toLowerCase()
        && document.getElementById("mishap2").value.toLowerCase() == subject.toLowerCase()
        && document.getElementById("mishap3").value.toLowerCase() == subject.toLowerCase()
        && document.getElementById("mishap4").value.toLowerCase() == subject.toLowerCase()
        && document.getElementById("mishap5").value.toLowerCase() == possAdj.toLowerCase()
        && document.getElementById("mishap6").value.toLowerCase() == possAdj.toLowerCase()
        && document.getElementById("mishap7").value.toLowerCase() == subject.toLowerCase()
        && document.getElementById("mishap8").value.toLowerCase() == subject.toLowerCase()
        && document.getElementById("mishap9").value.toLowerCase() == subject.toLowerCase()
        && document.getElementById("mishap10").value.toLowerCase() == possAdj.toLowerCase()
        );
  
    } else {
        isCorrect = (document.getElementById("artifact1").value.toLowerCase() == subject.toLowerCase()
        && document.getElementById("artifact2").value.toLowerCase() == possAdj.toLowerCase()
        && document.getElementById("artifact3").value.toLowerCase() == subject.toLowerCase()
        && document.getElementById("artifact4").value.toLowerCase() == subject.toLowerCase()
        && document.getElementById("artifact5").value.toLowerCase() == possAdj.toLowerCase()
        && document.getElementById("artifact6").value.toLowerCase() == possAdj.toLowerCase()
        );
  
    }
    console.log(isCorrect + " correct?");
    if (isCorrect) {
      document.getElementById("result-correct").style.display = "inline";
    } else {
      document.getElementById("result-incorrect").style.display = "inline";
      correctBlanks();
    }

    document.getElementById("check-btn").style.display = "none";
    document.getElementById("reset-btn").style.display = "block";

  
  }



const buttons = document.getElementsByTagName("button");
const result = document.getElementById("result");

let activeButton = null;

const buttonPressed = e => { 
  if (activeButton != null) {
    activeButton.style.background = "#ECD3FF"; // Replace with the original color of the button
    document.getElementById("go-btn").style.backgroundColor = "#FFF5DA";
  }
  
  e.target.style.background = "#FFF5DA"; 
  if(e.target.id == "he") {
    pronounNum = 0;
  }
  if(e.target.id == "she") {
    pronounNum = 1;
  }
  if(e.target.id == "they") {
    pronounNum = 2;
  }
  if(e.target.id == "it") {
    pronounNum = 3;
  }
  if(e.target.id == "xe") {
    pronounNum = 4;
  }
  if(e.target.id == "ze") {
    pronounNum = 5;
  }
  if(e.target.id == "fae") {
    pronounNum = 6;
  }
  if(e.target.id == "per") {
    pronounNum = 7;
  }
  if(e.target.id == "ey") {
    pronounNum = 8;
  }
  console.log(pronounNum);
  activeButton = e.target;
}

for (let button of buttons) {
  button.addEventListener("click", buttonPressed);
  
}


function correctBlanks() {
  if (textNum == 0) {
    $('#apple1').val(subject);
    $("#apple2").val(possAdj);
    $("#apple3").val(subject);
    $("#apple4").val(possAdj);
    $("#apple5").val(possAdj);
    $("#apple6").val(possAdj);
    $("#apple7").val(subject);
    $("#apple8").val(object);
    $("#apple9").val(object);
  }
  if (textNum == 1) {
    $('#quill1').val(subject);
    $('#quill2').val(reflexive);
    $("#quill3").val(possAdj);
    $("#quill4").val(subject);
    $("#quill5").val(subject);
    $("#quill6").val(subject);
    $("#quill7").val(subject);
    $("#quill8").val(subject);
    $("#quill9").val(possAdj);
    $("#quill10").val(subject);
    $("#quill11").val(object);
  }
  if (textNum == 2) {
    $('#mishap1').val(reflexive);
    $("#mishap2").val(subject);
    $("#mishap3").val(subject);
    $("#mishap4").val(subject);
    $("#mishap5").val(possAdj);
    $("#mishap6").val(possAdj);
    $("#mishap7").val(subject);
    $("#mishap8").val(subject);
    $("#mishap9").val(subject);
    $("#mishap10").val(possAdj);
  }
  if (textNum == 3) {
    $('#artifact1').val(subject);
    $("#artifact2").val(possAdj);
    $("#artifact3").val(subject);
    $("#artifact4").val(subject);
    $("#artifact5").val(possAdj);
    $("#artifact6").val(possAdj);
  }
}

function reset() {
  //remove
  document.getElementById("para1").style.display = "none";
  document.getElementById("para2").style.display = "none";
  document.getElementById("para3").style.display = "none";
  document.getElementById("para4").style.display = "none";
  document.getElementById("result-correct").style.display = "none";
  document.getElementById("result-incorrect").style.display = "none";
  document.getElementById("reset-btn").style.display = "none";
  document.getElementById("pronoun-form").reset();

  //add

  document.getElementById("select").style.display = "block";
  document.getElementById("go-btn").style.display = "block";

  document.getElementById("go-btn").style.marginLeft = "60px";
  document.getElementById("go-btn").style.backgroundColor = "#FFF5DA";
  //reset values
    pronounNum = -1;
    textNum = -1;
}
