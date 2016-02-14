'use strict';


/**
 * Error for undefined values
 *
 * @extends Error
 * @class Errors.UndefinedValue
 * */
class UndefinedValueError extends Error{
    /**
   * @example
   *
   *

    const user={
       name:'bob'
    }

    if(!user.age){
      const err = new Errors.UndefinedValue;
      err.setMessage(
          'age',
          user.age,
          user
      );
      throw err;
    }
   *
   * @example
   *
   * ```sh
   *
    git/node-error-classes/example/undefinedValue.js:14
       throw err;
       ^

    Undefined: 'string'

   * ```
   *
   * @method Errors.UndefinedValue.setMessage
   * @param  {String} variableName      varible name
   * @param  {Any} variable      varible
   * @param  {Any} [scope]      scope in which the variable should exist
   * @returns {String}    compiled error message
   */
    setMessage(variableName,variable,scope){
        this.name = 'UndefinedValue';
        this.message = `Expects ${variableName} to be defined but got ${variable}
        ${(scope)?
            `Scope : ${scope}`:
            ''
        }`;
        return this.message;
    }
}
