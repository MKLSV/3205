import { useEffect, useState } from 'react';
import './assets/App.css';
import { service } from './services/service';
 
function App() {
  
  
  const [error, setError] = useState('')
  const [result, setResult] = useState(null)
  const [number, setNumber] = useState('')
  const [email, setEmail] = useState('');
  const [loader, setLoader] = useState(false);

  function handleSubmit(e) {
    e.preventDefault()
    setError('')
    const form = {
      email,
      number
    }

    if (!form.email) setError('Введите e-mail')
    else {
  setResult(null)
  setLoader(true)
  const result = service.getData(form).then((res) => {
    
    if (res.data.error){
      setError(res.data.error)
      setLoader(false)

        } 
        
        else {
          console.log(res.data)
      setResult(res.data)
      setEmail('')
      setNumber('')
      setLoader(false)
            }
          })
        }
  }

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handleNumberChange(e) {
    const num = e.target.value
    if (!num) setNumber('')
    else if (num.length >= 9) return
    else setNumber(formateNum(num));
  }


  function formateNum(num) {
    if(num.length === 2 || num.length === 5) {
      return num + '-'
    }
    else {
      console.log(num)
      return num
    }
  }

  return (
    <div className="App">
      {loader ? <div className="loader-container"><span className="loader"></span></div> : ''}
      <div className="form-container" style={result && result.length ? { top: '10vh' } : {top: '30%'  }}>
        <h1>Search-From</h1>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="inputs">
            <input type="email" name="field2" placeholder="Email Address..." value={email} onChange={handleEmailChange} />
            <input type="text" name="field1" placeholder="Number..." value={number} onChange={handleNumberChange} />
          </div>
          <span className='error'>{error}</span>
          <button type="submit" value="Search" >Search</button>
        </form>
      </div>
      <div className="outut-info" style={result && result.length ? { bottom: "5vh" } : { bottom: '30%'}}>
        <h1>Result</h1>
        <div className="result-container">
          {result ? result.map(item => (
            <div className="result-item" key={item.email + item.number}>
              <span>Email: {item.email}</span>
              <span>Number: {item.number}</span>
            </div>
          )) : ''}
        </div>
      </div>
    </div>
  );
}

export default App;
