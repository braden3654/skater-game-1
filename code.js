setScreen("Welcome");
onEvent("enterBtn","click",function(){
  setScreen("helloScreen");
});
onEvent("button1","click",function(){
  console.log("skater clicked");
setPosition("button1",randomNumber(0,310),randomNumber(50,450));
});
onEvent("image1","click",function(){
  console.log("Background Clicked");
  setScreen("goBackscreen");
});
onEvent("goBack", "click", function(event) {
  console.log("goBack clicked!");
  setScreen("helloScreen");
});
onEvent("enterBtn", "click", function(event) {
  console.log("enterBtn clicked!");
  setScreen("helloScreen");
});
