import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";

const Form = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    if (!firstName.trim()) newErrors.firstName = "First name is required";
    if (!lastName.trim()) newErrors.lastName = "Last name is required";
    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setIsSubmitted(true);
    // Reset form after successful submission
    setTimeout(() => {
      setFirstName("");
      setLastName("");
      setEmail("");
      setMessage("");
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <div className="self-stretch rounded-xl bg-white shadow-[0px_25px_25px_rgba(59,_77,_129,_0.25)] flex flex-col items-center justify-start py-7 px-[30px] gap-[17px]">
      <textarea
        className="[border:none] bg-[transparent] flex font-poppins text-5xl [outline:none] self-stretch flex-col items-center justify-start font-bold text-darkslategray"
        placeholder="Inquiry Form"
        defaultValue="Are you looking for details about a certain property? Ask us a question using the form below."
      />
      <div className="self-stretch flex flex-col items-center justify-start gap-[10px]">
        <div className="self-stretch flex flex-row items-start justify-center gap-[10px] md:flex-col md:gap-[10px] md:items-start md:justify-center">
          <div className="flex-1">
            <input
              className={`[outline:none] font-roboto text-base bg-[transparent] self-stretch flex-1 rounded flex flex-col items-start justify-start py-4 px-3 text-darkgray border-[1px] border-solid ${errors.firstName ? 'border-red-500' : 'border-gray1'} md:flex-[unset] md:self-stretch w-full`}
              name="First Name"
              value={firstName}
              placeholder="First name *"
              type="text"
              onChange={(e) => setFirstName(e.target.value)}
              autoComplete="given-name"
              aria-invalid={!!errors.firstName}
            />
            {errors.firstName && <span className="text-red-500 text-sm">{errors.firstName}</span>}
          </div>
          <div className="flex-1">
            <input
              className={`[outline:none] font-roboto text-base bg-[transparent] self-stretch flex-1 rounded flex flex-col items-start justify-center py-4 px-3 text-darkgray border-[1px] border-solid ${errors.lastName ? 'border-red-500' : 'border-gray1'} md:flex-[unset] md:self-stretch w-full`}
              name="Last Name"
              placeholder="Last name *"
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              autoComplete="family-name"
              aria-invalid={!!errors.lastName}
            />
            {errors.lastName && <span className="text-red-500 text-sm">{errors.lastName}</span>}
          </div>
        </div>
        <div>
          <input
            className={`[outline:none] font-roboto text-base bg-[transparent] self-stretch rounded flex flex-col items-start justify-start py-4 px-3 text-darkgray border-[1px] border-solid ${errors.email ? 'border-red-500' : 'border-gray1'} w-full`}
            name="Email"
            placeholder="Email id *"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="email"
            aria-invalid={!!errors.email}
          />
          {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}
        </div>
        <div>
          <textarea
            className={`[outline:none] font-roboto text-base bg-[transparent] self-stretch rounded box-border h-[105px] flex flex-col items-start justify-start p-3 text-darkgray border-[1px] border-solid ${errors.message ? 'border-red-500' : 'border-gray1'} w-full`}
            name="Comments or questions..."
            placeholder="Comments or questions *"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            aria-invalid={!!errors.message}
          />
          {errors.message && <span className="text-red-500 text-sm">{errors.message}</span>}
        </div>
        {isSubmitted && <div className="text-green-600 font-semibold">Thank you! Your message has been sent successfully.</div>}
        <Button 
          className="w-[222px]" 
          name="Submit" 
          variant="primary" 
          size="lg"
          onClick={handleSubmit}
          disabled={isSubmitted}
        >
          {isSubmitted ? 'Sent!' : 'Submit'}
        </Button>
      </div>
    </div>
  );
};

export default Form;
