import axios from "axios";
import { useEffect, useState } from "react";
import PortfolioCard from "./PortfolioCard";

export default function () {
  const [portfolios, setPortfolios] = useState([]);
  console.log(portfolios);

  useEffect(() => {
    axios
      .get("./portfolio.json")
      .then((res) => {
        setPortfolios(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <div name="portfolio">
        <div className="container mx-auto py-8">
          <div className="w-full min-h-screen flex justify-center items-center">
            <div className="lg:px-8">
              <h1 className="text-3xl font-bold border-b-4 border-black inline lg:ml-10">
                Portfoli
              </h1>
              <div className="mt-8 lg:px-8">
                <div className="w-full mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-8">
                  {portfolios?.map((portfolio) => (
                    <PortfolioCard
                      key={portfolio.id}
                      portfolio={portfolio}
                    ></PortfolioCard>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
