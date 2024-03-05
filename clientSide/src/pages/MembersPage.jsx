import {
  Button,
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

const membersColumn = [
  {
    key: "username",
    label: "User Name",
  },
  {
    key: "phone",
    label: "Phone",
  },
  {
    key: "borrowed_title",
    label: "Currently Borrowed",
  },
  {
    key: "debt",
    label: "Debt",
  },
  {
    key: "edit",
    label: "EDIT",
  },
];

const MembersPage = () => {
  const [members, setMembers] = useState([]);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    axios
      .get("http://localhost:5000/members")
      .then((response) => {
        setMembers(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <div className="flex justify-between items-center my-10 ">
        <p className="text-2xl font-medium">Members Page</p>
        <Button color="primary" onClick={() => navigate("/create")}>Create Member</Button>
      </div>
      <Table aria-label="Example table with dynamic content">
        <TableHeader columns={membersColumn}>
          {(column) => (
            <TableColumn key={column.key}>{column.label}</TableColumn>
          )}
        </TableHeader>
        <TableBody items={members}>
          {(item) => (
            <TableRow key={item._id}>
              {(columnKey) =>
                columnKey === "edit" ? (
                  <TableCell>
                    <Button
                      onPress={() => {
                        navigate(`/edit/${item.username}`, { state: item });
                      }}
                    >
                      Edit
                    </Button>
                  </TableCell>
                ) : (
                  <TableCell>{getKeyValue(item, columnKey)}</TableCell>
                )
              }
            </TableRow>
          )}
        </TableBody>
      </Table>
    </>
  );
};

export default MembersPage;
