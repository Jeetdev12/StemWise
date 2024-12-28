import ItemList from "./itemList";

const RestaurantCategory = ({ data }) => {
  
  return (
    <div>
      {/*Accordion Header */}
      <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 flex justify-between">
        <span >
          {data.title} ({data.itemCards.length})
        </span>
        <span>🔽</span>
      </div>
      <ItemList items={data.itemCards} />

      {/* Accordion Body */}

    </div>
  );
};

export default RestaurantCategory;
