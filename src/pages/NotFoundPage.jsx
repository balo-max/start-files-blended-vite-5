import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

export default function NotFoundPage() {
    const navigate = useNavigate();

    useEffect(() => {
        navigate('/')
    },[navigate]);

    return (
            <div>
                <p>Page is not foud</p>
            </div>
    )
}