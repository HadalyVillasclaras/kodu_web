import { useParams } from "react-router-dom";
import { useState, useEffect, useRef } from 'react';
import { Section } from "../design-system/objects"
import { Destination } from "../core/destination/domain/Destination";
import { getById } from "../core/destination/application/getById";
import { Fader } from "../design-system/molecules";
import { DestinationImages } from "../sections/detail/DestinationImages";
import { DestinationMainInfo } from "../sections/detail/DestinationMainInfo";
import { DestinationNotFound } from "../sections/errors/DestinationNotFound";
import { DestinationInfoContainer } from "../sections/detail/DestinationInfoContainer";

export const DestinationDetailPage = () => {
  const [currentDestination, setCurrentDestination] = useState<Destination | undefined>();
  const { id: destinationId } = useParams();
  const refs = {
    detMain: useRef(null),
    detCheck: useRef(null),
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
    window.scrollTo(0, 0);
  }, [destinationId]);

  return (
    <>
      <Fader />
      {currentDestination
        ?
        <>
          <Section id="detMain" ref={refs.detMain} size='small' customStyle={{ minHeight: "unset", paddingBottom: "0", paddingTop: "0", gap: "2rem" }}>
            <DestinationImages imgs={currentDestination.images} />
            <DestinationMainInfo destination={currentDestination} />
          </Section>
          <Section id="detCheck" ref={refs.detCheck} size='full'>
            <DestinationInfoContainer destination={currentDestination} />
          </Section>
        </>
        :
        <Section id="detNotFound" ref={refs.detNotFound} size="big">
          <DestinationNotFound destinationId={destinationId} />
        </Section>
      }
    </>
  )
}