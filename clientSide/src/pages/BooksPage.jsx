import {
  Input,
  Select,
  SelectItem,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  getKeyValue,
} from "@nextui-org/react";
import { SearchIcon } from "../components/Icons";
import { useEffect, useState } from "react";
import axios from "axios";

const searchColumns = [
  {
    key: "title",
    label: "Title",
  },
  {
    key: "authors",
    label: "Author",
  },
  {
    key: "publisher",
    label: "Publisher",
  },
  {
    key: "isbn",
    label: "ISBN",
  },
  {
    key: "average_rating",
    label: "Rating",
  },
  {
    key: "  num_pages",
    label: "Pages",
  },
];
const BooksPage = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState("title");
  const [searchResults, setSearchResults] = useState([]);

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
    if (e.target.value === "title") {
      setTitle("");
      setAuthor("");
    } else if (e.target.value === "authors") {
      setAuthor("");
      setTitle("");
    }
  };

  const handleSearch = (e) => {
    const value = e.target.value;
    switch (filter) {
      case "title":
        setTitle(value);
        break;
      case "authors":
        setAuthor(value);
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    console.log(title, page, author);
    axios
      .get("http://localhost:5000/searchbooks", {
        params: {
          title: title,
          page: page,
          author: author,
        },
      })
      .then((response) => {
        setSearchResults(response.data.message);
      }).catch((error) => {
        alert("Error fetching books", error);
      });
  }, [title, page, author]);
  return (
    <>
      <div className="flex justify-between gap-6 my-8 items-center">
        <Select
          defaultSelectedKeys={["title"]}
          label="Filter"
          className="max-w-xs"
          onChange={handleFilterChange}
        >
          <SelectItem key={"title"} value={"title"}>
            Title
          </SelectItem>
          <SelectItem key={"authors"} value={"authors"}>
            Authors
          </SelectItem>
        </Select>
        <Input
          placeholder="Search"
          onChange={handleSearch}
          value={
            filter === "title" ? title : filter === "authors" ? author : ""
          }
          endContent={<SearchIcon />}
        />
      </div>
      <Table aria-label="Example table with dynamic content">
        <TableHeader columns={searchColumns}>
          {(column) => (
            <TableColumn key={column.key}>{column.label}</TableColumn>
          )}
        </TableHeader>
        {searchResults && (
          <TableBody items={searchResults}>
            {(item) => (
              <TableRow key={item.bookID}>
                {(columnKey) => (
                  <TableCell>{getKeyValue(item, columnKey)}</TableCell>
                )}
              </TableRow>
            )}
          </TableBody>
        )}
      </Table>
    </>
  );
};

export default BooksPage;
