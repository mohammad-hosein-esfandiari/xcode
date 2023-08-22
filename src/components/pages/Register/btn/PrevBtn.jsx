'use client'


const PrevBtn = ({setStepPrev,color}) => {
    return (
        <button
        onClick={setStepPrev}
        type="button"
        className={` border-[1px] border-primary w-fit bg-transparent px-5 hover:scale-[1.05]  transition duration-500 py-[5px] ${color === 'white' ? 'sm:text-white text-mode-color': 'text-mode-color'} text-mode-color rounded-md text-[10px] mt-4`}>
        مرحله قبل
      </button>
    );
}

export default PrevBtn;