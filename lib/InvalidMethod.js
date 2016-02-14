'use strict';


/**
 * Error for methods which are either undefined or not methods (functions)
 *
 * @extends Error
 * @class Errors.InvalidMethod
 * */
class InvalidMethodError extends Error{
    /**
     * @example
     *
     *
         class User{
            constructor(name,age){
                this.name=name;
                this.age=age;
            }
         }

        const bob=new User('bob',42);

        if(!bob.getInfo || typeof bob.getInfo !== 'function'){
            const err=new Errors.InvalidMethod;
            err.setMessage('getInfo',bob.getInfo,bob);
        }

     * @example
     *
     * ```sh
     *

    UndefinedMethod: Expects 'getInfo' to be Function but got undefined
                Scope : User { name: 'bob', age: 42 }
        at InvalidMethod (/home/bmiller/git/node-error-classes/lib/InvalidMethod.js:10:1)
        at Object.<anonymous> (/home/bmiller/git/node-error-classes/example/invalidMethod.js:15:14)

     *
     * ```
     *
     * @method Errors.InvalidMethod.setMessage
     * @param  {String} methodName      method name
     * @param  {Any} method  expected method
     * @param  {Any} [scope] scope in which the invalid method is expected
     * @returns {String}    compiled error message
     */
    setMessage(methodName, method, scope){
        this.name = 'InvalidMethod';
        this.message = `Expects ${methodName} to be Function but got ${method}
            ${(scope)?
                `Scope : ${scope}`:
                ''
            }`;
        return this.message;
    }
}
