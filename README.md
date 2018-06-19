# jspatterns
This project will define the design patterns in details for javascript.
We will be discussing here
1. Objects in javascript
2. Creational design pattern
  ---Constructor pattern: Is use to create new objects with their own object scope.
  We use "new" operator for this. When we use new keyword, it creates a constructor function out of that function
  and when thats executed, its going to do all 4 things:
    1- Creates a brand new object
    2- Links to an object prototype
    3- Binds 'this' to the new object scope
    4- Implicitly returns 'this'
   Example:
   function ObjectName(param1, param2){
   this.param1 = param1;
   this.param2 = param2;
   this.toString = function(){
   return this.param1 + " " + this.param2;
   }
   }
   DRAWBACKS OF THIS: "toString" function is created everytime a new object is created, which is not an efficient way of doing it. To avoid this we use the concept of prototypes.
   PROTOTYPE: Encapsulation of properties that an object links to.
   So to have one prototype of function linking to all objects of constructor.
   
   
    
  ---Module pattern: Module pattern can be used as a separate module to perform a specific module like service to call a back-end database. In short, it is an object literal.
  Example: 
  var Module = {
    method: function(){..},
    nextMethod: function(){..}  
  }
  Or we create a set of PRIVATE VARIABLES.
      var Module = function(){
          var privateVar = "I am a private var..."; //get you db connection or some stuff here & access it from the methods below.
          return{
            method: function(){..},
            nextMethod: function(){..} 
          }
      }
      
      
      
  ---Factories/ Factory pattern: A pattern used to simplify object creation. iF we have need to create lots of complex implementation and need to hide it from front-end.
  1- Simplify object creation
  2- Creating different objects based on needs
  3- Repository Creation
  
  
  
  
  -Singletons: Used to restrict an Object to one instance of that object across the application.
    - Remembers the last time you used it
    - Hands the same instance back
    - Node.js uses commonJS framework
     
  
  
3. Structural design pattern: 
  -Decorator pattern
  -Facade pattern
  -Flyweight
4. Bihavioral design pattern
  -Observer pattern
  -Mediator pattern
  -Command pattern
