
import React from 'react'
import fantasy from '../data/fantasy.json'
import {Card} from 'react-bootstrap'



const  LatestReleases = () =>{
    return <div className="d-flex flex-wrap">{
      fantasy.map(book => {
        return <Card key={book.asin} className="book-cover" ><Card.Img key={book.title} src={book.img}  /></Card>
        })
    }</div>
  }
export default LatestReleases