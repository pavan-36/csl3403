function person(fname, lname, offadd){
  this.fname = fname;
  this.lname = lname;
  this.offadd = offadd;
}

var person1 = new person ("Arjun", "Vandanapu", "Tirumala");
var person2 = new person ("Pavan", "Maddula", "Tenali");
var person3 = new person ("Vaishnavi", "Manepalli", "Kancheepuram");

console.log("The detials of First person are as follows \n " + "first name : " + person1.fname + "\n last name : " + person1.lname + " \noffice address : " + person1.offadd);
console.log("The detials of Second person are as follows \n " + "first name : " + person2.fname + " \nlast name : " + person2.lname + "\n office address : " + person2.offadd);
console.log("The detials of Third person are as follows \n " + "first name : " + person3.fname + "\n last name : " + person3.lname + " \noffice address : " + person3.offadd);

