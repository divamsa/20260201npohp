import React from 'react'
import Image from 'next/image'
import styles from './Hero.module.css'
import { Button } from '@/app/components/ui/Button'

export const Hero = () => {
    return (
        <section className={styles.hero}>
            <div className={styles.background}>
                <Image
                    src="/hero.png"
                    alt="穏やかに微笑むシニアのご夫婦"
                    fill
                    priority
                    quality={90}
                />
                <div className={styles.overlay} />
            </div>

            <div className={styles.content}>
                <h1 className={styles.title}>陽（ひ）の終活</h1>
                <p className={styles.subtitle}>安心と尊厳のある未来へ</p>

                <p className={styles.description}>
                    おひとりさまが、心豊かに人生を全うできる社会を目指して。<br />
                    私たちは、あなたの「生きた証」を次世代へつなぐお手伝いをします。
                </p>

                <Button variant="primary" size="lg" href="/contact">
                    まずは資料請求・ご相談から
                </Button>
            </div>
        </section>
    )
}
