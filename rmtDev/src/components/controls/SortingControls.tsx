import { FaSortAmountUp, FaSortAmountDown } from "react-icons/fa";
import useSort from '../../hooks/useSort';

const SortingControls = () => {
    const { isSortAsc, toogleSort } = useSort()

  return (
    <div className='flex gap-2 items-center'>
        {isSortAsc ? <FaSortAmountDown onClick={toogleSort} />
                   : <FaSortAmountUp onClick={toogleSort} />}
        <button className='px-1 py-1 text-sm bg-gray-600 text-gray-100'>RELEVANT</button>
        <button className='px-1 py-1 text-sm bg-gray-100 text-gray-600'>RECENT</button>
    </div>
  )
}

export default SortingControls