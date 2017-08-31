'use strict'

//ngRoute is the dependency for this module
//ng-app="hotels" in HTML links to this module
var app = angular.module('hotels', ['ngRoute', 'ngMessages']);

app.controller('HotelsCtrl', ['$scope', '$timeout', function($scope, $timeout) {

	//DEFINE SPINNER HERE
	$scope.loaded = false;

	//ANGULAR EQUIVALENT OF JQUERY $
	angular.element(".overlay").toggle();

	$timeout(function() {
		$scope.loaded = true;
		angular.element(".overlay").toggle();
	}, 1500);

	//DEFINE SEARCH MODEL "ng-model='search'"
	this.search = {};

	this.searchAvailability = function() {
		this.displayAnimation = true;
		angular.element("a#transition")[0].click();
	};

	//asign properties to our room object
	//this = HotelsCtrl
	this.rooms = mockRoom;
	//ng-show in HTML only prints if true boolean logic
	// if(this.room.kitchen == true) {
	// 	this.room.kitchen = "kitchen";
	// }
	// else {
	// 	this.room.kitchen = "no kitchen";
	// }

	this.isPromoted = function(room) {
		if(room.promotion != null || room.promotion != undefined) {
			return "promote";
		} else {
			return "regular";
		}
	}

	this.booking = function(room) {
		alert(room.roomNumber + " is booked!")
	};
}]);

var mockRoom = [{ 
	"size" : "studio",
	"beds" : 1,
	"kitchen" : true,
	"price" : "99.99",
	"promotion" : {
		"discount" : "30%",
		"message" : "Reserve it today!",
		"promoPrice" : "79.99"
	},
	"roomNumber" : 201,
	"isBooked" : false
},
{ 
	"size" : "studio",
	"beds" : 1,
	"kitchen" : true,
	"price" : "99.99",
	"roomNumber" : 203,
	"isBooked" : false
},
{ 
	"size" : "queen",
	"beds" : 2,
	"kitchen" : true,
	"price" : "127.99",
	"roomNumber" : 205,
	"isBooked" : false
}
];