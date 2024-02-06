import './App.css'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Outlet />
    </div>
  )
}
 export default App









// import React, { useState, useEffect } from 'react'
// import './App.css'
// import axios from 'axios'

// function App() {

//   const [data, setData] = useState([]);

//   const fetchData = async () => {
//     try {
//       const response = await axios.get("http://192.168.0.102:3000/characters");
//       console.log(response)
//       setData(response.data);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   };

//   // Call fetchData on component mount
//   useEffect(() => {
//     fetchData();
//   }, []);

//   return (
//     <div>
//       <table>
//   <thead>
//     <tr>
//       <th>-</th>
//       <th>Name</th>
//     </tr>
//   </thead>
//   <tbody>
//     {data.map((item, index) => {
//       return (
//         <tr key={index}>
//           <td>{ index+1 }</td>
//           <td>{ item.name }</td>
//         </tr>
//       );
//     })}
//   </tbody>
// </table>
//     </div>
//   );
// }
// export default App;








// import React, { useState, useEffect } from 'react'
// import './App.css'
// import axios from 'axios'

// function App() {

//   const [data, setData] = useState([]);

//   const fetchData = async () => {
//     try {
//       const response = await axios.get("http://192.168.0.102:3000/characters");
//       console.log(response)
//       setData(response.data);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   };

//   // Call fetchData on component mount
//   useEffect(() => {
//     fetchData();
//   }, []);

//   return (
//     <div>
//       <h2>Characters:</h2>
//       <ul>
//         {data.map((character) => (
//           <li key={character.name}>{character.name}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }
// export default App;
