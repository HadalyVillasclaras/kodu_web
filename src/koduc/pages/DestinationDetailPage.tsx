import { useLocation, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Section } from '../../design-system/components/objects';
import { Fader } from '../../design-system/components/molecules';
import { DestinationImages, DestinationHeader, DestinationCheckSection } from '../sections/detail';
import { DestinationNotFound } from '../sections/shared/errors/DestinationNotFound';
import { getDestinationById } from '../core/destination/application/getDestinationById';
import { type Destination } from '../core/destination/domain/Destination';
import { getQuarterById } from '../core/common/quarters/services/getQuarterById';
import { type Quarter } from '../core/common/quarters/domain/Quarter';

export const DestinationDetailPage = () => {
  const [currentDestination, setCurrentDestination] = useState<Destination | undefined>();
  const [selectedQuarter, setSelectedQuarter] = useState<Quarter | undefined>();
  const { id: destinationId, quarterId } = useParams();
  const { pathname } = useLocation();

  function getCurrentDestination() {
    if (destinationId) {
      const destination = getDestinationById(destinationId);
      destination && setCurrentDestination(destination);
    }
  }

  function getSelectedQuarter() {
    const quarter = quarterId && getQuarterById(quarterId);
    quarter && setSelectedQuarter(quarter);
  }

  useEffect(() => {
    getCurrentDestination();
    if (quarterId) {
      getSelectedQuarter();
    }
  }, [destinationId, quarterId, pathname]);

  return (
    <>
      <Fader />
      {currentDestination ? (
        <>
          <Section size='small' customStyle={{ minHeight: 'unset', paddingBottom: '0', gap: '2rem' }}>
            <DestinationImages imgs={currentDestination.images} />
            <DestinationHeader destination={currentDestination} />
          </Section>
          <Section size='full'>
            <DestinationCheckSection destination={currentDestination} selectedQuarterFromUrl={selectedQuarter} />
          </Section>
        </>
      ) : (
        <Section size='big'>
          <DestinationNotFound destinationId={destinationId} />
        </Section>
      )}
    </>
  );
};
