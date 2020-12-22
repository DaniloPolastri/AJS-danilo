import React, {useState} from 'react';
import Routes from "./Routes";


function App() {
  const [users, setUsers] = useState([])

  function handleCadastrar (user) {
    const newUsers = [...users, user];

    setUsers(newUsers);

    console.log('Cadastrou');
  }

  return (
    <Routes users={users} cadastrar={handleCadastrar}/>
  );
}

export default App;
