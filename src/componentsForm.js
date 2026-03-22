import { useState } from "react";

const ContactForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [comments, setComments] = useState("");
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    
    if (!firstName.trim()) newErrors.firstName = "First name is required";
    if (!lastName.trim()) newErrors.lastName = "Last name is required";
    if (!email.trim()) newErrors.email = "Email is required";
    if (!comments.trim()) newErrors.comments = "Comments are required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Simulate form submission
    console.log('Form data:', { firstName, lastName, email, comments });
    setSubmitted(true);
    
    // Reset after delay
    setTimeout(() => {
      setFirstName("");
      setLastName("");
      setEmail("");
      setComments("");
      setSubmitted(false);
      setErrors({});
    }, 2000);
  };

  return (
    <div className="w-full max-w-md mx-auto bg-white rounded-[10px] shadow-[0_25px_25px_rgba(59,77,129,0.25)] p-12 flex flex-col items-center gap-6">
      <textarea
        className="w-full text-5xl font-bold text-slate-800 border-none bg-transparent outline-none resize-none pb-8"
        placeholder="Inquiry Form"
        value="Are you looking for details about a certain property? Ask us a question using the form below."
        readOnly
        rows="2"
      />
      
      <div className="w-full flex flex-col gap-4">
        <div className="flex gap-4">
          <div className="flex-1">
            <input
              className={`w-full p-4 rounded border ${errors.firstName ? 'border-red-500' : 'border-slate-200'} focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500`}
              placeholder="First name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>}
          </div>
          <div className="flex-1">
            <input
              className={`w-full p-4 rounded border ${errors.lastName ? 'border-red-500' : 'border-slate-200'} focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500`}
              placeholder="Last name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>}
          </div>
        </div>

        <input
          className={`w-full p-4 rounded border ${errors.email ? 'border-red-500' : 'border-slate-200'} focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500`}
          placeholder="Email id"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}

        <textarea
          className={`w-full p-4 rounded border ${errors.comments ? 'border-red-500' : 'border-slate-200'} focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 resize-vertical h-[105px]`}
          placeholder="Comments or questions"
          value={comments}
          onChange={(e) => setComments(e.target.value)}
        />
        {errors.comments && <p className="text-red-500 text-xs mt-1">{errors.comments}</p>}

        <button
          className="w-[222px] mx-auto px-8 py-3 bg-primary-500 hover:bg-primary-600 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-primary-200"
          onClick={handleSubmit}
          disabled={submitted}
        >
          {submitted ? "Submitted!" : "Submit"}
        </button>
      </div>
    </div>
  );
};

export default ContactForm;

