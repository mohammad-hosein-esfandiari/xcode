'use client'

import { useRouter } from "next/router";
import { useEffect } from "react";

const PopState = () => {
    const route = useRouter()
    useEffect(() => {
        route.beforePopState(({ url, as }) => {
          console.log(JSON.stringify({ url, as }, null, 2));
          return true;
        });
      }, []);
    return null
}

export default PopState;