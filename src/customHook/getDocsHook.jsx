

import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase/firebase";



export const useGetDocsFromFireBase = (collectionName) => {


    let [data, setDatas] = useState([]);
    
    const getData = async () => {
      setDatas(data=[])
    try {
        const foodsDatas = await getDocs(collection(db, collectionName));
        foodsDatas.forEach(food => {
            setDatas((prevVal) => {
                let prevValACopy = prevVal;
                prevValACopy = [...prevValACopy, food.data()];
                return (prevVal = prevValACopy);
              });
        })
    } catch (error) {}
  };

  useEffect(() => {
    getData();
  }, []);
  return data;
};