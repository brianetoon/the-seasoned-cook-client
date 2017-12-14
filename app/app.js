'use strict';

var myApp = angular.module('myApp', ['ui.router']);

myApp.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
	$stateProvider
	.state('home',{
		url: '/',
		templateUrl: 'views/home.html'
	})
	.state('recipes',{
		url: '/recipes',
		templateUrl: 'views/recipes.html',
		controller: 'RecipesController'
	})
	.state('recipe',{
		url: '/recipes/:id',
		templateUrl: 'views/recipe.html',
		controller: 'RecipeController'
	})
	.state('firstMessage', {
		url: '/first-msg',
		templateUrl: 'views/msg1.html',
		controller: 'msg1'
	})
	.state('secondMessage', {
		url: '/second-msg',
		templateUrl: 'views/msg2.html',
		controller: 'msg2'
	});
	// .state('noroute', {
	// 	url: '*path',
	// 	template: '<strong>no route avaialable...try clicking on links</strong>'
	// });

	$urlRouterProvider.otherwise('/');
}]);


myApp.controller('RecipesController', ['$scope', 'recipeFactory', function($scope, recipeFactory){

	$scope.recipes = recipeFactory.getRecipes();

}]);

myApp.controller('RecipeController', ['$scope', '$stateParams', 'recipeFactory', function($scope, $stateParams, recipeFactory){

	$scope.recipe = recipeFactory.getRecipe(parseInt($stateParams.id,10));

}]);