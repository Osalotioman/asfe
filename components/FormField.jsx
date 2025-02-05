import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { useState } from "react";
import { Ionicons } from "@expo/vector-icons";

export default function FormField({ label, value, placeholder, handleChangeText, otherStyles, ...props }) {
  const [showPassword, setShowPassword] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View className={`space-y-2 ${otherStyles}`}>
      <Text className="text-base text-black-100 font-inter">{label}</Text>
      <View
        className={`border-2 w-full h-16 px-4 bg-transparent rounded-2xl items-center flex-row ${
          isFocused ? "border-secondary" : "border-gray-200"
        }`}
      >
        <TextInput
          className="flex-1 text-black-100 font-inter text-base font-semibold outline-none"
          value={value}
          placeholder={placeholder}
          placeholderTextColor="#ccc"
          onChangeText={handleChangeText}
          secureTextEntry={props.secureTextEntry && !showPassword}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
        {props.secureTextEntry && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Ionicons
              name={showPassword ? "eye-off" : "eye"}
              size={24}
              color="#333"
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}