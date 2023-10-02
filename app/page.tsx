// Import the custom Button component
import Button from "./components/Button";

// Define the main Home component
export default function Home() {
  return (
    // Create a container that takes the full screen and centers its content
    <div className="bg-gray-100 h-screen w-full flex justify-center items-center">
      {/*// Create a card-like component that holds the information and button */}
      <div
        className="flex flex-col gap-4 justify-center items-center w-52 m-auto 
      rounded-md p-4  shadow-lg bg-white
      "
      >
        {/*Display the title of the card */}
        <h1 className="text-center font-semibold text-lg">
          Special botton proposal
        </h1>
        {/* Display the description text*/}
        <p className="text-center">
          A special button that takes a user to a special pop-up to inform a
          user how the time capsule feature works.
        </p>
        {/*Insert the custom Button component */}
        <div className="">
          <Button />
        </div>
      </div>
    </div>
  );
}
