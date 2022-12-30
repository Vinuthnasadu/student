fetch("data.json")
.then(function(response){
   return response.json();
})
.then(function(data){
   let placeholder = document.querySelector("#data-output");
   let output = "";
   for(let item of data){
      output += `
         <tr>
             <td><${item.id}</td>
            <td> 
            <img src='${item.img}'>
            ${item.first_name}
            ${item.last_name} 
            </td>
            <td>${item.gender}</td>
            <td>${item.class}</td>
            <td>${item.marks}</td>
            <td>${item.passing ? "pass" : "fail"}</td>
            <td>${item.email}</td>
         </tr>
      `;
   }
 
   placeholder.innerHTML = output;
});