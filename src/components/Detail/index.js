// == Import
import './detail.scss';
import { Card, Image } from 'semantic-ui-react'
import actor from '../../assets/pictures/actors/will.jpg';
import Poster from '../../assets/pictures/squid-game.jpg';

// == Composant
const Detail = () => {

  const isConnected = false;


  return(
  <div className="detail-container">
    <div className="banner-container">
      {/* <img className="poster" src={Poster} alt=""></img> */}
      <h1>Titre du film</h1>
      <p className="resume-for-desktop">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam</p>
      { isConnected ? <a className="add-list-button">Ajouter à ma liste + </a> : <a className="add-list-button">Connecte-toi pour ajouter la série</a>}
      <i data-feather="circle"></i>

    </div>

    <div className="display-desktop">
      <div className="genre-list">
        <ul className="ul-genre">
          <li className="li-genre"><a href="/">Horreur</a></li>
          <li className="li-genre"><a href="/">Thriller</a></li>
          <li className="li-genre"><a href="/">Action</a></li>
          <li className="li-genre"><a href="/">Drame</a></li>
        </ul>
      </div>
      <div className="resume">
        <h3>Résumé</h3>
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam</p>
      </div>
      <div className="actors-container">
        <ul className="ul-actors">
          <li className="li-actors"> 
            <Card>
              <Image src={actor} wrapped ui={false} style={{width: '80px', height: 'auto'}}/>
              <Card.Content>
                <Card.Header>Matthew</Card.Header>
              </Card.Content>
            </Card>
          </li>
          <li className="li-actors"> 
            <Card>
              <Image src={actor} wrapped ui={false} style={{width: '80px', height: 'auto'}}/>
              <Card.Content>
                <Card.Header>Matthew</Card.Header>
              </Card.Content>
            </Card>
          </li>
          <li className="li-actors"> 
            <Card>
              <Image src={actor} wrapped ui={false} style={{width: '80px', height: 'auto'}}/>
              <Card.Content>
                <Card.Header>Matthew</Card.Header>
              </Card.Content>
            </Card>
          </li>
          <li className="li-actors"> 
            <Card>
              <Image src={actor} wrapped ui={false} style={{width: '80px', height: 'auto'}}/>
              <Card.Content>
                <Card.Header>Matthew</Card.Header>
              </Card.Content>
            </Card>
          </li>
          <li className="li-actors"> 
            <Card>
              <Image src={actor} wrapped ui={false} style={{width: '80px', height: 'auto'}}/>
              <Card.Content>
                <Card.Header>Matthew</Card.Header>
              </Card.Content>
            </Card>
          </li>
        </ul>
      </div>
    </div>
    <div className="seasons-container">
        <ul className="ul-seasons">
          <li className="li-seasons"> 
            <Card>
              <Image src={actor} wrapped ui={false} style={{width: '150px', height: 'auto'}}/>
              <Card.Content>
                <Card.Header >Saison 1</Card.Header>
              </Card.Content>
            </Card>
          </li>
          <li className="li-seasons"> 
            <Card>
              <Image src={actor} wrapped ui={false} style={{width: '150px', height: 'auto'}}/>
              <Card.Content>
                <Card.Header>Saison 2</Card.Header>
              </Card.Content>
            </Card>
          </li>
          <li className="li-seasons"> 
            <Card>
              <Image src={actor} wrapped ui={false} style={{width: '150px', height: 'auto'}}/>
              <Card.Content>
                <Card.Header>Saison 3</Card.Header>
              </Card.Content>
            </Card>
          </li>
          <li className="li-seasons"> 
            <Card>
              <Image src={actor} wrapped ui={false} style={{width: '150px', height: 'auto'}}/>
              <Card.Content>
                <Card.Header>Saison 4</Card.Header>
              </Card.Content>
            </Card>
          </li>
          <li className="li-seasons"> 
            <Card>
              <Image src={actor} wrapped ui={false} style={{width: '150px', height: 'auto'}}/>
              <Card.Content>
                <Card.Header>Saison 5</Card.Header>
              </Card.Content>
            </Card>
          </li>
        </ul>
      </div>
  </div>
);
}

// == Export
export default Detail;
