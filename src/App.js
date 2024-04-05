import './App.css';
import {useState} from "react";

function App() {
  const [name,setName] = useState('');
  const [datetime,setDateTime] = useState('');
  const [desc,setDesc] = useState('');
  function handleSubmit(ev){
    ev.preventDefault();
    const url=process.env.REACT_APP_API_URL+'/transcation';
    const price=name.split(' ')[0];
    fetch(url,{
      method:'POST',
      headers:{'Content-type':'application/json'},
      body: JSON.stringify({price,name:name.substring(price.length+1),desc,datetime})
    }).then(response => {
      response.json().then(json =>{
        setName('');
        setDateTime('');
        setDesc('');
        console.log('result',json);
      });
    });
  }

  return (
    <main>
      <h1>$200<span>.00</span></h1>
      <form onSubmit={handleSubmit}>
        <div className="basic">
          <input type="text" value={name} onChange={ev => setName(ev.target.value)} placeholder="+100 for a cricket bat"></input>
          <input type="datetime-local" value={datetime} onChange={ev => setDateTime(ev.target.value)}></input>
        </div>
        <div className="desc" value={desc} onChange={ev => setDesc(ev.target.value)}>
          <input type="text" placeholder="description"></input>
        </div>
        <button type="submit">Add New Transcation</button>
      </form>
      <div className="transcations">
        <div className="transcation">
          <div className="left">
              <div className="name">cricket bat</div> 
              <div className="desc" >For playing cricket</div>          
          </div>
          <div className="right">
            <div className="price green">$100</div>
            <div className="datetime">29-mar-2024 3:13:20</div>
          </div>
        </div>
        <div className="transcation">
          <div className="left">
              <div className="name">cricket bat</div> 
              <div className="desc" >For playing cricket</div>          
          </div>
          <div className="right">
            <div className="price red">$100</div>
            <div className="datetime">29-mar-2024 3:13:20</div>
          </div>
        </div>
        <div className="transcation">
          <div className="left">
              <div className="name">cricket bat</div> 
              <div className="desc" >For playing cricket</div>          
          </div>
          <div className="right">
            <div className="price green">$100</div>
            <div className="datetime">29-mar-2024 3:13:20</div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
