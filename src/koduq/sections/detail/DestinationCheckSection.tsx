import { type Destination } from '../../core/destination/domain/Destination';
import { MappedList, ShowMoreText } from '../../../design-system/components/molecules';
import styles from './DestinationCheckSection.module.scss';
import { Divider, Heading, IconButton } from '../../../design-system/components/atoms';
import { useEffect, useState } from 'react';
import { type Quarter } from '../../core/common/quarters/domain/Quarter';
import { getYearForSelectedQuarter } from '../../core/common/quarters/utils/getYearForSelectedQuarter';
import { DestinationCheckForm } from '../shared/forms/DestinationCheckForm';
import { RequestForm } from '../shared/forms/RequestForm';
import { useDeviceType, DeviceType } from '../../hooks/useDeviceType';

interface Props {
  destination: Destination
  selectedQuarterFromUrl?: Quarter
}

export const DestinationCheckSection = ({ destination, selectedQuarterFromUrl }: Props) => {
  const [selectedQuarter, setSelectedQuarter] = useState<Quarter | null>(null);
  const [isRequested, setIsRequested] = useState(false);
  const [isRequestSubmitted, setIsRequestSubmitted] = useState(false);

  const deviceType = useDeviceType();

  function handleRequest () {
    setIsRequested(false);
    if (isRequestSubmitted) {
      setIsRequestSubmitted(false);
      setSelectedQuarter(null);
    }
  }

  useEffect(() => {
    if (isRequested && deviceType === DeviceType.MOBILE) {
      window.scrollTo(0, 500);
    }
  }, [isRequested]);

  return (
    <>
      <section className={`${styles.dest__container} ${isRequested ? styles['slides-out'] : styles['slides-in']}`}>
        <section className={`${styles['dest-check']} ${styles.dest__section}`}>
          <section className={`${styles['dest-check__info']}`}>
            <div className={`${styles['dest-check__info__capacity']}`}>
              <p>{` > ${destination.details.persons} persons`}</p>
              <p>{`${destination.details.persons} beds`}</p>
            </div>
            <div className={`${styles['dest-check__info__description']}`}>
              <ShowMoreText
                text={destination.description}
                limit={200}
                buttonShowMoreText="Show more +"
                buttonShowLessText="Show less -"
                buttonColor="brown"
              />
            </div>
            <MappedList color="green" size="m" items={destination?.details.amenities} />
          </section>
          <Divider />
          <section className={`${styles['dest-check__form']}`}>
            <DestinationCheckForm
              setIsRequested={setIsRequested}
              destinationId={destination.id.toString()}
              selectedQuarter={selectedQuarter}
              setSelectedQuarter={setSelectedQuarter}
              selectedQuarterFromUrl={selectedQuarterFromUrl}
            />
          </section>
        </section>
        <section className={`${styles['dest-request']} ${styles.dest__section}`} >
          <header>
            <Heading as="h4" color="brown">Request form</Heading>
            <p><b>Selected dates: {selectedQuarter && selectedQuarter.label} {selectedQuarter?.id && getYearForSelectedQuarter(selectedQuarter.id)}</b></p>
          </header>
          <p>Test form as you like, data won't be sent or stored :)</p>
          <RequestForm
            setIsRequestSubmitted={setIsRequestSubmitted}
            isRequestSubmitted={isRequestSubmitted}
          />
          <section className={`${styles['dest-request__btns']}`} >
            <IconButton text="Back to availability form" variant="circle" ariaLabel="back" onClick={handleRequest} icon="arrowLeft" color="brown" />
          </section>
        </section>
      </section>
    </>
  );
};
