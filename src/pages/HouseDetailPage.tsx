import { Heading } from "../design-system/atoms"
import { Section } from "../design-system/objects/Section"

export const HouseDetailPage = () => {
  return (
    <>
      <Section size='big'>
        <header>
          <Heading as="h2" color="green">Bloom house</Heading>
          <p>Austing, TX</p>
        </header>
        <section style={{display:"flex", gap:"2rem"}}>
        <p>Lorem ipsum dolor sit amet, consectetur. Adipiscing elit. Nunc auctor, ante in rhoncus pulvinar, arcu orci dapibus nisl, et dictum risus lacus quis sem. Sed ultrices sodales lorem, at lobortis odio porta vel. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque congue non augue eleifend iaculis. Mauris posuere ex justo, sit amet faucibus diam faucibus sollicitudin. Pellentesque efficitur tortor ac varius tincidunt. </p>
        <div>
          amenities
        </div>
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