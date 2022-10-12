import { CabecalhoContainer, Logo } from "./Cabecalho.style"

const Cabecalho = () => {
    return (
        <CabecalhoContainer>
      <div>
        <Logo src='/imagens/myteacher.png' />
        <p>Encontre o professor perfeito!</p>
      </div>
    </CabecalhoContainer>
    )
}

export default Cabecalho