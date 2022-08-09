import React, { useState } from 'react';

const InputExample = () => {

    let userInput = "입력 받기전";

    const [userInputWithState, setUserInputWithState] = useState();


    const handleChangeInput = (event) => {
        const { value } = event.target; 
        console.log(value);
        setUserInputWithState(value);
    };

    const handleClickButton = () => {
        console.log("button click");
    };

  return (
    <div>
        <p>{userInputWithState}</p>
        <input onChange={handleChangeInput}></input>
        <button onClick={handleClickButton}>입력</button>
    </div>
  );
};

export default InputExample