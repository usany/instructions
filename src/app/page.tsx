'use client';

import styles from './root.module.css';
import { useLanguage } from '@/context/LanguageContext';
import { LinkItem } from '@/types/links';
import links from 'links';
import { Button } from '@mui/material';
import RainAnimation from '@/components/RainAnimation';
import { useEffect, useState } from 'react';

const translations = {
  en: {
    title: 'KHUSAN Instructions',
    subtitle: 'Learn how to use KHUSAN.',
    faq: {
      title: 'Frequently Asked Questions',
      q1: {
        question: 'What is KHUSAN?',
        answer: 'KHUSAN is an advanced AI-powered documentation platform that helps you create, manage, and search documentation efficiently.'
      },
      q2: {
        question: 'How does the AI search work?',
        answer: 'Our AI search uses natural language processing to understand your queries and provide relevant results from your documentation.'
      },
      q3: {
        question: 'Can I use KHUSAN for my team?',
        answer: 'Yes! KHUSAN is designed for teams of all sizes with collaborative features and role-based access control.'
      }
    },
  },
  ko: {
    title: '쿠우산 설명서',
    subtitle: '쿠우산 사용법을 알아보세요.',
    faq: {
      title: '자주 묻는 질문',
      q1: {
        question: '쿠우산이란 무엇인가요?',
        answer: '쿠우산은 문서를 효율적으로 생성, 관리 및 검색할 수 있도록 도와주는 고급 AI 기반 문서 플랫폼입니다.'
      },
      q2: {
        question: 'AI 검색은 어떻게 작동하나요?',
        answer: '당사의 AI 검색은 자연어 처리를 사용하여 쿼리를 이해하고 문서에서 관련 결과를 제공합니다.'
      },
      q3: {
        question: '팀에서 쿠우산을 사용할 수 있나요?',
        answer: '네! 쿠우산은 협업 기능과 역할 기반 액세스 제어가 있는 모든 규모의 팀을 위해 설계되었습니다.'
      }
    },
  }
};

export default function RootPage() {
  const { language } = useLanguage();
  const translation = translations[language];
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
    
  return (
    <>
      <RainAnimation />
      <section className={styles.hero}>
        <h1 className={styles.title}>{translation.title}</h1>
        <p className={styles.subtitle}>
          {translation.subtitle}
        </p>
      </section>
      <section className={styles.heroContent}>
        <div className={styles.heroVisual}>
          <div className={styles.floatingCard}>
            <div className={styles.cardContent}>
              <div className={styles.cardLine}></div>
              <div className={styles.cardLine}></div>
              <div className={styles.cardLine}></div>
            </div>
          </div>
        </div>
        <div className={`${styles.buttonGroup}`}>
          {links[language].map((link: LinkItem, index: number) => (
            <Button key={index} href={link.href} variant='outlined' className={'colorOne'}>
              {link.label}
            </Button>
          ))}
        </div>
      </section>
      <section id="faq" className={styles.faq}>
        <div className={styles.container}>
          {/* <h2 className={styles.sectionTitle}>{translation.faq.title}</h2> */}
          <div className={styles.faqList}>
            {[
              { q: translation.faq.q1.question, a: translation.faq.q1.answer },
              { q: translation.faq.q2.question, a: translation.faq.q2.answer },
              { q: translation.faq.q3.question, a: translation.faq.q3.answer }
            ].map((item, index) => (
              <div key={index} className={styles.faqItem}>
                <button 
                  className={styles.faqQuestion}
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                >
                  {item.q}
                  <span className={`${styles.faqIcon} ${expandedFaq === index ? styles.expanded : ''}`}></span>
                </button>
                <div className={`${styles.faqAnswer} ${expandedFaq === index ? styles.open : ''}`}>
                  {item.a}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
