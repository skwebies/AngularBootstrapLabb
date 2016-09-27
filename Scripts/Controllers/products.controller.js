﻿angular.module("productListing")
    .controller("ProductsController",
    [
        "$scope",
        function($scope) {
            $scope.title = "Products";
            

            $scope.newProduct = {};

            $scope.addProduct = function() {
                $scope.products.push($scope.newProduct);
                $scope.newProduct = {};

                $scope.saveProducts();

            }
            $scope.removeProduct = function($index) {
                $scope.products.splice($index, 1);
                alert("Confirm deletion?");
                $scope.saveProducts();

                //$scope.isEmpty = false;
                //if ($scope.products.length <= 0) {
                //    $scope.isEmpty = true;
                //}

                
            }
        }
    ]);