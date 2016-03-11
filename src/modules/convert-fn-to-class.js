var assert = require('assert');
var recast = require('recast');
var _      = require('lodash');
var n      = recast.types.namedTypes;
var b      = recast.types.builders;

//////////////////////////
// Strip "use strict;"s //
//////////////////////////

module.exports = function convertFnToClass(body) {

  return body.map(function(o) {

    if (!o) {
      return o;
    }
    
    console.log(o);

    // Validations
    try {
      n.FunctionDeclaration.assert(o);
      
    } catch (e) {
      console.log(e);
      return o;
    }

    // Strip
    return o;

  });

};
