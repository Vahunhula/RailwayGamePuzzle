const TILE_TYPES = {
  EMPTY: "empty",
  WITH_BRIDGE: "withBridge",
  WITH_ROCKS: "withRocks",
  WITH_WATER: "withWater",
  WITH_BRIDGE_HORIZONTAL: "withBridgeHorizontal",
};
const TILE_IMAGES = {
  EMPTY: "pics/tiles/empty.png",
  WITH_BRIDGE: "pics/tiles/bridge.png",
  WITH_BRIDGE_HORIZONTAL: "pics/tiles/bridge_horizontal.png",
  WITH_ROCKS: "pics/tiles/mountain.png",
  WITH_WATER: "pics/tiles/oasis.png",
};

const RAIL_TYPES = {
  CURVE_RAIL: "curveRail",
  STRAIGHT_RAIL: "straightRail",
};

const RAILS = {
  CURVE_RAIL: "pics/tiles/curve_rail.png",
  STRAIGHT_RAIL: "pics/tiles/straight_rail.png",
};

const PLACED_RAILS = {
  BRIDGE_RAIL: "pics/tiles/bridge_rail.png",
  BRIDGE_RAIL_HORIZONTAL : "pics/tiles/bridge_horizontal.png",
  ROCKS_RAIL: "pics/tiles/mountain_rail.png",
  
}

const mapGrid1 = {
  map1: [
  //1
  [{ type: TILE_TYPES.EMPTY }, { type: TILE_TYPES.WITH_ROCKS, o : "90" }, { type: TILE_TYPES.EMPTY }, { type: TILE_TYPES.EMPTY }, { type: TILE_TYPES.WITH_WATER }],
  [{ type: TILE_TYPES.EMPTY }, { type: TILE_TYPES.EMPTY }, { type: TILE_TYPES.EMPTY }, { type: TILE_TYPES.WITH_BRIDGE }, { type: TILE_TYPES.WITH_WATER }],
  [{ type: TILE_TYPES.WITH_BRIDGE }, { type: TILE_TYPES.EMPTY }, { type: TILE_TYPES.WITH_ROCKS, o : "180" }, { type: TILE_TYPES.EMPTY }, { type: TILE_TYPES.EMPTY }],
  [{ type: TILE_TYPES.EMPTY }, { type: TILE_TYPES.EMPTY }, { type: TILE_TYPES.EMPTY }, { type: TILE_TYPES.WITH_WATER }, { type: TILE_TYPES.EMPTY }],
  [{ type: TILE_TYPES.EMPTY }, { type: TILE_TYPES.EMPTY }, { type: TILE_TYPES.WITH_ROCKS, o : "270" }, { type: TILE_TYPES.EMPTY }, { type: TILE_TYPES.EMPTY }],
],
map5:[
  //5
  
  [{ type: TILE_TYPES.EMPTY }, { type: TILE_TYPES.EMPTY}, { type: TILE_TYPES.WITH_BRIDGE_HORIZONTAL}, { type: TILE_TYPES.EMPTY }, { type: TILE_TYPES.EMPTY }],
  [{ type: TILE_TYPES.EMPTY }, { type: TILE_TYPES.WITH_ROCKS }, { type: TILE_TYPES.EMPTY }, { type: TILE_TYPES.EMPTY}, { type: TILE_TYPES.EMPTY }],
  [{ type: TILE_TYPES.WITH_BRIDGE }, { type: TILE_TYPES.EMPTY }, { type: TILE_TYPES.EMPTY }, { type: TILE_TYPES.WITH_ROCKS, o : "270" }, { type: TILE_TYPES.EMPTY }],
  [{ type: TILE_TYPES.EMPTY }, { type: TILE_TYPES.EMPTY }, { type: TILE_TYPES.WITH_BRIDGE }, { type: TILE_TYPES.WITH_WATER }, { type: TILE_TYPES.EMPTY }],
  [{ type: TILE_TYPES.EMPTY }, { type: TILE_TYPES.WITH_ROCKS, o : "180" }, { type: TILE_TYPES.EMPTY}, { type: TILE_TYPES.EMPTY }, { type: TILE_TYPES.EMPTY }],
],
map2:[
  //2
  
  [{ type: TILE_TYPES.WITH_WATER }, { type: TILE_TYPES.EMPTY}, { type: TILE_TYPES.WITH_BRIDGE_HORIZONTAL}, { type: TILE_TYPES.EMPTY }, { type: TILE_TYPES.EMPTY}],
  [{ type: TILE_TYPES.EMPTY }, { type: TILE_TYPES.WITH_ROCKS, o : "180"}, { type: TILE_TYPES.EMPTY }, { type: TILE_TYPES.EMPTY }, { type: TILE_TYPES.WITH_ROCKS, o: "180" }],
  [{ type: TILE_TYPES.WITH_BRIDGE }, { type: TILE_TYPES.WITH_WATER }, { type: TILE_TYPES.WITH_ROCKS, o : "270" }, { type: TILE_TYPES.EMPTY }, { type: TILE_TYPES.EMPTY }],
  [{ type: TILE_TYPES.EMPTY }, { type: TILE_TYPES.EMPTY }, { type: TILE_TYPES.EMPTY }, { type: TILE_TYPES.WITH_WATER }, { type: TILE_TYPES.EMPTY }],
  [{ type: TILE_TYPES.EMPTY }, { type: TILE_TYPES.EMPTY }, { type: TILE_TYPES.EMPTY }, { type: TILE_TYPES.EMPTY }, { type: TILE_TYPES.EMPTY }],
],
map3:[
  //3
  
  [{ type: TILE_TYPES.EMPTY }, { type: TILE_TYPES.EMPTY}, { type: TILE_TYPES.WITH_BRIDGE_HORIZONTAL}, { type: TILE_TYPES.EMPTY }, { type: TILE_TYPES.EMPTY}],
  [{ type: TILE_TYPES.EMPTY }, { type: TILE_TYPES.EMPTY}, { type: TILE_TYPES.EMPTY }, { type: TILE_TYPES.EMPTY }, { type: TILE_TYPES.WITH_BRIDGE }],
  [{ type: TILE_TYPES.EMPTY }, { type: TILE_TYPES.WITH_ROCKS, o : "180"}, { type: TILE_TYPES.WITH_BRIDGE }, { type: TILE_TYPES.EMPTY }, { type: TILE_TYPES.EMPTY }],
  [{ type: TILE_TYPES.EMPTY }, { type: TILE_TYPES.WITH_WATER}, { type: TILE_TYPES.EMPTY }, { type: TILE_TYPES.EMPTY }, { type: TILE_TYPES.EMPTY }],
  [{ type: TILE_TYPES.EMPTY }, { type: TILE_TYPES.WITH_BRIDGE_HORIZONTAL}, { type: TILE_TYPES.EMPTY }, { type: TILE_TYPES.EMPTY }, { type: TILE_TYPES.WITH_ROCKS, o : "180"}],

],
map4:[
  //4
  
  [{ type: TILE_TYPES.EMPTY }, { type: TILE_TYPES.EMPTY}, { type: TILE_TYPES.EMPTY}, { type: TILE_TYPES.WITH_BRIDGE_HORIZONTAL}, { type: TILE_TYPES.EMPTY}],
  [{ type: TILE_TYPES.EMPTY }, { type: TILE_TYPES.EMPTY}, { type: TILE_TYPES.EMPTY }, { type: TILE_TYPES.EMPTY }, { type: TILE_TYPES.EMPTY }],
  [{ type: TILE_TYPES.WITH_BRIDGE }, { type: TILE_TYPES.EMPTY}, { type: TILE_TYPES.WITH_ROCKS, o : "90" }, { type: TILE_TYPES.EMPTY }, { type: TILE_TYPES.WITH_ROCKS, o : "90" }],
  [{ type: TILE_TYPES.EMPTY }, { type: TILE_TYPES.EMPTY}, { type: TILE_TYPES.EMPTY }, { type: TILE_TYPES.EMPTY }, { type: TILE_TYPES.EMPTY }],
  [{ type: TILE_TYPES.EMPTY }, { type: TILE_TYPES.EMPTY}, { type: TILE_TYPES.WITH_WATER }, { type: TILE_TYPES.WITH_ROCKS, o : "270" }, { type: TILE_TYPES.EMPTY}],

],
};

const mapGrid2 = {
  hardMap1:[ 
    //1
    [{ type: TILE_TYPES.EMPTY}, { type: TILE_TYPES.WITH_ROCKS, o : "90"}, { type: TILE_TYPES.WITH_WATER }, { type: TILE_TYPES.WITH_WATER}, { type: TILE_TYPES.EMPTY }, { type: TILE_TYPES.WITH_BRIDGE_HORIZONTAL}, { type: TILE_TYPES.EMPTY}],
    [{ type: TILE_TYPES.WITH_BRIDGE}, { type: TILE_TYPES.EMPTY }, { type: TILE_TYPES.EMPTY }, { type: TILE_TYPES.EMPTY}, { type: TILE_TYPES.EMPTY }, { type: TILE_TYPES.EMPTY }, { type: TILE_TYPES.EMPTY }],
    [{ type: TILE_TYPES.EMPTY }, { type: TILE_TYPES.EMPTY }, { type: TILE_TYPES.WITH_BRIDGE}, { type: TILE_TYPES.EMPTY}, { type: TILE_TYPES.EMPTY }, { type: TILE_TYPES.EMPTY }, { type: TILE_TYPES.EMPTY }],
    [{ type: TILE_TYPES.EMPTY }, { type: TILE_TYPES.EMPTY }, { type: TILE_TYPES.EMPTY }, { type: TILE_TYPES.WITH_ROCKS, o : "270" }, { type: TILE_TYPES.EMPTY }, { type: TILE_TYPES.EMPTY }, { type: TILE_TYPES.EMPTY }],
    [{ type: TILE_TYPES.WITH_ROCKS, o: "270" }, { type: TILE_TYPES.EMPTY }, { type: TILE_TYPES.WITH_ROCKS, o : "90" }, { type: TILE_TYPES.EMPTY }, { type: TILE_TYPES.WITH_BRIDGE_HORIZONTAL}, { type: TILE_TYPES.EMPTY }, { type: TILE_TYPES.WITH_WATER }],
    [{ type: TILE_TYPES.EMPTY }, { type: TILE_TYPES.EMPTY }, { type: TILE_TYPES.EMPTY }, { type: TILE_TYPES.EMPTY }, { type: TILE_TYPES.EMPTY }, { type: TILE_TYPES.EMPTY }, { type: TILE_TYPES.EMPTY }],
    [{ type: TILE_TYPES.EMPTY }, { type: TILE_TYPES.EMPTY }, { type: TILE_TYPES.EMPTY }, { type: TILE_TYPES.WITH_BRIDGE_HORIZONTAL }, { type: TILE_TYPES.EMPTY }, { type: TILE_TYPES.EMPTY }, { type: TILE_TYPES.EMPTY }],
],

hardMap2:[ 
  //2
  [{ type: TILE_TYPES.EMPTY }, { type: TILE_TYPES.EMPTY }, { type: TILE_TYPES.WITH_WATER }, { type: TILE_TYPES.EMPTY }, { type: TILE_TYPES.EMPTY }, { type: TILE_TYPES.EMPTY }, { type: TILE_TYPES.EMPTY }],
  [{ type: TILE_TYPES.WITH_BRIDGE }, { type: TILE_TYPES.EMPTY }, { type: TILE_TYPES.WITH_BRIDGE_HORIZONTAL }, { type: TILE_TYPES.EMPTY }, { type: TILE_TYPES.EMPTY }, { type: TILE_TYPES.WITH_ROCKS, o : "180" }, { type: TILE_TYPES.EMPTY }],
  [{ type: TILE_TYPES.EMPTY }, { type: TILE_TYPES.EMPTY }, { type: TILE_TYPES.WITH_BRIDGE_HORIZONTAL }, { type: TILE_TYPES.EMPTY }, { type: TILE_TYPES.EMPTY }, { type: TILE_TYPES.EMPTY }, { type: TILE_TYPES.WITH_BRIDGE}],
  [{ type: TILE_TYPES.WITH_ROCKS}, { type: TILE_TYPES.EMPTY }, { type: TILE_TYPES.EMPTY }, { type: TILE_TYPES.EMPTY }, { type: TILE_TYPES.EMPTY }, { type: TILE_TYPES.EMPTY }, { type: TILE_TYPES.EMPTY }],
  [{ type: TILE_TYPES.EMPTY }, { type: TILE_TYPES.WITH_WATER }, { type: TILE_TYPES.EMPTY }, { type: TILE_TYPES.WITH_ROCKS, o:"90" }, { type: TILE_TYPES.EMPTY }, { type: TILE_TYPES.EMPTY }, { type: TILE_TYPES.EMPTY }],
  [{ type: TILE_TYPES.EMPTY }, { type: TILE_TYPES.WITH_ROCKS }, { type: TILE_TYPES.EMPTY }, { type: TILE_TYPES.EMPTY }, { type: TILE_TYPES.EMPTY }, { type: TILE_TYPES.EMPTY }, { type: TILE_TYPES.EMPTY }],
  [{ type: TILE_TYPES.EMPTY }, { type: TILE_TYPES.EMPTY }, { type: TILE_TYPES.WITH_WATER }, { type: TILE_TYPES.EMPTY }, { type: TILE_TYPES.EMPTY }, { type: TILE_TYPES.EMPTY }, { type: TILE_TYPES.EMPTY }]
]
,
  
  hardMap3:[
    //3
    [{ type: TILE_TYPES.EMPTY }, { type: TILE_TYPES.EMPTY}, { type: TILE_TYPES.WITH_BRIDGE_HORIZONTAL}, { type: TILE_TYPES.EMPTY }, { type: TILE_TYPES.EMPTY }, { type: TILE_TYPES.EMPTY }, { type: TILE_TYPES.EMPTY }],
    [{ type: TILE_TYPES.EMPTY }, { type: TILE_TYPES.EMPTY }, { type: TILE_TYPES.EMPTY }, { type: TILE_TYPES.EMPTY }, { type: TILE_TYPES.EMPTY }, { type: TILE_TYPES.EMPTY }, { type: TILE_TYPES.WITH_BRIDGE }],
    [{ type: TILE_TYPES.WITH_WATER }, { type: TILE_TYPES.EMPTY }, { type: TILE_TYPES.WITH_ROCKS, o:"270" }, { type: TILE_TYPES.EMPTY }, { type: TILE_TYPES.EMPTY }, { type: TILE_TYPES.EMPTY }, { type: TILE_TYPES.EMPTY }],
    [{ type: TILE_TYPES.EMPTY }, { type: TILE_TYPES.EMPTY }, { type: TILE_TYPES.EMPTY }, { type: TILE_TYPES.EMPTY }, { type: TILE_TYPES.EMPTY }, { type: TILE_TYPES.EMPTY }, { type: TILE_TYPES.EMPTY }],
    [{ type: TILE_TYPES.EMPTY }, { type: TILE_TYPES.WITH_WATER }, { type: TILE_TYPES.WITH_ROCKS, o:"270" }, { type: TILE_TYPES.EMPTY }, { type: TILE_TYPES.WITH_BRIDGE_HORIZONTAL }, { type: TILE_TYPES.EMPTY}, { type: TILE_TYPES.EMPTY }],
    [{ type: TILE_TYPES.WITH_BRIDGE }, { type: TILE_TYPES.EMPTY }, { type: TILE_TYPES.EMPTY }, { type: TILE_TYPES.EMPTY }, { type: TILE_TYPES.EMPTY }, { type: TILE_TYPES.WITH_ROCKS, o:"90" }, { type: TILE_TYPES.EMPTY }],
    [{ type: TILE_TYPES.EMPTY }, { type: TILE_TYPES.EMPTY }, { type: TILE_TYPES.WITH_WATER}, { type: TILE_TYPES.WITH_ROCKS, o:"270" }, { type: TILE_TYPES.EMPTY }, { type: TILE_TYPES.EMPTY }, { type: TILE_TYPES.EMPTY }]
  ],
  
  hardMap4:[
    //4
    [{ type: TILE_TYPES.EMPTY}, { type: TILE_TYPES.EMPTY }, { type: TILE_TYPES.EMPTY }, { type: TILE_TYPES.EMPTY }, { type: TILE_TYPES.EMPTY },{ type: TILE_TYPES.EMPTY },{ type: TILE_TYPES.EMPTY }],
    [{ type: TILE_TYPES.EMPTY }, { type: TILE_TYPES.EMPTY }, { type: TILE_TYPES.EMPTY }, { type: TILE_TYPES.WITH_BRIDGE }, { type: TILE_TYPES.EMPTY },{ type: TILE_TYPES.WITH_ROCKS, o:"180" },{ type: TILE_TYPES.EMPTY }],
    [{ type: TILE_TYPES.EMPTY }, { type: TILE_TYPES.EMPTY }, { type: TILE_TYPES.WITH_ROCKS,o:"270" }, { type: TILE_TYPES.EMPTY }, { type: TILE_TYPES.EMPTY },{ type: TILE_TYPES.EMPTY},{ type: TILE_TYPES.EMPTY }],
    [{ type: TILE_TYPES.EMPTY}, { type: TILE_TYPES.WITH_BRIDGE_HORIZONTAL}, { type: TILE_TYPES.EMPTY }, { type: TILE_TYPES.WITH_WATER }, { type: TILE_TYPES.EMPTY },{ type: TILE_TYPES.WITH_BRIDGE_HORIZONTAL},{ type: TILE_TYPES.EMPTY }],
    [{ type: TILE_TYPES.EMPTY}, { type: TILE_TYPES.EMPTY }, { type: TILE_TYPES.WITH_ROCKS,o:"180" }, { type: TILE_TYPES.EMPTY }, { type: TILE_TYPES.WITH_ROCKS, o:"90" },{ type: TILE_TYPES.EMPTY },{ type: TILE_TYPES.EMPTY }],
    [{ type: TILE_TYPES.WITH_BRIDGE }, { type: TILE_TYPES.EMPTY }, { type: TILE_TYPES.EMPTY }, { type: TILE_TYPES.EMPTY }, { type: TILE_TYPES.EMPTY },{ type: TILE_TYPES.WITH_ROCKS, o:"270" },{ type: TILE_TYPES.EMPTY }],
    [{ type: TILE_TYPES.EMPTY }, { type: TILE_TYPES.EMPTY }, { type: TILE_TYPES.EMPTY }, { type: TILE_TYPES.EMPTY }, { type: TILE_TYPES.EMPTY },{ type: TILE_TYPES.EMPTY },{ type: TILE_TYPES.EMPTY }],
  ],
  hardMap5:[
    //5
    [{ type: TILE_TYPES.EMPTY }, { type: TILE_TYPES.EMPTY }, { type: TILE_TYPES.EMPTY }, { type: TILE_TYPES.EMPTY }, { type: TILE_TYPES.EMPTY },{ type: TILE_TYPES.EMPTY },{ type: TILE_TYPES.EMPTY }],
    [{ type: TILE_TYPES.EMPTY }, { type: TILE_TYPES.EMPTY }, { type: TILE_TYPES.EMPTY }, { type: TILE_TYPES.EMPTY }, { type: TILE_TYPES.EMPTY },{ type: TILE_TYPES.WITH_ROCKS },{ type: TILE_TYPES.EMPTY}],
    [{ type: TILE_TYPES.EMPTY }, { type: TILE_TYPES.WITH_BRIDGE_HORIZONTAL }, { type: TILE_TYPES.WITH_BRIDGE_HORIZONTAL}, { type: TILE_TYPES.EMPTY }, { type: TILE_TYPES.WITH_ROCKS, o:"90" },{ type: TILE_TYPES.EMPTY },{ type: TILE_TYPES.EMPTY }],
    [{ type: TILE_TYPES.EMPTY }, { type: TILE_TYPES.EMPTY }, { type: TILE_TYPES.EMPTY }, { type: TILE_TYPES.EMPTY }, { type: TILE_TYPES.EMPTY },{ type: TILE_TYPES.EMPTY },{ type: TILE_TYPES.EMPTY }],
    [{ type: TILE_TYPES.EMPTY }, { type: TILE_TYPES.EMPTY }, { type: TILE_TYPES.WITH_ROCKS }, { type: TILE_TYPES.EMPTY }, { type: TILE_TYPES.WITH_WATER },{ type: TILE_TYPES.EMPTY },{ type: TILE_TYPES.EMPTY }],
    [{ type: TILE_TYPES.EMPTY }, { type: TILE_TYPES.WITH_ROCKS, o:"180" }, { type: TILE_TYPES.EMPTY }, { type: TILE_TYPES.WITH_BRIDGE }, { type: TILE_TYPES.EMPTY },{ type: TILE_TYPES.EMPTY },{ type: TILE_TYPES.EMPTY }],
    [{ type: TILE_TYPES.EMPTY }, { type: TILE_TYPES.EMPTY }, { type: TILE_TYPES.EMPTY }, { type: TILE_TYPES.EMPTY }, { type: TILE_TYPES.EMPTY },{ type: TILE_TYPES.EMPTY },{ type: TILE_TYPES.EMPTY }],
  ],
};
const menuData = {
  menuText: {
    title: "RAILWAYS",
    playerPrompt: "WHO ARE YOU?",
    difficultyPrompt: "SET THE DIFFICULTY!",
    rulesButton: "RULES",
    startButton: "START GAME",
  },
  currentDifficulty: {},
  difficulties: [
    { name: "easy", size: 5 },
    { name: "hard", size: 7 },
  ],
};
const PLACED_TYPES = {
  RAIL_WITH_BRIDGE:"bridgeRail",
  RAIL_WITH_ROCKS_0:"rocksRail",
  EMPTY_RAIL_STRAIGHT:"emptyStraightRail",
  RAIL_WITH_ROCKS_90:"rocksRail90",
  RAIL_WITH_ROCKS_180:"rocksRail180",
  RAIL_WITH_ROCKS_270:"rocksRail270",
  RAIL_WITH_BRIDGE_HORIZONTAL:"bridgeRailHorizontal",
}


const RAIL_EXIT_POINTS = {
  RAIL_WITH_BRIDGE: { top: true, bottom: true, left: false, right: false },  // Vertical
  RAIL_WITH_BRIDGE_HORIZONTAL: { top: false, bottom: false, left: true, right: true },  // Horizontal
  RAIL_WITH_ROCKS: {
    0: { top: false, right: true, bottom: true, left: false },  // Exits on bottom and right
    90: { top: false, right: false, bottom: true, left: true },  // Exits on bottom and left
    180: { top: true, right: false, bottom: false, left: true },  // Exits on top and left
    270: { top: true, right: true, bottom: false, left: false },  // Exits on top and right
  },
  RAIL_WITH_WATER: { top: false, bottom: false, left: false, right: false },  // No exits
  RAIL_EMPTY: {
    curved: {
      0: { top: false, right: true, bottom: true, left: false },  // Exits on bottom and right
      90: { top: false, right: false, bottom: true, left: true },  // Exits on bottom and left
      180: { top: true, right: false, bottom: false, left: true },  // Exits on top and left
      270: { top: true, right: true, bottom: false, left: false },  // Exits on top and right
    },
    straight: {
      0: { top: true, right: false, bottom: true, left: false },  // Vertical (top and bottom)
      90: { top: false, right: true, bottom: false, left: true },  // Horizontal (left and right)
      180: { top: true, right: false, bottom: true, left: false },  // Vertical (top and bottom)
      270: { top: false, right: true, bottom: false, left: true },  // Horizontal (left and right)
    }
  },
};
