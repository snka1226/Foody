
import { uploadBytes, ref ,getDownloadURL} from 'firebase/storage';
import {storage} from "../firebase/firebase"
import { setDocToFirebase } from './setDocToFIrebase';
export const uploadImageToFirebase = async (
  foodName,
  file,
  ) => {
    const storageRef = ref(storage, `foods/${foodName}`);
    await uploadBytes(storageRef, file).then(async (snapshot) => {
      await getDownloadURL(snapshot.ref).then(async (url) => {
        await setDocToFirebase(`foods/${foodName}`, {
          img: url,
        })
      });
    });
  };
  // foodsDatas.map(el => {
      
  //   return(
  //   <>
  //     <h1>{el.foodName}</h1>
  //   <img src={el.img}/>
  //     </>
  //   )
  //   })