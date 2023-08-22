const CourseTitle = ({title}) => {
    return (
        <li className="py-8">
        <h2 className="md:text-[35px] sm:text-right text-center sm:font-normal font-bold ss:text-[25px] text-[20px] text-mode-color">
          {title.split('|')[0]}
        </h2>
      </li>
    );
}

export default CourseTitle;