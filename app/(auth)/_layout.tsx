import { Stack } from "expo-router";
import "../../global.css";
import singup from "@/app/(auth)/singup";
import singin from "@/app/(auth)/singin";
const Layout = () => {
  return (
    <Stack>
      <Stack.Screen name="welcome" options={{ headerShown: false }} />
      <Stack.Screen name="singup" options={{ headerShown: false }} />
      <Stack.Screen name="singin" options={{ headerShown: false }} />
    </Stack>
  );
};
export default Layout;
