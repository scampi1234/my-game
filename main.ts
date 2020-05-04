namespace SpriteKind {
    export const home = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.home, function (sprite, otherSprite) {
    game.over(true)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    game.over(false)
})
let mySprite: Sprite = null
controller.moveSprite(mySprite)
let preditor = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . 1 . . . . . . . . . . . . . 
. . 4 . . . . . . . . . . . . . 
. . 4 . . . . . . . . . 4 . . . 
. . 4 . . . . . . . 4 4 4 4 . . 
. . 4 . . . . . . . 4 4 f 4 4 . 
. . 4 4 4 4 4 4 4 4 4 4 4 4 4 . 
. . 4 4 4 4 4 4 4 4 4 4 . . . . 
. . 4 4 4 4 4 4 4 4 4 4 . . . . 
. . 4 . 4 . . . . 4 . 4 . . . . 
. . 4 . 4 . . . . 4 . 4 . . . . 
. . 1 . 4 . . . . 1 . 4 . . . . 
. . . . 1 . . . . . . 1 . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Enemy)
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
