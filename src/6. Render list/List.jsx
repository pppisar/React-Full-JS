import PropTypes from "prop-types";

function List(props) {
  //   const fruits = [
  //     { id: 0, name: "apple", calories: 95 },
  //     { id: 1, name: "orange", calories: 45 },
  //     { id: 2, name: "banana", calories: 105 },
  //     { id: 3, name: "coconat", calories: 159 },
  //     { id: 4, name: "pineapple", calories: 37 },
  //   ];

  //   const lowCalFruits = fruits.filter((fruit) => fruit.calories < 100);

  //   const highCalFruits = fruits.filter((fruit) => fruit.calories >= 100);

  //   fruits.sort((a, b) => a.name.localeCompare(b.name)); // ALPHABETICAL ORDER
  //   fruits.sort((a, b) => b.name.localeCompare(a.name)); // REVERSE ALPHABETICAL ORDER
  //   fruits.sort((a, b) => a.calories - b.calories); // Numerical ORDER
  //   fruits.sort((a, b) => b.calories - a.calories); // Reverse Numerical ORDER

  const category = props.category;
  const itemList = props.items;

  const listItems = itemList.map((item) => (
    <li key={item.id}>{`${item.name} has ${item.calories} calories`}</li>
  ));

  return (
    <>
      <h2>{category} List:</h2>
      <ul>{listItems}</ul>
    </>
  );
}

List.propTypes = {
  category: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      calories: PropTypes.number.isRequired,
    })
  ),
};

List.defaultProps = {
  category: "Category",
  items: [],
};

export default List;
