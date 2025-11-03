namespace SpriteKind {
    export const Goal = SpriteKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    myFootball.throwDart()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Goal, function (sprite, otherSprite) {
    game.gameOver(true)
})
let myFootball: Dart = null
tiles.setCurrentTilemap(tilemap`level1`)
myFootball = darts.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . e e e e e . . . . . 
    . . . . e e e e e e e e e . . . 
    . . . 1 e 1 e 1 e 1 e 1 e 1 . . 
    . . e 1 e 1 1 1 1 1 1 1 e 1 e . 
    . . e 1 e 1 e 1 e 1 e 1 e 1 e . 
    . . . 1 e e e e e e e e e 1 . . 
    . . . . e e e e e e e e e . . . 
    . . . . . . e e e e e . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
myFootball.setTrace()
myFootball.controlWithArrowKeys()
let GoalPoast = sprites.create(img`
    .............cc.
    ............cbbc
    ............cbbc
    ...........bdcc.
    ...........bdbb.
    ..........bddc..
    ..........bdbb..
    .........bddc...
    .........bdbb...
    ........bddc....
    ........bdbb....
    .......bddc.....
    .......bdbb.....
    ......bddc......
    ......bdbb......
    .....bddc.......
    .....bdbb.......
    ....bddc........
    ....bdbb........
    ...bddc.........
    ...bdbb.........
    ..bddc..........
    ..bdbb..........
    .bddc...........
    .bdbb...........
    b1dc............
    b11c............
    b11c............
    b11c.........cc.
    b11c........cbbc
    b11c........cbbc
    b11c.......bdcc.
    b11c.......bdbb.
    b11c......bddc..
    b11bccc...bdbb..
    b11bbbbcccddc...
    b11bcccbccdbb...
    b11b..ccbddc....
    b11b...ccdbbc...
    b11b...bddcbc...
    b11b...bdbbcbc..
    b11b..bddc.fbc..
    b11b..bdbb.fbf..
    b11b.bddc..fcf..
    b11b.bdbb..fcf..
    b11bbddc...fcf..
    b11bbdbb...fcf..
    b11bddc...cfcfc.
    b11ddbb..cbfcfbc
    b1dddc...cdfffdc
    b1ddbb...cdcfcdc
    cdddc....cbdddbc
    cddbb....cbbbbbc
    cddc.....cbbbbbc
    cdbb.....cbbbbbc
    .cc......cbbbbbc
    .........cbbbbbc
    .........cbbbbbc
    .........cbbbbbc
    .........8bbbbb8
    .........8bbbbb8
    .........6bbbbb6
    ..........6bbb6.
    ...........666..
    `, SpriteKind.Goal)
GoalPoast.setPosition(32, 59)
