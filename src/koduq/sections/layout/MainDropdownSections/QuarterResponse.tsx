import { Link } from "react-router-dom";
import { Heading, Loader } from "../../../../design-system/components/atoms";

export const QuarterResponse = ({ quarter, quarterPreview, isLoading, closeDropdown }) => {
  
  return (
  <section className={styles['dd-avblty__response__column-sect']}>
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
              quarter.availableDestinations.map((destination, k) => (
                <li key={k} onClick={closeDropdown}>
                  <Link openInNewTab={false} size='s' color="cream" href={destinationBaseUrl + destination.id}>
                    {destination.name}
                  </Link>
                </li>
              ))
            }
          </ul>
        </>
    }
  </section>
)};