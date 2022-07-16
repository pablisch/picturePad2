// Change panel css according to mouse over event

const panels = document.querySelectorAll(".panel");

panels.forEach(panel => {
  panel.addEventListener("mouseover", () => {
    removeActiveClasses();
    panel.classList.add("active");
    // console.log("col: " + document.querySelector(".indicator").innerHTML);
  })
})

function removeActiveClasses() {
  panels.forEach(panel => {
    panel.classList.remove("active");
  })
}

// Change soundPanel css according to mouse over event

const soundPanels = document.querySelectorAll(".noisePanel");

soundPanels.forEach(soundPanel => {
  soundPanel.addEventListener("mouseover", () => {
    console.log(soundPanel.innerHTML);
    removeCurrentClasses();
    
    // document.querySelectorAll(".current").classList.remove("current");
    var hoverOverkey = soundPanel.innerHTML;
    if (hoverOverkey == "e" || hoverOverkey == "r" || hoverOverkey == "t" || hoverOverkey == "y" || hoverOverkey == "u") {
      document.querySelector(".e").classList.add("current");
      document.querySelector(".r").classList.add("current");
      document.querySelector(".t").classList.add("current");
      document.querySelector(".y").classList.add("current");
      document.querySelector(".u").classList.add("current");
    } else if (hoverOverkey == "d" || hoverOverkey == "f" || hoverOverkey == "g" || hoverOverkey == "h" || hoverOverkey == "j") {
      document.querySelector(".d").classList.add("current");
      document.querySelector(".f").classList.add("current");
      document.querySelector(".g").classList.add("current");
      document.querySelector(".h").classList.add("current");
      document.querySelector(".j").classList.add("current");
    }  else if (hoverOverkey == "x" || hoverOverkey == "c" || hoverOverkey == "v" || hoverOverkey == "b" || hoverOverkey == "n") {
      document.querySelector(".x").classList.add("current");
      document.querySelector(".c").classList.add("current");
      document.querySelector(".v").classList.add("current");
      document.querySelector(".b").classList.add("current");
      document.querySelector(".n").classList.add("current");
    } else {
      var currentRow = "none";
    }
    soundPanel.classList.remove("indicator");

  })
})

function removeCurrentClasses() {
  soundPanels.forEach(soundPanel => {
    soundPanel.classList.remove("current");
  })
}

// Sense panel clicks

var numberOfBeatPanels = document.querySelectorAll(".noisePanel").length;

for (let i = 0; i < numberOfBeatPanels; i++) {
  document.querySelectorAll(".noisePanel")[i].addEventListener("click", function() { 
    var panelClicked = this.innerHTML;
    playSound(panelClicked);
    panelFlash(panelClicked);
    // console.log(panelClicked);
    // alert(panelClicked);
    
  })
}

// Sense keyboard strokes

document.addEventListener("keydown", function(keyWasPressed) {
  var itWasThisKey = keyWasPressed.key;
  playSound(itWasThisKey);
  panelFlash(itWasThisKey);
})

// Play sound according to keydown OR panel click

function playSound(inputSelector) {
  switch (inputSelector) {
    case "e": var soundSelected = "boop"; break;
    case "d": var soundSelected = "sciFiBeep"; break;
    case "x": var soundSelected = "placeholderSound"; break;
    case "r": var soundSelected = "tom-1"; break;
    case "f": var soundSelected = "tom-2"; break;
    case "c": var soundSelected = "tom-4"; break;
    case "t": var soundSelected = "snare"; break;
    case "g": var soundSelected = "cymbalCrash"; break;
    case "v": var soundSelected = "tom-3"; break;
    case "y": var soundSelected = "sciFiBeep"; break;
    case "h": var soundSelected = "boop"; break;
    case "b": var soundSelected = "sciFiBeep"; break;
    case "u": var soundSelected = "boop"; break;
    case "j": var soundSelected = "sciFiBeep"; break;
    case "n": var soundSelected = "sciFiBeep"; break;
    default:
      break;
  }
  var soundToPlay = new Audio("samples/" + soundSelected + ".mp3");
  soundToPlay.play();
}

// Flash panel when activated

function panelFlash(inputSelector) {
  document.querySelector("." + inputSelector).classList.add("soundActive");
  function panelFashOff() {
    document.querySelector("." + inputSelector).classList.remove("soundActive");
  }
  setTimeout(panelFashOff, 150);
}



