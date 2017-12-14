'use strict';

var myApp = angular.module('myApp', ['ui.router']);

myApp.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
	$stateProvider

	.state('app', {
		url: '/',
		views:{
			'header': {
				templateUrl : 'views/header.html'
			},
			'content' : {
				templateUrl : 'views/home.html'
			}
		}
	})

	// .state('home',{
	// 	url: '/',
	// 	templateUrl: 'views/home.html'
	// })
	.state('app.recipes',{
		url: 'recipes',
		views: {
			'content@': {
				templateUrl: 'views/recipes.html',
				controller: 'RecipesController'
			}
		}
	})
	.state('app.recipe',{
		url: 'recipes/:id',
		views: {
			'content@': {
				templateUrl: 'views/recipe.html',
				controller: 'RecipeController'
			}
		}	
	})

	$urlRouterProvider.otherwise('/');

}]);


myApp.controller('RecipesController', ['$scope', 'recipeFactory', function($scope, recipeFactory){

	$scope.recipes = recipeFactory.getRecipes();

}]);

myApp.controller('RecipeController', ['$scope', '$stateParams', 'recipeFactory', function($scope, $stateParams, recipeFactory){

	$scope.recipe = recipeFactory.getRecipe(parseInt($stateParams.id,10));

}]);