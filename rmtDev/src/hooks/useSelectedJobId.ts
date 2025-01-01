import { useSearchParams } from "react-router";

const useSelectedJobId = (jobId: string) => {

  const [searchParams, setSearchParams] = useSearchParams();

  const setThisAsSelectedJobId = () => {
    setSearchParams((prev) => {
      prev.set("jobId", jobId);
      return prev;
    }, {
      preventScrollReset: true,
    });
  }

  const isCurrentlySelected = searchParams.get("jobId") === jobId ? true : false

    return {
        setThisAsSelectedJobId, isCurrentlySelected
    }
}

export default useSelectedJobId