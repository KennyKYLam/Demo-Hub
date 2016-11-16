var app = angular.module('demoHub', []).config(function($sceDelegateProvider) {
    $sceDelegateProvider.resourceUrlWhitelist([
        // Allow same origin resource loads.
        'self',
        // Allow all domains.
        'https://**',
        'http://**'
    ]);
});
app.controller('MainController', function($scope) {
    $scope.inputWebAddress = "https://ubereats.com/toronto/";
    $scope.preset = [
        { title: "iPhone 7 Plus", type: "phone", width: 414, height: 628 },
        { title: "iPhone 7", type: "phone", width: 375, height: 559 },
        { title: "iPhone 4", type: "phone", width: 320, height: 480 }
    ]
    $scope.currentDevices = [];
    $scope.demo = true;
    $scope.maxWidth = window.innerWidth - 200;
    $scope.maxHeight = 1000;
    var defaultDevice = {
        title: "Kenny's Phone",
        type: "phone",
        width: 380,
        height: 450,
    };
    $scope.device = defaultDevice;
    $scope.save = function(item) {
        $scope.currentDevices.push(item);
        $scope.device = {
            title: "Kenny's Phone",
            type: "phone",
            width: 380,
            height: 450,
        };
    };
    $scope.delete = function(index) {
        $scope.currentDevices.splice(index, 1);
    };
    $scope.closeDemo = function() {
        $('#addDeviceModal').openModal();
        $scope.demo = false;
        $scope.currentDevices = [];
    };
    //Demo
    $scope.currentDevices.push({
        title: "Kenny's Demo Phone",
        type: "phone",
        width: 180,
        height: 300,
    });
    $scope.currentDevices.push({
        title: "Kenny's Demo Tablet",
        type: "tablet",
        width: 450,
        height: 300,
    });
    $scope.currentDevices.push({
        title: "Kenny's Demo Monitor",
        type: "monitor",
        width: 450,
        height: 250,
    });
});

$(document).ready(function() {
    $('select').material_select();
    $(".dropdown-button").dropdown();
});
