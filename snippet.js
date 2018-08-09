debugger;

let global_let = 'global let';
console.log('leaving global scope');
{
    console.log('entering block scope');
    var inner_var = 'global var';
    let inner_let = 'inner let';
    console.log('leaving block scope');
};
console.log('re-entering global scope');
inner_var = 'modified globally';
console.log('final state');
