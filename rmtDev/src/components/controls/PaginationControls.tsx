import { GrPrevious, GrNext } from "react-icons/gr";
import useCurrentPage from '../../hooks/useCurrentPage'

const PaginationControls = () => {    
  const { currentPage, setPage } = useCurrentPage()

  return (
    <div className={`h-10 text-sm flex px-6 items-center border-t-2 ${currentPage>1 ? 'justify-between' : 'justify-end'}`}>
        {currentPage > 1 && <div className="flex items-center gap-1 hover:cursor-pointer"
                              onClick={()=>setPage( currentPage-1 )}
                              ><GrPrevious className="inline" /><span>{currentPage-1}</span></div>}

        <div className="flex items-center gap-1 hover:cursor-pointer"  onClick={()=>setPage( currentPage+1 )} ><span>{currentPage + 1}</span><GrNext className="inline" /></div>
    </div>
  )
}

export default PaginationControls