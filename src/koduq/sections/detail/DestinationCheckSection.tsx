import { type Destination } from '../../core/destination/domain/Destination';
import { MappedList, ShowMoreText } from '../../../design-system/components/molecules';
import styles from './DestinationCheckSection.module.scss';
import { Divider, Heading, IconButton } from '../../../design-system/components/atoms';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
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
  const [hasClickedBack, setHasClickedBack] = useState(false);
  const [isRequestFormSubmitted, setIsRequestFormSubmitted] = useState(false);
  const deviceType = useDeviceType();

  const requestFormRef = useRef<any>(null);

  function handleBack() {
    setIsRequested(false);
    if (isRequestFormSubmitted) {
      setIsRequestFormSubmitted(false);
    }
    setHasClickedBack(true);
  }


  useLayoutEffect(() => {
    if (isRequested && requestFormRef.current && deviceType === DeviceType.MOBILE) {
      requestFormRef.current.scrollIntoView({ behavior: "smooth"});;
      setHasClickedBack(false);
    }
  }, [isRequested]);

  useEffect(() => {
    setIsRequested(false);
    setHasClickedBack(false);
  }, [selectedQuarterFromUrl, destination]);


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
              isRequestFormSubmitted={isRequestFormSubmitted}
            />
          </section>
        </section>
        <section ref={requestFormRef} className={`${styles['dest-request']} ${styles.dest__section}`} >
          <header>
            <Heading as="h4" color="brown">Request form</Heading>
            <p><b>Selected dates: {selectedQuarter?.label} {selectedQuarter?.id && getYearForSelectedQuarter(selectedQuarter.id)}</b></p>
          </header>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fringilla tellus quam, in cursus dui ultricies eget. Aliquam nec massa at turpis porta eleifend.</p>
          <RequestForm
            setIsRequestSubmitted={setIsRequestFormSubmitted}
            isRequestSubmitted={isRequestFormSubmitted}
            hasClickedBack={hasClickedBack}
          />
          <section className={`${styles['dest-request__btns']}`} >
            <IconButton
              text="Back to availability form"
              variant="circle"
              ariaLabel="back"
              onClick={handleBack}
              icon="arrowLeft"
              color="brown"
            />
          </section>
        </section>
      </section>
    </>
  );
};
