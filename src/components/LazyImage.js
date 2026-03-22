import { useState, useCallback } from "react";

const LazyImage = ({ 
  src, 
  alt, 
  className = "", 
  placeholderClassName = "",
  onLoad = () => {},
  ...props 
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleLoad = useCallback(() => {
    setIsLoaded(true);
    onLoad();
  }, [onLoad]);

  const handleError = useCallback(() => {
    setHasError(true);
  }, []);

  return (
    <div className={`relative ${placeholderClassName}`}>
      {!isLoaded && !hasError && (
        <div 
          className={`absolute inset-0 bg-slate-200 animate-pulse ${placeholderClassName}`}
          role="status"
          aria-label="Loading image"
        >
          <div className="flex items-center justify-center h-full">
            <div className="w-8 h-8 border-2 border-slate-300 border-t-primary-500 rounded-full animate-spin"></div>
          </div>
        </div>
      )}
      
      {hasError ? (
        <div 
          className={`flex items-center justify-center bg-slate-100 text-slate-400 ${placeholderClassName}`}
          role="img"
          aria-label={`Failed to load image: ${alt}`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          className={`${className} ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
          loading="lazy"
          decoding="async"
          onLoad={handleLoad}
          onError={handleError}
          {...props}
        />
      )}
    </div>
  );
};

export default LazyImage;
