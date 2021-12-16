import React, { useState} from 'react';
import { Son } from './son.js'
export function NewLifeCircleTest () {
  let [age,ageUp] = useState(18)
  return (
    <div>
      <button onClick={() => ageUp(++age)}>age++</button>
      <Son age={age}/>
    </div>
  );
}
