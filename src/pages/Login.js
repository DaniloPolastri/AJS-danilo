import Header from "../componentes/Header";
import '../styles/LoginCSS.css'

export default function Login(){

    return(
        <>
            <Header/>
            <div className="container">
               <div className="row h-100 justify-content-center align-items-center">
                   <div className="card mt-5" id="loginCard">
                        <div className="card-body">
                            <h2 className="card-title text-center">Login</h2>
                            <form>
                                <div className="form-group">
                                    <label htmlFor="email">Email:</label>
                                    <input id="email" className="form-control" placeholder="Digite o Email"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="senha">Senha:</label>
                                    <input id="senha" className="form-control" placeholder="Digite a Senha"/>
                                </div>
                                <div className="row mt-2">
                                    <div className="col-sm-12 ">
                                        <button  className="btn btn-primary">Logar</button>
                                        <button  className="btn btn-primary ml-3">Criar Conta</button>
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