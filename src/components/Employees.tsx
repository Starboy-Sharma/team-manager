import { useEffect, useState } from "react";
import femaleImg  from '../images/female.jpg';
import maleImg  from '../images/male.jpg';

interface EmployeeData {
  id: number,
  fullName: string,
  designation: string,
  gender: string,
  teamName: string
}

const Employees = (): JSX.Element => {
  const employeeData: Array<EmployeeData> = [
    {
      id: 1,
      fullName: "Bob Jones",
      designation: "JavaScript Developer",
      gender: "male",
      teamName: "TeamA",
    },
    {
      id: 2,
      fullName: "Jill Bailey",
      designation: "Node Developer",
      gender: "female",
      teamName: "TeamA",
    },
    {
      id: 3,
      fullName: "Gail Shepherd",
      designation: "Java Developer",
      gender: "female",
      teamName: "TeamA",
    },
    {
      id: 4,
      fullName: "Sam Reynolds",
      designation: "React Developer",
      gender: "male",
      teamName: "TeamB",
    },
    {
      id: 5,
      fullName: "David Henry",
      designation: "DotNet Developer",
      gender: "male",
      teamName: "TeamB",
    },
    {
      id: 6,
      fullName: "Sarah Blake",
      designation: "SQL Server DBA",
      gender: "female",
      teamName: "TeamB",
    },
    {
      id: 7,
      fullName: "James Bennet",
      designation: "Angular Developer",
      gender: "male",
      teamName: "TeamC",
    },
    {
      id: 8,
      fullName: "Jessica Faye",
      designation: "API Developer",
      gender: "female",
      teamName: "TeamC",
    },
    {
      id: 9,
      fullName: "Lita Stone",
      designation: "C++ Developer",
      gender: "female",
      teamName: "TeamC",
    },
    {
      id: 10,
      fullName: "Daniel Young",
      designation: "Python Developer",
      gender: "male",
      teamName: "TeamD",
    },
    {
      id: 11,
      fullName: "Adrian Jacobs",
      designation: "Vue Developer",
      gender: "male",
      teamName: "TeamD",
    },
    {
      id: 12,
      fullName: "Devin Monroe",
      designation: "Graphic Designer",
      gender: "male",
      teamName: "TeamD",
    },
  ];

  const [employees, setEmployees] = useState(employeeData);
  const [selectedTeam, setTeam] = useState('TeamB');

  const handleTeamChange = (e: React.ChangeEvent<HTMLSelectElement>): void  => {
    setTeam(e.target.value);
  };

  const addEmployeeInTeam = (index: number) => {

    // If user already exists in the team then remove it from the team

    if (employees[index].teamName === selectedTeam) {
      delete employees[index].teamName;
    } else {
      employees[index].teamName = selectedTeam;
    }

     setEmployees([...employees]);

  }

  return <main className="container">

    <div className="row justify-content-center mt-3 mb-3">
      <div className="col-6">
          <select name="teams" className="form-select form-select-lg" value={selectedTeam} onChange={handleTeamChange}>
            <option value="TeamA">TeamA</option>
            <option value="TeamB">TeamB</option>
            <option value="TeamC">TeamC</option>
            <option value="TeamD">TeamD</option>
          </select>
      </div>
    </div>

    <div className="row justify-content-center mt-3 mb-3">
      <div className="col-8">
        <div className="card-collection">
          {employees.map((employee, index) => <div key={index.toString()}>
            <div id={employee.id.toString()} className={`card m-2 ${(employee.teamName === selectedTeam) ? 'selected': ''}`} onClick={() => addEmployeeInTeam(index)}>
              <img src={employee.gender === 'male' ? maleImg : femaleImg } alt="Female Image" className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title"> Full Name: {employee.fullName} </h5>
                <p className="card-text"> <b> Designation: </b> {employee.designation} </p>
              </div>
            </div>  
          </div>)}
        </div>
      </div>
    </div>
  </main>;
};

export default Employees;
