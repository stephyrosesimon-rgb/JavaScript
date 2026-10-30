class Student
{
    mark1=40
    #mark=90//Private variable..Need to use # before to declare private variable.
    getmarks()
    {
        return this.#mark
    }
}
const obj= new Student()
console.log(obj.getmarks())
//console.log(obj.#mark)
console.log(obj.mark1)
//It is used to refer current object