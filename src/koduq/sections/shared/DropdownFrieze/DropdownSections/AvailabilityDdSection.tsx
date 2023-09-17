import { useEffect, useState } from 'react';
import { Heading, Link, Loader } from '../../../../../design-system/components/atoms';
import styles from './AvailabilityDdSection.module.scss';
import { Quarter } from '../../../../core/common/quarters/domain/Quarter';
import { Destination } from '../../../../core/destination/domain/Destination';
import { QuarterPreview } from './QuarterPreview';
// import { AvailabilityQuarterForm } from '../../../../../design-system/components/molecules/AvailabilityForms/AvailabilityQuarterForm';
import {  AvailabilityForm,  QuarterAvailability } from '../../../../../design-system/components/molecules/AvailabilityForms/AvailabilityForm';
import { DestinationPreview } from './DestinationPreview';

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
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setDestination(null);
    setQuarter(null);
    setIsSubmited(false);
    setIsLoading(false);
  }, [destinationPreview, quarterPreview])

  useEffect(() => {
    setDestinationPreview(null);
    setQuarterPreview(null);
    setDestination(null);
    setQuarter(null);
    setIsSubmited(false);
    setIsLoading(false);
  }, [formChoice])

  useEffect(() => {
    if (isSubmited) {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
      }, 5000);
    }
  }, [isSubmited])
  console.log(quarterPreview);
  console.log(formChoice);

  return (
    <section className={`${styles[`dd-avblty`]}`}>
      <AvailabilityForm
        isSubmited={isSubmited}
        setIsSelected={setIsSelected}
        setIsSubmited={setIsSubmited}
        setDestination={setDestination}
        setQuarter={setQuarter}
        formType={formChoice}
        setDestinationPreview={setDestinationPreview}
        setQuarterPreview={setQuarterPreview}
      />
        {/* <AvailabilityQuarterForm
        isSubmited={isSubmited}
        setIsSelected={setIsSelected}
        setIsSubmited={setIsSubmited}
        setQuarter={setQuarter}
        setQuarterPreview={setQuarterPreview}
      /> */}

      <div className={`${styles[`dd-avblty__response`]}`}>
        {
          formChoice === 'destination' &&
          <section className={`${styles[`dd-avblty__response-destination`]}`}>
            {
              destinationPreview &&
              <img src={destinationPreview.img} alt="" />
            }
            <section className={`${styles[`dd-avblty__response__column-sect`]}`}>
              {destinationPreview && !isSubmited &&
                <DestinationPreview destinationPreview={destinationPreview} isSelected={isSelected} />
              }
              {destination && isSubmited &&
                <>
                  <div>
                    <Heading as='h4' color='cream' font='fancy'>{destination.name}</Heading>
                    <p>{destination.location}</p>
                  </div>
                  <div className={`${styles[`dd-avblty__response__submitted`]}`}>
                    {
                      isLoading
                        ? <Loader color='cream' />
                        : <div>
                          <p>Available quarter periods: </p>
                          <ul className={`${styles[`dd-avblty__response-destination-ul`]}`}>
                            {
                              destination?.availability?.map((q: Quarter, k: number) => {
                                return (
                                  <li key={k} onClick={closeDropdown}>
                                    <Link openInNewTab={false} size='m' color="cream" href={destinationBaseUrl + destination.id}>
                                      {`+ ${q.id} | ${q.label}`}
                                    </Link>
                                  </li>)
                              })
                            }
                          </ul>
                        </div>
                    }
                  </div>
                </>
              }
            </section>
          </section>
        }

        {
          formChoice === 'quarter' &&
          <section className={`${styles[`dd-avblty__response__column-sect`]}`}>
            {quarterPreview &&
              <QuarterPreview quarterPreview={quarterPreview} isSelected={isSelected} />
            }
            {quarter && isSubmited &&
              <div className={`${styles[`dd-avblty__response__submitted`]}`}>
                {
                  isLoading
                    ? <Loader />
                    : <div>
                      <p>Available destinations in selected quarter: </p>
                      <ul>
                        {
                          quarter.availableDestinations.map((destination: Destination, k: number) => {
                            return (
                              <li key={k} onClick={closeDropdown}>
                                <Link openInNewTab={false} size='m' color="cream" href={destinationBaseUrl + destination.id}>
                                  + {destination.name}
                                </Link>
                              </li>)
                          })
                        }
                      </ul>
                    </div>
                }
              </div>
            }
          </section>
        }
      </div>
    </section>
  )
}
