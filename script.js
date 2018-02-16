/*Utilising Angular to get the JSON file with article details to push to the view.
This requires us to define the module we will be utilising.

Note: Name of the module is defined in the top of index.html in the html tag. This is
how we connect the two */

var app = angular.module("newsApp", []);

/*As the article.json file is its own file to emulate external file scenarios, we will need conduct a http request
to obtain this information. This will mean this code will not function on usual desktop environments and will
require the files to be hosted online.

More details on accessing a full demo of this app is available in the README.md*/

app.controller("MainController", function($scope, $http) {
    var article = $http.get("articles.json");
    
    /*Once get request is successful, use the response to get the values in the JSON file and set the $scope object values*/ 
    article.then(function(response){
      /*Angular allows us to grab the data in JSON arrays simply by using the array names*/ 
      $scope.sports = response.data.Sports;
    });
});

