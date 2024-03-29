import { Button, Select, SelectItem } from "@nextui-org/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const BorrowPage = () => {
  const location = useLocation();
  const members = location.state;
  const [books, setBooks] = useState([]);
  const [availableBooks, setAvailableBooks] = useState([]);
  const [selectedMember, setSelectedMember] = useState(null);
  const [selectedBook, setSelectedBook] = useState(null);
  const navigate = useNavigate();

  const handleBorrow = () => {
    if (!selectedMember || !selectedBook) {
      alert("Please select member and book");
      return;
    }
    axios
      .put("http://localhost:5000/members/borrow", {
        username: selectedMember,
        borrowed_title: selectedBook,
      })
      .then((response) => {
        setSelectedMember("");
        setSelectedBook("");
        alert("Book borrowed successfully");
        navigate("/");
      })
      .catch((error) => {
        alert("Error borrowing book. Please try again later", error);
      });
  };

  useEffect(() => {
    axios
      .get("http://localhost:5000/books")
      .then((response) => {
        setBooks(response.data.message);
      })
      .catch((error) => {
        alert("Error fetching books", error);
      });
  }, []);

  useEffect(() => {
    setAvailableBooks(
      books.filter(
        (book) =>
          !members.some((member) => member.borrowed_title === book.title)
      )
    );
  }, [books, members]);

  return (
    <>
      <p className="text-2xl font-medium">Borrow</p>
      <div className="flex flex-row justify-between gap-16 my-8">
        <Select
          isRequired
          label="UserName"
          onChange={(e) => setSelectedMember(e.target.value)}
        >
          {members.map((member) => (
            <SelectItem key={member.username} value={member.username}>
              {member.username}
            </SelectItem>
          ))}
        </Select>
        <Select
          isRequired
          label="Book Title"
          onChange={(e) => setSelectedBook(e.target.value)}
        >
          {availableBooks.map((book) => (
            <SelectItem key={book.title} value={book.title}>
              {book.title}
            </SelectItem>
          ))}
        </Select>
      </div>
      <div className="flex justify-center item-center">
        <Button color="secondary" className="w-[25vw]" onPress={handleBorrow}>
          Submit
        </Button>
      </div>
    </>
  );
};

export default BorrowPage;
