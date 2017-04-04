(function(window) {
    'use strict';
    var App = window.App || {};

    var Validation = {
        isCompanyEmail: function(email) {
            return /.+@bignerdranch\.com$/.test(email);
        },
        isDecaf: function(coffee, strength) {
            if (/decaf/.test(coffee) && strength > 20) {
                return false;
            }
            return true;
        },
        isExistingEmail: function(url, emailAddress) {
            $.get(url + '/' + emailAddress, function(serverResponse) {
                if (serverResponse == null) {
                    return true;
                } else {
                    return false;
                }
            });
        }
    }
    App.Validation = Validation;
    window.App = App;
})(window);
