
import React from 'react'
import fantasy from '../data/fantasy.json'
import history from '../data/history.json'
import romance from '../data/romance.json'
import horror from '../data/horror.json'
import scifi from '../data/scifi.json'

import {Card,Row,Col} from 'react-bootstrap'


const genres = [fantasy,history,horror,romance,scifi] //Each item in this array contains a collection of books belonging to a specific genre
// const collection = [] 
// const AllBooks = []

// LOOP DE LOOP
const  LatestReleases = () =>{
      
       // AllBooks.push(...collection)//YEET!
       // console.log(AllBooks)  //AllBooks arr contains everysingle book from every single category!
                              // Each array item in Allbooks is an object/book

        return (<Row xs={1} md={3}  lg={4} className="g-4 p-5">{
//Maps All books from all genres to the page at the same time!
genres.map(collection => {
        
  return collection.map(book=>{
    return <Col key={book.asin}>
    <Card>
      <Card.Img variant="top" src={book.img} />
      <Card.Body>
        <Card.Title>{book.title}</Card.Title>
        <Card.Text>
          {book.price}
        </Card.Text>
      </Card.Body>
    </Card>
  </Col>
  })

  })
        }</Row>)
 
  }
   
  
export default LatestReleases