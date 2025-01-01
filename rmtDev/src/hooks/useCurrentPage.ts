
import { useSearchParams } from "react-router";

const useCurrentPage = () => {
    const [searchParams, setSearchParams] = useSearchParams();

    const searchParamPage = searchParams.get("page")
    let currentPage: number;
    if( (searchParamPage === null || !Number.isInteger(Number(searchParamPage))) ||
        (Number.isInteger(Number(searchParamPage)) && Number(searchParamPage)<1 )  ){
        currentPage = 1
    } else{
        currentPage = Number(searchParamPage)
    }

    const setPage = (pageToSet: number) => {
      setSearchParams((prev) => {
        prev.set("page", pageToSet.toString());
        return prev;
      }, {
        preventScrollReset: true,
      });
    }

  return {
    currentPage, setPage
  }
}

export default useCurrentPage