'use strict';

    app.controller('MainController', function ($scope, $routeParams, filterProvider, tagsProvider) {

      // boolean variables

      $scope.fullWidth = false;
      $scope.showUserMenu = false;
      $scope.showSorting = false;


      $scope.popupState = {
        showPopup   : false,
        isCreating  : false,
        isEditing   : false
      };

      $scope.setPopupValue = function() {
        $scope.popupState.showPopup = !$scope.popupState.showPopup;
        return true;
      }

      // routing

      if(angular.isUndefined($routeParams.status)) {
  		    $scope.status = "";
          $scope.sortStatus = "";
      } else {
          $scope.sortStatus = $routeParams.status;
          if ($routeParams.status=="all") {
            $scope.status = '';
          } else {
            $scope.status = ($routeParams.status=="complete") ? true : false;
          }
      }

      if(angular.isUndefined($routeParams.tags)) {
  		    $scope.sortTags = "";
      } else {
          $scope.sortTags = tagsProvider.findTagByName($routeParams.tags).id;
          $scope.status = '';
      }

      // filters

      $scope.activeFilter = undefined;
      $scope.filters = filterProvider.getFilters();

      $scope.filterName = 'All Tasks';

      $scope.getFilterName = function() {
          angular.forEach($scope.filters, function(value) {
              if ( value.status ==  $scope.sortStatus) {
                  $scope.filterName =  value.text;
              }
          });

          return $scope.filterName;
      };

    });
