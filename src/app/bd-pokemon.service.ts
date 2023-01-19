import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BdPokemonService {
  private pokemons:Array<any> = [
    {
      "Name": "Charmander",
      "Stats": {
        "Hp": 9,
        "Atk": 52,
        "Def": 43,
        "SpAtk": 60,
        "SpDef": 50,
        "Spd": 65,
        "Total": 309
      },
      "Types": [
        "Fire"
      ],
      "Abilities": [
        "Blaze",
        "Blaze",
        "Solar Power"
      ],
      "Evolutions": {
        "Level": 16,
        "Condition": "LEVELUP",
        "Parameters": "[0, 0, 0, 0]",
        "Species": "Charmeleon",
        "Form": 0
      },
      "Moves": {
        "LearnedMoves": {
          "MovesLevels": {
            "Scratch": "Lv. 1",
            "Growl": "Lv. 1",
            "Ember": "Lv. 4",
            "Smokescreen": "Lv. 8",
            "Dragon Breath": "Lv. 12",
            "Fire Fang": "Lv. 17",
            "Slash": "Lv. 20",
            "Flamethrower": "Lv. 24",
            "Scary Face": "Lv. 28",
            "Fire Spin": "Lv. 32",
            "Inferno": "Lv. 36",
            "Flare Blitz": "Lv. 40"
          }
        },
        "EggMoves": [
          "Bite",
          "Counter",
          "Belly Drum",
          "Iron Tail",
          "Metal Claw",
          "Ancient Power",
          "Dragon Rush",
          "Dragon Tail"
        ],
        "TmMoves": [
          "Fire Punch",
          "Thunder Punch",
          "Swords Dance",
          "Body Slam",
          "Take Down",
          "Flamethrower",
          "Fire Spin",
          "Dig",
          "Fire Blast",
          "Swift",
          "Rest",
          "Rock Slide",
          "Substitute",
          "Protect",
          "Scary Face",
          "Outrage",
          "Endure",
          "False Swipe",
          "Sleep Talk",
          "Metal Claw",
          "Sunny Day",
          "Crunch",
          "Heat Wave",
          "Will-O-Wisp",
          "Facade",
          "Helping Hand",
          "Brick Break",
          "Overheat",
          "Rock Tomb",
          "Dragon Claw",
          "Dragon Dance",
          "Fling",
          "Flare Blitz",
          "Dragon Pulse",
          "Focus Blast",
          "Shadow Claw",
          "Fire Fang",
          "Flame Charge",
          "Fire Pledge",
          "Dragon Tail",
          "Tera Blast"
        ]
      }
    },
    {
      "Name": "Charmeleon",
      "Stats": {
        "Hp": 8,
        "Atk": 64,
        "Def": 58,
        "SpAtk": 80,
        "SpDef": 65,
        "Spd": 80,
        "Total": 405
      },
      "Types": [
        "Fire"
      ],
      "Abilities": [
        "Blaze",
        "Blaze",
        "Solar Power"
      ],
      "Evolutions": {
        "Level": 36,
        "Condition": "LEVELUP",
        "Parameters": "[0, 0, 0, 0]",
        "Species": "Charizard",
        "Form": 0
      },
      "Moves": {
        "LearnedMoves": {
          "MovesLevels": {
            "Scratch": "Lv. 1",
            "Growl": "Lv. 1",
            "Ember": "Lv. 1",
            "Smokescreen": "Lv. 1",
            "Dragon Breath": "Lv. 12",
            "Fire Fang": "Lv. 19",
            "Slash": "Lv. 24",
            "Flamethrower": "Lv. 30",
            "Scary Face": "Lv. 37",
            "Inferno": "Lv. 48",
            "Flare Blitz": "Lv. 54"
          }
        },
        "EggMoves": [],
        "TmMoves": [
          "Fire Punch",
          "Thunder Punch",
          "Swords Dance",
          "Body Slam",
          "Take Down",
          "Flamethrower",
          "Fire Spin",
          "Dig",
          "Fire Blast",
          "Swift",
          "Rest",
          "Rock Slide",
          "Substitute",
          "Protect",
          "Scary Face",
          "Outrage",
          "Endure",
          "False Swipe",
          "Sleep Talk",
          "Sunny Day",
          "Crunch",
          "Heat Wave",
          "Will-O-Wisp",
          "Facade",
          "Helping Hand",
          "Brick Break",
          "Overheat",
          "Rock Tomb",
          "Dragon Claw",
          "Dragon Dance",
          "Fling",
          "Flare Blitz",
          "Dragon Pulse",
          "Shadow Claw",
          "Fire Fang",
          "Flame Charge",
          "Fire Pledge",
          "Dragon Tail",
          "Tera Blast"
        ]
      }
    },
    {
      "Name": "Charizard",
      "Stats": {
        "Hp": 8,
        "Atk": 84,
        "Def": 78,
        "SpAtk": 109,
        "SpDef": 85,
        "Spd": 100,
        "Total": 534
      },
      "Types": [
        "Fire",
        "Flying"
      ],
      "Abilities": [
        "Blaze",
        "Blaze",
        "Solar Power"
      ],
      "Evolutions": {
        "Level": null,
        "Condition": null,
        "Parameters": null,
        "Species": null,
        "Form": null
      },
      "Moves": {
        "LearnedMoves": {
          "MovesLevels": {
            "Air Slash": "Evolution",
            "Scratch": "Lv. 1",
            "Growl": "Lv. 1",
            "Ember": "Lv. 1",
            "Smokescreen": "Lv. 1",
            "Heat Wave": "Lv. 1",
            "Dragon Claw": "Lv. 1",
            "Dragon Breath": "Lv. 12",
            "Fire Fang": "Lv. 19",
            "Slash": "Lv. 24",
            "Flamethrower": "Lv. 30",
            "Scary Face": "Lv. 39",
            "Fire Spin": "Lv. 46",
            "Inferno": "Lv. 54",
            "Flare Blitz": "Lv. 62"
          }
        },
        "EggMoves": [],
        "TmMoves": [
          "Fire Punch",
          "Thunder Punch",
          "Swords Dance",
          "Fly",
          "Body Slam",
          "Take Down",
          "Flamethrower",
          "Hyper Beam",
          "Solar Beam",
          "Fire Spin",
          "Earthquake",
          "Dig",
          "Fire Blast",
          "Swift",
          "Rest",
          "Rock Slide",
          "Substitute",
          "Protect",
          "Scary Face",
          "Outrage",
          "Sandstorm",
          "Endure",
          "Sleep Talk",
          "Sunny Day",
          "Crunch",
          "Heat Wave",
          "Will-O-Wisp",
          "Facade",
          "Helping Hand",
          "Brick Break",
          "Blast Burn",
          "Air Cutter",
          "Overheat",
          "Rock Tomb",
          "Aerial Ace",
          "Dragon Claw",
          "Dragon Dance",
          "Fling",
          "Flare Blitz",
          "Air Slash",
          "Dragon Pulse",
          "Focus Blast",
          "Giga Impact",
          "Shadow Claw",
          "Fire Fang",
          "Flame Charge",
          "Acrobatics",
          "Fire Pledge",
          "Bulldoze",
          "Dragon Tail",
          "Hurricane",
          "Tera Blast"
        ]
      }
    },
    {
      "Name": "Pikachu",
      "Stats": {
        "Hp": 5,
        "Atk": 55,
        "Def": 40,
        "SpAtk": 50,
        "SpDef": 50,
        "Spd": 90,
        "Total": 320
      },
      "Types": [
        "Electric"
      ],
      "Abilities": [
        "Static",
        "Static",
        "Lightning Rod"
      ],
      "Evolutions": {
        "Level": 0,
        "Condition": "ITEM",
        "Parameters": "[4, 0, 0, 0]",
        "Species": "Raichu",
        "Form": 0
      },
      "Moves": {
        "LearnedMoves": {
          "MovesLevels": {
            "Nuzzle": "Lv. 1",
            "Nasty Plot": "Lv. 1",
            "Charm": "Lv. 1",
            "Sweet Kiss": "Lv. 1",
            "Play Nice": "Lv. 1",
            "Quick Attack": "Lv. 1",
            "Tail Whip": "Lv. 1",
            "Thunder Shock": "Lv. 1",
            "Growl": "Lv. 1",
            "Thunder Wave": "Lv. 4",
            "Double Team": "Lv. 8",
            "Electro Ball": "Lv. 12",
            "Feint": "Lv. 16",
            "Spark": "Lv. 20",
            "Agility": "Lv. 24",
            "Iron Tail": "Lv. 28",
            "Discharge": "Lv. 32",
            "Thunderbolt": "Lv. 36",
            "Light Screen": "Lv. 40",
            "Thunder": "Lv. 44"
          }
        },
        "EggMoves": [],
        "TmMoves": [
          "Thunder Punch",
          "Body Slam",
          "Take Down",
          "Surf",
          "Thunderbolt",
          "Thunder Wave",
          "Thunder",
          "Dig",
          "Agility",
          "Light Screen",
          "Reflect",
          "Swift",
          "Rest",
          "Substitute",
          "Thief",
          "Reversal",
          "Protect",
          "Endure",
          "Charm",
          "Sleep Talk",
          "Encore",
          "Rain Dance",
          "Facade",
          "Helping Hand",
          "Brick Break",
          "Fake Tears",
          "Fling",
          "Nasty Plot",
          "Grass Knot",
          "Charge Beam",
          "Electro Ball",
          "Volt Switch",
          "Wild Charge",
          "Disarming Voice",
          "Draining Kiss",
          "Play Rough",
          "Eerie Impulse",
          "Electric Terrain",
          "Tera Blast",
          "Trailblaze"
        ]
      }
    },
    {
      "Name": "Pikachu-1",
      "Stats": {
        "Hp": 5,
        "Atk": 55,
        "Def": 40,
        "SpAtk": 50,
        "SpDef": 50,
        "Spd": 90,
        "Total": 320
      },
      "Types": [
        "Electric"
      ],
      "Abilities": [
        "Static",
        "Static",
        "Lightning Rod"
      ],
      "Evolutions": {
        "Level": null,
        "Condition": null,
        "Parameters": null,
        "Species": null,
        "Form": null
      },
      "Moves": {
        "LearnedMoves": {
          "MovesLevels": {
            "Nuzzle": "Lv. 1",
            "Nasty Plot": "Lv. 1",
            "Charm": "Lv. 1",
            "Sweet Kiss": "Lv. 1",
            "Play Nice": "Lv. 1",
            "Quick Attack": "Lv. 1",
            "Tail Whip": "Lv. 1",
            "Thunder Shock": "Lv. 1",
            "Growl": "Lv. 1",
            "Thunder Wave": "Lv. 4",
            "Double Team": "Lv. 8",
            "Electro Ball": "Lv. 12",
            "Feint": "Lv. 16",
            "Spark": "Lv. 20",
            "Agility": "Lv. 24",
            "Iron Tail": "Lv. 28",
            "Discharge": "Lv. 32",
            "Thunderbolt": "Lv. 36",
            "Light Screen": "Lv. 40",
            "Thunder": "Lv. 44"
          }
        },
        "EggMoves": [],
        "TmMoves": [
          "Thunder Punch",
          "Body Slam",
          "Take Down",
          "Surf",
          "Thunderbolt",
          "Thunder Wave",
          "Thunder",
          "Dig",
          "Agility",
          "Light Screen",
          "Reflect",
          "Swift",
          "Rest",
          "Substitute",
          "Thief",
          "Reversal",
          "Protect",
          "Endure",
          "Charm",
          "Sleep Talk",
          "Encore",
          "Rain Dance",
          "Facade",
          "Helping Hand",
          "Brick Break",
          "Fake Tears",
          "Fling",
          "Nasty Plot",
          "Grass Knot",
          "Charge Beam",
          "Electro Ball",
          "Volt Switch",
          "Wild Charge",
          "Disarming Voice",
          "Draining Kiss",
          "Play Rough",
          "Eerie Impulse",
          "Electric Terrain",
          "Tera Blast",
          "Trailblaze"
        ]
      }
    },
    {
      "Name": "Pikachu-2",
      "Stats": {
        "Hp": 5,
        "Atk": 55,
        "Def": 40,
        "SpAtk": 50,
        "SpDef": 50,
        "Spd": 90,
        "Total": 320
      },
      "Types": [
        "Electric"
      ],
      "Abilities": [
        "Static",
        "Static",
        "Lightning Rod"
      ],
      "Evolutions": {
        "Level": null,
        "Condition": null,
        "Parameters": null,
        "Species": null,
        "Form": null
      },
      "Moves": {
        "LearnedMoves": {
          "MovesLevels": {
            "Nuzzle": "Lv. 1",
            "Nasty Plot": "Lv. 1",
            "Charm": "Lv. 1",
            "Sweet Kiss": "Lv. 1",
            "Play Nice": "Lv. 1",
            "Quick Attack": "Lv. 1",
            "Tail Whip": "Lv. 1",
            "Thunder Shock": "Lv. 1",
            "Growl": "Lv. 1",
            "Thunder Wave": "Lv. 4",
            "Double Team": "Lv. 8",
            "Electro Ball": "Lv. 12",
            "Feint": "Lv. 16",
            "Spark": "Lv. 20",
            "Agility": "Lv. 24",
            "Iron Tail": "Lv. 28",
            "Discharge": "Lv. 32",
            "Thunderbolt": "Lv. 36",
            "Light Screen": "Lv. 40",
            "Thunder": "Lv. 44"
          }
        },
        "EggMoves": [],
        "TmMoves": [
          "Thunder Punch",
          "Body Slam",
          "Take Down",
          "Surf",
          "Thunderbolt",
          "Thunder Wave",
          "Thunder",
          "Dig",
          "Agility",
          "Light Screen",
          "Reflect",
          "Swift",
          "Rest",
          "Substitute",
          "Thief",
          "Reversal",
          "Protect",
          "Endure",
          "Charm",
          "Sleep Talk",
          "Encore",
          "Rain Dance",
          "Facade",
          "Helping Hand",
          "Brick Break",
          "Fake Tears",
          "Fling",
          "Nasty Plot",
          "Grass Knot",
          "Charge Beam",
          "Electro Ball",
          "Volt Switch",
          "Wild Charge",
          "Disarming Voice",
          "Draining Kiss",
          "Play Rough",
          "Eerie Impulse",
          "Electric Terrain",
          "Tera Blast",
          "Trailblaze"
        ]
      }
    },
    {
      "Name": "Pikachu-3",
      "Stats": {
        "Hp": 5,
        "Atk": 55,
        "Def": 40,
        "SpAtk": 50,
        "SpDef": 50,
        "Spd": 90,
        "Total": 320
      },
      "Types": [
        "Electric"
      ],
      "Abilities": [
        "Static",
        "Static",
        "Lightning Rod"
      ],
      "Evolutions": {
        "Level": null,
        "Condition": null,
        "Parameters": null,
        "Species": null,
        "Form": null
      },
      "Moves": {
        "LearnedMoves": {
          "MovesLevels": {
            "Nuzzle": "Lv. 1",
            "Nasty Plot": "Lv. 1",
            "Charm": "Lv. 1",
            "Sweet Kiss": "Lv. 1",
            "Play Nice": "Lv. 1",
            "Quick Attack": "Lv. 1",
            "Tail Whip": "Lv. 1",
            "Thunder Shock": "Lv. 1",
            "Growl": "Lv. 1",
            "Thunder Wave": "Lv. 4",
            "Double Team": "Lv. 8",
            "Electro Ball": "Lv. 12",
            "Feint": "Lv. 16",
            "Spark": "Lv. 20",
            "Agility": "Lv. 24",
            "Iron Tail": "Lv. 28",
            "Discharge": "Lv. 32",
            "Thunderbolt": "Lv. 36",
            "Light Screen": "Lv. 40",
            "Thunder": "Lv. 44"
          }
        },
        "EggMoves": [],
        "TmMoves": [
          "Thunder Punch",
          "Body Slam",
          "Take Down",
          "Surf",
          "Thunderbolt",
          "Thunder Wave",
          "Thunder",
          "Dig",
          "Agility",
          "Light Screen",
          "Reflect",
          "Swift",
          "Rest",
          "Substitute",
          "Thief",
          "Reversal",
          "Protect",
          "Endure",
          "Charm",
          "Sleep Talk",
          "Encore",
          "Rain Dance",
          "Facade",
          "Helping Hand",
          "Brick Break",
          "Fake Tears",
          "Fling",
          "Nasty Plot",
          "Grass Knot",
          "Charge Beam",
          "Electro Ball",
          "Volt Switch",
          "Wild Charge",
          "Disarming Voice",
          "Draining Kiss",
          "Play Rough",
          "Eerie Impulse",
          "Electric Terrain",
          "Tera Blast",
          "Trailblaze"
        ]
      }
    },
    {
      "Name": "Pikachu-4",
      "Stats": {
        "Hp": 5,
        "Atk": 55,
        "Def": 40,
        "SpAtk": 50,
        "SpDef": 50,
        "Spd": 90,
        "Total": 320
      },
      "Types": [
        "Electric"
      ],
      "Abilities": [
        "Static",
        "Static",
        "Lightning Rod"
      ],
      "Evolutions": {
        "Level": null,
        "Condition": null,
        "Parameters": null,
        "Species": null,
        "Form": null
      },
      "Moves": {
        "LearnedMoves": {
          "MovesLevels": {
            "Nuzzle": "Lv. 1",
            "Nasty Plot": "Lv. 1",
            "Charm": "Lv. 1",
            "Sweet Kiss": "Lv. 1",
            "Play Nice": "Lv. 1",
            "Quick Attack": "Lv. 1",
            "Tail Whip": "Lv. 1",
            "Thunder Shock": "Lv. 1",
            "Growl": "Lv. 1",
            "Thunder Wave": "Lv. 4",
            "Double Team": "Lv. 8",
            "Electro Ball": "Lv. 12",
            "Feint": "Lv. 16",
            "Spark": "Lv. 20",
            "Agility": "Lv. 24",
            "Iron Tail": "Lv. 28",
            "Discharge": "Lv. 32",
            "Thunderbolt": "Lv. 36",
            "Light Screen": "Lv. 40",
            "Thunder": "Lv. 44"
          }
        },
        "EggMoves": [],
        "TmMoves": [
          "Thunder Punch",
          "Body Slam",
          "Take Down",
          "Surf",
          "Thunderbolt",
          "Thunder Wave",
          "Thunder",
          "Dig",
          "Agility",
          "Light Screen",
          "Reflect",
          "Swift",
          "Rest",
          "Substitute",
          "Thief",
          "Reversal",
          "Protect",
          "Endure",
          "Charm",
          "Sleep Talk",
          "Encore",
          "Rain Dance",
          "Facade",
          "Helping Hand",
          "Brick Break",
          "Fake Tears",
          "Fling",
          "Nasty Plot",
          "Grass Knot",
          "Charge Beam",
          "Electro Ball",
          "Volt Switch",
          "Wild Charge",
          "Disarming Voice",
          "Draining Kiss",
          "Play Rough",
          "Eerie Impulse",
          "Electric Terrain",
          "Tera Blast",
          "Trailblaze"
        ]
      }
    },
    {
      "Name": "Pikachu-5",
      "Stats": {
        "Hp": 5,
        "Atk": 55,
        "Def": 40,
        "SpAtk": 50,
        "SpDef": 50,
        "Spd": 90,
        "Total": 320
      },
      "Types": [
        "Electric"
      ],
      "Abilities": [
        "Static",
        "Static",
        "Lightning Rod"
      ],
      "Evolutions": {
        "Level": null,
        "Condition": null,
        "Parameters": null,
        "Species": null,
        "Form": null
      },
      "Moves": {
        "LearnedMoves": {
          "MovesLevels": {
            "Nuzzle": "Lv. 1",
            "Nasty Plot": "Lv. 1",
            "Charm": "Lv. 1",
            "Sweet Kiss": "Lv. 1",
            "Play Nice": "Lv. 1",
            "Quick Attack": "Lv. 1",
            "Tail Whip": "Lv. 1",
            "Thunder Shock": "Lv. 1",
            "Growl": "Lv. 1",
            "Thunder Wave": "Lv. 4",
            "Double Team": "Lv. 8",
            "Electro Ball": "Lv. 12",
            "Feint": "Lv. 16",
            "Spark": "Lv. 20",
            "Agility": "Lv. 24",
            "Iron Tail": "Lv. 28",
            "Discharge": "Lv. 32",
            "Thunderbolt": "Lv. 36",
            "Light Screen": "Lv. 40",
            "Thunder": "Lv. 44"
          }
        },
        "EggMoves": [],
        "TmMoves": [
          "Thunder Punch",
          "Body Slam",
          "Take Down",
          "Surf",
          "Thunderbolt",
          "Thunder Wave",
          "Thunder",
          "Dig",
          "Agility",
          "Light Screen",
          "Reflect",
          "Swift",
          "Rest",
          "Substitute",
          "Thief",
          "Reversal",
          "Protect",
          "Endure",
          "Charm",
          "Sleep Talk",
          "Encore",
          "Rain Dance",
          "Facade",
          "Helping Hand",
          "Brick Break",
          "Fake Tears",
          "Fling",
          "Nasty Plot",
          "Grass Knot",
          "Charge Beam",
          "Electro Ball",
          "Volt Switch",
          "Wild Charge",
          "Disarming Voice",
          "Draining Kiss",
          "Play Rough",
          "Eerie Impulse",
          "Electric Terrain",
          "Tera Blast",
          "Trailblaze"
        ]
      }
    },
    {
      "Name": "Pikachu-6",
      "Stats": {
        "Hp": 5,
        "Atk": 55,
        "Def": 40,
        "SpAtk": 50,
        "SpDef": 50,
        "Spd": 90,
        "Total": 320
      },
      "Types": [
        "Electric"
      ],
      "Abilities": [
        "Static",
        "Static",
        "Lightning Rod"
      ],
      "Evolutions": {
        "Level": null,
        "Condition": null,
        "Parameters": null,
        "Species": null,
        "Form": null
      },
      "Moves": {
        "LearnedMoves": {
          "MovesLevels": {
            "Nuzzle": "Lv. 1",
            "Nasty Plot": "Lv. 1",
            "Charm": "Lv. 1",
            "Sweet Kiss": "Lv. 1",
            "Play Nice": "Lv. 1",
            "Quick Attack": "Lv. 1",
            "Tail Whip": "Lv. 1",
            "Thunder Shock": "Lv. 1",
            "Growl": "Lv. 1",
            "Thunder Wave": "Lv. 4",
            "Double Team": "Lv. 8",
            "Electro Ball": "Lv. 12",
            "Feint": "Lv. 16",
            "Spark": "Lv. 20",
            "Agility": "Lv. 24",
            "Iron Tail": "Lv. 28",
            "Discharge": "Lv. 32",
            "Thunderbolt": "Lv. 36",
            "Light Screen": "Lv. 40",
            "Thunder": "Lv. 44"
          }
        },
        "EggMoves": [],
        "TmMoves": [
          "Thunder Punch",
          "Body Slam",
          "Take Down",
          "Surf",
          "Thunderbolt",
          "Thunder Wave",
          "Thunder",
          "Dig",
          "Agility",
          "Light Screen",
          "Reflect",
          "Swift",
          "Rest",
          "Substitute",
          "Thief",
          "Reversal",
          "Protect",
          "Endure",
          "Charm",
          "Sleep Talk",
          "Encore",
          "Rain Dance",
          "Facade",
          "Helping Hand",
          "Brick Break",
          "Fake Tears",
          "Fling",
          "Nasty Plot",
          "Grass Knot",
          "Charge Beam",
          "Electro Ball",
          "Volt Switch",
          "Wild Charge",
          "Disarming Voice",
          "Draining Kiss",
          "Play Rough",
          "Eerie Impulse",
          "Electric Terrain",
          "Tera Blast",
          "Trailblaze"
        ]
      }
    },
    {
      "Name": "Pikachu-7",
      "Stats": {
        "Hp": 5,
        "Atk": 55,
        "Def": 40,
        "SpAtk": 50,
        "SpDef": 50,
        "Spd": 90,
        "Total": 320
      },
      "Types": [
        "Electric"
      ],
      "Abilities": [
        "Static",
        "Static",
        "Lightning Rod"
      ],
      "Evolutions": {
        "Level": null,
        "Condition": null,
        "Parameters": null,
        "Species": null,
        "Form": null
      },
      "Moves": {
        "LearnedMoves": {
          "MovesLevels": {
            "Nuzzle": "Lv. 1",
            "Nasty Plot": "Lv. 1",
            "Charm": "Lv. 1",
            "Sweet Kiss": "Lv. 1",
            "Play Nice": "Lv. 1",
            "Quick Attack": "Lv. 1",
            "Tail Whip": "Lv. 1",
            "Thunder Shock": "Lv. 1",
            "Growl": "Lv. 1",
            "Thunder Wave": "Lv. 4",
            "Double Team": "Lv. 8",
            "Electro Ball": "Lv. 12",
            "Feint": "Lv. 16",
            "Spark": "Lv. 20",
            "Agility": "Lv. 24",
            "Iron Tail": "Lv. 28",
            "Discharge": "Lv. 32",
            "Thunderbolt": "Lv. 36",
            "Light Screen": "Lv. 40",
            "Thunder": "Lv. 44"
          }
        },
        "EggMoves": [],
        "TmMoves": [
          "Thunder Punch",
          "Body Slam",
          "Take Down",
          "Surf",
          "Thunderbolt",
          "Thunder Wave",
          "Thunder",
          "Dig",
          "Agility",
          "Light Screen",
          "Reflect",
          "Swift",
          "Rest",
          "Substitute",
          "Thief",
          "Reversal",
          "Protect",
          "Endure",
          "Charm",
          "Sleep Talk",
          "Encore",
          "Rain Dance",
          "Facade",
          "Helping Hand",
          "Brick Break",
          "Fake Tears",
          "Fling",
          "Nasty Plot",
          "Grass Knot",
          "Charge Beam",
          "Electro Ball",
          "Volt Switch",
          "Wild Charge",
          "Disarming Voice",
          "Draining Kiss",
          "Play Rough",
          "Eerie Impulse",
          "Electric Terrain",
          "Tera Blast",
          "Trailblaze"
        ]
      }
    },
    {
      "Name": "Pikachu-9",
      "Stats": {
        "Hp": 5,
        "Atk": 55,
        "Def": 40,
        "SpAtk": 50,
        "SpDef": 50,
        "Spd": 90,
        "Total": 320
      },
      "Types": [
        "Electric"
      ],
      "Abilities": [
        "Static",
        "Static",
        "Lightning Rod"
      ],
      "Evolutions": {
        "Level": null,
        "Condition": null,
        "Parameters": null,
        "Species": null,
        "Form": null
      },
      "Moves": {
        "LearnedMoves": {
          "MovesLevels": {
            "Nuzzle": "Lv. 1",
            "Nasty Plot": "Lv. 1",
            "Charm": "Lv. 1",
            "Sweet Kiss": "Lv. 1",
            "Play Nice": "Lv. 1",
            "Quick Attack": "Lv. 1",
            "Tail Whip": "Lv. 1",
            "Thunder Shock": "Lv. 1",
            "Growl": "Lv. 1",
            "Thunder Wave": "Lv. 4",
            "Double Team": "Lv. 8",
            "Electro Ball": "Lv. 12",
            "Feint": "Lv. 16",
            "Spark": "Lv. 20",
            "Agility": "Lv. 24",
            "Iron Tail": "Lv. 28",
            "Discharge": "Lv. 32",
            "Thunderbolt": "Lv. 36",
            "Light Screen": "Lv. 40",
            "Thunder": "Lv. 44"
          }
        },
        "EggMoves": [],
        "TmMoves": [
          "Thunder Punch",
          "Body Slam",
          "Take Down",
          "Surf",
          "Thunderbolt",
          "Thunder Wave",
          "Thunder",
          "Dig",
          "Agility",
          "Light Screen",
          "Reflect",
          "Swift",
          "Rest",
          "Substitute",
          "Thief",
          "Reversal",
          "Protect",
          "Endure",
          "Charm",
          "Sleep Talk",
          "Encore",
          "Rain Dance",
          "Facade",
          "Helping Hand",
          "Brick Break",
          "Fake Tears",
          "Fling",
          "Nasty Plot",
          "Grass Knot",
          "Charge Beam",
          "Electro Ball",
          "Volt Switch",
          "Wild Charge",
          "Disarming Voice",
          "Draining Kiss",
          "Play Rough",
          "Eerie Impulse",
          "Electric Terrain",
          "Tera Blast",
          "Trailblaze"
        ]
      }
    },
    {
      "Name": "Raichu",
      "Stats": {
        "Hp": 0,
        "Atk": 90,
        "Def": 55,
        "SpAtk": 90,
        "SpDef": 80,
        "Spd": 110,
        "Total": 485
      },
      "Types": [
        "Electric"
      ],
      "Abilities": [
        "Static",
        "Static",
        "Lightning Rod"
      ],
      "Evolutions": {
        "Level": null,
        "Condition": null,
        "Parameters": null,
        "Species": null,
        "Form": null
      },
      "Moves": {
        "LearnedMoves": {
          "MovesLevels": {
            "Thunder Punch": "Evolution",
            "Electro Ball": "Lv. 1",
            "Discharge": "Lv. 1",
            "Nasty Plot": "Lv. 1",
            "Feint": "Lv. 1",
            "Iron Tail": "Lv. 1",
            "Spark": "Lv. 1",
            "Charm": "Lv. 1",
            "Sweet Kiss": "Lv. 1",
            "Play Nice": "Lv. 1",
            "Nuzzle": "Lv. 1",
            "Quick Attack": "Lv. 1",
            "Agility": "Lv. 1",
            "Thunder": "Lv. 1",
            "Thunder Wave": "Lv. 1",
            "Thunder Shock": "Lv. 1",
            "Growl": "Lv. 1",
            "Tail Whip": "Lv. 1",
            "Double Team": "Lv. 1",
            "Light Screen": "Lv. 1",
            "Thunderbolt": "Lv. 5"
          }
        },
        "EggMoves": [],
        "TmMoves": [
          "Thunder Punch",
          "Body Slam",
          "Take Down",
          "Surf",
          "Hyper Beam",
          "Thunderbolt",
          "Thunder Wave",
          "Thunder",
          "Dig",
          "Agility",
          "Light Screen",
          "Reflect",
          "Swift",
          "Rest",
          "Substitute",
          "Thief",
          "Reversal",
          "Protect",
          "Endure",
          "Charm",
          "Sleep Talk",
          "Encore",
          "Rain Dance",
          "Facade",
          "Helping Hand",
          "Brick Break",
          "Fling",
          "Focus Blast",
          "Giga Impact",
          "Nasty Plot",
          "Grass Knot",
          "Charge Beam",
          "Electro Ball",
          "Volt Switch",
          "Wild Charge",
          "Disarming Voice",
          "Draining Kiss",
          "Play Rough",
          "Eerie Impulse",
          "Electric Terrain",
          "Tera Blast",
          "Trailblaze"
        ]
      }
    },
    {
      "Name": "Raichu-1",
      "Stats": {
        "Hp": 0,
        "Atk": 85,
        "Def": 50,
        "SpAtk": 95,
        "SpDef": 85,
        "Spd": 110,
        "Total": 485
      },
      "Types": [
        "Electric",
        "Psychic"
      ],
      "Abilities": [
        "Surge Surfer",
        "Surge Surfer",
        "Surge Surfer"
      ],
      "Evolutions": {
        "Level": null,
        "Condition": null,
        "Parameters": null,
        "Species": null,
        "Form": null
      },
      "Moves": {
        "LearnedMoves": {
          "MovesLevels": {
            "Psychic": "Evolution",
            "Nuzzle": "Lv. 1",
            "Electro Ball": "Lv. 1",
            "Discharge": "Lv. 1",
            "Nasty Plot": "Lv. 1",
            "Feint": "Lv. 1",
            "Iron Tail": "Lv. 1",
            "Spark": "Lv. 1",
            "Charm": "Lv. 1",
            "Sweet Kiss": "Lv. 1",
            "Light Screen": "Lv. 1",
            "Double Team": "Lv. 1",
            "Quick Attack": "Lv. 1",
            "Agility": "Lv. 1",
            "Thunder": "Lv. 1",
            "Thunder Wave": "Lv. 1",
            "Thunder Shock": "Lv. 1",
            "Growl": "Lv. 1",
            "Play Nice": "Lv. 1",
            "Tail Whip": "Lv. 1",
            "Thunderbolt": "Lv. 5"
          }
        },
        "EggMoves": [],
        "TmMoves": [
          "Thunder Punch",
          "Body Slam",
          "Take Down",
          "Surf",
          "Hyper Beam",
          "Thunderbolt",
          "Thunder Wave",
          "Thunder",
          "Dig",
          "Psychic",
          "Agility",
          "Light Screen",
          "Reflect",
          "Swift",
          "Rest",
          "Substitute",
          "Thief",
          "Reversal",
          "Protect",
          "Endure",
          "Charm",
          "Sleep Talk",
          "Encore",
          "Rain Dance",
          "Facade",
          "Helping Hand",
          "Brick Break",
          "Skill Swap",
          "Calm Mind",
          "Fling",
          "Focus Blast",
          "Giga Impact",
          "Nasty Plot",
          "Grass Knot",
          "Charge Beam",
          "Psyshock",
          "Electro Ball",
          "Stored Power",
          "Volt Switch",
          "Wild Charge",
          "Draining Kiss",
          "Play Rough",
          "Eerie Impulse",
          "Electric Terrain",
          "Psychic Terrain",
          "Tera Blast",
          "Trailblaze"
        ]
      }
    }
  ]
  private pokemonSeleccionado:any = null

  constructor() { }

  getPokemons():Array<any> {
    return this.pokemons
  }
  getPokemonSeleccionado():any {
    return this.pokemonSeleccionado
  }
  setPokemonSeleccionado(unPok:any) {
    console.log("servicio"+unPok.Name)
    this.pokemonSeleccionado = unPok
  }
}
