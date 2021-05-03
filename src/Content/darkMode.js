import { useEffect } from "react";

const DarkModeTemplate = (props) => {
  function isDarkModeEnabled() {
    return (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    );
  }

  useEffect(() => {
    if (isDarkModeEnabled()) {
      props.setdarkMode(true);
    }
  }, []);

  if (props.darkMode) {
    document.body.className = "darkmode";
  } else {
    document.body.className = "";
  }

  return (
    <div className="switchdarkmode">
      <input
        type="checkbox"
        name=""
        onClick={() => {
          !props.darkMode ? props.setdarkMode(true) : props.setdarkMode(false);
        }}
        className="apple-switch"
        id="switchdarkmodeBtn"
      />
      <label htmlFor="switchdarkmodeBtn">
        {!props.darkMode ? "Dark Mode" : "Light mode"}
      </label>
    </div>
  );
};

export default DarkModeTemplate;
