import { useLocation } from "react-router-dom";
import { Heading, IconButton } from "../../design-system/components/atoms"
import { Section } from "../../design-system/components/objects"

export const NotFoundPage = () => {
  const location = useLocation();

  return (
    <Section size="big" bgColor="green">
      <Heading font="fancy" as="h1" color="brown">Sorry, page not found</Heading>
      <div style={{ margin: "4rem 0" }}>
        <Heading as="h2" color="brown">Error | 404</Heading>
        <Heading as="h4" color="brown">The requested URL <code>{location.pathname}</code> was not found</Heading>
      </div>
      <a href="/">
        <IconButton 
          text="Go to home page" 
          ariaLabel="Link to home page" 
          icon="arrowLeft" 
          color="cream" 
          size="s"
        />
      </a>
    </Section>
  )
}