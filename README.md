jquery object-fit polyfill
==========================

Simple object-fit polyfill for the [CSS3 Images object-fit property](http://www.w3.org/TR/2012/CR-css3-images-20120417/#object-fit).
It contains a quick feature detection for Opera which supports this property natively.

Read about how CSS3 images works on the [Opera Developer blog](http://dev.opera.com/articles/view/css3-object-fit-object-position/)

Usage:
------

```
$('.selector').objectFit('contain');
$('.selector').objectFit('cover');
```
Image sizes are now re-calculated for the given selectors on browser re-size without you having to do anything.


Authors:
------
Originally by [Schmidsi](https://github.com/schmidsi/jquery-object-fit) and re-worked by [steveworkman](https://github.com/steveworkman/jquery-object-fit)

To do:
------
* Add an object-position polyfill
* Clarify the tests are correct against the spec, specifically Opera's implementation