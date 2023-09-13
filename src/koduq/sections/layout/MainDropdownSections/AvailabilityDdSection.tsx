import { useEffect, useState } from 'react';
import { Heading, Link } from '../../../../design-system/components/atoms';
import { AvailabilityForm, QuarterAvailability } from '../../../../design-system/components/molecules/AvailabilityForms/AvailabilityForm';
import styles from './AvailabilityDdSection.module.scss';
import { Quarter } from '../../../core/common/quarters/domain/Quarter';
import { Destination } from '../../../core/destination/domain/Destination';
import { getQuartersByIds } from '../../../core/common/quarters/services/getQuartersByIds';

type Props = {
  formChoice: "destination" | "quarter";
  closeDropdown: () => void;
}

const VITE_BASE_PATH = import.meta.env.VITE_BASE_PATH;

export const AvailabilityDdSection = ({ formChoice, closeDropdown }: Props) => {
  const [destinationPreview, setDestinationPreview] = useState<any | null>(null);
  const [quarterPreview, setQuarterPreview] = useState<any | null>(null);
  const [isLoading, setIsLoading] = useState(null)
  const [destination, setDestination] = useState<any | null>(null);
  const [quarter, setQuarter] = useState<QuarterAvailability | null>(null);

  const destinationBaseUrl = `/destination/`;

  useEffect(() => {
    setDestination(null);
    setQuarter(null);
  }, [destinationPreview, quarterPreview])

  return (
    <section className={`${styles[`dd-avblty`]}`}>
      <AvailabilityForm
        setDestination={setDestination}
        setQuarter={setQuarter}
        formType={formChoice}
        setDestinationPreview={setDestinationPreview}
        setQuarterPreview={setQuarterPreview}
      />
      <div className={`${styles[`dd-avblty__response`]}`}>
        {
          formChoice === 'destination' &&
          <section className={`${styles[`dd-avblty__response-destination`]}`}>
            {
              destinationPreview &&
              <img src={destinationPreview.img} alt="" />
            }
            <section className={`${styles[`dd-avblty__response__clm-sect`]}`}>
              {
                destinationPreview &&
                <div>
                  <Heading as='h4' color='cream' font='fancy'>{destinationPreview.name}</Heading>
                  <p>{destinationPreview.location}</p>
                </div>
              }
              {
                destination !== null && isLoading === null
                  ?
                  <span>Please, click the check button.</span>
                  :
                  <div>
                    {
                      isLoading
                        ? <span>loading</span>
                        : <>
                          <p>Available quarter periods: </p>
                          <ul className={`${styles[`dd-avblty__response-destination-ul`]}`}>
                            {
                              destination?.availability?.map((q: Quarter, k: number) => {
                                return (
                                  <li key={k} onClick={closeDropdown}>
                                    <Link openInNewTab={false} size='s' color="cream" href={destinationBaseUrl + destination.id}>
                                      {`${q.id} | ${q.label}`}
                                    </Link>
                                  </li>)
                              })
                            }
                          </ul>

                        </>
                    }

                  </div>
              }


            </section>
          </section>
        }
        {
          formChoice === 'quarter' &&
          <section className={`${styles[`dd-avblty__response__clm-sect`]}`}>
            {
              quarterPreview &&
              <Heading as='h4' color='cream' font='fancy'>{`${quarterPreview.id} | ${quarterPreview.label}`}</Heading>
            }
            {
              quarter &&
              <div>
                <p>Available destinations in selected quarter: </p>
                <ul>
                  {
                    quarter.availableDestinations.map((destination: Destination, k: number) => {
                      return (
                        <li key={k} onClick={closeDropdown}>
                          <Link openInNewTab={false} size='s' color="cream" href={destinationBaseUrl + destination.id}>
                            {destination.name}
                          </Link>
                        </li>)
                    })
                  }
                </ul>
              </div>
            }
          </section>
        }
      </div>
    </section>
  )
}
