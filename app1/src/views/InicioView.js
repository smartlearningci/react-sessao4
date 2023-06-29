import MainWrapper from "../componentes/gerais/MainWrapper";
import BarraLateral from "../componentes/gerais/BarraLateral";
import Titulo from "../componentes/gerais/Titulo";
import BlogPosts from "../componentes/gerais/BlogPosts";
import Footer from "../componentes/gerais/BlogPosts";

import { nivelContexto }  from "../contextos/contextNivel"
import { useContext } from 'react';


function InicioView() {
  
  const nivel = useContext(nivelContexto);
  console.log("Nível de contexto = " + nivel);
  return (
    <nivelContexto.Provider value={nivel + 1}>
    <BarraLateral/>
    <MainWrapper>
      <Titulo/>
      <BlogPosts/>
      <Footer/>
    </MainWrapper>
    </nivelContexto.Provider>
  );
}

export default InicioView;
