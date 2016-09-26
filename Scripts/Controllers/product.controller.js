angular.module("productListing")
    .controller("ProductController",
    [
        "$scope",
        function($scope) {
            $scope.title = "Product Details";
        }
    ]);