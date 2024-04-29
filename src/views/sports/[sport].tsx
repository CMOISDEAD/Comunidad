import { useParams } from "react-router-dom";
import { Navigation } from "../../components/navbar/Navigation";

export const Sport = () => {
  const { sport } = useParams();

  return (
    <>
      <Navigation />
      <div className="my-5 container mx-auto mih-h-screen">
        <h1 className="text-4xl font-bold text-center">{sport}</h1>
      </div>
    </>
  );
};
