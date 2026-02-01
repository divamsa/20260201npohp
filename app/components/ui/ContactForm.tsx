'use client'

import React, { useState } from 'react'
import styles from './ContactForm.module.css'
import { Button } from '@/app/components/ui/Button'
import { AlertCircle, CheckCircle } from 'lucide-react'

export const ContactForm = () => {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setIsSubmitting(true)

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500))

        setIsSubmitting(false)
        setIsSuccess(true)
    }

    if (isSuccess) {
        return (
            <div className={styles.successMessage}>
                <CheckCircle size={48} className="mx-auto mb-4 text-green-600" style={{ display: 'block', margin: '0 auto 1rem' }} />
                <h3 className={styles.successHeading}>お問い合わせありがとうございます</h3>
                <p>
                    内容を確認の上、担当者より折り返しご連絡させていただきます。<br />
                    今しばらくお待ちください。
                </p>
                <div style={{ marginTop: '2rem' }}>
                    <Button variant="outline" onClick={() => setIsSuccess(false)}>
                        フォームに戻る
                    </Button>
                </div>
            </div>
        )
    }

    return (
        <form className={styles.formContainer} onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
                <label htmlFor="category" className={styles.label}>
                    ご相談内容 <span className={styles.required}>必須</span>
                </label>
                <select id="category" name="category" className={styles.select} required>
                    <option value="">選択してください</option>
                    <option value="seminar">セミナー参加について</option>
                    <option value="consultation">個別相談・見守りについて</option>
                    <option value="bequest">遺贈・寄付について</option>
                    <option value="other">その他のお問い合わせ</option>
                </select>
            </div>

            <div className={styles.formGroup}>
                <label htmlFor="name" className={styles.label}>
                    お名前 <span className={styles.required}>必須</span>
                </label>
                <input type="text" id="name" name="name" className={styles.input} placeholder="例：山田 太郎" required />
            </div>

            <div className={styles.formGroup}>
                <label htmlFor="phone" className={styles.label}>
                    電話番号 <span className={styles.required}>必須</span>
                </label>
                <input type="tel" id="phone" name="phone" className={styles.input} placeholder="例：03-1234-5678" required />
                <p style={{ fontSize: '0.8rem', color: '#666', marginTop: '0.5rem' }}>※日中つながりやすい番号をご記入ください。</p>
            </div>

            <div className={styles.formGroup}>
                <label htmlFor="email" className={styles.label}>
                    メールアドレス
                </label>
                <input type="email" id="email" name="email" className={styles.input} placeholder="例：yamada@example.com" />
            </div>

            <div className={styles.formGroup}>
                <label htmlFor="message" className={styles.label}>
                    お問い合わせ詳細 <span className={styles.required}>必須</span>
                </label>
                <textarea
                    id="message"
                    name="message"
                    className={styles.textarea}
                    placeholder="ご相談内容やご質問をご記入ください。"
                    required
                ></textarea>
            </div>

            <div className={styles.actions}>
                <Button variant="primary" size="lg" type="submit" disabled={isSubmitting}>
                    {isSubmitting ? '送信中...' : '送信内容を確認する'}
                </Button>
            </div>
        </form>
    )
}
