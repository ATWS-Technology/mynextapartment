import {User, Vendor} from '../utils/Model';

export type AuthRoutes = {
  OnboardSlide: undefined;
  LogIn: undefined;
  CreateAccount: undefined;
  OTPVerification: {phone: string};
  VerificationSuccess: undefined;
  DeliveryAddress: undefined;
  CompleteAccountDetails: undefined;
  Home: undefined; // to be removed
};

export type HomeRoutes = {
  SharedNavigator: undefined;
};

export type SharedElementRoutes = {
  Home: undefined;
  AllRestaurants: undefined;
  Vendor: {vendor: Vendor};
  Tray: undefined;
  OrderSummary: undefined;
  Checkout: undefined;
  TrackOrder: undefined;
  DeliveryAddress: undefined;
  PaymentStatus: undefined;
  CompletionFeedback: undefined;
};

export type OrderRoutes = {
  Orders: undefined;
};

export type ProfileRoutes = {
  Profile: undefined;
  EditProfile: undefined;
  SavedAddresses: undefined;
  Wallet: undefined;
  FundWallet: undefined;
  Settings: undefined;
  RateApp: undefined;
};

export type TabRoutes = {
  HomeStack: undefined;
  OrderStack: undefined;
  ProfileStack: undefined;
};
