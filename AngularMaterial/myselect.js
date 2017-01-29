(function () {
    'use strict';
    angular
        .module('MyApp', ['ngMaterial', 'ngMessages', 'material.svgAssetsCache'])
        .controller('AppCtrl', function ($scope, myAppFactory) {
$scope.userState = '';
$scope.states = ('AL AK AZ AR CA CO CT DE FL GA HI ID IL IN IA KS KY LA ME MD MA MI MN MS ' +
                'MO MT NE NV NH NJ NM NY NC ND OH OK OR PA RI SC SD TN TX UT VT VA WA WV WI ' +
                'WY').split(' ').map(function (state) { return { abbrev: state }; });
$scope.gridOptions = {
    data: [],
    urlSync: false
};
myAppFactory.getData().then(function (responseData) {
    $scope.gridOptions.data = responseData.data;
})



        }).factory('myAppFactory', function ($http) {
            return {
                getData: function () {
                    return $http({
                        method: 'GET',
                        url: 'http://angular-data-grid.github.io/demo/data.json'
                    });
                }
            }
        });

   
})();


/**
Copyright 2016 Google Inc. All Rights Reserved. 
Use of this source code is governed by an MIT-style license that can be foundin the LICENSE file at http://material.angularjs.org/HEAD/license.
**/