import React, {
    useState,
    useEffect
} from "react"

export default function Loader({
    isLoading
}) {
    const [loaderText, setLoaderText] = useState("");
    let count = 1;
    useEffect(() => {
        const interval = setInterval(() => {
            if (isLoading) {
                count++;
                if (count % 5 === 1) setLoaderText("-");
                else if (count % 5 === 2) setLoaderText("\\");
                else if (count % 5 === 3) setLoaderText("|");
                else if (count % 5 === 4) setLoaderText("/");
                else if (count % 5 === 0) setLoaderText("-");
            }
        }, 100);
        return () => clearInterval(interval);
    }, [isLoading]);
    return ( <
        div className = "loader" >
        <
        h4 > Loading {
            loaderText
        } < /h4> <
        /div>
    );
}