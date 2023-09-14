import React, { useEffect } from 'react'
import { Heading } from '../../../../design-system/components/atoms'
import styles from './AvailabilityDdSection.module.scss';

type Props = {
  destinationPreview: any;
  isSelected: boolean;
}

export const DestinationPreview = ({destinationPreview, isSelected}: Props) => {
  useEffect(() => {
  }, [isSelected])
  return (
    <>
      <img src={destinationPreview.img} alt="" />
      <section className={`${styles[`dd-avblty__response__clm-sect`]}`}>
        <div >
          <Heading as='h4' color='cream' font='fancy'>{destinationPreview.name}</Heading>
          <p>{destinationPreview.location}</p>
        </div>
        <span>{ isSelected ?  "Click check to see availability" : ""}</span>
      </section>
    </>
  )
}