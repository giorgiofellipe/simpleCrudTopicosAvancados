angular.module('simpleCrudTopicosAvancados').controller('HomeController', function($scope, $rootScope){
	$rootScope.activetab = "/";
});

angular.module('simpleCrudTopicosAvancados').controller('ClientesController', function($scope, $rootScope, dataFactory){
	$rootScope.activetab = "/clientes";
	$scope.init = function init() {
		$scope.dataList = dataFactory.getData();
	};

	$scope.deleteData = function doDelete(e) {
		dataFactory.deleteData(e.currentTarget.id);
	};
	$scope.init();
});

angular.module('simpleCrudTopicosAvancados').controller('ProdutosController', function($scope, $rootScope, dataFactory){
	$rootScope.activetab = "/produtos";
	$scope.init = function init() {
		$scope.dataList = dataFactory.getData();
	};

	$scope.deleteData = function doDelete(e) {
		dataFactory.deleteData(e.currentTarget.id);
	};
	$scope.init();
});

angular.module('simpleCrudTopicosAvancados').controller('PedidosController', function($scope, $rootScope, dataFactory){
	$rootScope.activetab = "/pedidos";
	$scope.init = function init() {
		$scope.dataList = dataFactory.getData();
	};
	
	$scope.deleteData = function doDelete(e) {
		dataFactory.deleteData(e.currentTarget.id);
	};
	$scope.init();
});


app.factory('dataFactory', function($http) {
	var factory = {};
	factory.getData = function () {
		var values = {};
		var table	= $("form[name=form] input[name='send[type]']").val();
		var data = {from: table, type: 'select'};
		$.ajax({
			url: '/trabalho_topicos/app/data/select.php',
			type: 'POST',
			data: data,
			async: false,
			dataType: 'json',
			success: function(data) {
				values = data;
			},
			error: function() {
			}
		});
		return values;
	};

	factory.deleteData = function (chave) {
		var type = $("form[name=form] input[name='send[type]']").val();
		var where = {'codigo':chave};

		var data = {from: type, where : where};

		$.ajax({
			url: '/trabalho_topicos/app/data/delete.php',
			type: 'POST',
			data: data,
			dataType: 'json',
			success: function(data) {
				$('.refresh-page').click();
			},
			error: function() {
				alert('error!');
			}
		});
	}
	return factory;
});
