import 'bootstrap/dist/css/bootstrap.min.css';
import MyNav from './components/MyNav'
import MyJumbo from './components/MyJumbotron'
import MyFooter from './components/MyFooter'
import LatestReleases from './components/LatestReleases'
import './App.css'



const App =() => {
  
  return (
    <>
      <MyNav />
      <MyJumbo />

      <LatestReleases />
      <MyFooter className='footer' />
  </>
)
}
export default App;
