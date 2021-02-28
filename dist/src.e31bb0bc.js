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
    "price": 55
  }, {
    "id": 8520927,
    "photographerId": 82,
    "image": "Fashion_Urban_Jungle.jpg",
    "tags": ["fashion"],
    "likes": 11,
    "date": "2011-11-06",
    "price": 55
  }, {
    "id": 9025895,
    "photographerId": 82,
    "image": "Fashion_Pattern_on_Pattern.jpg",
    "tags": ["fashion"],
    "likes": 72,
    "date": "2013-08-12",
    "price": 55
  }, {
    "id": 9275938,
    "photographerId": 82,
    "image": "Event-_eddingGazebo.jpg",
    "tags": ["events"],
    "likes": 69,
    "date": "2018-02-22",
    "price": 55
  }, {
    "id": 2053494,
    "photographerId": 82,
    "image": "Event_Sparklers.jpg",
    "tags": ["events"],
    "likes": 2,
    "date": "2020-05-25",
    "price": 55
  }, {
    "id": 7324238,
    "photographerId": 82,
    "image": "Event_18thAnniversary.jpg",
    "tags": ["events"],
    "likes": 33,
    "date": "2019-06-12",
    "price": 55
  }, {
    "id": 8328953,
    "photographerId": 82,
    "video": "Art_Wooden_Horse_Sculpture.mp4",
    "tags": ["art"],
    "likes": 24,
    "date": "2011-12-08",
    "price": 100
  }, {
    "id": 7502053,
    "photographerId": 82,
    "image": "Art_Triangle_Man.jpg",
    "tags": ["art"],
    "likes": 88,
    "date": "2007-05-07",
    "price": 55
  }, {
    "id": 8523492,
    "photographerId": 82,
    "image": "Art_Purple_light.jpg",
    "tags": ["art"],
    "likes": 24,
    "date": "2018-05-05",
    "price": 55
  }, {
    "id": 75902334,
    "photographerId": 82,
    "image": "Art_Mine.jpg",
    "tags": ["art"],
    "likes": 75,
    "date": "2019-11-25",
    "price": 55
  }, {
    "id": 73852953,
    "photographerId": 925,
    "image": "Sport_2000_with_8.jpg",
    "tags": ["sport"],
    "likes": 52,
    "date": "2013-02-30",
    "price": 70
  }, {
    "id": 92758372,
    "photographerId": 925,
    "image": "Fashion_Wings.jpg",
    "tags": ["fashion"],
    "likes": 58,
    "date": "2018-07-17",
    "price": 70
  }, {
    "id": 32958383,
    "photographerId": 925,
    "image": "Fashion_Melody_Red_on_Stripes.jpg",
    "tags": ["fashion"],
    "likes": 11,
    "date": "2019-08-12",
    "price": 70
  }, {
    "id": 928587383,
    "photographerId": 925,
    "image": "Event_VentureConference.jpg",
    "tags": ["events"],
    "likes": 2,
    "date": "2019-01-02",
    "price": 70
  }, {
    "id": 725639493,
    "photographerId": 925,
    "image": "Event_ProductPitchjpg",
    "tags": ["events"],
    "likes": 3,
    "date": "2019-05-20",
    "price": 70
  }, {
    "id": 23394384,
    "photographerId": 925,
    "image": "Event_KeyboardCheck.jpg",
    "tags": ["events"],
    "likes": 52,
    "date": "2019-07-18",
    "price": 70
  }, {
    "id": 87367293,
    "photographerId": 925,
    "image": "Event_Emcee.jpg",
    "tags": ["events"],
    "likes": 23,
    "date": "2018-02-22",
    "price": 70
  }, {
    "id": 593834784,
    "photographerId": 925,
    "image": "Animals_Majesty.jpg",
    "tags": ["animals"],
    "likes": 52,
    "date": "2017-03-13",
    "price": 70
  }, {
    "id": 83958935,
    "photographerId": 925,
    "video": "Animals_Puppiness.mp4",
    "tags": ["animals"],
    "likes": 52,
    "date": "2016-06-12",
    "price": 70
  }, {
    "id": 394583434,
    "photographerId": 527,
    "video": "Travel_Rock_Mountains.mp4",
    "tags": ["travel"],
    "likes": 23,
    "date": "2017-03-18",
    "price": 45
  }, {
    "id": 343423425,
    "photographerId": 527,
    "image": "Travel_Outdoor_Baths.jpg",
    "tags": ["travel"],
    "likes": 101,
    "date": "2017-04-03",
    "price": 45
  }, {
    "id": 73434243,
    "photographerId": 527,
    "image": "Travel_Road_into_Hill.jpg",
    "tags": ["travel"],
    "likes": 99,
    "date": "2018-04-30",
    "price": 45
  }, {
    "id": 23425523,
    "photographerId": 527,
    "image": "Travel_Bridge_into_Forest.jpg",
    "tags": ["travel"],
    "likes": 34,
    "date": "2016-04-05",
    "price": 45
  }, {
    "id": 23134513,
    "photographerId": 527,
    "image": "Travel_Boat_Wanderer.jpg",
    "tags": ["travel"],
    "likes": 23,
    "date": "2017-03-18",
    "price": 45
  }, {
    "id": 92352352,
    "photographerId": 527,
    "image": "Portrait_Sunkissed.jpg",
    "tags": ["portrait"],
    "likes": 66,
    "date": "2018-05-24",
    "price": 45
  }, {
    "id": 34513453,
    "photographerId": 527,
    "image": "Portrait_Shaw.jpg",
    "tags": ["portait"],
    "likes": 52,
    "date": "2017-04-21",
    "price": 45
  }, {
    "id": 23523533,
    "photographerId": 527,
    "image": "Portrait_Alexandra.jpg",
    "tags": ["portait"],
    "likes": 95,
    "date": "2018-11-02",
    "price": 45
  }, {
    "id": 525834234,
    "photographerId": 527,
    "image": "Portrait_AfternoonBreak.jpg",
    "tags": ["portait"],
    "likes": 25,
    "date": "2019-01-02",
    "price": 45
  }, {
    "id": 623534343,
    "photographerId": 243,
    "image": "Travel_Lonesome.jpg",
    "tags": ["travel"],
    "likes": 88,
    "date": "2019-02-03",
    "price": 45
  }, {
    "id": 625025343,
    "photographerId": 243,
    "image": "Travel_HillsideColor.jpg",
    "tags": ["travel"],
    "likes": 85,
    "date": "2019-04-03",
    "price": 45
  }, {
    "id": 2525345343,
    "photographerId": 243,
    "image": "Portrait_Wednesday.jpg",
    "tags": ["portait"],
    "likes": 34,
    "date": "2019-04-07",
    "price": 45
  }, {
    "id": 2523434634,
    "photographerId": 243,
    "image": "Portrait_Nora.jpg",
    "tags": ["portait"],
    "likes": 63,
    "date": "2019-04-07",
    "price": 45
  }, {
    "id": 398847109,
    "photographerId": 243,
    "image": "Portrait_Background.jpg",
    "tags": ["portait"],
    "likes": 55,
    "date": "2019-06-20",
    "price": 45
  }, {
    "id": 2534342,
    "photographerId": 243,
    "image": "Event_SeasideWedding.jpg",
    "tags": ["events"],
    "likes": 25,
    "date": "2019-06-21",
    "price": 45
  }, {
    "id": 65235234,
    "photographerId": 243,
    "image": "Event_PintoWedding.jpg",
    "tags": ["events"],
    "likes": 52,
    "date": "2019-06-25",
    "price": 45
  }, {
    "id": 23523434,
    "photographerId": 243,
    "image": "Event_BenevidesWedding.jpg",
    "tags": ["events"],
    "likes": 77,
    "date": "2019-06-28",
    "price": 45
  }, {
    "id": 5234343,
    "photographerId": 243,
    "video": "Animals_Wild_Horses_in_the_mountains.mp4",
    "tags": ["animals"],
    "likes": 142,
    "date": "2019-08-23",
    "price": 60
  }, {
    "id": 95234343,
    "photographerId": 243,
    "image": "Animals_Rainbow.jpg.jpg",
    "tags": ["animals"],
    "likes": 59,
    "date": "2019-07-02",
    "price": 60
  }, {
    "id": 52343416,
    "photographerId": 195,
    "image": "Travel_Tower.jpg",
    "tags": ["travel"],
    "likes": 25,
    "date": "2019-04-03",
    "price": 60
  }, {
    "id": 2523434,
    "photographerId": 195,
    "image": "Travel_SunsetonCanals.jpg",
    "tags": ["travel"],
    "likes": 53,
    "date": "2019-05-06",
    "price": 60
  }, {
    "id": 95293534,
    "photographerId": 195,
    "image": "Travel_OpenMountain.jpg",
    "tags": ["travel"],
    "likes": 33,
    "date": "2019-05-12",
    "price": 60
  }, {
    "id": 356234343,
    "photographerId": 195,
    "image": "Travel_Bike_and_Stair.jpg",
    "tags": ["travel"],
    "likes": 53,
    "date": "2019-06-20",
    "price": 60
  }, {
    "id": 235234343,
    "photographerId": 195,
    "image": "Travel_Adventure_Door.jpg",
    "tags": ["travel"],
    "likes": 63,
    "date": "2019-06-26",
    "price": 60
  }, {
    "id": 6234234343,
    "photographerId": 195,
    "image": "Architecture_Contrast.jpg",
    "tags": ["architecture"],
    "likes": 52,
    "date": "2019-06-30",
    "price": 60
  }, {
    "id": 6525666253,
    "photographerId": 195,
    "image": "Architecture_On_a_hill.jpg",
    "tags": ["architecture"],
    "likes": 63,
    "date": "2019-07-20",
    "price": 60
  }, {
    "id": 98252523433,
    "photographerId": 195,
    "image": "Architecture_Dome.jpg",
    "tags": ["architecture"],
    "likes": 88,
    "date": "2020-01-05",
    "price": 60
  }, {
    "id": 9259398453,
    "photographerId": 195,
    "video": "Architecture_coverr_circle_empty_highway_in_buenos_aires_587740985637.mp4",
    "tags": ["architecture"],
    "likes": 57,
    "date": "2020-01-20",
    "price": 65
  }, {
    "id": 3523523534,
    "photographerId": 195,
    "image": "Architecture_Corner_Room.jpg",
    "tags": ["architecture"],
    "likes": 54,
    "date": "2020-05-05",
    "price": 60
  }, {
    "id": 952343423,
    "photographerId": 930,
    "video": "Sport_Tricks_in_the_air.mp4",
    "tags": ["sport"],
    "likes": 150,
    "date": "2018-02-30",
    "price": 70
  }, {
    "id": 235234343,
    "photographerId": 930,
    "image": "Sport_Next_Hold.jpg",
    "tags": ["sport"],
    "likes": 101,
    "date": "2018-03-05",
    "price": 65
  }, {
    "id": 235343222,
    "photographerId": 930,
    "image": "sport_water_tunnel.jpg",
    "tags": ["sport"],
    "likes": 103,
    "date": "2018-03-10",
    "price": 70
  }, {
    "id": 7775342343,
    "photographerId": 930,
    "image": "Sport_Sky_Cross.jpg",
    "tags": ["sport"],
    "likes": 77,
    "date": "2018-04-16",
    "price": 50
  }, {
    "id": 9253445784,
    "photographerId": 930,
    "image": "Sport_Race_End.jpg",
    "tags": ["sport"],
    "likes": 88,
    "date": "2018-04-22",
    "price": 65
  }, {
    "id": 22299394,
    "photographerId": 930,
    "image": "Sport_Jump.jpg",
    "tags": ["sport"],
    "likes": 95,
    "date": "2018-04-27",
    "price": 70
  }, {
    "id": 3452342633,
    "photographerId": 930,
    "image": "Architecture_White_Light.jpg",
    "tags": ["architecture"],
    "likes": 52,
    "date": "2018-05-03",
    "price": 75
  }, {
    "id": 939234243,
    "photographerId": 930,
    "image": "Architecture_Water_on_Modern.jpg",
    "tags": ["architecture"],
    "likes": 55,
    "date": "2018-05-10",
    "price": 72
  }, {
    "id": 222959233,
    "photographerId": 930,
    "image": "Architecture_Horseshoe.jpg",
    "tags": ["architecture"],
    "likes": 85,
    "date": "2018-05-15",
    "price": 71
  }, {
    "id": 965933434,
    "photographerId": 930,
    "image": "Architecture_Cross_Bar.jpg",
    "tags": ["architecture"],
    "likes": 66,
    "date": "2018-05-20",
    "price": 58
  }, {
    "id": 777723343,
    "photographerId": 930,
    "image": "Architecture_Connected_Curves.jpg",
    "tags": ["architecture"],
    "likes": 79,
    "date": "2018-05-21",
    "price": 80
  }]
};
},{}],"component/photographers/Photographer.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _FishEyeDataFR = _interopRequireDefault(require("../../../FishEyeDataFR.json"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
},{"../../../FishEyeDataFR.json":"../FishEyeDataFR.json"}],"component/photographers/PhotographerFactory.js":[function(require,module,exports) {
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
},{"./Photographer":"component/photographers/Photographer.js"}],"component/MainPage.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _FishEyeDataFR = _interopRequireDefault(require("./../../FishEyeDataFR.json"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var MainPage = /*#__PURE__*/function () {
  function MainPage() {
    _classCallCheck(this, MainPage);
  }

  _createClass(MainPage, null, [{
    key: "DOMConstructHeader",
    value: // method template header
    function DOMConstructHeader() {
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
      this.tags.map(function (tag) {
        var spanNav = document.createElement("span");
        var linkNav = document.createElement("a");
        linkNav.href = "#";
        spanNav.classList.add("tag");
        headerNav.appendChild(spanNav);
        spanNav.appendChild(linkNav);
        linkNav.innerHTML = "#" + tag;
      });
    }
  }, {
    key: "sortingProfile",
    value: function sortingProfile(e) {
      var tag = e.target.innerHTML;
      tag = tag.toLowerCase().substring(1, tag.length);

      var photographers = _FishEyeDataFR.default.photographers.map(function (item) {
        return item;
      });

      var idArray = [];
      photographers.map(function (photographer) {
        var photographerProfile = document.querySelector("#profile-".concat(photographer.id));

        if (photographer.tags.includes(tag) === false) {
          idArray.push(photographer.id);
        }

        photographerProfile.style.removeProperty("display");
      });
      idArray.forEach(function (id) {
        var photographerCard = document.querySelector("#profile-".concat(id));
        photographerCard.style.display = "none";
      });
    } //method template main landing page

  }, {
    key: "DOMConstructMain",
    value: function DOMConstructMain() {
      var main = document.createElement("main");
      var sectionContainer = document.createElement("section");
      var mainTitle = document.createElement("h1");
      main.classList.add("main");
      sectionContainer.classList.add("profiles");
      mainTitle.classList.add("main-title");
      mainTitle.innerHTML = "Nos photographes";
      document.body.appendChild(main);
      main.appendChild(sectionContainer);
      main.prepend(mainTitle);
      return sectionContainer;
    } //method template profiles

  }, {
    key: "DOMConstructMainProfiles",
    value: function DOMConstructMainProfiles(photographer) {
      var figure = document.createElement("figure");
      var profileLink = document.createElement('a');
      var profileImg = document.createElement('img');
      var profileTitle = document.createElement('h2');
      var profileFigcaption = document.createElement('figcaption');
      var profiltCity = document.createElement('p');
      var profileQuote = document.createElement('p');
      var profilePrice = document.createElement('p');
      figure.classList.add("profile");
      figure.id = "profile-" + photographer.id;
      profileLink.classList.add("img-profile-link");
      profileLink.setAttribute("data-portraitId", photographer.id);
      profileTitle.classList.add("name");
      profileFigcaption.classList.add("info-profile");
      profiltCity.classList.add("city");
      profileQuote.classList.add("quote");
      profilePrice.classList.add("price");
      profileLink.href = "#";
      profileImg.src = photographer.portrait;
      profileImg.alt = "photo profil de ".concat(photographer.name);
      profileImg.classList.add("img-".concat(photographer.id));
      photographer.tags.map(function (tag) {
        var profileSpan = document.createElement('span');
        var profileSpanLink = document.createElement('a');
        profileSpanLink.href = "#";
        profileSpan.classList.add("tag");
        profileSpanLink.innerHTML = "#" + tag;
        profileSpan.appendChild(profileSpanLink);
        profileFigcaption.appendChild(profileSpan);
      });
      profileTitle.innerHTML = photographer.name;
      profiltCity.innerHTML = "".concat(photographer.city, " ") + "".concat(photographer.country);
      profileQuote.innerHTML = photographer.tagline;
      profilePrice.innerHTML = photographer.price + '€';
      figure.appendChild(profileLink);
      profileLink.appendChild(profileImg);
      figure.appendChild(profileTitle);
      figure.appendChild(profileFigcaption);
      profileFigcaption.appendChild(profiltCity);
      profileFigcaption.appendChild(profileQuote);
      profileFigcaption.appendChild(profilePrice);
      return figure;
    }
  }]);

  return MainPage;
}();

exports.default = MainPage;

_defineProperty(MainPage, "tags", ["Portrait", "Art", "Fashion", "Architecture", "Travel", "Sport", "Animals", "Events"]);
},{"./../../FishEyeDataFR.json":"../FishEyeDataFR.json"}],"component/ProfilPages.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _FishEyeDataFR = _interopRequireDefault(require("../../FishEyeDataFR.json"));

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
    value: function changePage(photographer) {
      document.querySelector(".main").innerHTML = "";
      document.querySelector("nav").remove();
      var infoProfile = document.createElement('section');
      var IDName = document.createElement("h2");
      var IDLocation = document.createElement("p");
      var IDTagline = document.createElement("p");
      var btnContact = document.createElement('button');
      infoProfile.appendChild(IDName);
      infoProfile.appendChild(IDLocation);
      infoProfile.appendChild(IDTagline);
      photographer.tags.map(function (tag) {
        var profileSpan = document.createElement('span');
        var profileSpanLink = document.createElement('a');
        profileSpanLink.href = "#";
        profileSpan.appendChild(profileSpanLink);
        profileSpanLink.innerHTML = "#" + tag;
        profileSpan.classList.add("tag");
        infoProfile.appendChild(profileSpan);
      });
      infoProfile.appendChild(btnContact);
      var IDImg = document.createElement('img');
      infoProfile.appendChild(IDImg);
      IDImg.src = "./../SamplePhotos/Photographers_ID_Photos/" + photographer.portrait;
      IDImg.alt = "photo profil de ".concat(photographer.name);
      IDName.innerHTML = photographer.name;
      IDLocation.innerHTML = "".concat(photographer.city) + "".concat(photographer.country);
      IDTagline.innerHTML = photographer.tagline;
      btnContact.innerHTML = "Contactez-moi";
      infoProfile.classList.add("profileID");
      IDName.classList.add("name");
      IDLocation.classList.add("city");
      IDTagline.classList.add("quote");
      btnContact.classList.add('btn-contact');
      IDImg.classList.add("img-profile-link");
      document.querySelector(".main").appendChild(infoProfile);
      var media = _FishEyeDataFR.default.media;
      var infoGallery = document.createElement("section");
      var label = document.createElement("label");
      var input = document.createElement("select");
      var optArray = ["Popularité", "Date", "Titre"];
      input.classList.add("select");
      infoGallery.appendChild(label);
      infoGallery.appendChild(input);
      label.innerHTML = "Trier par";

      for (var i = 0; i < optArray.length; i++) {
        var optContent = optArray[i];
        var option = document.createElement("option");
        option.value = optContent;
        option.text = optContent;
        input.appendChild(option);
      }

      media.map(function (photos) {
        var photoFigure = document.createElement("figure");
        var photoLegend = document.createElement("figcaption");
        var spanPrice = document.createElement("span");
        var spanLikes = document.createElement("span");
        var imageGallery = document.createElement('img');
        var videoGallery = document.createElement('video');
        var sourceVideoGallery = document.createElement('source');
        photoFigure.appendChild(imageGallery);
        photoFigure.appendChild(photoLegend);
        videoGallery.appendChild(sourceVideoGallery);
        infoGallery.appendChild(videoGallery);
        imageGallery.src = photos.image;
        sourceVideoGallery.src = photos.video;
        spanPrice.innerHTML = photos.price + "€ ";
        spanLikes.innerHTML = photos.likes + '<i class="fas fa-heart"></i>';
        photoLegend.appendChild(spanPrice);
        photoLegend.appendChild(spanLikes);
        infoGallery.appendChild(photoFigure);
      });
      document.querySelector(".main").appendChild(infoGallery);
    }
  }]);

  return ProfilPages;
}();

exports.default = ProfilPages;
},{"../../FishEyeDataFR.json":"../FishEyeDataFR.json"}],"index.js":[function(require,module,exports) {
"use strict";

var _FishEyeDataFR = _interopRequireDefault(require("../FishEyeDataFR.json"));

var _PhotographerFactory = _interopRequireDefault(require("./component/photographers/PhotographerFactory"));

var _MainPage = _interopRequireDefault(require("./component/MainPage"));

var _ProfilPages = _interopRequireDefault(require("./component/ProfilPages"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//stocker les données des photographes du fichier JSON
var photographersInfo = _FishEyeDataFR.default.photographers;
var media = _FishEyeDataFR.default.media;

var getPhotographerById = function getPhotographerById(id) {
  return photographersInfo.find(function (photographer) {
    return photographer.id === Number(id);
  });
};

function init() {
  //creation du DOM header
  _MainPage.default.DOMConstructHeader(); //Création d'instances de classes et ajout dans le DOM


  var photographersProfile = photographersInfo.map(function (photographerInfo) {
    var photographer = _PhotographerFactory.default.create(photographerInfo);

    return _MainPage.default.DOMConstructMainProfiles(photographer);
  }); //Construction du container et envoi des enfant dans le parent

  var main = _MainPage.default.DOMConstructMain();

  photographersProfile.map(function (profile) {
    main.appendChild(profile);
  });
  document.querySelectorAll("nav > .tag > a").forEach(function (tag) {
    tag.addEventListener('click', _MainPage.default.sortingProfile);
  });
  document.querySelectorAll(".profile .img-profile-link").forEach(function (profile) {
    profile.addEventListener('click', function (evt) {
      var id = evt.currentTarget.getAttribute("data-portraitId");

      _ProfilPages.default.changePage(getPhotographerById(id));
    });
  });
} // Evenemment d'initiation du document


document.addEventListener("DOMContentLoaded", init);
},{"../FishEyeDataFR.json":"../FishEyeDataFR.json","./component/photographers/PhotographerFactory":"component/photographers/PhotographerFactory.js","./component/MainPage":"component/MainPage.js","./component/ProfilPages":"component/ProfilPages.js"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "50919" + '/');

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