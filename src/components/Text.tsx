import React, { CSSProperties } from "react";
import styles from "./Text.module.scss";

interface BaseTextProps {
	children: string | string[];
	style?: CSSProperties;
}

interface TextProps extends BaseTextProps {
	className?: string;
}


export default function Text({ children, className, style }: TextProps) {
	return (
		<p className={className?? styles.text} style={style}>{children}</p>
	);
}

interface HeaderProps extends TextProps {
	size?: 1 | 2 | 3 | 4 | 5 | 6;
} 
const headerSizes = {
	1: "2rem",
	2: "1.7rem",
	3: "1.5rem",
	4: "1.2rem",
	5: "1.1rem",
	6: "0.8rem"
};

export function Header({ children, style, size }: HeaderProps) {
	return (
		<Text 
			className={styles.header} 
			style={{...style, ...{fontSize: headerSizes[size?? 2]}}}
		>
			{children}
		</Text>
	);
}