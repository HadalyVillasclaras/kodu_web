import { Box } from "@chakra-ui/react";
import { Link, useMatches } from "react-router-dom";
import "./breadcrumbs.css";

interface MatchInterface{
    // route id
    id: string,
    // the portion of the URL the route matched
    pathname: string,
    // the data from the loader
    data: any,
    // the parsed params from the URL
    params: object,
    // the <Route handle> with any app specific data
    handle: any,
}

export const Breadcrumbs = () => {
  const matches = useMatches();
  const crumbs = matches.filter((match: MatchInterface) => Boolean(match.handle?.crumb)) //elimina los que no tienen handle/crumb
  const breadcumbs:{name: string, path: string}[] = [];

  crumbs.map((crumb: MatchInterface) => {
    if(crumb.handle!.crumb().includes('Id')){

      const paramsArray = Object.entries(crumb.params);
      const [,id] = paramsArray[0];
      crumb.handle!.idToShow = `ID. ${id}`;

      breadcumbs.push({
        name: `ID. ${id}`,
        path: crumb.pathname
      })
    } else {
      breadcumbs.push({
        name: crumb.handle!.crumb(),
        path: crumb.pathname
      })
    }
  });
  
  return (
    <Box as="span" id="breadcrumbs">
      {breadcumbs.map((crumb, index: number) => {
        if (index + 1 === breadcumbs.length) {
          return (
            <span key={index}>{crumb.name}</span>)
        } else {
          return (
            <span key={index}><Link to={crumb.path}>{crumb.name}</Link></span>
          )
        }
      })}
    </Box>
  );
};
