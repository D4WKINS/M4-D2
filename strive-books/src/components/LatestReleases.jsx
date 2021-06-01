
import React from 'react'
import fantasy from '../data/fantasy.json'
import history from '../data/history.json'
import romance from '../data/romance.json'
import horror from '../data/horror.json'
import scifi from '../data/scifi.json'

import {Card} from 'react-bootstrap'
//THE ULTIMATE LOOP DE LOOP
const genres = [fantasy,history,horror,romance,scifi] //Each item in this array contains a collection of books belonging to a specific genre
console.log(genres)
const collection = [] 
const AllBooks = []
const  LatestReleases = () =>{
      genres.forEach(books => {
        for(let i = 0; i<books.length; i++){
            collection.push(books[i])
        }
        })
        AllBooks.push(...collection)//YEET!
        console.log(AllBooks)  //AllBooks arr contains everysingle book from every single category!
                              // Each array item in Allbooks is an object/book

        return <div className="d-flex flex-wrap">{
//Maps All books from all genres to the page at the same time!
           AllBooks.map(book=> {
            return <Card key={book.asin} className="book-cover" ><Card.Img key={book.title} src={book.img}  /></Card>
          })
        }</div>
 
  }
   
  
export default LatestReleases