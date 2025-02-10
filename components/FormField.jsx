import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { useState } from "react";
import { Ionicons } from "@expo/vector-icons";

export default function FormField({ label, value, placeholder, handleChangeText, otherStyles, selectOptions, ...props }) {
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
        {selectOptions ? (
            <Picker
              selectedValue={value}
              onValueChange={(itemValue) => handleChangeText(itemValue)}
              className="h-full w-full text-black-100 font-inter text-base font-semibold outline-none bg-transparent"
              style={{
                height: "100%",
                width: "100%",
                color: "#333",
                backgroundColor: "transparent",
                outline: "none",
                fontFamily: "Inter",
                fontWeight: "600",
              }}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
            >
              {selectOptions.map((option) => (
                <Picker.Item key={option.value} label={option.label} value={option.value} />
              ))}
            </Picker>
        ) : (
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
        )}
        {props.secureTextEntry && !selectOptions && (
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
