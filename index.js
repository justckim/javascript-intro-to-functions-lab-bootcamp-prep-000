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
  
  if (string.toLowerCase === whisper(string)){
    return "I can't hear you!"
  }
  
  else if (string.toUpperCase === shout(string)){
    return "YES INDEED!"
  }
  
  else if (string === "I love you, Grandma") {
    return "I love you, too."
  }
}