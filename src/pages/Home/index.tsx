import { BotaoPadrao } from "../../components/BotaoPadrao"
import { Container } from "../../components/Container"

export function Home() {
    return(
        <>
        <Container>
        <h1>Ola mundo direto da home</h1>
        </Container>
        <Container>
            <BotaoPadrao> Hello</BotaoPadrao>
        </Container>
        </>
    )
}