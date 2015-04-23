angular.module('starter')
    .controller('ContactsCtrl', function ($scope, ContactsService) {
        $scope.contacts = [];

        ContactsService.GetContacts()
            .then(function(items){
            $scope.contacts = items;
            console.log(items);
        });

        $scope.addContact = function () {
            ContactsService.GetNewContact().then(function(items){
                $scope.contacts = items.concat($scope.contacts);
                $scope.$broadcast('scroll.refreshComplete');
            });
        };
    });