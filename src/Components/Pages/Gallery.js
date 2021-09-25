import React,{useState} from 'react'
import GallCard from '../icl/GallCard';
import Sdata from "../icl/Sdata"
import {Button} from "@material-ui/core"
import {ButtonGroup} from "@material-ui/core"


function Gallery() {
  const [data, setdata] = useState(Sdata)

 function filterItem(item) {
   const filter=Sdata.filter((totaldata)=>{
     return totaldata.type===item;
   })
   setdata(filter)
 }

    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="ms-5 my-5">
                <ButtonGroup
                  variant="outlined"
                  aria-label="outlined button group"
                >
                  <Button
                    onClick={() => {
                      filterItem("breakfast");
                    }}
                  >
                    Break Fast
                  </Button>
                  <Button
                    onClick={() => {
                      filterItem("lunch");
                    }}
                  >
                    Lunch
                  </Button>
                  <Button
                    onClick={() => {
                      filterItem("dinner");
                    }}
                  >
                    Dinner
                  </Button>
                  <Button
                    onClick={() => {
                      filterItem("pizza");
                    }}
                  >
                    Pizza
                  </Button>
                  <Button
                    onClick={() => {
                      filterItem("zinger");
                    }}>
                    Zinger
                  </Button>
                  <Button
                    onClick={() => {
                      filterItem("burger");
                    }}>
                    Burger
                  </Button>
                </ButtonGroup>
              </div>

              <div className="d-flex flex-wrap">
                {data.map((item, ind) => {
                  return (
                    <GallCard
                      key={ind}
                      img={item.image}
                      name={item.name}
                      type={item.type}
                      price={item.Price}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Gallery
