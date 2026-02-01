import React from 'react'
import { Button } from '@/app/components/ui/Button'

export const metadata = {
    title: '私たちについて | 特定非営利活動法人 おひとりさま終活支援協議会',
    description: '設立趣旨、代表挨拶、法人概要など。私たちは高齢者が安心して暮らせる社会の実現を目指して活動しています。',
}

export default function AboutPage() {
    return (
        <main style={{ padding: '4rem 0', backgroundColor: '#fff', minHeight: '80vh' }}>
            <div className="container">

                {/* Section: Philosophy */}
                <section style={{ marginBottom: '6rem', textAlign: 'center' }}>
                    <h1 style={{ fontSize: '2.5rem', marginBottom: '2rem', fontFamily: 'var(--font-heading)', fontWeight: 900 }}>私たちについて</h1>
                    <p style={{ fontSize: '1.25rem', lineHeight: 2, marginBottom: '2rem', fontFamily: 'var(--font-heading)' }}>
                        誰ひとりとして、<br />
                        不安の中で最期を迎えることのない社会へ。
                    </p>
                    <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'left', lineHeight: 1.8 }}>
                        <p style={{ marginBottom: '1.5rem' }}>
                            日本はかつてない超高齢社会を迎えています。
                            特に「おひとりさま」世帯の増加に伴い、孤独死や死後の手続き、相続財産の行方など、
                            個人の尊厳に関わる問題が深刻化しています。
                        </p>
                        <p>
                            私たち「おひとりさま終活支援協議会」は、これまでの見守り活動や終活支援の経験を活かし、
                            行政とも連携しながら、こうした社会課題解決に取り組むために設立されました。
                            「陽（ひ）の終活」を合言葉に、誰もが安心して人生の幕を下ろし、
                            その想いを未来へつなぐお手伝いをいたします。
                        </p>
                    </div>
                </section>

                {/* Section: Representative */}
                <section style={{ marginBottom: '6rem', backgroundColor: '#F8FAFC', padding: '4rem 2rem', borderRadius: '1rem' }}>
                    <div style={{ maxWidth: '900px', margin: '0 auto', display: 'grid', gap: '2rem', gridTemplateColumns: '1fr' }}>
                        {/* Note: Ideally 2 columns with image on desktop. Keeping single column for rough draft. */}
                        <div>
                            <h2 style={{ fontSize: '1.75rem', marginBottom: '1.5rem', borderBottom: '2px solid var(--c-brand-gold)', paddingBottom: '0.5rem', display: 'inline-block' }}>
                                代表挨拶
                            </h2>
                            <p style={{ lineHeight: 1.8, marginBottom: '1.5rem' }}>
                                （ここに代表者挨拶のテキストが入ります。設立趣意書の内容をベースに、温かいメッセージを掲載します。）<br />
                                「長年、地域で高齢者支援に携わる中で、多くの方から『死んだあとが心配』という声を耳にしてきました...」
                            </p>
                            <p style={{ textAlign: 'right', fontWeight: 'bold' }}>
                                設立代表者<br />
                                土屋 福美子
                            </p>
                        </div>
                    </div>
                </section>

                {/* Section: Overview */}
                <section style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <h2 style={{ fontSize: '1.75rem', marginBottom: '2rem', textAlign: 'center' }}>法人概要</h2>
                    <table style={{ width: '100%', borderCollapse: 'collapse', borderTop: '1px solid #e2e8f0' }}>
                        <tbody>
                            <tr>
                                <th style={{ padding: '1.5rem', borderBottom: '1px solid #e2e8f0', backgroundColor: '#f8fafc', width: '30%', textAlign: 'left' }}>法人名</th>
                                <td style={{ padding: '1.5rem', borderBottom: '1px solid #e2e8f0' }}>特定非営利活動法人 おひとりさま終活支援協議会</td>
                            </tr>
                            <tr>
                                <th style={{ padding: '1.5rem', borderBottom: '1px solid #e2e8f0', backgroundColor: '#f8fafc', textAlign: 'left' }}>代表者</th>
                                <td style={{ padding: '1.5rem', borderBottom: '1px solid #e2e8f0' }}>理事長　土屋 福美子</td>
                            </tr>
                            <tr>
                                <th style={{ padding: '1.5rem', borderBottom: '1px solid #e2e8f0', backgroundColor: '#f8fafc', textAlign: 'left' }}>所在地</th>
                                <td style={{ padding: '1.5rem', borderBottom: '1px solid #e2e8f0' }}>〒171-0014 東京都豊島区池袋...</td>
                            </tr>
                            <tr>
                                <th style={{ padding: '1.5rem', borderBottom: '1px solid #e2e8f0', backgroundColor: '#f8fafc', textAlign: 'left' }}>事業内容</th>
                                <td style={{ padding: '1.5rem', borderBottom: '1px solid #e2e8f0' }}>
                                    1. 終活に関する相談・助言・支援事業<br />
                                    2. 相続、遺言、遺贈に関する相談事業<br />
                                    3. 専門家の紹介・斡旋事業<br />
                                    4. セミナー・説明会の開催
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </section>

                <div style={{ textAlign: 'center', marginTop: '4rem' }}>
                    <Button href="/contact" size="lg">お問い合わせ・相談する</Button>
                </div>

            </div>
        </main>
    )
}
