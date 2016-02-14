'use strict';



/**
 * Error for invalid parameters
 *
 * @extends Error
 * @class Errors.InvalidParameter
 * */
class InvalidParameterError extends Error {
    /**
     * @example
     *
     * let test={a:1,b:0};
     *
     * if(test.b<1){
     *     err=new Errors.InvalidParameter;
     *     err.setMessage(
     *         'b',
     *         'a value greater than 0',
     *         test.b,
     *         test
     *     );
     *     throw err;
     * }
     *
     * @example
     *
     * ```sh
     *
    

        InvalidParameter: 'b' Expects 'a value greater than 0' but got 0

        at InvalidParameter (/home/bmiller/git/node-error-classes/lib/InvalidParameter.js:11:1)
        at multiplyNumbers (/home/bmiller/git/node-error-classes/example/invalidParam.js:13:13)
     *
     * ```
     *
     * @method Errors.InvalidParameter.setMessage
     * @param  {Any} parameterName name of parameter
     * @param  {Any} expected      what it expected
     * @param  {Any} got           what it got
     * @param  {Any} [scope]     optional value where the parameter came from like an object or array
     * @returns {String}    compiled error message
     */
    setMessage(parameterName,expected,got,scope){
        this.name='InvalidParameter';
        this.message=`${parameterName} Expects ${expected} but got ${got}
        ${(scope)?
            `Scope : ${scope}`:
            ''
        }`;
        return this.message;
    }
}
