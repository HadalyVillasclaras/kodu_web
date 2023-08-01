import { useState } from "react";
import { Button } from "../atoms/index"
import styles from "./Cookies.module.scss";
import { IconButton } from "../atoms/IconButton";

export const Cookies = () => {
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => {
    setIsOpen(false);
  }

  return (
    isOpen && (
      <section className={styles.cookies}>
        <span className={styles.cookies__close}>
          <IconButton
            icon='x'
            color='brown'
            ariaLabel="Close"
            size="small"
            onClick={handleClose}
          />
        </span>
        <p className={styles.cookies__text}>We use cookies to improve <br />
          the user experience</p>
        <div className={styles.cookies__btns}>
          <Button color="green" variant="underline" text="I refuse" onClick={handleClose} />
          <Button color="green" variant="underline" text="It's ok for me" onClick={handleClose} />
        </div>
        {/* Alert mesg ! this is a prototype. No data will be stored in your browser */}
      </section>
    )
  )
}