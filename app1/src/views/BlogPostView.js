import BarraLateral from "../componentes/gerais/BarraLateral";
import MainWrapper from "../componentes/gerais/MainWrapper";
import Footer from "../componentes/gerais/Footer";
import PostDemo from "../componentes/gerais/PostDemo";

function BlogPostView() {
    return (
        <div>
            <BarraLateral />
            <MainWrapper>
                <PostDemo />
                <Footer />
            </MainWrapper>
        </div>
    );
}
export default BlogPostView;