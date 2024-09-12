const Cards = ({ producto }) => {
  return (
    <>
      {/* Tarjeta */}

      <div
        className="card d-inline-flex gap-1 me-4 "
        style={{
          width: "260px",
          marginTop: "10px",
          boxShadow: "0 15px 15px rgba(0, 0, 0, 0.372)",
        }}
      >
        <img
          src={`../../img/${producto.picture}`}
          className="card-img-top img-thumbnail"
          alt="..."
          style={{ height: "250px" }}
        />
        <div className="card-body">
          <h5 className="card-title">{producto.name}</h5>
          <ul className="list-group">
            <li className="list-group-item">{`Descripción: ${producto.description}`}</li>
            <li className="list-group-item">{`Precio: $${producto.price}`}</li>
          </ul>

          <a href="#" className="btn btn-dark d-grid gap-2 mt-2">
            Agregar al carrito
          </a>
        </div>
      </div>
    </>
  );
};

export default Cards;
