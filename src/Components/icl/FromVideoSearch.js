import React,{useState} from 'react'
import MOCK from "./MOCK_DATA"

function Search() {
    const [Data, setData] = useState("")
    return (
        <div>
            <input type="text" value={Data} onChange={(e)=>{setData(e.target.value)}}/>
            {MOCK.filter((item)=> {
               if (Data === "") {
                   return item
                   } else if (item.Name.toLowerCase().includes(Data.toLowerCase())){
                    return item
                  }
            }).map((item,ind)=>{
                return(
                    <p key={ind}>
                        {item.Name}
                    </p>
                )
            })}
        </div>
    )
}

export default Search
