import { Carousel } from '../../design-system/molecules/Carousel'
import { Heading } from '../../design-system/atoms'

export const Gallery = () => {
  const BASE_ASSETS = import.meta.env.VITE_BASE_ASSETS;
  const imgArray = [
    `${BASE_ASSETS}imgs/homes/paraty/paraty-1.png`,
    `${BASE_ASSETS}imgs/homes/dunlap/dunlap-1.png`,
    `${BASE_ASSETS}imgs/homes/bloom/bloom-3.png`,
    `${BASE_ASSETS}imgs/homes/dunlap/dunlap-1.png`,
    `${BASE_ASSETS}imgs/homes/dunlap/dunlap-1.png`
];

  
  return (
    <>
      <section style={{ width: "70%" }}>
        <Carousel images={imgArray} />
      </section>
      <section style={{ display: "flex", justifyContent: "flex-end" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem", maxWidth: "400px" }}>
          <Heading as='h2' color='brown'>Sustainable lodgings</Heading>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ante in rhoncus pulvinar, arcu orci dapibus nisl, et dictum risus lacus quis sem. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
        </div>
      </section>
    </>
  )
}