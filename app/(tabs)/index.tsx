import {Text, StatusBar, View} from 'react-native';
import '../../global.css'

import {SafeAreaView} from "react-native-safe-area-context";

export default function HomeScreen() {
    return (
        <SafeAreaView className="flex-1 items-center justify-center bg-white">
            <Text className={"text-red-700"}> Uber Clone </Text>
            <StatusBar style="auto"/>
        </SafeAreaView>
    );
}

