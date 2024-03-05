import { Button, Input } from "@nextui-org/react";
import axios from "axios";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const EditMemberPage = () => {
  const location = useLocation();
  const selectedMember = location.state;
  const navigate = useNavigate();
  const [name, SetName] = useState(selectedMember.username);
  const [phone, SetPhone] = useState(selectedMember.phone);
  const [debt, SetDebt] = useState(selectedMember.debt);
  console.log(location.state, name, phone, debt);

  const handleDelete = () => {
    axios
      .delete(`http://localhost:5000/members/${selectedMember.username}`)
      .then((response) => {
        navigate("/members");
      })
      .catch((error) => {
        console.error("Error deleting member:", error);
      });
  };
  const onSubmit = () => {
    axios
      .put(`http://localhost:5000/members/${selectedMember.username}`, {
        username: name,
        phone: phone,
        debt: debt,
      })
      .then((response) => {
        navigate("/members");
      })
      .catch((error) => {
        console.error("Error editing member:", error);
      });
  };
  return (
    <>
      <p className="text-xl font-medium">Edit Member</p>
      <div className="flex flex-row gap-6 justify-center items-center my-9">
        <Input
          label="User Name"
          type="string"
          value={name}
          onChange={(e) => SetName(e.target.value)}
        />
        <Input
          label="Phone"
          type="string"
          value={phone}
          onChange={(e) => SetPhone(e.target.value)}
        />
        <Input
          label="Debt"
          type="string"
          value={debt}
          onChange={(e) => SetDebt(e.target.value)}
        />
      </div>
      <div className="flex justify-center item-center">
        <Button color="secondary" className="w-[20vw]" onPress={onSubmit}>
          Update
        </Button>
      </div>
      <div className="flex flex-row gap-6 justify-end items-center my-24">
      <p className="text-xl font-medium">Delete Member</p>
        <Button color="danger" variant="ghost" onPress={handleDelete}>
          Delete
        </Button>
      </div>
    </>
  );
};

export default EditMemberPage;
