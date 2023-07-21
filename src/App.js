import React from "react";
import { useState, useEffect } from "react";
import Navbar from './components/Navbar';
import Filter from './components/Filter';
import Cards from './components/Cards';
import { apiUrl, filterData } from './data';
import Spinner from "./components/Spinner";
import { toast } from "react-toastify";

const App = () => {

  const [courses, setcourses] = useState([]);
  const [loading, setloader] = useState(true);
  const [category,setcategory]=useState(filterData[0].title);


  async function fetchData() {
    setloader(true);
    try {

      let response = await fetch(apiUrl);
      let output = await response.json();
      setcourses(output.data);
    }
    catch (error) {
      toast.error('something wrong with the network');
    }
    setloader(false);
  }


  useEffect(() => {
    fetchData();
  }, [])

  return (<div className="min-h-screen flex flex-col bg-bgDark2">
    <div>
      <Navbar />
    </div>
    <div className="bg-bgDark2">
      <div>

        <Filter filterData={filterData} category={category} setcategory={setcategory}/>
      </div>
      <div className="w-11/12 max-w-[1200px] 
        mx-auto flex flex-wrap justify-center items-center min-h-[50vh]">
        {
          loading ? (<Spinner />) : (<Cards courses={courses} category={category} />)
        }
      </div>
    </div>
  </div>);
};

export default App;
