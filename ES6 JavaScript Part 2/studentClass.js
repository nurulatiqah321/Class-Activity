class Student{
    studentInfo(name,matricNo,major){
     this.name = name;
     this.matricNo = matricNo;
     this.major = major;
    }
    get name(){
        return this.name;
    }
    set name(name){
        this.name = name;
    }

    get matricNo(){
        return this.matricNo;
    }
    set matricNo(matricNo){
        this.matricNo = matricNo;
    }

    get major(){
        return this.major;
    }
    set major(major){
        this.major = major;
    }
    display() {
        console.log(`Your name is ${Name}`);
        console.log(`Your matric number is ${MatricNo}`);
        console.log(`Your major is ${Major}`);
}
}
module.exports = {Student};