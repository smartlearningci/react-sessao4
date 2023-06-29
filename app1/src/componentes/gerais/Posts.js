import { Link } from "react-router-dom";

import { useContext } from 'react';
import { nivelContexto } from "../../contextos/contextNivel";

function Post(props){

    var imagem = `assets/images/blog/${props.imagem}`;
    var urlBlog = `/blog/${props.id}/${props.seoTitulo}`;
    const nivel = useContext(nivelContexto);
    return (

		<div className="item mb-5">
			<div className="row g-3 g-xl-0">
			<h2>Contexto: {nivel}</h2>
				<div className="col-2 col-xl-3">
					<img className="img-fluid post-thumb " src={imagem} alt="image" />
				</div>
				<div className="col">
					<h3 className="title mb-1"><Link className="text-link" to={urlBlog}>{props.titulo}</Link></h3>
					<div className="meta mb-1"><span className="date">{props.dataPublicacao}</span><span className="time">{props.tempoLeitura}</span><span className="comment"><a className="text-link" href="#">{props.comentarios}</a></span></div>
					<div className="intro">{props.descricao}</div>
					<a className="text-link" href={urlBlog}>Read more &rarr;</a>
				</div>
			</div>
		</div>
    );
}

export default Post;