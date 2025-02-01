import { TouchableOpacity, Text } from "react-native";


export default function CustomButton({
  title,
  handlePress,
  textStyles = "",
  containerStyles = "",
  isLoading = false,
}) {
  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.7}
      className={`bg-secondary rounded-lg py-6 items-center justify-center ${containerStyles} ${isLoading ? 'opacity-50' : ''}`}
      disabled={isLoading}
    >
      <Text className={`text-white font-inter text-lg ${textStyles}`}>{title}</Text>
    </TouchableOpacity>
  )

}