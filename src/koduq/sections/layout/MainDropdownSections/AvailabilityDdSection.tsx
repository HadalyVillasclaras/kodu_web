import { useEffect, useState } from 'react';
import { Heading, Link, Loader } from '../../../../design-system/components/atoms';
import { AvailabilityForm, QuarterAvailability } from '../../../../design-system/components/molecules/AvailabilityForms/AvailabilityForm';
import styles from './AvailabilityDdSection.module.scss';
import { Quarter } from '../../../core/common/quarters/domain/Quarter';
import { Destination } from '../../../core/destination/domain/Destination';
import { DestinationPreview } from './DestinationPreview';
import { QuarterPreview } from './QuarterPreview';

type Props = {
  formChoice: "destination" | "quarter";
  closeDropdown: () => void;
}
const destinationBaseUrl = `/destination/`;

export const AvailabilityDdSection = ({ formChoice, closeDropdown }: Props) => {
  const [quarter, setQuarter] = useState<QuarterAvailability | null>(null);
  const [quarterPreview, setQuarterPreview] = useState<any | null>(null);
  const [destination, setDestination] = useState<any | null>(null);
  const [destinationPreview, setDestinationPreview] = useState<any | null>(null);

  const [isSubmited, setIsSubmited] = useState(false);
  const [isSelected, setIsSelected] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setDestination(null);
    setQuarter(null);
  }, [destinationPreview, quarterPreview])

  useEffect(() => {
    setDestinationPreview(null);
    setQuarterPreview(null);
  }, [formChoice])

  useEffect(() => {
    if (isSubmited) {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
      }, 5000);
    }
  }, [isSubmited])

  return (
    <section className={`${styles[`dd-avblty`]}`}>
      <AvailabilityForm
        setIsSelected={setIsSelected}
        setIsSubmited={setIsSubmited}
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
              destinationPreview && !isSubmited &&
              <DestinationPreview destinationPreview={destinationPreview} isSelected={isSelected} />
            }
            {
              destination && isSubmited &&
              <>
                <img src={destination.images[0]} alt="" />
                <section className={`${styles[`dd-avblty__response__column-sect`]}`}>
                  <div>
                    <Heading as='h4' color='cream' font='fancy'>{destination.name}</Heading>
                    <p>{destination.location}</p>
                  </div>
                  {
                    isLoading
                      ? <Loader />
                      : <div>
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
                      </div>
                  }
                </section>
              </>
            }
          </section>
        }

        {
          formChoice === 'quarter' &&
          <section className={`${styles[`dd-avblty__response__column-sect`]}`}>
            {
              quarterPreview && !isSubmited &&
              <QuarterPreview quarterPreview={quarterPreview} isSelected={isSelected} />
            }
            {
              quarter && isSubmited &&
              <div>
                <div>
                  <Heading as='h4' color='cream' font='fancy'>{`${quarterPreview.id} | ${quarterPreview.label}`}</Heading>
                </div>
                {
                  isLoading
                    ? <Loader />
                    : <>
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
                    </>
                }
              </div>
            }
          </section>
        }
      </div>
    </section>
  )
}
