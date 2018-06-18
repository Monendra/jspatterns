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
    
  -Module pattern
  -Factories
  -Singletons
3. Structural design pattern
  -Decorator pattern
  -Facade pattern
  -Flyweight
4. Bihavioral design pattern
  -Observer pattern
  -Mediator pattern
  -Command pattern
