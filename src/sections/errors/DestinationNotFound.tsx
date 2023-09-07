import { Heading, IconButton } from '../../design-system/atoms'

type Props = {
  destinationId?: string;
}

export const DestinationNotFound = ({ destinationId }: Props) => {
  return (
    <>
      <Heading as="h4" color="green">
        {`Sorry, destination ${destinationId ? `with id "${destinationId}"` : ''} is not found.`}
      </Heading>
      <a href="/" style={{ marginTop: "1rem" }}>
        <IconButton
          text="Go to home page"
          ariaLabel="Link to home page"
          icon="arrowLeft"
          color="brown"
          size="m"
        />
      </a>
    </>
  )
}