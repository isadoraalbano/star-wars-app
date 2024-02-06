import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Paginate from '../../components/Paginate.jsx';

function Characters() {
  const baseUrl = import.meta.env.VITE_BASE_URL;

  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 10;
  let timeoutId= null;

  const fetchData = async () => {
    try {
      const response = await axios.get(`${baseUrl}/characters`);
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  useEffect(() => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(() => {
      fetchData();
    }, 500);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []); 

 

  const indexOfLastItem = (currentPage + 1) * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div>
      <h2>Characters</h2>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Height</th>
            <th>Hair Color</th>
            <th>Skin Color</th>
            <th>Gender</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((item, index) => (
            <tr key={index}>
              <td>{indexOfFirstItem + index + 1}</td>
              <td>{item.name}</td>
              <td>{item.height}</td>
              <td>{item.hair_color}</td>
              <td>{item.skin_color}</td>
              <td>{item.gender}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Paginate pageCount={Math.ceil(data.length / itemsPerPage)} onPageChange={handlePageChange} currentPage={currentPage} />
    </div>
  );
}

export default Characters;
