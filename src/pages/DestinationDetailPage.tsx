import { useParams } from "react-router-dom";
import { useState, useEffect, useRef } from 'react';
import { Section } from "../design-system/objects"
import { Divider } from "../design-system/atoms";
import { Destination } from "../core/destination/domain/Destination";
import { getById } from "../core/destination/application/getById";
import { Fader } from "../design-system/molecules";
import { DestinationCheckForm } from "../sections/detail/DestinationCheckForm";
import { DestinationImages } from "../sections/detail/DestinationImages";
import { MappedList } from "../design-system/molecules/MappedList";
import { DestinationMainInfo } from "../sections/detail/DestinationMainInfo";
import { DestinationNotFound } from "../sections/errors/DestinationNotFound";

export const DestinationDetailPage = () => {
  const [currentDestination, setCurrentDestination] = useState<Destination | undefined>();
  const { id: destinationId } = useParams();

  const refs = {
    detImages: useRef(null),
    detInfo: useRef(null),
    detNotFound: useRef(null),
  };

  function getCurrentDestination() {
    if (destinationId) {
      const destination = getById(destinationId)
      destination && setCurrentDestination(destination);
    }
  }

  useEffect(() => {
    getCurrentDestination();
  }, []);

  return (
    <>
      <Fader />
      {currentDestination
        ?
        <>
          <Section id="detImages" ref={refs.detImages} size='full' customStyle={{ gap: "2rem" }}>
            <DestinationImages imgs={currentDestination.images} />
            <DestinationMainInfo destination={currentDestination}/>
            <Divider color="green" />
          </Section>

          <Section id="detInfo" ref={refs.detInfo} size='small' direction="row">
            <MappedList color="green" size="l" items={currentDestination?.details.amenities} />
            <DestinationCheckForm destinationId={currentDestination.id.toString()} />
          </Section>
        </>
        :
        <Section id="detNotFound" ref={refs.detNotFound} size="big">
          <DestinationNotFound destinationId={destinationId}/>
        </Section>
      }
    </>
  )
}