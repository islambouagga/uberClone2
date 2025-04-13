import { SignedIn, SignedOut, useUser } from "@clerk/clerk-expo";
import { Text, View } from "react-native";
import { Link } from "expo-router";

export default function Page() {
  const { user } = useUser();
  return (
    <View>
      <SignedIn>
        <Text>Hello {user?.emailAddresses[0].emailAddress}</Text>
      </SignedIn>
      <SignedOut>
        <Link href="/singin">
          <Text>Sing In</Text>
        </Link>
        <Link href="/singup">
          <Text>Sing Up</Text>
        </Link>
      </SignedOut>
    </View>
  );
}
