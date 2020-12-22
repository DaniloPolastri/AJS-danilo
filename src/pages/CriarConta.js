import Header from "../componentes/Header";
import '../styles/LoginCSS.css'
import {useState} from "react";

export default function CriarConta({cadastrar}){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    function handleSubmit (e) {
        e.preventDefault();
        const user = {name, email}
        cadastrar(user);
        console.log("handleSubmit da classe CriarConta")
    }

    return(
        <>
            <Header/>
            <div className="container">
                <div className="row h-100 justify-content-center align-items-center">
                    <div className="card mt-5" id="loginCard">
                        <div className="card-body">
                            <h2 className="card-title text-center">Criar Conta</h2>
                            <form>
                                <div className="form-group mb-2">
                                    <label htmlFor="nome">Nome:</label>
                                    <input id="nome" className="form-control" onChange={(event)=>{setName(event.target.value)}} type="text" placeholder="Digite o Nome"/>
                                </div>
                                <div className="form-group mb-2">
                                    <label htmlFor="email">Email:</label>
                                    <input id="email" className="form-control" onChange={(event)=>{setEmail(event.target.value)}} type="email" placeholder="Digite o Email"/>
                                </div>
                                <div className="form-group mb-2">
                                    <label htmlFor="cemail">Confirmar Email:</label>
                                    <input id="cemail" className="form-control" placeholder="Digite o Email"/>
                                </div>
                                <div className="form-group mb-2">
                                    <label htmlFor="senha">Senha:</label>
                                    <input id="senha" type="password" className="form-control" placeholder="Digite a Senha"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="csenha">Confirmar a Senha:</label>
                                    <input id="csenha" type="password" className="form-control" placeholder="Digite a Senha"/>
                                </div>
                                <div className="row mt-2">
                                    <div className="col-sm-12 ">
                                        <button onClick={handleSubmit} className="btn btn-primary">Criar</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}