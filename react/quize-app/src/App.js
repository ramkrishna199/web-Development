import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

const API_URL = "https://opentdb.com/api.php?amount=10";

function App() {

  const [qustions,setQustions] = useState([]);
  const [currentQs,setCurrentQs]= useState(0);
  const [score,setScore] = useState(0);

  useEffect(()=>{
    // const fetchFunction = async ()=>{
    //   try {
    //     const responce = await axios.get(API_URL);
    //     setQustions(responce.data.results);
    //     console.log(responce.data.results);
    //   } catch (error) {
    //     console.log("Error fatching .....",error);
    //   }
    // };
    //   fetchFunction();
    func()
  },[])

   
  const restartQuize=()=>{
    setCurrentQs(0);
    setScore(0);
  }

  const func=async()=>{
    axios.get(API_URL)
    .then((res)=>{
      console.log(res);
    })
    .catch((err)=>{
      console.log(err);
    })
  }

  const handleAnswerClick=(isCorrect)=>{
    if(isCorrect){
      setScore(score+1);

    }
    setCurrentQs(currentQs+1)
  }
  
  if (qustions.length === 0){
    return (
      <div>
        Lodding .....
      </div>
    )
  }

  if(currentQs===qustions.length){
    return(
      <div>
        <h2>
          Qustion Complete!
        </h2>
        <p>Your scor:{score} </p>
        <button onClick={restartQuize}> Restart Quize</button>
      </div>
    )
  }

  const currentQustion = qustions[currentQs]

  return(
    <div>
      <h2>Qustion {currentQs+1}</h2>
      <p>{currentQustion.question}</p>

      <ul>
        {currentQustion.incorrect_answers.map
        ((ans)=>{
          return(
          <li key={Date.now()} onClick={handleAnswerClick(false)}>
            {ans}
          </li>
        )})}
        
        <li onClick={()=>handleAnswerClick(true)}>
          {currentQustion.correct_answer}
        </li>
      </ul>
    </div>
  )
}

export default App;
