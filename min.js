var name;
var names=[];
var names2;
var usertr = document.getElementById("nameTR");
document.getElementById("form").addEventListener("submit",(e)=>{
	e.preventDefault();  
	Create();
	Read();
	document.getElementById("form").reset();
	});
	
	function Create(){
		let storage = JSON.parse(localStorage.getItem("names"));
		name = document.getElementById("name").value;
		if(name==''){
			alert("Write the name");
		}
		else
		{
			if(storage == null){
				names.push(name);
				localStorage.setItem("names",JSON.stringify(names))
			}
			else{
				names = JSON.parse(localStorage.getItem("names"));
				names.push(name);
				localStorage.setItem("names",JSON.stringify(names));
			}
			
		}
		
	}
	
	function Read(){
		usertr.innerHTML='';
		names2 = JSON.parse(localStorage.getItem("names"));
		if(names2 == null){
			usertr.innerHTML+= `
			<tr>
			<th class="space">#</th>
			<th class="space">Name</th>
			<th class="space">Operations</th>
			</tr>
			
			`
		}
		else{
			usertr.innerHTML+= `
			<tr>
			<th class="space">#</th>
			<th class="space">Name</th>
			<th class="space">Operations</th>
			</tr>
			`
			for(var i=0;i<names2.length;i++){
				usertr.innerHTML+= `
				
				<tr>
				<td class="space">${i+1}</td>
				<td class="space">${names2[i]}</td>
				<td class="space">
			<button Onclick="update(${i})">Edit</button>
				<button Onclick="Delete(${i})">Delete</button>
				</td>
				
				</tr>
				
				`
			}
		}
		
	}
	
	
	function update(i3){
		let names4 = JSON.parse(localStorage.getItem("names"));
		usertr.innerHTML = " ";
		usertr.innerHTML+= 
		`
		<tr>
			<th class="space">#</th>
			<th class="space">Name</th>
			<th class="space">Operations</th>
			</tr>
			`
			for(var i=0;i<names4.length;i++){
			if(i==i3){
				
				usertr.innerHTML+=
				`
				<tr>
				<td class="space">${i+1}</td>
				<td class="space"><input id="newName" placeholder="${names4[i]}"></input></td>
				<td class="space">
			<button Onclick="update2(${i})">Update</button>
				<button Onclick="Read()">Cancel</button>
				</td>
				
				</tr>
				
				`
			}
			else{
			usertr.innerHTML+= `
				
				<tr>
				<td class="space">${i+1}</td>
				<td class="space">${names2[i]}</td>
				<td class="space">
			<button Onclick="update(${i})">Edit</button>
				<button Onclick="Delete(${i})">Delete</button>
				</td>
				
				</tr>
				
				`
			}
			}
		
	}
	
	
	function update2(i){
		let names5 = JSON.parse(localStorage.getItem("names"));
		names5[i]=document.getElementById("newName").value;
	
	if(names5[i]==''){
		alert("write the name");
	}else{
		localStorage.setItem("names",JSON.stringify(names5));
		Read();
	}
	
	}
	
	function Delete(i2){
let names3=JSON.parse(localStorage.getItem("names"));
names3.splice(i2,1);
localStorage.setItem("names",JSON.stringify(names3));
Read();
	}