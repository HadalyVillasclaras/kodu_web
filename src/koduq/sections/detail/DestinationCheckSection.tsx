import { Destination } from "../../core/destination/domain/Destination";
import { MappedList } from "../../../design-system/components/molecules";
import { DestinationCheckForm } from "./DestinationCheckForm";
import styles from "./DestinationCheckSection.module.scss";
import { Button, Divider, Heading, Icon, IconButton } from "../../../design-system/components/atoms";
import { useEffect, useState } from "react";
import { RequestForm } from "../shared/RequestForm";

type Props = {
  destination: Destination
}

export const DestinationCheckSection = ({ destination }: Props) => {
  const [isRequested, setIsRequested] = useState(false);

  function handleRequest() {
    setIsRequested(false);
 

  }
  useEffect(() => {
    console.log(isRequested);
if (isRequested === true) {
  window.scrollTo(0, 500);

  console.log('hey request?');

}
  }, [isRequested])

  return (
    <>
      <section className={`${styles['dest__container']} ${isRequested ? styles['slides-out'] : styles['slides-in']}`}>
        <section className={`${styles['dest-check']} ${styles['dest__section']}`}>
          <section className={`${styles['dest-check__info']}`}>
            <div className={`${styles['dest-check__info__capacity']}`}>
              <p>{` > ${destination.details.persons} persons`}</p>
              <p>{`${destination.details.persons} beds`}</p>
            </div>
            <p className={`${styles['dest-check__info__description']}`}>{destination.description}</p>
            <MappedList color="green" size="m" items={destination?.details.amenities} />
          </section>
          <Divider />
          <section className={`${styles['dest-check__form']}`}>
            <DestinationCheckForm setIsRequested={setIsRequested} destinationId={destination.id.toString()} />
          </section>
        </section>

        <section className={`${styles['dest-request']} ${styles['dest__section']}`} >
          <header>
            <Heading as="h4" color="brown">Request form</Heading>
            <p><b>Selected dates: Jan - Mar 2023</b></p>
          </header>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet enim feugiat augue posuere pellentesque!</p>
          <RequestForm />
          <section className={`${styles['dest-request__btns']}`} >
            <IconButton text="Back to availability form" variant="circle" ariaLabel="back" onClick={handleRequest} icon="arrowLeft" color="brown" />
            {/* <Button text="Send request" color="green" /> */}
          </section>
        </section>
      </section>
    </>
  )
}
