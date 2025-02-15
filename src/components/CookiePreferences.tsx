const CookiePreferences = () => {
  const openPreferences = () => {
    if (window.cookieconsent) {
      window.cookieconsent.openPreferencesCenter();
    }
  };

  return (
    <button
      onClick={openPreferences}
      className="text-gray-300 hover:text-secondary transition-colors"
    >
      Update Cookie Preferences
    </button>
  );
};

export default CookiePreferences; 