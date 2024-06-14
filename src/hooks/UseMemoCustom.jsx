import { useEffect, useRef } from "react"

const areEqual=(prev, next)=>{
    if(prev === null) return false;
    if(prev.length !== next.length){
        return false;
    }
    for(let i=0;i<prev.length;i++){
        if(prev[i] != next[i])
            {
                return false;
            }
    }
    return true;
};

const useCustomMemo = (cb,deps)=>{
    const memoRef = useRef(null);
    if(!memoRef.current || !areEqual(memoRef.current.deps,deps) ){
        memoRef.current ={
            value : cb(),
            deps
        };
    }
    
    useEffect(()=>{
        return ()=>{
            memoRef.current = null;
        } 
    },[])

    return memoRef.current.value;
}

export default useCustomMemo;