import { useState, useEffect } from "react";
import { Button, IconButton } from "../atoms"
import styles from "./Cookies.module.scss";
import { setCookie } from "../../shared/Cookies/setCookie";
import { getCookie } from "../../shared/Cookies/getCookie";

export const Cookies = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleAccept = () => {
    setCookie("cookie", "accepted", 1);
    setIsOpen(false);
  }

  const handleRefuse = () => {
    setCookie("cookie", "rejected", 1);
    setIsOpen(false);
  }

  useEffect(() => {
    const cookie = getCookie("cookie");
    if (cookie !== "accepted") {
      setIsOpen(true);
    }
  }, []);

  return (
    isOpen 
    ? 
      <section className={styles.cookies}>
        <span className={styles.cookies__close}>
          <IconButton
            icon='x'
            color='brown'
            ariaLabel="Close"
            size="s"
            onClick={() => setIsOpen(false)}
          />
        </span>
        <p className={styles.cookies__text}>We use cookies to improve <br />
          the user experience</p>
        <div className={styles.cookies__btns}>
          <Button color="cream" variant="underline" text="I refuse" onClick={handleRefuse} />
          <Button color="cream" variant="underline" text="It's ok for me" onClick={handleAccept} />
        </div>
      </section>
    : <></>
  )
}