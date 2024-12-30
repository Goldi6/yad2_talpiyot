
//  Here's what React.ReactNode can be:

// ReactElement (a React element created by React.createElement, JSX, or an intrinsics like <div />)
// ReactFragment (a group of ReactNodes)
// string or number (rendered as text nodes)
// boolean or null (render nothing)
//React.ReactElement[], undefined, and void

export type ChildrenType = { children: React.ReactNode };
export type StyleType = { style?: React.CSSProperties };