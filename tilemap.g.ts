// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`100010000202020202020202020202020202020202010101010201010101010c0c0c0c0202010101010201010101010c11010c0202010101010201010101010c01010c0c02020204020201010101010c0c0f0c0202010101010101010101010101010102020101010101010707010101010101020201010101010b08090b010d0d0d0d020201010101010b0b0a0b011001010102020101010101010b0b01010d0101010202010101010101010101010d01010102020d0d0d0d0101010101010d0d0d0d02020101010d0101010101010101010302020101010e0101010101010101010302020101010d010101010101010106050202020202020202020202020202020202`, img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . . . . 2 . . . . . 2 2 2 2 2 
2 . . . . 2 . . . . . 2 2 . 2 2 
2 . . . . 2 . . . . . 2 . . 2 2 
2 2 2 . 2 2 . . . . . 2 2 . 2 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . 2 2 . . . . . . 2 
2 . . . . . 2 2 2 2 . . . . . 2 
2 . . . . . 2 2 2 2 . . . . . 2 
2 . . . . . . 2 2 . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.dungeon.darkGroundCenter,sprites.dungeon.floorLight0,sprites.dungeon.darkGroundSouthEast1,sprites.dungeon.doorOpenNorth,myTiles.tile1,myTiles.tile2,sprites.builtin.coral0,sprites.builtin.coral1,sprites.builtin.coral2,sprites.builtin.coral3,sprites.builtin.coral5,myTiles.tile3,sprites.dungeon.floorLight2,sprites.dungeon.doorClosedWest,sprites.dungeon.doorClosedNorth,sprites.dungeon.doorOpenEast,sprites.dungeon.chestClosed], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile0":
            case "tile2":return tile2;
            case "myTile1":
            case "tile3":return tile3;
            case "myTile":
            case "tile1":return tile1;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
