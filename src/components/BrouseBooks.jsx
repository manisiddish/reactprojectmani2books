import "./BrouseBooks.css";
import { useState } from "react";
import Card from "./card";
import { useSelector } from "react-redux";
function BrouseBooks(){
          const books=useSelector((state)=>state.books)
         const [Change,setChange]=useState("");
         
         const Result=books.filter((book)=>book.title.toLowerCase().includes(Change.toLowerCase()))

    return( 
       <div>
         
            <div className="m">
                <input onChange={(e) => setChange(e.target.value)} className="input" type="text" placeholder="enter"/>
                <button className="button1">Search</button>
            </div>
             <div className="contain">
                {
                  Result.length> 0 ? Result.map((book)=><Card key={book.id} data={book} />) : <p>No books are found</p> 
                }
             </div>
       </div>

    )
}
export default BrouseBooks;