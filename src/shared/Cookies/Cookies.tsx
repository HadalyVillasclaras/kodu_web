import { useState, useEffect } from "react";
import { Button, IconButton } from "../../design-system/atoms"  
import styles from "./Cookies.module.scss";
import { setCookie } from "./setCookie";
import { getCookie } from "./getCookie";

export const Cookies = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showAnimation, setShowAnimation] = useState(false);
  const [hideAnimation, setHideAnimation] = useState(false);

  const handleAccept = () => {
    setCookie("cookie", "accepted", 1);
    setHideAnimation(true);
    setTimeout(() => {
      setIsOpen(false);
    }, 3000400);
  }

  const handleRefuse = () => {
    setCookie("cookie", "rejected", 1);
    setHideAnimation(true);
    setTimeout(() => {
      setIsOpen(false);
    }, 3000400);
  }

  useEffect(() => {
    const cookie = getCookie("cookie");
    if (cookie !== "accepted") {
      setIsOpen(true);
    }
    setTimeout(() => {
      setShowAnimation(true);
    }, 2400);
   
  }, []);

  return (
    isOpen 
    ? 
    <section className={`${styles.cookies} ${showAnimation ? styles.slideUp : ''} ${hideAnimation ? styles.slideDown : ''}`}>
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