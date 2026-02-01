import React from 'react'
import { Button } from '@/app/components/ui/Button'
import { HeartHandshake, ScrollText, Landmark } from 'lucide-react'

export const metadata = {
    title: '遺贈・寄付の流れ | 特定非営利活動法人 おひとりさま終活支援協議会',
    description: '遺言による遺贈、相続財産の寄付、生前寄付の3つの方法について。手順や税制優遇についても解説します。',
}

const steps = [
    { num: 1, title: 'お問い合わせ', text: 'まずは資料請求、またはお電話でご連絡ください。' },
    { num: 2, title: '初回面談（無料）', text: 'ご希望や財産状況をお伺いし、最適な寄付方法をご提案します。' },
    { num: 3, title: '専門家との相談', text: '弁護士・税理士を交え、遺言書の作成や税務シミュレーションを行います。' },
    { num: 4, title: '手続き・実行', text: '公正証書遺言の作成等の手続きをサポートします。' },
    { num: 5, title: 'ご報告', text: '寄付金がどのように活用されたか、定期的にご報告いたします。' }
]

export default function FlowPage() {
    return (
        <main style={{ padding: '4rem 0', backgroundColor: '#fff', minHeight: '80vh' }}>
            <div className="container">

                <header style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h1 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', fontFamily: 'var(--font-heading)', fontWeight: 900 }}>遺贈・寄付について</h1>
                    <p style={{ fontSize: '1.125rem' }}>
                        あなたの生きた証を、未来の社会へ。<br />
                        私たちは「想いをつなぐ」確かなお手伝いをします。
                    </p>
                </header>

                {/* 3 Methods */}
                <section style={{ marginBottom: '6rem' }}>
                    <h2 style={{ fontSize: '1.75rem', marginBottom: '3rem', textAlign: 'center' }}>3つの寄付方法</h2>
                    <div style={{ display: 'grid', gap: '2rem', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>

                        {/* Method 1 */}
                        <div style={{ padding: '2rem', backgroundColor: '#F8FAFC', borderRadius: '1rem', border: '1px solid #E2E8F0' }}>
                            <div style={{ color: '#D97706', marginBottom: '1rem' }}><ScrollText size={40} /></div>
                            <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>遺贈（遺言による寄付）</h3>
                            <p style={{ lineHeight: 1.8 }}>
                                遺言書を作成し、ご自身の遺産の一部または全部を特定の団体に寄付する方法です。
                                相続人がいない場合や、お世話になった社会に恩返しをしたい場合に適しています。
                            </p>
                        </div>

                        {/* Method 2 */}
                        <div style={{ padding: '2rem', backgroundColor: '#F8FAFC', borderRadius: '1rem', border: '1px solid #E2E8F0' }}>
                            <div style={{ color: '#0F172A', marginBottom: '1rem' }}><Landmark size={40} /></div>
                            <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>相続財産の寄付</h3>
                            <p style={{ lineHeight: 1.8 }}>
                                ご家族（相続人）が相続した財産を寄付する方法です。
                                相続税の申告期限内に寄付を行うことで、その財産は相続税の非課税対象となります。
                            </p>
                        </div>

                        {/* Method 3 */}
                        <div style={{ padding: '2rem', backgroundColor: '#F8FAFC', borderRadius: '1rem', border: '1px solid #E2E8F0' }}>
                            <div style={{ color: '#D97706', marginBottom: '1rem' }}><HeartHandshake size={40} /></div>
                            <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>生前寄付</h3>
                            <p style={{ lineHeight: 1.8 }}>
                                ご存命のうちに、ご自身の意思で財産を寄付する方法です。
                                寄付の成果を自身の目で確認でき、所得税の寄付金控除を受けられる場合があります。
                            </p>
                        </div>

                    </div>
                </section>

                {/* Flow */}
                <section style={{ maxWidth: '800px', margin: '0 auto', backgroundColor: '#FFFBF0', padding: '3rem', borderRadius: '1rem' }}>
                    <h2 style={{ fontSize: '1.75rem', marginBottom: '3rem', textAlign: 'center' }}>ご相談から実行までの流れ</h2>
                    <div>
                        {steps.map((step, i) => (
                            <div key={i} style={{ display: 'flex', gap: '1.5rem', marginBottom: i === steps.length - 1 ? 0 : '2rem' }}>
                                <div style={{
                                    flexShrink: 0,
                                    width: '3rem',
                                    height: '3rem',
                                    backgroundColor: '#D97706',
                                    color: '#fff',
                                    borderRadius: '50%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontWeight: 'bold',
                                    fontSize: '1.25rem'
                                }}>
                                    {step.num}
                                </div>
                                <div>
                                    <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.5rem' }}>{step.title}</h3>
                                    <p>{step.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <div style={{ textAlign: 'center', marginTop: '4rem' }}>
                    <Button href="/contact" size="lg">遺贈・寄付の相談をする</Button>
                </div>

            </div>
        </main>
    )
}
