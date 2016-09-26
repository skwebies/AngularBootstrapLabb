angular.module("productListing")
    .controller("ProductsController",
    [
        "$scope",
        function($scope) {
            $scope.title = "Products";
        }
    ]);