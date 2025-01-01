import Searchbar from './Searchbar'

const Header = () => {
  return (
    <div className='h-[12rem] pb-2 flex flex-col gap-6 justify-center text-center items-center bg-gradient-to-r from-[#1f74f1] to-[#0850b9] text-white'>
      <p className='text-2xl'>
        rmt<span className='font-bold'>Dev</span>
      </p>
      <Searchbar />
    </div>
  )
}

export default Header