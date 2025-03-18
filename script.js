//  function Student(fname, lname){
//     this.fname = fname
//     this.lname = lname

//     this.getName = function(){
//         return this.fname + " " + this.lname;
//     }
//  }
// const s1 = new Student('raza','sid')
// console.log(s1,s1.getName());



function Student(fname, lname){
    this.fname = fname
    this.lname = lname
    this.setName = function(newName){
        this.fname = newName
    }
}
const s1 = new Student('raza','sid')
s1.setName('tabish')
console.log(s1);
