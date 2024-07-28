import "./app.css"
import Trash from "../../assets/Trash.svg"

function Home() {

  const users = [
    {
      id: 1,
      name: "Ruan",
      idade: 18,
      email: "ruan@gmail.com"
    }, {
      id: 2,
      name: "Carla",
      idade: 29,
      email: "carla@gmail.com"

    }]

  return (

    <div className="container">
      <form action="">
        <h1>Cadastro de Usuarios</h1>
        <input name="nome" type="text" placeholder="Nome"/>
        <input name="idade" type="number" placeholder="Idade"/>
        <input name="email" type="email" placeholder="Email"/>
        <button>Adicionar</button>
      </form>

      {users.map((user) => (       
        <div className="users"  key={user.id}>
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
