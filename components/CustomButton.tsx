import { TouchableOpacity, Text } from "react-native";

interface CustomButtonProps {
  title: string; // Title text for the button
  handlePress: () => void; // Function to handle button press
  textStyles?: string; // Optional text styling (Tailwind classes)
  containerStyles?: string; // Optional container styling (Tailwind classes)
  isLoading?: boolean; // Optional loading state
}

export default function CustomButton({
  title,
  handlePress,
  textStyles = "",
  containerStyles = "",
  isLoading = false,
}: CustomButtonProps) {
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