import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import { Section } from "../design-system/objects"
import { DetailHeader } from "../sections/detail/DetailHeader"
import { DetailInfo } from "../sections/detail/DetailInfo";
import { Divider, Heading, IconButton } from "../design-system/atoms";
import { Destination } from "../core/destination/domain/Destination";
import { getById } from "../core/destination/application/getById";
import { Fader } from "../design-system/molecules";
import { DestinationCheckForm } from "../sections/detail/DestinationCheckForm";
import { DestinationImages } from "../sections/detail/DestinationImages";
import { MappedList } from "../design-system/molecules/MappedList";

export const DestinationDetailPage = () => {
  const [currentDestination, setCurrentDestination] = useState<Destination | undefined>();
  const { id: destinationId } = useParams();

  function getCurrentDestination() {
    if (destinationId) {
      const destination = getById(destinationId)
      destination && setCurrentDestination(destination);
    }
  }
  console.log(currentDestination);
  useEffect(() => {
    getCurrentDestination();
  }, []);


  return (
    <>
      <Fader />
      {currentDestination
        ?
        <>
          <Section size='small' customStyle={{ paddingTop: "0rem", gap: "2rem" }}>
            <DestinationImages imgs={currentDestination.images} />
            <DetailHeader destination={currentDestination} />
            <DetailInfo description={currentDestination?.description} amenities={currentDestination?.details.amenities} />
            <Divider color="green" />
          </Section>
          <Section size='small' direction="row">
            <MappedList color="green" size="l" items={currentDestination?.details.amenities} />
            <DestinationCheckForm destinationId={currentDestination.id.toString()} />
          </Section>
        </>
        :
        <Section size="big">
          <Heading as="h4" color="green">Sorry, destination with id "{destinationId}" is not found.</Heading>
          <a href="/" style={{ marginTop: "1rem" }}>
            <IconButton
              text="Go to home page"
              ariaLabel="Link to home page"
              icon="arrowLeft"
              color="brown"
              size="m"
            />
          </a>
        </Section>
      }
    </>
  )
}