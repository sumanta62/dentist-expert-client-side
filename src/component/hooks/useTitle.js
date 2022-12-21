import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `Dentist-Expert - ${title}`;

    }, [title])
}

export default useTitle;
