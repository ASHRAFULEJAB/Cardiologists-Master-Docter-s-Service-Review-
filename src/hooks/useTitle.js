import { useEffect } from 'react'

const useTitle = (title) => {
    useEffect(() => {
    document.title=`${title} -Cardiologists`
},[title])
}

export default useTitle;