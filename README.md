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

Similarities to box-sizing: cover/contain:
------
Whilst the syntax for box-sizing and object-fit are identical, and their purpose is the same, the specs for each differ in a very important way:
* box-sizing will re-size to fit the containing object by default
* object-fit requires a width or height to re-size the media

This can be accomplished using min/max-width/height, but don't just expect the images to re-size themselves correctly.

In future versions of this polyfill, I'll be adding the ability to behave like box-sizing, or like the specified implementation.

Authors:
------
Originally by [Schmidsi](https://github.com/schmidsi/jquery-object-fit) and re-worked by [steveworkman](https://github.com/steveworkman/jquery-object-fit)

To do:
------
* Add an object-position polyfill
* Implement a switch to enable/disable box-sizing style behaviour
* Add support for all other media types: <video>, <svg> <canvas> and <embed>