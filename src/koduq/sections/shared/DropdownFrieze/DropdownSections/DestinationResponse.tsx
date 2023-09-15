import { Link } from "react-router-dom";
import { Heading, Loader } from "../../../../../design-system/components/atoms";

export const DestinationResponse = ({ destination, isLoading, closeDropdown }) => {
  
  
  return(
  <section className={styles['dd-avblty__response-destination']}>
    <img src={destination.images[0]} alt="" />
    <section className={styles['dd-avblty__response__column-sect']}>
      <div>
        <Heading as='h4' color='cream' font='fancy'>{destination.name}</Heading>
        <p>{destination.location}</p>
      </div>
      {
        isLoading
          ? <Loader />
          : <div>
            <p>Available quarter periods: </p>
            <ul className={styles['dd-avblty__response-destination-ul']}>
              {
                destination?.availability?.map((q, k) => (
                  <li key={k} onClick={closeDropdown}>
                    <Link openInNewTab={false} size='s' color="cream" href={destinationBaseUrl + destination.id}>
                      {`${q.id} | ${q.label}`}
                    </Link>
                  </li>
                ))
              }
            </ul>
          </div>
      }
    </section>
  </section>
)};
