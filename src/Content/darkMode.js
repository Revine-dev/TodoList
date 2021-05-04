import { useEffect, useRef, useState } from "react";

const DarkModeTemplate = () => {
  const [darkMode, setdarkMode] = useState(false);
  const darkModeSwitcher = useRef();

  function isDarkBrowserModeEnabled() {
    return (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    );
  }

  useEffect(() => {
    if (!document.body.className && isDarkBrowserModeEnabled()) {
      setdarkMode(true);
      darkModeSwitcher.current.click();
    }
  }, []);

  if (darkMode) {
    document.body.className = "darkmode";
  } else {
    document.body.className = "";
  }

  return (
    <div className="switchdarkmode">
      <input
        type="checkbox"
        ref={darkModeSwitcher}
        name="darkmode"
        onClick={() => {
          !darkMode ? setdarkMode(true) : setdarkMode(false);
        }}
        className="apple-switch"
        id="switchdarkmodeBtn"
      />
      <label htmlFor="switchdarkmodeBtn">Dark Mode</label>
    </div>
  );
};

export default DarkModeTemplate;
