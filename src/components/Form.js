import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";

const Form = () => {
  const [inputValue, setInputValue] = useState();
  const [input1Value, setInput1Value] = useState();
  const [destinationNameInputValue, setDestinationNameInputValue] = useState();
  const [input2Value, setInput2Value] = useState();
  return (
    <div className="self-stretch rounded-xl bg-white shadow-[0px_25px_25px_rgba(59,_77,_129,_0.25)] flex flex-col items-center justify-start py-7 px-[30px] gap-[17px]">
      <textarea
        className="[border:none] bg-[transparent] flex font-poppins text-5xl [outline:none] self-stretch flex-col items-center justify-start font-bold text-darkslategray"
        placeholder="Inquiry Form"
        defaultValue="Are you looking for details about a certain property? Ask us a question using the form below."
      />
      <div className="self-stretch flex flex-col items-center justify-start gap-[10px]">
        <div className="self-stretch flex flex-row items-start justify-center gap-[10px] md:flex-col md:gap-[10px] md:items-start md:justify-center">
          <input
            className="[outline:none] font-roboto text-base bg-[transparent] self-stretch flex-1 rounded flex flex-col items-start justify-start py-4 px-3 text-darkgray border-[1px] border-solid border-gray1 md:flex-[unset] md:self-stretch"
            name="First Name"
            value={inputValue}
            placeholder="First name"
            type="text"
            onChange={(event) => setInputValue(event.target.value)}
            autoComplete="on"
          />
          <input
            className="[outline:none] font-roboto text-base bg-[transparent] self-stretch flex-1 rounded flex flex-col items-start justify-center py-4 px-3 text-darkgray border-[1px] border-solid border-gray1 md:flex-[unset] md:self-stretch"
            name="Last Name"
            placeholder="Last name"
            type="text"
            value={input1Value}
            onChange={(event) => setInput1Value(event.target.value)}
            autoComplete="on"
          />
        </div>
        <input
          className="[outline:none] font-roboto text-base bg-[transparent] self-stretch rounded flex flex-col items-start justify-start py-4 px-3 text-darkgray border-[1px] border-solid border-gray1"
          name="Email"
          placeholder="Email id"
          type="text"
          value={destinationNameInputValue}
          onChange={(event) => setDestinationNameInputValue(event.target.value)}
          autoComplete="on"
        />
        <input
          className="[outline:none] font-roboto text-base bg-[transparent] self-stretch rounded box-border h-[105px] flex flex-col items-start justify-start p-3 text-darkgray border-[1px] border-solid border-gray1"
          name="Comments or questions..."
          placeholder="Comments or questions"
          type="text"
          value={input2Value}
          onChange={(event) => setInput2Value(event.target.value)}
        />
        <Button className="w-[222px]" name="Submit" variant="primary" size="lg">
          Submit
        </Button>
      </div>
    </div>
  );
};

export default Form;
