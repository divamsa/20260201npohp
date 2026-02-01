import React from 'react'
import Link from 'next/link'
import styles from './Footer.module.css'

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={`container ${styles.inner}`}>
                <div className={styles.brand}>
                    <h2>特定非営利活動法人<br />おひとりさま終活支援協議会</h2>
                    <p>
                        誰もが安心して自分らしく生涯を全うできる社会へ。<br />
                        私たちは「陽（ひ）の終活」を通じて、高齢者の尊厳と安心を守ります。
                    </p>
                </div>

                <div className={styles.links}>
                    <h3>コンテンツ</h3>
                    <Link href="/about" className={styles.link}>私たちについて</Link>
                    <Link href="/activities" className={styles.link}>活動内容</Link>
                    <Link href="/flow" className={styles.link}>遺贈・寄付の流れ</Link>
                    <Link href="/news" className={styles.link}>お知らせ</Link>
                    <Link href="/contact" className={styles.link}>お問い合わせ</Link>
                </div>

                <div className={styles.contactInfo}>
                    <h3>お問い合わせ</h3>
                    <p>〒171-0014<br />東京都豊島区池袋...</p>
                    <p>TEL: 03-XXXX-XXXX (代表)</p>
                    <p>受付時間: 平日 10:00 - 17:00</p>
                </div>
            </div>
            <div className={styles.copyright}>
                &copy; {new Date().getFullYear()} NPO Ohitorisama Syukatsu Support Council. All Rights Reserved.
            </div>
        </footer>
    )
}
