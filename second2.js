function person(fname, lname, offadd){
  this.fname = fname;
  this.lname = lname;
  this.offadd = offadd;
}

let person1 = new person ('Arjun', 'Vandanapu', 'Tirumala');
let person2 = new person ('Pavan', 'Maddula', 'Tenali');
let person3 = new person ('Vaishnavi', 'Manepalli', 'Kancheepuram');

console.log(person1.fname);
console.log(person2.fname);
console.log(person3.fname);
