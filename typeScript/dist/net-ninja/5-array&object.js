"use strict";
//! Array 
//? let names:string[] = ["Mario", "Luigi", "Peach", 45];
// Error: Type 'number' is not assignable to type 'string'.ts(2322)
//? let ages: number[] = [25, 45, "Somel"];
// Error: Type 'string' is not assignable to type 'number'.ts(2322)
//? type inference with arrays 
let fruits = ['apple', 'pears', 'bananas', 'mangos'];
//! Object Literals  
let user = {
    name: "Somel",
    age: 25,
    id: 121
};
//? user.name = 25;
// Error: Type 'number' is not assignable to type 'string'.ts(2322)
//? user.email = "somel@gmail.com";
// Error: Property 'email' does not exist on type '{ name: string; age: number; id: number; }'.ts(2339)
// any
