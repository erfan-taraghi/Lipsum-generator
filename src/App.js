import{useState}from "react";
import data from './data'


function App() {
  const [count,setCount]= useState(0)
  const [text,setText]= useState([])


  const handlesumit = (e)=>{
    e.preventDefault()
    let amount = parseInt(count)
    console.log(typeof amount)
    if(count<0){
      amount= 0
    }
    if(count>5){
      amount = 5
    }
    setText(data.slice(0,amount))
  }
  return (
    <div className="section-center">
      <h4>لورم ساز   </h4>
      <form className="lorem" onSubmit={handlesumit}>
        <label htmlFor="total">تعداد پارگراف :</label>
        <input 
        type="number" 
        name='total'
        value={count}
        onChange={(e) =>setCount(e.target.value)}

         />
        <button type="submit">بساز</button>
      </form>

      <article className="lorem-text">
        {
          text.map((item,index)=>{
            return <p key={index}>{item}</p>
          })
        }
      </article>
    </div>
  );
}

export default App;
