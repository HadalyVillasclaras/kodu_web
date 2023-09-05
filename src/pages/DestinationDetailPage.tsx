import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import { Section } from "../design-system/objects"
import { DetailHeader } from "../sections/detail/DetailHeader"
import { DetailInfo } from "../sections/detail/DetailInfo";
import { Divider, Heading, IconButton } from "../design-system/atoms";
import { Destination } from "../core/destination/domain/Destination";
import { getById } from "../core/destination/application/getById";
import { Gallery } from "../design-system/molecules";
import { AvailabilityForm } from "../design-system/molecules/AvailabilityForm";
import { DestinationAvailabilityList } from "../design-system/molecules/DestinationAvailabilityList";
import { DestinationCheckForm } from "../sections/detail/DestinationCheckForm";
import styles from "./DestinationDetailPageProv.module.scss";

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
      {currentDestination
        ?
        <>
          <Section size='small' customStyle={{ paddingTop: "0rem", gap: "2rem" }}>
            <div style={{ height: "65vh" }}>
              <Gallery imgs={currentDestination.images} />
            </div>
            <DetailHeader destination={currentDestination} />
            <DetailInfo description={currentDestination?.description} amenities={currentDestination?.details.amenities} />
            <Divider color="green" />
          </Section>
          <Section size='small'>
            <section className={`${styles['section-noname']} `}>
              <section className={`${styles['section-noname__list']} `}>
                {
                  <ul className={`${styles['detail__list']}`}>
                    {
                      currentDestination?.details.amenities.map((am: string, key: number) => (
                        <li key={key}>{am}</li>
                      ))
                    }
                  </ul>
                }
              </section>
              <DestinationCheckForm destinationId={currentDestination.id.toString()} />

            </section>

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