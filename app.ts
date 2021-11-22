/*export{} 
 class App{
    test()
    {
        console.warn("app class amma")
    }
}
let a  = new App();
a.test()




var a : string= 'sss'
console.warn(a)






let users:any[] = ['aa','bb']
users[1] = 1
users.push(true)
console.warn(users)






interface usersType{
    name:string,
    age:number,
    phone:string
}


let users:any = {
    name:"tonpe ",
    age:23,
    phone:"9725522333"
}
users.add("hello")


console.warn(users)















let data:number|string|boolean = 100
data = "dd"
data = true
console.warn(data)













interface usersType {
    name:string,
    age:number,
    getName:()=>string

}
var users:usersType = {
    name: "tonpe ",
    age:30,
    getName:function()
    {
        return this.age
    }
}
console.warn(users.getName())















 function test(a:number,b:number):number
{
    return b?a+b:a; 
}
console.warn(test(10,20))












class App{
    name:string
    public constructor(na:string){
        console.warn("constrctor called")
        this.name = na
    }
    getName()
    {
        return this.name;
    }
    getSomething():void
    {
        console.warn("function with void return type")
    }
}
let a = new App("naveen reddy");
a.getSomething();
console.warn(a.getName());


class P{
    name:string=""
    setName(peru):void{
        this.name = peru;
    }
}
class C extends P {
    getName():string{
        return this.name;
    }
}
let a = new C();
a.setName("tonpe");
console.warn(a.getName())
*/

class P{
    m():void{
        console.warn("p met");
    }
}

class C extends P{
    mm():void{
        console.warn("c met");
    }
}
let a = new C();
a.m();
a.mm();

let b = new P();
b.m();
