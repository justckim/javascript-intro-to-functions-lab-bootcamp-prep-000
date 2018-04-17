function shout(string){
  return string.toUpperCase()
}

function whisper(string){
  return string.toLowerCase()
}

function logShout(string){
  string = shout(string)
  console.log(string)
}

function logWhisper(string){
  string = whisper(string)
  console.log(string)
}

function sayHiToGrandma(string){
  var response 
  if (string.toLowerCase === whisper(string)){
    response = "I can't hear you!"
    return response
  }
  
  else if (string.toUpperCase === shout(string)){
    response = "YES INDEED!"
    return response
  }
  
  else if (string === "I love you, Grandma") {
    response = "I love you, too."
    return response
  }
}