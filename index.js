var Explosiondeath
var introMusic
var game3startangry
var Death
var Dronefly
var game1startexplosion
var explosiondeath
var hohoho
var Dronepic


function preload() {
  introMusic = loadSound("./assets/fortnitefestive.mp3")
  game3startangry = loadSound("./assets/Angry.mp3")
  Death = loadSound("./assets/Death.mp3")
  Dronefly = loadSound("./assets/DroneFly.mp3")
  game1startexplosion = loadSound("./assets/Exploooooooooosion.mp3")
  explosiondeath = loadSound("./assets/explosiondeath.mp3")
  hohoho = loadSound("./assets/hohoho.mp3")
  Dronepic = loadImage("./assets/Drone.png")
}


function setup(){
  introMusic.loop = true
  introMusic.volume = 0.20

  select('#startBtn').mousePressed(()=>{
    setTimeout(()=>{shiftPage('#page1')}, 9500)
    introMusic.play()
})  
  select('#mainBnt1').mousePressed(()=>shiftPage('#page2'))
  select('#mainBnt2').mousePressed(()=>shiftPage('#page3'))
  select('#mainBnt3').mousePressed(()=>shiftPage('#page4')) 
}

