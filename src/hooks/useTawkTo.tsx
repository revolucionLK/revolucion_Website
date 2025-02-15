import { useEffect } from 'react';

const useTawkTo = () => {
  useEffect(() => {
    // Create the Tawk_API object if it doesn't exist
    if (typeof window !== 'undefined') {
      window.Tawk_API = window.Tawk_API || {};
      window.Tawk_LoadStart = new Date();
    }

    const s1 = document.createElement('script');
    const s0 = document.getElementsByTagName('script')[0];

    s1.async = true;
    s1.src = 'https://embed.tawk.to/67adb605825083258e1483ae/1ijv8u1h2';
    s1.charset = 'UTF-8';
    s1.setAttribute('crossorigin', '*');

    s0.parentNode?.insertBefore(s1, s0);

    // Cleanup function
    return () => {
      s1.remove();
    };
  }, []); // Empty dependency array means this runs once on mount
};

export default useTawkTo; 