// jquery.object-fit.js
// ====================
//
// usage:
// ------
//
// ```
// $('.selector').objectFit(type);
// ```
//
// implemented types so far:
// * 'contain' (default)

(function($, window, document) {

	$.fn.objectFit = function(type) {

		// default type is "contain"
		var type = type || 'contain';

		return this.each(function() {

			var $this = $(this),
				  ratio = $this.data('ratio'),
					parent = $this.parent(),
					parentRatio = parent.width() / parent.height();


			// set the ratio of the object. we assume, that the ratio of the object never changes.
			if (ratio === undefined) {
				ratio = $this.width() / $this.height();
				$this.data('ratio', ratio);
			}

			if (parentRatio > ratio) {
				$this.width(parent.height() * ratio).height('100%');
			} else {
				$this.height(parent.width() / ratio).width('100%');
			}

		});

	};

})(jQuery, window, document);