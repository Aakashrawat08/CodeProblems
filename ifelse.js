// find the greatest number by using if else staetments?


// a=5
// b=2
// c=6
// d=8
// f=1
// if(a>b&&a>c&&a>d&&a>f){
//     console.log(a)
// }
// else if(b>a&&b>c&&b>d&&b>f){
//     console.log(b)
// }
// else if(c>a&&c>b&&c>d&&c>f){
//     console.log(c)
// }
// else if(d>a&&d>b&&d>c&&d>f){
//   console.log(d)
// }
// else if(f>a&&f>b&&f>c&&f>d)
// {console.log(f)}
// else{
//     console.log("all staements is false")
// }



// second problem else if based


// let a=5
// if(a>10){
//     console.log("if statement is true")
// }
// else if(a>20){
//     console.log("else if first stement true")
// }
// else if(a>3){
//     console.log("else if second stement true")
// }
// else if(a>20){
//     console.log("else if first stement true")
// }
// else if(a>40){
//     console.log("else if third stement true")
// }
// else{ console.log("all avove statements is false this is else statement output")
// }



// nested if else example


// var temp=30
// var humidity=50
// if(temp<30&&humidity<50){
//     console.log("wheater is great")
// }
// else{
//     if(temp===30){
//         console.log("its preety cool")
//     }
//     else{
//         console.log("ohh its bad bro")
//     }
// }


// nested if else if example



// var temp=40
// var issnowing=false
// var israining=false
// if(issnowing){
//     if(temp<45){
//         console.log("wear light weight rain coat")
//     }
//     else{
//         console.log("wear fleech rain coat")
//     }
// }
// else if(israining){
//     if(temp>50){
//         console.log("wear soft sheel jacket")
//     }
//     else if(temp>60){
//         console.log("wear down jackety")
//     }
//     else{
//         console.log("wear base layers and down jackets")
//     }
// }
// else{
//     console.log ("it is hard to come up with like this examples")
// }



// check the input is number or string


// var input=10
// if(typeof input=="number"){
//     console.log("input value is a number")
// }
// else if (typeof input==="string"){
//     console.log("input value is a string")
// }
// else{
//     console.log("input value is not a string/number")
// }


// assignment question 4 find days month and year name


// var month=3
// var year=2016
// var day=""
// switch(true){
//   case (month==1 && year==2016):  month="jaunary", year=2016 ,day=31
//   break;
//   case (month==2 && year==2016):  month="febuary", year=2016 ,day=29
//   break;
//   default:month="enter a valid month name", year= "valid year name" ,day="and day name"
//   break;
// }
// console.log(`${month} ${year} has ${day} days`)
  

// assignment question 5 find year is laep or not

// var year=2020
// switch (true) {
//     case (year%4==0): year=year
        
//         break;

//     default:year=`${year} not`
//         break;
// }
// console.log(`${year} is a leap year`)
