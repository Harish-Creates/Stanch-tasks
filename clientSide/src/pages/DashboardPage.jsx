import {
  Button,
  Spinner,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  getKeyValue,
} from "@nextui-org/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const borrowedColumns = [
  {
    key: "borrowed_title",
    label: "Book Title",
  },
  {
    key: "username",
    label: "User Name",
  },
  {
    key: "borrowed_on",
    label: "Borrowed On",
  },
];

const debtColumns = [
  {
    key: "username",
    label: "User Name",
  },
  {
    key: "debt",
    label: "Debt",
  },
];

const transactionColumns = [
  {
    key: "username",
    label: "User Name",
  },
  {
    key: "borrowed_title",
    label: "Book Title",
  },
  {
    key: "borrowed_on",
    label: "Borrowed On",
  },
  {
    key: "returned_on",
    label: "Returned On",
  },
  {
    key: "duration",
    label: "Duration",
  },
  {
    key: "rent",
    label: "Rent",
  },
];

const DashboardPage = () => {
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeDebts, setActiveDebts] = useState([]);
  const [transactions, setTransactions] = useState([]);
  const [activeBorrows, setActiveBorrows] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:5000/members")
      .then((response) => {
        // Handle the successful response
        setMembers(response.data);
      })
      .catch((error) => {
        // Handle any errors that occurred during the request
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
    axios
      .get("http://localhost:5000/transactions")
      .then((response) => {
        setTransactions(response.data);
        setLoading(false);
      })
      .catch((error) => {
        // Handle any errors that occurred during the request
        setError(error);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    setLoading(true);
    setActiveDebts(members.filter((member) => member.debt > 0));
    setActiveBorrows(members.filter((member) => member.borrowed_title !== ""));
    setLoading(false);
  }, [members]);

  return (
    <>
    {error && <p>Error: {error.message}</p>}

      <div className="flex flex-col gap-y-8">
        <div className="flex justify-between items-center">
          <p className="text-2xl font-medium">Librarian</p>
          <div className="flex gap-4">
            <Button
              onPress={() => {
                navigate("/borrow", { state: members });
              }}
            >
              Borrow
            </Button>
            <Button
              onPress={() => {
                navigate("/return", { state: activeBorrows });
              }}
            >
              Return
            </Button>
            <Button
              color="secondary"
              className="font-medium"
              onPress={() => {
                navigate("/pay", { state: activeDebts });
              }}
            >
              Pay
            </Button>
          </div>
        </div>
        <div className="flex justify-between gap-6 items-start">
          <Table aria-label="Example table with dynamic content">
            <TableHeader columns={borrowedColumns}>
              {(column) => (
                <TableColumn key={column.key}>{column.label}</TableColumn>
              )}
            </TableHeader>
            <TableBody items={activeBorrows}>
              {(item) => (
                <TableRow key={item.username}>
                  {(columnKey) => (
                    <TableCell>{getKeyValue(item, columnKey)}</TableCell>
                  )}
                </TableRow>
              )}
            </TableBody>
          </Table>
          <Table aria-label="Example table with dynamic content">
            <TableHeader columns={debtColumns}>
              {(column) => (
                <TableColumn key={column.key}>{column.label}</TableColumn>
              )}
            </TableHeader>
            <TableBody items={activeDebts}>
              {(item) => (
                <TableRow key={item.username}>
                  {(columnKey) => (
                    <TableCell>{getKeyValue(item, columnKey)}</TableCell>
                  )}
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
        <Table aria-label="Example table with dynamic content">
          <TableHeader columns={transactionColumns}>
            {(column) => (
              <TableColumn key={column.key}>{column.label}</TableColumn>
            )}
          </TableHeader>
          <TableBody items={transactions}>
            {(item) => (
              <TableRow key={item._id}>
                {(columnKey) => (
                  <TableCell>{getKeyValue(item, columnKey)}</TableCell>
                )}
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </>
  );
};

export default DashboardPage;
