import { useEffect, useState } from 'react'

type Props = {}

export default function Loader({ }: Props) {
    const [ dots, setDots ] = useState('');

    useEffect(() => {
        const interval = setInterval(() => {
            setDots((prevDots) => {
                if (prevDots.length === 3) {
                    return '';
                } else {
                    return prevDots + '.';
                }
            });
        }, 500);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="loader">
            Loading{dots}
        </div>
    );
}