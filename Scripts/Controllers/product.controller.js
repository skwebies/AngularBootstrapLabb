﻿angular.module("productListing")
    .controller("ProductController",
    [
        "$scope",
        "$routeParams",
        function($scope, $routeParams) {
            $scope.title = "Product Details";

            $scope.product = $scope.products.filter(function (product) {
                return product.id == $routeParams.id;
            })[0];
        }
    ]);