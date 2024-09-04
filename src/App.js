import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [rowCol, setRowCol] = useState({
    row: 0,
    col: 0,
  })

  const [arr, setArr] = useState([])

  const handleClick = () => {
    const myarr = new Array(rowCol?.row).fill(' ').map(()=> new Array(rowCol.col).fill(' '));
    setArr(myarr)
    console.log(myarr , '----------------------------')
   
   

  }
  return (
    <div className='d-flex justify-content-center align-items-center flex-column w-100 gap-5 pt-5 mb-5 pb-5'>
      <h1 >Dynamic State</h1>
      <div className='w-100 d-flex justify-content-center align-items-center gap-5 '>
      <input className='w-25 p-2 m-1 '  type='number' placeholder='enter no of rows' onChange={(e) => {
        setRowCol({ ...rowCol, row: Number(e.target.value) })
      }}></input>
      <input className='w-25 p-2 m-1 ' type='number' placeholder='enter no of col' onChange={(e) => {
        setRowCol({ ...rowCol, col: Number(e.target.value) })
      }}></input>

      </div>
      <button className='btn btn-primary ' onClick={handleClick}>Submit</button>
      
      {arr.map((f, i) => {
        return (
          <div className='w-75  p-2 d-flex justify-content-center align-items-center flex-wrap gap-2' style={{border:'1px solid blue'}}>
            {arr[i].map((f, j) => {
              return (
                <input type='text' className='w-15  inputText' placeholder={i + " " + j} onChange={(e)=>{
                  setArr((prevArr) => {
                    const updatedArr = [...prevArr];
                    updatedArr[i][j] = e.target.value; // Replace 'newValue' with the desired value
                    return updatedArr;
                  });

                }}></input>
              )
            })}


          </div>
        )
      })}
      <table className='w-75 d-flex justiyf-content-center align-items-center flex-column mt-5'>
      {arr.map((e, i) => {
        return (
          <tr className='w-100 d-flex justiyf-content-center align-items-center mt-1' style={{border:'1px solid black'}}>
            {arr[i].map((e, j) => {
              return (
                <td className='w-50 d-flex justiyf-content-center align-items-center p-2 ' style={{border:'1px solid black'}}> {arr[i][j]}</td>
              )
            })}


          </tr>
        )
      })}

      </table>
    </div>

  );
}

export default App;
