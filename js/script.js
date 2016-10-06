function newName(){
  var welcomeMsg = document.getElementById("Welcome");
  var name = document.getElementById("name");
 

  welcomeMsg.innerHTML = "The Great Wizard: "+name.value+ "@dragonborn.com" + ".<br/>"
//    THIS IS CALLING VAR= 'WELCOMEMSG' WHICH IS CONNECTED TO ID="WELCOME" WHICH PRINTS OUT THE WELCOMEMSG STRING INPUT ALONG WITH VAR="NAME" + VALUE WHICH IS CONNECTED WITH THE BUTTON.
  
}