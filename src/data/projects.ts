import type {ProjectType} from "../components/project/Project.tsx";
// import {localizations as loc} from "../const.ts";


export const sampleProjects: ProjectType[] = [
  {
    id: "1",
    name: "Sample Project 1",
    namespaces: [],
    localizations: [],
  },
  {
    id: "2",
    name: "Sample Project 2",
    namespaces: [],
    localizations: [],
  },
  {
    id: "3",
    name: "Sample Project 3",
    namespaces: [],
    localizations: [],
  },

  //Technologies are from minecolonies, credit to minecolonies team - https://github.com/ldtteam/minecolonies
  {
    id: "4",
    name: "Minecolonies Default",
    namespaces: [
      {
        name: "minecolonies",
        branches: [
          {
            name: "civilian",
            technologies: [
              {
                "name": "com.minecolonies.research.technology.academic.name",
                "branch": "minecolonies:civilian",
                "costs": [
                  {
                    "count": 128,
                    "item": "minecraft:book"
                  }
                ],
                "effects": [
                  {
                    "id": "minecolonies:effects/levelingmultiplier",
                    "level": 5
                  }
                ],
                "icon": "minecraft:experience_bottle:5",
                "parentResearch": "minecolonies:civilian/reflective",
                "researchLevel": 6,
                "subtitle": "com.minecolonies.research.civilian.academic.subtitle"
              },
              {
                "name": "com.minecolonies.research.technology.agile.name",
                "branch": "minecolonies:civilian",
                "costs": [
                  {
                    "count": 8,
                    "item": "minecraft:rabbit_foot"
                  }
                ],
                "effects": [
                  {
                    "id": "minecolonies:effects/walkingmultiplier",
                    "level": 3
                  }
                ],
                "icon": "minecolonies:textures/icons/research/speed2.png",
                "parentResearch": "minecolonies:civilian/nimble",
                "requirements": [
                  {
                    "type": "minecolonies:building",
                    "building": "townhall",
                    "level": 4
                  }
                ],
                "researchLevel": 4,
                "subtitle": "com.minecolonies.research.civilian.agile.subtitle"
              },
              {
                "name": "com.minecolonies.research.technology.air.name",
                "branch": "minecolonies:civilian",
                "costs": [
                  {
                    "count": 1,
                    "item": "minecraft:heart_of_the_sea"
                  }
                ],
                "effects": [
                  {
                    "id": "minecolonies:effects/air",
                    "level": 1
                  }
                ],
                "icon": "minecraft:potion",
                "parentResearch": "minecolonies:civilian/ambition",
                "researchLevel": 2,
                "sortOrder": 1
              },
              {
                "name": "com.minecolonies.research.technology.ambition.name",
                "branch": "minecolonies:civilian",
                "costs": [
                  {
                    "count": 1,
                    "item": "minecraft:diamond"
                  }
                ],
                "effects": [
                  {
                    "id": "minecolonies:effects/blockhutmysticalsite",
                    "level": 1
                  }
                ],
                "icon": "minecolonies:blockhutmysticalsite",
                "researchLevel": 1,
                "sortOrder": 5
              },
              {
                "name": "com.minecolonies.research.technology.athlete.name",
                "branch": "minecolonies:civilian",
                "costs": [
                  {
                    "count": 64,
                    "item": "minecraft:rabbit_foot"
                  }
                ],
                "effects": [
                  {
                    "id": "minecolonies:effects/walkingmultiplier",
                    "level": 5
                  }
                ],
                "icon": "minecolonies:textures/icons/research/speed4.png",
                "parentResearch": "minecolonies:civilian/swift",
                "researchLevel": 6,
                "subtitle": "com.minecolonies.research.civilian.athlete.subtitle"
              },
              {
                "name": "com.minecolonies.research.technology.bachelor.name",
                "branch": "minecolonies:civilian",
                "costs": [
                  {
                    "count": 12,
                    "item": "minecraft:bookshelf"
                  }
                ],
                "effects": [
                  {
                    "id": "minecolonies:effects/teachingmultiplier",
                    "level": 3
                  }
                ],
                "icon": "minecolonies:textures/icons/research/xpgain3.png",
                "parentResearch": "minecolonies:civilian/bookworm",
                "requirements": [
                  {
                    "type": "minecolonies:building",
                    "building": "library",
                    "level": 3
                  }
                ],
                "researchLevel": 4,
                "subtitle": "com.minecolonies.research.civilian.bachelor.subtitle"
              },
              {
                "name": "com.minecolonies.research.technology.bandages.name",
                "branch": "minecolonies:civilian",
                "costs": [
                  {
                    "count": 16,
                    "item": "minecraft:golden_carrot"
                  }
                ],
                "effects": [
                  {
                    "id": "minecolonies:effects/regenerationmultiplier",
                    "level": 3
                  }
                ],
                "icon": "minecolonies:textures/icons/research/regeneration3.png",
                "parentResearch": "minecolonies:civilian/healingcream",
                "requirements": [
                  {
                    "type": "minecolonies:building",
                    "building": "library",
                    "level": 4
                  }
                ],
                "researchLevel": 4
              },
              {
                "name": "com.minecolonies.research.technology.bandaid.name",
                "branch": "minecolonies:civilian",
                "costs": [
                  {
                    "count": 1,
                    "item": "minecraft:golden_carrot"
                  }
                ],
                "effects": [
                  {
                    "id": "minecolonies:effects/regenerationmultiplier",
                    "level": 1
                  }
                ],
                "icon": "minecolonies:textures/icons/research/regeneration1.png",
                "parentResearch": "minecolonies:civilian/stamina",
                "requirements": [
                  {
                    "type": "minecolonies:building",
                    "building": "library",
                    "level": 2
                  }
                ],
                "researchLevel": 2
              },
              {
                "name": "com.minecolonies.research.technology.beanstalk.name",
                "branch": "minecolonies:civilian",
                "costs": [
                  {
                    "count": 512,
                    "item": "minecraft:cooked_chicken"
                  }
                ],
                "effects": [
                  {
                    "id": "minecolonies:effects/growthmultiplier",
                    "level": 5
                  }
                ],
                "icon": "minecolonies:textures/icons/research/childgrowth5.png",
                "parentResearch": "minecolonies:civilian/growth",
                "researchLevel": 6,
                "subtitle": "com.minecolonies.research.civilian.beanstalk.subtitle"
              },
              {
                "name": "com.minecolonies.research.technology.bookworm.name",
                "branch": "minecolonies:civilian",
                "costs": [
                  {
                    "count": 6,
                    "item": "minecraft:bookshelf"
                  }
                ],
                "effects": [
                  {
                    "id": "minecolonies:effects/teachingmultiplier",
                    "level": 2
                  }
                ],
                "icon": "minecolonies:textures/icons/research/xpgain2.png",
                "parentResearch": "minecolonies:civilian/morebooks",
                "requirements": [
                  {
                    "type": "minecolonies:building",
                    "building": "school",
                    "level": 3
                  }
                ],
                "researchLevel": 3,
                "subtitle": "com.minecolonies.research.civilian.bookworm.subtitle"
              },
              {
                "name": "com.minecolonies.research.technology.cast.name",
                "branch": "minecolonies:civilian",
                "costs": [
                  {
                    "count": 64,
                    "item": "minecraft:golden_carrot"
                  }
                ],
                "effects": [
                  {
                    "id": "minecolonies:effects/regenerationmultiplier",
                    "level": 5
                  }
                ],
                "icon": "minecolonies:textures/icons/research/regeneration5.png",
                "parentResearch": "minecolonies:civilian/compress",
                "researchLevel": 6
              },
              {
                "name": "com.minecolonies.research.technology.circus.name",
                "branch": "minecolonies:civilian",
                "costs": [
                  {
                    "count": 1,
                    "item": "minecraft:cake"
                  }
                ],
                "effects": [
                  {
                    "id": "minecolonies:effects/happinessmultiplier",
                    "level": 1
                  }
                ],
                "icon": "minecolonies:textures/icons/research/happy1.png",
                "parentResearch": "minecolonies:civilian/firstaid",
                "requirements": [
                  {
                    "type": "minecolonies:building",
                    "building": "cook",
                    "level": 2
                  }
                ],
                "researchLevel": 2,
                "sortOrder": 2
              },
              {
                "name": "com.minecolonies.research.technology.city.name",
                "branch": "minecolonies:civilian",
                "costs": [
                  {
                    "count": 512,
                    "item": "minecraft:cooked_beef"
                  }
                ],
                "effects": [
                  {
                    "id": "minecolonies:effects/citizencapaddition",
                    "level": 5
                  }
                ],
                "icon": "minecolonies:blockhutcitizen:200",
                "parentResearch": "minecolonies:civilian/village",
                "requirements": [
                  {
                    "type": "minecolonies:building",
                    "building": "townhall",
                    "level": 5
                  }
                ],
                "researchLevel": 5
              },
              {
                "name": "com.minecolonies.research.technology.compress.name",
                "branch": "minecolonies:civilian",
                "costs": [
                  {
                    "count": 32,
                    "item": "minecraft:golden_carrot"
                  }
                ],
                "effects": [
                  {
                    "id": "minecolonies:effects/regenerationmultiplier",
                    "level": 4
                  }
                ],
                "icon": "minecolonies:textures/icons/research/regeneration4.png",
                "parentResearch": "minecolonies:civilian/bandages",
                "requirements": [
                  {
                    "type": "minecolonies:building",
                    "building": "library",
                    "level": 5
                  }
                ],
                "researchLevel": 5
              },
              {
                "name": "com.minecolonies.research.technology.diligent.name",
                "branch": "minecolonies:civilian",
                "costs": [
                  {
                    "count": 6,
                    "item": "minecraft:book"
                  }
                ],
                "effects": [
                  {
                    "id": "minecolonies:effects/levelingmultiplier",
                    "level": 1
                  }
                ],
                "icon": "minecraft:experience_bottle",
                "parentResearch": "minecolonies:civilian/keen",
                "requirements": [
                  {
                    "type": "minecolonies:building",
                    "building": "library",
                    "level": 2
                  }
                ],
                "researchLevel": 2,
                "sortOrder": 2
              },
              {
                "name": "com.minecolonies.research.technology.epicure.name",
                "branch": "minecolonies:civilian",
                "costs": [
                  {
                    "count": 256,
                    "item": "minecraft:cookie"
                  }
                ],
                "effects": [
                  {
                    "id": "minecolonies:effects/saturationmultiplier",
                    "level": 4
                  }
                ],
                "icon": "minecolonies:textures/icons/research/saturation4.png",
                "parentResearch": "minecolonies:civilian/stuffer",
                "requirements": [
                  {
                    "type": "minecolonies:building",
                    "building": "cook",
                    "level": 5
                  }
                ],
                "researchLevel": 5
              },
              {
                "name": "com.minecolonies.research.technology.festival.name",
                "branch": "minecolonies:civilian",
                "costs": [
                  {
                    "count": 9,
                    "item": "minecraft:cake"
                  }
                ],
                "effects": [
                  {
                    "id": "minecolonies:effects/happinessmultiplier",
                    "level": 2
                  }
                ],
                "icon": "minecolonies:textures/icons/research/happy2.png",
                "parentResearch": "minecolonies:civilian/circus",
                "requirements": [
                  {
                    "type": "minecolonies:building",
                    "building": "cook",
                    "level": 3
                  }
                ],
                "researchLevel": 3,
                "subtitle": "com.minecolonies.research.civilian.festival.subtitle"
              },
              {
                "name": "com.minecolonies.research.technology.firstaid.name",
                "branch": "minecolonies:civilian",
                "costs": [
                  {
                    "count": 8,
                    "item": "minecraft:hay_block"
                  }
                ],
                "effects": [
                  {
                    "id": "minecolonies:effects/healthaddition",
                    "level": 1
                  }
                ],
                "icon": "minecolonies:textures/icons/research/hp1.png",
                "requirements": [
                  {
                    "type": "minecolonies:building",
                    "building": "townhall",
                    "level": 1
                  }
                ],
                "researchLevel": 1,
                "sortOrder": 3,
                "subtitle": "com.minecolonies.research.civilian.firstaid.subtitle"
              },
              {
                "name": "com.minecolonies.research.technology.firstaid2.name",
                "branch": "minecolonies:civilian",
                "costs": [
                  {
                    "count": 16,
                    "item": "minecraft:hay_block"
                  }
                ],
                "effects": [
                  {
                    "id": "minecolonies:effects/healthaddition",
                    "level": 2
                  }
                ],
                "icon": "minecolonies:textures/icons/research/hp2.png",
                "parentResearch": "minecolonies:civilian/firstaid",
                "requirements": [
                  {
                    "type": "minecolonies:building",
                    "building": "townhall",
                    "level": 2
                  }
                ],
                "researchLevel": 2,
                "subtitle": "com.minecolonies.research.civilian.firstaid2.subtitle"
              },
              {
                "name": "com.minecolonies.research.technology.fortitude.name",
                "branch": "minecolonies:civilian",
                "costs": [
                  {
                    "count": 32,
                    "item": "minecraft:golden_apple"
                  }
                ],
                "effects": [
                  {
                    "id": "minecolonies:effects/healingsaturationlimitaddition",
                    "level": 4
                  }
                ],
                "icon": "minecraft:honey_bottle",
                "parentResearch": "minecolonies:civilian/vitality",
                "requirements": [
                  {
                    "type": "minecolonies:building",
                    "building": "cook",
                    "level": 5
                  }
                ],
                "researchLevel": 5
              },
              {
                "name": "com.minecolonies.research.technology.glutton.name",
                "branch": "minecolonies:civilian",
                "costs": [
                  {
                    "count": 512,
                    "item": "minecraft:cookie"
                  }
                ],
                "effects": [
                  {
                    "id": "minecolonies:effects/saturationmultiplier",
                    "level": 5
                  }
                ],
                "icon": "minecolonies:textures/icons/research/saturation5.png",
                "parentResearch": "minecolonies:civilian/epicure",
                "researchLevel": 6,
                "subtitle": "com.minecolonies.research.civilian.glutton.subtitle"
              },
              {
                "name": "com.minecolonies.research.technology.gorger.name",
                "branch": "minecolonies:civilian",
                "costs": [
                  {
                    "count": 64,
                    "item": "minecraft:cookie"
                  }
                ],
                "effects": [
                  {
                    "id": "minecolonies:effects/saturationmultiplier",
                    "level": 2
                  }
                ],
                "icon": "minecolonies:textures/icons/research/saturation2.png",
                "parentResearch": "minecolonies:civilian/gourmand",
                "requirements": [
                  {
                    "type": "minecolonies:building",
                    "building": "cook",
                    "level": 3
                  }
                ],
                "researchLevel": 3,
                "subtitle": "com.minecolonies.research.civilian.gorger.subtitle"
              },
              {
                "name": "com.minecolonies.research.technology.gourmand.name",
                "branch": "minecolonies:civilian",
                "costs": [
                  {
                    "count": 32,
                    "item": "minecraft:cookie"
                  }
                ],
                "effects": [
                  {
                    "id": "minecolonies:effects/saturationmultiplier",
                    "level": 1
                  }
                ],
                "icon": "minecolonies:textures/icons/research/saturation1.png",
                "parentResearch": "minecolonies:civilian/firstaid",
                "requirements": [
                  {
                    "type": "minecolonies:building",
                    "building": "cook",
                    "level": 2
                  }
                ],
                "researchLevel": 2,
                "sortOrder": 3
              },
              {
                "name": "com.minecolonies.research.technology.gravedecaybonus1.name",
                "branch": "minecolonies:civilian",
                "costs": [
                  {
                    "count": 64,
                    "item": "minecraft:rotten_flesh"
                  }
                ],
                "effects": [
                  {
                    "id": "minecolonies:effects/gravedecaybonus",
                    "level": 1
                  }
                ],
                "icon": "minecolonies:blockminecoloniesgrave",
                "parentResearch": "minecolonies:civilian/remembrance",
                "requirements": [
                  {
                    "type": "minecolonies:building",
                    "building": "graveyard",
                    "level": 3
                  }
                ],
                "researchLevel": 2,
                "sortOrder": 2,
                "subtitle": "com.minecolonies.research.civilian.gravedecaybonus1.subtitle"
              },
              {
                "name": "com.minecolonies.research.technology.gravedecaybonus2.name",
                "branch": "minecolonies:civilian",
                "costs": [
                  {
                    "count": 8,
                    "item": "minecraft:nether_wart_block"
                  }
                ],
                "effects": [
                  {
                    "id": "minecolonies:effects/gravedecaybonus",
                    "level": 2
                  }
                ],
                "icon": "minecolonies:blockminecoloniesgrave",
                "parentResearch": "minecolonies:civilian/gravedecaybonus1",
                "requirements": [
                  {
                    "type": "minecolonies:building",
                    "building": "graveyard",
                    "level": 5
                  }
                ],
                "researchLevel": 3,
                "sortOrder": 2,
                "subtitle": "com.minecolonies.research.civilian.gravedecaybonus2.subtitle"
              },
              {
                "name": "com.minecolonies.research.technology.growth.name",
                "branch": "minecolonies:civilian",
                "costs": [
                  {
                    "count": 256,
                    "item": "minecraft:cooked_chicken"
                  }
                ],
                "effects": [
                  {
                    "id": "minecolonies:effects/growthmultiplier",
                    "level": 4
                  }
                ],
                "icon": "minecolonies:textures/icons/research/childgrowth4.png",
                "parentResearch": "minecolonies:civilian/puberty",
                "requirements": [
                  {
                    "type": "minecolonies:building",
                    "building": "library",
                    "level": 5
                  }
                ],
                "researchLevel": 5
              },
              {
                "name": "com.minecolonies.research.technology.guardianangel.name",
                "branch": "minecolonies:civilian",
                "costs": [
                  {
                    "count": 128,
                    "item": "minecraft:hay_block"
                  }
                ],
                "effects": [
                  {
                    "id": "minecolonies:effects/healthaddition",
                    "level": 5
                  }
                ],
                "icon": "minecolonies:textures/icons/research/hp5.png",
                "parentResearch": "minecolonies:civilian/lifesaver2",
                "requirements": [
                  {
                    "type": "minecolonies:building",
                    "building": "townhall",
                    "level": 5
                  }
                ],
                "researchLevel": 5
              },
              {
                "name": "com.minecolonies.research.technology.guardianangel2.name",
                "branch": "minecolonies:civilian",
                "costs": [
                  {
                    "count": 256,
                    "item": "minecraft:hay_block"
                  }
                ],
                "effects": [
                  {
                    "id": "minecolonies:effects/healthaddition",
                    "level": 6
                  }
                ],
                "icon": "minecolonies:textures/icons/research/hp6.png",
                "parentResearch": "minecolonies:civilian/guardianangel",
                "researchLevel": 6
              },
              {
                "name": "com.minecolonies.research.technology.hamlet.name",
                "branch": "minecolonies:civilian",
                "costs": [
                  {
                    "count": 128,
                    "item": "minecraft:cooked_beef"
                  }
                ],
                "effects": [
                  {
                    "id": "minecolonies:effects/citizencapaddition",
                    "level": 3
                  }
                ],
                "icon": "minecolonies:blockhutcitizen:75",
                "parentResearch": "minecolonies:civilian/outpost",
                "requirements": [
                  {
                    "type": "minecolonies:building",
                    "building": "residence",
                    "level": 5
                  }
                ],
                "researchLevel": 3
              },
              {
                "name": "com.minecolonies.research.technology.haste.name",
                "branch": "minecolonies:civilian",
                "costs": [
                  {
                    "count": 1,
                    "item": "minecraft:rabbit_foot"
                  }
                ],
                "effects": [
                  {
                    "id": "minecolonies:effects/walkingmultiplier",
                    "level": 1
                  }
                ],
                "icon": "minecolonies:textures/icons/research/speed1.png",
                "parentResearch": "minecolonies:civilian/keen",
                "requirements": [
                  {
                    "type": "minecolonies:building",
                    "building": "townhall",
                    "level": 3
                  }
                ],
                "researchLevel": 2,
                "sortOrder": 3,
                "subtitle": "com.minecolonies.research.civilian.haste.subtitle"
              },
              {
                "name": "com.minecolonies.research.technology.healingcream.name",
                "branch": "minecolonies:civilian",
                "costs": [
                  {
                    "count": 8,
                    "item": "minecraft:golden_carrot"
                  }
                ],
                "effects": [
                  {
                    "id": "minecolonies:effects/regenerationmultiplier",
                    "level": 2
                  }
                ],
                "icon": "minecolonies:textures/icons/research/regeneration2.png",
                "parentResearch": "minecolonies:civilian/bandaid",
                "requirements": [
                  {
                    "type": "minecolonies:building",
                    "building": "library",
                    "level": 3
                  }
                ],
                "researchLevel": 3,
                "subtitle": "com.minecolonies.research.civilian.healingcream.subtitle"
              },
              {
                "name": "com.minecolonies.research.technology.higherlearning.name",
                "branch": "minecolonies:civilian",
                "costs": [
                  {
                    "count": 3,
                    "item": "minecraft:book"
                  }
                ],
                "effects": [
                  {
                    "id": "minecolonies:effects/blockhutschool",
                    "level": 1
                  }
                ],
                "exclusiveChildResearch": true,
                "icon": "minecolonies:blockhutschool",
                "requirements": [
                  {
                    "type": "minecolonies:building",
                    "building": "residence",
                    "level": 3
                  }
                ],
                "researchLevel": 1,
                "sortOrder": 4,
                "subtitle": "com.minecolonies.research.civilian.higherlearning.subtitle"
              },
              {
                "name": "com.minecolonies.research.technology.hormones.name",
                "branch": "minecolonies:civilian",
                "costs": [
                  {
                    "count": 64,
                    "item": "minecraft:cooked_chicken"
                  }
                ],
                "effects": [
                  {
                    "id": "minecolonies:effects/growthmultiplier",
                    "level": 2
                  }
                ],
                "icon": "minecolonies:textures/icons/research/childgrowth2.png",
                "parentResearch": "minecolonies:civilian/nurture",
                "requirements": [
                  {
                    "type": "minecolonies:building",
                    "building": "school",
                    "level": 3
                  }
                ],
                "researchLevel": 3,
                "subtitle": "com.minecolonies.research.civilian.hormones.subtitle"
              },
              {
                "name": "com.minecolonies.research.technology.indefatigability.name",
                "branch": "minecolonies:civilian",
                "costs": [
                  {
                    "count": 64,
                    "item": "minecraft:golden_apple"
                  }
                ],
                "effects": [
                  {
                    "id": "minecolonies:effects/healingsaturationlimitaddition",
                    "level": 5
                  }
                ],
                "icon": "minecraft:experience_bottle",
                "parentResearch": "minecolonies:civilian/fortitude",
                "researchLevel": 6
              },
              {
                "name": "com.minecolonies.research.technology.keen.name",
                "branch": "minecolonies:civilian",
                "costs": [
                  {
                    "count": 3,
                    "item": "minecraft:book"
                  }
                ],
                "effects": [
                  {
                    "id": "minecolonies:effects/blockhutlibrary",
                    "level": 1
                  }
                ],
                "icon": "minecolonies:blockhutlibrary",
                "requirements": [
                  {
                    "type": "minecolonies:building",
                    "building": "residence",
                    "level": 3
                  }
                ],
                "researchLevel": 1,
                "sortOrder": 2
              },
              {
                "name": "com.minecolonies.research.technology.lifesaver.name",
                "branch": "minecolonies:civilian",
                "costs": [
                  {
                    "count": 32,
                    "item": "minecraft:hay_block"
                  }
                ],
                "effects": [
                  {
                    "id": "minecolonies:effects/healthaddition",
                    "level": 3
                  }
                ],
                "icon": "minecolonies:textures/icons/research/hp3.png",
                "parentResearch": "minecolonies:civilian/firstaid2",
                "requirements": [
                  {
                    "type": "minecolonies:building",
                    "building": "townhall",
                    "level": 3
                  }
                ],
                "researchLevel": 3
              },
              {
                "name": "com.minecolonies.research.technology.lifesaver2.name",
                "branch": "minecolonies:civilian",
                "costs": [
                  {
                    "count": 64,
                    "item": "minecraft:hay_block"
                  }
                ],
                "effects": [
                  {
                    "id": "minecolonies:effects/healthaddition",
                    "level": 4
                  }
                ],
                "icon": "minecolonies:textures/icons/research/hp4.png",
                "parentResearch": "minecolonies:civilian/lifesaver",
                "requirements": [
                  {
                    "type": "minecolonies:building",
                    "building": "townhall",
                    "level": 4
                  }
                ],
                "researchLevel": 4
              },
              {
                "name": "com.minecolonies.research.technology.masks.name",
                "branch": "minecolonies:civilian",
                "costs": [
                  {
                    "count": 32,
                    "item": "minecraft:white_wool"
                  }
                ],
                "effects": [
                  {
                    "id": "minecolonies:effects/masks",
                    "level": 1
                  }
                ],
                "icon": "minecolonies:textures/icons/research/hp4.png",
                "parentResearch": "minecolonies:civilian/firstaid2",
                "requirements": [
                  {
                    "type": "minecolonies:building",
                    "building": "library",
                    "level": 3
                  }
                ],
                "researchLevel": 3,
                "subtitle": "com.minecolonies.research.civilian.masks.subtitle"
              },
              {
                "name": "com.minecolonies.research.technology.master.name",
                "branch": "minecolonies:civilian",
                "costs": [
                  {
                    "count": 32,
                    "item": "minecraft:bookshelf"
                  }
                ],
                "effects": [
                  {
                    "id": "minecolonies:effects/teachingmultiplier",
                    "level": 4
                  }
                ],
                "icon": "minecolonies:textures/icons/research/xpgain4.png",
                "parentResearch": "minecolonies:civilian/bachelor",
                "requirements": [
                  {
                    "type": "minecolonies:building",
                    "building": "library",
                    "level": 5
                  }
                ],
                "researchLevel": 5,
                "subtitle": "com.minecolonies.research.civilian.master.subtitle"
              },
              {
                "name": "com.minecolonies.research.technology.moq.name",
                "branch": "minecolonies:technology",
                "costs": [
                  {
                    "count": 1,
                    "item": "minecolonies:clipboard"
                  },
                  {
                    "count": 16,
                    "item": "minecraft:book"
                  }
                ],
                "effects": [
                  {
                    "id": "minecolonies:effects/min_order",
                    "level": 1
                  }
                ],
                "icon": "minecolonies:clipboard",
                "parentResearch": "minecolonies:technology/memoryaid",
                "requirements": [
                  {
                    "type": "minecolonies:building",
                    "building": "deliveryman",
                    "level": 9
                  }
                ],
                "researchLevel": 3,
                "sortOrder": 3,
                "subtitle": "com.minecolonies.research.civilian.moq.subtitle"
              },
              {
                "name": "com.minecolonies.research.technology.morebooks.name",
                "branch": "minecolonies:civilian",
                "costs": [
                  {
                    "count": 6,
                    "item": "minecraft:book"
                  }
                ],
                "effects": [
                  {
                    "id": "minecolonies:effects/teachingmultiplier",
                    "level": 1
                  }
                ],
                "icon": "minecolonies:textures/icons/research/xpgain1.png",
                "parentResearch": "minecolonies:civilian/higherlearning",
                "requirements": [
                  {
                    "type": "minecolonies:building",
                    "building": "school",
                    "level": 1
                  }
                ],
                "researchLevel": 2,
                "subtitle": "com.minecolonies.research.civilian.morebooks.subtitle"
              },
              {
                "name": "com.minecolonies.research.technology.nightowl.name",
                "branch": "minecolonies:civilian",
                "costs": [
                  {
                    "count": 25,
                    "item": "minecraft:golden_carrot"
                  }
                ],
                "effects": [
                  {
                    "id": "minecolonies:effects/workingdayhaddition",
                    "level": 1
                  }
                ],
                "icon": "minecraft:clock:1",
                "parentResearch": "minecolonies:civilian/circus",
                "requirements": [
                  {
                    "type": "minecolonies:building",
                    "building": "library",
                    "level": 2
                  }
                ],
                "researchLevel": 3,
                "sortOrder": 2,
                "subtitle": "com.minecolonies.research.civilian.nightowl.subtitle"
              },
              {
                "name": "com.minecolonies.research.technology.nightowl2.name",
                "branch": "minecolonies:civilian",
                "costs": [
                  {
                    "count": 75,
                    "item": "minecraft:golden_carrot"
                  }
                ],
                "effects": [
                  {
                    "id": "minecolonies:effects/workingdayhaddition",
                    "level": 2
                  }
                ],
                "icon": "minecraft:clock:2",
                "parentResearch": "minecolonies:civilian/nightowl",
                "requirements": [
                  {
                    "type": "minecolonies:building",
                    "building": "townhall",
                    "level": 3
                  }
                ],
                "researchLevel": 4,
                "sortOrder": 2,
                "subtitle": "com.minecolonies.research.civilian.nightowl2.subtitle"
              },
              {
                "name": "com.minecolonies.research.technology.nimble.name",
                "branch": "minecolonies:civilian",
                "costs": [
                  {
                    "count": 1,
                    "item": "minecraft:rabbit_foot"
                  }
                ],
                "effects": [
                  {
                    "id": "minecolonies:effects/walkingmultiplier",
                    "level": 2
                  }
                ],
                "icon": "minecolonies:textures/icons/research/speed1.png",
                "parentResearch": "minecolonies:civilian/haste",
                "requirements": [
                  {
                    "type": "minecolonies:building",
                    "building": "townhall",
                    "level": 3
                  }
                ],
                "researchLevel": 3,
                "sortOrder": 3,
                "subtitle": "com.minecolonies.research.civilian.nimble.subtitle"
              },
              {
                "name": "com.minecolonies.research.technology.nurture.name",
                "branch": "minecolonies:civilian",
                "costs": [
                  {
                    "count": 32,
                    "item": "minecraft:cooked_chicken"
                  }
                ],
                "effects": [
                  {
                    "id": "minecolonies:effects/growthmultiplier",
                    "level": 1
                  }
                ],
                "icon": "minecolonies:textures/icons/research/childgrowth1.png",
                "parentResearch": "minecolonies:civilian/higherlearning",
                "requirements": [
                  {
                    "type": "minecolonies:building",
                    "building": "school",
                    "level": 1
                  }
                ],
                "researchLevel": 2,
                "sortOrder": 2,
                "subtitle": "com.minecolonies.research.civilian.nurture.subtitle"
              },
              {
                "name": "com.minecolonies.research.technology.opera.name",
                "branch": "minecolonies:civilian",
                "costs": [
                  {
                    "count": 27,
                    "item": "minecraft:cake"
                  }
                ],
                "effects": [
                  {
                    "id": "minecolonies:effects/happinessmultiplier",
                    "level": 4
                  }
                ],
                "icon": "minecolonies:textures/icons/research/happy4.png",
                "parentResearch": "minecolonies:civilian/spectacle",
                "requirements": [
                  {
                    "type": "minecolonies:building",
                    "building": "cook",
                    "level": 5
                  }
                ],
                "researchLevel": 5,
                "subtitle": "com.minecolonies.research.civilian.opera.subtitle"
              },
              {
                "name": "com.minecolonies.research.technology.outpost.name",
                "branch": "minecolonies:civilian",
                "costs": [
                  {
                    "count": 64,
                    "item": "minecraft:cooked_beef"
                  }
                ],
                "effects": [
                  {
                    "id": "minecolonies:effects/citizencapaddition",
                    "level": 2
                  }
                ],
                "icon": "minecolonies:blockhutcitizen:50",
                "parentResearch": "minecolonies:civilian/keen",
                "requirements": [
                  {
                    "type": "minecolonies:building",
                    "building": "residence",
                    "level": 4
                  }
                ],
                "researchLevel": 2
              },
              {
                "name": "com.minecolonies.research.technology.phd.name",
                "branch": "minecolonies:civilian",
                "costs": [
                  {
                    "count": 64,
                    "item": "minecraft:bookshelf"
                  }
                ],
                "effects": [
                  {
                    "id": "minecolonies:effects/teachingmultiplier",
                    "level": 5
                  }
                ],
                "icon": "minecolonies:textures/icons/research/xpgain5.png",
                "parentResearch": "minecolonies:civilian/master",
                "researchLevel": 6,
                "subtitle": "com.minecolonies.research.civilian.phd.subtitle"
              },
              {
                "name": "com.minecolonies.research.technology.puberty.name",
                "branch": "minecolonies:civilian",
                "costs": [
                  {
                    "count": 128,
                    "item": "minecraft:cooked_chicken"
                  }
                ],
                "effects": [
                  {
                    "id": "minecolonies:effects/growthmultiplier",
                    "level": 3
                  }
                ],
                "icon": "minecolonies:textures/icons/research/childgrowth3.png",
                "parentResearch": "minecolonies:civilian/hormones",
                "requirements": [
                  {
                    "type": "minecolonies:building",
                    "building": "library",
                    "level": 3
                  }
                ],
                "researchLevel": 4,
                "subtitle": "com.minecolonies.research.civilian.puberty.subtitle"
              },
              {
                "name": "com.minecolonies.research.technology.rails.name",
                "branch": "minecolonies:civilian",
                "costs": [
                  {
                    "count": 64,
                    "item": "minecraft:rail"
                  }
                ],
                "effects": [
                  {
                    "id": "minecolonies:effects/railsunlock",
                    "level": 1
                  }
                ],
                "icon": "minecraft:detector_rail",
                "parentResearch": "minecolonies:civilian/keen",
                "requirements": [
                  {
                    "type": "minecolonies:building",
                    "building": "deliveryman",
                    "level": 3
                  }
                ],
                "researchLevel": 2,
                "sortOrder": 4,
                "subtitle": "com.minecolonies.research.civilian.rails.subtitle"
              },
              {
                "name": "com.minecolonies.research.technology.raisingthedead.name",
                "branch": "minecolonies:civilian",
                "costs": [
                  {
                    "count": 1,
                    "item": "minecraft:totem_of_undying"
                  }
                ],
                "effects": [
                  {
                    "id": "minecolonies:effects/usetotemunlock",
                    "level": 1
                  }
                ],
                "icon": "minecraft:totem_of_undying",
                "parentResearch": "minecolonies:civilian/resurrectchance2",
                "requirements": [
                  {
                    "type": "minecolonies:building",
                    "building": "graveyard",
                    "level": 5
                  }
                ],
                "researchLevel": 4,
                "sortOrder": 1,
                "subtitle": "com.minecolonies.research.civilian.raisingthedead.subtitle"
              },
              {
                "name": "com.minecolonies.research.technology.reflective.name",
                "branch": "minecolonies:civilian",
                "costs": [
                  {
                    "count": 48,
                    "item": "minecraft:book"
                  }
                ],
                "effects": [
                  {
                    "id": "minecolonies:effects/levelingmultiplier",
                    "level": 4
                  }
                ],
                "icon": "minecraft:experience_bottle:4",
                "parentResearch": "minecolonies:civilian/scholarly",
                "requirements": [
                  {
                    "type": "minecolonies:building",
                    "building": "library",
                    "level": 5
                  }
                ],
                "researchLevel": 5,
                "subtitle": "com.minecolonies.research.civilian.reflective.subtitle"
              },
              {
                "name": "com.minecolonies.research.technology.remembrance.name",
                "branch": "minecolonies:civilian",
                "costs": [
                  {
                    "count": 8,
                    "item": "minecraft:bone"
                  }
                ],
                "effects": [
                  {
                    "id": "minecolonies:effects/blockhutgraveyard",
                    "level": 1
                  }
                ],
                "icon": "minecolonies:blockhutgraveyard",
                "requirements": [
                  {
                    "type": "minecolonies:building",
                    "building": "townhall",
                    "level": 2
                  }
                ],
                "researchLevel": 1,
                "sortOrder": 6,
                "subtitle": "com.minecolonies.research.civilian.remembrance.subtitle"
              },
              {
                "name": "com.minecolonies.research.technology.resilience.name",
                "branch": "minecolonies:civilian",
                "costs": [
                  {
                    "count": 8,
                    "item": "minecraft:golden_apple"
                  }
                ],
                "effects": [
                  {
                    "id": "minecolonies:effects/healingsaturationlimitaddition",
                    "level": 2
                  }
                ],
                "icon": "minecraft:potion",
                "parentResearch": "minecolonies:civilian/resistance",
                "requirements": [
                  {
                    "type": "minecolonies:building",
                    "building": "cook",
                    "level": 3
                  }
                ],
                "researchLevel": 3
              },
              {
                "name": "com.minecolonies.research.technology.resistance.name",
                "branch": "minecolonies:civilian",
                "costs": [
                  {
                    "count": 1,
                    "item": "minecraft:golden_apple"
                  }
                ],
                "effects": [
                  {
                    "id": "minecolonies:effects/healingsaturationlimitaddition",
                    "level": 1
                  }
                ],
                "icon": "minecraft:glass_bottle",
                "parentResearch": "minecolonies:civilian/stamina",
                "requirements": [
                  {
                    "type": "minecolonies:building",
                    "building": "cook",
                    "level": 2
                  }
                ],
                "researchLevel": 2,
                "sortOrder": 2
              },
              {
                "name": "com.minecolonies.research.technology.resurrectchance1.name",
                "branch": "minecolonies:civilian",
                "costs": [
                  {
                    "count": 1,
                    "item": "minecraft:ghast_tear"
                  }
                ],
                "effects": [
                  {
                    "id": "minecolonies:effects/resurrectchanceaddition",
                    "level": 1
                  }
                ],
                "icon": "minecolonies:blockhutgraveyard",
                "parentResearch": "minecolonies:civilian/remembrance",
                "requirements": [
                  {
                    "type": "minecolonies:building",
                    "building": "graveyard",
                    "level": 3
                  }
                ],
                "researchLevel": 2,
                "sortOrder": 1,
                "subtitle": "com.minecolonies.research.civilian.resurrectchance1.subtitle"
              },
              {
                "name": "com.minecolonies.research.technology.resurrectchance2.name",
                "branch": "minecolonies:civilian",
                "costs": [
                  {
                    "count": 16,
                    "item": "minecraft:chorus_fruit"
                  }
                ],
                "effects": [
                  {
                    "id": "minecolonies:effects/resurrectchanceaddition",
                    "level": 2
                  }
                ],
                "icon": "minecolonies:blockhutgraveyard",
                "parentResearch": "minecolonies:civilian/resurrectchance1",
                "requirements": [
                  {
                    "type": "minecolonies:building",
                    "building": "graveyard",
                    "level": 5
                  }
                ],
                "researchLevel": 3,
                "sortOrder": 1,
                "subtitle": "com.minecolonies.research.civilian.resurrectchance2.subtitle"
              },
              {
                "name": "com.minecolonies.research.technology.scholarly.name",
                "branch": "minecolonies:civilian",
                "costs": [
                  {
                    "count": 24,
                    "item": "minecraft:book"
                  }
                ],
                "effects": [
                  {
                    "id": "minecolonies:effects/levelingmultiplier",
                    "level": 3
                  }
                ],
                "icon": "minecraft:experience_bottle:3",
                "parentResearch": "minecolonies:civilian/studious",
                "requirements": [
                  {
                    "type": "minecolonies:building",
                    "building": "library",
                    "level": 4
                  }
                ],
                "researchLevel": 4,
                "subtitle": "com.minecolonies.research.civilian.scholarly.subtitle"
              },
              {
                "name": "com.minecolonies.research.technology.spectacle.name",
                "branch": "minecolonies:civilian",
                "costs": [
                  {
                    "count": 18,
                    "item": "minecraft:cake"
                  }
                ],
                "effects": [
                  {
                    "id": "minecolonies:effects/happinessmultiplier",
                    "level": 3
                  }
                ],
                "icon": "minecolonies:textures/icons/research/happy3.png",
                "parentResearch": "minecolonies:civilian/festival",
                "requirements": [
                  {
                    "type": "minecolonies:building",
                    "building": "cook",
                    "level": 4
                  }
                ],
                "researchLevel": 4
              },
              {
                "name": "com.minecolonies.research.technology.stamina.name",
                "branch": "minecolonies:civilian",
                "costs": [
                  {
                    "count": 1,
                    "item": "minecraft:carrot"
                  }
                ],
                "effects": [
                  {
                    "id": "minecolonies:effects/blockhuthospital",
                    "level": 1
                  }
                ],
                "exclusiveChildResearch": true,
                "icon": "minecolonies:blockhuthospital",
                "researchLevel": 1
              },
              {
                "name": "com.minecolonies.research.technology.studious.name",
                "branch": "minecolonies:civilian",
                "costs": [
                  {
                    "count": 12,
                    "item": "minecraft:book"
                  }
                ],
                "effects": [
                  {
                    "id": "minecolonies:effects/levelingmultiplier",
                    "level": 2
                  }
                ],
                "icon": "minecraft:experience_bottle:2",
                "parentResearch": "minecolonies:civilian/diligent",
                "requirements": [
                  {
                    "type": "minecolonies:building",
                    "building": "library",
                    "level": 3
                  }
                ],
                "researchLevel": 3
              },
              {
                "name": "com.minecolonies.research.technology.stuffer.name",
                "branch": "minecolonies:civilian",
                "costs": [
                  {
                    "count": 128,
                    "item": "minecraft:cookie"
                  }
                ],
                "effects": [
                  {
                    "id": "minecolonies:effects/saturationmultiplier",
                    "level": 3
                  }
                ],
                "icon": "minecolonies:textures/icons/research/saturation3.png",
                "parentResearch": "minecolonies:civilian/gorger",
                "requirements": [
                  {
                    "type": "minecolonies:building",
                    "building": "cook",
                    "level": 4
                  }
                ],
                "researchLevel": 4
              },
              {
                "name": "com.minecolonies.research.technology.swift.name",
                "branch": "minecolonies:civilian",
                "costs": [
                  {
                    "count": 32,
                    "item": "minecraft:rabbit_foot"
                  }
                ],
                "effects": [
                  {
                    "id": "minecolonies:effects/walkingmultiplier",
                    "level": 4
                  }
                ],
                "icon": "minecolonies:textures/icons/research/speed3.png",
                "parentResearch": "minecolonies:civilian/agile",
                "requirements": [
                  {
                    "type": "minecolonies:building",
                    "building": "townhall",
                    "level": 5
                  }
                ],
                "researchLevel": 5,
                "subtitle": "com.minecolonies.research.civilian.swift.subtitle"
              },
              {
                "name": "com.minecolonies.research.technology.theater.name",
                "branch": "minecolonies:civilian",
                "costs": [
                  {
                    "count": 16,
                    "item": "minecraft:enchanted_golden_apple"
                  }
                ],
                "effects": [
                  {
                    "id": "minecolonies:effects/happinessmultiplier",
                    "level": 5
                  }
                ],
                "icon": "minecolonies:textures/icons/research/happy5.png",
                "parentResearch": "minecolonies:civilian/opera",
                "researchLevel": 6,
                "subtitle": "com.minecolonies.research.civilian.theater.subtitle"
              },
              {
                "name": "com.minecolonies.research.technology.undertakeremergency.name",
                "branch": "minecolonies:civilian",
                "costs": [
                  {
                    "count": 1,
                    "item": "minecraft:iron_boots"
                  }
                ],
                "effects": [
                  {
                    "id": "minecolonies:effects/undertakerrun",
                    "level": 1
                  }
                ],
                "icon": "minecolonies:blockhutgraveyard",
                "parentResearch": "minecolonies:civilian/remembrance",
                "requirements": [
                  {
                    "type": "minecolonies:building",
                    "building": "graveyard",
                    "level": 2
                  }
                ],
                "researchLevel": 2,
                "sortOrder": 3
              },
              {
                "name": "com.minecolonies.research.technology.vaccines.name",
                "branch": "minecolonies:civilian",
                "costs": [
                  {
                    "count": 64,
                    "item": "minecraft:egg"
                  }
                ],
                "effects": [
                  {
                    "id": "minecolonies:effects/vaccines",
                    "level": 1
                  }
                ],
                "icon": "minecolonies:textures/icons/research/hp5.png",
                "parentResearch": "minecolonies:civilian/masks",
                "requirements": [
                  {
                    "type": "minecolonies:building",
                    "building": "hospital",
                    "level": 3
                  }
                ],
                "researchLevel": 4,
                "subtitle": "com.minecolonies.research.civilian.vaccines.subtitle"
              },
              {
                "name": "com.minecolonies.research.technology.village.name",
                "branch": "minecolonies:civilian",
                "costs": [
                  {
                    "count": 256,
                    "item": "minecraft:cooked_beef"
                  }
                ],
                "effects": [
                  {
                    "id": "minecolonies:effects/citizencapaddition",
                    "level": 4
                  }
                ],
                "icon": "minecolonies:blockhutcitizen:100",
                "parentResearch": "minecolonies:civilian/hamlet",
                "requirements": [
                  {
                    "type": "minecolonies:building",
                    "building": "townhall",
                    "level": 4
                  }
                ],
                "researchLevel": 4
              },
              {
                "name": "com.minecolonies.research.technology.vines.name",
                "branch": "minecolonies:civilian",
                "costs": [
                  {
                    "count": 64,
                    "item": "minecraft:vine"
                  }
                ],
                "effects": [
                  {
                    "id": "minecolonies:effects/vinesunlock",
                    "level": 1
                  }
                ],
                "icon": "minecraft:vine",
                "parentResearch": "minecolonies:civilian/keen",
                "requirements": [
                  {
                    "type": "minecolonies:building",
                    "building": "residence",
                    "level": 3
                  }
                ],
                "researchLevel": 2,
                "sortOrder": 5,
                "subtitle": "com.minecolonies.research.civilian.vines.subtitle"
              },
              {
                "name": "com.minecolonies.research.technology.vitality.name",
                "branch": "minecolonies:civilian",
                "costs": [
                  {
                    "count": 16,
                    "item": "minecraft:golden_apple"
                  }
                ],
                "effects": [
                  {
                    "id": "minecolonies:effects/healingsaturationlimitaddition",
                    "level": 3
                  }
                ],
                "icon": "minecraft:splash_potion",
                "parentResearch": "minecolonies:civilian/resilience",
                "requirements": [
                  {
                    "type": "minecolonies:building",
                    "building": "cook",
                    "level": 4
                  }
                ],
                "researchLevel": 4
              }
            ]
          },
          {
            name: "combat",
            technologies: [
              {
                "name": "com.minecolonies.research.technology.accuracy.name",
                "branch": "minecolonies:combat",
                "costs": [
                  {
                    "count": 16,
                    "item": "minecraft:iron_ingot"
                  }
                ],
                "effects": [
                  {
                    "id": "minecolonies:effects/guardcrit",
                    "level": 1
                  }
                ],
                "exclusiveChildResearch": true,
                "icon": "minecraft:iron_sword",
                "requirements": [
                  {
                    "type": "minecolonies:building",
                    "building": "guardtower",
                    "level": 1
                  }
                ],
                "researchLevel": 1
              },
              {
                "name": "com.minecolonies.research.technology.agilearcher.name",
                "branch": "minecolonies:combat",
                "costs": [
                  {
                    "count": 64,
                    "item": "minecraft:diamond"
                  }
                ],
                "effects": [
                  {
                    "id": "minecolonies:effects/archerarmormultiplier",
                    "level": 5
                  }
                ],
                "icon": "minecraft:diamond_boots",
                "parentResearch": "minecolonies:combat/improvedevasion",
                "researchLevel": 6,
                "subtitle": "com.minecolonies.research.combat.agilearcher.subtitle"
              },
              {
                "name": "com.minecolonies.research.technology.arrowpierce.name",
                "branch": "minecolonies:combat",
                "costs": [
                  {
                    "count": 64,
                    "item": "minecraft:arrow"
                  },
                  {
                    "count": 64,
                    "item": "minecraft:redstone"
                  }
                ],
                "effects": [
                  {
                    "id": "minecolonies:effects/piercingarrowsunlock",
                    "level": 1
                  }
                ],
                "icon": "minecraft:enchanted_book",
                "parentResearch": "minecolonies:combat/arrowuse",
                "requirements": [
                  {
                    "type": "minecolonies:building",
                    "building": "archery",
                    "level": 1
                  }
                ],
                "researchLevel": 3
              },
              {
                "name": "com.minecolonies.research.technology.arrowuse.name",
                "branch": "minecolonies:combat",
                "costs": [
                  {
                    "count": 64,
                    "item": "minecraft:arrow"
                  }
                ],
                "effects": [
                  {
                    "id": "minecolonies:effects/consumearrowsunlock",
                    "level": 1
                  }
                ],
                "icon": "minecraft:arrow",
                "parentResearch": "minecolonies:combat/taunt",
                "requirements": [
                  {
                    "type": "minecolonies:building",
                    "building": "guardtower",
                    "level": 2
                  }
                ],
                "researchLevel": 2,
                "subtitle": "com.minecolonies.research.combat.arrowuse.subtitle"
              },
              {
                "name": "com.minecolonies.research.technology.avoid.name",
                "branch": "minecolonies:combat",
                "costs": [
                  {
                    "count": 8,
                    "item": "minecraft:emerald"
                  }
                ],
                "effects": [
                  {
                    "id": "minecolonies:effects/fleeingspeedaddition",
                    "level": 1
                  }
                ],
                "icon": "minecraft:feather",
                "parentResearch": "minecolonies:combat/regeneration",
                "requirements": [
                  {
                    "type": "minecolonies:building",
                    "building": "guardtower",
                    "level": 4
                  }
                ],
                "researchLevel": 3,
                "sortOrder": 2
              },
              {
                "name": "com.minecolonies.research.technology.avoidance.name",
                "branch": "minecolonies:combat",
                "costs": [
                  {
                    "count": 3,
                    "item": "minecraft:iron_block"
                  }
                ],
                "effects": [
                  {
                    "id": "minecolonies:effects/shieldusageunlock",
                    "level": 1
                  }
                ],
                "exclusiveChildResearch": true,
                "icon": "minecraft:shield",
                "requirements": [
                  {
                    "type": "minecolonies:building",
                    "building": "guardtower",
                    "level": 3
                  }
                ],
                "researchLevel": 1,
                "sortOrder": 3
              },
              {
                "name": "com.minecolonies.research.technology.boiledleather.name",
                "branch": "minecolonies:combat",
                "costs": [
                  {
                    "count": 64,
                    "item": "minecraft:leather"
                  }
                ],
                "effects": [
                  {
                    "id": "minecolonies:effects/armordurabilitymultiplier",
                    "level": 2
                  }
                ],
                "icon": "minecraft:turtle_helmet",
                "parentResearch": "minecolonies:combat/improvedleather",
                "requirements": [
                  {
                    "type": "minecolonies:building",
                    "building": "townhall",
                    "level": 2
                  }
                ],
                "researchLevel": 2,
                "subtitle": "com.minecolonies.research.combat.boiledleather.subtitle"
              },
              {
                "name": "com.minecolonies.research.technology.captainoftheguard.name",
                "branch": "minecolonies:combat",
                "costs": [
                  {
                    "count": 27,
                    "item": "minecraft:shield"
                  }
                ],
                "effects": [
                  {
                    "id": "minecolonies:effects/blockattacksmultiplier",
                    "level": 4
                  }
                ],
                "icon": "minecraft:iron_block",
                "parentResearch": "minecolonies:combat/captaintraining",
                "researchLevel": 6
              },
              {
                "name": "com.minecolonies.research.technology.captaintraining.name",
                "branch": "minecolonies:combat",
                "costs": [
                  {
                    "count": 16,
                    "item": "minecraft:shield"
                  }
                ],
                "effects": [
                  {
                    "id": "minecolonies:effects/blockattacksmultiplier",
                    "level": 3
                  }
                ],
                "icon": "minecraft:iron_bars",
                "parentResearch": "minecolonies:combat/knighttraining",
                "requirements": [
                  {
                    "type": "minecolonies:building",
                    "building": "combatacademy",
                    "level": 5
                  }
                ],
                "researchLevel": 5
              },
              {
                "name": "com.minecolonies.research.technology.cleave.name",
                "branch": "minecolonies:combat",
                "costs": [
                  {
                    "count": 8,
                    "item": "minecraft:iron_block"
                  }
                ],
                "effects": [
                  {
                    "id": "minecolonies:effects/meleedamageaddition",
                    "level": 3
                  }
                ],
                "icon": "minecraft:iron_sword",
                "parentResearch": "minecolonies:combat/powerattack",
                "requirements": [
                  {
                    "type": "minecolonies:building",
                    "building": "guardtower",
                    "level": 10
                  }
                ],
                "researchLevel": 4
              },
              {
                "name": "com.minecolonies.research.technology.coffee.name",
                "branch": "minecolonies:combat",
                "costs": [
                  {
                    "count": 4,
                    "item": "minecraft:golden_carrot"
                  }
                ],
                "effects": [
                  {
                    "id": "minecolonies:effects/sleeplessmultiplier",
                    "level": 1
                  }
                ],
                "icon": "minecraft:lime_bed",
                "parentResearch": "minecolonies:combat/tactictraining",
                "researchLevel": 2,
                "subtitle": "com.minecolonies.research.combat.coffee.subtitle"
              },
              {
                "name": "com.minecolonies.research.technology.deadlyaim.name",
                "branch": "minecolonies:combat",
                "costs": [
                  {
                    "count": 256,
                    "item": "minecraft:flint"
                  }
                ],
                "effects": [
                  {
                    "id": "minecolonies:effects/archerdamageaddition",
                    "level": 5
                  }
                ],
                "icon": "minecraft:tipped_arrow",
                "parentResearch": "minecolonies:combat/woundingshot",
                "researchLevel": 6,
                "subtitle": "com.minecolonies.research.combat.deadlyaim.subtitle"
              },
              {
                "name": "com.minecolonies.research.technology.diamondskin.name",
                "branch": "minecolonies:combat",
                "costs": [
                  {
                    "count": 64,
                    "item": "minecraft:diamond"
                  }
                ],
                "effects": [
                  {
                    "id": "minecolonies:effects/armordurabilitymultiplier",
                    "level": 6
                  }
                ],
                "icon": "minecraft:diamond_helmet",
                "parentResearch": "minecolonies:combat/steelarmor",
                "researchLevel": 6
              },
              {
                "name": "com.minecolonies.research.technology.dodge.name",
                "branch": "minecolonies:combat",
                "costs": [
                  {
                    "count": 16,
                    "item": "minecraft:leather"
                  }
                ],
                "effects": [
                  {
                    "id": "minecolonies:effects/archerarmormultiplier",
                    "level": 1
                  }
                ],
                "icon": "minecolonies:pirate_shoes",
                "parentResearch": "minecolonies:combat/avoidance",
                "requirements": [
                  {
                    "type": "minecolonies:building",
                    "building": "smeltery",
                    "level": 1
                  }
                ],
                "researchLevel": 2,
                "sortOrder": 2,
                "subtitle": "com.minecolonies.research.combat.dodge.subtitle"
              },
              {
                "name": "com.minecolonies.research.technology.druidpotion.name",
                "branch": "minecolonies:combat",
                "costs": [
                  {
                    "count": 64,
                    "item": "minecolonies:mistletoe"
                  }
                ],
                "effects": [
                  {
                    "id": "minecolonies:effects/consumepotions",
                    "level": 1
                  }
                ],
                "icon": "minecolonies:mistletoe",
                "parentResearch": "minecolonies:combat/arrowuse",
                "requirements": [
                  {
                    "type": "minecolonies:building",
                    "building": "barracks",
                    "level": 3
                  }
                ],
                "researchLevel": 3
              },
              {
                "name": "com.minecolonies.research.technology.duelist.name",
                "branch": "minecolonies:combat",
                "costs": [
                  {
                    "count": 64,
                    "item": "minecraft:iron_ingot"
                  }
                ],
                "effects": [
                  {
                    "id": "minecolonies:effects/meleearmormultiplier",
                    "level": 3
                  }
                ],
                "icon": "minecraft:chainmail_chestplate",
                "parentResearch": "minecolonies:combat/riposte",
                "requirements": [
                  {
                    "type": "minecolonies:building",
                    "building": "smeltery",
                    "level": 3
                  }
                ],
                "researchLevel": 4
              },
              {
                "name": "com.minecolonies.research.technology.evade.name",
                "branch": "minecolonies:combat",
                "costs": [
                  {
                    "count": 16,
                    "item": "minecraft:emerald"
                  }
                ],
                "effects": [
                  {
                    "id": "minecolonies:effects/fleeingspeedaddition",
                    "level": 2
                  }
                ],
                "icon": "minecraft:feather:2",
                "parentResearch": "minecolonies:combat/avoid",
                "requirements": [
                  {
                    "type": "minecolonies:building",
                    "building": "guardtower",
                    "level": 8
                  }
                ],
                "researchLevel": 4
              },
              {
                "name": "com.minecolonies.research.technology.evasion.name",
                "branch": "minecolonies:combat",
                "costs": [
                  {
                    "count": 64,
                    "item": "minecraft:leather"
                  }
                ],
                "effects": [
                  {
                    "id": "minecolonies:effects/archerarmormultiplier",
                    "level": 3
                  }
                ],
                "icon": "minecraft:iron_boots",
                "parentResearch": "minecolonies:combat/improveddodge",
                "requirements": [
                  {
                    "type": "minecolonies:building",
                    "building": "smeltery",
                    "level": 3
                  }
                ],
                "researchLevel": 4,
                "subtitle": "com.minecolonies.research.combat.evasion.subtitle"
              },
              {
                "name": "com.minecolonies.research.technology.fear.name",
                "branch": "minecolonies:combat",
                "costs": [
                  {
                    "count": 16,
                    "item": "minecraft:emerald"
                  }
                ],
                "effects": [
                  {
                    "id": "minecolonies:effects/fleeingdamagemultiplier",
                    "level": 2
                  }
                ],
                "icon": "minecraft:iron_boots",
                "parentResearch": "minecolonies:combat/feint",
                "requirements": [
                  {
                    "type": "minecolonies:building",
                    "building": "guardtower",
                    "level": 8
                  }
                ],
                "researchLevel": 4
              },
              {
                "name": "com.minecolonies.research.technology.feint.name",
                "branch": "minecolonies:combat",
                "costs": [
                  {
                    "count": 8,
                    "item": "minecraft:emerald"
                  }
                ],
                "effects": [
                  {
                    "id": "minecolonies:effects/fleeingdamagemultiplier",
                    "level": 1
                  }
                ],
                "icon": "minecraft:leather_boots",
                "parentResearch": "minecolonies:combat/regeneration",
                "requirements": [
                  {
                    "type": "minecolonies:building",
                    "building": "guardtower",
                    "level": 4
                  }
                ],
                "researchLevel": 3
              },
              {
                "name": "com.minecolonies.research.technology.flee.name",
                "branch": "minecolonies:combat",
                "costs": [
                  {
                    "count": 32,
                    "item": "minecraft:emerald"
                  }
                ],
                "effects": [
                  {
                    "id": "minecolonies:effects/fleeingspeedaddition",
                    "level": 3
                  }
                ],
                "icon": "minecraft:feather:3",
                "parentResearch": "minecolonies:combat/evade",
                "requirements": [
                  {
                    "type": "minecolonies:building",
                    "building": "guardtower",
                    "level": 12
                  }
                ],
                "researchLevel": 5,
                "subtitle": "com.minecolonies.research.combat.flee.subtitle"
              },
              {
                "name": "com.minecolonies.research.technology.fullretreat.name",
                "branch": "minecolonies:combat",
                "costs": [
                  {
                    "count": 64,
                    "item": "minecraft:emerald"
                  }
                ],
                "effects": [
                  {
                    "id": "minecolonies:effects/fleeingdamagemultiplier",
                    "level": 4
                  }
                ],
                "icon": "minecraft:diamond_boots",
                "parentResearch": "minecolonies:combat/retreat",
                "researchLevel": 6
              },
              {
                "name": "com.minecolonies.research.technology.hotfoot.name",
                "branch": "minecolonies:combat",
                "costs": [
                  {
                    "count": 64,
                    "item": "minecraft:emerald"
                  }
                ],
                "effects": [
                  {
                    "id": "minecolonies:effects/fleeingspeedaddition",
                    "level": 4
                  }
                ],
                "icon": "minecraft:chicken",
                "parentResearch": "minecolonies:combat/flee",
                "researchLevel": 6
              },
              {
                "name": "com.minecolonies.research.technology.improvedbows.name",
                "branch": "minecolonies:combat",
                "costs": [
                  {
                    "count": 6,
                    "item": "minecraft:iron_block"
                  }
                ],
                "effects": [
                  {
                    "id": "minecolonies:effects/blockhutarchery",
                    "level": 1
                  }
                ],
                "icon": "minecolonies:blockhutarchery",
                "parentResearch": "minecolonies:combat/tactictraining",
                "requirements": [
                  {
                    "type": "minecolonies:building",
                    "building": "barracks",
                    "level": 3
                  }
                ],
                "researchLevel": 2,
                "sortOrder": 2,
                "subtitle": "com.minecolonies.research.combat.improvedbows.subtitle"
              },
              {
                "name": "com.minecolonies.research.technology.improveddodge.name",
                "branch": "minecolonies:combat",
                "costs": [
                  {
                    "count": 32,
                    "item": "minecraft:leather"
                  }
                ],
                "effects": [
                  {
                    "id": "minecolonies:effects/archerarmormultiplier",
                    "level": 2
                  }
                ],
                "icon": "minecolonies:pirate_boots",
                "parentResearch": "minecolonies:combat/dodge",
                "requirements": [
                  {
                    "type": "minecolonies:building",
                    "building": "archery",
                    "level": 1
                  }
                ],
                "researchLevel": 3,
                "subtitle": "com.minecolonies.research.combat.improveddodge.subtitle"
              },
              {
                "name": "com.minecolonies.research.technology.improvedevasion.name",
                "branch": "minecolonies:combat",
                "costs": [
                  {
                    "count": 16,
                    "item": "minecraft:diamond"
                  }
                ],
                "effects": [
                  {
                    "id": "minecolonies:effects/archerarmormultiplier",
                    "level": 4
                  }
                ],
                "icon": "minecraft:golden_boots",
                "parentResearch": "minecolonies:combat/evasion",
                "requirements": [
                  {
                    "type": "minecolonies:building",
                    "building": "archery",
                    "level": 5
                  }
                ],
                "researchLevel": 5,
                "subtitle": "com.minecolonies.research.combat.improvedevasion.subtitle"
              },
              {
                "name": "com.minecolonies.research.technology.improvedleather.name",
                "branch": "minecolonies:combat",
                "costs": [
                  {
                    "count": 32,
                    "item": "minecraft:leather"
                  }
                ],
                "effects": [
                  {
                    "id": "minecolonies:effects/armordurabilitymultiplier",
                    "level": 1
                  }
                ],
                "icon": "minecraft:leather_helmet",
                "requirements": [
                  {
                    "type": "minecolonies:building",
                    "building": "townhall",
                    "level": 1
                  }
                ],
                "researchLevel": 1,
                "sortOrder": 4,
                "subtitle": "com.minecolonies.research.combat.improvedleather.subtitle"
              },
              {
                "name": "com.minecolonies.research.technology.improvedswords.name",
                "branch": "minecolonies:combat",
                "costs": [
                  {
                    "count": 6,
                    "item": "minecraft:iron_block"
                  }
                ],
                "effects": [
                  {
                    "id": "minecolonies:effects/blockhutcombatacademy",
                    "level": 1
                  }
                ],
                "icon": "minecolonies:blockhutcombatacademy",
                "parentResearch": "minecolonies:combat/tactictraining",
                "requirements": [
                  {
                    "type": "minecolonies:building",
                    "building": "barracks",
                    "level": 3
                  }
                ],
                "researchLevel": 2,
                "subtitle": "com.minecolonies.research.combat.improvedswords.subtitle"
              },
              {
                "name": "com.minecolonies.research.technology.ironarmor.name",
                "branch": "minecolonies:combat",
                "costs": [
                  {
                    "count": 32,
                    "item": "minecraft:iron_ingot"
                  }
                ],
                "effects": [
                  {
                    "id": "minecolonies:effects/armordurabilitymultiplier",
                    "level": 4
                  }
                ],
                "icon": "minecraft:iron_helmet",
                "parentResearch": "minecolonies:combat/ironskin",
                "requirements": [
                  {
                    "type": "minecolonies:building",
                    "building": "townhall",
                    "level": 4
                  }
                ],
                "researchLevel": 4
              },
              {
                "name": "com.minecolonies.research.technology.ironskin.name",
                "branch": "minecolonies:combat",
                "costs": [
                  {
                    "count": 16,
                    "item": "minecraft:iron_ingot"
                  }
                ],
                "effects": [
                  {
                    "id": "minecolonies:effects/armordurabilitymultiplier",
                    "level": 3
                  }
                ],
                "icon": "minecraft:chainmail_helmet",
                "parentResearch": "minecolonies:combat/boiledleather",
                "requirements": [
                  {
                    "type": "minecolonies:building",
                    "building": "townhall",
                    "level": 3
                  }
                ],
                "researchLevel": 3
              },
              {
                "name": "com.minecolonies.research.technology.knighttraining.name",
                "branch": "minecolonies:combat",
                "costs": [
                  {
                    "count": 8,
                    "item": "minecraft:shield"
                  }
                ],
                "effects": [
                  {
                    "id": "minecolonies:effects/blockattacksmultiplier",
                    "level": 2
                  }
                ],
                "icon": "minecraft:barrel",
                "parentResearch": "minecolonies:combat/squiretraining",
                "requirements": [
                  {
                    "type": "minecolonies:building",
                    "building": "combatacademy",
                    "level": 4
                  }
                ],
                "researchLevel": 4
              },
              {
                "name": "com.minecolonies.research.technology.masterbowman.name",
                "branch": "minecolonies:combat",
                "costs": [
                  {
                    "count": 27,
                    "item": "minecraft:bow"
                  }
                ],
                "effects": [
                  {
                    "id": "minecolonies:effects/doublearrowsmultiplier",
                    "level": 4
                  }
                ],
                "icon": "minecraft:blaze_rod",
                "parentResearch": "minecolonies:combat/rapidshot",
                "researchLevel": 6
              },
              {
                "name": "com.minecolonies.research.technology.masterswordsman.name",
                "branch": "minecolonies:combat",
                "costs": [
                  {
                    "count": 64,
                    "item": "minecraft:diamond"
                  }
                ],
                "effects": [
                  {
                    "id": "minecolonies:effects/meleearmormultiplier",
                    "level": 5
                  }
                ],
                "icon": "minecraft:diamond_chestplate",
                "parentResearch": "minecolonies:combat/provost",
                "researchLevel": 6
              },
              {
                "name": "com.minecolonies.research.technology.mightycleave.name",
                "branch": "minecolonies:combat",
                "costs": [
                  {
                    "count": 16,
                    "item": "minecraft:iron_block"
                  }
                ],
                "effects": [
                  {
                    "id": "minecolonies:effects/meleedamageaddition",
                    "level": 4
                  }
                ],
                "icon": "minecraft:golden_sword",
                "parentResearch": "minecolonies:combat/cleave",
                "requirements": [
                  {
                    "type": "minecolonies:building",
                    "building": "barracks",
                    "level": 5
                  }
                ],
                "researchLevel": 5
              },
              {
                "name": "com.minecolonies.research.technology.multishot.name",
                "branch": "minecolonies:combat",
                "costs": [
                  {
                    "count": 9,
                    "item": "minecraft:bow"
                  }
                ],
                "effects": [
                  {
                    "id": "minecolonies:effects/doublearrowsmultiplier",
                    "level": 2
                  }
                ],
                "icon": "minecraft:tipped_arrow",
                "parentResearch": "minecolonies:combat/trickshot",
                "requirements": [
                  {
                    "type": "minecolonies:building",
                    "building": "archery",
                    "level": 4
                  }
                ],
                "researchLevel": 4,
                "subtitle": "com.minecolonies.research.combat.multishot.subtitle"
              },
              {
                "name": "com.minecolonies.research.technology.parry.name",
                "branch": "minecolonies:combat",
                "costs": [
                  {
                    "count": 16,
                    "item": "minecraft:iron_ingot"
                  }
                ],
                "effects": [
                  {
                    "id": "minecolonies:effects/meleearmormultiplier",
                    "level": 1
                  }
                ],
                "icon": "minecraft:leather_chestplate",
                "parentResearch": "minecolonies:combat/avoidance",
                "requirements": [
                  {
                    "type": "minecolonies:building",
                    "building": "smeltery",
                    "level": 1
                  }
                ],
                "researchLevel": 2
              },
              {
                "name": "com.minecolonies.research.technology.penetratingshot.name",
                "branch": "minecolonies:combat",
                "costs": [
                  {
                    "count": 32,
                    "item": "minecraft:flint"
                  }
                ],
                "effects": [
                  {
                    "id": "minecolonies:effects/archerdamageaddition",
                    "level": 2
                  }
                ],
                "icon": "minecraft:bow",
                "parentResearch": "minecolonies:combat/preciseshot",
                "requirements": [
                  {
                    "type": "minecolonies:building",
                    "building": "archery",
                    "level": 3
                  }
                ],
                "researchLevel": 3
              },
              {
                "name": "com.minecolonies.research.technology.piercingshot.name",
                "branch": "minecolonies:combat",
                "costs": [
                  {
                    "count": 64,
                    "item": "minecraft:flint"
                  }
                ],
                "effects": [
                  {
                    "id": "minecolonies:effects/archerdamageaddition",
                    "level": 3
                  }
                ],
                "icon": "minecraft:crossbow",
                "parentResearch": "minecolonies:combat/penetratingshot",
                "requirements": [
                  {
                    "type": "minecolonies:building",
                    "building": "guardtower",
                    "level": 10
                  }
                ],
                "researchLevel": 4
              },
              {
                "name": "com.minecolonies.research.technology.platearmor.name",
                "branch": "minecolonies:combat",
                "costs": [
                  {
                    "count": 32,
                    "item": "minecraft:iron_ingot"
                  }
                ],
                "effects": [
                  {
                    "id": "minecolonies:effects/platearmorunlock",
                    "level": 1
                  }
                ],
                "icon": "minecolonies:plate_armor_helmet",
                "parentResearch": "minecolonies:combat/ironarmor",
                "requirements": [
                  {
                    "type": "minecolonies:mandatory-building",
                    "level": 4,
                    "mandatory-building": "blacksmith"
                  }
                ],
                "researchLevel": 5,
                "sortOrder": 2
              },
              {
                "name": "com.minecolonies.research.technology.powerattack.name",
                "branch": "minecolonies:combat",
                "costs": [
                  {
                    "count": 4,
                    "item": "minecraft:iron_block"
                  }
                ],
                "effects": [
                  {
                    "id": "minecolonies:effects/meleedamageaddition",
                    "level": 2
                  }
                ],
                "icon": "minecraft:stone_sword",
                "parentResearch": "minecolonies:combat/quickdraw",
                "requirements": [
                  {
                    "type": "minecolonies:building",
                    "building": "combatacademy",
                    "level": 3
                  }
                ],
                "researchLevel": 3
              },
              {
                "name": "com.minecolonies.research.technology.preciseshot.name",
                "branch": "minecolonies:combat",
                "costs": [
                  {
                    "count": 16,
                    "item": "minecraft:flint"
                  }
                ],
                "effects": [
                  {
                    "id": "minecolonies:effects/archerdamageaddition",
                    "level": 1
                  }
                ],
                "icon": "minecraft:arrow",
                "parentResearch": "minecolonies:combat/accuracy",
                "requirements": [
                  {
                    "type": "minecolonies:building",
                    "building": "barracks",
                    "level": 3
                  }
                ],
                "researchLevel": 2,
                "sortOrder": 2
              },
              {
                "name": "com.minecolonies.research.technology.provost.name",
                "branch": "minecolonies:combat",
                "costs": [
                  {
                    "count": 16,
                    "item": "minecraft:diamond"
                  }
                ],
                "effects": [
                  {
                    "id": "minecolonies:effects/meleearmormultiplier",
                    "level": 4
                  }
                ],
                "icon": "minecraft:golden_chestplate",
                "parentResearch": "minecolonies:combat/duelist",
                "requirements": [
                  {
                    "type": "minecolonies:building",
                    "building": "combatacademy",
                    "level": 5
                  }
                ],
                "researchLevel": 5
              },
              {
                "name": "com.minecolonies.research.technology.quickdraw.name",
                "branch": "minecolonies:combat",
                "costs": [
                  {
                    "count": 2,
                    "item": "minecraft:iron_block"
                  }
                ],
                "effects": [
                  {
                    "id": "minecolonies:effects/meleedamageaddition",
                    "level": 1
                  }
                ],
                "icon": "minecraft:wooden_sword",
                "parentResearch": "minecolonies:combat/accuracy",
                "requirements": [
                  {
                    "type": "minecolonies:building",
                    "building": "barracks",
                    "level": 3
                  }
                ],
                "researchLevel": 2
              },
              {
                "name": "com.minecolonies.research.technology.rapidshot.name",
                "branch": "minecolonies:combat",
                "costs": [
                  {
                    "count": 18,
                    "item": "minecraft:bow"
                  }
                ],
                "effects": [
                  {
                    "id": "minecolonies:effects/doublearrowsmultiplier",
                    "level": 3
                  }
                ],
                "icon": "minecolonies:firearrow",
                "parentResearch": "minecolonies:combat/multishot",
                "requirements": [
                  {
                    "type": "minecolonies:building",
                    "building": "archery",
                    "level": 5
                  }
                ],
                "researchLevel": 5,
                "subtitle": "com.minecolonies.research.combat.rapidshot.subtitle"
              },
              {
                "name": "com.minecolonies.research.technology.regeneration.name",
                "branch": "minecolonies:combat",
                "costs": [
                  {
                    "count": 1,
                    "item": "minecraft:emerald"
                  }
                ],
                "effects": [
                  {
                    "id": "minecolonies:effects/retreatunlock",
                    "level": 1
                  }
                ],
                "exclusiveChildResearch": true,
                "icon": "minecraft:glistering_melon_slice",
                "parentResearch": "minecolonies:combat/improvedleather",
                "requirements": [
                  {
                    "type": "minecolonies:building",
                    "building": "guardtower",
                    "level": 2
                  }
                ],
                "researchLevel": 2,
                "sortOrder": 2
              },
              {
                "name": "com.minecolonies.research.technology.retreat.name",
                "branch": "minecolonies:combat",
                "costs": [
                  {
                    "count": 32,
                    "item": "minecraft:emerald"
                  }
                ],
                "effects": [
                  {
                    "id": "minecolonies:effects/fleeingdamagemultiplier",
                    "level": 3
                  }
                ],
                "icon": "minecraft:golden_boots",
                "parentResearch": "minecolonies:combat/fear",
                "requirements": [
                  {
                    "type": "minecolonies:building",
                    "building": "guardtower",
                    "level": 12
                  }
                ],
                "researchLevel": 5,
                "subtitle": "com.minecolonies.research.combat.retreat.subtitle"
              },
              {
                "name": "com.minecolonies.research.technology.riposte.name",
                "branch": "minecolonies:combat",
                "costs": [
                  {
                    "count": 32,
                    "item": "minecraft:iron_ingot"
                  }
                ],
                "effects": [
                  {
                    "id": "minecolonies:effects/meleearmormultiplier",
                    "level": 2
                  }
                ],
                "icon": "minecraft:iron_chestplate",
                "parentResearch": "minecolonies:combat/parry",
                "requirements": [
                  {
                    "type": "minecolonies:building",
                    "building": "combatacademy",
                    "level": 1
                  }
                ],
                "researchLevel": 3,
                "subtitle": "com.minecolonies.research.combat.riposte.subtitle"
              },
              {
                "name": "com.minecolonies.research.technology.savagestrike.name",
                "branch": "minecolonies:combat",
                "costs": [
                  {
                    "count": 32,
                    "item": "minecraft:iron_block"
                  }
                ],
                "effects": [
                  {
                    "id": "minecolonies:effects/meleedamageaddition",
                    "level": 5
                  }
                ],
                "icon": "minecraft:diamond_sword",
                "parentResearch": "minecolonies:combat/mightycleave",
                "researchLevel": 6
              },
              {
                "name": "com.minecolonies.research.technology.squiretraining.name",
                "branch": "minecolonies:combat",
                "costs": [
                  {
                    "count": 4,
                    "item": "minecraft:shield"
                  }
                ],
                "effects": [
                  {
                    "id": "minecolonies:effects/blockattacksmultiplier",
                    "level": 1
                  }
                ],
                "icon": "minecraft:iron_ingot",
                "parentResearch": "minecolonies:combat/improvedswords",
                "requirements": [
                  {
                    "type": "minecolonies:building",
                    "building": "combatacademy",
                    "level": 3
                  }
                ],
                "researchLevel": 3,
                "subtitle": "com.minecolonies.research.combat.squiretraining.subtitle"
              },
              {
                "name": "com.minecolonies.research.technology.standard.name",
                "branch": "minecolonies:combat",
                "costs": [
                  {
                    "count": 32,
                    "item": "minecraft:emerald"
                  }
                ],
                "effects": [
                  {
                    "id": "minecolonies:effects/standard",
                    "level": 1
                  }
                ],
                "icon": "minecolonies:banner_rally_guards",
                "parentResearch": "minecolonies:combat/telescope",
                "requirements": [
                  {
                    "type": "minecolonies:building",
                    "building": "barracks",
                    "level": 4
                  }
                ],
                "researchLevel": 5
              },
              {
                "name": "com.minecolonies.research.technology.steelarmor.name",
                "branch": "minecolonies:combat",
                "costs": [
                  {
                    "count": 64,
                    "item": "minecraft:iron_ingot"
                  }
                ],
                "effects": [
                  {
                    "id": "minecolonies:effects/armordurabilitymultiplier",
                    "level": 5
                  }
                ],
                "icon": "minecraft:golden_helmet",
                "parentResearch": "minecolonies:combat/ironarmor",
                "requirements": [
                  {
                    "type": "minecolonies:building",
                    "building": "townhall",
                    "level": 5
                  }
                ],
                "researchLevel": 5,
                "sortOrder": 1
              },
              {
                "name": "com.minecolonies.research.technology.tactictraining.name",
                "branch": "minecolonies:combat",
                "costs": [
                  {
                    "count": 3,
                    "item": "minecraft:iron_block"
                  }
                ],
                "effects": [
                  {
                    "id": "minecolonies:effects/blockhutbarracks",
                    "level": 1
                  }
                ],
                "icon": "minecolonies:blockhutbarrackstower",
                "requirements": [
                  {
                    "type": "minecolonies:building",
                    "building": "guardtower",
                    "level": 3
                  }
                ],
                "researchLevel": 1,
                "sortOrder": 2
              },
              {
                "name": "com.minecolonies.research.technology.taunt.name",
                "branch": "minecolonies:combat",
                "costs": [
                  {
                    "count": 8,
                    "item": "minecraft:rotten_flesh"
                  },
                  {
                    "count": 8,
                    "item": "minecraft:bone"
                  },
                  {
                    "count": 8,
                    "item": "minecraft:spider_eye"
                  }
                ],
                "effects": [
                  {
                    "id": "minecolonies:effects/knighttauntmobsunlock",
                    "level": 1
                  }
                ],
                "icon": "minecraft:chain",
                "requirements": [
                  {
                    "type": "minecolonies:building",
                    "building": "guardtower",
                    "level": 1
                  }
                ],
                "researchLevel": 1,
                "sortOrder": 5,
                "subtitle": "com.minecolonies.research.combat.taunt.subtitle"
              },
              {
                "name": "com.minecolonies.research.technology.telescope.name",
                "branch": "minecolonies:combat",
                "costs": [
                  {
                    "count": 16,
                    "item": "minecraft:emerald"
                  }
                ],
                "effects": [
                  {
                    "id": "minecolonies:effects/telescope",
                    "level": 1
                  }
                ],
                "icon": "minecolonies:banner_rally_guards",
                "parentResearch": "minecolonies:combat/ironskin",
                "requirements": [
                  {
                    "type": "minecolonies:building",
                    "building": "barracks",
                    "level": 3
                  }
                ],
                "researchLevel": 4
              },
              {
                "name": "com.minecolonies.research.technology.trickshot.name",
                "branch": "minecolonies:combat",
                "costs": [
                  {
                    "count": 5,
                    "item": "minecraft:bow"
                  }
                ],
                "effects": [
                  {
                    "id": "minecolonies:effects/doublearrowsmultiplier",
                    "level": 1
                  }
                ],
                "icon": "minecraft:arrow",
                "parentResearch": "minecolonies:combat/improvedbows",
                "requirements": [
                  {
                    "type": "minecolonies:building",
                    "building": "archery",
                    "level": 3
                  }
                ],
                "researchLevel": 3
              },
              {
                "name": "com.minecolonies.research.technology.whirlwind.name",
                "branch": "minecolonies:combat",
                "costs": [
                  {
                    "count": 64,
                    "item": "minecraft:redstone"
                  },
                  {
                    "count": 64,
                    "item": "minecraft:gold_ingot"
                  },
                  {
                    "count": 128,
                    "item": "minecraft:lapis_lazuli"
                  }
                ],
                "effects": [
                  {
                    "id": "minecolonies:effects/whirlwindabilityunlock",
                    "level": 1
                  }
                ],
                "icon": "minecolonies:iron_scimitar",
                "parentResearch": "minecolonies:combat/arrowpierce",
                "requirements": [
                  {
                    "type": "minecolonies:building",
                    "building": "barracks",
                    "level": 4
                  }
                ],
                "researchLevel": 4
              },
              {
                "name": "com.minecolonies.research.technology.woundingshot.name",
                "branch": "minecolonies:combat",
                "costs": [
                  {
                    "count": 128,
                    "item": "minecraft:flint"
                  }
                ],
                "effects": [
                  {
                    "id": "minecolonies:effects/archerdamageaddition",
                    "level": 4
                  }
                ],
                "icon": "minecolonies:firearrow",
                "parentResearch": "minecolonies:combat/piercingshot",
                "requirements": [
                  {
                    "type": "minecolonies:building",
                    "building": "barracks",
                    "level": 5
                  }
                ],
                "researchLevel": 5
              }
            ]
          },
          {
            name: "technology",
            technologies: [
              {
                "name": "com.minecolonies.research.technology.ability.name",
                "branch": "minecolonies:technology",
                "costs": [
                  {
                    "count": 64,
                    "item": "minecraft:iron_ingot"
                  }
                ],
                "effects": [
                  {
                    "id": "minecolonies:effects/blockplacespeedmultiplier",
                    "level": 1
                  }
                ],
                "icon": "minecraft:glowstone_dust",
                "parentResearch": "minecolonies:technology/hittingiron",
                "requirements": [
                  {
                    "type": "minecolonies:building",
                    "building": "miner",
                    "level": 1
                  }
                ],
                "researchLevel": 2
              },
              {
                "name": "com.minecolonies.research.technology.alchemist.name",
                "branch": "minecolonies:technology",
                "costs": [
                  {
                    "count": 16,
                    "item": "minecraft:nether_wart"
                  }
                ],
                "effects": [
                  {
                    "id": "minecolonies:effects/blockhutalchemist",
                    "level": 1
                  }
                ],
                "icon": "minecolonies:blockhutalchemist",
                "parentResearch": "minecolonies:technology/opennether",
                "researchLevel": 3,
                "subtitle": "com.minecolonies.research.technology.alchemist.subtitle"
              },
              {
                "name": "com.minecolonies.research.technology.amazingveins.name",
                "branch": "minecolonies:technology",
                "costs": [
                  {
                    "count": 64,
                    "tag": "minecraft:gold_ores"
                  }
                ],
                "effects": [
                  {
                    "id": "minecolonies:effects/moreoresmultiplier",
                    "level": 4
                  }
                ],
                "icon": "minecraft:lapis_block",
                "parentResearch": "minecolonies:technology/richveins",
                "requirements": [
                  {
                    "type": "minecolonies:building",
                    "building": "blacksmith",
                    "level": 5
                  }
                ],
                "researchLevel": 5
              },
              {
                "name": "com.minecolonies.research.technology.assistanthammers.name",
                "branch": "minecolonies:technology",
                "costs": [
                  {
                    "count": 2,
                    "item": "minecraft:iron_block"
                  }
                ],
                "effects": [
                  {
                    "id": "minecolonies:effects/assistanthammerunlock",
                    "level": 1
                  }
                ],
                "icon": "minecolonies:assistanthammer_diamond",
                "parentResearch": "minecolonies:technology/hittingiron",
                "requirements": [
                  {
                    "type": "minecolonies:building",
                    "building": "blacksmith",
                    "level": 1
                  }
                ],
                "researchLevel": 2
              },
              {
                "name": "com.minecolonies.research.technology.biodegradable.name",
                "branch": "minecolonies:technology",
                "costs": [
                  {
                    "count": 64,
                    "item": "minecraft:bone_meal"
                  }
                ],
                "effects": [
                  {
                    "id": "minecolonies:effects/blockhutcomposter",
                    "level": 1
                  }
                ],
                "icon": "minecolonies:blockhutcomposter",
                "requirements": [
                  {
                    "type": "minecolonies:building",
                    "building": "farmer",
                    "level": 3
                  }
                ],
                "researchLevel": 1,
                "subtitle": "com.minecolonies.research.technology.biodegradable.subtitle"
              },
              {
                "name": "com.minecolonies.research.technology.bonemeal.name",
                "branch": "minecolonies:technology",
                "costs": [
                  {
                    "count": 64,
                    "item": "minecraft:wheat_seeds"
                  }
                ],
                "effects": [
                  {
                    "id": "minecolonies:effects/farmingmultiplier",
                    "level": 1
                  }
                ],
                "icon": "minecraft:wheat_seeds",
                "parentResearch": "minecolonies:technology/biodegradable",
                "requirements": [
                  {
                    "type": "minecolonies:building",
                    "building": "miner",
                    "level": 3
                  }
                ],
                "researchLevel": 2,
                "sortOrder": 3,
                "subtitle": "com.minecolonies.research.technology.bonemeal.subtitle"
              },
              {
                "name": "com.minecolonies.research.technology.buildermodes.name",
                "branch": "minecolonies:technology",
                "costs": [
                  {
                    "count": 1,
                    "item": "minecraft:diamond_axe"
                  }
                ],
                "effects": [
                  {
                    "id": "minecolonies:effects/buildermodeunlock",
                    "level": 1
                  }
                ],
                "icon": "minecolonies:blockhutbuilder",
                "parentResearch": "minecolonies:technology/memoryaid",
                "requirements": [
                  {
                    "type": "minecolonies:building",
                    "building": "builder",
                    "level": 3
                  }
                ],
                "researchLevel": 3,
                "sortOrder": 4,
                "subtitle": "com.minecolonies.research.technology.buildermodes.subtitle"
              },
              {
                "name": "com.minecolonies.research.technology.capacity.name",
                "branch": "minecolonies:technology",
                "costs": [
                  {
                    "count": 32,
                    "item": "minecolonies:blockminecoloniesrack"
                  }
                ],
                "effects": [
                  {
                    "id": "minecolonies:effects/minimumstockmultiplier",
                    "level": 2
                  }
                ],
                "icon": "minecraft:chest_minecart",
                "parentResearch": "minecolonies:technology/space",
                "requirements": [
                  {
                    "type": "minecolonies:building",
                    "building": "miner",
                    "level": 4
                  }
                ],
                "researchLevel": 4,
                "subtitle": "com.minecolonies.research.technology.capacity.subtitle"
              },
              {
                "name": "com.minecolonies.research.technology.cheatsheet.name",
                "branch": "minecolonies:technology",
                "costs": [
                  {
                    "count": 64,
                    "item": "minecraft:paper"
                  }
                ],
                "effects": [
                  {
                    "id": "minecolonies:effects/recipesmultiplier",
                    "level": 2
                  }
                ],
                "icon": "minecraft:book",
                "parentResearch": "minecolonies:technology/memoryaid",
                "requirements": [
                  {
                    "type": "minecolonies:building",
                    "building": "sawmill",
                    "level": 2
                  }
                ],
                "researchLevel": 3,
                "sortOrder": 1,
                "subtitle": "com.minecolonies.research.technology.cheatsheet.subtitle"
              },
              {
                "name": "com.minecolonies.research.technology.compost.name",
                "branch": "minecolonies:technology",
                "costs": [
                  {
                    "count": 256,
                    "item": "minecraft:wheat_seeds"
                  }
                ],
                "effects": [
                  {
                    "id": "minecolonies:effects/farmingmultiplier",
                    "level": 3
                  }
                ],
                "icon": "minecraft:bone",
                "parentResearch": "minecolonies:technology/dung",
                "requirements": [
                  {
                    "type": "minecolonies:building",
                    "building": "miner",
                    "level": 5
                  }
                ],
                "researchLevel": 4
              },
              {
                "name": "com.minecolonies.research.technology.croprotation.name",
                "branch": "minecolonies:technology",
                "costs": [
                  {
                    "count": 32,
                    "item": "minecraft:sugar_cane"
                  },
                  {
                    "count": 32,
                    "item": "minecraft:cactus"
                  }
                ],
                "effects": [
                  {
                    "id": "minecolonies:effects/plantationlarge",
                    "level": 1
                  }
                ],
                "icon": "minecraft:green_dye",
                "parentResearch": "minecolonies:technology/letitgrow",
                "requirements": [
                  {
                    "type": "minecolonies:building",
                    "building": "plantation",
                    "level": 3
                  }
                ],
                "researchLevel": 3,
                "subtitle": "com.minecolonies.research.technology.croprotation.subtitle"
              },
              {
                "name": "com.minecolonies.research.technology.deeppockets.name",
                "branch": "minecolonies:technology",
                "costs": [
                  {
                    "count": 64,
                    "item": "minecraft:emerald"
                  }
                ],
                "effects": [
                  {
                    "id": "minecolonies:effects/citizeninvslotsaddition",
                    "level": 1
                  }
                ],
                "icon": "minecraft:pink_shulker_box",
                "no-reset": true,
                "parentResearch": "minecolonies:technology/cheatsheet",
                "requirements": [
                  {
                    "type": "minecolonies:building",
                    "building": "library",
                    "level": 4
                  }
                ],
                "researchLevel": 4,
                "sortOrder": 2
              },
              {
                "name": "com.minecolonies.research.technology.depthknowledge.name",
                "branch": "minecolonies:technology",
                "costs": [
                  {
                    "count": 64,
                    "item": "minecraft:deepslate"
                  }
                ],
                "effects": [
                  {
                    "id": "minecolonies:effects/knowledgeofthedepthsunlock",
                    "level": 1
                  }
                ],
                "icon": "minecraft:cobbled_deepslate",
                "parentResearch": "minecolonies:technology/rockingroll",
                "requirements": [
                  {
                    "type": "minecolonies:building",
                    "building": "crusher",
                    "level": 3
                  }
                ],
                "researchLevel": 3,
                "subtitle": "com.minecolonies.research.technology.depthknowledge.subtitle"
              },
              {
                "name": "com.minecolonies.research.technology.diamondcoated.name",
                "branch": "minecolonies:technology",
                "costs": [
                  {
                    "count": 128,
                    "item": "minecraft:diamond"
                  }
                ],
                "effects": [
                  {
                    "id": "minecolonies:effects/tooldurabilitymultiplier",
                    "level": 5
                  }
                ],
                "icon": "minecraft:diamond_pickaxe",
                "parentResearch": "minecolonies:technology/steelbracing",
                "researchLevel": 6
              },
              {
                "name": "com.minecolonies.research.technology.dung.name",
                "branch": "minecolonies:technology",
                "costs": [
                  {
                    "count": 128,
                    "item": "minecraft:wheat_seeds"
                  }
                ],
                "effects": [
                  {
                    "id": "minecolonies:effects/farmingmultiplier",
                    "level": 2
                  }
                ],
                "icon": "minecraft:bone_meal",
                "parentResearch": "minecolonies:technology/bonemeal",
                "requirements": [
                  {
                    "type": "minecolonies:building",
                    "building": "miner",
                    "level": 4
                  }
                ],
                "researchLevel": 3,
                "subtitle": "com.minecolonies.research.technology.dung.subtitle"
              },
              {
                "name": "com.minecolonies.research.technology.enhanced_gates1.name",
                "branch": "minecolonies:technology",
                "costs": [
                  {
                    "count": 64,
                    "item": "minecolonies:gate_wood"
                  },
                  {
                    "count": 2,
                    "item": "minecolonies:ancienttome"
                  },
                  {
                    "count": 5,
                    "item": "minecraft:iron_block"
                  }
                ],
                "effects": [
                  {
                    "id": "minecolonies:effects/enhancesgatedurabilityaddition",
                    "level": 1
                  }
                ],
                "icon": "minecolonies:gate_wood",
                "parentResearch": "minecolonies:technology/whatyaneed",
                "researchLevel": 3
              },
              {
                "name": "com.minecolonies.research.technology.enhanced_gates2.name",
                "branch": "minecolonies:technology",
                "costs": [
                  {
                    "count": 64,
                    "item": "minecolonies:gate_iron"
                  },
                  {
                    "count": 2,
                    "item": "minecolonies:ancienttome"
                  },
                  {
                    "count": 32,
                    "item": "minecraft:obsidian"
                  }
                ],
                "effects": [
                  {
                    "id": "minecolonies:effects/enhancesgatedurabilityaddition",
                    "level": 2
                  }
                ],
                "icon": "minecolonies:gate_iron",
                "parentResearch": "minecolonies:technology/enhanced_gates1",
                "researchLevel": 4
              },
              {
                "name": "com.minecolonies.research.technology.exoticfruits.name",
                "branch": "minecolonies:technology",
                "costs": [
                  {
                    "count": 32,
                    "item": "minecraft:glow_berries"
                  }
                ],
                "effects": [
                  {
                    "id": "minecolonies:effects/plantationexotic",
                    "level": 1
                  }
                ],
                "icon": "minecraft:glow_berries",
                "parentResearch": "minecolonies:technology/letitgrow",
                "requirements": [
                  {
                    "type": "minecolonies:building",
                    "building": "plantation",
                    "level": 3
                  }
                ],
                "researchLevel": 3,
                "subtitle": "com.minecolonies.research.technology.exoticfruits.subtitle"
              },
              {
                "name": "com.minecolonies.research.technology.fertilizer.name",
                "branch": "minecolonies:technology",
                "costs": [
                  {
                    "count": 512,
                    "item": "minecraft:wheat_seeds"
                  }
                ],
                "effects": [
                  {
                    "id": "minecolonies:effects/farmingmultiplier",
                    "level": 4
                  }
                ],
                "icon": "minecraft:bone_block",
                "parentResearch": "minecolonies:technology/compost",
                "requirements": [
                  {
                    "type": "minecolonies:building",
                    "building": "smeltery",
                    "level": 3
                  }
                ],
                "researchLevel": 5,
                "subtitle": "com.minecolonies.research.technology.fertilizer.subtitle"
              },
              {
                "name": "com.minecolonies.research.technology.flowerpower.name",
                "branch": "minecolonies:technology",
                "costs": [
                  {
                    "count": 64,
                    "item": "minecolonies:compost"
                  }
                ],
                "effects": [
                  {
                    "id": "minecolonies:effects/blockhutflorist",
                    "level": 1
                  }
                ],
                "icon": "minecolonies:blockhutflorist",
                "parentResearch": "minecolonies:technology/biodegradable",
                "requirements": [
                  {
                    "type": "minecolonies:building",
                    "building": "composter",
                    "level": 3
                  }
                ],
                "researchLevel": 2
              },
              {
                "name": "com.minecolonies.research.technology.fullstock.name",
                "branch": "minecolonies:technology",
                "costs": [
                  {
                    "count": 64,
                    "item": "minecolonies:blockminecoloniesrack"
                  }
                ],
                "effects": [
                  {
                    "id": "minecolonies:effects/minimumstockmultiplier",
                    "level": 3
                  }
                ],
                "icon": "minecraft:ender_chest",
                "parentResearch": "minecolonies:technology/capacity",
                "requirements": [
                  {
                    "type": "minecolonies:building",
                    "building": "miner",
                    "level": 5
                  }
                ],
                "researchLevel": 5,
                "subtitle": "com.minecolonies.research.technology.fullstock.subtitle"
              },
              {
                "name": "com.minecolonies.research.technology.gargamel.name",
                "branch": "minecolonies:technology",
                "costs": [
                  {
                    "count": 16,
                    "item": "minecraft:crimson_fungus"
                  },
                  {
                    "count": 16,
                    "item": "minecraft:warped_fungus"
                  }
                ],
                "effects": [
                  {
                    "id": "minecolonies:effects/plantationnether",
                    "level": 1
                  }
                ],
                "icon": "minecraft:crimson_fungus",
                "parentResearch": "minecolonies:technology/croprotation",
                "requirements": [
                  {
                    "type": "minecolonies:building",
                    "building": "plantation",
                    "level": 3
                  },
                  {
                    "type": "minecolonies:building",
                    "building": "netherworker",
                    "level": 3
                  }
                ],
                "researchLevel": 4,
                "subtitle": "com.minecolonies.research.technology.gargamel.subtitle"
              },
              {
                "name": "com.minecolonies.research.technology.gildedhammer.name",
                "branch": "minecolonies:technology",
                "costs": [
                  {
                    "count": 64,
                    "item": "minecraft:gravel"
                  },
                  {
                    "count": 64,
                    "item": "minecraft:sand"
                  },
                  {
                    "count": 64,
                    "item": "minecraft:clay"
                  }
                ],
                "effects": [
                  {
                    "id": "minecolonies:effects/crushing11unlock",
                    "level": 1
                  }
                ],
                "icon": "minecraft:gold_block",
                "parentResearch": "minecolonies:technology/rockingroll",
                "requirements": [
                  {
                    "type": "minecolonies:building",
                    "building": "crusher",
                    "level": 3
                  }
                ],
                "researchLevel": 3,
                "subtitle": "com.minecolonies.research.technology.gildedhammer.subtitle"
              },
              {
                "name": "com.minecolonies.research.technology.goodveins.name",
                "branch": "minecolonies:technology",
                "costs": [
                  {
                    "count": 64,
                    "tag": "minecraft:iron_ores"
                  }
                ],
                "effects": [
                  {
                    "id": "minecolonies:effects/moreoresmultiplier",
                    "level": 2
                  }
                ],
                "icon": "minecraft:coal_block",
                "parentResearch": "minecolonies:technology/veinminer",
                "requirements": [
                  {
                    "type": "minecolonies:building",
                    "building": "miner",
                    "level": 2
                  }
                ],
                "researchLevel": 3
              },
              {
                "name": "com.minecolonies.research.technology.greenrevolution.name",
                "branch": "minecolonies:technology",
                "costs": [
                  {
                    "count": 32,
                    "item": "minecolonies:compost"
                  }
                ],
                "effects": [
                  {
                    "id": "minecolonies:effects/greenrevolution",
                    "level": 1
                  }
                ],
                "icon": "minecolonies:compost",
                "parentResearch": "minecolonies:technology/biodegradable",
                "requirements": [
                  {
                    "type": "minecolonies:building",
                    "building": "farmer",
                    "level": 4
                  }
                ],
                "researchLevel": 2,
                "sortOrder": 3,
                "subtitle": "com.minecolonies.research.technology.greenrevolution.subtitle"
              },
              {
                "name": "com.minecolonies.research.technology.hardened.name",
                "branch": "minecolonies:technology",
                "costs": [
                  {
                    "count": 16,
                    "item": "minecraft:diamond"
                  }
                ],
                "effects": [
                  {
                    "id": "minecolonies:effects/tooldurabilitymultiplier",
                    "level": 2
                  }
                ],
                "icon": "minecraft:stone_pickaxe",
                "parentResearch": "minecolonies:technology/strong",
                "requirements": [
                  {
                    "type": "minecolonies:building",
                    "building": "blacksmith",
                    "level": 2
                  }
                ],
                "researchLevel": 3
              },
              {
                "name": "com.minecolonies.research.technology.heavilyloaded.name",
                "branch": "minecolonies:technology",
                "costs": [
                  {
                    "count": 256,
                    "item": "minecraft:emerald"
                  }
                ],
                "effects": [
                  {
                    "id": "minecolonies:effects/citizeninvslotsaddition",
                    "level": 3
                  }
                ],
                "icon": "minecraft:blue_shulker_box",
                "no-reset": true,
                "parentResearch": "minecolonies:technology/loaded",
                "researchLevel": 6
              },
              {
                "name": "com.minecolonies.research.technology.heavymachinery.name",
                "branch": "minecolonies:technology",
                "costs": [
                  {
                    "count": 512,
                    "item": "minecraft:redstone"
                  }
                ],
                "effects": [
                  {
                    "id": "minecolonies:effects/blockbreakspeedmultiplier",
                    "level": 3
                  }
                ],
                "icon": "minecraft:redstone_block",
                "parentResearch": "minecolonies:technology/redstonepowered",
                "researchLevel": 4
              },
              {
                "name": "com.minecolonies.research.technology.hittingiron.name",
                "branch": "minecolonies:technology",
                "costs": [
                  {
                    "count": 1,
                    "item": "minecraft:anvil"
                  }
                ],
                "effects": [
                  {
                    "id": "minecolonies:effects/blockhutblacksmith",
                    "level": 1
                  }
                ],
                "icon": "minecolonies:blockhutblacksmith",
                "requirements": [
                  {
                    "type": "minecolonies:building",
                    "building": "miner",
                    "level": 3
                  }
                ],
                "researchLevel": 1,
                "sortOrder": 7,
                "subtitle": "com.minecolonies.research.technology.hittingiron.subtitle"
              },
              {
                "name": "com.minecolonies.research.technology.honeypot.name",
                "branch": "minecolonies:technology",
                "costs": [
                  {
                    "count": 16,
                    "item": "minecraft:beehive"
                  }
                ],
                "effects": [
                  {
                    "id": "minecolonies:effects/beekeep2unlock",
                    "level": 1
                  }
                ],
                "icon": "minecraft:honeycomb",
                "parentResearch": "minecolonies:technology/rainbowheaven",
                "requirements": [
                  {
                    "type": "minecolonies:building",
                    "building": "beekeeper",
                    "level": 3
                  }
                ],
                "researchLevel": 3,
                "subtitle": "com.minecolonies.research.technology.honeypot.subtitle"
              },
              {
                "name": "com.minecolonies.research.technology.hot.name",
                "branch": "minecolonies:technology",
                "costs": [
                  {
                    "count": 4,
                    "item": "minecraft:lava_bucket"
                  }
                ],
                "effects": [
                  {
                    "id": "minecolonies:effects/blockhutsmeltery",
                    "level": 1
                  }
                ],
                "icon": "minecolonies:blockhutsmeltery",
                "requirements": [
                  {
                    "type": "minecolonies:building",
                    "building": "miner",
                    "level": 2
                  }
                ],
                "researchLevel": 1,
                "sortOrder": 6
              },
              {
                "name": "com.minecolonies.research.technology.hotboots.name",
                "branch": "minecolonies:technology",
                "costs": [
                  {
                    "count": 32,
                    "item": "minecraft:leather"
                  },
                  {
                    "count": 16,
                    "item": "minecraft:iron_ingot"
                  }
                ],
                "effects": [
                  {
                    "id": "minecolonies:effects/minerfireresunlock",
                    "level": 1
                  }
                ],
                "icon": "minecraft:campfire",
                "parentResearch": "minecolonies:technology/stringwork",
                "requirements": [
                  {
                    "type": "minecolonies:building",
                    "building": "fletcher",
                    "level": 1
                  }
                ],
                "researchLevel": 3,
                "subtitle": "com.minecolonies.research.technology.hotboots.subtitle"
              },
              {
                "name": "com.minecolonies.research.technology.isthisredstone.name",
                "branch": "minecolonies:technology",
                "costs": [
                  {
                    "count": 128,
                    "item": "minecraft:redstone"
                  }
                ],
                "effects": [
                  {
                    "id": "minecolonies:effects/blockbreakspeedmultiplier",
                    "level": 1
                  }
                ],
                "icon": "minecraft:redstone",
                "parentResearch": "minecolonies:technology/hot",
                "researchLevel": 2
              },
              {
                "name": "com.minecolonies.research.technology.junglemaster.name",
                "branch": "minecolonies:technology",
                "costs": [
                  {
                    "count": 16,
                    "item": "minecraft:bamboo"
                  },
                  {
                    "count": 16,
                    "item": "minecraft:cocoa_beans"
                  },
                  {
                    "count": 16,
                    "item": "minecraft:vine"
                  }
                ],
                "effects": [
                  {
                    "id": "minecolonies:effects/plantationjungle",
                    "level": 1
                  }
                ],
                "icon": "minecraft:vine",
                "parentResearch": "minecolonies:technology/letitgrow",
                "requirements": [
                  {
                    "type": "minecolonies:building",
                    "building": "plantation",
                    "level": 2
                  }
                ],
                "researchLevel": 3,
                "subtitle": "com.minecolonies.research.technology.junglemaster.subtitle"
              },
              {
                "name": "com.minecolonies.research.technology.knowtheend.name",
                "branch": "minecolonies:technology",
                "costs": [
                  {
                    "count": 64,
                    "item": "minecraft:chorus_fruit"
                  }
                ],
                "effects": [
                  {
                    "id": "minecolonies:effects/knowledgeoftheendunlock",
                    "level": 1
                  }
                ],
                "icon": "minecolonies:chorus_bread",
                "parentResearch": "minecolonies:technology/theflintstones",
                "requirements": [
                  {
                    "type": "minecolonies:building",
                    "building": "baker",
                    "level": 3
                  }
                ],
                "researchLevel": 3,
                "subtitle": "com.minecolonies.research.technology.knowtheend.subtitle"
              },
              {
                "name": "com.minecolonies.research.technology.letitgrow.name",
                "branch": "minecolonies:technology",
                "costs": [
                  {
                    "count": 16,
                    "item": "minecolonies:compost"
                  }
                ],
                "effects": [
                  {
                    "id": "minecolonies:effects/blockhutplantation",
                    "level": 1
                  }
                ],
                "icon": "minecolonies:blockhutplantation",
                "parentResearch": "minecolonies:technology/biodegradable",
                "requirements": [
                  {
                    "type": "minecolonies:building",
                    "building": "farmer",
                    "level": 3
                  }
                ],
                "researchLevel": 2,
                "sortOrder": 2,
                "subtitle": "com.minecolonies.research.technology.letitgrow.subtitle"
              },
              {
                "name": "com.minecolonies.research.technology.lightning.name",
                "branch": "minecolonies:technology",
                "costs": [
                  {
                    "count": 2048,
                    "item": "minecraft:redstone"
                  }
                ],
                "effects": [
                  {
                    "id": "minecolonies:effects/blockbreakspeedmultiplier",
                    "level": 5
                  }
                ],
                "icon": "minecraft:repeater",
                "parentResearch": "minecolonies:technology/whatisthisspeed",
                "researchLevel": 6,
                "subtitle": "com.minecolonies.research.technology.lightning.subtitle"
              },
              {
                "name": "com.minecolonies.research.technology.loaded.name",
                "branch": "minecolonies:technology",
                "costs": [
                  {
                    "count": 128,
                    "item": "minecraft:emerald"
                  }
                ],
                "effects": [
                  {
                    "id": "minecolonies:effects/citizeninvslotsaddition",
                    "level": 2
                  }
                ],
                "icon": "minecraft:red_shulker_box",
                "no-reset": true,
                "parentResearch": "minecolonies:technology/deeppockets",
                "requirements": [
                  {
                    "type": "minecolonies:building",
                    "building": "library",
                    "level": 5
                  }
                ],
                "researchLevel": 5
              },
              {
                "name": "com.minecolonies.research.technology.madness.name",
                "branch": "minecolonies:technology",
                "costs": [
                  {
                    "count": 1024,
                    "item": "minecraft:iron_ingot"
                  }
                ],
                "effects": [
                  {
                    "id": "minecolonies:effects/blockplacespeedmultiplier",
                    "level": 5
                  }
                ],
                "icon": "minecraft:spectral_arrow",
                "parentResearch": "minecolonies:technology/seemsautomatic",
                "researchLevel": 6
              },
              {
                "name": "com.minecolonies.research.technology.magiccompost.name",
                "branch": "minecolonies:technology",
                "costs": [
                  {
                    "count": 2048,
                    "item": "minecraft:wheat_seeds"
                  }
                ],
                "effects": [
                  {
                    "id": "minecolonies:effects/farmingmultiplier",
                    "level": 5
                  }
                ],
                "icon": "minecolonies:barrel_block",
                "parentResearch": "minecolonies:technology/fertilizer",
                "researchLevel": 6
              },
              {
                "name": "com.minecolonies.research.technology.memoryaid.name",
                "branch": "minecolonies:technology",
                "costs": [
                  {
                    "count": 32,
                    "item": "minecraft:paper"
                  }
                ],
                "effects": [
                  {
                    "id": "minecolonies:effects/recipesmultiplier",
                    "level": 1
                  }
                ],
                "icon": "minecraft:paper",
                "parentResearch": "minecolonies:technology/woodwork",
                "requirements": [
                  {
                    "type": "minecolonies:building",
                    "building": "sawmill",
                    "level": 1
                  }
                ],
                "researchLevel": 2,
                "sortOrder": 3,
                "subtitle": "com.minecolonies.research.technology.memoryaid.subtitle"
              },
              {
                "name": "com.minecolonies.research.technology.morescrolls.name",
                "branch": "minecolonies:technology",
                "costs": [
                  {
                    "count": 64,
                    "item": "minecraft:paper"
                  },
                  {
                    "count": 1,
                    "item": "minecolonies:ancienttome"
                  },
                  {
                    "count": 64,
                    "item": "minecraft:lapis_lazuli"
                  }
                ],
                "effects": [
                  {
                    "id": "minecolonies:effects/morescrollsunlock",
                    "level": 1
                  }
                ],
                "icon": "minecolonies:scroll_highlight",
                "requirements": [
                  {
                    "type": "minecolonies:building",
                    "building": "enchanter",
                    "level": 3
                  }
                ],
                "researchLevel": 1,
                "sortOrder": 3
              },
              {
                "name": "com.minecolonies.research.technology.motherlode.name",
                "branch": "minecolonies:technology",
                "costs": [
                  {
                    "count": 64,
                    "tag": "minecraft:diamond_ores"
                  }
                ],
                "effects": [
                  {
                    "id": "minecolonies:effects/moreoresmultiplier",
                    "level": 5
                  }
                ],
                "icon": "minecraft:diamond_block",
                "parentResearch": "minecolonies:technology/amazingveins",
                "researchLevel": 6
              },
              {
                "name": "com.minecolonies.research.technology.netherlog.name",
                "branch": "minecolonies:technology",
                "costs": [
                  {
                    "count": 16,
                    "item": "minecraft:ender_eye"
                  },
                  {
                    "count": 1,
                    "item": "minecolonies:ancienttome"
                  }
                ],
                "effects": [
                  {
                    "id": "minecolonies:effects/netherexpeditionlog",
                    "level": 1
                  }
                ],
                "icon": "minecraft:ender_eye",
                "parentResearch": "minecolonies:technology/opennether",
                "requirements": [
                  {
                    "type": "minecolonies:building",
                    "building": "netherworker",
                    "level": 1
                  }
                ],
                "researchLevel": 3,
                "sortOrder": 4,
                "subtitle": "com.minecolonies.research.technology.netherlog.subtitle"
              },
              {
                "name": "com.minecolonies.research.technology.oceanheart.name",
                "branch": "minecolonies:technology",
                "costs": [
                  {
                    "count": 1,
                    "item": "minecraft:heart_of_the_sea"
                  }
                ],
                "effects": [
                  {
                    "id": "minecolonies:effects/fishingtreasure",
                    "level": 1
                  }
                ],
                "icon": "minecraft:fishing_rod",
                "parentResearch": "minecolonies:technology/alchemist",
                "requirements": [
                  {
                    "type": "minecolonies:building",
                    "building": "fisherman",
                    "level": 4
                  }
                ],
                "researchLevel": 4,
                "sortOrder": 4,
                "subtitle": "com.minecolonies.research.technology.oceanheart.subtitle"
              },
              {
                "name": "com.minecolonies.research.technology.opennether.name",
                "branch": "minecolonies:technology",
                "costs": [
                  {
                    "count": 3,
                    "item": "minecraft:gilded_blackstone"
                  }
                ],
                "effects": [
                  {
                    "id": "minecolonies:effects/blockhutnetherworker",
                    "level": 1
                  }
                ],
                "icon": "minecolonies:blockhutnetherworker",
                "parentResearch": "minecolonies:technology/morescrolls",
                "researchLevel": 2,
                "sortOrder": 1,
                "subtitle": "com.minecolonies.research.technology.opennether.subtitle"
              },
              {
                "name": "com.minecolonies.research.technology.pavetheroad.name",
                "branch": "minecolonies:technology",
                "costs": [
                  {
                    "count": 32,
                    "tag": "minecolonies:concrete"
                  }
                ],
                "effects": [
                  {
                    "id": "minecolonies:effects/blockhutconcretemixer",
                    "level": 1
                  }
                ],
                "icon": "minecolonies:blockhutconcretemixer",
                "parentResearch": "minecolonies:technology/rockingroll",
                "requirements": [
                  {
                    "type": "minecolonies:building",
                    "building": "crusher",
                    "level": 1
                  }
                ],
                "researchLevel": 3,
                "sortOrder": 2,
                "subtitle": "com.minecolonies.research.technology.pavetheroad.subtitle"
              },
              {
                "name": "com.minecolonies.research.technology.podzolchance.name",
                "branch": "minecolonies:technology",
                "costs": [
                  {
                    "count": 8,
                    "item": "minecraft:podzol"
                  }
                ],
                "effects": [
                  {
                    "id": "minecolonies:effects/podzolchancemultiplier",
                    "level": 1
                  }
                ],
                "icon": "minecraft:podzol",
                "parentResearch": "minecolonies:technology/biodegradable",
                "requirements": [
                  {
                    "type": "minecolonies:building",
                    "building": "composter",
                    "level": 2
                  }
                ],
                "researchLevel": 2,
                "subtitle": "com.minecolonies.research.technology.podzolchance.subtitle"
              },
              {
                "name": "com.minecolonies.research.technology.podzolchance2.name",
                "branch": "minecolonies:technology",
                "costs": [
                  {
                    "count": 32,
                    "item": "minecraft:podzol"
                  }
                ],
                "effects": [
                  {
                    "id": "minecolonies:effects/podzolchancemultiplier",
                    "level": 2
                  }
                ],
                "icon": "minecraft:podzol",
                "parentResearch": "minecolonies:technology/podzolchance",
                "requirements": [
                  {
                    "type": "minecolonies:building",
                    "building": "composter",
                    "level": 3
                  }
                ],
                "researchLevel": 3,
                "subtitle": "com.minecolonies.research.technology.podzolchance2.subtitle"
              },
              {
                "name": "com.minecolonies.research.technology.rainbowheaven.name",
                "branch": "minecolonies:technology",
                "costs": [
                  {
                    "count": 64,
                    "item": "minecraft:poppy"
                  }
                ],
                "effects": [
                  {
                    "id": "minecolonies:effects/blockhutdyer",
                    "level": 1
                  }
                ],
                "icon": "minecolonies:blockhutcomposter",
                "parentResearch": "minecolonies:technology/biodegradable",
                "requirements": [
                  {
                    "type": "minecolonies:building",
                    "building": "composter",
                    "level": 3
                  }
                ],
                "researchLevel": 2,
                "subtitle": "com.minecolonies.research.technology.rainbowheaven.subtitle"
              },
              {
                "name": "com.minecolonies.research.technology.rainman.name",
                "branch": "minecolonies:technology",
                "costs": [
                  {
                    "count": 27,
                    "item": "minecraft:salmon_bucket"
                  }
                ],
                "effects": [
                  {
                    "id": "minecolonies:effects/workinginrainunlock",
                    "level": 1
                  }
                ],
                "icon": "minecraft:splash_potion",
                "parentResearch": "minecolonies:technology/rtm",
                "researchLevel": 6,
                "subtitle": "com.minecolonies.research.technology.rainman.subtitle"
              },
              {
                "name": "com.minecolonies.research.technology.recipebook.name",
                "branch": "minecolonies:technology",
                "costs": [
                  {
                    "count": 128,
                    "item": "minecraft:paper"
                  }
                ],
                "effects": [
                  {
                    "id": "minecolonies:effects/recipesmultiplier",
                    "level": 3
                  }
                ],
                "icon": "minecraft:enchanted_book",
                "parentResearch": "minecolonies:technology/cheatsheet",
                "requirements": [
                  {
                    "type": "minecolonies:building",
                    "building": "sawmill",
                    "level": 3
                  }
                ],
                "researchLevel": 4
              },
              {
                "name": "com.minecolonies.research.technology.redstonepowered.name",
                "branch": "minecolonies:technology",
                "costs": [
                  {
                    "count": 256,
                    "item": "minecraft:redstone"
                  }
                ],
                "effects": [
                  {
                    "id": "minecolonies:effects/blockbreakspeedmultiplier",
                    "level": 2
                  }
                ],
                "icon": "minecraft:redstone_torch",
                "parentResearch": "minecolonies:technology/isthisredstone",
                "researchLevel": 3,
                "subtitle": "com.minecolonies.research.technology.redstonepowered.subtitle"
              },
              {
                "name": "com.minecolonies.research.technology.reinforced.name",
                "branch": "minecolonies:technology",
                "costs": [
                  {
                    "count": 32,
                    "item": "minecraft:diamond"
                  }
                ],
                "effects": [
                  {
                    "id": "minecolonies:effects/tooldurabilitymultiplier",
                    "level": 3
                  }
                ],
                "icon": "minecraft:iron_pickaxe",
                "parentResearch": "minecolonies:technology/hardened",
                "requirements": [
                  {
                    "type": "minecolonies:building",
                    "building": "blacksmith",
                    "level": 3
                  }
                ],
                "researchLevel": 4
              },
              {
                "name": "com.minecolonies.research.technology.richveins.name",
                "branch": "minecolonies:technology",
                "costs": [
                  {
                    "count": 32,
                    "tag": "minecraft:gold_ores"
                  }
                ],
                "effects": [
                  {
                    "id": "minecolonies:effects/moreoresmultiplier",
                    "level": 3
                  }
                ],
                "icon": "minecraft:gold_block",
                "parentResearch": "minecolonies:technology/goodveins",
                "requirements": [
                  {
                    "type": "minecolonies:building",
                    "building": "blacksmith",
                    "level": 4
                  }
                ],
                "researchLevel": 4
              },
              {
                "name": "com.minecolonies.research.technology.rockingroll.name",
                "branch": "minecolonies:technology",
                "costs": [
                  {
                    "count": 64,
                    "item": "minecraft:stone"
                  }
                ],
                "effects": [
                  {
                    "id": "minecolonies:effects/blockhutcrusher",
                    "level": 1
                  }
                ],
                "icon": "minecolonies:blockhutcrusher",
                "parentResearch": "minecolonies:technology/stonecake",
                "requirements": [
                  {
                    "type": "minecolonies:building",
                    "building": "stonemason",
                    "level": 1
                  }
                ],
                "researchLevel": 2
              },
              {
                "name": "com.minecolonies.research.technology.rtm.name",
                "branch": "minecolonies:technology",
                "costs": [
                  {
                    "count": 256,
                    "item": "minecraft:paper"
                  }
                ],
                "effects": [
                  {
                    "id": "minecolonies:effects/recipesmultiplier",
                    "level": 4
                  }
                ],
                "icon": "minecraft:bookshelf",
                "parentResearch": "minecolonies:technology/recipebook",
                "requirements": [
                  {
                    "type": "minecolonies:building",
                    "building": "sawmill",
                    "level": 4
                  }
                ],
                "researchLevel": 5,
                "subtitle": "com.minecolonies.research.technology.rtm.subtitle"
              },
              {
                "name": "com.minecolonies.research.technology.seemsautomatic.name",
                "branch": "minecolonies:technology",
                "costs": [
                  {
                    "count": 512,
                    "item": "minecraft:iron_ingot"
                  }
                ],
                "effects": [
                  {
                    "id": "minecolonies:effects/blockplacespeedmultiplier",
                    "level": 4
                  }
                ],
                "icon": "minecraft:blaze_powder",
                "parentResearch": "minecolonies:technology/tools",
                "requirements": [
                  {
                    "type": "minecolonies:building",
                    "building": "blacksmith",
                    "level": 5
                  }
                ],
                "researchLevel": 5,
                "subtitle": "com.minecolonies.research.technology.seemsautomatic.subtitle"
              },
              {
                "name": "com.minecolonies.research.technology.sieving.name",
                "branch": "minecolonies:technology",
                "costs": [
                  {
                    "count": 64,
                    "item": "minecraft:string"
                  }
                ],
                "effects": [
                  {
                    "id": "minecolonies:effects/blockhutsifter",
                    "level": 1
                  }
                ],
                "icon": "minecolonies:blockhutsifter",
                "parentResearch": "minecolonies:technology/woodwork",
                "requirements": [
                  {
                    "type": "minecolonies:building",
                    "building": "fisherman",
                    "level": 3
                  }
                ],
                "researchLevel": 2,
                "sortOrder": 2,
                "subtitle": "com.minecolonies.research.technology.sieving.subtitle"
              },
              {
                "name": "com.minecolonies.research.technology.skills.name",
                "branch": "minecolonies:technology",
                "costs": [
                  {
                    "count": 128,
                    "item": "minecraft:iron_ingot"
                  }
                ],
                "effects": [
                  {
                    "id": "minecolonies:effects/blockplacespeedmultiplier",
                    "level": 2
                  }
                ],
                "icon": "minecraft:glowstone",
                "parentResearch": "minecolonies:technology/ability",
                "requirements": [
                  {
                    "type": "minecolonies:building",
                    "building": "miner",
                    "level": 2
                  }
                ],
                "researchLevel": 3,
                "subtitle": "com.minecolonies.research.technology.skills.subtitle"
              },
              {
                "name": "com.minecolonies.research.technology.softshoes.name",
                "branch": "minecolonies:technology",
                "costs": [
                  {
                    "count": 16,
                    "item": "minecraft:white_wool"
                  },
                  {
                    "count": 16,
                    "item": "minecraft:feather"
                  }
                ],
                "effects": [
                  {
                    "id": "minecolonies:effects/softshoesunlock",
                    "level": 1
                  }
                ],
                "icon": "minecraft:leather_boots",
                "researchLevel": 1,
                "sortOrder": 2,
                "subtitle": "com.minecolonies.research.technology.softshoes.subtitle"
              },
              {
                "name": "com.minecolonies.research.technology.space.name",
                "branch": "minecolonies:technology",
                "costs": [
                  {
                    "count": 16,
                    "item": "minecolonies:blockminecoloniesrack"
                  }
                ],
                "effects": [
                  {
                    "id": "minecolonies:effects/minimumstockmultiplier",
                    "level": 1
                  }
                ],
                "icon": "minecraft:chest",
                "parentResearch": "minecolonies:technology/sieving",
                "requirements": [
                  {
                    "type": "minecolonies:building",
                    "building": "miner",
                    "level": 3
                  }
                ],
                "researchLevel": 3,
                "subtitle": "com.minecolonies.research.technology.space.subtitle"
              },
              {
                "name": "com.minecolonies.research.technology.steelbracing.name",
                "branch": "minecolonies:technology",
                "costs": [
                  {
                    "count": 64,
                    "item": "minecraft:diamond"
                  }
                ],
                "effects": [
                  {
                    "id": "minecolonies:effects/tooldurabilitymultiplier",
                    "level": 4
                  }
                ],
                "icon": "minecraft:golden_pickaxe",
                "parentResearch": "minecolonies:technology/reinforced",
                "requirements": [
                  {
                    "type": "minecolonies:building",
                    "building": "blacksmith",
                    "level": 5
                  }
                ],
                "researchLevel": 5
              },
              {
                "name": "com.minecolonies.research.technology.stonecake.name",
                "branch": "minecolonies:technology",
                "costs": [
                  {
                    "count": 64,
                    "item": "minecraft:chiseled_stone_bricks"
                  }
                ],
                "effects": [
                  {
                    "id": "minecolonies:effects/blockhutstonemason",
                    "level": 1
                  }
                ],
                "icon": "minecolonies:blockhutstonemason",
                "requirements": [
                  {
                    "type": "minecolonies:building",
                    "building": "miner",
                    "level": 3
                  }
                ],
                "researchLevel": 1,
                "sortOrder": 4,
                "subtitle": "com.minecolonies.research.technology.stonecake.subtitle"
              },
              {
                "name": "com.minecolonies.research.technology.stringwork.name",
                "branch": "minecolonies:technology",
                "costs": [
                  {
                    "count": 16,
                    "item": "minecraft:string"
                  }
                ],
                "effects": [
                  {
                    "id": "minecolonies:effects/blockhutfletcher",
                    "level": 1
                  }
                ],
                "icon": "minecolonies:blockhutfletcher",
                "parentResearch": "minecolonies:technology/woodwork",
                "requirements": [
                  {
                    "type": "minecolonies:building",
                    "building": "sawmill",
                    "level": 1
                  }
                ],
                "researchLevel": 2
              },
              {
                "name": "com.minecolonies.research.technology.strong.name",
                "branch": "minecolonies:technology",
                "costs": [
                  {
                    "count": 8,
                    "item": "minecraft:diamond"
                  }
                ],
                "effects": [
                  {
                    "id": "minecolonies:effects/tooldurabilitymultiplier",
                    "level": 1
                  }
                ],
                "icon": "minecraft:wooden_pickaxe",
                "parentResearch": "minecolonies:technology/hittingiron",
                "requirements": [
                  {
                    "type": "minecolonies:building",
                    "building": "blacksmith",
                    "level": 1
                  }
                ],
                "researchLevel": 2
              },
              {
                "name": "com.minecolonies.research.technology.takingdivinglessons.name",
                "branch": "minecolonies:technology",
                "costs": [
                  {
                    "count": 16,
                    "item": "minecraft:kelp"
                  },
                  {
                    "count": 16,
                    "item": "minecraft:seagrass"
                  },
                  {
                    "count": 16,
                    "item": "minecraft:sea_pickle"
                  }
                ],
                "effects": [
                  {
                    "id": "minecolonies:effects/plantationsea",
                    "level": 1
                  }
                ],
                "icon": "minecraft:kelp",
                "parentResearch": "minecolonies:technology/letitgrow",
                "requirements": [
                  {
                    "type": "minecolonies:building",
                    "building": "plantation",
                    "level": 2
                  }
                ],
                "researchLevel": 3,
                "subtitle": "com.minecolonies.research.technology.takingdivinglessons.subtitle"
              },
              {
                "name": "com.minecolonies.research.technology.theflintstones.name",
                "branch": "minecolonies:technology",
                "costs": [
                  {
                    "count": 64,
                    "item": "minecraft:brick"
                  }
                ],
                "effects": [
                  {
                    "id": "minecolonies:effects/blockhutstonesmeltery",
                    "level": 1
                  }
                ],
                "icon": "minecolonies:blockhutstonesmeltery",
                "parentResearch": "minecolonies:technology/stonecake",
                "requirements": [
                  {
                    "type": "minecolonies:building",
                    "building": "stonemason",
                    "level": 1
                  }
                ],
                "researchLevel": 2,
                "subtitle": "com.minecolonies.research.technology.theflintstones.subtitle"
              },
              {
                "name": "com.minecolonies.research.technology.thoselungs.name",
                "branch": "minecolonies:technology",
                "costs": [
                  {
                    "count": 64,
                    "item": "minecraft:glass"
                  }
                ],
                "effects": [
                  {
                    "id": "minecolonies:effects/blockhutglassblower",
                    "level": 1
                  }
                ],
                "icon": "minecolonies:blockhutglassblower",
                "parentResearch": "minecolonies:technology/hot",
                "requirements": [
                  {
                    "type": "minecolonies:building",
                    "building": "smeltery",
                    "level": 3
                  }
                ],
                "researchLevel": 2,
                "subtitle": "com.minecolonies.research.technology.thoselungs.subtitle"
              },
              {
                "name": "com.minecolonies.research.technology.tools.name",
                "branch": "minecolonies:technology",
                "costs": [
                  {
                    "count": 256,
                    "item": "minecraft:iron_ingot"
                  }
                ],
                "effects": [
                  {
                    "id": "minecolonies:effects/blockplacespeedmultiplier",
                    "level": 3
                  }
                ],
                "icon": "minecraft:redstone_lamp",
                "parentResearch": "minecolonies:technology/skills",
                "requirements": [
                  {
                    "type": "minecolonies:building",
                    "building": "blacksmith",
                    "level": 4
                  }
                ],
                "researchLevel": 4,
                "subtitle": "com.minecolonies.research.technology.tools.subtitle"
              },
              {
                "name": "com.minecolonies.research.technology.veinminer.name",
                "branch": "minecolonies:technology",
                "costs": [
                  {
                    "count": 32,
                    "tag": "minecraft:iron_ores"
                  }
                ],
                "effects": [
                  {
                    "id": "minecolonies:effects/moreoresmultiplier",
                    "level": 1
                  }
                ],
                "icon": "minecraft:iron_block",
                "parentResearch": "minecolonies:technology/hittingiron",
                "requirements": [
                  {
                    "type": "minecolonies:building",
                    "building": "miner",
                    "level": 1
                  }
                ],
                "researchLevel": 2
              },
              {
                "name": "com.minecolonies.research.technology.warehousemaster.name",
                "branch": "minecolonies:technology",
                "costs": [
                  {
                    "count": 3,
                    "item": "minecolonies:blockminecoloniesrack"
                  }
                ],
                "effects": [
                  {
                    "id": "minecolonies:effects/recipemodeunlock",
                    "level": 1
                  }
                ],
                "icon": "minecolonies:blockminecoloniesrack",
                "parentResearch": "minecolonies:technology/memoryaid",
                "requirements": [
                  {
                    "type": "minecolonies:building",
                    "building": "sawmill",
                    "level": 3
                  }
                ],
                "researchLevel": 3,
                "sortOrder": 2,
                "subtitle": "com.minecolonies.research.technology.warehousemaster.subtitle"
              },
              {
                "name": "com.minecolonies.research.technology.whatisthisspeed.name",
                "branch": "minecolonies:technology",
                "costs": [
                  {
                    "count": 1024,
                    "item": "minecraft:redstone"
                  }
                ],
                "effects": [
                  {
                    "id": "minecolonies:effects/blockbreakspeedmultiplier",
                    "level": 4
                  }
                ],
                "icon": "minecraft:comparator",
                "parentResearch": "minecolonies:technology/heavymachinery",
                "researchLevel": 5,
                "subtitle": "com.minecolonies.research.technology.whatisthisspeed.subtitle"
              },
              {
                "name": "com.minecolonies.research.technology.whatyaneed.name",
                "branch": "minecolonies:technology",
                "costs": [
                  {
                    "count": 64,
                    "item": "minecraft:redstone"
                  }
                ],
                "effects": [
                  {
                    "id": "minecolonies:effects/blockhutmechanic",
                    "level": 1
                  }
                ],
                "icon": "minecolonies:blockhutmechanic",
                "parentResearch": "minecolonies:technology/hittingiron",
                "requirements": [
                  {
                    "type": "minecolonies:building",
                    "building": "blacksmith",
                    "level": 3
                  }
                ],
                "researchLevel": 2,
                "subtitle": "com.minecolonies.research.technology.whatyaneed.subtitle"
              },
              {
                "name": "com.minecolonies.research.technology.woodwork.name",
                "branch": "minecolonies:technology",
                "costs": [
                  {
                    "count": 64,
                    "tag": "minecraft:planks"
                  }
                ],
                "effects": [
                  {
                    "id": "minecolonies:effects/blockhutsawmill",
                    "level": 1
                  }
                ],
                "icon": "minecolonies:blockhutsawmill",
                "requirements": [
                  {
                    "type": "minecolonies:building",
                    "building": "lumberjack",
                    "level": 3
                  }
                ],
                "researchLevel": 1,
                "sortOrder": 5,
                "subtitle": "com.minecolonies.research.technology.woodwork.subtitle"
              }
            ]
          },
          {
            name: "unlockable",
            technologies: [
              {
                "name": "com.minecolonies.research.technology.diamondmesh.name",
                "autostart": true,
                "branch": "minecolonies:unlockable",
                "effects": [
                  {
                    "id": "minecolonies:effects/sifterdiamondunlock",
                    "level": 1
                  }
                ],
                "hidden": true,
                "icon": "minecolonies:sifter_mesh_string",
                "instant": true,
                "parentResearch": "minecolonies:unlockable/ironmesh",
                "requirements": [
                  {
                    "type": "minecolonies:mandatory-building",
                    "level": 5,
                    "mandatory-building": "sifter"
                  }
                ],
                "researchLevel": 4
              },
              {
                "name": "com.minecolonies.research.technology.flintmesh.name",
                "autostart": true,
                "branch": "minecolonies:unlockable",
                "effects": [
                  {
                    "id": "minecolonies:effects/sifterflintunlock",
                    "level": 1
                  }
                ],
                "hidden": true,
                "icon": "minecolonies:sifter_mesh_string",
                "instant": true,
                "parentResearch": "minecolonies:unlockable/stringmesh",
                "requirements": [
                  {
                    "type": "minecolonies:mandatory-building",
                    "level": 3,
                    "mandatory-building": "sifter"
                  }
                ],
                "researchLevel": 2
              },
              {
                "name": "com.minecolonies.research.technology.ironmesh.name",
                "autostart": true,
                "branch": "minecolonies:unlockable",
                "effects": [
                  {
                    "id": "minecolonies:effects/sifterironunlock",
                    "level": 1
                  }
                ],
                "hidden": true,
                "icon": "minecolonies:sifter_mesh_string",
                "instant": true,
                "parentResearch": "minecolonies:unlockable/flintmesh",
                "requirements": [
                  {
                    "type": "minecolonies:mandatory-building",
                    "level": 4,
                    "mandatory-building": "sifter"
                  }
                ],
                "researchLevel": 3
              },
              {
                "name": "com.minecolonies.research.technology.stringmesh.name",
                "autostart": true,
                "branch": "minecolonies:unlockable",
                "effects": [
                  {
                    "id": "minecolonies:effects/sifterstringunlock",
                    "level": 1
                  }
                ],
                "hidden": true,
                "icon": "minecolonies:sifter_mesh_string",
                "instant": true,
                "requirements": [
                  {
                    "type": "minecolonies:mandatory-building",
                    "level": 1,
                    "mandatory-building": "sifter"
                  }
                ],
                "researchLevel": 1
              }
            ]
          }
        ]
      }
    ],
    localizations: [],
  }
]