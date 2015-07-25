/**
 * Copyright (c) 2015 Eugenio Ochoa
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the "Software"), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in all
 *  copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 *  SOFTWARE.
 */
var data = {
  'game': {
    'image': {
      'link': 'data/img/fourth_wall.jpg',
      'altText': 'The Fourth Wall'
    },
    'title': 'The Fourth Wall',
    'description': 'The fourth wall has been shattered, and the line between fiction and reality have become blurred. UFOs are appering in the sky, vampires are creeping out of the sadows, there are reports of rains of frogs and claims of time travellers. Etc, etc. Fortunately, as the author I\'ve given you <b>100 points</b> to spend in order to live in this new mish mash of universes <br> if you don\'t recognize something and the explanation isn\'t enough, google is your friend. Theres a list of franchises I used in order at the bottom. There are probably inaccuracies.',
    'generatePoints': function () {
      var self = this
      return (function () {
        self.game.points = 100 // Math.floor((Math.random() * 99) + 10);
        self.game.player.points = self.game.points
        return self.game.points
      }())
    },
    'player': {
      'points': 0
    }
  },

  'cardTypes': [

    {
      'id': 1,
      'type': 'powers',
      'title': 'Powers',
      'description': 'If chosen, they become a part of you, and can\'t be taken away.',
      'isOnlyOne': false,
      'cards': [
        {
          'id': 1,
          'title': 'The Slayer',
          'image': {
            'link': 'data/img/the_slayer.jpg',
            'altText': 'The slayer'
          },
          'value': -22,
          'text': 'Super strength, Super reflexes, super senses and super healing. A natural instinct for battle and a proficiency with medieval waponry, as well as the occasional prophetic dream. Thery\'re usually only female, but I think we can make an exception.'
        },
        {
          'id': 2,
          'title': 'The Force',
          'image': {
            'link': 'data/img/the_force.jpg',
            'altText': 'The Force'
          },
          'value': -35,
          'text': 'Telekinesis, battle precognition, limited mind control and psychic senses. Requires practice and training to do any of the cool stuff though.'
        },
        {
          'id': 3,
          'title': 'Shadow Clones',
          'image': {
            'link': 'data/img/shadow_clones.png',
            'altText': 'Shadow Clones'
          },
          'value': -26,
          'text': 'You can create tangible duplicates of yourself that dispel at your command or when they take a physical or mental blow. Any memories and experiences are transferred to the original after they\'ve dispelled. Their durability and numbers go up with practice.'
        },
        {
          'id': 4,
          'title': 'Alchemy',
          'image': {
            'link': 'data/img/alchemy.jpg',
            'altText': 'Alchemy'
          },
          'value': -15,
          'text': 'You can rerrange matter according to your will, within the confines of a Transmutation Circle. You are granted the knowlege needed to draw the circles and understande what it is your doing, but it obeys the laws of equivailant exchange, so you can\'t make something out of nothing. At least, not without delving into the darker side of the craft.',

          'extra': [
            {
              'id': '4-1',
              'value': -23,
              'text': 'However, if you wish you can pay the extra price to get circleless transmutation, only needing to make any circle by clapping your hands together.'
            }
          ]
        },
        {
          'id': 5,
          'title': 'The Flash',
          'image': {
            'link': 'data/img/the_flash.jpg',
            'altText': 'The Flash'
          },
          'value': -75,
          'text': 'You\'re the fastest man alive. You can move up light speed, and can think fast enough to cope. You\'re surrounded by a thin aura which protects you, your clothes and anything your carrying from the destructive speeds you can travel at. No time travel, and you can\'t vibrate through walls. Though running through them isn\'t much of a problem.'
        },
        {
          'id': 6,
          'title': 'Daredevil',
          'image': {
            'link': 'data/img/daredevil.jpg',
            'altText': 'Daredevil'
          },
          'value': -9,
          'text': 'You can create tangible duplicates of yourself that dispel at your command or when they take a physical or mental blow. Any memories and experiences are transferred to the original after they\'ve dispelled. Their durability and numbers go up with practice.'
        },
        {
          'id': 8,
          'title': 'Crystal Gem',
          'image': {
            'link': 'data/img/crystal_gem.png',
            'altText': 'Crystal Gem'
          },
          'value': -30,
          'text': 'You are a Crystal Gem, an alien whose form is centered arround a gem embedded on your body somewhere. You areee immortal provided your gem is intact, and can rebuild your physical body if its damaged by retrating inside your gem. You also can summon a weapon unique to you, shapeshift (within your color sheme), and \'fuse\', combining temporarily with others into something grater than the sum of your parts. The closer you are with the other person or people the more stable and powerful the fusion is. Theres also a chance You\'ll get a random unique power. All these powers require training however, though some based in instinct.'
        },
        {
          'id': 9,
          'title': 'Skitter',
          'image': {
            'link': 'data/img/skitter.png',
            'altText': 'Skitter'
          },
          'value': -28,
          'text': 'Bugs. Bugs are everywhere, and you can control them. Anything with a brain less complicated than a crab that still actually has aaa brain (no single cell organisms) is yours to controll within a sphere of about a mile/1.5km in every direction arround you. With practice you can also learn to interpret all the senses of the insects under your control, and feel, smell, see and hear throught them (in that order of difficulty). <br> Grants the side benefit of functionally infinittte multitasking, allowing you to controll trillons of insects independently with no problem.'
        }
      ]
    },
    {
      'id': 2,
      'type': 'artifacts',
      'title': 'Artifacts',
      'description': 'Whilst some may grant abilities, unlike powers they can be lost, destroyed, taken or given away.',
      'cards': [
        {
          'id': 10,
          'title': 'Sonic Screwdriver',
          'image': {
            'link': 'data/img/sonic_screwdriver.jpg',
            'altText': 'Sonic Screwdriver'
          },
          'value': -8,
          'text': 'Can manipulate pretty much any technology, fictional or otherwise as well as simple mechanisms like locks and higens. No wood. Comes with knowledge of how to use it.'
        },
        {
          'id': 11,
          'title': 'Crescent Rose',
          'image': {
            'link': 'data/img/crescent_rose.jpg',
            'altText': 'Crescent Rose'
          },
          'value': -6,
          'text': 'A collapsable sythe/sniper rifle weapon. Sniper rifle is hight caliber and can be fired from either the full sythe mode (top) or the condensed rifle mode (middle). The bottom state is for ease of transport. The sythe is wickedly sharp and you are granted the skill to use and maintain it though not the strength. Whilst it dosn\'t weigh a huge ammount it has a powerful recoil. It can be used proficiently with a high normal human strenght.'
        },
        {
          'id': 12,
          'title': '1up Mushroom',
          'image': {
            'link': 'data/img/1up_mushroom.png',
            'altText': '1up Mushroom'
          },
          'value': -19,
          'text': 'Once eaten it grants an extra life. If you die You\'re respawned somwhere safe in the general vicinity of your death. 1 use only, and isn\'t very effective against old age.'
        },
        {
          'id': 13,
          'title': 'Portal Gun',
          'image': {
            'link': 'data/img/portal_gun.jpg',
            'altText': 'Portal Gun'
          },
          'value': -10,
          'text': 'Its a portal gun. Two triggers, each shoot a portal connected to the other one, allowing for travel between the two. Momentum and energy is conserved, etc, etc. Comes with long fall bots so you don\'t go splat.'
        },
        {
          'id': 14,
          'title': 'Walther PPK',
          'image': {
            'link': 'data/img/walther_ppk.jpg',
            'altText': 'Walther PPK'
          },
          'value': -1,
          'text': 'A standar Walther PPK firearm. COmes with a basepoke suit and a glass of scotch.'
        },
        {
          'id': 15,
          'title': 'Lightsaber',
          'image': {
            'link': 'data/img/lighsaber.jpg',
            'altText': 'Lightsaber'
          },
          'value': -5,
          'text': 'Its a lightsaber. Without The Force though it will be awkward to wield inless you have another power to compensate or a great deal of training. Your choice of colour.'
        },
        {
          'id': 16,
          'title': 'The Luggage',
          'image': {
            'link': 'data/img/the_luggage.png',
            'altText': 'The Luggage'
          },
          'value': -45,
          'text': 'Half suitcase, half homicidal maniac, the Luggage has chosen you as its new master. It has an unknown number of compartments, but always enogh room to carry what you need as well as apparrently able to do laundary. Fircely loyal, its extremely unforgiving to thossse its deems a threat to you or simply in its way. If You\'re ever sperated it will rampage through space, time, dimensions, planes of existance and the occasional afteeerlife to find you, and is ridable if You\'re desperateee. Extremennly fast and basically invulnerable, its main form of attack is just running though whatevers in its way, and the only real defense is to be far, far away from it. Unfortunately, being your luggage it will likely get seperated from you pretty often.'
        },
        {
          'id': 17,
          'title': 'Magic Wand',
          'image': {
            'link': 'data/img/magic_wand.jpg',
            'altText': 'Magic Wand'
          },
          'value': -24,
          'text': 'Congratulations! You\'reee wizard/witch! You\'re granted a wand best suited to you and the skills of an averege 7 year Hogwarts graduate, but you can always improve. You\'re not much better than a muggle without your wand though.'
        },
        {
          'id': 18,
          'title': 'Lucys\'s Cordial',
          'image': {
            'link': 'data/img/lucys_cordial.jpg',
            'altText': 'Lucys\'s Cordial'
          },
          'value': -12,
          'text': 'A small bottle about the size of a hipflask made from the juice of the Fire-Flowers that grew in the montains of the Sun. A few drops will cure any ailment and can bring someone back from the brink of death. can\'t be refilled unfortunately.'
        },
        {
          'id': 19,
          'title': 'Spartan Laser',
          'image': {
            'link': 'data/img/spartan_laser.png',
            'altText': 'Spartan Laser'
          },
          'value': -9,
          'text': 'A big laser gun. Can penetrate multiple armoured targets, but takes a couple of seconds to fire.'
        },
        {
          'id': 21,
          'title': 'Shardblade',
          'image': {
            'link': 'data/img/shardblade.jpg',
            'altText': 'Shardblade'
          },
          'value': -13,
          'text': 'A powerful sword that can cut through any non living matter with ease. If it cuts living matter it is said to serve the soul, with killing blows leaving no mark eceppt for the vitims eyes burning out, and non fatal blows rendering the limbs or organs struck useless. Can be dispelled and resummoned at will, after an initial 5 day bonding period where the sword cannot leave your side. It take ten heartbeats for the blade to form however. Once bound to someone the blade can only be relenquished willingly or thorough death. It weighs very little, but requires as much training to use as any other sword'
        },
        {
          'id': 22,
          'title': 'Shardplate',
          'image': {
            'link': 'data/img/shardplate.jpg',
            'altText': 'Shardplate'
          },
          'value': -4,
          'text': 'A powerful suit armour that grants enhanced strenght, speed and agility, as well as excellent protection and confort. Its not indestructable though, and heavy blows can crack or even shatter sections of it. removing enhancements from that area and rendering it vulnerable. In the abssence of Highstorms (so far) the plate will naturally regenerate over time, so long as a single piece remains. Can be triky to put on without help or super strenght.'
        },
        {
          'id': 23,
          'title': 'Shardbearer',
          'image': {
            'link': 'data/img/shardbarer.jpg',
            'altText': 'Shardbearer'
          },
          'value': -4,
          'text': 'You get both the Shardblade and the Shardplate.'
        },
        {
          'id': 24,
          'title': 'Green Lantern Power Ring',
          'image': {
            'link': 'data/img/green_lantern_power_ring.jpg',
            'altText': 'Green Lantern Power Ring'
          },
          'value': -70,
          'text': 'This incredible object allows the wearer to create any solid, hard light constructs that ca imagine. It is also capable of firing projectiles, and advanced use shows its capable of manipulating fundamental forces and energies. It will generate a spandex-y suit around you from most enviromental damage and allowing flight, even in space. It does require charging however, with more complex constructs or uses draining more energy. It comes with a Power Battery shaped like a green lantern which you can charge it from. Whilst the ring is only extremely durable. Good luck finding a replacement battery.'
        },
        {
          'id': 25,
          'title': 'Iron Man Suit',
          'image': {
            'link': 'data/img/iron_man_suit.jpg',
            'altText': 'Iron Man Suit'
          },
          'value': -27,
          'text': 'A feat of human engineering, this suit grants advance protection capable of shrugging off a tank blast, flight at an easy cruising speed of Mach 2-3, as well as able to stretch to Mach 5 in bursts, a swis army knife as weapons, both leathal and non lethal, a fancy user interface, and a helpful AI to assist you. Powered by an arc reactor, it won\'t run out of power in your life time unless it takes critical damage. <br> It comes with knowlage of how to maintaiin and repair it, but not material or components. If You\'re persistent you might be able to figure out how to upgrade it or even build more.'
        },
        {
          'id': 26,
          'title': 'Hitchhiker\'s Guide to the Galaxy',
          'image': {
            'link': 'data/img/galaxy_guide.jpg',
            'altText': 'Hitchhiker\'s Guide to the Galaxy'
          },
          'value': -1,
          'text': 'Theres a whole Galaxy out tthere to explore now if you felt like it, and this friendly guide will provide you with information thats largely more useful than accurate. Even if you don\'t fell like it...Well the Galaxy might end up coming to you.'
        }
      ]
    },
    {
      'id': 3,
      'type': 'transport',
      'title': 'Transport',
      'description': 'For artifacts that are primarily used to get aound.',
      'cards': [
        {
          'id': 27,
          'title': 'Hoverboard',
          'image': {
            'link': 'data/img/hoverboard.png',
            'altText': 'Hoverboard'
          },
          'value': -2,
          'text': 'Cruise around in style. All terain transportation, capable of going over even water! Powered by your own momentum.'
        },
        {
          'id': 28,
          'title': 'Shadowfax',
          'image': {
            'link': 'data/img/shadowfax.jpg',
            'altText': 'Shadowfax'
          },
          'value': -4,
          'text': 'The lord of horses, Shadowfox is the pinnacle of what a horse can be. The gastest, sturdiest and with the gratest stamina and temperment a horse can have. Highly intelligent, he\'s capable of understanding human speech. Half wild and slightly magical, he will make its way to you when you call it, provided You\'re in the same plante/dimension/time period. Don\'t try and saddle him however, and whilst an amazing horse he is still only a horse.'
        },
        {
          'id': 29,
          'title': 'Aancient Psychic Tandem War Elephant',
          'image': {
            'link': 'data/img/ancient_psychic_tandem_war_elephant.png',
            'altText': 'Aancient Psychic Tandem War Elephant'
          },
          'value': -4,
          'text': 'A mysterious creature who wishes only to serve you. Communicates telepathically, flies, ssseats two and probably has some other mysterious powers.'
        },
        {
          'id': 30,
          'title': 'Batmobile',
          'image': {
            'link': 'data/img/batmobile.jpg',
            'altText': 'Batmobile'
          },
          'value': -9,
          'text': 'Its the Batmobile. You can choose any era\'s and they\'re usually fast, durable and crammed with bat gadgets. Mostly non lethal weapons like anti riot stuff (and anti-shark spray), but some of them have bat missiles or bat grapplings hooks, and the older versions tend to have bat stuff that dosen\'t really follow conventional science. All look baddass as hell though.'
        },
        {
          'id': 31,
          'title': 'Dragon',
          'image': {
            'link': 'data/img/dragon.jpg',
            'altText': 'Dragon'
          },
          'value': -15,
          'text': 'A ridable dragon. You get it when its a baby and can ride it once its about three years old. Can breath fire, fly of course and devour your enemies. Has natural armour plating capable of withstanding most small arms fire as well as shrugging off most magic. Obviously fireproof too. Has the intelligence of an intelligent but wild animal. Tammming and controlling it will be difficult, even if You\'re its "mother". It probably won\'t eat you though, it likes you that much.'
        },
        {
          'id': 40,
          'title': 'Aloha \'Oe',
          'image': {
            'link': 'data/img/aloha_oe.jpg',
            'altText': 'Aloha \'Oe'
          },
          'value': -30,
          'text': 'A spaceship of your own. Comfortably if sloppily furnished, easyly maintained and capable of FTL travel. Can be lived in and easily house 3 people, with space for more. Kind of like an bechelor\'s Ssserenity. Armed with laser weapons and comes with the Little Aloha space shuttle, shaped like a Cadillac. The Little Hawaii Yankee, a combat capable robot mech.'
        },
        {
          'id': 32,
          'title': 'Heart of Gold',
          'image': {
            'link': 'data/img/heart_of_gold.jpg',
            'altText': 'Heart of Gold'
          },
          'value': -42,
          'text': 'A ship powered by the impossibility of the Heart of Gold - the infinite improbabillity drive. Once the drive generates an infinite improbability it passses though every point in the universe simultaneously, allowing you to travel anywhere almos instantly. There are some side effects of the infinite improbability field though. Unlikely things will tend to happen around the ship, and in fact due to the nature of the math involved anything that is virtually impossible becomes quite likely to happen. <br> Is outfitted with Genuine People Personalities, including a relentlessly cheery onboard computer, doors that are thilled to open for you and a depressed robot.'
        },
        {
          'id': 33,
          'title': 'Sub-Tract Card',
          'image': {
            'link': 'data/img/substract_card.jpg',
            'altText': 'Sub-Tract Card'
          },
          'value': -16,
          'text': 'This card allows holders to travel through Subspace doors automatically. Subspace can let travellers go between doors which are more or less randomly distributed around the world. Space between doors is different in subspace compared to regular space, and if you know your way around they can provide handy shortcuts. You also get a knack for finfing the doors, but you have to learn the best routes yourself.'
        }
      ]
    },
    {
      'id': 4,
      'type': 'enemies',
      'title': 'Enemies',
      'description': 'Want more points? Choose someee enemies!',
      'cards': [
        {
          'id': 34,
          'title': 'The Wither',
          'image': {
            'link': 'data/img/the_wither.jpg',
            'altText': 'The Wither'
          },
          'value': 5,
          'text': 'A wither is spawned somewhere in the world, and it is slowly homing in on you. If unprepared this boss can ruin your day, but its not particulary difficult to escape and is easily distracted. Will cause a ridiculous amount of property damage and kill everything its able until killed though. Can float and shoot exploding projectiles which also violently poison anything near by.'
        },
        {
          'id': 35,
          'title': 'Goa\'uld',
          'image': {
            'link': 'data/img/Goa_uld.jpg',
            'altText': 'Goa\'uld'
          },
          'value': 15,
          'text': 'A merciless, parasitic alien which enters a host body and supressses their conciousness, taking over their body and leaving them aware but unable to do anything but watch. They can use humans and some other species as hosts, and grant their bodies an increased strength and resilience. They bealive themselves to be Gods, and that all other species are inferior and must either submit or be destroyed. They have access to advance alien technology, but are egomaniacal, not very imaginative and rigidly set in their minds. <br> They have loose society but are constantly infighting and backstabbing each other for resorces, technology and territory. They have deemed you as an ultimate host, and if they can\'t get you for themself they\'ll destroy you. The rest of humanity is just an afterthought. They need to find you first though.'
        },
        {
          'id': 36,
          'title': 'The Jocker',
          'image': {
            'link': 'data/img/the_jocker.jpg',
            'altText': 'The Jocker'
          },
          'value': 20,
          'text': 'Ruthless, intelligent, no boundaries, no line he won\'t corss, and utterly, utterly insane. And he\'s obssesed with you. He dosen\'t want to kill you, he want to break you. At least he\'s mortal.'
        },
        {
          'id': 37,
          'title': 'Mirror You',
          'image': {
            'link': 'data/img/mirror_you.jpg',
            'altText': 'Mirror You'
          },
          'value': 20,
          'text': 'An evil version of yourself form an alternative dimension. Or if You\'re already evil a good version.'
        },
        {
          'id': 38,
          'title': 'SCP-682',
          'image': {
            'link': 'data/img/SCP-682.jpg',
            'altText': 'SCP-682'
          },
          'value': 40,
          'text': 'SCP-682 is a large, vaguely reptile-like creature of unknown origin. It appears to be extremely intelligent, and was observed to engage in complex communication with SCP-079 during their limited time of exposure. SCP-682 appears to have a hatred of all life, which has been expressed in several interviews during containment, especially you.'
        }
      ]
    },
    {
      'id': 5,
      'type': 'bonus',
      'title': 'Bonus',
      'description': '',
      'cards': [
        {
          'id': 39,
          'title': 'Protagonist',
          'image': {
            'link': 'data/img/protagonist.jpg',
            'altText': '1up Mushroom'
          },
          'value': -200,
          'text': 'If you want to be boring you can become the main character. The world revolves around you. Love interests crawl out of the woodwork, problems throw themselves at you (but nothing you can\'t handle), betrayals and mysteries lurk around every corner and you have a resilient plot armour. Even in the unlikley eveeent you die someone will probably figure out how to resurrect you.'
        }

      ]
    }

  ]
}

data
