
enum Channel {
  EMAIL,
  SMS,
  PUSH,
  PHONE,
  WEB
}

/*
- MANDATORY_UPDATES = regarding to contract to provide services.
 */
enum ConsentType {
  MANDATORY_UPDATES ,
  MARKETING_COMMUNICATION,
  LOCATION_TRACKING,
  STAY_SIGNED_IN
  // TODO: data processing related things
}

// {'Product Update', true, '', 'SMS'}
class Consent {
  type: ConsentType;
  isAllowed: boolean;
  description?: string;
  channel: Channel;
}

// TODO: what kind of user related data we want to gather. lastSignedin or all historical signedins
// TODO: calculate from phone number in here or in a big data job or firebase function?
export class User {
  uid: string;             // uuid
  displayName: string;
  email: string;
  phoneNumber: string;     // from google or sign-in-w/phone
  photoURL?: string;       // from google
  emailVerified?: boolean; // from google
  isAnonymous?: boolean;   // from google
  lastLoginAt?: number;    // from google

  country?: string;
  created?: string;

  termsPrivacy?: string[]; // website subscription on 2017/03/01 expires 2018/03/01
  optIn?: Consent[];       // by channels
}
