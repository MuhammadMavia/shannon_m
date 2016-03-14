// Ionic App

angular.module('thriive', ['ionic', 'thriive.controllers', 'ionic-material', 'ionMdInput'])

.run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if (window.StatusBar) {
            // org.apache.cordova.statusbar required
            StatusBar.styleDefault();
        }
    });
})

.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {

    // Turn off caching for demo simplicity's sake
    $ionicConfigProvider.views.maxCache(0);

    /*
    // Turn off back button text
    $ionicConfigProvider.backButton.previousTitleText(false);
    */

    $stateProvider.state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'templates/menu.html',
        controller: 'AppCtrl'
    })
    
    .state('app.login', {
        url: '/login',
        views: {
            'menuContent': {
                templateUrl: 'templates/login.html',
                controller: 'LoginCtrl'
            },
            'fabContent': {
                template: ''
            }
        }
    })

    .state('app.dashboard', {
        url: '/dashboard',
        views: {
            'menuContent': {
                templateUrl: 'templates/dashboard.html',
                controller: 'MainCtrl'
            },
            'fabContent': {
                template: ''
            }
        }
    })

    .state('app.profile_user', {
        url: '/profile',
        views: {
            'menuContent': {
                templateUrl: 'templates/profile_user.html',
                controller: 'ProfileCtrl'
            },
            'fabContent': {
                template: ''
            }
        }
    })

    .state('app.profile', {
        url: '/profile/:profileid',
        views: {
            'menuContent': {
                templateUrl: 'templates/profile.html',
                controller: 'ProfileCtrl'
            },
            'fabContent': {
                template: ''
            }
        }
    })
    
    
    .state('app.market_profile', {
        url: '/market_profile',
        views: {
            'menuContent': {
                templateUrl: 'templates/market_profile.html',
                controller: 'MarketCtrl'
            },
            'fabContent': {
                template: '<button id="fab-market" class="button button-fab button-fab-top-right expanded button-energized-900 drop"><i class="icon ion-search"></i></button>',
                controller: function ($timeout) {
                    $timeout(function () {
                        document.getElementById('fab-market').classList.toggle('on');
                    }, 600);
                }
            }
        }
    })
    
   .state('app.activity', {
        url: '/activity',
        views: {
            'menuContent': {
                templateUrl: 'templates/activity.html',
                controller: 'ActivityCtrl'
            },
            'fabContent': {
                template: '<button id="fab-activity" class="button button-fab button-fab-top-right expanded button-energized-900 flap"><i class="icon ion-paper-airplane"></i></button>',
                controller: function ($timeout) {
                    $timeout(function () {
                        document.getElementById('fab-activity').classList.toggle('on');
                    }, 200);
                }
            }
        }
    })

    .state('app.friends', {
        url: '/friends',
        views: {
            'menuContent': {
                templateUrl: 'templates/friends.html',
                controller: 'FriendsCtrl'
            },
            'fabContent': {
                template: '<button id="fab-friends" class="button button-fab button-fab-top-left expanded button-energized-900 spin"><i class="icon ion-chatbubbles"></i></button>',
                controller: function ($timeout) {
                    $timeout(function () {
                        document.getElementById('fab-friends').classList.toggle('on');
                    }, 900);
                }
            }
        }
    })

    .state('app.market', {
        url: '/market',
        views: {
            'menuContent': {
                templateUrl: 'templates/market.html',
                controller: 'MarketCtrl'
            },
            'fabContent': {
                template: '<button id="fab-market" class="button button-fab button-fab-top-right expanded button-energized-900 drop"><i class="icon ion-search"></i></button>',
                controller: function ($timeout) {
                    $timeout(function () {
                        document.getElementById('fab-market').classList.toggle('on');
                    }, 600);
                }
            }
        }
    })

    .state('app.market_cat', {
        url: '/market/:catref',
        views: {
            'menuContent': {
                templateUrl: 'templates/market_cat.html',
                controller: 'MarketCatCtrl'
            },
            'fabContent': {
                template: '',
            }
        }
    })
    
    .state('app.messages', {
        url: '/messages',
        views: {
            'menuContent': {
                templateUrl: 'templates/messages.html',
                controller: 'MessagesCtrl'
            },
            'fabContent': {
                template: '<button id="fab-activity" class="button button-fab button-fab-top-left expanded button-energized-900 flap"><i class="icon ion-paper-airplane"></i></button>',
                controller: function ($timeout) {
                    $timeout(function () {
                        document.getElementById('fab-activity').classList.toggle('on');
                    }, 200);
                }
            }
        }
    })
    
    .state('app.services', {
        url: '/services',
        views: {
            'menuContent': {
                templateUrl: 'templates/services.html',
                controller: 'MainCtrl'
            },
            'fabContent': {
                template: ''
            }
        }
    })
    
    .state('app.statements', {
        url: '/statements',
        views: {
            'menuContent': {
                templateUrl: 'templates/statements.html',
                controller: 'MainCtrl'
            },
            'fabContent': {
                template: ''
            }
        }
    })
    
    .state('app.settings', {
        url: '/settings',
        views: {
            'menuContent': {
                templateUrl: 'templates/settings.html',
                controller: 'MainCtrl'
            },
            'fabContent': {
                template: ''
            }
        }
    })
    
    .state('app.banking', {
        url: '/banking',
        views: {
            'menuContent': {
                templateUrl: 'templates/banking.html',
                controller: 'MainCtrl'
            },
            'fabContent': {
                template: ''
            }
        }
    })
    
    .state('app.payment_methods', {
        url: '/payment_methods',
        views: {
            'menuContent': {
                templateUrl: 'templates/payment_methods.html',
                controller: 'MainCtrl'
            },
            'fabContent': {
                template: ''
            }
        }
    })
    ;

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/profile');
});
