import { useState } from "react"

const App = () => {
  const [count, setcount] = useState(0);
  const [firstName, setFirstName] = useState("Ella");


  const handleIncrement = () => {
    setcount(count)
  };

  const handleClick = () => {
    setFirstName("James");
  };
  
  return (
    <>
      <h1>HELLO</h1>
      <p className="text-red-600">CLIQUE </p>
      <button
        type="button"
        className="bg-blue-600 text-white rounded-lg p-2 hover:bg-blue-700 cursor-pointer"
        onClick={() => setcount(count + 1)}
        > 
        Click Me! {count}
        </button>

        <button
        type="button" className="bg-green-600 text-white rounded-lg shadow-lg p-2 hover:bg-red-700 cursor-pointer"
          onClick={handleClick}

          >Click Me!
        </button>

        <h1>{firstName}</h1>
    </>
  )
}

export default App