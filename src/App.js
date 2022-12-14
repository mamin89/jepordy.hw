import './App.css';
import Score from './components/Score';
import useFetch from './components/useFetch'

function App() {

const {data: Jepordy, loading, error, refetch} = useFetch("https://jservice.io/api/random")
if(loading) return <h1>LOADING...</h1>
if(error) console.log(error);


  return (
    <div className="App">
    <h1> Welcome to Jepordy </h1>
    <h2> Score: </h2>
    <Score />
    <h2>Let's Play!</h2>
    <button>Get Question</button>

     <h2> Category </h2>
     <h3> Points</h3> 

    <useFetch/>

    <h1>{Jepordy?.setup}: {Jepordy?.delivery}</h1>
    <h2>Answer:</h2>
    <button> Click to Reveal Question</button>
    </div>
  );
}

export default App;
