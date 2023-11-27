import React, {useState } from 'react' 
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import AddOrders from './AddOrders'
import Tables from './ViewOrders'
import './App.css'

function App() {
  const [selectedButton, setSelectedButton] = useState(null);

  const handleButtonClick = (buttonNumber) => {
    setSelectedButton(buttonNumber);
  };
  return (

    <Router>
    <div>

      {/* Pull these two from the backend*/}
      <h2 style={{textAlign:'center'}}>***PULL SERVER NAME***</h2>
      <h2 style={{textAlign:'center'}}>***PULL RESTAURANT NAME***</h2>

      {/*Horizontal Rule*/}
      <hr />


      <h1 style={{textAlign:'center'}}>Assigned Tables</h1>


      <table className="tables-grid">
        {/*Table Body*/}
        <tbody>
          {/*Table Row*/}
          <tr>
          {/*Table Data*/}
          <td className={`table-table ${selectedButton === 1 ? 'selected' : ''}`}>
              <button onClick={() => handleButtonClick(1)}>Table 1</button>
            </td>

            <td className={`table-table ${selectedButton === 2 ? 'selected' : ''}`}>
              <button onClick={() => handleButtonClick(2)}>Table 2</button>
            </td>
          </tr>
          
          {/*Next table row*/}
          <tr>
            <td className={`table-table ${selectedButton === 3 ? 'selected' : ''}`}>
              <button onClick={() => handleButtonClick(3)}>Table 3</button>
            </td>
            <td className={`table-table ${selectedButton === 4 ? 'selected' : ''}`}>
              <button onClick={() => handleButtonClick(4)}>Table 4</button>
            </td>
          </tr>
        </tbody>
      </table>

        {/*Link based on the selected button*/}
        <h1 style ={{textAlign:'center'}}><Link to={`/AddOrders/${selectedButton}`}>
          <button disabled={selectedButton === null}>{selectedButton !== null ? `Add Order for Table ${selectedButton}` : 'Add order'}</button>
        </Link></h1>


        <h3 style ={{textAlign:'center'}}><Link to='ViewOrders'><button>View Orders</button></Link></h3>

        {/*Routing table*/}
        <Routes>
          <Route path='/AddOrders/:buttonNumber' element={<AddOrders/>}/>
          <Route path='/ViewOrders' element ={<Tables/>}/>

      </Routes>

    </div>
    </Router>
  )
}

export default App

      /* {(typeof data.members === 'undefined')? (
        <p>Loading...</p>
      ) : (
        data.members.map((member,i) => (
          <h1 style={{ textAlign:'center' }} key={i}>{member}</h1>
        ))
      )}*/

        // const [data, setData] = useState([{}])

  // useEffect(() => {
  //   fetch("/members").then(
  //     res => res.json()
  //   ).then(
  //     data => {
  //       setData(data)
  //       console.log(data)
  //     }
  //   )
  // }, [])