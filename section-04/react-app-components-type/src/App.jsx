
import './App.css'
import CounterClassComponent from './components/CounterClassComponent'
import CounterFunctionalComponent from './components/CouterFunctionalComponent'

function App() {

  return (
    <>
      <div>
        <CounterFunctionalComponent message='Functional Component'/>
        <CounterClassComponent message='Class Component'/>
      </div>
    </>
  )
}

export default App
