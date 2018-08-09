debugger;

let outer_let = 'outer let';
console.log('leaving outer scope');
{
    console.log('entering block scope');
    var aaa_var = 'global var';
    let inner_let = 'inner let';
    console.log('leaving block scope');
};
console.log('re-entering outer scope');
inner_var = 'modified globally';
console.log('final state');
