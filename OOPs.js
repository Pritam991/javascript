class student{
    constructor(name,age,department){
        this.myname=name;
        this.myage=age;
        this.mydepartment=department;
    }
    //instance method
    biodata(){
        return`Hi I am ${this.myname}. I am ${this.myage} years old and I am in department of ${this.mydepartment}`;
    }
}

class player extends student{
    constructor(name,age,department,game){
        super(name,age,department);
        this.mygame=game;
    }
    play_biodata(){
        return `${super.biodata()}. I am player of ${this.mygame}`;
    }

}
let obj1 = new Player('Pritam', 21, 'Computer Science','Football');
console.log(obj1.play_biodata());
