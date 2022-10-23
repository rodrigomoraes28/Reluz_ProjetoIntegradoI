import { useState ,useEffect} from "react";
 import axios from 'axios'

const ListUser = () => {
  const [users, setUsers] = useState([]);

  useEffect(
    () => {
      //console.log('Teste')
      axios.get('http://localhost:3001/users')
      .then(
      (response)=>{
       //console.log(response.data)
       setUsers(response.data)
      }
    )
    .catch(
      (error)=>{
        console.log(error)
      }
    )
  }
  ,
  []
  )
  const generateTableBody = () => {
    return users.map((element,index) => {
      return (
        <tr key={index}>
          <td>{element.name}</td>
          <td>{element.password}</td>
         </tr>
      );
    });
  };

  return (
    <div>
      <h1 style={{ marginTop: 20 }}>Listar Usuario</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <th className="text-white" >Nome</th>
            <th className="text-white" >Senha</th>
          </tr>
        </thead>
        <tbody className="text-white" >{generateTableBody()}</tbody>
      </table>
    </div>
  );
};

export default ListUser;
