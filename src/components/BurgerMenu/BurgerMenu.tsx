import { useToogle } from "hooks";
import { Background, Burger, Menu, MenuHeader, StyledBurgerMenu } from "./styles";
import { BurgerIcon, CrossIcon } from "assets";
import { MenuNav, Portal, Title } from "components";
import { TargetPortal } from "config";
import { AnimatePresence } from "framer-motion";
import { memo } from "react";

export const BurgerMenu = memo(() => {
  const [isActive, toogleBurger] = useToogle();
  const handleCross = () => toogleBurger();
  const handleBackground = () => toogleBurger();
  return (
    <>
      <Burger onClick={toogleBurger}>{isActive ? <CrossIcon /> : <BurgerIcon />}</Burger>
      <AnimatePresence>
        {isActive && (
          <Portal target={TargetPortal.BURGER_MENU}>
            <StyledBurgerMenu>
              <Background
                onClick={handleBackground}
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                exit={{ opacity: 0 }}
                transition={{ ease: "easeInOut" }}
              />
              <Menu
                initial={{ x: 1000, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ ease: "easeInOut" }}
                exit={{ x: 1000, opacity: 0 }}
              >
                <MenuHeader>
                  <Title variant={"h3"} text={"Menu"} />
                  <CrossIcon onClick={handleCross} />
                </MenuHeader>
                <MenuNav burger={true} />
              </Menu>
            </StyledBurgerMenu>
          </Portal>
        )}
      </AnimatePresence>
    </>
  );
});
