import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import './App.css'

const Jokes = () => {

    const [data, setData] = useState([])
    let navigate = useNavigate() 
    const url= 'https://v2.jokeapi.dev/joke/any?format=json&blacklistFlags=nsfw,sexist&type=single&lang=EN&amount=10'

    useEffect(()=>{
        fetch(url).then(res => res.json()).then(Data => setData(Data.jokes))
      },[]) 

    const Fetching = (data) => {
            fetch(url).then(res => res.json()).then(Data => setData(Data.jokes))
    }

    const Logout = () =>{
        localStorage.clear()
        navigate("/")
    }
 
    return(
        <>
        <div className="jokes-page-container">
        <h1 className="heading">Jokes</h1>
        <div className="jokes-container">
            {data.map(each => <div className="each-container">
                <li><p>{each.joke}</p></li>
                </div> )}
        </div>
        </div>
        <button className="m-3 btn btn-success" onClick={Fetching}>Fetch</button>
        <button className="m-3 btn btn-danger" onClick={Logout}>Logout</button>
        </>
    )
}

export default Jokes