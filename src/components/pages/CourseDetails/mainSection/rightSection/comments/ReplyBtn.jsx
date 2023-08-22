'use client'
const ReplyBtn = ({setId,id,setModal}) => {
  const setIdHandler =()=>{
    setId(id)
    setModal(true)
  }

  return (
    <button onClick={setIdHandler} className=" absolute bottom-1 text-[14px] text-[#888] rounded-[4px] hover:text-primary hover:translate-x-2 transition-all duration-300 left-1 flex items-center p-2">
      <span>پاسخ</span>
    </button>
  );
};

export default ReplyBtn;
