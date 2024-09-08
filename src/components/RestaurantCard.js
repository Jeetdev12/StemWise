import { CDN_URL } from "../utils/constant"

const RestaurantCard = (props) => {
  const { resData } = props;

  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo,
    sla,
  } = resData?.info;
  return (
    <div className=' m-2 p-4 w-[200px] bg-gray-300 rounded-lg hover:bg-gray-700' >
      <img className='rounded-md '
        alt='res-logo'
        src={CDN_URL + cloudinaryImageId} />
      <h3 className=" font-bold py-2 text-lg">{name}</h3>
      <h4>{cuisines.join(', ')}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo} </h4>
      <h4>{sla?.slaString}</h4>
    </div>
  )
};

// Higher order Component 

// input - RestaurantCard ==> RestaurentCardPromoted
export const withPromotedLevel = (RestaurantCard)=>{
  return (props)=>{
    return (
      <div>
        <label className="absolute bg-black text-white m-2 p-2 rounded-lg">Promoted</label>
        <RestaurantCard {...props} />
      </div>
    )
  }
}
export default RestaurantCard;