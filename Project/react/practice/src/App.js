import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { reactLocalStorage } from "reactjs-localstorage";

function App() {
  const [count, setCount] = useState(1);
  const [userData, setUserData] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [edtBtn, setEdtBtn] = useState(false);
  const [editBtnId, setEditBtnId] = useState(null);
  const [inputValue,setInputValue]=useState('')
  useEffect(() => {
    fetchFnc();
  }, [count]);

  const handleSearch = () => {
    // e.preventDefult()
    // console.log("sdfghjk");
  
      const filteredResults = userData.filter((item) =>
      item.first_name.toLowerCase().includes(searchValue.toLowerCase())
    );

        // setSearchResults(filteredResults);
        setUserData(filteredResults);
        console.log("filteredResults", filteredResults);

  };

  useEffect(()=>{
    let timer=setTimeout(() => {
      handleSearch();
    }, 1000);

    return ()=>clearTimeout(timer)
  },[searchValue])

  useEffect(()=>{
  setTimeout(() => {
      console.log(reactLocalStorage.getObject('data').data,'React');
      setUserData(reactLocalStorage.getObject('data').data)
     }, 800);

  },[])

  const fetchFnc = async () => {
    axios
      .get(`https://reqres.in/api/users?page=${count}`)
      .then((res) => {
        if (res) {
          console.log(res.data);
          // setUserData(res?.data?.data);

          reactLocalStorage.setObject("data", res.data)
          // reactLocalStorage.set('data',res.data.data)
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };



  const saveData=(id)=>{
      setUserData((privData)=>
        privData.map((item)=>
        item.id===id?{...item,email:inputValue}:item
        )
      )
  }
  return (
    <div className="App">
      <div className="container-md">
        <h2 className="navbar-light bg-light mb-0 p-4">Fetch Data Grom Api</h2>

        {/* search */}
        <nav className="navbar-light bg-light pb-4">
          <div className=" container ">
            <form className="d-flex">
              <input

                class="form-control me-2 "
                type="search"
                value={searchValue}
                placeholder="Search"
                aria-label="Search"
                onChange={(e) => {
                  setSearchValue(e.target.value);
                  setTimeout(() => {
                    handleSearch();
                  }, 5000);
                }}                
              />
              {/* <button
                className="btn btn-outline-success"
                onClick={() => {
                  handleSearch();
                }}
              >
                Search
              </button> */}
            </form>
          </div>
        </nav>

        <table className="table">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Email</th>
              <th scope="col">Frist Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Profile Image</th>
            </tr>
          </thead>
          <tbody>
            {userData?.map((data, index) => {
              return (
                <tr key={index}>
                  <th scope="row">{data.id}</th>
                  <td className="td-email">
                    {data.email}
                    {
                      edtBtn?<a
                      onClick={() => {
                        setEditBtnId(data.id);
                        setEdtBtn(!edtBtn)
                        setInputValue(data.email)
                      }}
                      class="btn btn-primary td-button"
                      href="#"
                      role="button"
                    >
                      Edit
                    </a>:editBtnId===data.id?<a
                      onClick={() => {
                        setEdtBtn(!edtBtn)
                        setEditBtnId(null)
                        saveData(data.id)
                      }}
                      class="btn btn-primary td-button"
                      role="button"
                    >
                      Save
                    </a>:<a
                      onClick={() => {
                        setEditBtnId(data.id);
                        setInputValue(data.email)
                      }}
                      class="btn btn-primary td-button"
                      href="#"
                      role="button"
                    >
                      Edit
                    </a>
                    }
                    
                    {editBtnId === data.id  ? (
                      <div class="mb-3">
                        <input
                          type="text"
                          class="form-control"
                          name=""
                          id=""
                          value={inputValue}
                          placeholder="Enter new email "
                          className="td-input"
                          onChange={(e)=>{setInputValue(e.target.value)}}
                        />
                      </div>

                    ) : null}
                  </td>
                  <td>{data.first_name}</td>
                  <td>{data.last_name}</td>
                  <td>
                    <img
                      style={{ width: "100px", height: "auto" }}
                      src={data.avatar}
                      className="img-fluid rounded-top"
                      alt="img"
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <button
          name=""
          id=""
          className="btn btn-primary mx-4"
          role="button"
          disabled={count === 1 ? true : false}
          onClick={() => {
            setCount(count - 1);
          }}
        >
          PRV
        </button>
        <button
          name=""
          id=""
          className="btn btn-primary"
          role="button"
          disabled={count === 2 ? true : false}
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default App;
