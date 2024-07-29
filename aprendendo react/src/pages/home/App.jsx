import { useEffect, useState, useRef } from "react"
import "./app.css"
import Trash from "../../assets/Trash.svg"
import api from "../../services/api"

function Home() {
  const [users, setUsers] = useState([])

  const imputName = useRef()
  const imputage = useRef()
  const imputemail = useRef()

  async function getUsers() {
    const usersFromApi = await api.get("/usuarios")

    setUsers(usersFromApi.data)
    console.log(users)
  }
  async function createUsers() {
    const usersFromApi = await api.get("/usuarios")
    console.log(inputname)

  }

  useEffect(() => {
    getUsers()

  }, [])

  return (

   

    <div className="container">
      <form action="">
        <h1>Cadastro de Usuarios</h1>
        <input name="nome" type="text" placeholder="Nome" ref={inputName} />
        <input name="idade" type="number" placeholder="Idade" ref={inputage} />
        <input name="email" type="email" placeholder="Email" ref={inputemail} />
        <button onClick={createUsers}>Adicionar</button>
      </form>

      {users.map((user) => (
        <div className="users" key={user.id}>
          <div>
            <p>Nome: {user.name}</p>
            <p>Idade: {user.idade}</p>
            <p>Email: {user.email}</p>
          </div>
          <button>
            <img src={Trash} alt="" />
          </button>
        </div>



      ))}

    </div>

  )
}

export default Home
