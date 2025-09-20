import "./Shop.scss";
import { useNavigate } from "react-router-dom";

const Trends = () => {
  const categories = [
    {
      id: 1,
      title: "HATS",
      imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
    },
    {
      id: 2,
      title: "JACKETS",
      imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
    },
    {
      id: 3,
      title: "SNEAKERS",
      imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
    },
    {
      id: 4,
      title: "SWEATERS",
      imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
    },
    {
      id: 5,
      title: "MENS",
      imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
    },
    {
      id: 6,
      title: "COATS",
      imageUrl:
        "https://www.politix.com.au/on/demandware.static/-/Library-Sites-PolitixSharedLibrary/default/dwa3a520d7/images/Blog/2022/05%20-%20May/ultimate-guide-to-winter-jackets/PLTX245_Winter_Jackets_Blog_Header_Desktop.jpg",
    },
    {
      id: 7,
      title: "WOMENS",
      imageUrl:
        "https://fabriclore.com/cdn/shop/articles/Women_s_jackets_and_types.png?v=1746596114&width=1000",
    },
    {
      id: 8,
      title: "WATCHES",
      imageUrl:
        "https://shop.timexindia.com/cdn/shop/articles/2.png?v=1718351785",
    },
  ];

  const navigate = useNavigate();

  return (
    <div className="directory-container">
      {categories.map((category, id) => (
        // const {imageUrl, title} = category;
        <div className="category-container" key={category.id}>
          <div
            className="background-image"
            style={{ backgroundImage: `url(${category.imageUrl})` }}
          ></div>
          <div
            className="category-body-container"
            onClick={() => navigate("/shop")}
          >
            <h2>{category.title}</h2>
            <p>Shop Now</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Trends;
