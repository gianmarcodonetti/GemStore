(function() {

	var gem = {
		name: 'Azurite',
		price: 110.50,
		canPurchas: false,
		soldOut: true
	};

  // The angular module
	var app = angular.module("gemStore", ["store-directives"]);

  // General controller
	app.controller('StoreController', ['$http', function($http) {
    var store = this;
    store.products = [];
		$http.get('data/store-products.json').then(function(json){
      console.log(json.status + " - Success in the http.get!");
      store.products = json.data;
    });
	}]);

  /* Useless, we have the custom directive below
  // Controller for the tab with the information on: description, specs, reviews
  app.controller('TabController', function() {
    this.tab = 1;
    this.setTab = function(setTab){
      this.tab = setTab;
    };
    this.isSet = function(passedTab){
      return this.tab == passedTab;
    };
  });
  */

  /* Useless, we have a custom directive
  // Controller for the images gallery
  app.controller('GalleryController', function() {
    this.current = 0;
    this.setCurrent = function(setCurrent){
      if (setCurrent !== null){
        this.current = setCurrent;
      } else {
        this.current = 0;
      }
    };
  });
  */

  // Controller for the live review
  app.controller('ReviewController', function() {
    this.review = {};

    this.addReview = function(product){
      this.review.createdOn = Date.now();
      product.reviews.push(this.review); // push the current review to the product's reviews list
      this.review = {}; // empty the current review
    };
  });



  // All the data
	var gems = [{
  	name: 'Azurite',
  	description: "Some gems have hidden qualities beyond their luster, beyond their shine... Azurite is one of those gems.",
  	shine: 8,
  	price: 110.50,
  	rarity: 7,
  	color: '#CCC',
  	faces: 14,
  	images: [
  		"http://dhg7upb7j7jqa.cloudfront.net/shaping_up_with_angular_js/assets/demo/images/gem-02.gif",
    	"http://dhg7upb7j7jqa.cloudfront.net/shaping_up_with_angular_js/assets/demo/images/gem-05.gif",
    	"http://dhg7upb7j7jqa.cloudfront.net/shaping_up_with_angular_js/assets/demo/images/gem-09.gif"
  	],
  	reviews: [{
    	stars: 5,
    	body: "I love this gem!",
    	author: "joe@example.org",
    	createdOn: 1397490980837
    	}, {
    	stars: 1,
    	body: "This gem sucks.",
    	author: "tim@example.org",
    	createdOn: 1397490980837
  	}]
  	}, {
  	name: 'Bloodstone',
  	description: "Origin of the Bloodstone is unknown, hence its low value. It has a very high shine and 12 sides, however.",
  	shine: 9,
  	price: 22.90,
  	rarity: 6,
  	color: '#EEE',
  	faces: 12,
  	images: [
    	"http://dhg7upb7j7jqa.cloudfront.net/shaping_up_with_angular_js/assets/demo/images/gem-01.gif",
    	"http://dhg7upb7j7jqa.cloudfront.net/shaping_up_with_angular_js/assets/demo/images/gem-03.gif",
    	"http://dhg7upb7j7jqa.cloudfront.net/shaping_up_with_angular_js/assets/demo/images/gem-04.gif"
  	],
  	reviews: [{
    	stars: 3,
    	body: "I think this gem was just OK, could honestly use more shine, IMO.",
    	author: "JimmyDean@example.org",
    	createdOn: 1397490980837
  	}, {
    	stars: 4,
    	body: "Any gem with 12 faces is for me!",
    	author: "gemsRock@example.org",
    	createdOn: 1397490980837
  	}]
  	}, {
  	name: 'Zircon',
  	description: "Zircon is our most coveted and sought after gem. You will pay much to be the proud owner of this gorgeous and high shine gem.",
  	shine: 70,
  	price: 1100,
  	rarity: 2,
  	color: '#000',
  	faces: 6,
  	images: [
    	"http://dhg7upb7j7jqa.cloudfront.net/shaping_up_with_angular_js/assets/demo/images/gem-06.gif",
    	"http://dhg7upb7j7jqa.cloudfront.net/shaping_up_with_angular_js/assets/demo/images/gem-07.gif",
    	"http://dhg7upb7j7jqa.cloudfront.net/shaping_up_with_angular_js/assets/demo/images/gem-09.gif"
  	],
  	reviews: [{
    	stars: 1,
    	body: "This gem is WAY too expensive for its rarity value.",
    	author: "turtleguyy@example.org",
    	createdOn: 1397490980837
  	}, {
  	stars: 1,
  	body: "BBW: High Shine != High Quality.",
  	author: "LouisW407@example.org",
  	createdOn: 1397490980837
  	}, {
  	stars: 1,
    	body: "Don't waste your rubles!",
    	author: "nat@example.org",
    	createdOn: 1397490980837
  	}]
  }];

}) ();