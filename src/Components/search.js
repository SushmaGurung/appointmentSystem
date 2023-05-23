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

const Search = ({
  search,
  setQuery,
  query,
  ascendingList,
  descendingList,
  sortOwnerList,
  sortPetList,
}) => {
  return (
    <Stack direction="horizontal" className="container" gap={3}>
      <Form.Control
        className="me-auto"
        placeholder="Search here..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <Button variant="secondary" onClick={search.search} title="Search">
        <FaSearch />
      </Button>
      <div className="bg-warning border">
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Sort by
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item onClick={descendingList} title="Descending">
              <FaArrowUp /> Asc
            </Dropdown.Item>
            <Dropdown.Item onClick={ascendingList} title="Ascending">
              <FaArrowDown /> Desc
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
