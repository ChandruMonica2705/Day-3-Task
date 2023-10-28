// //Q1.Comparing two JSON have the same properties without order:-
let obj1 = {name:"Person 1",age:5};
let obj2 = {age:5,name:"Person 1"};
console.log(JSON.stringify(obj1)===JSON.stringify(obj2));
// //Above program output is False

// //Q2.Displaying all countries flags in the given API:-
var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all",true)
request.send();
request.onload = function(){
    var data = request.response;
    var result = JSON.parse(data);
    // console.log(result);
    for(var i=0;i<result.length;i++)
        console.log(result[i].flags.png);
    
}

// Q2.Displaying all countries names,regions,sub region,population in the given API:-
var request1 = new XMLHttpRequest();
request1.open("GET","https://restcountries.com/v3.1/all",true)
request1.send();
request1.onload = function(){
    var data = request1.response;
    var result1 = JSON.parse(data);
    // console.log(result1);
    for(var i=0;i<result1.length;i++)
        console.log(result1[i].name.common,",",result1[i].region,",",result1[i].subregion,",",result1[i].population);
    
}

