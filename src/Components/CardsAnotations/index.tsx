import { Container, Content } from "./styles";

export function CardsAnotations() {
    return (
        <Container>
           <Content>
                <section>
                    <div>
                        <h3>Fobia</h3> 
                        <input type="checkbox" name="abordation"></input>
                        <label htmlFor="abordation">Episódio abordado?</label>                 
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                        <button type="button">Editar</button>
                        <button type="button">Excluir</button>
                    </div>
                    <div>
                        <h3>Ansiedade</h3>
                        <input type="checkbox" name="abordation"></input>
                        <label htmlFor="abordation">Episódio abordado?</label>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                        <button type="button">Editar</button>
                        <button type="button">Excluir</button>
                    </div>
                    <div>
                        <h3>Depressão</h3>
                        <input type="checkbox" name="abordation"></input>
                        <label htmlFor="abordation">Episódio abordado?</label>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                        <button type="button">Editar</button>
                        <button type="button">Excluir</button>
                    </div>
                </section>
           </Content>           
        </Container>
    );

}