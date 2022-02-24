//class
export class TeachingStaff {
  //properties
  name:string;
  age:number;
  subject:string;
  department:string;

  constructor(name:string,age:number,subject:string,department:string) {
    this.name=name;
    this.age=age;
    this.subject=subject;
    this.department=department;


  }
//behavior
  teach( ){
    console.log('i am studying physics in ',this.department);

 console.log('i am studying chemistry in',this.department);
}

giveUsAssignment ( ) {
  console.log('teacher gave us assignment in',this.department);

}

attendance ( ) {
  console.log('teacher took attendance for',this.name)

}

}