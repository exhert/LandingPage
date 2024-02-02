import { extendTheme } from "@chakra-ui/react";
import { CardComponent } from "./components/card";
import { buttonStyles } from "./components/button"
import { inputStyles } from "./components/input";
import { textareaStyles } from "./components/textArea";
import { linkStyles } from "./components/link";
import { breakpoints } from "./foundations/breakpionts";
import { globalStyles } from "./styles";

export default extendTheme(
  { breakpoints },
  globalStyles,
  buttonStyles,
  linkStyles,
  inputStyles,
  textareaStyles,
  CardComponent
);
