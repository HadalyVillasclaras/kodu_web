import { Heading, Link } from '../../design-system/components/atoms';
import { Section } from '../../design-system/components/objects';

export const NotFoundPage = () => {
  // const location = useLocation();

  return (
    <Section size="big" bgColor="green">
      <Heading font="fancy" as="h1" color="brown">Sorry, an error ocurred</Heading>
      <div style={{ margin: '4rem 0' }}>
        <Heading as="h2" color="brown">Error</Heading>
      </div>
      <Link color='cream' href='/'> Go to home page </Link>
    </Section>
  );
};
