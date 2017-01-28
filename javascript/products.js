(function() {

	var app = angular.module("store-directives", []);

  	// Directive for the product description
  	app.directive("productDescription", function(){
    	return {
      		restrict: 'E',
      		templateUrl: 'html_modules/product-description.html'
    	};
  	});

  	// Directive for the product specs
  	app.directive("productSpecs", function(){
    	return {
    		restrict: 'A',
      		templateUrl: 'html_modules/product-specs.html'
    	};
  	});

  	// Directive for the reviews
  	app.directive("productReviews", function(){
    	return {
    		restrict: 'E',
      		templateUrl: 'html_modules/product-reviews.html'
    	};
  	});

  	// Directive for the product tabs
  	app.directive("productTabs", function(){
		return {
	  		restrict: 'E',
	      	templateUrl: 'html_modules/product-tabs.html',
	      	controller: function(){

	        	this.tab = 1;

		        this.setTab = function(setTab){
		        	this.tab = setTab;
	        	};

	        	this.isSet = function(passedTab){
	         		return this.tab == passedTab;
	        	};

	      	},
	      	controllerAs: 'tab'
		};
	});

  	// Directive for the product gallery
  	app.directive("productGallery", function(){
    	return {
      		restrict: 'E',
      		templateUrl: 'html_modules/product-gallery.html',
      		controller: function() {
        		this.current = 0;
        		this.setCurrent = function(imageNumber){
          			this.current = imageNumber || 0;
        		};
      		},
      		controllerAs: 'gallery'
    	};
  	});

})();
