(function(angular, data, _){
  // Your code should be here

  var myAPP = angular.module('myAPP', []);
  myAPP.controller('mainController', function($scope) {
       $scope.books = data.books;
        $scope.booksFiltered = data.books;
       $scope.publishers= _.uniq(_.flatten(_.map(data.books,function(book) {
        return book.publisher;
    })));
    $scope.tags = _.uniq(_.flatten(_.map(data.books,function(book){
        return _.map(book.tags,function(tag){
            return tag.name;
        });
    })));
    $scope.change = function(){

                var publisher = $scope.publisher_name;
                var tag = $scope.tags_name;

            var temp = $scope.books;
                if( (!_.isNull(publisher)) && (!_.isUndefined(publisher)) )
                    var temp = _.where($scope.books, {publisher: $scope.publisher_name});
                if( (!_.isNull(tag)) && (!_.isUndefined(tag)) ){
                    temp = _.filter(temp, function(book){
                        return _.contains(_.pluck(book.tags, 'name'), $scope.tags_name);
                    });
                }
                $scope.booksFiltered = temp;
            }
  });
})(angular, data, _);

