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
      'link': 'data/fourth_wall/img/fourth_wall.jpg',
      'altText': 'La cuarta barrera'
    },
    'title': 'La cuarta barrera',
    'description': 'La cuarta barrera se ha destruido, la linea entre la ficcion y la realidad deja de ser clara. Los OVNIS estan apareciendo en los cielos, vampiros salen de las sombras, hay reportes sobre lluvias de ranas y viajeros en el tiempo. Afortunadamente, como autor te otorco <b> 100 puntos </b> para que gastes buscando tu lugar en este nuevo universo. <br> Si o reconoces algo, google sera tu amigo.',
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
      'title': 'Poderes',
      'description': 'Una vez elegidos pasaran a formar parte de ti, no podran serte arrebatados.',
      'isOnlyOne': false,
      'cards': [
        {
          'id': 1,
          'title': 'El cazavampiros',
          'image': {
            'link': 'data/fourth_wall/img/the_slayer.jpg',
            'altText': 'The slayer'
          },
          'value': -22,
          'text': 'Super fuerza, super reflejos, super sentidos, super curacion. Un instinto por la batalla y habilidad con armas medievales, ademas de los sueños profeticos ocacionales.'
        },
        {
          'id': 2,
          'title': 'La fuerza',
          'image': {
            'link': 'data/fourth_wall/img/the_force.jpg',
            'altText': 'La fuerza'
          },
          'value': -35,
          'text': 'Telekinesis, control mental limitado, sentidos psiquicos. Requiere practica y entrenamiento para hacer las cosas cool.'
        },
        {
          'id': 3,
          'title': 'Clones de las sobras',
          'image': {
            'link': 'data/fourth_wall/img/shadow_clones.png',
            'altText': 'Clones de las sobras'
          },
          'value': -26,
          'text': 'Puedes crear duplicados de ti mismo y destruirlos a voluntad. Seran destruidos si reciven daño fisico o mental. Cualquier memoria y experiencia de los clones te sera transferida una vez sean destruidos. La durabilidad y el cantidad creceran segun la practica.'
        },
        {
          'id': 4,
          'title': 'Alquimia',
          'image': {
            'link': 'data/fourth_wall/img/alchemy.jpg',
            'altText': 'Alquimia'
          },
          'value': -15,
          'text': 'Puedes redistribuir la materia a voluntad dentro de los circulos de trnasmutacion alquimicos. Se te otorga el conocimiento para dibujar los circulos y comprender lo que estas haciendo. Tienes que obedecer las leyes de la equivalencia de intercambio, no puedes crear cosas de la nada, almenos no sin involucrarte en las artes oscuras de la creacion.',

          'extra': [
            {
              'id': '4-1',
              'value': -23,
              'text': 'Si quieres pagar un precio extra, puedes crear transmutaciones sin circulos, creando circulos dando unas palmadas.'
            }
          ]
        },
        {
          'id': 5,
          'title': 'Flash',
          'image': {
            'link': 'data/fourth_wall/img/the_flash.jpg',
            'altText': 'Flash'
          },
          'value': -75,
          'text': 'Eres el hombre mas rapido del mundo. Puedes moverte a la velocidad de la luz y pensar suficientemente rapido como para moverte a estas velocidades. Te envuelve una fina aura que te protege a ti, y a cualquier cosa uqe lleves, haciendo que soporten las velocidades.'
        },
        {
          'id': 6,
          'title': 'Daredevil',
          'image': {
            'link': 'data/fourth_wall/img/daredevil.jpg',
            'altText': 'Daredevil'
          },
          'value': -9,
          'text': 'Puedes crear duplicados de ti mismo y destruirlos a voluntad. Seran destruidos si reciven daño fisico o mental. Cualquier memoria y experiencia de los clones te sera transferida una vez sean destruidos. La durabilidad y el cantidad creceran segun la practica.'
        },
        {
          'id': 8,
          'title': 'Gema de cristal',
          'image': {
            'link': 'data/fourth_wall/img/crystal_gem.png',
            'altText': 'Gema de cristal'
          },
          'value': -30,
          'text': 'You are a Crystal Gem, an alien whose form is centered arround a gem embedded on your body somewhere. You areee immortal provided your gem is intact, and can rebuild your physical body if its damaged by retrating inside your gem. You also can summon a weapon unique to you, shapeshift (within your color sheme), and \'fuse\', combining temporarily with others into something grater than the sum of your parts. The closer you are with the other person or people the more stable and powerful the fusion is. Theres also a chance You\'ll get a random unique power. All these powers require training however, though some based in instinct.'
        },
        {
          'id': 9,
          'title': 'Skitter',
          'image': {
            'link': 'data/fourth_wall/img/skitter.png',
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
      'title': 'Artefactos',
      'description': 'Algonos dan habilidades, a diferencia de los poderes estos pueden ser perdidos o regalados a otras personas.',
      'cards': [
        {
          'id': 10,
          'title': 'Destornillador sónico',
          'image': {
            'link': 'data/fourth_wall/img/sonic_screwdriver.jpg',
            'altText': 'Destornillador sónico'
          },
          'value': -8,
          'text': 'Can manipulate pretty much any technology, fictional or otherwise as well as simple mechanisms like locks and higens. No wood. Comes with knowledge of how to use it.'
        },
        {
          'id': 11,
          'title': 'Crescent Rose',
          'image': {
            'link': 'data/fourth_wall/img/crescent_rose.jpg',
            'altText': 'Crescent Rose'
          },
          'value': -6,
          'text': 'A collapsable sythe/sniper rifle weapon. Sniper rifle is hight caliber and can be fired from either the full sythe mode (top) or the condensed rifle mode (middle). The bottom state is for ease of transport. The sythe is wickedly sharp and you are granted the skill to use and maintain it though not the strength. Whilst it dosn\'t weigh a huge ammount it has a powerful recoil. It can be used proficiently with a high normal human strenght.'
        },
        {
          'id': 12,
          'title': '1up Hongo',
          'image': {
            'link': 'data/fourth_wall/img/1up_mushroom.png',
            'altText': '1up Hongo'
          },
          'value': -19,
          'text': 'Once eaten it grants an extra life. If you die You\'re respawned somwhere safe in the general vicinity of your death. 1 use only, and isn\'t very effective against old age.'
        },
        {
          'id': 13,
          'title': 'Portal Gun',
          'image': {
            'link': 'data/fourth_wall/img/portal_gun.jpg',
            'altText': 'Portal Gun'
          },
          'value': -10,
          'text': 'Its a portal gun. Two triggers, each shoot a portal connected to the other one, allowing for travel between the two. Momentum and energy is conserved, etc, etc. Comes with long fall bots so you don\'t go splat.'
        },
        {
          'id': 14,
          'title': 'Walther PPK',
          'image': {
            'link': 'data/fourth_wall/img/walther_ppk.jpg',
            'altText': 'Walther PPK'
          },
          'value': -1,
          'text': 'A standar Walther PPK firearm. COmes with a basepoke suit and a glass of scotch.'
        },
        {
          'id': 15,
          'title': 'Sable laser',
          'image': {
            'link': 'data/fourth_wall/img/lighsaber.jpg',
            'altText': 'Sable laser'
          },
          'value': -5,
          'text': 'Its a lightsaber. Without The Force though it will be awkward to wield inless you have another power to compensate or a great deal of training. Your choice of colour.'
        },
        {
          'id': 16,
          'title': 'El equipaje',
          'image': {
            'link': 'data/fourth_wall/img/the_luggage.png',
            'altText': 'El equipaje'
          },
          'value': -45,
          'text': 'Half suitcase, half homicidal maniac, the Luggage has chosen you as its new master. It has an unknown number of compartments, but always enogh room to carry what you need as well as apparrently able to do laundary. Fircely loyal, its extremely unforgiving to thossse its deems a threat to you or simply in its way. If You\'re ever sperated it will rampage through space, time, dimensions, planes of existance and the occasional afteeerlife to find you, and is ridable if You\'re desperateee. Extremennly fast and basically invulnerable, its main form of attack is just running though whatevers in its way, and the only real defense is to be far, far away from it. Unfortunately, being your luggage it will likely get seperated from you pretty often.'
        },
        {
          'id': 17,
          'title': 'Varita magica',
          'image': {
            'link': 'data/fourth_wall/img/magic_wand.jpg',
            'altText': 'Varita magica'
          },
          'value': -24,
          'text': 'Congratulations! You\'reee wizard/witch! You\'re granted a wand best suited to you and the skills of an averege 7 year Hogwarts graduate, but you can always improve. You\'re not much better than a muggle without your wand though.'
        },
        {
          'id': 18,
          'title': 'Cordial de Lucy',
          'image': {
            'link': 'data/fourth_wall/img/lucys_cordial.jpg',
            'altText': 'Cordial de Lucy'
          },
          'value': -12,
          'text': 'A small bottle about the size of a hipflask made from the juice of the Fire-Flowers that grew in the montains of the Sun. A few drops will cure any ailment and can bring someone back from the brink of death. can\'t be refilled unfortunately.'
        },
        {
          'id': 19,
          'title': 'Spartan Laser',
          'image': {
            'link': 'data/fourth_wall/img/spartan_laser.png',
            'altText': 'Spartan Laser'
          },
          'value': -9,
          'text': 'A big laser gun. Can penetrate multiple armoured targets, but takes a couple of seconds to fire.'
        },
        {
          'id': 21,
          'title': 'Shardblade',
          'image': {
            'link': 'data/fourth_wall/img/shardblade.jpg',
            'altText': 'Shardblade'
          },
          'value': -13,
          'text': 'A powerful sword that can cut through any non living matter with ease. If it cuts living matter it is said to serve the soul, with killing blows leaving no mark eceppt for the vitims eyes burning out, and non fatal blows rendering the limbs or organs struck useless. Can be dispelled and resummoned at will, after an initial 5 day bonding period where the sword cannot leave your side. It take ten heartbeats for the blade to form however. Once bound to someone the blade can only be relenquished willingly or thorough death. It weighs very little, but requires as much training to use as any other sword'
        },
        {
          'id': 22,
          'title': 'Shardplate',
          'image': {
            'link': 'data/fourth_wall/img/shardplate.jpg',
            'altText': 'Shardplate'
          },
          'value': -4,
          'text': 'A powerful suit armour that grants enhanced strenght, speed and agility, as well as excellent protection and confort. Its not indestructable though, and heavy blows can crack or even shatter sections of it. removing enhancements from that area and rendering it vulnerable. In the abssence of Highstorms (so far) the plate will naturally regenerate over time, so long as a single piece remains. Can be triky to put on without help or super strenght.'
        },
        {
          'id': 23,
          'title': 'Shardbearer',
          'image': {
            'link': 'data/fourth_wall/img/shardbarer.jpg',
            'altText': 'Shardbearer'
          },
          'value': -4,
          'text': 'You get both the Shardblade and the Shardplate.'
        },
        {
          'id': 24,
          'title': 'Anillo de poder de linterna verde',
          'image': {
            'link': 'data/fourth_wall/img/green_lantern_power_ring.jpg',
            'altText': 'Anillo de poder de linterna verde'
          },
          'value': -70,
          'text': 'This incredible object allows the wearer to create any solid, hard light constructs that ca imagine. It is also capable of firing projectiles, and advanced use shows its capable of manipulating fundamental forces and energies. It will generate a spandex-y suit around you from most enviromental damage and allowing flight, even in space. It does require charging however, with more complex constructs or uses draining more energy. It comes with a Power Battery shaped like a green lantern which you can charge it from. Whilst the ring is only extremely durable. Good luck finding a replacement battery.'
        },
        {
          'id': 25,
          'title': 'Traje de Iron Man',
          'image': {
            'link': 'data/fourth_wall/img/iron_man_suit.jpg',
            'altText': 'Traje de Iron Man'
          },
          'value': -27,
          'text': 'A feat of human engineering, this suit grants advance protection capable of shrugging off a tank blast, flight at an easy cruising speed of Mach 2-3, as well as able to stretch to Mach 5 in bursts, a swis army knife as weapons, both leathal and non lethal, a fancy user interface, and a helpful AI to assist you. Powered by an arc reactor, it won\'t run out of power in your life time unless it takes critical damage. <br> It comes with knowlage of how to maintaiin and repair it, but not material or components. If You\'re persistent you might be able to figure out how to upgrade it or even build more.'
        },
        {
          'id': 26,
          'title': 'Guia para la galaxia de Hitchhiker',
          'image': {
            'link': 'data/fourth_wall/img/galaxy_guide.jpg',
            'altText': 'Guia para la galaxia de Hitchhiker'
          },
          'value': -1,
          'text': 'Theres a whole Galaxy out tthere to explore now if you felt like it, and this friendly guide will provide you with information thats largely more useful than accurate. Even if you don\'t fell like it...Well the Galaxy might end up coming to you.'
        }
      ]
    },
    {
      'id': 3,
      'type': 'transport',
      'title': 'Transporte',
      'description': 'Como los artefactos pero usados para moverse por el universo.',
      'cards': [
        {
          'id': 27,
          'title': 'Hoverboard',
          'image': {
            'link': 'data/fourth_wall/img/hoverboard.png',
            'altText': 'Hoverboard'
          },
          'value': -2,
          'text': 'Viaja con estilo sobre todos los terrenos. ¡Capaz de ir sobre el agua! Impulsado por tu propio momentum.'
        },
        {
          'id': 28,
          'title': 'Shadowfax',
          'image': {
            'link': 'data/fourth_wall/img/shadowfax.jpg',
            'altText': 'Shadowfax'
          },
          'value': -4,
          'text': 'El señor de todos los caballos, Shadowfox esta en el punto mas alto, al que un caballo puede ascender. El mas rapido, robusto, aguante y el mejor temperament de todos los caballos. Increiblemnte inteligente, capaz de comprender el lenguaje humano. Mitad salvaje, mitad magico puede abrirse camino hasta donde estes si lo llamas, siempre y cuando estes en el mismo planeta.'
        },
        {
          'id': 29,
          'title': 'Elefante guerrero psíquico ancestral',
          'image': {
            'link': 'data/fourth_wall/img/ancient_psychic_tandem_war_elephant.png',
            'altText': 'Elefante guerrero psíquico ancestral'
          },
          'value': -4,
          'text': 'Una misteriosa criatura que desea solo ser tu sirviente. Se comunica telepaticamente, vuela y tiene dos acientos, posiblemente tenga otros poderes misteriosos.'
        },
        {
          'id': 30,
          'title': 'Batimóvil',
          'image': {
            'link': 'data/fourth_wall/img/batmobile.jpg',
            'altText': 'Batimóvil'
          },
          'value': -9,
          'text': 'Es el Batimóvil. Puedes elegir cualquier era suele ser rapido y lleno de bati-aparatos. La mayoria no letales, anti protestas (y el bati-tiburones por si hay que repeler tiburones), algunos tiene misiles.'
        },
        {
          'id': 31,
          'title': 'Dragon',
          'image': {
            'link': 'data/fourth_wall/img/dragon.jpg',
            'altText': 'Dragon'
          },
          'value': -15,
          'text': 'Un dragon que puedes montar. Lo consigues cuando es un pequeño bebe y puedes montarlo una vez alcance los tres años. Puede escupir fuego, volar y devorar enemigos. Tiena una armadura natural capaz de resistir la mayoria de las pequeñas armas de fuego, ademas de reflectar magia. Tiene la inteligencia de un animal salvaje. Domarlo y controlarlo sera dificil, incluso siendo su "madre".'
        },
        {
          'id': 40,
          'title': 'Aloha \'Oe',
          'image': {
            'link': 'data/fourth_wall/img/aloha_oe.jpg',
            'altText': 'Aloha \'Oe'
          },
          'value': -30,
          'text': 'Una nave espacial. Confortable una vez que añades los muebles, facil de mantener y capaz de viajar mas rapido que la luz. Puede acoger facilmente a tres personas, con espacio para alguna mas. Armado armas laser y esta provisto con una pequeña lanzadera Aloha con forma de Cadillac y el pequeño Yankee hawaiano, un robot preparado para el combate.'
        },
        {
          'id': 32,
          'title': 'Heart of Gold',
          'image': {
            'link': 'data/fourth_wall/img/heart_of_gold.jpg',
            'altText': 'Heart of Gold'
          },
          'value': -42,
          'text': 'Una nave espacial que es impulsada por la imposibilidad del "Heart of Gold" - El motor de laa infinita improbabilidad. Una vez el motor genera una improbabilidad mueve la nave por todos los puntos del universo simultaneamente, permitiendote viajar a cualquier lugar instantaneamente. Hay algunos efectos secundarios, debido a la infinita imposibilidad, cosas imposibles tienden a pasar alrededor de la nave. Debido a la naturaleza de las matematicas que envuelven esta tecnologia, las cosas imposibles se vuelven razonables y tienden a suceder.<br> Esta equipada con personalidad, un ordenador de abordo increiblemente alegre, una puerta demaciado emocionada para abrirte y un robot deprimido.'
        },
        {
          'id': 33,
          'title': 'Sub-Tract Card',
          'image': {
            'link': 'data/fourth_wall/img/substract_card.jpg',
            'altText': 'Sub-Tract Card'
          },
          'value': -16,
          'text': 'Es una carta que permite al portador viajar por el sub-espacio automaticamente. El sub-espacio permite al viajero pasar entre puertas distribuidas aleatoriamente por el universo. El espacio entre puertas que se encuentra en el sub-espacio es distinto al espacio normal y si lo exploras puede proveerte con valiosos atajos. Ademas se te provee con el conocimiento para encontrar nuevas puertas, aun asi deberas descubrir los caminos por ti mismo.'
        }
      ]
    },
    {
      'id': 4,
      'type': 'enemies',
      'title': 'Enemigos',
      'description': '¿Quieres mas puntos? ¡Elije algunos enemigos!',
      'cards': [
        {
          'id': 34,
          'title': 'The Wither',
          'image': {
            'link': 'data/fourth_wall/img/the_wither.jpg',
            'altText': 'The Wither'
          },
          'value': 5,
          'text': 'El Wither es invocado en algun lugar del universo, lentamente se acerca a ti. Si no estas preparado este enemigo puede arruinarte el dia, pero no es particularmente dificil escapar de el, facil de distraer. Causara muchisima destruccion y matara todo lo que este a su paso. Puede flotar y disparar proyectiles que explotan envenenando todo lo que esta cerca. '
        },
        {
          'id': 35,
          'title': 'Goa\'uld',
          'image': {
            'link': 'data/fourth_wall/img/Goa_uld.jpg',
            'altText': 'Goa\'uld'
          },
          'value': 15,
          'text': 'Una raza parasitica de aliens que entran en un cuerpo y elimina la consciencia, tomando el mando sobre el cuerpo y dejando al sujeto como un mero observador de sus acciones involuntarias. Pueden ser humanos y otro tipo de especies las que infecten. Ademas otorgan al cuerpo con fuerza y resistencia aumentadas. Se creen dioses, y ademas creen todas que todas las especies son inferiores y deben arodillarse o ser destruidas. Tienen acceso a tecnologia alienigena, pero son megalomaniacos, no muy imaginativos y con una mente muy rigida. Ven en ti una gran oportunidad, no pararan hasta conseguir infectarse y hacerse con tu cuerpo.'

        },
        {
          'id': 36,
          'title': 'El guason',
          'image': {
            'link': 'data/fourth_wall/img/the_jocker.jpg',
            'altText': 'El guason'
          },
          'value': 20,
          'text': 'Inteligente y no hay barrera que no cruzara. Increiblemente loco. Esta obsecionado contigo, no te matara pero quiere romperte mentalmente. Almenos es mortal...'
        },
        {
          'id': 37,
          'title': 'Tu contrario',
          'image': {
            'link': 'data/fourth_wall/img/mirror_you.jpg',
            'altText': 'Tu contrario'
          },
          'value': 20,
          'text': 'Una version malvada de ti, o en caso de que ya seas un oscuro personaje un heroe que te combatira.'
        },
        {
          'id': 38,
          'title': 'SCP-682',
          'image': {
            'link': 'data/fourth_wall/img/SCP-682.jpg',
            'altText': 'SCP-682'
          },
          'value': 40,
          'text': 'SCP-682 es largo, ligeramente parecido a un reptil de origen desconocido. Parece ser increiblemente inteligente y se han observado complejas comunicaciones con otros seres durante las limitadas iteracciones. Ademas se observa un odio hacia toda la vida, especialmente hacia ti.'
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
          'title': 'Protagonista',
          'image': {
            'link': 'data/fourth_wall/img/protagonist.jpg',
            'altText': 'Protagonista'
          },
          'value': -200,
          'text': 'Si quieres ser aburrido puedes convertirte en el personaje principal. El mundo gira a tu alrededor, las relaciones amorosas salen bajo las piedras en tu busca, los problemas saltan a ti como a cualquier buen protagonista (nada que no puedas aguantar), engaños y misterios te esperan en cada esquina ademas de tener una fascinante historia que gira en torno a tu persona. Incluso en el singular evento que murieras alguien encontraria la forma de rescatarte de las manos del mismisimo hades.'
        }

      ]
    }

  ]
}
reloadGame()
