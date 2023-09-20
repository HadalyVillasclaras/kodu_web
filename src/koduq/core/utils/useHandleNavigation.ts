import { useNavigate } from "react-router-dom";

export function useHandleNavigation() {
  const navigate = useNavigate();

  return (event: React.MouseEvent<HTMLElement, MouseEvent>, link: string) => {
    event.preventDefault();

    if (link.startsWith("#")) {
      const targetElement = document.getElementById(link.substring(1));

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth"
        });
      } else {
        navigate('/');
      }
    } else {
      navigate(link);
    }
  };
}
