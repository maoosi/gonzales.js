/*!
* gonzales.js 1.0.0 - Speedy JS library for custom mouse pointers.
*
* @author       maoosi <hello@sylvainsimao.fr>
* @homepage     https://github.com/maoosi/gonzales.js#readme
* @copyright    Copyright (c) 2017 maoosi <hello@sylvainsimao.fr>
* @license      MIT
* @version      1.0.0
*/
!function(n,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):n.Gonzales=e()}(this,function(){"use strict";var n=function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")},e=function(){function n(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}return function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}}(),t=function(){function t(){return n(this,t),this.cursors=[],this}return e(t,[{key:"add",value:function(n,e){this.cursors.push({id:n,el:e})}},{key:"destroy",value:function(){this.cursors=[]}}]),t}(),r=function(){for(var n=arguments.length,e=Array(n),r=0;r<n;r++)e[r]=arguments[r];return new(Function.prototype.bind.apply(t,[null].concat(e)))};return r});
//# sourceMappingURL=gonzales.js.map
