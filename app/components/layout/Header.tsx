import React from 'react'
import Link from 'next/link'
import styles from './Header.module.css'
import { Button } from '@/app/components/ui/Button'
import { Phone } from 'lucide-react'

export const Header = () => {
    return (
        <header className={styles.header}>
            <div className={`container ${styles.inner}`}>
                <Link href="/" className={styles.logo}>
                    <span>特定非営利活動法人</span>
                    おひとりさま終活支援協議会
                </Link>

                <nav className={styles.nav}>
                    <Link href="/about" className={styles.navLink}>
                        私たちについて
                    </Link>
                    <Link href="/activities" className={styles.navLink}>
                        活動内容
                    </Link>
                    <Link href="/flow" className={styles.navLink}>
                        遺贈・寄付
                    </Link>
                    <Link href="/news" className={styles.navLink}>
                        お知らせ
                    </Link>
                </nav>

                <div className={styles.contact}>
                    <Button href="/contact" variant="primary" size="sm">
                        相談・資料請求
                    </Button>
                </div>
            </div>
        </header>
    )
}
