import  AsyncStorage  from "@react-native-async-storage/async-storage";

export const STORAGE_KEYS = {
   USER: '@USER',
    TYPE: '@TYPE'
};

export const setUserStorage = async (value) => {
    try{
        const jsonValue = JSON.stringify(value);
        // console.log('set jsonValue Patient', jsonValue);
        // console.log(typeof jsonValue);
        await AsyncStorage.setItem(STORAGE_KEYS.USER, jsonValue);
    }catch(err){
        console.log('error when set local storage');
    }
}


export const getUserStorage = async () =>{
    try{
        const jsonValue = await AsyncStorage.getItem(STORAGE_KEYS.USER);
        // console.log('get jsonValue Patient', jsonValue);
        return jsonValue !== null ? JSON.parse(jsonValue) : {} ;
    }catch(err) {
        if (__DEV__)
        console.log(`Error when get local storage`);
    }
};
export const setUserDoctorStorage = async value => {
  try {
    const jsonValue = JSON.stringify(value);
    // console.log('set jsonValue Patient', jsonValue);
    // console.log(typeof jsonValue);
    await AsyncStorage.setItem(STORAGE_KEYS.TYPE, jsonValue);
  } catch (err) {
    console.log('error when set local storage');
  }
};

export const getUserDoctorStorage = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem(STORAGE_KEYS.TYPE);
    // console.log('get jsonValue Doctor', jsonValue);
    return jsonValue !== null ? JSON.parse(jsonValue) : {};
  } catch (err) {
    if (__DEV__) {
      console.log('Error when get local storage');
    }
  }
};


export const cleanUserStorage = async () => {
    try{
        await AsyncStorage.multiRemove([
            STORAGE_KEYS.USER,
            STORAGE_KEYS.TYPE,
        ]);
    }catch(err){
        if(__DEV__){
            console.log('error clean user storage: ', err);
        }
    }
}