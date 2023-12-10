import { useCallback, useEffect, useRef, useState } from "react";

function App() {
  const [lenghtPWD, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charecter, setCharecter] = useState(false);
  const [password, setPasword] = useState("");

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) str += "0123456789"
    if (charecter) str += "~!@#$%^&*-_=+[]{}"

    for (let i = 1; i <= lenghtPWD; i++) {
      let car = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(car);
    }
    setPasword(pass);
  }, [lenghtPWD, numberAllowed, charecter, setPasword]);


  // !useRef
const passRef=useRef(null)

const passCopy=useCallback(()=>{
  passRef.current?.select();
  window.navigator.clipboard.writeText(password)
},[password])

  useEffect(()=>{
    passwordGenerator();
  },[lenghtPWD,numberAllowed,charecter,passwordGenerator])
  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-8 text-orange-600 bg-gray-800">
        <h1 className=" text-white text-center my-3">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className=" outline-none w-full py-1 px-3"
            placeholder="password"
            readOnly
            ref={passRef}
          />
          <button className=" outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
          onClick={passCopy}
          >
            copy
          </button>
        </div>

        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={8}
              max={100}
              value={lenghtPWD}
              className=" cursor-pointer"
              onChange={(e) => setLength(e.target.value)}
            />
            <label>Length : {lenghtPWD}</label>
          </div>

          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => {
                setNumberAllowed((prv) => !prv);
              }}
            />
            <label>Number</label>
          </div>

          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={charecter}
              id="numberInput"
              onChange={() => {
                setCharecter((prv) => !prv);
              }}
            />
            <label>Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
