## Block Scope: Let vs Var

_let_'s behave very differently than _var_'s when enclosed by curly braces. 

_Let_ variables will be confined to the frame where they are declared (as visualized by Python tutor). this includes any loops, conditionals, or bare curly braces: _block scoping_.

_Var_ variables are confined to the frame where they are declared (as visualized by Python tutor). The only curly braces that contain a _var_ is those of a function: _lexical scoping_ (more on this at another time).

The example below illustrates how _var_ & _let_ variables are treated differently by JavaScript whenever a new block is created inside a frame.

### Index
* [Learning Objective](#learning-objective)
* [Study Snippets](#study-snippets)
  * [just let](#just-let)
  * [just var](#just-var)
  * [let and var](#let-and-var)
* [Helpful Links](#helpful-links)
* [Interactive Practice](https://janke-learning.github.io/block-scope-let-vs-var)
* [Run-Time Sketches](#run-time-sketches)

___

## Learning Objective

A set of opening and closing curly braces create a new _block scope_.  __let__ variables are stuck inside of the block scope where they were declared, __var__ variables are not.

[TOP](#index)

___
 
## Study Snippets

### just let

[on pytut](http://www.pythontutor.com/live.html#code=let%20outer_let%20%3D%20'outer%20let'%3B%0Aconsole.log%28%22outer_let%3A%20%22,%20outer_let%29%3B%0Aconsole.log%28%22inner_let%3A%20%22,%20inner_let%29%3B%0A%7B%0A%20%20%20%20let%20inner_let%20%3D%20'inner%20let'%3B%0A%20%20%20%20console.log%28%22outer_let%3A%20%22,%20outer_let%29%3B%0A%20%20%20%20console.log%28%22inner_let%3A%20%22,%20inner_let%29%3B%0A%20%20%20%20outer_let%20%3D%20%22modified%20in%20block%20scope%22%3B%0A%7D%3B%0Aconsole.log%28%22outer_let%3A%20%22,%20outer_let%29%3B%0Aconsole.log%28%22inner_let%3A%20%22,%20inner_let%29%3B&cumulative=false&curInstr=3&heapPrimitives=nevernest&mode=display&origin=opt-live.js&py=js&rawInputLstJSON=%5B%5D&textReferences=false)  
```js
let outer_let = 'outer let';
console.log("outer_let: ", outer_let);
console.log("inner_let: ", inner_let);
{
    let inner_let = 'inner let';
    console.log("outer_let: ", outer_let);
    console.log("inner_let: ", inner_let);
    outer_let = "modified in block scope";
};
console.log("outer_let: ", outer_let);
console.log("inner_let: ", inner_let);
```  

### just var

[on pytut](http://www.pythontutor.com/live.html#code=var%20outer_var%20%3D%20'outer%20var'%3B%0Aconsole.log%28%22outer_var%3A%20%22,%20outer_var%29%3B%0Aconsole.log%28%22inner_var%3A%20%22,%20inner_var%29%3B%0A%7B%0A%20%20%20%20var%20inner_var%20%3D%20'inner%20var'%3B%0A%20%20%20%20console.log%28%22outer_let%3A%20%22,%20outer_var%29%3B%0A%20%20%20%20console.log%28%22inner_let%3A%20%22,%20inner_var%29%3B%0A%20%20%20%20outer_var%20%3D%20%22modified%20in%20block%20scope%22%3B%0A%7D%3B%0Ainner_var%20%3D%20%22modified%20in%20global%20scope%22%3B%0Aconsole.log%28%22outer_var%3A%20%22,%20outer_var%29%3B%0Aconsole.log%28%22inner_var%3A%20%22,%20inner_var%29%3B&cumulative=false&curInstr=0&heapPrimitives=nevernest&mode=display&origin=opt-live.js&py=js&rawInputLstJSON=%5B%5D&textReferences=false)  
```js
var outer_var = 'outer var';
console.log("outer_var: ", outer_var);
console.log("inner_var: ", inner_var);
{
    var inner_var = 'inner var';
    console.log("outer_let: ", outer_var);
    console.log("inner_let: ", inner_var);
    outer_var = "modified in block scope";
};
inner_var = "modified in global scope";
console.log("outer_var: ", outer_var);
console.log("inner_var: ", inner_var);
```

### let and var

[on pytut](http://www.pythontutor.com/live.html#code=let%20outer_let%20%3D%20'outer%20let'%3B%0Aconsole.log%28'entering%20block%20scope'%29%3B%0A%7B%0A%20%20%20%20var%20inner_var%20%3D%20'global%20var'%3B%0A%20%20%20%20let%20inner_let%20%3D%20'inner%20let'%3B%0A%20%20%20%20console.log%28'leaving%20block%20scope'%29%3B%0A%7D%3B%0Ainner_var%20%3D%20'modified%20globally'%3B%0Aconsole.log%28'final%20state'%29%3B&cumulative=false&curInstr=0&heapPrimitives=nevernest&mode=display&origin=opt-live.js&py=js&rawInputLstJSON=%5B%5D&textReferences=false)  
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
