import { useParams } from "react-router-dom";
import { Carousel } from "../design-system/molecules"
import { Section } from "../design-system/objects"
import { DetailHeader } from "../sections/detail/DetailHeader"
// import { DetailInfo } from "../sections/detail/DetailInfo";
import { getById } from "../services/destination/getById";

export const HouseDetailPage = () => {
  const { id: homeId } = useParams();
  const home = getById(homeId)
  const BASE_ASSETS = import.meta.env.VITE_BASE_ASSETS;
    
  return (
    <>
    {
      home &&
      <Section size='big'>
        <section style={{ width: "70vw" }}>
        <Carousel images={[
          `${BASE_ASSETS}imgs/homes/paraty/paraty-1.png`,
          `${BASE_ASSETS}imgs/homes/dunlap/dunlap-1.png`,
          `${BASE_ASSETS}imgs/homes/bloom/bloom-3.png`,
          `${BASE_ASSETS}imgs/homes/dunlap/dunlap-1.png`,
          `${BASE_ASSETS}imgs/homes/bloom/bloom-3.png`,
          `${BASE_ASSETS}imgs/homes/dunlap/dunlap-1.png`
      ]} />
        </section>
        <DetailHeader name={home?.name} location={home?.location}/>
        {/* <DetailInfo description={home?.description} details={home?.details}/> */}

      </Section>
    }
        <hr/>
      
      <Section customStyle={{flexDirection: 'row'}} size='big'>
        <section>
          <span>
            <h3>Prices</h3>
            <p>things</p>
          </span>
          <span>
            <h3>Check-In & Check-Out</h3>
            <p>things</p>
          </span>
        </section>
        <section>
          check form
        </section>
      </Section>
    </>
  )
}