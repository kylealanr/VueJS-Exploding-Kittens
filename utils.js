"use strict";

var game = game || {};

game.utils = (function gameUtilsIife(global) {

    var factory = {

        // Constants

        // Public Functions
        areEqual: areEqual,
        alertWithTimeout: alertWithTimeout
    };

    return factory;

    // ===========================
    // Function Definitions belows
    // ===========================

    function areEqual() {
        /// <summary>
        /// Determines whether or not the arguments are equal.
        /// </summary>
        /// <returns>Whether or not the arguments are equal</returns>
        var len = arguments.length;
        for (var i = 1; i < len; i++) {
            if (arguments[i] == null || arguments[i] != arguments[i - 1])
                return false;
        }
        return true;
    }

    function alertWithTimeout(title, body, css) {
        var alert = new alert(title, body, css);

        game.state.alerts.unshift(alert);

        setTimeout(function () {
            game.state.alerts.removeAlert(alert);
        }, 3000);
    }

    function removeAlert(alert) {
        game.state.alerts.splice(game.state.alerts.indexOf(alert), 1);
    }

})(window);