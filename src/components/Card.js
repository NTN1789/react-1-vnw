function Card({nome, img}) {
    return(
        <figure className="card">
            <img src={img} alt={nome}/>
            <figcaption>{nome}</figcaption>
        </figure>
    )
}

export default Card