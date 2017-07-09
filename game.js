module.exports = {
  scoreFrame: scoreFrame,
  scoreGame: scoreGame

}


function scoreFrame (frame, secondFrame, thirdFrame) {
  var score = frame[0] + frame[1]
  if (isDoubleStrike(frame, secondFrame)) {
    score = scoreDoubleStrike(frame, secondFrame, thirdFrame)
}
  else if (isStrike (frame)) {
    score = scoreStrike(frame, secondFrame)
  }
  else if (isSpare (frame)) {
    score += secondFrame[0]
  }
  return score
}

function scoreGame (frames) {
  return frames.reduce(function(acc, item, i) {
  return acc + scoreFrame(frames[i] + frames[i+1] + frames[i+2])
}, 0)
}

function isDoubleStrike (frame, secondFrame){
  if (frame.length ==3) {
    return frame[0] == 10 + frame[1] ==10
  } else {
  return frame[0] ==10 && secondFrame[0] ==10
}
}

function isStrike (frame) {
  return (frame[0] ==10)
}

function isSpare(frame) {
  return !isStrike(frame) && frame[0] + frame[1] ==10
}

function scoreDoubleStrike(frame, secondFrame, thirdFrame) {
  if (frame.lengh ==3) {
    return 20 + frame[2]
  } else if (secondFrame.length ==3){
    return 20 + secondFrame[1]
  }  else {
    return 20 + thirdFrame[0]
}
}

function scoreStrike(frame, secondFrame) {
  if (frame.length ==3) {
    return 10 + frame[1] + frame[2]
  } else {
  return 10 + secondFrame[0] + secondFrame[1]
}
}
