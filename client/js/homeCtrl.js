var app = angular.module('userReg', []);
app.controller('homeCtrl', function ($scope, $http) {
    $scope.login = {
        email: "",
        pass: ""
    }
    $scope.regist = {
        name: "",
        email: "",
        pass: "",
        cpass: ""
    }

    $scope.userRegistr = function () {
        if ($scope.regist.name.length < 2) {
            alert("Please enter a valid user name !");
            return;
        }
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if ( $scope.regist.email == "" || $scope.regist.email == undefined|| !(re.test($scope.regist.email.toLowerCase()))) {
            alert("Please enter a valid email address !");
            return;

        }
        if ($scope.regist.pass.length < 4) {
            alert("Password length must be minimum 4 characters !");
            return;
        }
        if ($scope.regist.pass !== $scope.regist.cpass) {
            alert("Confirmation password do not match !");
            return;
        }
        $http({
            method: 'POST',
            url: '/user/registration',
            data: JSON.stringify($scope.regist)
        }).then(function successCallback(response) {
        }, function errorCallback(response) {
        });
    }
});