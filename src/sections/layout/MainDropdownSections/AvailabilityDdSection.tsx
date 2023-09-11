import { useState } from 'react';
import { Heading } from '../../../design-system/atoms';
import { AvailabilityForm, QuarterAvailability } from '../../../design-system/molecules/AvailabilityForms/AvailabilityForm';
import styles from './AvailabilityDdSection.module.scss';
import { Quarter } from '../../../core/common/quarters/domain/Quarter';
import { Destination } from '../../../core/destination/domain/Destination';

type Props = {
  formChoice: "destination" | "quarter";
}

const VITE_BASE_PATH = import.meta.env.VITE_BASE_PATH;

export const AvailabilityDdSection = ({ formChoice }: Props) => {
  const [destinationImgPreview, setDestinationImgPreview] = useState<string>('');

  const [destination, setDestination] = useState<any | null>(null);
  const [quarter, setQuarter] = useState<QuarterAvailability | null>(null);
  
  const destinationBaseUrl = `${VITE_BASE_PATH}#/destination/`;

  return (
    <section className={`${styles[`dd-avblty`]}`}>
      <AvailabilityForm setDestination={setDestination} setQuarter={setQuarter} formType={formChoice} setDestinationImgPreview={setDestinationImgPreview} />
      <div className={`${styles[`dd-avblty__response`]}`}>
        {
          formChoice === 'destination'
            ? <img src={destinationImgPreview} alt="" />
            : <></>
        }
        {
          destination &&
          <section>
            <Heading as='h4' color='cream' font='fancy'>{destination.name}</Heading>
            <p>{destination.location}</p>
            <div>
              <p>Available quarter periods: </p>
              <ul>
                {
                  destination?.availability?.map((q: Quarter, k: number) => {
                    return (<li key={k}>{`${q.id} | ${q.label}`}</li>)
                  })

                }
              </ul>
            </div>
          </section>
        }
        {
          quarter &&
          <section>
          <Heading as='h4' color='cream' font='fancy'>{`${quarter.quarter.label} (${quarter.quarter.id})`}</Heading>
          <div>
            <p>Available destinations in selected quarter: </p>
            <ul>
              {
                quarter.availableDestinations.map((destination: Destination, k: number) => {
                  return (<li key={k}><a href={destinationBaseUrl + destination.id}>{destination.name}</a></li>)
                })

              }
            </ul>
          </div>
        </section>
        }
      </div>
    </section>
  )
}
