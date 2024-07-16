function ModalFunction({ children, onClose }) {
  return (
    <div className="fixed inset-0 bg-backgrounds flex items-center justify-center z-50">
      <div className="relative w-[1680px] m-auto bg-white rounded-[128px] p-[80px] ">
        <button onClick={onClose} className="absolute right-0 top-0 bg-[#1083E6] rounded-[80px] p-[24px]">
          <svg className="w-[32px] h-[32px]" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17 1L1 17M1 1L17 17" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </button>
        <div className="relative flex items-center gap-[40px]">
          <img src="./img/Photo (1).png" alt="photo" />
          {children}
        </div>
      </div>
    </div>
  )
}

export default ModalFunction