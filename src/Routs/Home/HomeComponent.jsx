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
      imageUrl: "https://i1.wp.com/hypebeast.com/image/2016/01/kanye-west-increases-alpha-industries-ma-1-bomber-sales-1.jpg",
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
      imageUrl: "https://t3.ftcdn.net/jpg/09/57/23/10/360_F_957231003_pZ573DsZ75uK7jSWx4l2nBgEdTDs70Dw.jpg",
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
