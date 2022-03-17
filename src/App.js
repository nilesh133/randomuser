import React, { useState, useEffect } from 'react'
import "./App.css"
import Logo from "./images/logo.png";
import Loading from './components/Loading';
import User from './components/User';
const App = () => {
  const [users, setUsers] = useState();
  const [filtered, setFiltered] = useState();
  const [searchVal, setSearchVal] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    async function getUsers() {
      const data = await fetch("https://randomuser.me/api/?results=15").then(res => res.json());
      console.log(data.results)
      setIsLoaded(true)
      setUsers(data.results)
      setFiltered(data.results);
    }
    getUsers();
  }, [])

  const filterResults = (e) => {
    const val = e.target.value;
    setSearchVal(val);

    if (val !== '') {
      const results = users.filter((user) => {
        return user.name.first.toLowerCase().includes(val.toLowerCase());
      });
      setFiltered(results);
    } else {
      setFiltered(users);
    }
  };

  return (
    <div className='container'>
      <div className='navbar'>
        <div className='navbar_logo'>
          <img src={Logo} alt="" />
        </div>
        <input type="text"
          value={searchVal}
          onChange={filterResults}
          placeholder="search user" />
      </div>
      {
        !isLoaded ? <Loading /> :
          <>
            {
              filtered?.length > 0 ?
                <div className='users'>
                  {
                    filtered.map((user) => (
                      <User user={user} />
                    ))
                  }
                </div>
                :
                <h1 className='no_data'>No Data Found</h1>
            }
          </>
      }

    </div >
  )
}

export default App