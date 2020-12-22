import Header from "../componentes/Header";

export default function Home(props){
    return(
      <>
          <Header/>
          <div className="text-center mt-5">
              <h1 className="display-1">IGTI</h1>
              <h6 className="display-4">MBA Desenvolvimento Front-End <strong>Atividade Prévia</strong></h6>
          </div>
      </>
    );
}