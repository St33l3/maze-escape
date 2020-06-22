namespace SpriteKind {
    export const portal = SpriteKind.create()
    export const portal2 = SpriteKind.create()
    export const portal3 = SpriteKind.create()
    export const portal4 = SpriteKind.create()
    export const portal5 = SpriteKind.create()
}
namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
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
`
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.portal3, function (sprite, otherSprite) {
    tiles.placeOnRandomTile(blob_boy, sprites.dungeon.floorDark0)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.portal2, function (sprite, otherSprite) {
    tiles.placeOnRandomTile(blob_boy, sprites.dungeon.floorDark5)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.portal4, function (sprite, otherSprite) {
    tiles.placeOnRandomTile(blob_boy, sprites.dungeon.floorLightMoss)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.portal5, function (sprite, otherSprite) {
    tiles.placeOnRandomTile(blob_boy, sprites.dungeon.greenInnerSouthWest)
    game.over(true)
    info.stopCountdown()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.portal, function (sprite, otherSprite) {
    tiles.placeOnRandomTile(blob_boy, sprites.dungeon.floorLight5)
})
info.onCountdownEnd(function () {
    game.over(false)
})
let blob_boy: Sprite = null
info.startCountdown(30)
blob_boy = sprites.create(img`
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
2 2 2 2 2 3 3 3 3 3 3 2 2 2 2 2 
2 f f f 2 3 3 3 3 3 3 2 f f f 2 
2 f 9 f 2 3 3 3 3 3 3 2 f 9 f 2 
2 f f f 2 3 3 3 3 3 3 2 f f f 2 
2 2 2 2 2 3 3 3 3 3 3 2 2 2 2 2 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 a a a a 3 3 3 3 3 3 
3 3 3 3 3 3 a a a a 3 3 3 3 3 3 
3 3 3 3 3 3 a a a a 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 7 7 7 7 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
`, SpriteKind.Player)
let portal = sprites.create(img`
. . . . . . 8 8 8 . . . . . . . 
. . . . . 8 7 7 7 8 . . . . . . 
. . . . 8 7 3 3 3 7 8 . . . . . 
. . . 8 7 3 5 5 5 3 7 8 . . . . 
. . 8 7 3 5 4 4 4 5 3 7 8 . . . 
. 8 7 3 5 4 2 2 2 4 5 3 7 8 . . 
. 8 7 3 5 4 2 9 2 4 5 3 7 8 . . 
. 8 7 3 5 4 2 2 2 4 5 3 7 8 . . 
. . 8 7 3 5 4 4 4 5 3 7 8 . . . 
. . . 8 7 3 5 5 5 3 7 8 . . . . 
. . . . 8 7 3 3 3 7 8 . . . . . 
. . . . . 8 7 7 7 8 . . . . . . 
. . . . . . 8 8 8 . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.portal)
let portal_2 = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . 8 8 8 . . . . . . . 
. . . . . 8 7 7 7 8 . . . . . . 
. . . . 8 7 3 3 3 7 8 . . . . . 
. . . 8 7 3 5 5 5 3 7 8 . . . . 
. . 8 7 3 5 4 4 4 5 3 7 8 . . . 
. 8 7 3 5 4 2 2 2 4 5 3 7 8 . . 
. 8 7 3 5 4 2 9 2 4 5 3 7 8 . . 
. 8 7 3 5 4 2 2 2 4 5 3 7 8 . . 
. . 8 7 3 5 4 4 4 5 3 7 8 . . . 
. . . 8 7 3 5 5 5 3 7 8 . . . . 
. . . . 8 7 3 3 3 7 8 . . . . . 
. . . . . 8 7 7 7 8 . . . . . . 
. . . . . . 8 8 8 . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.portal2)
let portal_3 = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . 8 8 8 . . . . . . . 
. . . . . 8 7 7 7 8 . . . . . . 
. . . . 8 7 3 3 3 7 8 . . . . . 
. . . 8 7 3 5 5 5 3 7 8 . . . . 
. . 8 7 3 5 4 4 4 5 3 7 8 . . . 
. 8 7 3 5 4 2 2 2 4 5 3 7 8 . . 
. 8 7 3 5 4 2 9 2 4 5 3 7 8 . . 
. 8 7 3 5 4 2 2 2 4 5 3 7 8 . . 
. . 8 7 3 5 4 4 4 5 3 7 8 . . . 
. . . 8 7 3 5 5 5 3 7 8 . . . . 
. . . . 8 7 3 3 3 7 8 . . . . . 
. . . . . 8 7 7 7 8 . . . . . . 
. . . . . . 8 8 8 . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.portal3)
let portal_4 = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . 8 8 8 . . . . . . . 
. . . . . 8 7 7 7 8 . . . . . . 
. . . . 8 7 3 3 3 7 8 . . . . . 
. . . 8 7 3 5 5 5 3 7 8 . . . . 
. . 8 7 3 5 4 4 4 5 3 7 8 . . . 
. 8 7 3 5 4 2 2 2 4 5 3 7 8 . . 
. 8 7 3 5 4 2 9 2 4 5 3 7 8 . . 
. 8 7 3 5 4 2 2 2 4 5 3 7 8 . . 
. . 8 7 3 5 4 4 4 5 3 7 8 . . . 
. . . 8 7 3 5 5 5 3 7 8 . . . . 
. . . . 8 7 3 3 3 7 8 . . . . . 
. . . . . 8 7 7 7 8 . . . . . . 
. . . . . . 8 8 8 . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.portal4)
let final_portal = sprites.create(img`
. . . . 9 9 9 9 9 9 9 . . . . . 
. . 9 9 . . 8 8 8 . . 9 9 . . . 
. 9 . . . . 7 7 7 . . . . 9 . . 
. 9 . . . . 3 3 3 . . . . 9 . . 
9 . . . . . 5 5 5 . . . . . 9 . 
9 . . . . 5 4 4 4 5 . . . . 9 . 
9 8 7 3 5 4 2 2 2 4 5 3 7 8 9 . 
9 8 7 3 5 4 2 9 2 4 5 3 7 8 9 . 
9 8 7 3 5 4 2 2 2 4 5 3 7 8 9 . 
9 . . . . 5 4 4 4 5 . . . . 9 . 
9 . . . . . 5 5 5 . . . . . 9 . 
. 9 . . . . 3 3 3 . . . . 9 . . 
. 9 . . . . 7 7 7 . . . . 9 . . 
. . 9 9 . . 8 8 8 . . 9 9 . . . 
. . . . 9 9 9 9 9 9 9 . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.portal5)
portal.setPosition(70, 57)
portal_2.setPosition(180, 60)
portal_3.setPosition(10, 200)
blob_boy.setPosition(6, 7)
tiles.setTilemap(tiles.createTilemap(
            hex`100010000202020202020202020202020202020f0202020202020202020202020202020f04040404040e02020e0707070e02020f02020202020602020f1102020602020f02020e0c0c0e02020f0202020602020f02030f02020202020e0704070e02020f02030f02020202020f0202020f02020f02030f02020d0c0b0a0202020f02020f0202020202061a19090202020f02020f02020202020317180f0202020f02020f02030f0202050407080404040e02020f0e030f0202020202020202020202020f0202020202020202020202020202020f0202020e04040404040e0202020e04040202020f1414141415030212020f161b0202020f14141414140e0404040e1616`,
            img`
. . . . . . . . . . . . . . . 2 
. . . . . . . . . . . . . . . 2 
2 2 2 2 2 2 . . 2 2 2 2 2 . . 2 
. . . . . 2 . . 2 . . . 2 . . 2 
. . 2 2 2 2 . . 2 . . . 2 . . 2 
. 2 2 . . . . . 2 2 2 2 2 2 2 2 
. 2 2 . . . . . 2 . . . 2 . . 2 
. 2 2 . . 2 2 2 2 . . . 2 . . 2 
. . . . . 2 . . 2 . . . 2 . . 2 
. . . . . 2 . . 2 . . . 2 . . 2 
. 2 2 2 2 2 2 2 2 2 2 2 2 . . 2 
2 2 2 . . . . . . . . . . . . 2 
. . . . . . . . . . . . . . . 2 
. . . 2 2 2 2 2 2 2 . . . 2 2 2 
. . . 2 . . . . . 2 . . . 2 . . 
. . . 2 . . . . . 2 2 2 2 2 . . 
`,
            [myTiles.tile0,sprites.dungeon.floorLight0,sprites.dungeon.floorLight2,sprites.dungeon.greenOuterWest1,sprites.dungeon.greenOuterSouth0,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterWest0,sprites.dungeon.greenOuterSouth1,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterEast1,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterNorth1,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.floorMixed,sprites.dungeon.greenOuterEast0,sprites.dungeon.floorDarkDiamond,sprites.dungeon.floorLight5,sprites.dungeon.floorDark5,sprites.dungeon.floorDark4,sprites.dungeon.floorDark0,sprites.dungeon.floorDark1,sprites.dungeon.floorLightMoss,sprites.dungeon.greenInnerSouthWest,sprites.dungeon.greenInnerSouthEast,sprites.dungeon.greenInnerNorthEast,sprites.dungeon.greenInnerNorthWest,sprites.dungeon.darkGroundNorthWest1],
            TileScale.Sixteen
        ))
scene.cameraFollowSprite(blob_boy)
tiles.placeOnRandomTile(portal_4, sprites.dungeon.floorDark1)
tiles.placeOnRandomTile(final_portal, sprites.dungeon.darkGroundNorthWest1)
controller.moveSprite(blob_boy)
