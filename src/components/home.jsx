import "./home.css"
import Card from "./card";
import { useSelector } from "react-redux";
function Home(){
  const books=useSelector((state)=>state.books)
    return (
        <>
          <div className="main1">
             <h1 className="heading">Welcome , here you can read books and improve your Skills</h1>
          </div>
          <div className="main2">
            {books.map((each)=><Card data={each} key={each.id} />)}
          </div>
          </>
    )
}
export default Home;