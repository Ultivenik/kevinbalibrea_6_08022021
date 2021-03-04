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
},{}],"component/infoMainPage/HeaderFactory.js":[function(require,module,exports) {
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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var HeaderFactory = /*#__PURE__*/function () {
  function HeaderFactory() {
    _classCallCheck(this, HeaderFactory);
  }

  _createClass(HeaderFactory, null, [{
    key: "create",
    value: function create() {
      HeaderFactory.createHeader();
    } //tags reference

  }, {
    key: "createHeader",
    value: // create header method
    function createHeader() {
      var logoLink = document.createElement('a');
      var logoImg = document.createElement('img');
      var header = document.createElement("header");
      var headerNav = document.createElement("nav");
      logoLink.href = "index.html";
      logoImg.src = "./logo.png";
      logoImg.alt = "Fisheye Home page";
      header.classList.add("header");
      document.body.prepend(header);
      logoLink.appendChild(logoImg);
      header.appendChild(logoLink);
      header.appendChild(headerNav);
      HeaderFactory.createTags(headerNav);
    } //creating tags method

  }, {
    key: "createTags",
    value: function createTags(headerNav) {
      HeaderFactory.tags.map(function (tag) {
        var spanNav = document.createElement("span");
        var linkNav = document.createElement("a");
        linkNav.href = "#";
        spanNav.classList.add("tag");
        headerNav.appendChild(spanNav);
        spanNav.appendChild(linkNav);
        linkNav.innerHTML = "#" + tag;
        linkNav.addEventListener('click', HeaderFactory.sortingProfile);
      });
    } //sotring profiles with hashtags

  }, {
    key: "sortingProfile",
    value: function sortingProfile(e) {
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

  return HeaderFactory;
}();

exports.default = HeaderFactory;

_defineProperty(HeaderFactory, "tags", ["Portrait", "Art", "Fashion", "Architecture", "Travel", "Sport", "Animals", "Events"]);
},{"./../../../FishEyeDataFR.json":"../FishEyeDataFR.json"}],"component/infoProfile/InfoProfileFactory.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

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
      var infoProfile = document.createElement("section");
      infoProfile.classList.add("profileID");
      InfoProfileFactory.createProfileName(infoProfile, photographer);
      InfoProfileFactory.createPhotographerLocation(infoProfile, photographer);
      InfoProfileFactory.createPhotographerQuote(infoProfile, photographer);
      InfoProfileFactory.createProfilesTags(infoProfile, photographer);
      InfoProfileFactory.createContactBtn(infoProfile, photographer, "Contactez-moi");
      InfoProfileFactory.createAvatar(infoProfile, photographer);
      return infoProfile;
    }
  }, {
    key: "createProfileName",
    value: function createProfileName(infoProfile, photographer) {
      var IDName = document.createElement("h2");
      IDName.classList.add("name");
      IDName.innerHTML = photographer.name;
      infoProfile.appendChild(IDName);
    }
  }, {
    key: "createPhotographerLocation",
    value: function createPhotographerLocation(infoProfile, photographer) {
      var IDLocation = document.createElement("p");
      IDLocation.classList.add("city");
      IDLocation.innerHTML = "".concat(photographer.city, ", ") + "".concat(photographer.country);
      infoProfile.appendChild(IDLocation);
    }
  }, {
    key: "createPhotographerQuote",
    value: function createPhotographerQuote(infoProfile, photographer) {
      var IDTagline = document.createElement("p");
      IDTagline.classList.add("quote");
      IDTagline.innerHTML = photographer.tagline;
      infoProfile.appendChild(IDTagline);
    }
  }, {
    key: "createContactBtn",
    value: function createContactBtn(infoProfile, photographer, content) {
      var btnContact = document.createElement("button");
      btnContact.classList.add("btn-contact");
      btnContact.innerHTML = content;
      infoProfile.appendChild(btnContact);
      btnContact.addEventListener("click", function () {
        InfoProfileFactory.createContactForm(photographer);
      });
    }
  }, {
    key: "createProfilesTags",
    value: function createProfilesTags(infoProfile, photographer) {
      photographer.tags.map(function (tag) {
        var profileSpan = document.createElement("span");
        var profileSpanLink = document.createElement("a");
        profileSpanLink.href = "#";
        profileSpan.appendChild(profileSpanLink);
        profileSpanLink.innerHTML = "#" + tag;
        profileSpan.classList.add("tag");
        infoProfile.appendChild(profileSpan);
      });
    }
  }, {
    key: "createAvatar",
    value: function createAvatar(infoProfile, photographer) {
      var IDImg = document.createElement("img");
      IDImg.classList.add("img-profile-link");
      IDImg.src = "./../SamplePhotos/Photographers_ID_Photos/" + photographer.portrait;
      IDImg.alt = "photo profil de ".concat(photographer.name);
      infoProfile.appendChild(IDImg);
    }
  }, {
    key: "createContactForm",
    value: function createContactForm(photographer) {
      var overlay = document.createElement("section");
      overlay.classList.add("overlay-contact");
      document.querySelector(".main").appendChild(overlay);
      var form = document.createElement("form");
      form.classList.add("contact-form");
      overlay.appendChild(form);
      InfoProfileFactory.createTitleForm(photographer, form);
      InfoProfileFactory.createCloseButton(overlay, form);
      InfoProfileFactory.createLabel("Prenom", "firstname", form);
      InfoProfileFactory.createInput("text", "firstname", form);
      InfoProfileFactory.createLabel("Nom", "lastname", form);
      InfoProfileFactory.createInput("text", "lastname", form);
      InfoProfileFactory.createLabel("Email", "email", form);
      InfoProfileFactory.createInput("email", "email", form);
      InfoProfileFactory.createLabel("Votre message", "text", form);
      InfoProfileFactory.createTextArea("text", form);
      InfoProfileFactory.createBtnForm("Envoyer", form);
    }
  }, {
    key: "createTitleForm",
    value: function createTitleForm(photographer, parent) {
      var title = document.createElement("h2");
      title.classList.add("title-form");
      title.innerHTML = "Contactez moi " + photographer.name;
      parent.appendChild(title);
    }
  }, {
    key: "createCloseButton",
    value: function createCloseButton(overlay, parent) {
      var close = document.createElement("i");
      close.classList.add("fas", "fa-times");
      close.addEventListener("click", function () {
        overlay.remove();
      });
      parent.appendChild(close);
    }
  }, {
    key: "createLabel",
    value: function createLabel(content, id, parent) {
      var Label = document.createElement("label");
      Label.classList.add("label-form");
      Label.innerHTML = content;
      Label.setAttribute("for", id);
      parent.appendChild(Label);
    }
  }, {
    key: "createInput",
    value: function createInput(type, id, parent) {
      var input = document.createElement("input");
      input.type = type;
      input.classList.add("input-form");
      input.id = id;
      parent.appendChild(input);
    }
  }, {
    key: "createTextArea",
    value: function createTextArea(id, parent) {
      var textInput = document.createElement("textarea");
      textInput.classList.add("input-form");
      textInput.id = id;
      parent.appendChild(textInput);
    }
  }, {
    key: "createBtnForm",
    value: function createBtnForm(content, parent) {
      var btnForm = document.createElement("button");
      btnForm.classList.add("btn-contact");
      btnForm.innerHTML = content;
      btnForm.addEventListener("click", function (e) {
        e.preventDefault();
        var form = document.querySelector(".contact-form");
        var firstNameInput = document.getElementById("firstname");
        var lastNameInput = document.getElementById("lastname");
        var emailInput = document.getElementById("email");
        var textInput = document.getElementById("text");
        InfoProfileFactory.retrieveFormValues(firstNameInput, lastNameInput, emailInput, textInput);
        form.reset();
      });
      parent.appendChild(btnForm);
    }
  }, {
    key: "retrieveFormValues",
    value: function retrieveFormValues(firstNameInput, lastNameInput, emailInput, textInput) {
      console.log("Nom de l'utilisateur: " + firstNameInput.value + "\n" + "Prénom de l'utilisateur: " + lastNameInput.value + "\n" + "E-mail de l'utilisateur: " + emailInput.value + "\n" + "Message de l'utilisateur: " + textInput.value);
    }
  }]);

  return InfoProfileFactory;
}();

exports.default = InfoProfileFactory;
},{}],"component/gallery/GalleryFactory.js":[function(require,module,exports) {
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

var GalleryFactory = /*#__PURE__*/function () {
  function GalleryFactory() {
    _classCallCheck(this, GalleryFactory);
  }

  _createClass(GalleryFactory, null, [{
    key: "create",
    value: function create(photographer) {
      var media = _FishEyeDataFR.default.media;
      media.sort(function (a, b) {
        return b.likes - a.likes;
      });
      var infoGallery = document.createElement("section");
      infoGallery.classList.add("gallery");
      var label = document.createElement("label");
      label.classList.add("label-list");
      label.innerHTML = "Trier par";
      document.querySelector(".main").appendChild(label);
      var select = document.createElement("select");
      select.classList.add("select-list");
      document.querySelector(".main").appendChild(select);
      var optArray = ["Popularité", "Date", "Titre"]; //filtering photo by occurency

      select.addEventListener("change", function (e) {
        switch (e.target.value) {
          case "Popularité":
            media.sort(function (a, b) {
              return b.likes - a.likes;
            });
            break;

          case "Date":
            media.sort(function (a, b) {
              a = a.date.split('-');
              b = b.date.split('-');
              return a[0] - b[0] || a[1] - b[1] || a[2] - b[2];
            });
            break;

          case "Titre":
            media.sort(function (a, b) {
              var aa = a.image !== undefined ? a.image : a.video;
              var bb = b.image !== undefined ? b.image : b.video; // return aa.localeCompare(bb)

              return aa > bb;
            });
            break;
        }

        GalleryFactory.deletePhotoGallery();
        GalleryFactory.createPhotoGallery(media, infoGallery, photographer);
      });
      GalleryFactory.createOptions(optArray, select);
      GalleryFactory.createPhotoGallery(media, infoGallery, photographer);
      return infoGallery;
    }
  }, {
    key: "deletePhotoGallery",
    value: function deletePhotoGallery() {
      var photos = document.querySelectorAll(".photoFigure");
      photos.forEach(function (photo) {
        photo.remove();
      });
    } // creating option DOM method

  }, {
    key: "createOptions",
    value: function createOptions(optArray, select) {
      for (var i = 0; i < optArray.length; i++) {
        var optContent = optArray[i];
        var option = document.createElement("option");
        option.classList.add("occurency-list");
        option.value = optContent;
        option.text = optContent;
        select.appendChild(option);
      }
    } // create photo gallery method

  }, {
    key: "createPhotoGallery",
    value: function createPhotoGallery(media, infoGallery, photographer) {
      media.map(function (photo, index) {
        if (photo.photographerId === photographer.id) {
          var path = GalleryFactory.definePath(photographer.id, photo);
          var photoFigure = document.createElement("figure");
          photoFigure.classList.add("photoFigure");
          var photoLegend = document.createElement("figcaption");
          photoLegend.classList.add("photoLegend");

          if (path.image !== undefined) {
            GalleryFactory.createImage(path.image, photo.altText, photoFigure, media, index, photographer.id);
          } else {
            GalleryFactory.createVideo(path.video, photo.altText, photoFigure, media, index, photographer.id);
          }

          photoFigure.appendChild(photoLegend);
          GalleryFactory.createLegendTitle(photo.altText, photoLegend);
          GalleryFactory.createPrice(photo.price, photoLegend);
          GalleryFactory.createLikes(photo.likes, photoLegend);
          GalleryFactory.createDatePhoto(photo.date, photoLegend);
          infoGallery.appendChild(photoFigure);
        }
      });
    }
  }, {
    key: "createDatePhoto",
    value: function createDatePhoto(date, parent) {
      var dateTime = document.createElement("time");
      dateTime.classList.add("date-time");
      dateTime.setAttribute("datetime", date);
      dateTime.innerHTML = date;
      parent.appendChild(dateTime);
    }
  }, {
    key: "createLegendTitle",
    value: function createLegendTitle(photo, parent) {
      var title = document.createElement("h3");
      title.classList.add("title-photo-gallery");
      title.innerHTML = photo;
      parent.appendChild(title);
    } // lightbox open when clicking on a photo

  }, {
    key: "createLightBoxEvent",
    value: function createLightBoxEvent(media, index, photographerId) {
      var overlayGallery = document.createElement("div");
      var containerLightBox = document.createElement("div");
      containerLightBox.classList.add("container-lightbox");
      containerLightBox.setAttribute("aria-label", "image-closeup-view");
      var currentImage = document.createElement("img");
      containerLightBox.appendChild(currentImage);
      currentImage.src = GalleryFactory.definePath(photographerId, media[index]).image;
      overlayGallery.classList.add("overlay-gallery");
      document.querySelector(".main").appendChild(overlayGallery);
      var indexImage = index; // GalleryFactory.createLegendTitle(e.target.dataset.altText, containerLightBox)
      // GalleryFactory.createCloseButton(e, overlayGallery, containerLightBox)

      GalleryFactory.createLeftArrow(containerLightBox, indexImage);
      GalleryFactory.createRightArrow(containerLightBox, indexImage);
      overlayGallery.appendChild(containerLightBox); //avoid doublons
      // e.target.addEventListener("click", () => {
      //     overlayGallery.remove()
      // })
    } // close lightbox when click on "X"

  }, {
    key: "createCloseButton",
    value: function createCloseButton(e, overlay, parent) {
      var close = document.createElement("i");
      close.classList.add("fas", "fa-times", "lightbox-close-btn");
      close.addEventListener("click", function () {
        GalleryFactory.createCloseLightBox(e.target, overlay);
      });
      document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
          GalleryFactory.createCloseLightBox(e.target, overlay);
        }
      });
      parent.appendChild(close);
    }
  }, {
    key: "createCloseLightBox",
    value: function createCloseLightBox(eventTarget, overlay) {
      overlay.remove();
      eventTarget.classList.remove("lightbox");
      eventTarget.classList.add("media-gallery");
      eventTarget.removeAttribute("controls");
    } // left navigation lightbox

  }, {
    key: "createLeftArrow",
    value: function createLeftArrow(parent) {
      var leftArrow = document.createElement('i');
      leftArrow.classList.add("fas", "fa-chevron-left", "left-arrow");
      parent.appendChild(leftArrow);
      leftArrow.addEventListener('click', function (e) {
        e--;
      });
    } // right navigation lightbox

  }, {
    key: "createRightArrow",
    value: function createRightArrow(parent) {
      var rightArrow = document.createElement('i');
      rightArrow.classList.add("fas", "fa-chevron-right", "right-arrow");
      parent.appendChild(rightArrow);
      rightArrow.addEventListener("click", function (e) {
        e++;
      });
    } // create gallery method

  }, {
    key: "createImage",
    value: function createImage(source, altText, photoFigure, media, index, photographerId) {
      var imageGallery = document.createElement("img");
      imageGallery.classList.add("media-gallery");
      imageGallery.src = source;
      imageGallery.alt = altText;
      imageGallery.dataset.altText = altText;
      photoFigure.appendChild(imageGallery);
      imageGallery.addEventListener("click", function () {
        GalleryFactory.createLightBoxEvent(media, index, photographerId);
      });
    }
  }, {
    key: "createVideo",
    value: function createVideo(source, altText, photoFigure, media, index, photographerId) {
      var videoGallery = document.createElement("video");
      videoGallery.addEventListener('click', function () {
        videoGallery.setAttribute("controls", "");
        GalleryFactory.createLightBoxEvent(media, index, photographerId);
      });
      videoGallery.dataset.altText = altText;
      photoFigure.appendChild(videoGallery);
      var sourceVideoGallery = document.createElement("source");
      sourceVideoGallery.src = source;
      videoGallery.appendChild(sourceVideoGallery);
    }
  }, {
    key: "createPrice",
    value: function createPrice(photo, photoLegend) {
      var spanPrice = document.createElement("span");
      spanPrice.classList.add("price-photo");
      spanPrice.innerHTML = photo + "  €  ";
      photoLegend.appendChild(spanPrice);
    } // like button with like increment event and price

  }, {
    key: "createLikes",
    value: function createLikes(photo, photoLegend) {
      var spanLikes = document.createElement("span");
      spanLikes.classList.add("photo-likes");
      spanLikes.innerHTML = photo + "  ";
      var icon = document.createElement("i");
      icon.classList.add("fas", "fa-heart");
      icon.setAttribute("aria-label", "likes");
      spanLikes.appendChild(icon);
      photoLegend.appendChild(spanLikes);
      spanLikes.addEventListener("click", function (e) {
        e.currentTarget.innerText = photo++;
        spanLikes.appendChild(icon);
      });
    } // implementation photos with photographers ID

  }, {
    key: "definePath",
    value: function definePath(photographerId, photo) {
      var path = {};

      switch (photographerId) {
        case 243:
          GalleryFactory.createPath("Mimi", path, photo);
          break;

        case 930:
          GalleryFactory.createPath("Ellie Rose", path, photo);
          break;

        case 82:
          GalleryFactory.createPath("Tracy", path, photo);
          break;

        case 527:
          GalleryFactory.createPath("Nabeel", path, photo);
          break;

        case 925:
          GalleryFactory.createPath("Rhode", path, photo);
          break;

        case 195:
          GalleryFactory.createPath("Marcel", path, photo);
          break;
      }

      return path;
    }
  }, {
    key: "createPath",
    value: function createPath(name, path, photo) {
      var photoPath = "/SamplePhotos/";

      if (photo.image !== undefined) {
        path.image = photoPath + name + "/" + photo.image;
      } else {
        path.video = photoPath + name + "/" + photo.video;
      }
    }
  }]);

  return GalleryFactory;
}();

exports.default = GalleryFactory;
},{"./../../../FishEyeDataFR.json":"../FishEyeDataFR.json"}],"pages/ProfilPages.js":[function(require,module,exports) {
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
},{"../component/infoProfile/InfoProfileFactory":"component/infoProfile/InfoProfileFactory.js","../component/gallery/GalleryFactory":"component/gallery/GalleryFactory.js"}],"component/photographers/Photographer.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Photographer = function Photographer(_ref) {
  var _ref$photoPath = _ref.photoPath,
      photoPath = _ref$photoPath === void 0 ? "/SamplePhotos/Photographers_ID_Photos/" : _ref$photoPath,
      name = _ref.name,
      id = _ref.id,
      city = _ref.city,
      country = _ref.country,
      tags = _ref.tags,
      tagline = _ref.tagline,
      price = _ref.price,
      portrait = _ref.portrait;

  _classCallCheck(this, Photographer);

  this.photoPath = photoPath;
  this.name = name;
  this.id = id;
  this.city = city;
  this.country = country;
  this.tags = tags;
  this.tagline = tagline;
  this.price = price;
  this.portrait = portrait;
};

exports.default = Photographer;
},{}],"component/photographers/PhotographerFactory.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Photographer = _interopRequireDefault(require("./Photographer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var PhotographerFactory = /*#__PURE__*/function () {
  function PhotographerFactory() {
    _classCallCheck(this, PhotographerFactory);
  }

  _createClass(PhotographerFactory, null, [{
    key: "create",
    value: function create(photographerInfo) {
      var photographer = new _Photographer.default(photographerInfo);
      photographer.name = photographerInfo.name;
      photographer.id = photographerInfo.id;
      photographer.city = photographerInfo.city;
      photographer.country = photographerInfo.country;
      photographer.tags = photographerInfo.tags;
      photographer.tagline = photographerInfo.tagline;
      photographer.price = photographerInfo.price;
      photographer.portrait = photographer.photoPath + photographerInfo.portrait;
      return photographer;
    }
  }]);

  return PhotographerFactory;
}();

exports.default = PhotographerFactory;
},{"./Photographer":"component/photographers/Photographer.js"}],"component/infoMainPage/MainFactory.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ProfilPages = _interopRequireDefault(require("../../pages/ProfilPages"));

var _FishEyeDataFR = _interopRequireDefault(require("./../../../FishEyeDataFR.json"));

var _PhotographerFactory = _interopRequireDefault(require("./../photographers/PhotographerFactory"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var MainFactory = /*#__PURE__*/function () {
  function MainFactory() {
    _classCallCheck(this, MainFactory);
  }

  _createClass(MainFactory, null, [{
    key: "create",
    value: function create(parent) {
      MainFactory.createMainTitlePage(parent);
      MainFactory.createSectionProfiles(parent);
    } //method template main landing page

  }, {
    key: "createSectionProfiles",
    value: function createSectionProfiles(parent) {
      var sectionContainer = document.createElement("section");
      sectionContainer.classList.add("profiles");
      parent.appendChild(sectionContainer);
      var photographersInfo = _FishEyeDataFR.default.photographers;
      photographersInfo.map(function (photographerInfo) {
        var photographer = _PhotographerFactory.default.create(photographerInfo);

        return MainFactory.createMainProfiles(photographer, sectionContainer);
      });
    } //main title (h1) method

  }, {
    key: "createMainTitlePage",
    value: function createMainTitlePage(parent) {
      var mainTitle = document.createElement("h1");
      mainTitle.classList.add("main-title");
      mainTitle.innerHTML = "Nos photographes";
      parent.prepend(mainTitle);
    } //method template profiles

  }, {
    key: "createMainProfiles",
    value: function createMainProfiles(photographer, parent) {
      var figure = document.createElement("figure");
      figure.classList.add("profile");
      figure.id = "profile-" + photographer.id;
      parent.appendChild(figure);
      var profileFigcaption = document.createElement('figcaption');
      profileFigcaption.classList.add("info-profile");
      MainFactory.createProfileAvatar(figure, photographer);
      MainFactory.createProfileTitle(figure, photographer);
      MainFactory.createProfileCity(profileFigcaption, photographer);
      MainFactory.createProfileQuote(profileFigcaption, photographer);
      MainFactory.createProfilePrice(profileFigcaption, photographer);
      MainFactory.createProfileTags(profileFigcaption, photographer);
      figure.appendChild(profileFigcaption);
    } // title profile method

  }, {
    key: "createProfileTitle",
    value: function createProfileTitle(figure, photographer) {
      var profileTitle = document.createElement('h2');
      profileTitle.classList.add("name");
      profileTitle.innerHTML = photographer.name;
      figure.appendChild(profileTitle);
    } // profile photo method

  }, {
    key: "createProfileAvatar",
    value: function createProfileAvatar(figure, photographer) {
      var profileLink = document.createElement('a');
      profileLink.classList.add("img-profile-link");
      profileLink.setAttribute("data-portraitId", photographer.id);
      profileLink.href = "#";
      figure.appendChild(profileLink);
      var profileImg = document.createElement('img');
      profileImg.src = photographer.portrait;
      profileImg.alt = "photo profil de ".concat(photographer.name);
      profileImg.classList.add("img-".concat(photographer.id));
      profileLink.appendChild(profileImg);
      MainFactory.createEventChangePage(profileLink);
    } // profile city method

  }, {
    key: "createProfileCity",
    value: function createProfileCity(profileFigcaption, photographer) {
      var profileCity = document.createElement('p');
      profileCity.classList.add("city");
      profileCity.innerHTML = "".concat(photographer.city, " ") + "".concat(photographer.country);
      profileFigcaption.appendChild(profileCity);
    } //creating profiles tags in to the legend profiles

  }, {
    key: "createProfileTags",
    value: function createProfileTags(profileFigcaption, photographer) {
      photographer.tags.map(function (tag) {
        var profileSpan = document.createElement('span');
        var profileSpanLink = document.createElement('a');
        profileSpanLink.href = "#";
        profileSpan.classList.add("tag");
        profileSpanLink.innerHTML = "#" + tag;
        profileSpan.appendChild(profileSpanLink);
        profileFigcaption.appendChild(profileSpan);
      });
    }
  }, {
    key: "createProfilePrice",
    value: function createProfilePrice(profileFigcaption, photographer) {
      var profilePrice = document.createElement('p');
      profilePrice.classList.add("price");
      profilePrice.innerHTML = photographer.price + '€';
      profileFigcaption.appendChild(profilePrice);
    }
  }, {
    key: "createProfileQuote",
    value: function createProfileQuote(profileFigcaption, photographer) {
      var profileQuote = document.createElement('p');
      profileQuote.classList.add("quote");
      profileQuote.innerHTML = photographer.tagline;
      profileFigcaption.appendChild(profileQuote);
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

  return MainFactory;
}();

exports.default = MainFactory;
},{"../../pages/ProfilPages":"pages/ProfilPages.js","./../../../FishEyeDataFR.json":"../FishEyeDataFR.json","./../photographers/PhotographerFactory":"component/photographers/PhotographerFactory.js"}],"pages/MainPage.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _HeaderFactory = _interopRequireDefault(require("./../component/infoMainPage/HeaderFactory"));

var _MainFactory = _interopRequireDefault(require("./../component/infoMainPage/MainFactory"));

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
      MainPage.displayHeaderFactory();
      MainPage.displayMainFactory();
    }
  }, {
    key: "displayHeaderFactory",
    value: function displayHeaderFactory() {
      _HeaderFactory.default.create();
    }
  }, {
    key: "displayMainFactory",
    value: function displayMainFactory() {
      var main = document.createElement("main");
      main.classList.add("main");
      document.body.appendChild(main);

      _MainFactory.default.create(main);
    }
  }]);

  return MainPage;
}();

exports.default = MainPage;
},{"./../component/infoMainPage/HeaderFactory":"component/infoMainPage/HeaderFactory.js","./../component/infoMainPage/MainFactory":"component/infoMainPage/MainFactory.js"}],"index.js":[function(require,module,exports) {
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
},{"./pages/MainPage":"pages/MainPage.js"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "50380" + '/');

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
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/src.e31bb0bc.js.map