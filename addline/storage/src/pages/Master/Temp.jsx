import "./styles.css";
import {useState} from "react"

export default function App() {
  const[number,Setnumber] = useState(0);

  const add = ()=>{
    Setnumber(number++);
  }

  const sub =()=>{
    Setnumber(number--);
  }
  return (
    <div className="App">
      <button onClick = {add}/>
          {number}
       <button onClick = {sub}>-<button/>
    </div>
  );
}