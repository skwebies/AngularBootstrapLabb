/// <reference path="../angular.js" />
/// <reference path="../angular-route.js" />

angular.module("productListing")
    .controller("MainController",
    [
        "$scope",
        "$location",
        "$route",
        function($scope, $location, $route) {
        	$scope.$route = $route;

        	$scope.products = [];


        	$scope.go = function (url) {
        		$location.path(url);
        	}
        }
    ]);