import React from 'react'
import styles from './Services.module.css'
import { Presentation, MessageCircleHeart, HeartHandshake } from 'lucide-react'
import { Button } from '@/app/components/ui/Button'

const services = [
    {
        title: '終活セミナー',
        description: '「終活とは何か」から「具体的な手続き」まで。奇数月・偶数月でテーマを変え、定期的に開催しています。',
        icon: Presentation,
        link: '/activities'
    },
    {
        title: '個別相談・見守り',
        description: 'おひとりさまの不安に寄り添います。死後事務、墓じまい、ペットのことなど、専門家が親身に相談に乗ります。',
        icon: MessageCircleHeart,
        link: '/contact'
    },
    {
        title: '遺贈・寄付',
        description: 'あなたの想いを未来へ。遺言による寄付や相続財産の寄付について、税務・法務の両面からサポートします。',
        icon: HeartHandshake,
        link: '/flow'
    }
]

export const Services = () => {
    return (
        <section className={styles.section}>
            <div className="container">
                <h2 className={styles.heading}>私たちの活動</h2>

                <div className={styles.grid}>
                    {services.map((service, index) => (
                        <div key={index} className={styles.card}>
                            <div className={styles.iconWrapper}>
                                <service.icon size={32} />
                            </div>
                            <h3 className={styles.cardTitle}>{service.title}</h3>
                            <p className={styles.cardText}>{service.description}</p>
                            <Button href={service.link} variant="outline" size="sm">
                                詳しく見る
                            </Button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
