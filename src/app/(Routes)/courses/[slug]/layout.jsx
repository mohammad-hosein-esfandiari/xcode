export async function generateMetadata({ params }) {
    return {
      title: params.slug,
    };
  }

const CourseDetailsLayout = ({children}) => {
    return (
        <>
            {children}
        </>
    );
}

export default CourseDetailsLayout;