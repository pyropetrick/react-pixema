import { useToogle } from "hooks";
import { Background, Burger, Menu, MenuHeader, StyledBurgerMenu } from "./styles";
import { BurgerIcon, CrossIcon } from "assets";
import { MenuNav, Portal, Title } from "components";
import { TargetPortal } from "config";

export const BurgerMenu = () => {
  const [isActive, toogleBurger] = useToogle();
  const handleCross = () => toogleBurger();
  const handleBackground = () => toogleBurger();
  return (
    <>
      <Burger onClick={toogleBurger}>{isActive ? <CrossIcon /> : <BurgerIcon />}</Burger>
      {isActive && (
        <Portal target={TargetPortal.BURGER_MENU}>
          <StyledBurgerMenu>
            <Background onClick={handleBackground} />
            <Menu>
              <MenuHeader>
                <Title variant={"h3"} text={"Menu"} />
                <CrossIcon onClick={handleCross} />
              </MenuHeader>
              <MenuNav />
            </Menu>
          </StyledBurgerMenu>
        </Portal>
      )}
    </>
  );
};
