import { useEffect, useState } from 'react';
import axios from "axios";
import { Model } from '../../model/Model';

export const useFetchProducts = (): Model[] => {
  const [products, setProducts] = useState<Model[]>([]);
  const url = "https://fakestoreapi.com/products";

  useEffect(() =>{
    const fetchData = async () => {
      try{
        const response = await axios.get(url);
        setProducts(response.data)
      } catch(error){
        console.error(error);
      }
    };
    fetchData()
  },[])

  return products;
}

export default useFetchProducts;
