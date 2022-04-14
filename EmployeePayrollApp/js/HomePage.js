window.addEventListener("DOMContentLoaded", (event) => {
  createInnerHtml();
});

const createInnerHtml = () => {
  const headerHtml =
    "<th></th><th>Name</th><th>Gender</th><th>Department</th>" +
    "<th>Salary</th><th>Start Date</th><th>Actions</th>";
  let employeePayrollData = createEmployeePayrollJSON()[1];
  const innerHtml = `${headerHtml}
     <tr>
       <td><img class="profile" src="${employeePayrollData._profileImage}" alt="profile_img-1"></td>
       <td>${employeePayrollData._name}</td>
       <td>${employeePayrollData._gender}</td>
       <td>${getDepartmentHtml(employeePayrollData._department)}</td>
       <td>${employeePayrollData._salary}</td>
       <td>${employeePayrollData._startDate}</td>
       <td>
         <img name="${employeePayrollData._id}" src="..\assets\icons\delete-black-18dp.svg" alt="delete" id="1" onclick="remove(this)">
         <img name="${employeePayrollData._id}" src="..\assets\icons\create-black-18dp.svg" alt="edit" id="1" onclick="update(this)">
       </td>
     </tr>`;                   
  document.querySelector("#table-display").innerHTML = innerHtml;
};

const getDepartmentHtml = (deptList) => {
 let deptHtml = '';
  for (const dept of deptList) {
   deptHtml = `${deptHtml}<div class='dept-label'>${dept}</div>`
  }
 return deptHtml;
}

const createEmployeePayrollJSON = () => {
 let employeePayrollListLocal = [
  {
   _name: 'Sreenath',
   _gender: 'Male',
   _department: ['Engineering', 'Sales'],
   _salary: '450000',
   _startDate: '07 Feb 2022',
   _notes: '',
   _id: new Date.getTime(),
   _profileImage: '..\assets\profile-images\Ellipse -3.png'
  },
  {
   _name: 'Sreenidhi',
   _gender: 'Female',
   _department: ['Engineering', 'Finance'],
   _salary: '500000',
   _startDate: '03 Jan 2022',
   _notes: '',
   _id: new Date.getTime() + 1,
   _profileImage: '..\assets\profile-images\Ellipse -1.png'
  },
 ];
 return employeePayrollListLocal;
}