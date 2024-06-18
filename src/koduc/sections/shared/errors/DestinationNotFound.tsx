import { Heading, Link } from '../../../../design-system/components/atoms';

interface Props {
  destinationId?: string
}

export const DestinationNotFound = ({ destinationId }: Props) => {
  return (
    <>
      <Heading as="h4" color="green">
        {`Sorry, destination ${destinationId ? `with id "${destinationId}"` : ''} is not found.`}
      </Heading>
      <Link href='/' color='green'>
        {'< Go to home page'}
      </Link>
    </>
  );
};
