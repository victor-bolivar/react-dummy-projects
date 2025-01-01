
import { useSearchParams } from "react-router";


const useSort = () => {
    const [searchParams, setSearchParams] = useSearchParams();

    let isSortAsc: boolean;

    const paramSort = searchParams.get("sort")
    if (!paramSort || !['asc', 'desc'].includes(paramSort) ){
        isSortAsc = true
    } else{
        isSortAsc = paramSort === 'asc' ? true : false
    }

    const toogleSort = () => {
      setSearchParams((prev) => {
        prev.set("sort", isSortAsc ? 'desc' : 'asc');
        return prev;
      }, {
        preventScrollReset: true,
      });
    }

  return {
    isSortAsc, toogleSort
  }
}

export default useSort