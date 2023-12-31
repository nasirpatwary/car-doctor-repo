
const Browse = ({browse}) => {
    const {img,title,price} = browse
    return (
        <div className="card w-96 h-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={img} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{title} </h2>
          <p>Price $ {price} </p>
        </div>
      </div>
    );
};

export default Browse;