namespace SpriteKind {
    export const home = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.home, function (sprite, otherSprite) {
    next_level()
})
function next_level () {
    mySprite.setPosition(10, 9)
    levels_completed += 1
    info.changeScoreBy(1)
    foxy()
}
function foxy () {
    preditor = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . 
. . . 1 1 . . . . . . . . . . . . . . . . . . . . 
. . . 1 1 . . . . . . . . . . . . . . . . . . . . 
. . . 4 4 . . . . . . . . . . . . . . . . . . . . 
. . . 4 4 . . . . . . . . . . . . . 4 4 . . . . . 
. . . 4 4 . . . . . . . . . . . . . 4 4 . . . . . 
. . . 4 4 . . . . . . . . . . . 4 4 4 4 4 . . . . 
. . . 4 4 . . . . . . . . . . . 4 4 4 f 4 4 . . . 
. . . 4 4 . . . . . . . . . . . 4 4 4 4 4 4 . . . 
. . . 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 . . . 
. . . 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 . . . . . . 
. . . 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 . . . . . . 
. . . 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 . . . . . . 
. . . 4 4 . 4 4 . . . . . . 4 4 . 4 4 . . . . . . 
. . . 4 4 . 4 4 . . . . . . 4 4 . 4 4 . . . . . . 
. . . 4 4 . 4 4 . . . . . . 4 4 . 4 4 . . . . . . 
. . . 4 4 . 1 1 . . . . . . 4 4 . 1 1 . . . . . . 
. . . 1 1 . 1 1 . . . . . . 1 1 . 1 1 . . . . . . 
. . . 1 1 . . . . . . . . . 1 1 . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.Enemy)
    preditor.setPosition(Math.randomRange(20, 150), Math.randomRange(20, 100))
    preditor.setVelocity(Math.randomRange(-10, 10), Math.randomRange(-10, 10))
    preditor.setFlag(SpriteFlag.BounceOnWall, true)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    game.over(false)
})
info.onCountdownEnd(function () {
    game.over(true)
})
let preditor: Sprite = null
let mySprite: Sprite = null
info.setScore(0)
let levels_completed = 0
info.startCountdown(30)
scene.setBackgroundColor(7)
for (let index = 0; index < 5; index++) {
    foxy()
}
mySprite = sprites.create(img`
. . . . . . . . . . b 5 b . . . 
. . . . . . . . . b 5 b . . . . 
. . . . . . . . . b c . . . . . 
. . . . . . b b b b b b . . . . 
. . . . . b b 5 5 5 5 5 b . . . 
. . . . b b 5 d 1 f 5 5 d f . . 
. . . . b 5 5 1 f f 5 d 4 c . . 
. . . . b 5 5 d f b d d 4 4 . . 
b d d d b b d 5 5 5 4 4 4 4 4 b 
b b d 5 5 5 b 5 5 4 4 4 4 4 b . 
b d c 5 5 5 5 d 5 5 5 5 5 b . . 
c d d c d 5 5 b 5 5 5 5 5 5 b . 
c b d d c c b 5 5 5 5 5 5 5 b . 
. c d d d d d d 5 5 5 5 5 d b . 
. . c b d d d d d 5 5 5 b b . . 
. . . c c c c c c c c b b . . . 
`, SpriteKind.Player)
mySprite.setPosition(10, 9)
let pond = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . 8 8 8 
. . . . . . . . . . . . . . . . . . . . . . . . 8 8 8 8 8 8 
. . . . . . . . . . . . . . . . . . . . . . 8 8 8 8 6 8 8 8 
. . . . . . . . . . . . . . . . . . . . 8 8 8 8 6 8 8 6 8 8 
. . . . . . . . . . . . . . . . . . 8 8 8 8 8 8 8 8 8 8 6 8 
. . . . . . . . . . . . . . . . 8 8 8 8 8 8 6 6 8 8 8 8 8 8 
. . . . . . . . . . . . . . . 8 8 8 8 8 8 6 8 8 8 8 8 8 6 8 
. . . . . . . . . . . . . . 8 8 8 8 8 8 6 8 8 8 8 8 8 8 6 8 
. . . . . . . . . . . . . 8 8 8 8 8 8 6 8 8 8 8 8 8 8 8 8 8 
. . . . . . . . . . . . . 8 8 8 8 6 8 8 8 6 8 8 8 8 8 8 8 8 
. . . . . . . . . . . 8 8 8 8 8 8 8 6 8 6 6 8 8 8 6 8 8 8 8 
. . . . . . . . . . . 8 8 8 8 8 6 8 8 8 8 8 8 6 8 8 8 8 6 8 
. . . . . . . . . . 8 8 8 8 6 6 8 8 8 8 6 8 8 8 8 8 8 8 8 8 
. . . . . . . . . 8 8 8 8 8 8 8 8 8 8 6 8 8 8 6 8 6 8 8 8 8 
. . . . . . . . 8 8 8 8 6 6 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
. . . . . . . 8 8 8 8 8 6 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
. . . . . . . 8 8 8 8 6 8 8 8 8 8 8 8 8 8 6 8 8 8 6 8 8 8 8 
. . . . . . 8 8 8 8 8 8 8 8 8 8 6 8 8 8 8 8 8 8 8 6 8 8 8 8 
. . . . . 8 8 8 8 8 6 8 8 8 8 8 6 8 6 8 8 8 8 8 8 6 8 8 8 8 
. . . . . 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
. . . . . 8 6 8 8 8 8 8 8 8 8 8 8 6 8 8 8 8 8 8 6 8 6 8 6 8 
. . . . 8 8 8 8 8 8 8 8 6 8 8 6 6 8 8 8 8 8 8 6 8 6 8 8 8 8 
. . . 8 8 8 8 8 8 8 8 8 8 8 8 6 8 6 8 8 8 8 8 8 8 6 8 8 8 8 
. . 8 8 8 8 8 8 8 8 6 8 8 8 8 8 8 6 8 8 8 8 8 8 8 8 8 8 8 8 
. . 8 8 8 8 8 6 8 6 8 6 6 8 8 8 8 8 8 8 8 6 8 8 8 8 8 6 8 8 
. . 8 6 6 6 8 8 8 8 6 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 6 8 8 8 
. . 8 8 8 8 8 6 6 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 6 8 8 8 
. 8 8 8 8 8 8 6 6 6 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 6 8 8 8 
`, SpriteKind.home)
pond.setPosition(147, 105)
mySprite.setFlag(SpriteFlag.StayInScreen, true)
forever(function () {
    controller.moveSprite(mySprite)
})
