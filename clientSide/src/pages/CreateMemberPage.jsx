import { Button, Input } from "@nextui-org/react";
import axios from "axios";
import  { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateMemberPage = () => {
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();

  const onSubmit = () => {
    axios
      .post("http://localhost:5000/members", {
        name: username,
        phone: phone,
      })
      .then((response) => {
        console.log(response.data);
        setUsername("");
        setPhone("");
        alert("Member created successfully");
        navigate("/members");
      })
      .catch((error) => {
        alert("Error creating member", error);
      });
  };

  return (
    <>
      <p className="text-2xl font-medium">Create Member Page</p>
      <div className="flex flex-row gap-6 justify-center items-center my-9">
        <Input
          label="User Name"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Input
          label="Phone"
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>
      <div className="flex justify-center item-center">
        <Button color="secondary" className="w-[20vw]" onPress={onSubmit}>Create Member</Button>
      </div>
    </>
  );
};

export default CreateMemberPage;
