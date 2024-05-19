import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import AuthLayout from '../../components/AuthLayout';
import FormInput from '../../components/FormInput';
import {Button} from '../../components/common/Button';
import {COLORS} from '../../theme/theme';
import {hp} from '../../utils';
import utils from '../../utils/utils';

const ForgotPassword = () => {
  const [email, setEmail] = useState<string>('');
  const [emailError, setEmailError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = () => {
    console.log('email', email);
  };

  return (
    <AuthLayout
      title={'Forgotten Password?'}
      subTitle="Opps. It happens to the best of us. Input your email address to fix the issue."
      titleContainerStyle={{paddingTop: 20}}
      children={
        <>
          <View style={{flex: 1}}>
            <FormInput
              value={email}
              placeholder={'Email Address'}
              inputStyle={undefined}
              prependComponent={undefined}
              appendComponent={undefined}
              onChange={(value: React.SetStateAction<string>) => {
                setEmail(value);
                const emailCheck = utils.isValidEmail(value);
                if (emailCheck || value.length === 0) {
                  setEmailError('');
                } else {
                  setEmailError('Please enter a valid email');
                }
              }}
              onEndEditing={() => {}}
              onFocus={() => {}}
              secureTextEntry={undefined}
            />
            {emailError.length > 0 && (
              <Text style={{color: 'red', marginTop: 5}}>{emailError}</Text>
            )}
            <Button
              title="Submit"
              style={{
                backgroundColor: COLORS.purple,
                marginTop: hp(55),
              }}
              textStyle={{
                fontWeight: '700',
                color: COLORS.primaryBg,
              }}
              onPress={() => {
                setIsLoading(true);
                handleSubmit;
              }}
              isLoading={isLoading}
              prependComponent={undefined}
              appendComponent={undefined}
              disabled={!utils.isValidEmail(email)}
            />
          </View>
        </>
      }
    />
  );
};

export default ForgotPassword;

const styles = StyleSheet.create({});
