
import horror from `../../horror.json`
import scifi from `../../scifi.json`
import romance from `../../romance.json`
import fantasy from `../../fantasy.json`
import history from `../../history.json`
import { CardDeck } from "react-bootstrap"


let AllBooks = [horror, scifi, romance, fantasy, history]


const latestRelease = () =>{

    return (
    
            AllBooks.map(book=>
        <Card>
          <Card.Img variant="top" src={book.Img} />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural lead-in to
              additional content. This content is a little bit longer.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
    //      <CardDeck>
    //   </CardDeck>

      )
    )
}

export default latestRelease