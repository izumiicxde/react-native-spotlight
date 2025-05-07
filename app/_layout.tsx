import InitialLayout from "@/components/initialLayout";
import { ClerkLoaded, ClerkProvider } from "@clerk/clerk-expo";
import { tokenCache } from "@clerk/clerk-expo/token-cache";
import React from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const publicKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY!;
if (!publicKey)
  throw new Error("Missing publishable key. please set expo public clerk key");

export default function RootLayout() {
  return (
    <ClerkProvider publishableKey={publicKey} tokenCache={tokenCache}>
      <ClerkLoaded>
        <SafeAreaProvider>
          <SafeAreaView style={{ flex: 1, backgroundColor: "#000" }}>
            <InitialLayout />
          </SafeAreaView>
        </SafeAreaProvider>
      </ClerkLoaded>
    </ClerkProvider>
  );
}
