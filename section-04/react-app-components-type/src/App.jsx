
import './App.css'
import ClientsListWithData from './components/ClientsList'
import CounterClassComponent from './components/CounterClassComponent'
import CounterFunctionalComponent from './components/CouterFunctionalComponent'
import ProductsListWithData from './components/ProductsList'
import ProductsList from './components/ProductsList'

function App() {

  return (
    <>
      <div>
        <CounterFunctionalComponent message='Functional Component'/>
        <CounterClassComponent message='Class Component'/>
      </div>
      <div>
        {/* <ProductsList /> */}
        <ClientsListWithData />
        <ProductsListWithData />
      </div>
    </>
  )
}

export default App
