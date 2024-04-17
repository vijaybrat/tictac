/* eslint-disable react/prop-types */

function Box({ value, onClick }) {
  return (
    <button
      className={`border-none shadow-xl w-20 h-20 text-center p-3 font-extrabold text-4xl ${
        value === "X" ? "text-red-500" : "text-blue-500"
      }`}
      onClick={onClick}
    >
      {value}
    </button>
  );
}

export default Box;
