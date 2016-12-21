angular.module('myApp', ['ngMessages']) // inject ngmessages-module as dependency
    .constant('VERSION', '2.0')
    .run(function(VERSION, $rootScope) { // With run I inject the scope into the rootScope = everywhere
	    $rootScope.version = VERSION;
	})
    .controller('MyCtrl', function($scope) { // With controller I use for logical blocks of code to inject on certain tags
    	// if statement that changes the array value used based upon the 
    	// value of the model.  The chosenPronouns array will be updated 
        this.check = function (gender){
            if (gender == "male") {
            this.chosenPronouns = ['he', 'him', 'his', 'He'];
            } else {
            this.chosenPronouns = ['she', 'her', 'her', 'She'];
            }  
        }
       
        this.firstScreen = true;

        this.submit = function(){
            if( this.userInputForm.$valid ) {
                this.inputValidated = true;
                this.inputComplete = false;
                this.firstScreen = false;
            } else {
                this.inputValidated = false;
                this.inputComplete = true;
            }
        }

        this.startOver = function(){
            this.firstScreen = true;
            this.inputValidated = false; 
            this.name =""; // this. -> I need to put vm. infront of every version
            $scope.dirtyTask =""; // $scope. -> I only need to put it here
            $scope.obnoxiousCelebrity ="";
            $scope.jobTitle ="";
            $scope.celebrity ="";
            $scope.hugeNumber ="";
            $scope.tediousTask ="";
            $scope.uselessSkill ="";
            $scope.adjective ="";
            this.userInputForm.$setPristine(); // I could have just put $scope in front without having to add .vm everywhere in html code
        }

    });


