var test = require('tape')
var game = require('../game')

test('test setup working', function (t) {
  t.pass()
  t.end()
})

test('scores a gutterball frame', function (t) {
  var frame = [0, 0]
  var expected = 0
  var actual = game.scoreFrame(frame)
  t.equal(actual, expected)
  t.end()
})

test('scores a normal frame', function (t) {
  var frame = [2, 3]
  var expected = 5
  var actual = game.scoreFrame(frame)
  t.equal(actual, expected)
  t.end()
})

test('scores a spare frame', function (t) {
  var frame = [6, 4]
  var secondFrame = [7, 0]
  var expected = 17
  var actual = game.scoreFrame(frame, secondFrame)
  t.equal(actual, expected)
  t.end()
})

test('scores a strike frame', function (t) {
  var frame = [10, 0]
  var secondFrame = [7, 2]
  var expected = 19
  var actual = game.scoreFrame(frame, secondFrame)
  t.equal(actual, expected)
  t.end()
})

test('scores a doubleStrike frame', function (t) {
  var frame = [10, 0]
  var secondFrame = [10, 0]
  var thirdFrame = [7, 2]
  var expected = 27
  var actual = game.scoreFrame(frame, secondFrame, thirdFrame)
  t.equal(actual, expected)
  t.end()
})

test('simple game scores properly', function (t) {
  var frames = [
    [1, 2], [6, 4], [5, 4], [10, 0], [7, 2], [10, 0], [10, 0], [5, 2], [7, 0], [4, 4]
   ]
  var expected = 119
  var actual = game.scoreGame(frames)
  t.equal(actual, expected)
  t.end()
})

test('complex game scores properly', function (t) {
  var frames = [
    [1, 2], [6, 4], [5, 4], [10, 0], [7, 2], [10, 0], [10, 0], [5, 2], [7, 0], [10, 10, 10]
  ]
 var expected = 141
 var actual = game.scoreGame(frames)
 t.equal(actual, expected)
 t.end()
})

test('perfect game scores properly', function (t) {
  var frames = [
    [10, 0],[10, 0],[10, 0],[10, 0],[10, 0],[10, 0],[10, 0],[10, 0],[10, 0], [10, 10, 10]
  ]
 var expected = 300
 var actual = game.scoreGame(frames)
 t.equal(actual, expected)
 t.end()
})

test('score a strike in the 10th frame', function (t) {
  var frames = [
    [1, 2], [6, 4], [5, 4], [10, 0], [7, 2], [10, 0], [10, 0], [5, 2], [7, 0], [10, 0, 10]
  ]
 var expected = 131
 var actual = game.scoreGame(frames)
 t.equal(actual, expected)
 t.end()
})
