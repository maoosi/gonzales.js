/*!
* gonzales.js 1.0.0 - Speedy JS library for custom mouse pointers.
*
* @author       maoosi <hello@sylvainsimao.fr>
* @homepage     https://github.com/maoosi/gonzales.js#readme
* @copyright    Copyright (c) 2017 maoosi <hello@sylvainsimao.fr>
* @license      MIT
* @version      1.0.0
*/
var classCallCheck=function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")},createClass=function(){function n(n,e){for(var r=0;r<e.length;r++){var t=e[r];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}return function(e,r,t){return r&&n(e.prototype,r),t&&n(e,t),e}}(),Gonzales=function(){function n(){return classCallCheck(this,n),this.cursors=[],this}return createClass(n,[{key:"add",value:function(n,e){this.cursors.push({id:n,el:e})}},{key:"destroy",value:function(){this.cursors=[]}}]),n}(),gonzales=function(){for(var n=arguments.length,e=Array(n),r=0;r<n;r++)e[r]=arguments[r];return new(Function.prototype.bind.apply(Gonzales,[null].concat(e)))};export default gonzales;
//# sourceMappingURL=gonzales.mjs.map
