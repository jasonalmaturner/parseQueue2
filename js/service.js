var app = angular.module('parseQ');

app.service('parseService', function($http, $q){

this.postQuestion = function(data) {
	var deferred = $q.defer();
	$http({
		method: 'POST',
		data: data,
		url: 'https://api.parse.com/1/classes/q'
	}).then(function(res){
		deferred.resolve(res);
	}, function(err){
		deferred.reject(err);
	})
	return deferred.promise;
}

this.getQuestions = function() {
	var deferred = $q.defer();
	$http({
		method: 'GET',
		url: 'https://api.parse.com/1/classes/q'
	}).then(function(res){
		var data = res.data.results;
		deferred.resolve(data);
	}, function(err){
		deferred.reject(err);
	});
	return deferred.promise;
}

this.updateData = function(data){
	var deferred = $q.defer();
	$http({
		method: 'PUT',
		url: 'https://api.parse.com/1/classes/q/' + data.objectId,
		data: data
	}).then(function(res){
		deferred.resolve(res);
	}, function(err){
		deferred.reject(err);
	});
	return deferred.promise;
}

this.deleteQuestion = function(data){
	var deferred = $q.defer();
	$http({
		method: 'DELETE',
		url: 'https://api.parse.com/1/classes/q/' + data.objectId
	}).then(function(res){
		deferred.resolve(res);
	}, function(err){
		deferred.reject(err);
	})
	return deferred.promise;
}

})