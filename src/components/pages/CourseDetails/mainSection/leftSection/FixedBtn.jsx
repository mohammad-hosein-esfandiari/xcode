import dynamic from 'next/dynamic';

const BuyButton = dynamic(() => import('./BuyButton'), {
    ssr: false,
  });

const fixedBtn = ({courseDetail}) => {
    const { cost,students,_id,title,lesson} = courseDetail
    return (
        <div className="md:hidden block z-[10] bg-transparent ss:py-4 py-3 pr-4 w-screen ss:bottom-[4px] bottom-0 right-0 ss:pl-[102px] pl-[84px] fixed ">
            <BuyButton image={lesson.image} courseId={_id}  title={title} users={students} cost={cost}/>
        </div>
    );
}

export default fixedBtn;