import { Carousel } from "../design-system/molecules/Carousel"
import { Section } from "../design-system/objects/Section"
import { DetailHeader } from "../sections/detail/DetailHeader"

export const HouseDetailPage = () => {
  return (
    <>
      <Section size='big'>
        <section style={{ width: "70vw" }}>
          <Carousel images={['/src/assets/imgs/homes/paraty/paraty-1.png', '/src/assets/imgs/homes/dunlap/dunlap-1.png', '/src/assets/imgs/homes/bloom/bloom-3.png', '/src/assets/imgs/homes/dunlap/dunlap-1.png', '/src/assets/imgs/homes/bloom/bloom-3.png', '/src/assets/imgs/homes/dunlap/dunlap-1.png']} />
        </section>
        <DetailHeader/>
        <section style={{ display: "flex", gap: "2rem" }}>
          <p>Lorem ipsum dolor sit amet, consectetur. Adipiscing elit. Nunc auctor, ante in rhoncus pulvinar, arcu orci dapibus nisl, et dictum risus lacus quis sem. Sed ultrices sodales lorem, at lobortis odio porta vel. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque congue non augue eleifend iaculis. Mauris posuere ex justo, sit amet faucibus diam faucibus sollicitudin. Pellentesque efficitur tortor ac varius tincidunt. </p>
          <ul>
            <li>4 persons</li>
            <li>3 bedrooms</li>
            <li>2 bathrooms</li>
          </ul>
        </section>
      </Section>
      <Section size='big'>
        <hr />
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