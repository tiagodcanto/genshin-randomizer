import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  regisvine = [
    "Regisvine Cryo",
    "Regisvine Pyro"
  ];

  hypostate = [
    "Hypostate Electro",
    "Hypostate Ameno",
    "Hypostate Geo",
  ];

  fatui = [
  "Fatui Agent or Mage Cryo",
  "Fatui Agent or Mage Pyro",
  "Fatui Agent or Mage Electro",
  "Fatui Agent or Mage Hydro",
  "Fatui Agent or Mage Geo",
  "Geochanter Bracers",
  "Pyroslinger Bracers",
  "Fatui Cryo Cicin Mages",
  "Fatui Electro Cicin Mages",
  "Cryogunner Legionnaires",
  "Anemoboxer Vanguards",
  "Electrohammer Vanguards",
  "Hydrogunner Legionnaires",
  "Fatui Agent or Mage",
  ];

  ruinMech = [
    "Ruin Hunter",
    "Ruin Guard",
    "Ruin Mech",
  ];

  abyssMage = [
    "Cryo Mage",
    "Pyro Mage",
    "Hydro Mage",
    "Abyss Mage",
  ];

  eliteHilichurl = [
    "Mitachurl Axe",
    "Mitachurl Bomb",
    "Mitachurl Shield",
    "Mitachurl",
    "Chieftain",
    "Mitachurl Shield rock",
    "Mitachurl Shield wood",
    "Mitachurl Shield Cryo",
    "Stonehide Lawachurls",
    "Frostarm Lawachurls",
    "Elite Hilichurl",
  ];

  eliteCreatures = [
    "Eye of the storm",
    "Geovishap Hatchling",
    "Geovishap Adult",
    "Geovishap",
    "Elite Creature",
  ];

  whopperFlower = [
    "Whopperflower Pyro",
    "Whopperflower Cryo",
  ];

  easyHilichurl = [
    "Hilichurl Fighters",
    "Samachurl Cryo",
    "Hilichurl Shooter Cryo",
    "Samachurl Dendro",
    "Hilichurl Shooter Electro",
    "Samachurl Geo",
    "Hilichurl Shooter Pyro",
    "Samachurl hydro",
    "Hilichurl Grenadiers Pyro",
    "Hilichurl Grenadiers cryo",
    "Hilichurl Guards",
    "Rock Shield Hilichurl Guards",
    "Ice Shield Hilichurl Guard",
    "Hilichurl Shooters",
    "Samachurl Anemo",
    "Easy Hilichurl",
    "Samachurl",
    "Hilichurl guard",
    "Hilichurl shooter",
    "Hilichurl Grenadiers",
  ];

  slime = [
    "Cryo Slime",
    "Pyro Slime",
    "Electro Slime",
    "Hydro Slime",
    "Geo Slime",
    "Dendro Slime",
    "Anemo Slime",
    "Large Cryo Slime",
    "Large Pyro Slime",
    "Large Electro Slime",
    "Large Hydro Slime",
    "Large Geo Slime",
    "Large Dendro Slime",
    "Large Anemo Slime",
  ];

  easyHumanEnemy = [
    "Treasure Hoarder",
    "Fatui Skirmisher",
  ];

  flower = [
    "Mint",
    "Snapdragon",
    "Valberry",
    "Calla lily",
    "Small Lamp Grass",
    "Windwheel Aster",
    "Wolfhook",
    "Philanemo Mushroom",
    "Dandelion Seed",
    "Cecilia",
    "Glaze Lily",
    "Qingxin",
    "Silk Flower",
    "Violetgrass",
    "Qingxin",
    "Sweet Flower",
    "Horsetail",
    "Flaming Flower Stamen",
    "Mist Flower Corolla",
  ];

  vegetablesFruit = [
    "Cabbage",
    "Carrot",
    "Mushroom",
    "Matsutake",
    "Lotus head",
    "Wheat",
    "Bamboo Shoot",
    "Potato",
    "Pinecone",
    "Jueyun Chilli",
    "Sunsetia",
    "Apple",
    "Berry",
    "Tomato",
    "Radish",
    "Random Vegetable",
    "Random Fruit",
  ];

  animal = [
    "Chilled meat",
    "Meat",
    "Crab",
    "Egg",
    "Fowl",
    "Fish",
    "Butterfly Wings",
    "Lizard Tail",
    "Frog",
    "Firefly",
    "Anemo Crystalfly",
    "Geo Crystalfly",
    "Cryo Crystalfly",
  ];

  rock = [
    "Starconch",
    "Cor Lapis",
    "Noctilucous Jade",
    "Loach Pearl",
    "Starsilver",
    "Electro Crystal",
    "Iron Chunk",
    "White Iron Chunk",
    "Crystal Chunks",
    "Magical Crystal Chunks",
  ];

  random: {
    regisvine: string,
    hypostate: string,
    fatui: string,
    ruinMech: string,
    abyssMage: string,
    eliteHilichurl: string,
    eliteCreatures: string,
    whopperFlower: string,
    easyHilichurl: string,
    slime: string,
    easyHumanEnemy: string,
    flower: string,
    vegetablesFruit: string,
    animal: string,
    rock: string,
  };

  constructor() {}

  randomizer(list: string[]) {
    let rd = Math.floor(Math.random() * list.length);
    let result = list[rd];
    return result;
  }

  clickRandom(){
    let regisvine = this.randomizer(this.regisvine);
    let hypostate = this.randomizer(this.hypostate);
    let fatui = this.randomizer(this.fatui);
    let ruinMech = this.randomizer(this.ruinMech);
    let abyssMage = this.randomizer(this.abyssMage);
    let eliteHilichurl = this.randomizer(this.eliteHilichurl);
    let eliteCreatures = this.randomizer(this.eliteCreatures);
    let whopperFlower = this.randomizer(this.whopperFlower);
    let easyHilichurl = this.randomizer(this.easyHilichurl);
    let slime = this.randomizer(this.slime);
    let easyHumanEnemy = this.randomizer(this.easyHumanEnemy);
    let flower = this.randomizer(this.flower);
    let vegetablesFruit = this.randomizer(this.vegetablesFruit);
    let animal = this.randomizer(this.animal);
    let rock = this.randomizer(this.rock);

    this.random = {
      regisvine,
      hypostate,
      fatui,
      ruinMech,
      abyssMage,
      eliteHilichurl,
      eliteCreatures,
      whopperFlower,
      easyHilichurl,
      slime,
      easyHumanEnemy,
      flower,
      vegetablesFruit,
      animal,
      rock,
    }
  }
}
