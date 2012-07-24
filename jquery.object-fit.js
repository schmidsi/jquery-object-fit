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

			function findParentRatio(jqObject) {
				var p = jqObject.parent(),
					displayType = p.css('display');
				// Find the first block level element
				if (displayType == 'block' || displayType == '-webkit-box' && p.width() > 0) {
					return { width: p.width(), height: p.height(), ratio: (p.width() / p.height()) };
				} else {
					return findParentRatio(p);
				}
			}

			var $this = $(this),
					ratio = $this.data('ratio'),
					parent = findParentRatio($this); // The parent element may not have any width or height, so find one that does

			var pic_real_width, pic_real_height;
			$("<img/>") // Make in memory copy of image to avoid css issues
				.attr("src", $(this).attr("src"))
				.load(function() {
					pic_real_width = this.width;   // Note: $(this).width() will not
					pic_real_height = this.height; // work for in memory images.

					// set the ratio of the object. we assume, that the ratio of the object never changes.
					if (ratio === undefined) {
						ratio = pic_real_width / pic_real_height;
						$this.data('ratio', ratio);
					}

					// Set the width/height
					if (parent.ratio > ratio) {
						$this.width(parent.height * ratio).height('100%');
					} else {
						$this.height(parent.width / ratio).width('100%');
					}

			});
		});

	};

})(jQuery, window, document);