'use client'
import { QueryClientProvider,QueryClient } from "react-query";
const ReactQueryWrapper = ({children}) => {
    const queryClient = new QueryClient()
    return (
        <QueryClientProvider client={queryClient}>
           {children}
        </QueryClientProvider>
    );
}

export default ReactQueryWrapper;