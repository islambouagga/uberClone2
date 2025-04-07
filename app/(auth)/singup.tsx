import { ScrollView, Image, View, Text } from "react-native";
import { icons, images } from "@/constants";
import InputField from "@/components/InputField";
import { useState } from "react";
import CustomButton from "@/components/customButton";
import { Link } from "expo-router";
import "../../global.css";
const Singup = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });
  const onSingUpPress = async () => {};

  return (
    <ScrollView className="flex-1 bg-white">
      <View className="flex-1 bg-white">
        <View className="relative w-full h-[250px]">
          <Image source={images.signUpCar} className="z-0 w-full h-[250px]" />
          <Text className="text-2xl text-black font-JakartaSemiBold absolute bottom-5 left-5">
            Create your Account
          </Text>
        </View>
        <View className="p-5">
          <InputField
            lable="Name"
            placeholder="entre your name"
            icon={icons.person}
            value={form.name}
            onChangeText={(value) => setForm({ ...form, name: value })}
          />
          <InputField
            lable="Email"
            placeholder="entre your Email"
            icon={icons.email}
            value={form.email}
            onChangeText={(value) => setForm({ ...form, email: value })}
          />
          <InputField
            lable="Password"
            placeholder="entre your Password"
            icon={icons.lock}
            secureTextEntry={true}
            value={form.password}
            onChangeText={(value) => setForm({ ...form, password: value })}
          />
          <CustomButton
            title="SingUp"
            onPress={onSingUpPress}
            className="mt-6"
          />
          {/* OAUTH */}
          <Link
            href="/singin"
            className="text-lg text-center text-general-200 mt-10"
          >
            <Text>Already have an account ? </Text>
            <Text className="text-primary-500">log IN </Text>
          </Link>
        </View>
      </View>
    </ScrollView>
  );
};

export default Singup;
