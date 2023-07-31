import { Carousel } from '../../design-system/molecules/Carousel'
import { Heading } from '../../design-system/atoms/Heading'

type Props = {}

export const Gallery = (props: Props) => {
  return (
    <>
      <section style={{ width: "70vw" }}>
        <Carousel items={['/src/assets/imgs/homes/paraty/paraty-1.jpeg', '/src/assets/imgs/homes/dunlap/dunlap-1.jpg', '/src/assets/imgs/homes/bloom/bloom-3.png', '/src/assets/imgs/homes/dunlap/dunlap-1.jpg', '/src/assets/imgs/homes/bloom/bloom-3.png', '/src/assets/imgs/homes/dunlap/dunlap-1.jpg']} />
      </section>
      <section style={{ display: "flex", justifyContent: "flex-end" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem", width: "400px" }}>
          <Heading as='h3' color='brown'>Sustainable lodgings</Heading>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ante in rhoncus pulvinar, arcu orci dapibus nisl, et dictum risus lacus quis sem. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
        </div>
      </section>
    </>
  )
}