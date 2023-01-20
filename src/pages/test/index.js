import {useState, useEffect} from 'react'



const Test = () => {


  const [counter, setCounter] = useState(0);
  console.log(counter)

  // useEffect(() => {
  //   setCounter(counter+1)
  //   console.log(counter)
  // }, []);

  //const [counter, setCouter] = useState(0)

  // function someFunction() {setCouter(1)};
  // useEffect(() => {
  //   someFunction();
  //   console.log(counter);
  // },[])




  return (
    <div>
      <h1>Test Page</h1>
        {/* A button that increments the counter */}
        <button onClick={() => setCounter(counter + 1)}>
          Increment
        </button>
        {/* A button that decrements the counter */}
        <button onClick={() => setCounter(counter - 1)}>
          Decrement
        </button>
        {/* A button that resets the counter */}
        <button onClick={() => setCounter(0)}>
          Reset
        </button>
        {/* The counter */}
        <p>Counter: {counter}</p>
        {/* <img width= "100px" height= "100px" src="https://www.w3schools.com/images/w3schools_green.jpg" /> */}
    </div>
  )
}

export default Test