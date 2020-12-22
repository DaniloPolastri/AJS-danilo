import Header from "../componentes/Header";

export default function Lista({users}){
    return(
        <>
            <Header/>
            <div className="text-center mt-5">
                {users.map(user => {
                    return (
                        <h1 className="display-1">{user.email}</h1>
                    )
                })}

            </div>
        </>
    );
}