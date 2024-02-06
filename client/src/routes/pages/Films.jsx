// Films.js
import React, { useEffect, useState } from "react";
import axios from 'axios';
import Paginate from "../../components/Paginate";

function Films() {
  const baseUrl = import.meta.env.VITE_BASE_URL;

  const [data, setData] = useState([]);
  const [title, setTitle] = useState('');
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 10;
  let timeoutId = null;
  

  const fetchData = async () => {
    try {
      const response = await axios.get(`${baseUrl}/films`);
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleSearch = async () => {
    try {
      const getResponse = await axios.get(`${baseUrl}/films?title=${title}`);
      if(title){
      await axios.post(`${baseUrl}/films`, {title})
      }
      setData(getResponse.data);
    } catch (error) {
      console.error("Error handling search:", error);
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
      <h2>Films</h2>
      <div className="search">
        <input
          type="text"
          placeholder="Enter the name of the film"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Title</th>
            <th>Release</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.length === 0 ? (
             <tr>
             <td colSpan="3">No results</td>
           </tr>
          ) : (
            currentItems.map((item, index) => (
              <tr key={index}>
                <td>{indexOfFirstItem + index + 1}</td>
                <td>{item.title}</td>
                <td>{item.release_date}</td>
              </tr>
            ))
          )
          }
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

export default Films;
