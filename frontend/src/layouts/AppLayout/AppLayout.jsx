import { Link, Outlet } from 'react-router'

export default function AppLayout(){
    return(
        <div className="flex mx-auto items-center flex-col">
            <h1>Seja bem vindo usuário</h1>
            {/* Espaço reservado para redenrizar as páginas */}
            <main><Outlet /></main> 
            <footer>2026....copy</footer>
        </div>
    )
}