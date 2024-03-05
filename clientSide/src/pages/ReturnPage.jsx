import {
  Autocomplete,
  AutocompleteItem,
  Button,
  Input,
  Select,
  SelectItem,
} from "@nextui-org/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const ReturnPage = () => {
  const location = useLocation();
  const activeBorrows = location.state;
  const [books, setBooks] = useState([]);
  const [availableBooks, setAvailableBooks] = useState([]);
  const [selectedMember, setSelectedMember] = useState(null);
  const [selectedBook, setSelectedBook] = useState(null);
  const [borrowingStatus, setBorrowingStatus] = useState(null);
  const navigate = useNavigate();

  const handleReturn = () => {
    if (!selectedMember || !selectedBook) {
      setBorrowingStatus("Please select member and book");
      return;
    }
    axios
      .put("http://localhost:5000/members/return", {
        username: selectedMember,
        borrowed_title: selectedBook,
      })
      .then((response) => {
        setBorrowingStatus("Book Returned successfully");
        setSelectedMember("");
        setSelectedBook("");
        navigate("/");
      })
      .catch((error) => {
        console.error("Error borrowing book:", error);
        setBorrowingStatus("Error borrowing book. Please try again later.");
      });
  };

  const handleSelectUser = (e) => {
    setSelectedMember(e.target.value);
    const borrowedBook = activeBorrows.find(
      (member) => member.username === e.target.value
    );
    if (borrowedBook) {
      setSelectedBook(borrowedBook.borrowed_title);
    }
  };

  console.log(selectedBook, selectedMember);

  return (
    <>
      <p className="text-2xl font-medium">Return</p>
      <div className="flex flex-row gap-4 my-8 items-center">
        <Select
          isRequired
          label="UserName"
          className="max-w-xs"
          onChange={handleSelectUser}
        >
          {activeBorrows.map((member) => (
            <SelectItem key={member.username} value={member.username}>
              {member.username}
            </SelectItem>
          ))}
        </Select>
        <p className="text-md font-semibold">has borrowed =</p>
        <p className="text-md font-semibold text-secondary">{selectedBook}</p>
      </div>
      <div className="flex justify-center item-center">
      <Button className="w-[20vw]" color="secondary" onPress={handleReturn}>Return Book</Button>
      </div>
    </>
  );
};

export default ReturnPage;
