
import './App.css'
import CounterClassComponent from './components/CounterClassComponent'
import CounterFunctionalComponent from './components/CouterFunctionalComponent'
import ProductsList from './components/ProductsList'

function App() {

  return (
    <>
      <div>
        <CounterFunctionalComponent message='Functional Component'/>
        <CounterClassComponent message='Class Component'/>
      </div>
      <div>
        <ProductsList />
      </div>
    </>
  )
}

export default App
