import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { GET_ALL_USERS } from './query/user';
import { CREATE_USER } from './mutations/user';

function App() {
  const {data, loading, error} = useQuery(GET_ALL_USERS) 
  const [newUser] = useMutation(CREATE_USER)
  const [users, setUsers] = useState([])
  const [username, setUsername] = useState([])
  const [age, setAge] = useState(0)
  useEffect(()=>{
    if(!loading){
      setUsers(data.getAllUsers)
    }
  },[data])
  users.map(user => {
    console.log(user.id)
  })
  
  const addUser = () => {

    newUser({
      variables: {
        input:{
          username, age
        }
      }
    }).then(({data}) =>  console.log(data)).catch((e) => console.log(e))
    setUsername('')
    setAge(0)
  }
  if(loading){
    return <h1>LOADING...</h1>
  }
  return (
    <div className="App">
        <form>
            <input type='text' value={username} onChange={e => setUsername(e.target.value)}></input>
            <input type='number' value={age} onChange={e => setAge(e.target.value)}></input>
            <div>
              <button onClick={() => addUser()}>Создать</button>
              <button>Получить</button>
            </div>
        </form>
        <div>
          {users.map((user) => 
            <div> 
              {user.id}. {user.username} {user.age}
            </div>
          )}
        </div>
    </div>
  );
}

export default App;
