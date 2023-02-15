// JSON JavaScript Object Notation
//Given a array of student objects 
// 0. Find a student whose name is Nanda.
//1. Find the eldest student

// 3. Count the number of students whose total average is more than 70. 
let array_student_obj 
 = [{name:"Nanda",
	 age:19,
	 salary: 10000, 
	 marks:{
			maths:80, 
			physics: 78, 
			chemistry:90
		}
	 },
	 {name:"Deepika",
	 age:18,
	 salary: 10000, 
	 marks:{
			maths:95, 
			physics: 95, 
			chemistry:89
		}
	 },
	 {name:"Boopalan",
	 age:18,
	 salary: 10000, 
	 marks:{
			maths:76, 
			physics: 81, 
			chemistry:76
		}
	 },{name:"Karthi",
	 age:22,
	 salary: 10000, 
	 marks:{
			maths:67, 
			physics: 51, 
			chemistry:39
		}
	 }];

//Hints: 
//  console.log(array_student_obj[3].salary);
// let i=1;
//  console.log(array_student_obj[i].name=="Nanda");






// 2. which student is elder and tell the name of the student

// let max = array_student_obj[0].age;
// let n = array_student_obj.length

// for(i=1; i<n; i++)
// {
//     if(max < array_student_obj[i].age)
//     {
//         max = array_student_obj[i].age

//         if(max = array_student_obj[i].age)
//         {
//             namee = array_student_obj[i].name
//         }
//     }
// }
// console.log(namee + " " + "have maximum age. That is" + " " + max);


// method 2

// let max = array_student_obj[0].age;
// let n = array_student_obj.length

// for(i=1; i<n; i++)
// {
//     if(max < array_student_obj[i].age)
//     {
//         max = array_student_obj[i].age
//             namee = array_student_obj[i].name
        
//     }
// }
// console.log(namee + " " + "have maximum age. That is" + " " + max);


//3. List of student name whose physics score is more than 80.

// let n = array_student_obj.length;
// max = array_student_obj[0].marks.physics;


// for(i=1; i<n; i++){
// 	if(max<array_student_obj[i].marks.physics)
// 	{
// 		max[80]> array_student_obj[i].marks.physics
// 		namee = array_student_obj[i].name;
// 		console.log(namee);
// 	}
// }


// 4. which student is elder and tell the name of the student (here two students have same age)

let max = array_student_obj[0].age;
let n = array_student_obj.length;

