
import './App.css'
import EmployeePage from './components/EmployeePage'
import HomePage from './components/HomePage'
import Header from './components/Header'
import SearchBarNew from './components/SearchBarNew'

function App() {
  

  return (
    <>
      <div className="App">
        <div className="HomePage">
          <Header title="Employee Directory" />
          <SearchBarNew/>
        </div>
        <div className="EmployeePage">
          <Header title="Employee"/>
          <EmployeePage/>
        </div>
      </div>
    </>
  )
}

export default App
