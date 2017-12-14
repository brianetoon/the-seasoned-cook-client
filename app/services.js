'use strict';

var myApp = angular.module('myApp');

myApp.service('recipeFactory', function(){

	var recipes = [
		{
			_id: 0,
			name: 'Green Eggs and Ham',
			description: 'A Dr. Seuss classic breakfast',
			ingredients: [
				'Eggs',
				'Ham',
				'Green food coloring'
			],
			directions: [
				'Cook the eggs your favorite way',
				'While the eggs are cooking add a few drops of green food coloring',
				'Serve along side the ham and enjoy'
			],
			vegetarian: false,
			thumb: "content/images/greeneggsandham.png"
		},
		{
			_id: 1,
			name: 'Beef Stew',
			description: 'A Toon family comfort food favorite',
			ingredients: [
				'Chuck Roast',
				'Onions',
				'Carrots',
				'Mushrooms',
				'Potatoes',
				'Beef or Chicken Stock',
				'Extra Virgin Olive Oil'
			],
			directions: [
				'Sear all sides of the roast in a large cooking pot',
				'Add the stock to the cooking pot and allow to simmer on low heat for 2 hours',
				'Remove pot from heat and allow to cool',
				'Put the pot in the refrigerator over night',
				'Remove the hardened fat from the top of the cooking pot',
				'Remove the roast and cut it into bit size chunks',
				'Reheat the stock and add the vegetables and let them cook on low heat for 2 hours',
				'Add the cut up meat back to the pot and let it cook for another 30 minutes'
			],
			vegetarian: false,
			thumb: "content/images/beefstew.jpg"
		},
		{
			_id: 2,
			name: 'Turd Soup',
			description: 'A Luigi specialty',
			ingredients: [
				'broth',
				'some turds'
			],
			directions: [
				'warm up the broth',
				'fetch some turds',
				'add turds to the soup'
			],
			vegetarian: false,
			thumb: "content/images/soup.jpg"
		}
	];

		this.getRecipes = function(){
			return recipes;
		};
		
		this.getRecipe = function(index){
			return recipes[index];
		};

});