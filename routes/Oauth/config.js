//setting up facebook app login info export

export const facebook = {
  clientID: '116007369029603',
  clientSecret: '0b2feb63e48353408a9d47e89e846921',
  callbackURL: 'http://10.0.2.2:8080/auth/facebook/callback',
  profileFields: ['id', 'name', 'displayName', 'picture', 'email'],
};
//setting up google app login info export
export const google = {
  clientID: '926648784780-tlbappl9j1fvosjsh9631oberieo7drs.apps.googleusercontent.com',
  clientSecret: 'xwEidtFX4NaJU-rg-uxFxUhA',
  callbackURL: 'http://10.0.2.2:8080/auth/google/callback'
};
