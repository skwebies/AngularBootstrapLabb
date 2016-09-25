/// <reference path="../angular.js" />
/// <reference path="../angular-route.js" />

angular.module("productListing")
    .controller("MainController",
    [
        "$scope",
        "$route",
        function($scope, $route) {
        	$scope.$route = $route;

            $scope.products = [];
        }
    ]);