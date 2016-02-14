'use strict';


/**
 * Error for Immutable variables
 *
 * @extends Error
 * @class Errors.Immutable
 * */
class ImmutableError extends Error{
    /**
    * @example
    *

    class User{
        constructor(name,age){
            Object.defineProperties(
                this,
                {
                    age:{
                        enumerable:true,
                        writable:true,
                        value:age
                    },
                    name:{
                        enumerable:true,
                        get:getName,
                        set:setName
                    }
                }
            );

            let userName=null;

            function getName(){
                return userName;
            }

            function setName(value){
                if(userName){
                    const err=new Errors.Immutable;
                    err.setMessage(
                        'name',
                        this
                    );

                    throw err;
                }
                userName=value;
                return userName;
            }

            if(name){
                this.name=name;
            }
        }
    }

    const bob=new User('bob',42);

    bob.name='bob';

     * @example
     *
     * ```sh
     *

    Immutable: 'name' is Immutable and may not be modified.
            User { age: 42, name: [Getter/Setter] }
        at Immutable (/home/bmiller/git/node-error-classes/lib/Immutable.js:10:1)
        at User.setName [as name] (/home/bmiller/git/node-error-classes/example/immutable.js:34:26)


     * ```
     *
     * @method Errors.Immutable.setMessage
     * @param {String} varaibleName name of immutable variable
     * @param {Any} scope     Scope of varaible
     * @returns {String}    compiled error message
     */
    setMessage(varaibleName, scope){
        this.name = 'Immutable';
        this.message = `${varaibleName} is Immutable and may not be modified.
        ${(scope)?
            `Scope : ${scope}`:
            ''
        }`;
        return this.message;
    }
}
