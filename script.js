//your JS code here. If required.
let AgeE1=document.getElementById("age");
let nameE1=document.getElementById("name");
const btnE1=document.getElementById("btn");
btnE1.addEventListener('click',()=>{
	if(!AgeE1.value || !nameE1.value){
		alert("Please enter valid details");
		
	}else{
		function Validate(age){
		return new Promise((resolve,reject)=>{
			if(age>18){
				setTimeout(()=>{
					resolve("Welcome, . You can vote.");
				},4000);
			}else{
				setTimeout(()=>{
					reject("Oh sorry . You aren't old enough.");
				},4000);
			}
		})
	}
	let age=AgeE1.value;
	Validate(age).then((res)=>{
			alert(res);
	}).catch((err)=>{
		    alert(err);
	})
	}
	
})