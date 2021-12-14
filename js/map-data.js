let mapData = [];

function initMapData() {
  mapData.push("blank");
  // Level 1: Horizontal Binary - Two Bars
  mapData.push([
    ["ground", "ground", "ground", "ground", "ground", "water", "water", "water", "water", "water", "water", "water"],
    ["ground", "ground", "ground", "ground", "ground", "water", "water", "water", "water", "water", "water", "water"],
    ["ground", "ground", "ground", "ground", "ground", "water", "water", "water", "water", "water", "water", "water"],
    ["ground", "ground", "ground", "ground", "ground", "water", "water", "water", "water", "water", "water", "water"],
    ["ground", "ground", "ground", "ground", "ground", "water", "water", "water", "water", "water", "water", "water"],
    ["ground", "ground", "ground", "ground", "ground", "water", "water", "water", "water", "water", "water", "water"],
    ["ground", "ground", "ground", "ground", "ground", "water", "water", "water", "water", "water", "water", "water"],
    ["ground", "ground", "ground", "ground", "ground", "water", "water", "water", "water", "water", "water", "water"]
  ]);

  // Level 2: Horizontal Chained - Three Bars
  mapData.push([
    ["trees", "trees", "trees", "ground", "ground", "ground", "ground", "ground", "water", "water", "water", "water"],
    ["trees", "trees", "trees", "ground", "ground", "ground", "ground", "ground", "water", "water", "water", "water"],
    ["trees", "trees", "trees", "ground", "ground", "ground", "ground", "ground", "water", "water", "water", "water"],
    ["trees", "trees", "trees", "ground", "ground", "ground", "ground", "ground", "water", "water", "water", "water"],
    ["trees", "trees", "trees", "ground", "ground", "ground", "ground", "ground", "water", "water", "water", "water"],
    ["trees", "trees", "trees", "ground", "ground", "ground", "ground", "ground", "water", "water", "water", "water"],
    ["trees", "trees", "trees", "ground", "ground", "ground", "ground", "ground", "water", "water", "water", "water"],
    ["trees", "trees", "trees", "ground", "ground", "ground", "ground", "ground", "water", "water", "water", "water"]
  ]);

  // Level 3: Horizontal Binary - Three Bars
  mapData.push([
    ["trees", "trees", "trees", "ground", "ground", "ground", "ground", "ground", "trees", "trees", "trees", "trees"],
    ["trees", "trees", "trees", "ground", "ground", "ground", "ground", "ground", "trees", "trees", "trees", "trees"],
    ["trees", "trees", "trees", "ground", "ground", "ground", "ground", "ground", "trees", "trees", "trees", "trees"],
    ["trees", "trees", "trees", "ground", "ground", "ground", "ground", "ground", "trees", "trees", "trees", "trees"],
    ["trees", "trees", "trees", "ground", "ground", "ground", "ground", "ground", "trees", "trees", "trees", "trees"],
    ["trees", "trees", "trees", "ground", "ground", "ground", "ground", "ground", "trees", "trees", "trees", "trees"],
    ["trees", "trees", "trees", "ground", "ground", "ground", "ground", "ground", "trees", "trees", "trees", "trees"],
    ["trees", "trees", "trees", "ground", "ground", "ground", "ground", "ground", "trees", "trees", "trees", "trees"]
  ]);

  // Level 4: Vertical Binary - Two Bars
  mapData.push([
    ["trees", "trees", "trees", "trees", "trees", "trees", "trees", "trees", "trees", "trees", "trees", "trees"],
    ["trees", "trees", "trees", "trees", "trees", "trees", "trees", "trees", "trees", "trees", "trees", "trees"],
    ["trees", "trees", "trees", "trees", "trees", "trees", "trees", "trees", "trees", "trees", "trees", "trees"],
    ["ground", "ground", "ground", "ground", "ground", "ground", "ground", "ground", "ground", "ground", "ground", "ground"], 
    ["ground", "ground", "ground", "ground", "ground", "ground", "ground", "ground", "ground", "ground", "ground", "ground"], 
    ["ground", "ground", "ground", "ground", "ground", "ground", "ground", "ground", "ground", "ground", "ground", "ground"], 
    ["ground", "ground", "ground", "ground", "ground", "ground", "ground", "ground", "ground", "ground", "ground", "ground"], 
    ["ground", "ground", "ground", "ground", "ground", "ground", "ground", "ground", "ground", "ground", "ground", "ground"]
  ]);

  // Level 5: Vertical Chained - Three Bars
  mapData.push([
    ["trees", "trees", "trees", "trees", "trees", "trees", "trees", "trees", "trees", "trees", "trees", "trees"],
    ["trees", "trees", "trees", "trees", "trees", "trees", "trees", "trees", "trees", "trees", "trees", "trees"],
    ["trees", "trees", "trees", "trees", "trees", "trees", "trees", "trees", "trees", "trees", "trees", "trees"],
    ["ground", "ground", "ground", "ground", "ground", "ground", "ground", "ground", "ground", "ground", "ground", "ground"], 
    ["ground", "ground", "ground", "ground", "ground", "ground", "ground", "ground", "ground", "ground", "ground", "ground"], 
    ["ground", "ground", "ground", "ground", "ground", "ground", "ground", "ground", "ground", "ground", "ground", "ground"], 
    ["water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water"],
    ["water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water"]
  ]);

  // Level 6: Vertical Binary - Three Bars
  mapData.push([
    ["water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water"], 
    ["water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water"], 
    ["ground", "ground", "ground", "ground", "ground", "ground", "ground", "ground", "ground", "ground", "ground", "ground"], 
    ["ground", "ground", "ground", "ground", "ground", "ground", "ground", "ground", "ground", "ground", "ground", "ground"], 
    ["ground", "ground", "ground", "ground", "ground", "ground", "ground", "ground", "ground", "ground", "ground", "ground"], 
    ["ground", "ground", "ground", "ground", "ground", "ground", "ground", "ground", "ground", "ground", "ground", "ground"], 
    ["water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water"], 
    ["water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water"]
  ]);

  // Level 7: Binary - Single Tile
  mapData.push([
    ["ground", "ground", "ground", "ground", "ground", "ground", "ground", "ground", "ground", "ground", "ground", "ground"],
    ["ground", "ground", "ground", "ground", "ground", "ground", "ground", "ground", "ground", "ground", "ground", "ground"],
    ["ground", "ground", "ground", "ground", "ground", "ground", "ground", "ground", "ground", "ground", "ground", "ground"],
    ["ground", "ground", "ground", "ground", "ground", "ground", "ground", "ground", "ground", "ground", "ground", "ground"],
    ["ground", "ground", "ground", "ground", "ground", "ground", "ground", "water", "ground", "ground", "ground", "ground"],
    ["ground", "ground", "ground", "ground", "ground", "ground", "ground", "ground", "ground", "ground", "ground", "ground"],
    ["ground", "ground", "ground", "ground", "ground", "ground", "ground", "ground", "ground", "ground", "ground", "ground"],
    ["ground", "ground", "ground", "ground", "ground", "ground", "ground", "ground", "ground", "ground", "ground", "ground"]
  ]);

  // Level 8: Binary - Single Row & Column Intersect
  mapData.push([
    ["ground", "ground", "bush", "ground", "ground", "ground", "ground", "ground", "ground", "ground", "ground", "ground"],
    ["ground", "ground", "bush", "ground", "ground", "ground", "ground", "ground", "ground", "ground", "ground", "ground"],
    ["ground", "ground", "bush", "ground", "ground", "ground", "ground", "ground", "ground", "ground", "ground", "ground"],
    ["ground", "ground", "bush", "ground", "ground", "ground", "ground", "ground", "ground", "ground", "ground", "ground"],
    ["ground", "ground", "bush", "ground", "ground", "ground", "ground", "ground", "ground", "ground", "ground", "ground"],
    ["bush", "bush", "bush", "bush", "bush", "bush", "bush", "bush", "bush", "bush", "bush", "bush"],
    ["ground", "ground", "bush", "ground", "ground", "ground", "ground", "ground", "ground", "ground", "ground", "ground"],
    ["ground", "ground", "bush", "ground", "ground", "ground", "ground", "ground", "ground", "ground", "ground", "ground"]
  ]);

  // Level 9: Binary - Corner Box & Remaining Area
  mapData.push([
    ["water", "water", "water", "water", "water", "water", "ground", "ground", "ground", "ground", "ground", "ground"],
    ["water", "water", "water", "water", "water", "water", "ground", "ground", "ground", "ground", "ground", "ground"],
    ["water", "water", "water", "water", "water", "water", "ground", "ground", "ground", "ground", "ground", "ground"],
    ["water", "water", "water", "water", "water", "water", "ground", "ground", "ground", "ground", "ground", "ground"],
    ["water", "water", "water", "water", "water", "water", "ground", "ground", "ground", "ground", "ground", "ground"],
    ["water", "water", "water", "water", "water", "water", "ground", "ground", "ground", "ground", "ground", "ground"],
    ["ground", "ground", "ground", "ground", "ground", "ground", "ground", "ground", "ground", "ground", "ground", "ground"], 
    ["ground", "ground", "ground", "ground", "ground", "ground", "ground", "ground", "ground", "ground", "ground", "ground"]
  ]);

  // Level 10: Vertical Chained - Four Bars
  mapData.push([
    ["trees", "trees", "bush", "bush", "ground", "ground", "ground", "ground", "water", "water", "water", "water"],
    ["trees", "trees", "bush", "bush", "ground", "ground", "ground", "ground", "water", "water", "water", "water"],
    ["trees", "trees", "bush", "bush", "ground", "ground", "ground", "ground", "water", "water", "water", "water"],
    ["trees", "trees", "bush", "bush", "ground", "ground", "ground", "ground", "water", "water", "water", "water"],
    ["trees", "trees", "bush", "bush", "ground", "ground", "ground", "ground", "water", "water", "water", "water"],
    ["trees", "trees", "bush", "bush", "ground", "ground", "ground", "ground", "water", "water", "water", "water"],
    ["trees", "trees", "bush", "bush", "ground", "ground", "ground", "ground", "water", "water", "water", "water"],
    ["trees", "trees", "bush", "bush", "ground", "ground", "ground", "ground", "water", "water", "water", "water"]
  ]);

  // Level 11: Chained - Four Boxes
  mapData.push([
    ["water", "water", "water", "water", "water", "water", "trees", "trees", "trees", "trees", "trees", "trees"],
    ["water", "water", "water", "water", "water", "water", "trees", "trees", "trees", "trees", "trees", "trees"],
    ["water", "water", "water", "water", "water", "water", "trees", "trees", "trees", "trees", "trees", "trees"],
    ["water", "water", "water", "water", "water", "water", "trees", "trees", "trees", "trees", "trees", "trees"],
    ["ground", "ground", "ground", "ground", "ground", "ground", "bush", "bush", "bush", "bush", "bush", "bush"],
    ["ground", "ground", "ground", "ground", "ground", "ground", "bush", "bush", "bush", "bush", "bush", "bush"],
    ["ground", "ground", "ground", "ground", "ground", "ground", "bush", "bush", "bush", "bush", "bush", "bush"],
    ["ground", "ground", "ground", "ground", "ground", "ground", "bush", "bush", "bush", "bush", "bush", "bush"]
  ]);

  // Level 12: Binary - Four Boxes
  mapData.push([
    ["water", "water", "water", "water", "water", "water", "ground", "ground", "ground", "ground", "ground", "ground"],
    ["water", "water", "water", "water", "water", "water", "ground", "ground", "ground", "ground", "ground", "ground"],
    ["water", "water", "water", "water", "water", "water", "ground", "ground", "ground", "ground", "ground", "ground"],
    ["water", "water", "water", "water", "water", "water", "ground", "ground", "ground", "ground", "ground", "ground"],
    ["water", "water", "water", "water", "water", "water", "ground", "ground", "ground", "ground", "ground", "ground"],
    ["ground", "ground", "ground", "ground", "ground", "ground", "water", "water", "water", "water", "water", "water"],
    ["ground", "ground", "ground", "ground", "ground", "ground", "water", "water", "water", "water", "water", "water"],
    ["ground", "ground", "ground", "ground", "ground", "ground", "water", "water", "water", "water", "water", "water"]
  ]);

  // Level 13: Binary - Center Box & Remaining Area
  mapData.push([
    ["bush", "bush", "bush", "bush", "bush", "bush", "bush", "bush", "bush", "bush", "bush", "bush"],
    ["bush", "bush", "bush", "bush", "bush", "bush", "bush", "bush", "bush", "bush", "bush", "bush"],
    ["bush", "bush", "bush", "bush", "ground", "ground", "ground", "ground", "ground", "ground", "bush", "bush"],
    ["bush", "bush", "bush", "bush", "ground", "ground", "ground", "ground", "ground", "ground", "bush", "bush"],
    ["bush", "bush", "bush", "bush", "ground", "ground", "ground", "ground", "ground", "ground", "bush", "bush"],
    ["bush", "bush", "bush", "bush", "ground", "ground", "ground", "ground", "ground", "ground", "bush", "bush"],
    ["bush", "bush", "bush", "bush", "bush", "bush", "bush", "bush", "bush", "bush", "bush", "bush"],
    ["bush", "bush", "bush", "bush", "bush", "bush", "bush", "bush", "bush", "bush", "bush", "bush"]
  ]);

  // Level 14: Chained - Two Boxes & Remaining Area
  mapData.push([
    ["ground", "ground", "ground", "ground", "ground", "ground", "ground", "ground", "ground", "ground", "ground", "ground"], 
    ["ground", "ground", "bush", "bush", "bush", "ground", "ground", "ground", "ground", "ground", "ground", "ground"],
    ["ground", "ground", "bush", "bush", "bush", "ground", "ground", "ground", "ground", "ground", "ground", "ground"],
    ["ground", "ground", "bush", "bush", "bush", "ground", "ground", "water", "water", "water", "water", "ground"],
    ["ground", "ground", "bush", "bush", "bush", "ground", "ground", "water", "water", "water", "water", "ground"],
    ["ground", "ground", "bush", "bush", "bush", "ground", "ground", "water", "water", "water", "water", "ground"],
    ["ground", "ground", "ground", "ground", "ground", "ground", "ground", "ground", "ground", "ground", "ground", "ground"], 
    ["ground", "ground", "ground", "ground", "ground", "ground", "ground", "ground", "ground", "ground", "ground", "ground"]
  ]);
}