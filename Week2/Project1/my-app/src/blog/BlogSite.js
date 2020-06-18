import React from "react"
import BlogSetup from "./BlogSetUp"
import Header from "./Header"
import Footer from "./Footer"

const List = () => {
let BlogInfo = [

    {

        title: "Man must explore, and this is exploration at its greatest",
        subTitle: "Problems look mighty small from 150 miles up",
        author: "Start Bootstrap",
        date: "September 24, 2019"
    },{

        title: "I believe every human has a finite number of heartbeats. I don't intend to waste any of mine.",
        subTitle: "",
        author: "Start Bootstrap",
        date: "September 18, 2019"
    },{

        title: "Science has not yet mastered prophecy",
        subTitle: "We predict too much for the next year and yet far too little for the next ten.",
        author: "Start Bootstrap",
        date: "August 24, 2019"
    },{

        title: "Failure is not an option",
        subTitle: "Many say exploration is part of our destiny, but it’s actually our duty to future generations.",
        author: "Start Bootstrap",
        date: "July 8, 2019"
    }

]

const mappedBlog = BlogInfo.map( card => {
    return(
        <BlogSetup
       title={card.title}
       subTitle={card.subTitle}
       author={card.author}
       date={card.date}
        />
    )
})

return (
    <div>
    <div>
        <h1><Header/></h1>
    </div>
    <div>
        {mappedBlog}
        <button>OLDER POSTS...</button>
     </div>
     <div>
         <Footer/>
     </div>
     </div>     
   
);
}

export default List