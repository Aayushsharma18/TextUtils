import { useEffect, useState } from "react";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import api from "./api/Family";
import axios from "axios";

function App() {

  const [familyMembers, setFamilyMembers] = useState([]);
  const [newFamilyMember, setNewFamilyMember] = useState([]);


  useEffect(async () => {

    await api.get("/familymembers")
      .then(response =>
        console.log(response.data),
        setFamilyMembers(response.data))
      .catch(alert("No Data Found!"))
    // const getAllMembers = async () => {

    //     const response = await api.get("/familymembers");
    //     if (response.data) setFamilyMembers(response.data);      
    //     alert("No data found!");

    // };

    // getAllMembers();
  }, []);

  const handleCreate = async () => {

    const response = await api.post("/familyMembers", newFamilyMember)
      .then(response => {
        console.log("new member:", response.data)
        setFamilyMembers([...familyMembers, response.data]);
        setNewFamilyMember({ name: "", age: "", phone: "" });
      }).catch(alert("Fields cannot be empty!"));

  };

  // useEffect(async () => {
  //   // Fetch family members from the API on component mount
  //   await axios.get('http://localhost:3006/familymembers')
  //     .then(response => {
  //       console.log(response.data);
  //       setFamilyMembers(response.data);
  //     })
  //     .catch(error => console.error('Error fetching family members:', error));
  // }, []);

  return (
    <div className="App">
      <Navbar title="TextUtils App" home="Home" about="About" />
      <div className="container">
        {/* <TextForm header="TextForm" label="Enter Text:" /> */}
        <div className="row">

          {/*  <div className="col-12"> */}
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Phone</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody >
              {familyMembers.map(item => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.age}</td>
                  <td>{item.phone}</td>
                  <td>
                    <button className="btn btn-sm btn-primary m-1">Update</button>
                    <button className="btn btn-sm btn-danger m-1">Delete</button>
                  </td>

                </tr>

              ))}

            </tbody>
          </table>
          <hr />
          <div>
            <b>Add Members</b>
            <div className="row mt-3">
              <div className="col-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name"
                  value={newFamilyMember.name}
                  onChange={(e) => setNewFamilyMember({ ...newFamilyMember, name: e.target.value })}
                />
              </div>
              <div className="col-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Age"
                  value={newFamilyMember.age}
                  onChange={(e) => setNewFamilyMember({ ...newFamilyMember, age: e.target.value })}
                />
              </div>
              <div className="col-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Phone"
                  value={newFamilyMember.phone}
                  onChange={(e) => setNewFamilyMember({ ...newFamilyMember, phone: e.target.value })}
                />
              </div>
              <div className="col-3">
                <button className="btn btn-success" onClick={handleCreate}>Create</button>
              </div>
            </div>
          </div>


        </div>
        {/*</div> */}

      </div>
    </div>
  );
}

export default App;
