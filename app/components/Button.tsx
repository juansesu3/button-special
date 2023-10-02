"use client";
// Import necessary libraries
import React, { MouseEvent } from "react";
import Swal from "sweetalert2";

/* */
// Define the component as a React functional component with TypeScript
const Button: React.FC = () => {
  // This function is triggered when the user clicks the button
  // We use "MouseEvent<HTMLButtonElement>" to type the button's event
  const showInfo = (event: MouseEvent<HTMLButtonElement>) => {
    // Prevent the default behavior of the button

    event.preventDefault();
    // Use SweetAlert2 to display an informational pop-up
    Swal.fire({
      title: "How Time Capsule Works", // Title of the pop-up
      text: "Here you can describe how the feature works.", // Descriptive text
      icon: "info", // Informational icon
      confirmButtonText: "Got it!", // Text for the confirmation button
    });
  };

  // Render the button
  // Clicking this button will trigger the `showInfo` function

  return (
    <button
      onClick={showInfo} // Asociamos el evento de clic con la función `showInfo`
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded shadow-md"
    >
      Time Capsule Info
    </button>
  );
};
// Export the component so it can be used in other parts of the application
export default Button;
