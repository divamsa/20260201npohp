import React from 'react'
import Link from 'next/link'

export const metadata = {
    title: 'お知らせ | 特定非営利活動法人 おひとりさま終活支援協議会',
    description: '最新のニュース、セミナー開催情報、メディア掲載情報などをお知らせします。',
}

const news = [
    { date: '2024.04.01', category: 'お知らせ', title: 'ホームページを公開しました。', id: '1' },
    { date: '2024.05.15', category: 'セミナー', title: '【6月開催】第1回 終活ビギナーズ向けセミナーのお知らせ', id: '2' },
    { date: '2024.05.20', category: 'メディア', title: '地元広報誌に当団体の活動が掲載されました。', id: '3' },
]

export default function NewsPage() {
    return (
        <main style={{ padding: '4rem 0', backgroundColor: '#fff', minHeight: '80vh' }}>
            <div className="container" style={{ maxWidth: '800px' }}>

                <header style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h1 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', fontFamily: 'var(--font-heading)', fontWeight: 900 }}>お知らせ</h1>
                </header>

                <div style={{ borderTop: '2px solid #0F172A' }}>
                    {news.map((item) => (
                        <article key={item.id} style={{
                            display: 'flex',
                            flexDirection: 'column', // Mobile first
                            gap: '0.5rem',
                            padding: '1.5rem 0',
                            borderBottom: '1px solid #E2E8F0',
                            transition: 'background-color 0.2s',
                        }}>
                            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', fontSize: '0.875rem' }}>
                                <time style={{ color: '#64748B' }}>{item.date}</time>
                                <span style={{
                                    backgroundColor: '#F1F5F9',
                                    padding: '0.25rem 0.75rem',
                                    borderRadius: '9999px',
                                    color: '#475569',
                                    fontSize: '0.75rem',
                                    fontWeight: 600
                                }}>
                                    {item.category}
                                </span>
                            </div>
                            <Link href={`#`} style={{ fontSize: '1.125rem', fontWeight: 500, color: '#0F172A', textDecoration: 'none' }}>
                                {item.title}
                            </Link>
                        </article>
                    ))}
                </div>

            </div>
        </main>
    )
}
