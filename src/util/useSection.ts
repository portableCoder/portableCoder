
import React, { useEffect } from 'react'
import { useInView } from 'react-spring'
import { useStore } from "@nanostores/react";
import store, { AppStore } from "../util/store";



const useSection = (sectionName?: AppStore['section']) => {
    const [ref, inView] = useInView({
        amount: .1
    })
    const $store = useStore(store)
    useEffect(() => {
        if (inView && sectionName) {
            store.set({ ...$store, section: sectionName })
        }
    }, [inView])
    return [ref, $store, inView] as const
}

export default useSection