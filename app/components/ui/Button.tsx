import React from 'react'
import Link from 'next/link'
import styles from './Button.module.css'
import { clsx } from 'clsx'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline'
    size?: 'sm' | 'md' | 'lg'
    href?: string
    className?: string
    children: React.ReactNode
}

export const Button = ({
    variant = 'primary',
    size = 'md',
    href,
    className,
    children,
    ...props
}: ButtonProps) => {
    const rootClassName = clsx(
        styles.button,
        styles[variant],
        styles[size],
        className
    )

    if (href) {
        return (
            <Link href={href} className={rootClassName}>
                {children}
            </Link>
        )
    }

    return (
        <button className={rootClassName} {...props}>
            {children}
        </button>
    )
}
