'use strict'

angular
  .module('testApp',[])
  .controller('testPlanCtrl',function testPlanCtrl($scope,$http){
    $scope.tools;

    $scope.recuperaJSON = function(){
      $http.get('js/tools.json').then(function(response){$scope.tools = response.data.tools;});
    }

    $scope.enviaJSON = function(){
      $http.post('js/tools.json',$scope.tools)
        .success(function(data){
          console.log(data);
          return true;
        })
        .error(function(data){
          console.log(data);
          return false;
        });
    }

    $scope.recuperaJSON();
  });
