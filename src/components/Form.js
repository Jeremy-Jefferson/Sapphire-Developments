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
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      {/* Name Fields Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <input
            className={`w-full px-4 py-3.5 rounded-lg border bg-slate-50 text-slate-700 placeholder-slate-400 text-sm transition-all duration-200 ${
              errors.firstName 
                ? 'border-red-400 focus:border-red-500 focus:ring-2 focus:ring-red-100' 
                : 'border-slate-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-100'
            } focus:outline-none`}
            placeholder="First Name *"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            aria-invalid={!!errors.firstName}
          />
          {errors.firstName && <span className="text-red-500 text-xs mt-1 block">{errors.firstName}</span>}
        </div>
        <div>
          <input
            className={`w-full px-4 py-3.5 rounded-lg border bg-slate-50 text-slate-700 placeholder-slate-400 text-sm transition-all duration-200 ${
              errors.lastName 
                ? 'border-red-400 focus:border-red-500 focus:ring-2 focus:ring-red-100' 
                : 'border-slate-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-100'
            } focus:outline-none`}
            placeholder="Last Name *"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            aria-invalid={!!errors.lastName}
          />
          {errors.lastName && <span className="text-red-500 text-xs mt-1 block">{errors.lastName}</span>}
        </div>
      </div>

      {/* Email Field */}
      <div>
        <input
          className={`w-full px-4 py-3.5 rounded-lg border bg-slate-50 text-slate-700 placeholder-slate-400 text-sm transition-all duration-200 ${
            errors.email 
              ? 'border-red-400 focus:border-red-500 focus:ring-2 focus:ring-red-100' 
              : 'border-slate-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-100'
          } focus:outline-none`}
          placeholder="Email Address *"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          aria-invalid={!!errors.email}
        />
        {errors.email && <span className="text-red-500 text-xs mt-1 block">{errors.email}</span>}
      </div>

      {/* Message Textarea */}
      <div>
        <textarea
          className={`w-full px-4 py-3 rounded-lg border bg-slate-50 text-slate-700 placeholder-slate-400 text-sm transition-all duration-200 resize-none ${
            errors.messageText 
              ? 'border-red-400 focus:border-red-500 focus:ring-2 focus:ring-red-100' 
              : 'border-slate-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-100'
          } focus:outline-none`}
          placeholder="Your message *"
          rows="5"
          value={messageText}
          onChange={(e) => setMessageText(e.target.value)}
          aria-invalid={!!errors.messageText}
        />
        {errors.messageText && <span className="text-red-500 text-xs mt-1 block">{errors.messageText}</span>}
      </div>

      {/* Success Message */}
      {isSubmitted && (
        <div className="w-full bg-green-50 text-green-700 font-medium text-sm text-center py-3 rounded-lg border border-green-200">
          Thank you! Your message has been sent successfully.
        </div>
      )}

      {/* Submit Button - More prominent */}
      <button 
        type="submit"
        className="w-full px-8 py-4 bg-primary-500 hover:bg-primary-600 text-white font-medium text-sm rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-primary-200"
        disabled={isSubmitted}
      >
        {isSubmitted ? 'Message Sent!' : 'Send Message'}
      </button>
    </form>
  );
};

export default Form;
