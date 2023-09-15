import React, { useEffect } from 'react'
import { Heading } from '../../../../../design-system/components/atoms'
import styles from './AvailabilityDdSection.module.scss';

type Props = {
  quarterPreview: any;
  isSelected: boolean;
}

export const QuarterPreview = ({quarterPreview, isSelected}: Props) => {
  useEffect(() => {
  }, [isSelected]);

  return (
      <section className={`${styles[`dd-avblty__response__column-sect`]}`}>
          <Heading as='h4' color='cream' font='fancy'>{`${quarterPreview.id} | ${quarterPreview.label}`}</Heading>

        { isSelected ? <i>Click the check button to see available destinations</i> : <></>}
      </section>
  )
}