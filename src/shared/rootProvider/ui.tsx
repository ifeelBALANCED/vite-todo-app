import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import { FC, memo, ReactChildren, ReactNode, StrictMode } from "react";
import { Provider } from "react-redux";

import { store } from "@/app/store/store";
import theme from "@/theme";

type Props = {
  children: ReactNode | ReactChildren;
};

const RootProvider: FC<Props> = ({ children }: Props) => {
  return (
    <StrictMode>
      <Provider store={store}>
        <ChakraProvider theme={theme}>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          {children}
        </ChakraProvider>
      </Provider>
    </StrictMode>
  );
};

export default memo(RootProvider);
