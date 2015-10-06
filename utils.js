var game = game || {};

game.utils = (function gameUtilsIife(global){

	var factory = {

		// Constants

		// Public Functions
		areEqual: areEqual
	};

	return factory;

	// ===========================
	// Function Definitions belows
	// ===========================

	function areEqual(){
		/// <summary>
		/// Determines whether or not the arguments are equal.
		/// </summary>
		/// <returns>Whether or not the arguments are equal</returns>
	   	var len = arguments.length;
	   	for (var i = 1; i< len; i++) {
			if (arguments[i] == null || arguments[i] != arguments[i-1])
				return false;
		}
	   	return true;
	}

})(window);