import { Button, Input, Select, SelectItem } from "@nextui-org/react";
import axios from "axios";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const PaymentPage = () => {
  const location = useLocation();
  const activeDebts = location.state;
  const [selectedMember, setSelectedMember] = useState(null);
  const [debt, setDebt] = useState(null);
  const [pay, setPay] = useState("");
  const navigate = useNavigate();

  const handleReturn = () => {
    if (!selectedMember || !pay) {
      alert("Please select member and pay");
      return;
    }
    axios
      .put("http://localhost:5000/members/pay", {
        username: selectedMember,
        payment: pay,
      })
      .then((response) => {
        setSelectedMember("");
        setPay("");
        setDebt("");
        alert("Book Returned successfully");
        navigate("/");
      })
      .catch((error) => {
        alert("Error borrowing book. Please try again later", error);
      });
  };

  const handleSelectUser = (e) => {
    setSelectedMember(e.target.value);
    const debtMember = activeDebts.find(
      (member) => member.username === e.target.value
    );
    if (debtMember) {
      setDebt(debtMember.debt);
    }
  };

  console.log(debt, selectedMember);

  return (
    <>
      <p className="text-2xl font-medium">Payment</p>
      <div className="flex flex-row gap-6 justify-center items-center my-9">
        <Select isRequired label="UserName" onChange={handleSelectUser}>
          {activeDebts.map((member) => (
            <SelectItem key={member.username} value={member.username}>
              {member.username}
            </SelectItem>
          ))}
        </Select>
        <p className="text-xl font-semibold text-nowrap">Total Debt: </p>
        <p className="text-xl font-semibold text-danger">{debt}</p>
      </div>
      <div className="flex flex-col gap-3 justify-center item-center my-8">
        <Input
          isRequired
          type="number"
          label="Pay"
          value={pay}
          onChange={(e) => setPay(e.target.value)}
        />
      </div>
      <div className="flex justify-center item-center">
        <Button color="secondary" className="w-[20vw]" onPress={handleReturn}>
          Pay Money
        </Button>
      </div>
    </>
  );
};

export default PaymentPage;
