
import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';
import useRestaurantMenu from '../utils/useRestaurantMenu';
import RestaurantCategory from './RestaurantCategory';
const RestaurantMenu = () => {
  //  const [resInfo, setResInfo] = useState(null); // Initialize with null to handle loading state
    const { resId } = useParams();
    const resInfo = useRestaurantMenu(resId);

    /*useEffect(() => {
        fetchMenu();
    }, [resId]); // Include resId in dependency array to refetch when resId changes

    const fetchMenu = async () => {
        try {
            const response = await fetch( MENU_API + resId ); // Include resId in the URL
            const json = await response.json();
            console.log("API data", json);
            setResInfo(json.data); // Adjust based on API response structure
            console.log(json)
        } catch (error) {
            console.error("Error fetching menu data:", error);
            setResInfo(null); // Handle fetch errors by setting state to null or error
        }
    };*/

    if (resInfo === null) return <Shimmer />; // Show Shimmer component while loading

    // Use optional chaining and default values to avoid destructuring errors
    const {
        name = 'Restaurant Name',
        cuisines = [],
        costForTwoMessage = 'Cost information not available',
    } = resInfo?.cards?.[2]?.card?.card?.info || {}; 
    console.log(resInfo);
    const { itemCards = [] } = resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]?.card?.card || {};
    console.log(resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards)
    const categories = resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter((c) => c.card?.card?.["@type"] === 
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
     console.log( "Cat",categories);
    return (
        <div className="text-center">
            <h1 className='font-bold m-10 text-2xl'>{name}</h1>
            <p 
            className='font-bold '>{cuisines.join(" , ")} - {costForTwoMessage}
            </p>           
            {/**Categories accordian */}
            {categories.map((category)=>(
                <RestaurantCategory  
                data = {category.card?.card}
                />               
            ))}           
        </div>
    );
};

export default RestaurantMenu;
