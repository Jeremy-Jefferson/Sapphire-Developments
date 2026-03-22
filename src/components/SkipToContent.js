/**
 * SkipToContent - Provides keyboard accessible skip link for screen readers
 * Allows users to skip navigation and jump directly to main content
 */
const SkipToContent = () => {
  const handleSkip = (e) => {
    e.preventDefault();
    const mainContent = document.getElementById("main-content");
    if (mainContent) {
      mainContent.setAttribute("tabindex", "-1");
      mainContent.focus();
    }
  };

  return (
    <a
      href="#main-content"
      onClick={handleSkip}
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-primary-500 focus:text-white focus:px-4 focus:py-2 focus:rounded-lg focus:font-semibold"
    >
      Skip to main content
    </a>
  );
};

export default SkipToContent;
