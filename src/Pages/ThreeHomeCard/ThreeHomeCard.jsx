import { useEffect, useState } from "react";
import ThreeSingelCarde from "./ThreeSingelCarde";

const ThreeHomeCard = () => {
    const [cardes,setcardes] = useState([])
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch('http://localhost:5000/collegeCampus');
            const jsonData = await response.json();
            const ThreeData = jsonData.slice(0, 3);
            setcardes(ThreeData);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
        fetchData();
      }, []);
    return (
        <div className="grid lg:grid-cols-3  md:grid-cols-2 my-10">
            {
                cardes.map(singelCardData => <ThreeSingelCarde key={singelCardData?._id}
                singelCardData={singelCardData}></ThreeSingelCarde>)
            }
            
        </div>
    );
};

export default ThreeHomeCard;