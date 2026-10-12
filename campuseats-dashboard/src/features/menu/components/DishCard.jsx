const DishCard = ({ dish }) => {
    return (
        <div className="dish-card">
            <h3>{dish.name}</h3>
            <p>Rs. {dish.price}</p>
            <small>{dish.category}</small>
        </div>
    );
}

export default DishCard;