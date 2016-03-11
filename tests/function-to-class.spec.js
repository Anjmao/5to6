var assert = require('assert');
var recast = require('recast');
var jsonfile = require('jsonfile')
var n = recast.types.namedTypes;
var b = recast.types.builders;
var sut = require('../src/modules/convert-fn-to-class.js');

describe('Array', () => {
    it('test parse', () => {

        var code = `
        function Main() {
            function inner1() {
                
            }
            function inner2() {
                
            }
        }
      `;
        var ast = recast.parse(code);

        ast.program.body = sut(ast.program.body);

        print(ast);
        writeLog(ast.program.body);

    })
});


function print(ast) {
    console.log('--------------');
    console.log(recast.print(ast).code);
}

function writeLog(obj) {


    var file = 'tests/data.json'

    jsonfile.writeFile(file, obj,{spaces: 2}, function(err) {
        console.error(err)
    })
}