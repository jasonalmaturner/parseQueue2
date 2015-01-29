var app = angular.module('parseQ');

app.controller('parseController', function($scope, parseService){

$scope.sendDaQuestion = function(){
	var question = {
		status: 'red',
		question: $scope.mahQuestion
	}
	parseService.postQuestion(question).then(function(res){
		$scope.getQuestions();
		$scope.mahQuestion = '';
	}, function(err){
		console.log(err);
	})
};

$scope.getQuestions = function(){
	parseService.getQuestions().then(function(res){
		$scope.waiting = res;
	}, function(err){
		console.log(err);
	});
};

$scope.help = function(wait){
	wait.status = 'yellow';
	parseService.updateData(wait).then(function(res){
		$scope.getQuestions();
	}, function(err){
		console.log(err);
	})
};

$scope.delete = function(object){
	parseService.deleteQuestion(object).then(function(res){
		$scope.getQuestions();
	}, function(err){
		console.log(err);
	})
}

$scope.getQuestions();
})