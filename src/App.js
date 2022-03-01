import React, { useState } from 'react';

const App = () => {
  const [invalue, setInvalue] = useState('');
  const [people, setPeople] = useState([]);

  const inputChange = (e) => {
    // console.log(e.target.value);
    const InputValue = e.target.value;
    setInvalue(InputValue);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPeople = invalue;
    setPeople((preval) => {
      return [...preval, newPeople];
    });
  };
  // const remove = () => {};
  // console.log(people);
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type='text' value={invalue} onChange={inputChange} />
        <button type='submit'>submit</button>
      </form>
      {people.map((cval, index) => {
        return (
          <div key={index}>
            <h1>{cval}</h1>
            {/* <button>delete</button> */}
          </div>
        );
      })}
    </>
  );
};

export default App;
