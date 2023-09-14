import React, { useEffect } from 'react'
import { Heading } from '../../../../design-system/components/atoms'
import styles from './AvailabilityDdSection.module.scss';

type Props = {
  quarterPreview: any;
  isSelected: boolean;
}

export const QuarterPreview = ({quarterPreview, isSelected}: Props) => {
  useEffect(() => {
  }, [isSelected]);

  return (
    <>
      <img src={quarterPreview.img} alt="" />
      <section className={`${styles[`dd-avblty__response__clm-sect`]}`}>
        <div >
          <Heading as='h4' color='cream' font='fancy'>{`${quarterPreview.id} | ${quarterPreview.label}`}</Heading>
        </div>
        <span>{ isSelected ?  "Click check to see availability" : ""}</span>
      </section>
    </>
  )
}