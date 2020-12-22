import Header from "../componentes/Header";

export default function Lista({users}){
    return(
        <>
            <Header/>
            <table className="table text-center">
                {users.map(user => {
                    return (
                        <>
                            <thead>
                            <tr>
                                <th scope="col">Nome</th>
                                <th scope="col">Email</th>
                            </tr>
                            </thead>
                            <tr>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                            </tr>
                        </>
                    )
                })}
            </table>
        </>
    );
}