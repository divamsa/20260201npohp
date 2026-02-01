import React from 'react'
import { Button } from '@/app/components/ui/Button'
import { Calendar, UserCheck, ShieldCheck } from 'lucide-react'

export const metadata = {
    title: '活動内容 | 特定非営利活動法人 おひとりさま終活支援協議会',
    description: '終活セミナーの定期開催、専門家による個別相談、見守り支援など。具体的な活動内容をご紹介します。',
}

export default function ActivitiesPage() {
    return (
        <main style={{ padding: '4rem 0', backgroundColor: '#f8fafc', minHeight: '80vh' }}>
            <div className="container">

                <header style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h1 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', fontFamily: 'var(--font-heading)', fontWeight: 900 }}>活動内容</h1>
                    <p style={{ fontSize: '1.125rem' }}>
                        皆様の不安を解消し、安心ある未来を創るため、<br />
                        実践的なセミナーと親身な相談事業を行っています。
                    </p>
                </header>

                {/* Seminars */}
                <section style={{ marginBottom: '4rem', backgroundColor: '#fff', padding: '3rem', borderRadius: '1rem', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                        <div style={{ backgroundColor: '#FEF3C7', padding: '1rem', borderRadius: '50%', color: '#D97706' }}>
                            <Calendar size={32} />
                        </div>
                        <h2 style={{ fontSize: '1.75rem', fontWeight: 700 }}>終活セミナー・勉強会</h2>
                    </div>

                    <p style={{ marginBottom: '2rem', lineHeight: 1.8 }}>
                        「何から始めればいいかわからない」という方のために、定期的なセミナーを開催しています。<br />
                        奇数月は「終活概論」、偶数月は「個別テーマ（遺言、介護、お墓など）」に焦点を当て、
                        基礎から応用まで分かりやすく解説します。
                    </p>

                    <div style={{ display: 'grid', gap: '1.5rem', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
                        <div style={{ border: '1px solid #e2e8f0', borderRadius: '0.5rem', padding: '1.5rem' }}>
                            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: '#0F172A', fontWeight: 700 }}>奇数月（1, 3, 5...月）</h3>
                            <p style={{ color: '#64748B', fontSize: '0.95rem' }}>テーマ：はじめての終活（概論）</p>
                            <ul style={{ marginTop: '1rem', paddingLeft: '1.5rem', color: '#334155' }}>
                                <li>終活の全体像</li>
                                <li>エンディングノートの書き方</li>
                                <li>今やるべき3つのこと</li>
                            </ul>
                        </div>
                        <div style={{ border: '1px solid #e2e8f0', borderRadius: '0.5rem', padding: '1.5rem' }}>
                            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: '#0F172A', fontWeight: 700 }}>偶数月（2, 4, 6...月）</h3>
                            <p style={{ color: '#64748B', fontSize: '0.95rem' }}>テーマ：専門分野（各論）</p>
                            <ul style={{ marginTop: '1rem', paddingLeft: '1.5rem', color: '#334155' }}>
                                <li>公正証書遺言の作り方</li>
                                <li>墓じまいの手順と費用</li>
                                <li>認知症対策（家族信託等）</li>
                            </ul>
                        </div>
                    </div>
                    <div style={{ marginTop: '2rem', textAlign: 'right' }}>
                        <Button href="/news">開催スケジュールを見る</Button>
                    </div>
                </section>

                {/* Consultations */}
                <section style={{ backgroundColor: '#fff', padding: '3rem', borderRadius: '1rem', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                        <div style={{ backgroundColor: '#DBEAFE', padding: '1rem', borderRadius: '50%', color: '#2563EB' }}>
                            <UserCheck size={32} />
                        </div>
                        <h2 style={{ fontSize: '1.75rem', fontWeight: 700 }}>個別相談・見守り支援</h2>
                    </div>

                    <div style={{ display: 'grid', gap: '2rem', gridTemplateColumns: '1fr' }}>
                        <div>
                            <p style={{ lineHeight: 1.8, marginBottom: '1.5rem' }}>
                                セミナーだけでは解決できない個別の事情について、専門家がお話を伺います。<br />
                                弁護士、税理士、司法書士などの士業と連携し、ワンストップでサポート可能です。
                            </p>
                            <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', fontWeight: 700 }}>主な相談内容</h3>
                            <ul style={{ display: 'grid', gap: '0.5rem', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', listStyle: 'none', padding: 0 }}>
                                <li style={{ padding: '0.5rem 1rem', background: '#F1F5F9', borderRadius: '0.25rem' }}>遺言書の作成</li>
                                <li style={{ padding: '0.5rem 1rem', background: '#F1F5F9', borderRadius: '0.25rem' }}>死後事務委任</li>
                                <li style={{ padding: '0.5rem 1rem', background: '#F1F5F9', borderRadius: '0.25rem' }}>遺贈・寄付</li>
                                <li style={{ padding: '0.5rem 1rem', background: '#F1F5F9', borderRadius: '0.25rem' }}>お墓・永代供養</li>
                                <li style={{ padding: '0.5rem 1rem', background: '#F1F5F9', borderRadius: '0.25rem' }}>ペットの引取相談</li>
                            </ul>
                        </div>
                    </div>
                    <div style={{ marginTop: '2rem', textAlign: 'center' }}>
                        <Button href="/contact" variant="primary">個別相談を申し込む（無料）</Button>
                    </div>
                </section>

            </div>
        </main>
    )
}
