class Student
{
    constructor(id, name, city)
    {
        this.id = id;
        this.name = name;
        this.city = city;
    }
    nameExist()
    {
        if( this.name === "")
            return false;
        else
            return true;
    }

    updateId( id )
    {
        this.id = id;
    }
}

let student = new Student(1, "dayanand", "Noida");
// console.log(student.nameExist());
student.updateId(2);
console.log(student);
