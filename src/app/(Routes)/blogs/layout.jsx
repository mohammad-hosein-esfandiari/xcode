
export const metadata ={
    title:{
      default:'Blogs',
      template:'Blogs | %s'
    }
  }

const BlogsLayout = ({children}) => {
    return (
        <>
            {children}
        </>
    );
}

export default BlogsLayout;