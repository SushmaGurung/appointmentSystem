import { useEffect, useState } from "react";
import "./App.css";
import Lists from "./Components/lists";
import Search from "./Components/search";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function App() {

  const getLocalStorageItems = () => {
    let list = localStorage.getItem("lists");
    if (list) {
      return JSON.parse(list);
    } else {
      return [];
    }
  };

  // const [lists, setLists] = useState([]);
  const [lists, setLists] = useState(getLocalStorageItems);
  const [owner, setOwner] = useState("");
  const [pet, setPet] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [notes, setNotes] = useState("");
  const [query, setQuery] = useState("");
  const [show, setShow] = useState(false);
  // const [msg, setMsg] = useState("");

  const handleSubmit = () => {
    if (lists) {
      setLists([
        ...lists,
        {
          id: new Date().getTime().toString(),
          ownerName: owner,
          petName: pet,
          date,
          time,
          notes,
        },
      ]);
      setOwner("");
      setPet("");
      setDate("");
      setTime("");
      setNotes("");

      setTimeout(() => {
        setShow(!show);
      }, 1000);
    }
  };

  // store to localStorage
  useEffect(() => {
    localStorage.setItem("lists", JSON.stringify(lists));
  }, [lists]);

  // delete list

  const deleteList = (id) => {
    setLists(lists.filter((list) => list.id !== id));
  };

  // search items
  const search = () => {
    return lists.filter((item) => item.ownerName.toLowerCase().includes(query));
  };

  // sorting items
  const ascendingList = () => {
    let allData = [...lists];
    if (allData.length > 0) {
      let result = allData.sort((a, b) =>
        a.ownerName.localeCompare(b.ownerName)
      );
      setLists(result);
    }
  };

  const descendingList = () => {
    let allData = [...lists];
    if (allData.length > 0) {
      let result = allData.sort((a, b) =>
        b.ownerName.localeCompare(a.ownerName)
      );
      setLists(result);
    }
  };

  const sortOwnerList = () => {
    let allData = [...lists];
    if (allData.length > 0) {
      let result = allData.sort((a, b) =>
        a.ownerName.localeCompare(b.ownerName)
      );
      setLists(result);
    }
  };
  const sortPetList = () => {
    let allData = [...lists];
    if (allData.length > 0) {
      let result = allData.sort((a, b) => a.petName.localeCompare(b.petName));
      setLists(result);
    }
  };

  return (
    <div className="container">
         <h2>Appointment System</h2>
      
        <Button variant="primary" onClick={() => setShow(!show)}>
          Add Appointment
        </Button>
        {show && (
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Owner's Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Name"
                required
                value={owner}
                onChange={(e) => {
                  setOwner(e.target.value);
                }}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Pet's Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Pet's Name"
                required
                value={pet}
                onChange={(e) => {
                  setPet(e.target.value);
                }}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Label>Appointment Date</Form.Label>
              <Form.Check
                type="date"
                required
                value={date}
                onChange={(e) => {
                  setDate(e.target.value);
                }}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Label>Appointment Time</Form.Label>
              <Form.Check
                type="time"
                required
                value={time}
                onChange={(e) => {
                  setTime(e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Example textarea</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={notes}
                onChange={(e) => {
                  setNotes(e.target.value);
                }}
              />
            </Form.Group>
            {/* <p className="text-success">{msg}</p> */}

            <Button variant="primary" onClick={handleSubmit}>
              Book Now
            </Button>
          </Form>
        )}
      
        {/* Search component */}
       <Search search = {search} setQuery={setQuery} query= {query} ascendingList = {ascendingList} descendingList = {descendingList} sortOwnerList = {sortOwnerList} sortPetList = {sortPetList}/>

      
      {/* lists component*/}
      {lists && lists.length > 0 && lists != undefined
        ? lists
            .filter((list) => {
              if (query == "") {
                return list;
              } else if (
                list.ownerName.toLowerCase().includes(query.toLowerCase())
              ) {
                return list;
              }
              // ///////
            })
            .map((list) => (
              <Lists
                id={list.id}
                ownerName={list.ownerName}
                petName={list.petName}
                date={list.date}
                time={list.time}
                notes={list.notes}
                deleteList={deleteList}
              />
            ))
        :  ( <p className="text-danger text-center py-4">"No data available"</p>)}
    </div>
  );
}

export default App;
