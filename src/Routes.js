import {Switch, Route} from 'react-router-dom';
import Home from "./pages/Home";
import Login from "./pages/Login";
import CriarConta from "./pages/CriarConta";
import Lista from "./pages/Lista";

export default function Routes ({users, cadastrar}){

    const handleCadastrarUsuario = (user) => {
        cadastrar(user);

    }

    return(
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route  path="/login" component={Login}/>
            <Route path="/cadastrar">
                <CriarConta  cadastrar={handleCadastrarUsuario}></CriarConta>
            </Route>
            <Route path="/listar">
                <Lista users={users} />
            </Route>
        </Switch>
    );
}