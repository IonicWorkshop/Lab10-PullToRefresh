angular.module('starter')
    .controller('ContactsCtrl', function ($scope, ContactsService) {
        $scope.contacts = [];

        ContactsService.GetContacts()
            .then(function(items){
            $scope.contacts = items;
            console.log(items);
        });

    });