import { useParams } from "react-router-dom";
import { useState, useEffect, useRef } from 'react';
import { Section } from "../../design-system/components/objects"
import { Destination } from "../core/destination/domain/Destination";
import { getDestinationById } from "../core/destination/application/getDestinationById";
import { Fader } from "../../design-system/components/molecules";
import { DestinationImages } from "../sections/detail/DestinationImages";
import { DestinationHeader } from "../sections/detail/DestinationHeader";
import { DestinationNotFound } from "../sections/shared/errors/DestinationNotFound";
import { DestinationCheckSection } from "../sections/detail/DestinationCheckSection";
import { getQuarterById } from "../core/common/quarters/services/getQuarterById";
import { Quarter } from "../core/common/quarters/domain/Quarter";

export const DestinationDetailPage = () => {
  const [currentDestination, setCurrentDestination] = useState<Destination | undefined>();
  const [selectedQuarter, setSelectedQuarter] = useState<Quarter | undefined>();

  const { id: destinationId, quarterId } = useParams();

  const refs = {
    detMain: useRef(null),
    detCheck: useRef(null),
    detNotFound: useRef(null),
  };

  function getCurrentDestination() {
    if (destinationId) {
      const destination = getDestinationById(destinationId)
      destination && setCurrentDestination(destination);
    }
  }

  function getSelectedQuarter() {
    const quarter = quarterId && getQuarterById(quarterId);
    quarter && setSelectedQuarter(quarter);
  }

  console.log(selectedQuarter);

  useEffect(() => {
    getCurrentDestination();
    quarterId && getSelectedQuarter();
    window.scrollTo(0, 0);
  }, [destinationId]);

  return (
    <>
      <Fader />
      {currentDestination
        ?
        <>
          <Section id="detMain" ref={refs.detMain} size='small' customStyle={{ minHeight: "unset", paddingBottom: "0", gap: "2rem" }}>
            <DestinationImages imgs={currentDestination.images} />
            <DestinationHeader destination={currentDestination} />
          </Section>
          <Section id="detCheck" ref={refs.detCheck} size='full'>
            <DestinationCheckSection destination={currentDestination} selectedQuarterFromUrl={selectedQuarter}/>
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