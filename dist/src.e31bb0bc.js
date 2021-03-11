// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../FishEyeDataFR.json":[function(require,module,exports) {
module.exports = {
  "photographers": [{
    "name": "Mimi Keel",
    "id": 243,
    "city": "London",
    "country": "UK",
    "tags": ["portrait", "events", "travel", "animals"],
    "tagline": "Voir le beau dans le quotidien",
    "price": 400,
    "portrait": "MimiKeel.jpg"
  }, {
    "name": "Ellie-Rose Wilkens",
    "id": 930,
    "city": "Paris",
    "country": "France",
    "tags": ["sport", "architecture"],
    "tagline": "Capturer des compositions complexes",
    "price": 250,
    "portrait": "EllieRoseWilkens.jpg"
  }, {
    "name": "Tracy Galindo",
    "id": 82,
    "city": "Montreal",
    "country": "Canada",
    "tags": ["art", "fashion", "events"],
    "tagline": "Photographe freelance",
    "price": 500,
    "portrait": "TracyGalindo.jpg"
  }, {
    "name": "Nabeel Bradford",
    "id": 527,
    "city": "Mexico City",
    "country": "Mexico",
    "tags": ["travel", "portrait"],
    "tagline": "Toujours aller de l'avant",
    "price": 350,
    "portrait": "NabeelBradford.jpg"
  }, {
    "name": "Rhode Dubois",
    "id": 925,
    "city": "Barcelona",
    "country": "Spain",
    "tags": ["sport", "fashion", "events", "animals"],
    "tagline": "Je crée des souvenirs",
    "price": 275,
    "portrait": "RhodeDubois.jpg"
  }, {
    "name": "Marcel Nikolic",
    "id": 195,
    "city": "Berlin",
    "country": "Germany",
    "tags": ["travel", "architecture"],
    "tagline": "Toujours à la recherche de LA photo",
    "price": 300,
    "portrait": "MarcelNikolic.jpg"
  }],
  "media": [{
    "id": 342550,
    "photographerId": 82,
    "image": "Fashion_Yellow_Beach.jpg",
    "tags": ["fashion"],
    "likes": 62,
    "date": "2011-12-08",
    "price": 55,
    "altText": "Yellow weared girl"
  }, {
    "id": 8520927,
    "photographerId": 82,
    "image": "Fashion_Urban_Jungle.jpg",
    "tags": ["fashion"],
    "likes": 11,
    "date": "2011-11-06",
    "price": 55,
    "altText": "Blond girl green weared"
  }, {
    "id": 9025895,
    "photographerId": 82,
    "image": "Fashion_Pattern_on_Pattern.jpg",
    "tags": ["fashion"],
    "likes": 72,
    "date": "2013-08-12",
    "price": 55,
    "altText": "Striped jacket girl"
  }, {
    "id": 9275938,
    "photographerId": 82,
    "image": "Event_WeddingGazebo.jpg",
    "tags": ["events"],
    "likes": 69,
    "date": "2018-02-22",
    "price": 55,
    "altText": "Wedding gazebo"
  }, {
    "id": 2053494,
    "photographerId": 82,
    "image": "Event_Sparklers.jpg",
    "tags": ["events"],
    "likes": 2,
    "date": "2020-05-25",
    "price": 55,
    "altText": "Sparklers in wedding"
  }, {
    "id": 7324238,
    "photographerId": 82,
    "image": "Event_18thAnniversary.jpg",
    "tags": ["events"],
    "likes": 33,
    "date": "2019-06-12",
    "price": 55,
    "altText": "Event of 18th anniversary"
  }, {
    "id": 8328953,
    "photographerId": 82,
    "video": "Art_Wooden_Horse_Sculpture.mp4",
    "tags": ["art"],
    "likes": 24,
    "date": "2011-12-08",
    "price": 100,
    "altText": "Art wooden horse sculpture"
  }, {
    "id": 7502053,
    "photographerId": 82,
    "image": "Art_Triangle_Man.jpg",
    "tags": ["art"],
    "likes": 88,
    "date": "2007-05-07",
    "price": 55,
    "altText": "Art triangle man"
  }, {
    "id": 8523492,
    "photographerId": 82,
    "image": "Art_Purple_light.jpg",
    "tags": ["art"],
    "likes": 24,
    "date": "2018-05-05",
    "price": 55,
    "altText": "Grafiti in a corridor"
  }, {
    "id": 75902334,
    "photographerId": 82,
    "image": "Art_Mine.jpg",
    "tags": ["art"],
    "likes": 75,
    "date": "2019-11-25",
    "price": 55,
    "altText": "Multiple blue and red ducks"
  }, {
    "id": 73852953,
    "photographerId": 925,
    "image": "Sport_2000_with_8.jpg",
    "tags": ["sport"],
    "likes": 52,
    "date": "2013-02-30",
    "price": 70,
    "altText": "Canoë in team"
  }, {
    "id": 92758372,
    "photographerId": 925,
    "image": "Fashion_Wings.jpg",
    "tags": ["fashion"],
    "likes": 58,
    "date": "2018-07-17",
    "price": 70,
    "altText": "Two mannequin wings imitate"
  }, {
    "id": 32958383,
    "photographerId": 925,
    "image": "Fashion_Melody_Red_on_Stripes.jpg",
    "tags": ["fashion"],
    "likes": 11,
    "date": "2019-08-12",
    "price": 70,
    "altText": "Red weared girl on stairs"
  }, {
    "id": 928587383,
    "photographerId": 925,
    "image": "Event_VentureConference.jpg",
    "tags": ["events"],
    "likes": 2,
    "date": "2019-01-02",
    "price": 70,
    "altText": "Event venture conference"
  }, {
    "id": 725639493,
    "photographerId": 925,
    "image": "Event_ProductPitchjpg",
    "tags": ["events"],
    "likes": 3,
    "date": "2019-05-20",
    "price": 70,
    "altText": "Event product pitch"
  }, {
    "id": 23394384,
    "photographerId": 925,
    "image": "Event_KeyboardCheck.jpg",
    "tags": ["events"],
    "likes": 52,
    "date": "2019-07-18",
    "price": 70,
    "altText": "Event keyboard check"
  }, {
    "id": 87367293,
    "photographerId": 925,
    "image": "Event_Emcee.jpg",
    "tags": ["events"],
    "likes": 23,
    "date": "2018-02-22",
    "price": 70,
    "altText": "Event emcee"
  }, {
    "id": 593834784,
    "photographerId": 925,
    "image": "Animals_Majesty.jpg",
    "tags": ["animals"],
    "likes": 52,
    "date": "2017-03-13",
    "price": 70,
    "altText": "Deer in forest"
  }, {
    "id": 83958935,
    "photographerId": 925,
    "video": "Animals_Puppiness.mp4",
    "tags": ["animals"],
    "likes": 52,
    "date": "2016-06-12",
    "price": 70,
    "altText": "Puppy in the beach"
  }, {
    "id": 394583434,
    "photographerId": 527,
    "video": "Travel_Rock_Mountains.mp4",
    "tags": ["travel"],
    "likes": 23,
    "date": "2017-03-18",
    "price": 45,
    "altText": "Mountain aerial view"
  }, {
    "id": 343423425,
    "photographerId": 527,
    "image": "Travel_Outdoor_Baths.jpg",
    "tags": ["travel"],
    "likes": 101,
    "date": "2017-04-03",
    "price": 45,
    "altText": "Outdoor baths"
  }, {
    "id": 73434243,
    "photographerId": 527,
    "image": "Travel_Road_into_Hill.jpg",
    "tags": ["travel"],
    "likes": 99,
    "date": "2018-04-30",
    "price": 45,
    "altText": "Road into hill"
  }, {
    "id": 23425523,
    "photographerId": 527,
    "image": "Travel_Bridge_into_Forest.jpg",
    "tags": ["travel"],
    "likes": 34,
    "date": "2016-04-05",
    "price": 45,
    "altText": "Bridge into forest"
  }, {
    "id": 23134513,
    "photographerId": 527,
    "image": "Travel_Boat_Wanderer.jpg",
    "tags": ["travel"],
    "likes": 23,
    "date": "2017-03-18",
    "price": 45,
    "altText": "Boat wanderer"
  }, {
    "id": 92352352,
    "photographerId": 527,
    "image": "Portrait_Sunkissed.jpg",
    "tags": ["portrait"],
    "likes": 66,
    "date": "2018-05-24",
    "price": 45,
    "altText": "Portrait sunkisses"
  }, {
    "id": 34513453,
    "photographerId": 527,
    "image": "Portrait_Shaw.jpg",
    "tags": ["portait"],
    "likes": 52,
    "date": "2017-04-21",
    "price": 45,
    "altText": "Portrait Shaw"
  }, {
    "id": 23523533,
    "photographerId": 527,
    "image": "Portrait_Alexandra.jpg",
    "tags": ["portait"],
    "likes": 95,
    "date": "2018-11-02",
    "price": 45,
    "altText": "Portrait Alexandra"
  }, {
    "id": 525834234,
    "photographerId": 527,
    "image": "Portrait_AfternoonBreak.jpg",
    "tags": ["portait"],
    "likes": 25,
    "date": "2019-01-02",
    "price": 45,
    "altText": "Portrait afternoonBreak"
  }, {
    "id": 623534343,
    "photographerId": 243,
    "image": "Travel_Lonesome.jpg",
    "tags": ["travel"],
    "likes": 88,
    "date": "2019-02-03",
    "price": 45,
    "altText": "Lonesome"
  }, {
    "id": 625025343,
    "photographerId": 243,
    "image": "Travel_HillsideColor.jpg",
    "tags": ["travel"],
    "likes": 85,
    "date": "2019-04-03",
    "price": 45,
    "altText": "Burano's colored houses"
  }, {
    "id": 2525345343,
    "photographerId": 243,
    "image": "Portrait_Wednesday.jpg",
    "tags": ["portait"],
    "likes": 34,
    "date": "2019-04-07",
    "price": 45,
    "altText": "Portrait Wednesday"
  }, {
    "id": 2523434634,
    "photographerId": 243,
    "image": "Portrait_Nora.jpg",
    "tags": ["portait"],
    "likes": 63,
    "date": "2019-04-07",
    "price": 45,
    "altText": "Portrait Nora"
  }, {
    "id": 398847109,
    "photographerId": 243,
    "image": "Portrait_Background.jpg",
    "tags": ["portait"],
    "likes": 55,
    "date": "2019-06-20",
    "price": 45,
    "altText": "Portrait black and white"
  }, {
    "id": 2534342,
    "photographerId": 243,
    "image": "Event_SeasideWedding.jpg",
    "tags": ["events"],
    "likes": 25,
    "date": "2019-06-21",
    "price": 45,
    "altText": "Sea side Wedding"
  }, {
    "id": 65235234,
    "photographerId": 243,
    "image": "Event_PintoWedding.jpg",
    "tags": ["events"],
    "likes": 52,
    "date": "2019-06-25",
    "price": 45,
    "altText": "Pinto Wedding"
  }, {
    "id": 23523434,
    "photographerId": 243,
    "image": "Event_BenevidesWedding.jpg",
    "tags": ["events"],
    "likes": 77,
    "date": "2019-06-28",
    "price": 45,
    "altText": "Benevides Wedding"
  }, {
    "id": 5234343,
    "photographerId": 243,
    "video": "Animals_Wild_Horses_in_the_mountains.mp4",
    "tags": ["animals"],
    "likes": 142,
    "date": "2019-08-23",
    "price": 60,
    "altText": "Wild Horses in the mountains"
  }, {
    "id": 95234343,
    "photographerId": 243,
    "image": "Animals_Rainbow.jpg",
    "tags": ["animals"],
    "likes": 59,
    "date": "2019-07-02",
    "price": 60,
    "altText": "Rainbow colored bird"
  }, {
    "id": 52343416,
    "photographerId": 195,
    "image": "Travel_Tower.jpg",
    "tags": ["travel"],
    "likes": 25,
    "date": "2019-04-03",
    "price": 60,
    "altText": "Chinese tower"
  }, {
    "id": 2523434,
    "photographerId": 195,
    "image": "Travel_SunsetonCanals.jpg",
    "tags": ["travel"],
    "likes": 53,
    "date": "2019-05-06",
    "price": 60,
    "altText": "Sunset on Venetian canal"
  }, {
    "id": 95293534,
    "photographerId": 195,
    "image": "Travel_OpenMountain.jpg",
    "tags": ["travel"],
    "likes": 33,
    "date": "2019-05-12",
    "price": 60,
    "altText": "Lake forest and mountain"
  }, {
    "id": 356234343,
    "photographerId": 195,
    "image": "Travel_Bike_and_Stair.jpg",
    "tags": ["travel"],
    "likes": 53,
    "date": "2019-06-20",
    "price": 60,
    "altText": "Bike beside parisian stairs"
  }, {
    "id": 235234343,
    "photographerId": 195,
    "image": "Travel_Adventure_Door.jpg",
    "tags": ["travel"],
    "likes": 63,
    "date": "2019-06-26",
    "price": 60,
    "altText": "Turkish door"
  }, {
    "id": 6234234343,
    "photographerId": 195,
    "image": "Architecture_Contrast.jpg",
    "tags": ["architecture"],
    "likes": 52,
    "date": "2019-06-30",
    "price": 60,
    "altText": "Synagogue"
  }, {
    "id": 6525666253,
    "photographerId": 195,
    "image": "Architecture_On_a_hill.jpg",
    "tags": ["architecture"],
    "likes": 63,
    "date": "2019-07-20",
    "price": 60,
    "altText": "Houses on a hill"
  }, {
    "id": 98252523433,
    "photographerId": 195,
    "image": "Architecture_Dome.jpg",
    "tags": ["architecture"],
    "likes": 88,
    "date": "2020-01-05",
    "price": 60,
    "altText": "Pisa tower"
  }, {
    "id": 9259398453,
    "photographerId": 195,
    "video": "Architecture_coverr_circle_empty_highway_in_buenos_aires_587740985637.mp4",
    "tags": ["architecture"],
    "likes": 57,
    "date": "2020-01-20",
    "price": 65,
    "altText": "Aerial video traffic"
  }, {
    "id": 3523523534,
    "photographerId": 195,
    "image": "Architecture_Corner_Room.jpg",
    "tags": ["architecture"],
    "likes": 54,
    "date": "2020-05-05",
    "price": 60,
    "altText": "Corner Room"
  }, {
    "id": 952343423,
    "photographerId": 930,
    "video": "Sport_Tricks_in_the_air.mp4",
    "tags": ["sport"],
    "likes": 150,
    "date": "2018-02-30",
    "price": 70,
    "altText": "Tricks in the air"
  }, {
    "id": 235234343,
    "photographerId": 930,
    "image": "Sport_Next_Hold.jpg",
    "tags": ["sport"],
    "likes": 101,
    "date": "2018-03-05",
    "price": 65,
    "altText": "A girl climbing"
  }, {
    "id": 235343222,
    "photographerId": 930,
    "image": "sport_water_tunnel.jpg",
    "tags": ["sport"],
    "likes": 103,
    "date": "2018-03-10",
    "price": 70,
    "altText": "Man surfing in a tub"
  }, {
    "id": 7775342343,
    "photographerId": 930,
    "image": "Sport_Sky_Cross.jpg",
    "tags": ["sport"],
    "likes": 77,
    "date": "2018-04-16",
    "price": 50,
    "altText": "Man tricks with ski"
  }, {
    "id": 9253445784,
    "photographerId": 930,
    "image": "Sport_Race_End.jpg",
    "tags": ["sport"],
    "likes": 88,
    "date": "2018-04-22",
    "price": 65,
    "altText": "Women sprint in a race"
  }, {
    "id": 22299394,
    "photographerId": 930,
    "image": "Sport_Jump.jpg",
    "tags": ["sport"],
    "likes": 95,
    "date": "2018-04-27",
    "price": 70,
    "altText": "Man tricks on skatebord"
  }, {
    "id": 3452342633,
    "photographerId": 930,
    "image": "Architecture_White_Light.jpg",
    "tags": ["architecture"],
    "likes": 52,
    "date": "2018-05-03",
    "price": 75,
    "altText": "Architecture white light"
  }, {
    "id": 939234243,
    "photographerId": 930,
    "image": "Architecture_Water_on_Modern.jpg",
    "tags": ["architecture"],
    "likes": 55,
    "date": "2018-05-10",
    "price": 72,
    "altText": "Architecture water on modern"
  }, {
    "id": 222959233,
    "photographerId": 930,
    "image": "Architecture_Horseshoe.jpg",
    "tags": ["architecture"],
    "likes": 85,
    "date": "2018-05-15",
    "price": 71,
    "altText": "Architecture Horseshoe"
  }, {
    "id": 965933434,
    "photographerId": 930,
    "image": "Architecture_Cross_Bar.jpg",
    "tags": ["architecture"],
    "likes": 66,
    "date": "2018-05-20",
    "price": 58,
    "altText": "Architecture Cross Bar"
  }, {
    "id": 777723343,
    "photographerId": 930,
    "image": "Architecture_Connected_Curves.jpg",
    "tags": ["architecture"],
    "likes": 79,
    "date": "2018-05-21",
    "price": 80,
    "altText": "Architecture connected curves"
  }]
};
},{}],"component/infoMainPage/TagFactory.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _FishEyeDataFR = _interopRequireDefault(require("./../../../FishEyeDataFR.json"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var TagFactory = /*#__PURE__*/function () {
  function TagFactory() {
    _classCallCheck(this, TagFactory);
  }

  _createClass(TagFactory, null, [{
    key: "create",
    value: function create(_ref) {
      var tag = _ref.tag;
      var spanNav = document.createElement("span");
      var linkNav = document.createElement("a");
      spanNav.classList.add("tag");
      spanNav.setAttribute("role", "Links");
      linkNav.href = "#";
      linkNav.setAttribute("aria-label", "Tag");
      spanNav.appendChild(linkNav);
      linkNav.innerHTML = "#" + tag;
      linkNav.addEventListener('click', TagFactory.sortProfile);
      return spanNav;
    } //sorting profiles with hashtags

  }, {
    key: "sortProfile",
    value: function sortProfile(e) {
      var tag = e.target.innerHTML;
      tag = tag.toLowerCase().substring(1, tag.length);

      var photographers = _FishEyeDataFR.default.photographers.map(function (item) {
        return item;
      });

      var idArray = []; // if the tag on navbar is the same of profile tag the profile stay displayed

      photographers.map(function (photographer) {
        var photographerProfile = document.querySelector("#profile-".concat(photographer.id));

        if (photographer.tags.includes(tag) === false) {
          idArray.push(photographer.id);
        }

        photographerProfile.style.removeProperty("display");
      }); // if the profile haven't the clicked tag, it's deleted

      idArray.forEach(function (id) {
        var photographerCard = document.querySelector("#profile-".concat(id));
        photographerCard.style.display = "none";
      }); // make appear profile by clicking tag again

      e.target.addEventListener("click", function () {
        idArray.forEach(function (id) {
          var photographerCard = document.querySelector("#profile-".concat(id));

          if (photographerCard.style.display === "none") {
            photographerCard.style.display = "block";
          } else {
            photographerCard.style.display = "none";
          }
        });
      });
    }
  }]);

  return TagFactory;
}();

exports.default = TagFactory;
},{"./../../../FishEyeDataFR.json":"../FishEyeDataFR.json"}],"component/infoMainPage/Header.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _TagFactory = _interopRequireDefault(require("./TagFactory"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Header = /*#__PURE__*/function () {
  function Header() {
    _classCallCheck(this, Header);
  }

  _createClass(Header, null, [{
    key: "create",
    value: function create() {
      var headerNav = document.createElement("nav");
      var header = document.createElement("header");
      var logoLink = document.createElement('a');
      var logoImg = document.createElement('img');
      var tags = Header.tags.map(function (tag) {
        return tag;
      });
      logoLink.href = "index.html";
      logoImg.src = "./logo.png";
      logoImg.alt = "Fisheye Home page";
      logoLink.setAttribute("aria-label", "ImageLink");

      for (var i = 0; i < tags.length; i++) {
        var tag = tags[i];

        var spanTags = _TagFactory.default.create({
          tag: tag
        });

        headerNav.appendChild(spanTags);
      }

      header.classList.add("header");
      document.body.prepend(header);
      logoLink.appendChild(logoImg);
      header.appendChild(logoLink);
      header.appendChild(headerNav);
      return header;
    } //tags reference

  }]);

  return Header;
}();

exports.default = Header;

_defineProperty(Header, "tags", ["Portrait", "Art", "Fashion", "Architecture", "Travel", "Sport", "Animals", "Events"]);
},{"./TagFactory":"component/infoMainPage/TagFactory.js"}],"component/infoMainPage/AvatarFactory.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var AvatarFactory = /*#__PURE__*/function () {
  function AvatarFactory() {
    _classCallCheck(this, AvatarFactory);
  }

  _createClass(AvatarFactory, null, [{
    key: "create",
    value: function create(nameClass, photographer) {
      var path = "/SamplePhotos/Photographers_ID_Photos/";
      var IDImg = document.createElement("img");
      IDImg.classList.add(nameClass, "img-".concat(photographer.id));
      IDImg.src = path + photographer.portrait;
      IDImg.alt = "photo profil de ".concat(photographer.name);
      return IDImg;
    }
  }]);

  return AvatarFactory;
}();

exports.default = AvatarFactory;
},{}],"component/infoMainPage/Infofactory.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var InfoFactory = /*#__PURE__*/function () {
  function InfoFactory() {
    _classCallCheck(this, InfoFactory);
  }

  _createClass(InfoFactory, null, [{
    key: "create",
    value: function create(nameClass, role, content) {
      var profileInfo = document.createElement('p');
      profileInfo.classList.add(nameClass);
      profileInfo.setAttribute("role", role);
      profileInfo.innerHTML = content;
      return profileInfo;
    }
  }]);

  return InfoFactory;
}();

exports.default = InfoFactory;
},{}],"component/infoMainPage/Profiletags.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ProfileTags = /*#__PURE__*/function () {
  function ProfileTags() {
    _classCallCheck(this, ProfileTags);
  }

  _createClass(ProfileTags, null, [{
    key: "create",
    value: function create(parent, photographer) {
      photographer.tags.map(function (tag) {
        var profileSpan = document.createElement('span');
        profileSpan.setAttribute("role", "Tag");
        profileSpan.classList.add("tag");
        profileSpan.innerHTML = "#" + tag;
        parent.appendChild(profileSpan);
      });
    }
  }]);

  return ProfileTags;
}();

exports.default = ProfileTags;
},{}],"component/infoMainPage/TitleFactory.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var TitleFactory = /*#__PURE__*/function () {
  function TitleFactory() {
    _classCallCheck(this, TitleFactory);
  }

  _createClass(TitleFactory, null, [{
    key: "create",
    value: function create(title, content, nameClass) {
      var mainTitle = document.createElement(title);
      mainTitle.classList.add(nameClass);
      mainTitle.innerHTML = content;
      return mainTitle;
    }
  }]);

  return TitleFactory;
}();

exports.default = TitleFactory;
},{}],"component/infoProfile/ButtonFactory.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ButtonFactory = /*#__PURE__*/function () {
  function ButtonFactory() {
    _classCallCheck(this, ButtonFactory);
  }

  _createClass(ButtonFactory, null, [{
    key: "create",
    value: function create(nameClass, content) {
      var btnContact = document.createElement("button");
      btnContact.classList.add(nameClass);
      btnContact.innerHTML = content;
      return btnContact;
    }
  }]);

  return ButtonFactory;
}();

exports.default = ButtonFactory;
},{}],"component/infoProfile/LabelFactory.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var LabelFactory = /*#__PURE__*/function () {
  function LabelFactory() {
    _classCallCheck(this, LabelFactory);
  }

  _createClass(LabelFactory, null, [{
    key: "create",
    value: function create(nameClass, content, id) {
      var Label = document.createElement("label");
      Label.classList.add(nameClass);
      Label.innerHTML = content;
      Label.setAttribute("for", id);
      return Label;
    }
  }]);

  return LabelFactory;
}();

exports.default = LabelFactory;
},{}],"component/infoProfile/InputFactory.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var InputFactory = /*#__PURE__*/function () {
  function InputFactory() {
    _classCallCheck(this, InputFactory);
  }

  _createClass(InputFactory, null, [{
    key: "create",
    value: function create(type, id) {
      var input = document.createElement("input");
      input.type = type;
      input.classList.add("input-form");
      input.id = id;
      return input;
    }
  }]);

  return InputFactory;
}();

exports.default = InputFactory;
},{}],"component/infoProfile/OverlayFactory.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var OverlayFactory = /*#__PURE__*/function () {
  function OverlayFactory() {
    _classCallCheck(this, OverlayFactory);
  }

  _createClass(OverlayFactory, null, [{
    key: "create",
    value: function create() {
      var overlay = document.createElement("section");
      overlay.classList.add("overlay-contact");
      document.querySelector(".main").appendChild(overlay);
      return overlay;
    }
  }]);

  return OverlayFactory;
}();

exports.default = OverlayFactory;
},{}],"component/infoProfile/TextAreaFactory.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var TextAreaFactory = /*#__PURE__*/function () {
  function TextAreaFactory() {
    _classCallCheck(this, TextAreaFactory);
  }

  _createClass(TextAreaFactory, null, [{
    key: "create",
    value: function create(id) {
      var textInput = document.createElement("textarea");
      textInput.classList.add("input-form");
      textInput.id = id;
      return textInput;
    }
  }]);

  return TextAreaFactory;
}();

exports.default = TextAreaFactory;
},{}],"component/infoProfile/Form.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Form = /*#__PURE__*/function () {
  function Form() {
    _classCallCheck(this, Form);
  }

  _createClass(Form, null, [{
    key: "create",
    value: function create() {
      var form = document.createElement("form");
      form.classList.add("contact-form");
      return form;
    }
  }]);

  return Form;
}();

exports.default = Form;
},{}],"component/infoProfile/FormFactory.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _LabelFactory = _interopRequireDefault(require("./LabelFactory"));

var _TitleFactory = _interopRequireDefault(require("../infoMainPage/TitleFactory"));

var _ButtonFactory = _interopRequireDefault(require("./ButtonFactory"));

var _InputFactory = _interopRequireDefault(require("./InputFactory"));

var _OverlayFactory = _interopRequireDefault(require("./OverlayFactory"));

var _TextAreaFactory = _interopRequireDefault(require("./TextAreaFactory"));

var _Form = _interopRequireDefault(require("./Form"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var FormFactory = /*#__PURE__*/function () {
  function FormFactory() {
    _classCallCheck(this, FormFactory);
  }

  _createClass(FormFactory, null, [{
    key: "create",
    value: function create(photographer) {
      return FormFactory.createFormDetails(photographer);
    }
  }, {
    key: "createFormDetails",
    value: function createFormDetails(photographer) {
      var overlay = _OverlayFactory.default.create();

      var form = _Form.default.create();

      var titleForm = _TitleFactory.default.create("h2", "Contactez moi ".concat(photographer.name), "title-form");

      var closeBtn = _ButtonFactory.default.create("btn-close", "<i class='fas fa-times'></i>");

      var firstName = _LabelFactory.default.create("label-form", "Prenom", "firstname");

      var firstNameInput = _InputFactory.default.create("text", "firstname");

      var lastName = _LabelFactory.default.create("label-form", "Nom", "lastname");

      var lastNameInput = _InputFactory.default.create("text", "lastname");

      var mail = _LabelFactory.default.create("label-form", "Email", "email");

      var emailInput = _InputFactory.default.create("email", "email");

      var message = _LabelFactory.default.create("label-form", "Votre message", "text");

      var messageInput = _TextAreaFactory.default.create("text");

      var sendingBtn = _ButtonFactory.default.create("btn-contact", "Envoyer");

      var closeOverlay = function closeOverlay(e) {
        e.preventDefault();
        overlay.remove();
      };

      var sendingMessage = function sendingMessage(e) {
        e.preventDefault();
        var form = document.querySelector(".contact-form");
        var firstNameInput = document.getElementById("firstname");
        var lastNameInput = document.getElementById("lastname");
        var emailInput = document.getElementById("email");
        var textInput = document.getElementById("text");
        console.log("Nom de l'utilisateur: " + firstNameInput.value + "\n" + "Prénom de l'utilisateur: " + lastNameInput.value + "\n" + "E-mail de l'utilisateur: " + emailInput.value + "\n" + "Message de l'utilisateur: " + textInput.value);
        form.reset();
      };

      sendingBtn.addEventListener("click", sendingMessage);
      closeBtn.addEventListener("click", closeOverlay);
      overlay.appendChild(form);
      form.appendChild(titleForm);
      form.appendChild(closeBtn);
      form.appendChild(firstName);
      form.appendChild(firstNameInput);
      form.appendChild(lastName);
      form.appendChild(lastNameInput);
      form.appendChild(mail);
      form.appendChild(emailInput);
      form.appendChild(message);
      form.appendChild(messageInput);
      form.appendChild(sendingBtn);
      return overlay;
    }
  }]);

  return FormFactory;
}();

exports.default = FormFactory;
},{"./LabelFactory":"component/infoProfile/LabelFactory.js","../infoMainPage/TitleFactory":"component/infoMainPage/TitleFactory.js","./ButtonFactory":"component/infoProfile/ButtonFactory.js","./InputFactory":"component/infoProfile/InputFactory.js","./OverlayFactory":"component/infoProfile/OverlayFactory.js","./TextAreaFactory":"component/infoProfile/TextAreaFactory.js","./Form":"component/infoProfile/Form.js"}],"component/infoProfile/InfoProfileFactory.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _AvatarFactory = _interopRequireDefault(require("../infoMainPage/AvatarFactory"));

var _Infofactory = _interopRequireDefault(require("../infoMainPage/Infofactory"));

var _Profiletags = _interopRequireDefault(require("../infoMainPage/Profiletags"));

var _TitleFactory = _interopRequireDefault(require("../infoMainPage/TitleFactory"));

var _ButtonFactory = _interopRequireDefault(require("./ButtonFactory"));

var _FormFactory = _interopRequireDefault(require("./FormFactory"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var InfoProfileFactory = /*#__PURE__*/function () {
  function InfoProfileFactory() {
    _classCallCheck(this, InfoProfileFactory);
  }

  _createClass(InfoProfileFactory, null, [{
    key: "create",
    value: function create(photographer) {
      return InfoProfileFactory.createProfileDetail(photographer);
    }
  }, {
    key: "createProfileDetail",
    value: function createProfileDetail(photographer) {
      var infoProfile = document.createElement("section");
      infoProfile.classList.add("profileID");

      var profileName = _TitleFactory.default.create("h1", photographer.name, "name");

      profileName.setAttribute("role", "header");

      var profileLocation = _Infofactory.default.create("city", "text", "".concat(photographer.city, " ").concat(photographer.country));

      var profileQuote = _Infofactory.default.create("quote", "text", photographer.tagline);

      var profileButton = _ButtonFactory.default.create("btn-contact", "Contactez-moi");

      var profileAvatar = _AvatarFactory.default.create("img-profile-link", photographer);

      profileButton.addEventListener('click', function () {
        _FormFactory.default.create(photographer);
      });
      infoProfile.appendChild(profileName);
      infoProfile.appendChild(profileLocation);
      infoProfile.appendChild(profileQuote);
      infoProfile.appendChild(profileButton);
      infoProfile.appendChild(profileAvatar);

      _Profiletags.default.create(infoProfile, photographer);

      return infoProfile;
    }
  }]);

  return InfoProfileFactory;
}();

exports.default = InfoProfileFactory;
},{"../infoMainPage/AvatarFactory":"component/infoMainPage/AvatarFactory.js","../infoMainPage/Infofactory":"component/infoMainPage/Infofactory.js","../infoMainPage/Profiletags":"component/infoMainPage/Profiletags.js","../infoMainPage/TitleFactory":"component/infoMainPage/TitleFactory.js","./ButtonFactory":"component/infoProfile/ButtonFactory.js","./FormFactory":"component/infoProfile/FormFactory.js"}],"component/carousel/ArrowFactory.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ArrowFactory = /*#__PURE__*/function () {
  function ArrowFactory() {
    _classCallCheck(this, ArrowFactory);
  }

  _createClass(ArrowFactory, null, [{
    key: "create",
    value: function create(_ref) {
      var left = _ref.left,
          onClick = _ref.onClick,
          right = _ref.right,
          nameClass = _ref.nameClass;
      var arrowElement = document.createElement('button');
      arrowElement.classList.add("btn-lightbox", nameClass);
      arrowElement.addEventListener("click", onClick);

      if (left) {
        arrowElement.innerHTML = "<i class= 'fas fa-chevron-left left-arrow'></i>";
      }

      if (right) {
        arrowElement.innerHTML = "<i class= 'fas fa-chevron-right right-arrow'></i>";
      }

      return arrowElement;
    }
  }]);

  return ArrowFactory;
}();

exports.default = ArrowFactory;
},{}],"component/carousel/CloseFactory.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var CloseFactory = /*#__PURE__*/function () {
  function CloseFactory() {
    _classCallCheck(this, CloseFactory);
  }

  _createClass(CloseFactory, null, [{
    key: "create",
    value: function create(_ref) {
      var onClick = _ref.onClick,
          nameClass = _ref.nameClass;
      var close = document.createElement("button");
      close.classList.add("btn-lightbox", nameClass);
      close.innerHTML = "<i class='fas fa-times'></i>";
      close.addEventListener('click', onClick);
      return close;
    }
  }]);

  return CloseFactory;
}();

exports.default = CloseFactory;
},{}],"component/carousel/CarouselFactory.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _TitleFactory = _interopRequireDefault(require("../infoMainPage/TitleFactory"));

var _ArrowFactory = _interopRequireDefault(require("./ArrowFactory"));

var _CloseFactory = _interopRequireDefault(require("./CloseFactory"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var mediaPath = "./../SamplePhotos";

var CarouselFactory = /*#__PURE__*/function () {
  function CarouselFactory() {
    _classCallCheck(this, CarouselFactory);
  }

  _createClass(CarouselFactory, null, [{
    key: "create",
    value: function create(_ref) {
      var medias = _ref.medias,
          _ref$currentIndex = _ref.currentIndex,
          currentIndex = _ref$currentIndex === void 0 ? 0 : _ref$currentIndex;
      var carouselContainer = document.createElement("div");
      var containerLightBox = document.createElement("div");
      var index = currentIndex;
      var currentMedia = medias[index];
      var imageContainer = document.createElement("img");
      var videoContainer = document.createElement("video");
      var sourceVideo = document.createElement("source");

      var titleImage = _TitleFactory.default.create("h3", currentIndex.altText, "title-photo-gallery");

      var goToLeft = function goToLeft() {
        if (index - 1 < 0) {
          index = medias.length;

          if (index === medias.length) {
            index = 0;
          }
        } else {
          index--;
        }

        currentMedia = medias[index];
        console.log(medias);
        CarouselFactory.isAnImage({
          imageContainer: imageContainer,
          videoContainer: videoContainer,
          sourceVideo: sourceVideo,
          mediaPath: mediaPath,
          currentMedia: currentMedia
        });
      };

      var goToRight = function goToRight() {
        if (index + 1 < 0) {
          index = medias.length;

          if (index === medias.length) {
            index = 0;
          }
        } else {
          index++;
        }

        currentMedia = medias[index];
        CarouselFactory.isAnImage({
          imageContainer: imageContainer,
          videoContainer: videoContainer,
          sourceVideo: sourceVideo,
          mediaPath: mediaPath,
          currentMedia: currentMedia
        });
      };

      var closeWindow = function closeWindow() {
        carouselContainer.remove();
      };

      var arrowLeft = _ArrowFactory.default.create({
        left: true,
        onClick: goToLeft,
        right: false,
        nameClass: "left-arrow"
      });

      var arrowRight = _ArrowFactory.default.create({
        right: true,
        onClick: goToRight,
        left: false,
        nameClass: "right-arrow"
      });

      var closeButton = _CloseFactory.default.create({
        onClick: closeWindow,
        nameClass: "lightbox-close-btn"
      });

      var keyboardEvents = function keyboardEvents(evt) {
        switch (evt.key) {
          case "ArrowLeft":
            goToLeft();
            break;

          case "ArrowRight":
            goToRight();
            break;

          case "Escape":
            closeWindow();
            break;
        }
      };

      window.addEventListener("keydown", keyboardEvents);
      imageContainer.setAttribute('src', "".concat(mediaPath, "/").concat(currentMedia.photographerId, "/").concat(currentMedia.image));
      sourceVideo.src = "".concat(mediaPath, "/").concat(currentMedia.photographerId, "/").concat(currentMedia.video);
      videoContainer.appendChild(sourceVideo);
      containerLightBox.appendChild(imageContainer);
      containerLightBox.appendChild(videoContainer);
      containerLightBox.appendChild(titleImage);
      containerLightBox.classList.add("container-lightbox");
      containerLightBox.setAttribute("aria-label", "image-closeup-view");
      carouselContainer.classList.add("overlay-gallery");
      imageContainer.classList.add("lightbox-media");
      videoContainer.classList.add("lightbox-media");
      carouselContainer.appendChild(containerLightBox);
      carouselContainer.appendChild(closeButton);
      carouselContainer.appendChild(arrowLeft);
      carouselContainer.appendChild(arrowRight);
      return carouselContainer;
    }
  }, {
    key: "isAnImage",
    value: function isAnImage(_ref2) {
      var imageContainer = _ref2.imageContainer,
          videoContainer = _ref2.videoContainer,
          sourceVideo = _ref2.sourceVideo,
          mediaPath = _ref2.mediaPath,
          currentMedia = _ref2.currentMedia;

      if (currentMedia.hasOwnProperty("image")) {
        imageContainer.setAttribute('src', "".concat(mediaPath, "/").concat(currentMedia.photographerId, "/").concat(currentMedia.image));
        videoContainer.style.display = "none";
        imageContainer.style.display = "block";
      } else {
        sourceVideo.src = "".concat(mediaPath, "/").concat(currentMedia.photographerId, "/").concat(currentMedia.video);
        videoContainer.setAttribute("controls", "");
        videoContainer.appendChild(sourceVideo);
        imageContainer.style.display = "none";
        videoContainer.style.display = "block";
      }
    }
  }]);

  return CarouselFactory;
}();

exports.default = CarouselFactory;
},{"../infoMainPage/TitleFactory":"component/infoMainPage/TitleFactory.js","./ArrowFactory":"component/carousel/ArrowFactory.js","./CloseFactory":"component/carousel/CloseFactory.js"}],"component/media/ImageFactory.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ImageFactory = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ImageFactory = /*#__PURE__*/function () {
  function ImageFactory() {
    _classCallCheck(this, ImageFactory);
  }

  _createClass(ImageFactory, null, [{
    key: "create",
    value: function create(_ref) {
      var source = _ref.source,
          text = _ref.text,
          _ref$className = _ref.className,
          className = _ref$className === void 0 ? "media-gallery" : _ref$className;
      var image = document.createElement("img");
      image.classList.add(className);
      image.setAttribute("src", source);
      image.alt = text;
      image.dataset.altText = text;
      return image;
    }
  }]);

  return ImageFactory;
}();

exports.ImageFactory = ImageFactory;
},{}],"component/gallery/SelectFactory.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var SelectFactory = /*#__PURE__*/function () {
  function SelectFactory() {
    _classCallCheck(this, SelectFactory);
  }

  _createClass(SelectFactory, null, [{
    key: "create",
    value: function create(nameClass) {
      var select = document.createElement("select");
      select.classList.add(nameClass);
      return select;
    }
  }]);

  return SelectFactory;
}();

exports.default = SelectFactory;
},{}],"component/media/VideoFactory.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var VideoFactory = /*#__PURE__*/function () {
  function VideoFactory() {
    _classCallCheck(this, VideoFactory);
  }

  _createClass(VideoFactory, null, [{
    key: "create",
    value: function create(_ref) {
      var source = _ref.source,
          altText = _ref.altText;
      var videoGallery = document.createElement("video");
      videoGallery.addEventListener('click', function () {
        videoGallery.setAttribute("controls", "");
      });
      videoGallery.dataset.altText = altText;
      var sourceVideoGallery = document.createElement("source");
      sourceVideoGallery.src = source;
      videoGallery.appendChild(sourceVideoGallery);
      return videoGallery;
    }
  }]);

  return VideoFactory;
}();

exports.default = VideoFactory;
},{}],"component/gallery/DateTimeFactory.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var DatetimeFactory = /*#__PURE__*/function () {
  function DatetimeFactory() {
    _classCallCheck(this, DatetimeFactory);
  }

  _createClass(DatetimeFactory, null, [{
    key: "create",
    value: function create(date) {
      var dateTime = document.createElement("time");
      dateTime.classList.add("date-time");
      dateTime.setAttribute("datetime", date);
      dateTime.innerHTML = date;
      return dateTime;
    }
  }]);

  return DatetimeFactory;
}();

exports.default = DatetimeFactory;
},{}],"component/gallery/PricePhotoFactory.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var PricePhotoFactory = /*#__PURE__*/function () {
  function PricePhotoFactory() {
    _classCallCheck(this, PricePhotoFactory);
  }

  _createClass(PricePhotoFactory, null, [{
    key: "create",
    value: function create(price) {
      var spanPrice = document.createElement("span");
      spanPrice.classList.add("price-photo");
      spanPrice.innerHTML = price + "  €  ";
      return spanPrice;
    }
  }]);

  return PricePhotoFactory;
}();

exports.default = PricePhotoFactory;
},{}],"component/gallery/CounterLikesFactory.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var CounterLikesFactory = /*#__PURE__*/function () {
  function CounterLikesFactory() {
    _classCallCheck(this, CounterLikesFactory);
  }

  _createClass(CounterLikesFactory, null, [{
    key: "create",
    value: function create(likes) {
      var spanLikes = document.createElement("span");
      spanLikes.classList.add("photo-likes");
      spanLikes.innerHTML = likes + "  ";
      var icon = document.createElement("i");
      icon.classList.add("fas", "fa-heart");
      icon.setAttribute("aria-label", "likes");
      spanLikes.appendChild(icon);
      spanLikes.addEventListener("click", function () {
        spanLikes.innerText = likes++;
        spanLikes.appendChild(icon);
      });
      return spanLikes;
    }
  }]);

  return CounterLikesFactory;
}();

exports.default = CounterLikesFactory;
},{}],"component/gallery/SortOptionFactory.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var SortOptionFactory = /*#__PURE__*/function () {
  function SortOptionFactory() {
    _classCallCheck(this, SortOptionFactory);
  }

  _createClass(SortOptionFactory, null, [{
    key: "create",
    value: function create(optContent) {
      var option = document.createElement("option");
      option.classList.add("occurency-list");
      option.value = optContent;
      option.text = optContent;
      return option;
    }
  }]);

  return SortOptionFactory;
}();

exports.default = SortOptionFactory;
},{}],"component/gallery/GalleryFactory.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _FishEyeDataFR = _interopRequireDefault(require("./../../../FishEyeDataFR.json"));

var _CarouselFactory = _interopRequireDefault(require("../carousel/CarouselFactory"));

var _ImageFactory = require("../media/ImageFactory");

var _LabelFactory = _interopRequireDefault(require("../infoProfile/LabelFactory"));

var _SelectFactory = _interopRequireDefault(require("./SelectFactory"));

var _VideoFactory = _interopRequireDefault(require("../media/VideoFactory"));

var _DateTimeFactory = _interopRequireDefault(require("./DateTimeFactory"));

var _PricePhotoFactory = _interopRequireDefault(require("./PricePhotoFactory"));

var _CounterLikesFactory = _interopRequireDefault(require("./CounterLikesFactory"));

var _SortOptionFactory = _interopRequireDefault(require("./SortOptionFactory"));

var _TitleFactory = _interopRequireDefault(require("../infoMainPage/TitleFactory"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var mediaPath = "./../SamplePhotos";

var GalleryFactory = /*#__PURE__*/function () {
  function GalleryFactory() {
    _classCallCheck(this, GalleryFactory);
  }

  _createClass(GalleryFactory, null, [{
    key: "create",
    value: function create(photographer) {
      // sorted by popularity by default
      var medias = _FishEyeDataFR.default.media;
      medias.sort(function (a, b) {
        return b.likes - a.likes;
      });
      var infoGallery = document.createElement("section");
      infoGallery.classList.add("gallery");

      var label = _LabelFactory.default.create("label-list", "Trier par");

      var optArray = ["Popularité", "Date", "Titre"];

      var select = _SelectFactory.default.create("select-list");

      for (var i = 0; i < optArray.length; i++) {
        var element = optArray[i];

        var options = _SortOptionFactory.default.create(element);

        select.appendChild(options);
      } //filtering photo by occurency


      select.addEventListener("change", function (e) {
        switch (e.target.value) {
          case "Popularité":
            medias.sort(function (a, b) {
              return b.likes - a.likes;
            });
            break;

          case "Date":
            medias.sort(function (a, b) {
              a = a.date.split('-');
              b = b.date.split('-');
              return a[0] - b[0] || a[1] - b[1] || a[2] - b[2];
            });
            break;

          case "Titre":
            medias.sort(function (a, b) {
              var aa = a.image !== undefined ? a.image : a.video;
              var bb = b.image !== undefined ? b.image : b.video;
              return aa > bb;
            });
            break;
        }

        GalleryFactory.deletePhotoGallery();
        GalleryFactory.createPhotoGallery(medias.filter(function (media) {
          return media.photographerId === photographer.id;
        }), infoGallery);
      });
      GalleryFactory.createPhotoGallery(medias.filter(function (media) {
        return media.photographerId === photographer.id;
      }), infoGallery);
      document.querySelector(".main").appendChild(label);
      document.querySelector(".main").appendChild(select);
      return infoGallery;
    }
  }, {
    key: "deletePhotoGallery",
    value: function deletePhotoGallery() {
      var photos = document.querySelectorAll(".photoFigure");
      photos.forEach(function (photo) {
        photo.remove();
      });
    } // create photo gallery method

  }, {
    key: "createPhotoGallery",
    value: function createPhotoGallery(medias, infoGallery) {
      var carousel;
      medias.map(function (media, index) {
        var mediaFigure = document.createElement("figure");
        mediaFigure.classList.add("photoFigure");
        var mediaLegend = document.createElement("figcaption");
        mediaLegend.classList.add("photoLegend");

        if (media.image) {
          var image = _ImageFactory.ImageFactory.create({
            source: "".concat(mediaPath, "/").concat(media.photographerId, "/").concat(media.image),
            text: media.altText
          });

          image.addEventListener("click", function () {
            carousel = _CarouselFactory.default.create({
              medias: medias,
              currentIndex: index
            });
            document.querySelector(".main").appendChild(carousel);
          });
          mediaFigure.appendChild(image);
        } else {
          var video = _VideoFactory.default.create({
            source: "".concat(mediaPath, "/").concat(media.photographerId, "/").concat(media.video),
            altText: media.altText
          });

          video.addEventListener("click", function () {
            carousel = _CarouselFactory.default.create({
              medias: medias,
              currentIndex: index
            });
            document.querySelector(".main").appendChild(carousel);
          });
          mediaFigure.appendChild(video);
        }

        var dateTime = _DateTimeFactory.default.create(media.date);

        var titlePhoto = _TitleFactory.default.create("h3", media.altText, "title-photo-gallery");

        var pricePhoto = _PricePhotoFactory.default.create(media.price);

        var likesPhoto = _CounterLikesFactory.default.create(media.likes);

        mediaFigure.appendChild(mediaLegend);
        mediaLegend.appendChild(titlePhoto);
        mediaLegend.appendChild(dateTime);
        mediaLegend.appendChild(pricePhoto);
        mediaLegend.appendChild(likesPhoto);
        infoGallery.appendChild(mediaFigure);
      });
    }
  }]);

  return GalleryFactory;
}();

exports.default = GalleryFactory;
},{"./../../../FishEyeDataFR.json":"../FishEyeDataFR.json","../carousel/CarouselFactory":"component/carousel/CarouselFactory.js","../media/ImageFactory":"component/media/ImageFactory.js","../infoProfile/LabelFactory":"component/infoProfile/LabelFactory.js","./SelectFactory":"component/gallery/SelectFactory.js","../media/VideoFactory":"component/media/VideoFactory.js","./DateTimeFactory":"component/gallery/DateTimeFactory.js","./PricePhotoFactory":"component/gallery/PricePhotoFactory.js","./CounterLikesFactory":"component/gallery/CounterLikesFactory.js","./SortOptionFactory":"component/gallery/SortOptionFactory.js","../infoMainPage/TitleFactory":"component/infoMainPage/TitleFactory.js"}],"pages/ProfilPages.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _InfoProfileFactory = _interopRequireDefault(require("../component/infoProfile/InfoProfileFactory"));

var _GalleryFactory = _interopRequireDefault(require("../component/gallery/GalleryFactory"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ProfilPages = /*#__PURE__*/function () {
  function ProfilPages() {
    _classCallCheck(this, ProfilPages);
  }

  _createClass(ProfilPages, null, [{
    key: "changePage",
    value: //Change page method at clicking on profile
    function changePage(photographer) {
      document.querySelector(".main").innerHTML = "";
      document.querySelector("nav").remove();
      ProfilPages.displayInfoProfile(photographer);
      ProfilPages.displayGallery(photographer);
    } // display information of profile with datas and form feature

  }, {
    key: "displayInfoProfile",
    value: function displayInfoProfile(photographer) {
      var infoProfile = _InfoProfileFactory.default.create(photographer);

      document.querySelector(".main").appendChild(infoProfile);
    } //display photo gallery with pictures features

  }, {
    key: "displayGallery",
    value: function displayGallery(photographer) {
      var gallery = _GalleryFactory.default.create(photographer);

      document.querySelector(".main").appendChild(gallery);
    }
  }]);

  return ProfilPages;
}();

exports.default = ProfilPages;
},{"../component/infoProfile/InfoProfileFactory":"component/infoProfile/InfoProfileFactory.js","../component/gallery/GalleryFactory":"component/gallery/GalleryFactory.js"}],"component/infoMainPage/ContainerProfilesFactory.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ContainerProfilesFactory = /*#__PURE__*/function () {
  function ContainerProfilesFactory() {
    _classCallCheck(this, ContainerProfilesFactory);
  }

  _createClass(ContainerProfilesFactory, null, [{
    key: "create",
    value: function create(photographer) {
      var figure = document.createElement("figure");
      figure.classList.add("profile");
      figure.id = "profile-" + photographer.id;
      return figure;
    }
  }]);

  return ContainerProfilesFactory;
}();

exports.default = ContainerProfilesFactory;
},{}],"component/infoMainPage/LegendProfilesFactory.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var LegendProfilesFactory = /*#__PURE__*/function () {
  function LegendProfilesFactory() {
    _classCallCheck(this, LegendProfilesFactory);
  }

  _createClass(LegendProfilesFactory, null, [{
    key: "create",
    value: function create() {
      var profileFigcaption = document.createElement('figcaption');
      profileFigcaption.classList.add("info-profile");
      profileFigcaption.setAttribute("role", "text paragraph");
      return profileFigcaption;
    }
  }]);

  return LegendProfilesFactory;
}();

exports.default = LegendProfilesFactory;
},{}],"component/infoMainPage/LinkPageAvatarFactory.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var LinkPageAvatarFactory = /*#__PURE__*/function () {
  function LinkPageAvatarFactory() {
    _classCallCheck(this, LinkPageAvatarFactory);
  }

  _createClass(LinkPageAvatarFactory, null, [{
    key: "create",
    value: function create(photographer) {
      var profileLink = document.createElement('a');
      profileLink.classList.add("img-profile-link");
      profileLink.setAttribute("data-portraitId", photographer.id);
      profileLink.setAttribute("role", "Link + image");
      profileLink.href = "#";
      return profileLink;
    }
  }]);

  return LinkPageAvatarFactory;
}();

exports.default = LinkPageAvatarFactory;
},{}],"component/infoMainPage/Main.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ProfilPages = _interopRequireDefault(require("../../pages/ProfilPages"));

var _FishEyeDataFR = _interopRequireDefault(require("../../../FishEyeDataFR.json"));

var _ContainerProfilesFactory = _interopRequireDefault(require("./ContainerProfilesFactory"));

var _Infofactory = _interopRequireDefault(require("./Infofactory"));

var _LegendProfilesFactory = _interopRequireDefault(require("./LegendProfilesFactory"));

var _LinkPageAvatarFactory = _interopRequireDefault(require("./LinkPageAvatarFactory"));

var _Profiletags = _interopRequireDefault(require("./Profiletags"));

var _TitleFactory = _interopRequireDefault(require("./TitleFactory"));

var _AvatarFactory = _interopRequireDefault(require("./AvatarFactory"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var photographersInfo = _FishEyeDataFR.default.photographers;

var Main = /*#__PURE__*/function () {
  function Main() {
    _classCallCheck(this, Main);
  }

  _createClass(Main, null, [{
    key: "create",
    value: function create(parent) {
      var title = _TitleFactory.default.create("h1", "Nos photographes", "main-title");

      var section = Main.createSectionProfiles();
      parent.appendChild(title);
      parent.appendChild(section);
    } //method template main landing page

  }, {
    key: "createSectionProfiles",
    value: function createSectionProfiles() {
      var sectionContainer = document.createElement("section");
      sectionContainer.classList.add("profiles");
      photographersInfo.map(function (photographerInfo) {
        return Main.createMainProfiles(photographerInfo, sectionContainer);
      });
      return sectionContainer;
    } //method template profiles

  }, {
    key: "createMainProfiles",
    value: function createMainProfiles(photographer, parent) {
      var figure = _ContainerProfilesFactory.default.create(photographer);

      var figcaption = _LegendProfilesFactory.default.create();

      var title = _TitleFactory.default.create("h2", photographer.name, "name");

      var avatar = _LinkPageAvatarFactory.default.create(photographer, _FishEyeDataFR.default.profile);

      Main.createEventChangePage(avatar);

      var imgAvatar = _AvatarFactory.default.create("img-profile-link", photographer);

      var city = _Infofactory.default.create("city", "text", "".concat(photographer.city, " ").concat(photographer.country));

      var quote = _Infofactory.default.create("quote", "text", photographer.tagline);

      var price = _Infofactory.default.create("price", "text", photographer.price + '€');

      parent.appendChild(figure);
      figure.appendChild(avatar);
      figure.appendChild(figcaption);
      avatar.appendChild(imgAvatar);
      avatar.appendChild(title);
      figcaption.appendChild(city);
      figcaption.appendChild(quote);
      figcaption.appendChild(price);

      _Profiletags.default.create(figcaption, photographer);
    } // Access to profiles pages with clicking on profile link

  }, {
    key: "createEventChangePage",
    value: function createEventChangePage(profileLink) {
      var photographersInfo = _FishEyeDataFR.default.photographers;

      var getPhotographerById = function getPhotographerById(id) {
        return photographersInfo.find(function (photographer) {
          return photographer.id === Number(id);
        });
      };

      profileLink.addEventListener('click', function (evt) {
        var id = evt.currentTarget.getAttribute("data-portraitId");

        _ProfilPages.default.changePage(getPhotographerById(id));
      });
    }
  }]);

  return Main;
}();

exports.default = Main;
},{"../../pages/ProfilPages":"pages/ProfilPages.js","../../../FishEyeDataFR.json":"../FishEyeDataFR.json","./ContainerProfilesFactory":"component/infoMainPage/ContainerProfilesFactory.js","./Infofactory":"component/infoMainPage/Infofactory.js","./LegendProfilesFactory":"component/infoMainPage/LegendProfilesFactory.js","./LinkPageAvatarFactory":"component/infoMainPage/LinkPageAvatarFactory.js","./Profiletags":"component/infoMainPage/Profiletags.js","./TitleFactory":"component/infoMainPage/TitleFactory.js","./AvatarFactory":"component/infoMainPage/AvatarFactory.js"}],"pages/MainPage.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Header = _interopRequireDefault(require("../component/infoMainPage/Header"));

var _Main = _interopRequireDefault(require("../component/infoMainPage/Main"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var MainPage = /*#__PURE__*/function () {
  function MainPage() {
    _classCallCheck(this, MainPage);
  }

  _createClass(MainPage, null, [{
    key: "create",
    value: function create() {
      _Header.default.create();

      var main = document.createElement("main");
      main.classList.add("main");
      document.body.appendChild(main);

      _Main.default.create(main);
    }
  }]);

  return MainPage;
}();

exports.default = MainPage;
},{"../component/infoMainPage/Header":"component/infoMainPage/Header.js","../component/infoMainPage/Main":"component/infoMainPage/Main.js"}],"index.js":[function(require,module,exports) {
"use strict";

var _MainPage = _interopRequireDefault(require("./pages/MainPage"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var App = /*#__PURE__*/function () {
  function App() {
    _classCallCheck(this, App);
  }

  _createClass(App, null, [{
    key: "create",
    value: function create() {
      //Main page initialisation
      _MainPage.default.create();
    }
  }]);

  return App;
}(); // Document initialisation


document.addEventListener("DOMContentLoaded", App.create);
},{"./pages/MainPage":"pages/MainPage.js"}],"../../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "56713" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/src.e31bb0bc.js.map