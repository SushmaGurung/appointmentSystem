import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import FormData from "./Components/FormData";
import Lists from "./Components/lists";
import Search from "./Components/search";
import { clientSchema } from "./Validation/formValidation";

const App = () => {
  const getLocalStorageItems = () => {
    let list = localStorage.getItem("lists");
    if (list) {
      return JSON.parse(list);
    } else {
      return [];
    }
  };

  const [lists, setLists] = useState(getLocalStorageItems);
  const [query, setQuery] = useState("");
  const [show, setShow] = useState(false);
  const [inputs, setInputs] = useState({
    owner: "",
    pet: "",
    date: "",
    time: "",
    notes: "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setInputs({ ...inputs, [name]: value });
  };

  const handleSubmit = async () => {
    const newInput = {
      ...inputs,
      id: new Date().getTime().toString(),
    };

    const isValid = await clientSchema.isValid(newInput);
    console.log(isValid);
    if (isValid) {
      setLists([...lists, newInput]);

      setTimeout(() => {
        setShow(!show);
      }, 1000);

      setInputs({ owner: "", pet: "", date: "", time: "", notes: "" });
    } else {
      alert("Fill all the required fields marked(*)");
    }
  };

  // store to localStorage
  useEffect(() => {
    localStorage.setItem("lists", JSON.stringify(lists));
  }, [lists]);

  // delete list

  const deleteList = (id) => {
    if(lists){
    setLists(lists.filter((list) => list.id !== id));}
  };

  //   search items
  const search = () => {
    return lists.filter((item) => item.owner.toLowerCase().includes(query));
  };

  //   sorting items
  const ascendingList = () => {
    let allData = [...lists];
    if (allData.length > 0) {
      let result = allData.sort((a, b) => a.owner.localeCompare(b.owner));
      setLists(result);
    }
  };

  const descendingList = () => {
    let allData = [...lists];
    if (allData.length > 0) {
      let result = allData.sort((a, b) => b.owner.localeCompare(a.owner));
      setLists(result);
    }
  };

  const sortOwnerList = () => {
    let allData = [...lists];
    if (allData.length > 0) {
      let result = allData.sort((a, b) => a.owner.localeCompare(b.owner));
      setLists(result);
    }
  };
  const sortPetList = () => {
    let allData = [...lists];
    if (allData.length > 0) {
      let result = allData.sort((a, b) => a.pet.localeCompare(b.pet));
      setLists(result);
    }
  };

  const formProps = {
    show,
    setShow,
    handleChange,
    handleSubmit,
    inputs
  };

  const searchProps = {
    search,
    setQuery,
    query,
    ascendingList,
    descendingList,
    sortOwnerList,
    sortPetList,
  };



  return (
    <>
      <h2 className="py-4 text-center text-light bg-success">Appointment System</h2>

    <div className="container">
      <div className="text-center">
        {!show ? (
          <Button
            variant="success"
            className="m-3 align-center"
            size="sm"
            onClick={() => setShow(!show)}
          >
            Click to Register
          </Button>
        ) : (
          <Button
            variant="danger"
            className="m-3 "
            size="sm"
            onClick={() => setShow(!show)}
          >
            Close
          </Button>
        )}
      </div>
      {/* form component */}
      <FormData {...formProps} />

      {/* Search component */}
      <Search {...searchProps} />

      {/* lists component*/}
      {lists && lists.length > 0 && lists != undefined ? (
        lists
          .filter((list) => {
            if (query == "") {
              return list;
            } else if (list.owner.toLowerCase().includes(query.toLowerCase())) {
              return list;
            }
            // ///////
          })
          .map((list) => <Lists 
          id = {list.id}
          ownerName = {list.owner}
          petName = {list.pet}
          date = {list.date}
          time= {list.time}
          notes = {list.notes}
          deleteList = {deleteList}
           />)
      ) : (
        <p className="text-danger text-center py-4">"No data available"</p>
      )}
    </div>
    </>
  );
};

export default App;
