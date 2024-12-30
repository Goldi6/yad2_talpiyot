
const h_w = "20";


export function IconClose(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg fill="none" viewBox="0 0 24 24" height={h_w} width={h_w} {...props}>
            <path
                fill="currentColor"
                d="M6.225 4.811a1 1 0 00-1.414 1.414L10.586 12 4.81 17.775a1 1 0 101.414 1.414L12 13.414l5.775 5.775a1 1 0 001.414-1.414L13.414 12l5.775-5.775a1 1 0 00-1.414-1.414L12 10.586 6.225 4.81z"
            />
        </svg>
    );
}


export function IconEye(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            height={h_w}
            width={h_w}
            {...props}
        >
            <path d="M12 9a3 3 0 00-3 3 3 3 0 003 3 3 3 0 003-3 3 3 0 00-3-3m0 8a5 5 0 01-5-5 5 5 0 015-5 5 5 0 015 5 5 5 0 01-5 5m0-12.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5z" />
        </svg>
    );
}

export function IconEyeOff(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            height={h_w}
            width={h_w}
            {...props}
        >
            <path d="M11.83 9L15 12.16V12a3 3 0 00-3-3h-.17m-4.3.8l1.55 1.55c-.05.21-.08.42-.08.65a3 3 0 003 3c.22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53a5 5 0 01-5-5c0-.79.2-1.53.53-2.2M2 4.27l2.28 2.28.45.45C3.08 8.3 1.78 10 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.43.42L19.73 22 21 20.73 3.27 3M12 7a5 5 0 015 5c0 .64-.13 1.26-.36 1.82l2.93 2.93c1.5-1.25 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-4 .7l2.17 2.15C10.74 7.13 11.35 7 12 7z" />
        </svg>
    );
}


export function IconEdit(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg width="26px"
            height="22px"
            viewBox="0 0 24 24"
            fill="none"
            {...props}
            xmlns="http://www.w3.org/2000/svg" >
            <path fillRule="evenodd"
                clipRule="evenodd"
                d="M15.7 4c.5 0 .979.198 1.332.55l2.01 2.008a1.88 1.88 0 01.001 2.66l-9.236 9.247a.747.747 0 01-.327.191l-5.032 1.41a.747.747 0 01-.92-.918l1.413-5.025a.746.746 0 01.19-.325L14.37 4.55C14.722 4.198 15.2 4 15.7 4zm-2.806 4.137l-6.568 6.576-1.002 3.56 3.564-1 6.557-6.565-2.551-2.571zM15.7 5.491a.392.392 0 00-.276.114L13.77 7.261l2.551 2.571 1.667-1.668a.392.392 0 000-.552l-2.01-2.007a.391.391 0 00-.277-.114z" fill="currentColor">
            </path></svg>
    )
}