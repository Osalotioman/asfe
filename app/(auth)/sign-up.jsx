import { useState, useCallback, memo } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomButton from '../../components/CustomButton';
import FormField from '../../components/FormField';
import images from '../../constants/images';
import { Link } from 'expo-router';
import ManualCapture from '../../components/ManualCapture';

// Memoized progress bar component
const ProgressBar = memo(({ step, totalSteps }) => (
  <View className="w-full mb-8">
    <View className="h-1 bg-gray-200 rounded-3xl">
      <View 
        className="h-full bg-blue-500 rounded-3xl transition-all"
        style={{ width: `${(step / totalSteps) * 100}%` }}
      />
    </View>
    <View className="flex-row w-full justify-around absolute top-[-16px]">
      {[...Array(totalSteps)].map((_, index) => (
        <View 
          key={index}
          className={`w-8 h-8 rounded-full border-4 p-4 border-white flex items-center justify-center
            ${step > index ? 'bg-blue-500' : 'bg-gray-200'}`}
        >
          <Text className={step > index ? 'text-white' : 'text-gray-600'}>
            {index + 1}
          </Text>
        </View>
      ))}
    </View>
  </View>
));

// Memoized form steps
const PersonalInfoStep = memo(({ form, setForm }) => (
  <>
    <Text className="text-xl font-semibold mb-6">Personal Information</Text>
    <FormField
      value={form.fullName}
      placeholder="Enter your full name"
      label="Full Name"
      handleChangeText={(text) => setForm(prev => ({ ...prev, fullName: text }))}
      otherStyles="mb-4"
    />
    <FormField
      value={form.gender}
      placeholder="Select your gender"
      label="Gender"
      selectOptions={[
        { label: 'Select gender', value: '' },
        { label: 'Male', value: 'male' },
        { label: 'Female', value: 'female' }
      ]}
      handleChangeText={(text) => setForm(prev => ({ ...prev, gender: text }))}
      otherStyles="mb-4"
    />
  </>
));

const AcademicInfoStep = memo(({ form, setForm }) => (
  <>
    <Text className="text-xl font-semibold mb-6">Academic Information</Text>
    <FormField
      value={form.faculty}
      placeholder="Enter your faculty"
      label="Faculty"
      handleChangeText={(text) => setForm(prev => ({ ...prev, faculty: text }))}
      otherStyles="mb-4"
    />
    <FormField
      value={form.department}
      placeholder="Enter your department"
      label="Department"
      handleChangeText={(text) => setForm(prev => ({ ...prev, department: text }))}
      otherStyles="mb-4"
    />
    <FormField
      value={form.matricNumber}
      placeholder="Enter your matric number"
      label="Matric Number"
      handleChangeText={(text) => setForm(prev => ({ ...prev, matricNumber: text }))}
      otherStyles="mb-4"
    />
  </>
));

const EmailVerificationStep = memo(({ form, setForm, validateEmail }) => (
  <>
    <Text className="text-xl font-semibold mb-6">Email Verification</Text>
    <FormField
      value={form.email}
      placeholder="Enter your institutional email"
      label="Email (@uniben.edu)"
      handleChangeText={(text) => setForm(prev => ({ ...prev, email: text }))}
      otherStyles="mb-4"
    />
    {validateEmail(form.email) && (
      <FormField
        value={form.otp}
        placeholder="Enter OTP sent to your email"
        label="OTP"
        handleChangeText={(text) => setForm(prev => ({ ...prev, otp: text }))}
        otherStyles="mb-4"
      />
    )}
  </>
));

const PasswordStep = memo(({ form, setForm }) => (
  <>
    <Text className="text-xl font-semibold mb-6">Set Password</Text>
    <FormField
      value={form.password}
      placeholder="Enter your password"
      label="Password"
      secureTextEntry={true}
      handleChangeText={(text) => setForm(prev => ({ ...prev, password: text }))}
      otherStyles="mb-4"
    />
    <FormField
      value={form.confirmPassword}
      placeholder="Confirm your password"
      label="Confirm Password"
      secureTextEntry={true}
      handleChangeText={(text) => setForm(prev => ({ ...prev, confirmPassword: text }))}
      otherStyles="mb-4"
    />
  </>
));

const SignUpWizard = () => {
  const [step, setStep] = useState(1);
  
  // Split form state
  const [personalInfo, setPersonalInfo] = useState({ fullName: "", gender: "" });
  const [academicInfo, setAcademicInfo] = useState({ 
    faculty: "", 
    department: "", 
    matricNumber: "" 
  });
  const [authInfo, setAuthInfo] = useState({ email: "", otp: "" });
  const [passwordInfo, setPasswordInfo] = useState({ 
    password: "", 
    confirmPassword: "" 
  });
  const [facialInfo, setFacialInfo] = useState({ facialScan: null });

  // Memoized validation functions
  const validateEmail = useCallback((email) => {
    const emailRegex = /^[^@]+@([a-zA-Z0-9-]+\.)*uniben\.edu$/i;
    return emailRegex.test(email);
  }, []);

  const validatePasswordMatch = useCallback(() => {
    return passwordInfo.password === passwordInfo.confirmPassword;
  }, [passwordInfo]);

  // Memoized handlers
  const handleNext = useCallback(() => {
    const stepsValidation = [
      () => personalInfo.fullName && personalInfo.gender,
      () => academicInfo.faculty && academicInfo.department && academicInfo.matricNumber,
      () => authInfo.email && validateEmail(authInfo.email),
      () => passwordInfo.password && passwordInfo.confirmPassword && validatePasswordMatch()
    ];

    // if (step <= stepsValidation.length && !stepsValidation[step - 1]()) {
    //   Alert.alert('Please fill in all required fields');
    //   return;
    // }

    if (step < 5) {
      setStep(prev => prev + 1);
    } else {
      const formData = {
        ...personalInfo,
        ...academicInfo,
        ...authInfo,
        ...passwordInfo,
        ...facialInfo,
      };
      console.log('Form submitted:', formData);
    }
  }, [step, personalInfo, academicInfo, authInfo, passwordInfo, facialInfo]);


  const handleBack = useCallback(() => {
    if (step > 1) {
      setStep(prev => prev - 1);
    }
  }, [step]);

  // Render current step
  const renderCurrentStep = useCallback(() => {
    switch(step) {
      case 1:
        return <PersonalInfoStep form={personalInfo} setForm={setPersonalInfo} />;
      case 2:
        return <AcademicInfoStep form={academicInfo} setForm={setAcademicInfo} />;
      case 3:
        return (
          <EmailVerificationStep 
            form={authInfo} 
            setForm={setAuthInfo}
            validateEmail={validateEmail}
          />
        );
      case 4:
        return <PasswordStep form={passwordInfo} setForm={setPasswordInfo} />;
      case 5:
        return (
          <ManualCapture
            onCapture={(photo) => setFacialInfo(prev => ({ ...prev, facialScan: photo }))}
          />
        );
      default:
        return null;
    }
  }, [
    step, 
    personalInfo, 
    academicInfo, 
    authInfo, 
    passwordInfo, 
    facialInfo,
    validateEmail
  ]);

  return (
    <SafeAreaView className="bg-white h-full">
      <ScrollView>
        <View className="w-full px-5 pt-20">
          <Image
            source={images.dsars_logo}
            resizeMode="contain"
            style={{
              width: 80,
              height: 80,
              marginBottom: 24,
            }}
          />
          <ProgressBar step={step} totalSteps={5} />
          {renderCurrentStep()}
          <View className="flex-row justify-between mt-8">
            { step !== 1 && <CustomButton
              title="Back"
              handlePress={handleBack}
              containerStyles="p-6"
            /> }
            <CustomButton
              title={step === 5 ? 'Submit' : 'Next'}
              handlePress={handleNext}
              containerStyles="p-6"
            />
          </View>
          
          <View className="mt-5 flex flex-row justify-between">
              <Text className="text-md">Already have an account?</Text>
              <Link href="/sign-in">
                  <Text className="text-md text-blue-500">Sign In</Text>
              </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUpWizard;
