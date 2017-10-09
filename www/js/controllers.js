angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('CachorrosCtrl', function($scope) {
    $scope.animais = [
      {
        "id"        : "1",
        "nome"      : "Thor",
        "descricao" : "blablablablablablablablablablablablabla",
        "contato"   : "2345678",
        "imagem"    : "http://lorempixel.com/300/150/animals/55"
      },
      {
        "id"        : "2",
        "nome"      : "Eike",
        "descricao" : "duxduxduxduxduxduxduxduxduxduxduxduxdux",
        "contato"   : "1223131323",
        "imagem"    : "http://lorempixel.com/300/150/animals/55"
      },
      {
        "id"        : "3",
        "nome"      : "Cunha",
        "descricao" : "freifreifreifreifreifreifreifreifreifrei",
        "contato"   : "5656756",
        "imagem"    : "http://lorempixel.com/300/150/animals/55"
      },
      {
        "id"        : "4",
        "nome"      : "Aecio",
        "descricao" : "calancalancalancalancalancalancalancalan",
        "contato"   : "675776576",
        "imagem"    : "http://lorempixel.com/300/150/animals/55"
      }
    ];
})

.controller('CachorroCtrl', function($scope) {
    $scope.titulo = "AQUI TEREMOS DETALHES DOS CACHORROS, AGUARDEM";
    $scope.animais = [
      {
        "id"        : "1",
        "nome"      : "Thor",
        "descricao" : "blablablablablablablablablablablablabla",
        "contato"   : "2345678",
        "imagem"    : "http://lorempixel.com/300/150/animals/55"
      }
    ];
})


.controller('GatosCtrl', function($scope) {
    $scope.animais = [];
})

.controller('PerfilCtrl', function($scope) {

  
});
