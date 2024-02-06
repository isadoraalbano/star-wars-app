// Starships.js
import React, { useEffect, useState } from "react";
import axios from 'axios';
import Paginate from "../../components/Paginate";

function Starships() {
  const baseUrl = import.meta.env.VITE_BASE_URL;

  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 10;
  let timeoutId = null;

  const fetchData = async () => {
    try {
      const response = await axios.get(`${baseUrl}/starships`);
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
      <h2>Starships</h2>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Model</th>
            <th>Length</th>
            <th>Starship Class</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((item, index) => (
            <tr key={index}>
              <td>{indexOfFirstItem + index + 1}</td>
              <td>{item.name}</td>
              <td>{item.model}</td>
              <td>{item.length}</td>
              <td>{item.starship_class}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Paginate
          pageCount={Math.ceil(data.length / itemsPerPage)}
          onPageChange={handlePageChange}
          currentPage={currentPage}
        />
    </div>
  );
}

export default Starships;
