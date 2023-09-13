import { Heading } from '../../../design-system/components/atoms'

type Props = {
  destinationId?: string;
}

export const DestinationNotFound = ({ destinationId }: Props) => {
  return (
    <>
      <Heading as="h4" color="green">
        {`Sorry, destination ${destinationId ? `with id "${destinationId}"` : ''} is not found.`}
      </Heading>
      <a href="/" style={{ marginTop: "1rem" }}> Go to home page </a>
    </>
  )
}