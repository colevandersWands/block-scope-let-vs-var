## Block Scope: Let vs Var

Eave very differently than _var_'s when enclosed by curly braces. 

_Let_ variables will be confined to the braces where they were created: _block scoping_.

_Var_ variables are hoisted outside of any curly braces they are in (except functions, this is a topic for later). 

The example below illustrates how _var_ & _let_ variables are treated differently by JavaScript whenever a new block is created.

### Index
* [Learning Objective](#learning-objective)
* [Study Snippet](#study-snippet)
* [Helpful Links](#helpful-links)
* [Interactive Practice](https://elewa-academy.github.io/block-scope-let-vs-var)
* [Run-Time Sketches](#run-time-sketches)

___

## Learning Objective

A set of opening and closing curly braces create a new _block scope_.  __let__ variables are stuck inside of the block scope where they were declared, __var__ variables are not.

[TOP](#index)

___
 
## Study Snippet

```js
let outer_let = 'outer let';
console.log('leaving outer scope');
{
    console.log('entering block scope');
    var inner_var = 'global var';
    let inner_let = 'inner let';
    console.log('leaving block scope');
};
console.log('re-entering outer scope');
inner_var = 'modified globally';
console.log('final state');
```

[TOP](#index)

___

## Helpful Links

__Let__'s temporal dead zone. (from step 3):
* [2ality](https://dmitripavlutin.com/variables-lifecycle-and-why-let-is-not-hoisted/)
* [FreeCodeCamp](https://medium.freecodecamp.org/what-is-variable-hoisting-differentiating-between-var-let-and-const-in-es6-f1a70bb43d)

[TOP](#index)

___

## Run-Time Sketches

![](./step-through/step-1.png)
![](./step-through/step-2.png)
![](./step-through/step-3.png)
![](./step-through/step-4.png)
![](./step-through/step-5.png)
![](./step-through/step-6.png)
![](./step-through/step-7.png)
![](./step-through/step-8.png)
![](./step-through/step-9.png)
![](./step-through/step-final.png)

___

![](./step-through/final-state.png)


[TOP](#index)

___
___
### <a href="http://janke-learning.org" target="_blank"><img src="https://user-images.githubusercontent.com/18554853/50098409-22575780-021c-11e9-99e1-962787adaded.png" width="40" height="40"></img> Janke Learning</a>
