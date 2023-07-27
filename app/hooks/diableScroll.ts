import {useEffect} from "react";

export function useDisableScroll(shouldBeDisabled: boolean){
    useEffect(()=>{
        if(shouldBeDisabled){
            document.body.style.overflow = "hidden";
        }else {
            document.body.style.overflow = "unset";
        }
    },[shouldBeDisabled])

}
