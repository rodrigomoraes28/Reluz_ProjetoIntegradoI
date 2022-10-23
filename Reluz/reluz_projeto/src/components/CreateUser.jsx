import { useState } from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";

const CreateUser = () => {
  const [name, setName] = useState("");
  const [password, setpassword] = useState("");
   const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault()

    const newUser = {name,password}
    axios.post('http://localhost:3001/users', newUser)
    .then(
      (response) => {
        console.log(response.data.id)
        navigate('/listUser')
      }
    )
    .catch(error=>console.log(error))
  };

  return (
    <div style={{ marginTop: 20 }}>
      <h2>Criar Usuario</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Nome: </label>
          <input
            type="text"
            className="form-control"
            placeholder="Digite seu nome"
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
        </div>
        <div className="form-group">
          <label>Senha: </label>
          <input
            type="number"
            className="form-control"
            placeholder="Digite sua senha"
            onChange={(event) => {
              setpassword(event.target.value);
            }}
          />
        </div>
        <div className="form-group">
          <label>Confirmar Senha: </label>
          <input
            type="number"
            step="any"
            className="form-control"
            placeholder="Digite sua senha novamente"
            // onChange={(event) => {
            //   setIra(event.target.value);
            // }}
          />
        </div>
        <div className="form-group" style={{ marginTop: 15 }}>
          <input
            type="submit"
            value="Criar Usuario"
            className="btn btn-info"
          />
        </div>
      </form>
    </div>
  );
};

export default CreateUser;
