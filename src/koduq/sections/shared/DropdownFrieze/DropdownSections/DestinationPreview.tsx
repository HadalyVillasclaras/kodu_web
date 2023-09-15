import { useEffect } from 'react'
import { Heading } from '../../../../../design-system/components/atoms'

type Props = {
  destinationPreview: any;
  isSelected: boolean;
}

export const DestinationPreview = ({ destinationPreview, isSelected }: Props) => {
  useEffect(() => {
  }, [isSelected])
  return (
    <>
      <div >
        <Heading as='h4' color='cream' font='fancy'>{destinationPreview.name}</Heading>
        <p>{destinationPreview.location}</p>
      </div>
      <i>{isSelected ? "Click check to see availability" : ""}</i>
    </>
  )
}