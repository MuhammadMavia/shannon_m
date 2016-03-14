/* global angular, document, window */
'use strict';

angular.module('thriive.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $ionicPopover, $timeout) {
    // App Title
    $scope.app_title = 'Thriive';
    
    // Form data for the login modal
    $scope.loginData = {};
    $scope.isExpanded = false;
    $scope.hasHeaderFabLeft = false;
    $scope.hasHeaderFabRight = false;

    var navIcons = document.getElementsByClassName('ion-navicon');
    for (var i = 0; i < navIcons.length; i++) {
        navIcons.addEventListener('click', function() {
            this.classList.toggle('active');
        });
    }

    ////////////////////////////////////////
    // Layout Methods
    ////////////////////////////////////////

    $scope.hideNavBar = function() {
        document.getElementsByTagName('ion-nav-bar')[0].style.display = 'none';
    };

    $scope.showNavBar = function() {
        document.getElementsByTagName('ion-nav-bar')[0].style.display = 'block';
    };

    $scope.noHeader = function() {
        var content = document.getElementsByTagName('ion-content');
        for (var i = 0; i < content.length; i++) {
            if (content[i].classList.contains('has-header')) {
                content[i].classList.toggle('has-header');
            }
        }
    };

    $scope.setExpanded = function(bool) {
        $scope.isExpanded = bool;
    };

    $scope.setHeaderFab = function(location) {
        var hasHeaderFabLeft = false;
        var hasHeaderFabRight = false;

        switch (location) {
            case 'left':
                hasHeaderFabLeft = true;
                break;
            case 'right':
                hasHeaderFabRight = true;
                break;
        }

        $scope.hasHeaderFabLeft = hasHeaderFabLeft;
        $scope.hasHeaderFabRight = hasHeaderFabRight;
    };

    $scope.hasHeader = function() {
        var content = document.getElementsByTagName('ion-content');
        for (var i = 0; i < content.length; i++) {
            if (!content[i].classList.contains('has-header')) {
                content[i].classList.toggle('has-header');
            }
        }

    };

    $scope.hideHeader = function() {
        $scope.hideNavBar();
        $scope.noHeader();
    };

    $scope.showHeader = function() {
        $scope.showNavBar();
        $scope.hasHeader();
    };

    $scope.clearFabs = function() {
        var fabs = document.getElementsByClassName('button-fab');
        if (fabs.length && fabs.length > 1) {
            fabs[0].remove();
        }
    };
})

.controller('MainCtrl', function($scope, $timeout, $stateParams, ionicMaterialInk) {
    $scope.$parent.showHeader();
    $scope.$parent.clearFabs();
    $scope.isExpanded = false;
    $scope.$parent.setExpanded(false);
})

.controller('MainVideoStatusCtrl', function($scope) {
    $scope.text_status = 'Disabled';

    $scope.UpdateStatus = function() {
        if($scope.status) {
            $scope.text_status = 'Enabled';
        } else {
            $scope.text_status = 'Disabled';
        }
    }
})
.controller('MainAvailStatusCtrl', function($scope) {
    $scope.text_status = 'Available';
    $scope.status = true;

    $scope.UpdateStatus = function() {
        if($scope.status) {
            $scope.text_status = 'Available';
        } else {
            $scope.text_status = 'Unavailable';
        }
    }
})

.controller('LoginCtrl', function($scope, $timeout, $stateParams, ionicMaterialInk) {
    $scope.$parent.clearFabs();
    $timeout(function() {
        $scope.$parent.hideHeader();
    }, 0);
    ionicMaterialInk.displayEffect();
})

.controller('MessagesCtrl', function($scope, $stateParams, $timeout, ionicMaterialMotion, ionicMaterialInk) {
    $scope.$parent.showHeader();
    $scope.$parent.clearFabs();
    $scope.isExpanded = true;
    $scope.$parent.setExpanded(true);
    $scope.$parent.setHeaderFab('left');

    $timeout(function() {
        ionicMaterialMotion.fadeSlideIn({
            selector: '.animate-fade-slide-in .item'
        });
    }, 200);

    // Activate ink for controller
    ionicMaterialInk.displayEffect();
})

.controller('ProfileCtrl', function($scope, $stateParams, $timeout, $sce, ionicMaterialMotion, ionicMaterialInk) {
    // Set Header
    $scope.$parent.showHeader();
    $scope.$parent.clearFabs();
    $scope.isExpanded = false;
    $scope.$parent.setExpanded(false);
    $scope.$parent.setHeaderFab(false);
    
    function getByValue(arr, value) {
        for(var i=0, iLen=arr.length; i<iLen; i++) {
            if(arr[i].id == value) return arr[i];
        } 
    }
    
    var userid = ($stateParams.profileid) || 1;
    var userindex;

    var userList = [
        {id: 1, name: 'Daenerys Targaryen', profession: 'Doctor', avatar: 'img/daenerys.jpg', moneyraised: 152, videourl: $sce.trustAsResourceUrl('https://www.youtube-nocookie.com/embed/MXFUT_7925A?rel=0&amp;showinfo=0')},
        {id: 2, name: 'Arya Stark', profession: 'Teacher', avatar: 'img/arya.jpg', moneyraised: 0, videourl: $sce.trustAsResourceUrl('https://www.youtube-nocookie.com/embed/wyVM1evRxNw?rel=0&amp;showinfo=0')},
        {id: 5, name: 'Tyrion Lannister', profession: 'Celebrities', avatar: 'img/tyrion.jpg', moneyraised: 1850, videourl: $sce.trustAsResourceUrl('https://www.youtube-nocookie.com/embed/gvI2ClWqHO0?rel=0&amp;showinfo=0')},
        {id: 8, name: 'Jon Snow', profession: 'Plumber', avatar: 'img/jon-snow.jpg', moneyraised: 274, videourl: $sce.trustAsResourceUrl('https://www.youtube-nocookie.com/embed/gvI2ClWqHO0?rel=0&amp;showinfo=0')},
        {id: 8, name: 'Sansa Stark', profession: 'Plumber', avatar: 'img/sansa.jpg', moneyraised: 810, videourl: $sce.trustAsResourceUrl('https://www.youtube-nocookie.com/embed/uJAWaE11Jf4?rel=0&amp;showinfo=0')}
    ];
    
    $scope.user = getByValue(userList, userid);
    $scope.users = userList;

    // Set Motion
    $timeout(function() {
        ionicMaterialMotion.slideUp({
            selector: '.slide-up'
        });
    }, 300);

    $timeout(function() {
        ionicMaterialMotion.fadeSlideInRight({
            startVelocity: 3000
        });
    }, 700);

    // Set Ink
    ionicMaterialInk.displayEffect();
})

.controller('ActivityCtrl', function($scope, $stateParams, $timeout, ionicMaterialMotion, ionicMaterialInk) {
    $scope.$parent.showHeader();
    $scope.$parent.clearFabs();
    $scope.isExpanded = true;
    $scope.$parent.setExpanded(true);
    $scope.$parent.setHeaderFab('right');

    $timeout(function() {
        ionicMaterialMotion.fadeSlideIn({
            selector: '.animate-fade-slide-in .item'
        });
    }, 200);

    // Activate ink for controller
    ionicMaterialInk.displayEffect();
})

.controller('FriendsCtrl', function($scope, $stateParams, $timeout, ionicMaterialInk, ionicMaterialMotion) {
    // Set Header
    $scope.$parent.showHeader();
    $scope.$parent.clearFabs();
    $scope.$parent.setHeaderFab('left');

    // Delay expansion
    $timeout(function() {
        $scope.isExpanded = true;
        $scope.$parent.setExpanded(true);
    }, 300);

    // Set Motion
    ionicMaterialMotion.fadeSlideInRight();

    // Set Ink
    ionicMaterialInk.displayEffect();
})

.controller('MarketCtrl', function($scope, $stateParams, $timeout, ionicMaterialInk, ionicMaterialMotion) {
    $scope.$parent.showHeader();
    $scope.$parent.clearFabs();
    $scope.isExpanded = true;
    $scope.$parent.setExpanded(true);
    $scope.$parent.setHeaderFab(false);

    // Activate ink for controller
    /*ionicMaterialInk.displayEffect();

    ionicMaterialMotion.pushDown({
        selector: '.push-down'
    });
    ionicMaterialMotion.fadeSlideInRight({
        selector: '.animate-fade-slide-in .item'
    });*/

    $scope.categories = [
        {ref: 'doctors', name: 'Doctors', img: 'img/doctor-trust.jpg'},
        {ref: 'celebrities', name: 'Celebrities', img: 'img/taylor.jpg'},
        {ref: 'home_improvement', name: 'Home Improvement', img: 'img/plumbing2.jpg'},
        {ref: 'tutors', name: 'Tutors', img: 'img/clase-particular.jpg'}
    ];

})

.controller('MarketCatCtrl', function($scope, $stateParams, $timeout, ionicMaterialInk, ionicMaterialMotion) {
    $scope.$parent.showHeader();
    $scope.$parent.clearFabs();
    $scope.isExpanded = true;
    $scope.$parent.setExpanded(true);
    $scope.$parent.setHeaderFab(false);

    $scope.currentCat = $stateParams.catref;

    $scope.categories = [
        {cat: 'doctors', name: 'Physicians', img: 'img/doctor-trust.jpg'},
        {cat: 'doctors', name: 'Pediatricians', img: 'img/doctor-trust.jpg'},
        {cat: 'doctors', name: 'Veterinary', img: 'img/doctor-trust.jpg'},
        {cat: 'celebrities', name: 'Actors', img: 'img/taylor.jpg'},
        {cat: 'celebrities', name: 'Athletes', img: 'img/taylor.jpg'},
        {cat: 'celebrities', name: 'Musicians', img: 'img/taylor.jpg'},
        {cat: 'celebrities', name: 'Models', img: 'img/taylor.jpg'},
        {cat: 'home_improvement', name: 'Plumbers', img: 'img/plumbing2.jpg'},
        {cat: 'home_improvement', name: 'Electricians', img: 'img/plumbing2.jpg'},
        {cat: 'home_improvement', name: 'Decorators', img: 'img/plumbing2.jpg'},
        {cat: 'home_improvement', name: 'Appliances', img: 'img/plumbing2.jpg'},
        {cat: 'tutors', name: 'Math', img: 'img/clase-particular.jpg'},
        {cat: 'tutors', name: 'Science', img: 'img/clase-particular.jpg'},
        {cat: 'tutors', name: 'College', img: 'img/clase-particular.jpg'}
    ];
})

.controller('userRateCtrl', function($scope) {
    $scope.inputChanged = function() {
        var input = parseFloat($scope.userrate);
        
        if(input > 999.99) {
            $scope.userrate = 999.99;
        } else if(input < 0.52) {
            $scope.userrate = 0.52;
        } else if(retr_decs(input) > 2) {
            $scope.userrate = parseFloat(precise_round(input, 2));
        }
    }
})

;

function precise_round(num, decimals){
    var sign = num >= 0 ? 1 : -1;
    return (Math.round((num*Math.pow(10,decimals))+(sign*0.001))/Math.pow(10,decimals)).toFixed(decimals);
}
function retr_decs(number) {
  return ((+number).toFixed(20)).replace(/^-?\d*\.?|0+$/g, '').length;
}
