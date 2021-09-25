import React,{useState} from 'react'
import MOCK from "../icl/MOCK_DATA"


function Search() {
    const [data, setdata] = useState("")
    return (
        <>
          <div className="container">
              <div className="row">
                  <div className="col">
                  <div className="SearchInput my-4">
                      <input type="text" value={data} placeholder="Search Name" onChange={(e)=>{setdata(e.target.value)}}/>
                       </div>
                         <div className="d-flex flex-wrap">
                         {
                             MOCK.filter((item)=>{
                                 if(data===""){
                                     return item
                                 }else if (item.Name.toLowerCase().includes(data.toLowerCase())){
                                     return item
                                 }
                             }).map((item,ind)=>{
                                 return (
                                     <Card key={ind} name={item.Name} price={item.Price} img={item.image}/>
                                 )
                             })
                         }
                        </div>  
                  </div>
              </div>
          </div>  
        </>
    )
}


function Card(props) {
    return (
      <>
        <div className="card" style={{ width: "16rem" ,borderRadius:"10px"}}>
          <img src={props.img} ClassName="card-img-top" alt="card img" />
          <div ClassName="card-body">
            <div className="py-4 ps-2">
              <h5 ClassName="card-title">{props.name}</h5>
              <p ClassName="card-text">{props.price}</p>
            </div>
          </div>
        </div>
      </>
    );
}

export default Search
