import { useFonts } from "@use-expo/font";

export default function loadFonts() {
    return useFonts({
        "RobotoSlab Regular": require('../assets/fonts/RobotoSlab-Regular.ttf')
    });
}