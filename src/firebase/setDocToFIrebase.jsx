import { setDoc, doc } from 'firebase/firestore';
import { db } from './firebase';

export const setDocToFirebase = (path, data) => {
    setDoc(doc(db,path),data,{merge:true}).then(console.log('setDocHiile'))
}