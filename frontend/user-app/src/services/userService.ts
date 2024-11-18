import axios from 'axios';

interface SignInData {
  phoneNumber: string;
  password: string;
}

interface SignUpData {
  phoneNumber: string;
  password: string;
}

export const signIn = async (data: SignInData) => {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_BASE_URL}/user/signin`,
      data
    );
    return response.data;
  } catch (error: any) {
    throw error.response?.data || 'Sign-in failed. Please try again.';
  }
};

export const signUp = async (data: SignUpData) => {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_BASE_URL}/user/signup`,
      data
    );
    return response.data;
  } catch (error: any) {
    throw error.response?.data || 'Sign-up failed. Please try again.';
  }
};
