import { Portal } from "components";
import { TargetPortal } from "config";
import { ToastContainer } from "react-toastify";
import { getTheme, useAppSelector } from "store";

export const Toast = () => {
  const { theme } = useAppSelector(getTheme);
  return (
    <Portal target={TargetPortal.TOAST}>
      <ToastContainer
        position="bottom-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover={false}
        theme={theme}
      />
    </Portal>
  );
};
