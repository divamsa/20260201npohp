import React from 'react'
import styles from './Mission.module.css'

export const Mission = () => {
    return (
        <section className={styles.section}>
            <div className="container">
                <h2 className={styles.heading}>「終活」を、もっと前向きに。</h2>

                <p className={styles.lead}>
                    終活＝暗い・寂しいというイメージを払拭し、<br />
                    <span className={styles.strong}>「陽（ひ）の終活」</span>を私たちは提案します。
                </p>

                <div className={styles.text}>
                    <p>
                        人生100年時代、最期まで自分らしく、安心して暮らしたい。<br />
                        しかし、独り身の不安や、資産・相続の悩みは尽きません。<br /><br />
                        私たち「おひとりさま終活支援協議会」は、<br />
                        皆様が抱える不安を専門家の知見と温かなサポートで解消し、<br />
                        笑顔で未来を見据えられる社会の実現を目指して設立されました。
                    </p>
                </div>
            </div>
        </section>
    )
}
