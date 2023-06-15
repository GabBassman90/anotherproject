import { useEffect, useState } from "react";
import { Model } from "../../model/Model";

    //se products risulta undefined o perché la chiamata API non è andata a buon fine

export const useFilters = (products=[] as Model[]) =>{

    const [filteredProducts, setFilteredProducts] = useState<Model[]>(products);
    const [nameFilter, setNameFilter] = useState<string>('');
    const [priceFilter, setPriceFilter] = useState<string>('');

  useEffect(() =>{
    setFilteredProducts(products)
  },[products])

    //passo il target value e lo setto nel JSX
    const handleNameFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setNameFilter(e.target.value);
    };
  
    const handlePriceFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setPriceFilter(e.target.value);
    };

    const resetFilter = () => {

      setFilteredProducts(products);
    };
  
    const handleFilterSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      let filtered: Model[] = [...products];
      if (nameFilter) {
        filtered = filtered.filter((item) =>
        [item.title, item.description, item.id].some((value) => String(value).toLowerCase().includes(nameFilter.toLowerCase()))
          // item.title.toLowerCase().includes(nameFilter.toLowerCase())
        );
      }
      if (priceFilter) {
        filtered = filtered.filter(
          (item) => item.price <= Number(priceFilter.replace(',', '.'))
        );
      }
      setFilteredProducts(filtered);
    };
return {filteredProducts, handleNameFilterChange, handleFilterSubmit, handlePriceFilterChange, nameFilter, priceFilter, resetFilter}
}  