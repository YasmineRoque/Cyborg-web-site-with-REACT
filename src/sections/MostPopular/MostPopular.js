import './MostPopular.css'
import {Card} from '../../components/index'
import popular_01 from '../../assets/images/popular-01.jpg';


const MostPopular = () => {
  return (
    <>
      <div className='section-wrapper'>
        <div className='section-header'>
            <h3>Most Popular</h3>
        </div>
        <div className='most-popular-items'>
            {/* <div className='most-popular-item'>
                <div className='card-wrapper'>
                    <img className='most-popular-item-image' src={popular_01}/>
                    <div className='most-popular-item-content'>
                        <h4 className='most-popular-item-title'>
                            Fortnite <br />
                            <span>Sandbox</span>
                        </h4>
                        <ul>
                            <li><span>4.2</span></li>
                            <li><span>2.3M</span></li>
                        </ul>

                    </div>
                </div>
            </div> */}
            <Card image={popular_01}  title="Fortnite" category="Sandbox" rate="3.8" download="2.3M" />
            <Card image="popular_02" title="PubG" category="Stream-X" rate="4.8" download="1.1M"/>
            <Card image="popular_03" title="Dota2" category="Legendary" rate="2.7" download="5.3M"/>
            <Card image="popular_04" title="CS-Go" category="Battle S" rate="3.9" download="6.1M"/>

        </div>

      </div>
    </>
  )
}

export default MostPopular
