var lowercase = 'hello!'
var uppercase = "HELLO!"

function shout(String) {
 return 'Hello'.toUpperCase(); 
}

shout('hello');

function whisper(String) {
  return 'HELLO'.toLowerCase();
}
whisper('HELLO');

function logShout(String) {
  console.log('Hello'.toUpperCase());
}
logShout('hello');

function logWhisper(string) {
  console.log('HELLO'.toLowerCase());
}
logWhisper('HELLO');

function sayHiToGrandma(string) {
  return 'hello'
  if (string === lowercase() ) {
    return "I can\'t hear you!"
  } else {
    return "YES INDEED!"
  }
  returns "I love you, too."
}
sayHiToGrandma('hello')