import BarraLateral from "../componentes/gerais/BarraLateral";
import MainWrapper from "../componentes/gerais/MainWrapper";
import PostDetails from "../componentes/gerais/PostDetails";

function BlogPostDetails() {
    return (
        <div>
            <BarraLateral />
            <MainWrapper>
                <PostDetails/>
            </MainWrapper>
        </div>
    );
}
export default BlogPostDetails;