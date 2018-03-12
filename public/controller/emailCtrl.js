var app = angular.module('emailApp', []);

app.controller('emailCtrl', ['$scope','$http','$window','$location', function ($scope, $http, $window, $location) {

$scope.sendEmail = function()
{
       //alert("Hello");
       
       console.log($scope.cust);

       $http({
           method : 'POST',
           url : '/emailRoute/send-email',
           data: $scope.cust
       }).then(function (result) {
           //alert(result.data.message);
           //if(result.data.success)
            //   $scope.location = 'http://www.google.com';
           // console.log("Data added");
            alert('Added the item to database');
           $window.location.href = "http://www.tutorialsteacher.com/angularjs/angularjs-routing";
           // $window.location.href = "/index1.html";
            //http://localhost:3000/index1.html
            //$location.path('/index1.html');
           
       }, function (error) {
          console.log(error);
          alert('Error during registration');
   });
   
}


}]);








