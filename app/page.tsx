//SERVER COMPONENTES -> COMPONENTE EXECUTADO DO LADO SO SERVIDOR -> ACESSAR RECURSOS COMO BANCO DE DADOS, VARIÁVEIS DE AMBIENTES (SENSÍVEIS)
// não consegue adicionar iteratividade exemplo onClick, ou UseState (variavel interativa) pois precisa de manipulação de DOM JS
// ao escrever "use client" o componente vira um Client Component

"use client";

import { Button } from "./_components/ui/button";

const Home = () => {  
  return <Button>Test</Button>
}

export default Home;
