import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import { Section } from "../design-system/objects"
import { DetailHeader } from "../sections/detail/DetailHeader"
import { Gallery } from "../sections/home";
import { DetailInfo } from "../sections/detail/DetailInfo";
import { Heading } from "../design-system/atoms";
import { Destination } from "../core/destination/domain/Destination";
import { getById } from "../core/destination/application/getById";

export const DestinationDetailPage = () => {
  const [currentDestination, setCurrentDestination] = useState<Destination | undefined>();
  const { id: destinationId } = useParams();
  
  function getCurrentDestination() {
    if (destinationId) {
      const destination = getById(destinationId)
      destination && setCurrentDestination(destination);
    }
  }

  useEffect(() => {
    getCurrentDestination();
  }, [])
  return (
    <>
      {currentDestination 
      ?
        <>
          <Section size='big'>
            <section style={{ height: "70vw" }}>
              <Gallery imgs={currentDestination.images} />
            </section>
          </Section>
          <hr />
          <DetailHeader name={currentDestination?.name} location={currentDestination?.location} />
          <DetailInfo description={currentDestination?.description} details={currentDestination?.details} />
          <Section customStyle={{ flexDirection: 'row' }} size='big'>
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
      : 
      <Section size="big">
        <Heading as="h3">Destination with id {destinationId} is not available</Heading>
      </Section>
      }
    </>
  )
}