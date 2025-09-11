import Directory from "../../Components/Directory/Directory.component";
import { Outlet } from "react-router-dom";

const Home = () => {
  const categories = [
    {
      id: 1,
      title: "BAGS",
      imageUrl: "https://voguesg.s3.ap-southeast-1.amazonaws.com/wp-content/uploads/2023/04/24113826/zendaya-lv-social-.jpg",
    },
    {
      id: 2,
      title: "JACKETS",
      imageUrl: "https://cdn.thewirecutter.com/wp-content/media/2024/02/downjackets-2048px-9071-2x1-1.jpg?width=1024&quality=75&crop=2:1&auto=webp",
    },
    {
      id: 3,
      title: "RUNNERS",
      imageUrl: "https://mensfitness.co.uk/wp-content/uploads/sites/2/2025/02/Best-running-shoes.jpg",
    },
    {
      id: 4,
      title: "WOMENS",
      imageUrl: "https://media.assettype.com/freepressjournal/2023-10/e8edf02c-e82f-40f1-ab37-c097d0517d9c/cats.jpg?width=1200",
    },
    {
      id: 5,
      title: "MENS",
      imageUrl: "https://mensflair.com/wp-content/uploads/2022/08/best-leather-jackets-1536x864.jpg",
    },
  ];

  return (
    <div>
      <Outlet />
      <Directory categories={categories} />
    </div>
  );
};

export default Home;
