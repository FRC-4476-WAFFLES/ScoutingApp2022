import { AppLoading } from 'expo';

import loadFonts from "./src/styles/typography";
import AppStack from "./src/navigation/AppStack";

export default function App() {
  return AppStack();
}