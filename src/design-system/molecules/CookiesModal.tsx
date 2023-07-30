import { Button } from "../atoms/Button"
import { Icon } from "../atoms/Icon";
import styles from "./CookiesModal.module.scss";

export const CookiesModal = () => {
  return (
    <section className={styles["cookies"]}>
      <p>We use cookies to improve <br />
        the user experience</p>
      <div>
        <Button variant="underline" text="I refuse" />
        <Button variant="underline" text="It's ok for me" />
      </div>
    </section>
  )
}