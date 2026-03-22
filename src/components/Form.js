import { useState } from "react";

const Form = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [messageText, setMessageText] = useState("");
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
    if (!messageText.trim()) newErrors.message = "Message is required";
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
    
    // Store form data in localStorage
    const formData = {
      id: Date.now(),
      firstName,
      lastName,
      email,
      message: messageText,
      timestamp: new Date().toISOString()
    };
    
    const existingSubmissions = JSON.parse(localStorage.getItem('formSubmissions') || '[]');
    existingSubmissions.push(formData);
    localStorage.setItem('formSubmissions', JSON.stringify(existingSubmissions));
    
    console.log("Form submitted successfully!");
    
    // Reset form
    setTimeout(() => {
      setFirstName("");
      setLastName("");
      setEmail("");
      setMessageText("");
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <div className="self-stretch rounded-xl bg-white shadow-[0px_25px_25px_rgba(59,_77,_129,_0.25)] flex flex-col items-center justify-start p-11 gap-4">
      <textarea
        className="border-none bg-transparent w-full text-5xl font-bold text-slate-800 outline-none resize-none mb-4"
        rows="3"
        placeholder="Inquiry Form"
        defaultValue="Are you looking for details about a certain property? Ask us a question using the form below."
        readOnly
      />
      <div className="w-full flex flex-col items-center gap-3">
        <div className="w-full flex flex-row gap-3 md:flex-col lg:flex-row">
          <input
            className={`w-full p-4 rounded border ${errors.firstName ? 'border-red-500' : 'border-slate-200'} focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all`}
            placeholder="First name *"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            aria-invalid={!!errors.firstName}
          />
          {errors.firstName && <span className="text-red-500 text-sm w-full">{errors.firstName}</span>}
          <input
            className={`w-full p-4 rounded border ${errors.lastName ? 'border-red-500' : 'border-slate-200'} focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all`}
            placeholder="Last name *"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            aria-invalid={!!errors.lastName}
          />
          {errors.lastName && <span className="text-red-500 text-sm w-full">{errors.lastName}</span>}
        </div>
        <input
          className={`w-full p-4 rounded border ${errors.email ? 'border-red-500' : 'border-slate-200'} focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all`}
          placeholder="Email id *"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          aria-invalid={!!errors.email}
        />
        {errors.email && <span className="text-red-500 text-sm w-full">{errors.email}</span>}
        <textarea
          className={`w-full p-3 rounded border ${errors.messageText ? 'border-red-500' : 'border-slate-200'} focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all resize-vertical h-[105px]`}
          placeholder="Comments or questions *"
          value={messageText}
          onChange={(e) => setMessageText(e.target.value)}
          aria-invalid={!!errors.messageText}
        />
        {errors.messageText && <span className="text-red-500 text-sm w-full">{errors.message}</span>}
        {isSubmitted && <div className="w-full text-green-600 font-semibold text-center">Thank you! Your message has been sent successfully.</div>}
        <button 
          className="w-[222px] px-8 py-3 bg-primary-500 hover:bg-primary-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-primary-300"
          onClick={handleSubmit}
          disabled={isSubmitted}
        >
          {isSubmitted ? 'Sent!' : 'Submit'}
        </button>
      </div>
    </div>
  );
};

export default Form;

