import React from 'react'
import { ContactForm } from '@/app/components/ui/ContactForm'
import { Phone, Mail } from 'lucide-react'

export const metadata = {
    title: 'お問い合わせ | 特定非営利活動法人 おひとりさま終活支援協議会',
    description: 'セミナー参加、個別相談、遺贈・寄付に関するお問い合わせはこちらから。お電話（03-XXXX-XXXX）でも受け付けております。',
}

export default function ContactPage() {
    return (
        <main style={{ padding: '4rem 0', backgroundColor: 'var(--c-bg-primary)', minHeight: '80vh' }}>
            <div className="container">
                <header style={{ textAlign: 'center', marginBottom: '3rem' }}>
                    <h1 style={{ fontSize: '2rem', marginBottom: '1rem', color: 'var(--c-navy-900)' }}>お問い合わせ・資料請求</h1>
                    <p style={{ lineHeight: 1.8 }}>
                        終活に関するご相談、セミナーへの参加申し込み、<br />
                        その他ご不明な点など、お気軽にお問い合わせください。
                    </p>
                </header>

                <section style={{ maxWidth: '800px', margin: '0 auto 4rem' }}>
                    <div style={{
                        backgroundColor: '#FEF3C7',
                        padding: '1.5rem',
                        borderRadius: '0.5rem',
                        textAlign: 'center',
                        marginBottom: '3rem',
                        border: '1px solid #FCD34D'
                    }}>
                        <h2 style={{ fontSize: '1.25rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
                            <Phone size={24} /> お電話でのお問い合わせ
                        </h2>
                        <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--c-navy-900)' }}>
                            03-XXXX-XXXX
                        </p>
                        <p style={{ fontSize: '0.875rem', marginTop: '0.5rem' }}>
                            受付時間: 平日 10:00 - 17:00
                        </p>
                    </div>

                    <ContactForm />
                </section>
            </div>
        </main>
    )
}
