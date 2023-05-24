import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Dropdown from "react-bootstrap/Dropdown";
import Stack from "react-bootstrap/Stack";
import {
  FaArrowDown,
  FaArrowUp,
  FaDog,
  FaUserAlt,
  FaSearch,
} from "react-icons/fa";

const Search = (searchProps) => {
  const {search,setQuery,query,ascendingList, descendingList,sortOwnerList,sortPetList} = searchProps
  return (
    <Stack direction="horizontal" className="my-3 mx-auto w-75" gap={2}>
      <Form.Control
        className="me-auto"
        placeholder="Search here..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <Button variant="success" size="sm" onClick={search.search} title="Search">
        <FaSearch />
      </Button>
      <div className="border">
        <Dropdown >
          <Dropdown.Toggle variant="outline-success" size= "sm" id="dropdown-basic">
            Sort by
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item onClick={descendingList} title="Descending">
              <FaArrowUp /> Desc
            </Dropdown.Item>
            <Dropdown.Item onClick={ascendingList} title="Ascending">
              <FaArrowDown /> Asc
            </Dropdown.Item>
            <Dropdown.Item onClick={sortPetList} title="Pet Name">
              <FaDog /> Pet
            </Dropdown.Item>
            <Dropdown.Item onClick={sortOwnerList} title="Owner Name">
              <FaUserAlt /> Owner
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </Stack>
  );
};

export default Search;
