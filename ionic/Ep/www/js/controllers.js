angular.module('starter.controllers', [])

//metodo que chama os dados da API ou lista no array

.controller('DashCtrl', function($scope, $http,$ionicModal) {
$scope.lista = [];
 var headers = {
  "authorization": "Basic MjY4ZTE3YjktZWZkMS00MDc1LWIxNjAtNWExMDY5NTE5YmIwOjg4OTBiY2YzLTgyMTItNDE0Zi1hOTkyLWZlMWQxZWEzZGNiNA==",
  "content-type": "application/json",
  "accept": "application/json",
  "host": "appintel.apispark.net",
  "login":"268e17b9-efd1-4075-b160-5a1069519bb0",
  "password":"8890bcf3-8212-414f-a992-fe1d1ea3dcb4"
};


 $scope.btnAlterar = false;
 
 $scope.alterar = function(){
  
  $scope.btnAlterar = true;


 }

$scope.ver = function(id){

 $scope.nomeV = $scope.lista[id].nome;
  $scope.idV = $scope.lista[id].id;
 $scope.telefoneV = $scope.lista[id].telefone;
 $scope.operadoraV = $scope.lista[id].operadora;



}

 $scope.carregar = function(){

var url = "https://appintel.apispark.net/v1/cadastros/";
$http({
  method: 'GET',
  url: url,
  headers :headers
}).success(function(data){
  $scope.lista = data;
 console.log(data);
}).error(function(data){
});
 }

 $scope.carregar();

  $scope.cadastrar = function(valores){
  var data = {
    
    nome:valores.nome,
    telefone:valores.telefone,
    operadora:valores.operadora

   };
   console.log(data);

   var url = "https://appintel.apispark.net/v1/cadastros/";
   $http({
      method: 'POST',
      url: url,
      data: data,
      headers :headers
   }).success(function(data){
    $scope.lista.push(angular.copy(data));
    $scope.closeAdd();
   }).error(function(data){
   });
  }



   $scope.atualizar = function(id){
  var data = {
    
    nome:valores.nome,
    telefone:valores.telefone,
    operadora:valores.operadora

   }

   var url = "https://appintel.apispark.net/v1/cadastros/"+id;
   $http({
      method: 'PUT',
      url: url,
      data: data,
      headers :headers
   }).success(function(data){

    console.log(data);
    
   }).error(function(data){
   });
  }


  $scope.deletar= function( id){

   var url = "https://appintel.apispark.net/v1/cadastros/"+id;
   $http({
      method: 'DELETE',
      url: url,
      headers :headers
   }).success(function(data){

    console.log(data);
    
   }).error(function(data){
   });
  }



 $ionicModal.fromTemplateUrl('templates/tab-account.html', {
   scope: $scope
 }).then(function(modal) {
  $scope.modal4 = modal;

 }); 

// Triggered in login modal to close it
 $scope.closeAdd = function(){
  $scope.modal4.hide();

 };

   // open the login modal
    $scope.add = function(){
      $scope.modal4.show();

    };
});
