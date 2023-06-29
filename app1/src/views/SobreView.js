import MainWrapper from "../componentes/gerais/MainWrapper";
import BarraLateral from "../componentes/gerais/BarraLateral";
import SobreMim from "../componentes/gerais/SobreMim";

function SobreView() {
  return (
    <>
    <BarraLateral/>
    <MainWrapper>
      <SobreMim/>
    </MainWrapper>
    </>
  );
}

export default SobreView;
