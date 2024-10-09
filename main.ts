controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    let fly = 0
    if (fly) {
        mySprite.vy = -250
    } else {
        if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
            mySprite.vy = -275
        }
    }
})
let mySprite: Sprite = null
tiles.setCurrentTilemap(tilemap`level`)
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
characterAnimations.loopFrames(
mySprite,
[img`
    . . . . . . . c c . . . . . . . 
    . . . . . . c 5 c . . . . . . . 
    . . . . c c 5 5 5 c c c . . . . 
    . . c c c c 5 5 5 5 c b c c . . 
    . c b b 5 b 5 5 5 5 b 5 b b c . 
    . c b 5 5 b b 5 5 b b 5 5 b c . 
    . . c 5 5 5 b b b b 5 5 5 f . . 
    . . . f 5 5 5 5 5 5 5 5 f f . . 
    . . . . f e e e f b e e f f . . 
    . . . . f e b b f 1 b f f f . . 
    . . . . f b b b b b b f f . . . 
    . . . . . f e e e e f e e . . . 
    . . . . . f 5 b b e b b e . . . 
    . . . . f 5 5 5 5 e b b e . . . 
    . . . . c b 5 5 5 5 e e . . . . 
    . . . . . f f f f f f . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . c c . . . . . . . 
    . . . . . . c c 5 c . . . . . . 
    . . . . c c 5 5 5 c c c . . . . 
    . . c c c c 5 5 5 5 c b c c . . 
    . c b b 5 b 5 5 5 5 b 5 b b c . 
    . c b 5 5 b b 5 5 b b 5 5 b c . 
    . . c 5 5 5 b b b b 5 5 5 f . . 
    . . . f 5 5 5 5 5 5 5 5 f f . . 
    . . . . f e e e f b e e f f . . 
    . . . . f e b b f 1 b f f f . . 
    . . . . f b b b b e e f f . . . 
    . . . . . f e e e b b e f . . . 
    . . . . f 5 b b e b b e . . . . 
    . . . . c 5 5 5 5 e e f . . . . 
    . . . . . f f f f f f . . . . . 
    `,img`
    . . . . . . . c c . . . . . . . 
    . . . . . . c 5 c . . . . . . . 
    . . . . c c 5 5 5 c c c . . . . 
    . . c c c c 5 5 5 5 c b c c . . 
    . c b b 5 b 5 5 5 5 b 5 b b c . 
    . c b 5 5 b b 5 5 b b 5 5 b c . 
    . . c 5 5 5 b b b b 5 5 5 f . . 
    . . . f 5 5 5 5 5 5 5 5 f f . . 
    . . . . f e e e f b e e f f . . 
    . . . . f e b b f 1 b f f f . . 
    . . . . f b b b b b b f f . . . 
    . . . . . f e e e e f e e . . . 
    . . . . . f 5 b b e b b e . . . 
    . . . . f 5 5 5 5 e b b e . . . 
    . . . . c b 5 5 5 5 e e . . . . 
    . . . . . f f f f f f . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . c c . . . . . . . 
    . . . . . . c c 5 c . . . . . . 
    . . . . c c 5 5 5 c c c . . . . 
    . . c c c c 5 5 5 5 c b c c . . 
    . c b b 5 b 5 5 5 5 b 5 b b c . 
    . c b 5 5 b b 5 5 b b 5 5 b c . 
    . . c 5 5 5 b b b b 5 5 5 f . . 
    . . . f 5 5 5 5 5 5 5 5 f f . . 
    . . . . f e e e f b e e f f . . 
    . . . . f e b b f 1 b f f f . . 
    . . . . f b b b b b b f f . . . 
    . . . . . f e e e e e b b e . . 
    . . . . f 5 5 b b b e b b e . . 
    . . . . c 5 5 5 5 5 e e e . . . 
    . . . . . f f f f f f . . . . . 
    `],
100,
characterAnimations.rule(Predicate.MovingLeft)
)
characterAnimations.loopFrames(
mySprite,
[img`
    . . . . . . . c c . . . . . . . 
    . . . . . . . c 5 c . . . . . . 
    . . . . c c c 5 5 5 c c . . . . 
    . . c c b c 5 5 5 5 c c c c . . 
    . c b b 5 b 5 5 5 5 b 5 b b c . 
    . c b 5 5 b b 5 5 b b 5 5 b c . 
    . . f 5 5 5 b b b b 5 5 5 c . . 
    . . f f 5 5 5 5 5 5 5 5 f . . . 
    . . f f e e b f e e e f . . . . 
    . . f f f b 1 f b b e f . . . . 
    . . . f f b b b b b b f . . . . 
    . . . e e f e e e e f . . . . . 
    . . . e b b e b b 5 f . . . . . 
    . . . e b b e 5 5 5 5 f . . . . 
    . . . . e e 5 5 5 5 b c . . . . 
    . . . . . f f f f f f . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . c c . . . . . . . 
    . . . . . . c 5 c c . . . . . . 
    . . . . c c c 5 5 5 c c . . . . 
    . . c c b c 5 5 5 5 c c c c . . 
    . c b b 5 b 5 5 5 5 b 5 b b c . 
    . c b 5 5 b b 5 5 b b 5 5 b c . 
    . . f 5 5 5 b b b b 5 5 5 c . . 
    . . f f 5 5 5 5 5 5 5 5 f . . . 
    . . f f e e b f e e e f . . . . 
    . . f f f b 1 f b b e f . . . . 
    . . . f f e e b b b b f . . . . 
    . . . f e b b e e e f . . . . . 
    . . . . e b b e b b 5 f . . . . 
    . . . . f e e 5 5 5 5 c . . . . 
    . . . . . f f f f f f . . . . . 
    `,img`
    . . . . . . . c c . . . . . . . 
    . . . . . . . c 5 c . . . . . . 
    . . . . c c c 5 5 5 c c . . . . 
    . . c c b c 5 5 5 5 c c c c . . 
    . c b b 5 b 5 5 5 5 b 5 b b c . 
    . c b 5 5 b b 5 5 b b 5 5 b c . 
    . . f 5 5 5 b b b b 5 5 5 c . . 
    . . f f 5 5 5 5 5 5 5 5 f . . . 
    . . f f e e b f e e e f . . . . 
    . . f f f b 1 f b b e f . . . . 
    . . . f f b b b b b b f . . . . 
    . . . e e f e e e e f . . . . . 
    . . . e b b e b b 5 f . . . . . 
    . . . e b b e 5 5 5 5 f . . . . 
    . . . . e e 5 5 5 5 b c . . . . 
    . . . . . f f f f f f . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . c c . . . . . . . 
    . . . . . . c 5 c c . . . . . . 
    . . . . c c c 5 5 5 c c . . . . 
    . . c c b c 5 5 5 5 c c c c . . 
    . c b b 5 b 5 5 5 5 b 5 b b c . 
    . c b 5 5 b b 5 5 b b 5 5 b c . 
    . . f 5 5 5 b b b b 5 5 5 c . . 
    . . f f 5 5 5 5 5 5 5 5 f . . . 
    . . f f e e b f e e e f . . . . 
    . . f f f b 1 f b b e f . . . . 
    . . . f f b b b b b b f . . . . 
    . . e b b e e e e e f . . . . . 
    . . e b b e b b b 5 5 f . . . . 
    . . . e e e 5 5 5 5 5 c . . . . 
    . . . . . f f f f f f . . . . . 
    `],
100,
characterAnimations.rule(Predicate.MovingRight)
)
scene.cameraFollowSprite(mySprite)
controller.moveSprite(mySprite, 100, 0)
mySprite.ay = 700
forever(function () {
    for (let value of tiles.getTilesByType(assets.tile`transparency16`)) {
    	
    }
})
