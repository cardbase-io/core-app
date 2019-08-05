
enum type {
  PRIVACY ,
  TERMS_AND_CONDITIONS
}

//website subscription on 2017/03/01 expires 2018/03/01
class Privacy {
  type: type.PRIVACY;
  description?: string;
  on: string;
  expires: string;
}

//website subscription on 2017/03/01 expires 2018/03/01
class Terms {
  type: type.TERMS_AND_CONDITIONS;
  description?: string;
  on: string;
  expires: string;
}

enum Channel {
  EMAIL,
  SMS,
  PUSH,
  PHONE,
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

//{'Product Update', true, '', 'SMS'}
class Consent {
  type: string;
  isAllowed: boolean;
  description?: string;
  channel: Channel;
}

//TODO: what kind of user related data we want to gather. lastSignedin or all historical signedins
// from Google User Data Model! below fields are available
// photoURL: https://lh4.googleusercontent.com/-y-gk_Gx_Uag/AAAAAAAAAAI/AAAAAAAATpU/S1Qj4MFizDE/photo.jpg
// emailVerified: true
// isAnonymous: false
// lastLoginAt: "1564994271436"
export class User {
  uid: string; //UUID
  displayName: string;
  // TODO: calculate from phone number
  //  in here or in a big data job?
  country?: string;
  phoneNumber: string;
  email: string;

  // created?: string;
  // signedIn?: string;
  //
  // privacy?: Privacy[]; //historical
  // terms?: Terms[]; //historical
  // optIn?: Consent[]; //by channels
}
