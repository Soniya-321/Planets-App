// Write your code here
import Slider from 'react-slick'
import './index.css'

const PlanetItem = props => {
  const {planetsList} = props
  const settings = {
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
  }
  return (
    <div className="slider">
      <h1 className="heading">PLANETS</h1>
      <div data-testid="planets" className="slider-container">
        <Slider {...settings}>
          {planetsList.map(each => (
            <div className="container" key={each.id}>
              <img
                className="img"
                src={each.imageUrl}
                alt={`planet ${each.name}`}
              />
              <h1 className="head">{each.name}</h1>
              <p className="description">{each.description}</p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default PlanetItem
