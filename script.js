(() => {
    'use strict';


    /* =====================================================
       TRANSLATIONS
       ===================================================== */

    const translations = {

        en: {

            navWork: 'Work',
            navAbout: 'About',
            navStack: 'Stack',
            navContact: 'Contact',

            availability:
                'Open to remote work',

            heroLine1:
                'AI systems.',

            heroLine2:
                'Automation.',

            heroLine3:
                'Real products.',

            heroDescription:
                'I design software that connects AI, APIs, automation, data, and interfaces into systems that actually do useful work.',

            viewWork:
                'Explore work',

            workEyebrow:
                'Selected systems',

            workTitle:
                'Work you can inspect.',

            ibnDescription:
                'A healthcare platform with centralized administration, isolated clinic operations, appointments, patient queues, permissions, and modular architecture.',

            nexoraDescription:
                'An automated research workflow connecting market analysis, risk controls, historical testing, Telegram monitoring, and trading platform integrations.',

            newsDescription:
                'An automation pipeline for discovering, filtering, prioritizing, verifying, preparing, quality-checking, and publishing important AI and technology updates.',

            englishBotDescription:
                'A bilingual English-learning automation system that generates vocabulary, phrases, grammar corrections, quizzes, and conversation-based content with quality gates, novelty checks, Telegram publishing, and SQLite history.',

            aboutEyebrow:
                'How I work',

            aboutTitle:
                'The interface is only the visible part of the system.',

            aboutP1:
                'My work sits between software engineering, automation, APIs, AI workflows, and product implementation.',

            aboutP2:
                'I focus on turning repetitive or fragmented processes into structured software with explicit rules, integrations, monitoring, and usable interfaces.',

            proof1:
                'documented builds',

            proof2:
                'real project evidence',

            proof3:
                'bilingual experience',

            stackEyebrow:
                'Technical stack',

            stackTitle:
                'Systems first. Tools second.',

            contact1:
                'Build something',

            contact2:
                'useful.'
        },


        ar: {

            navWork:
                'الأعمال',

            navAbout:
                'عني',

            navStack:
                'المهارات',

            navContact:
                'التواصل',

            availability:
                'متاح للعمل عن بُعد',

            heroLine1:
                'أنظمة ذكية.',

            heroLine2:
                'أتمتة.',

            heroLine3:
                'منتجات حقيقية.',

            heroDescription:
                'أصمم برمجيات تربط الذكاء الاصطناعي والواجهات البرمجية والأتمتة والبيانات والواجهات ضمن أنظمة تنجز عملاً حقيقياً.',

            viewWork:
                'استعرض الأعمال',

            workEyebrow:
                'أنظمة مختارة',

            workTitle:
                'أعمال يمكنك فحصها.',

            ibnDescription:
                'منصة صحية تضم إدارة مركزية وعمليات مستقلة للعيادات والمواعيد وطوابير المرضى والصلاحيات وبنية نظام قابلة للتوسع.',

            nexoraDescription:
                'منظومة بحث وأتمتة تربط تحليل السوق وضوابط المخاطر والاختبارات التاريخية ومراقبة تيليغرام وتكاملات منصات التداول.',

            newsDescription:
                'منظومة مؤتمتة لاكتشاف أخبار الذكاء الاصطناعي والتقنية وتصفيتها وترتيبها والتحقق منها وتجهيزها وفحصها ونشرها.',

            englishBotDescription:
                'منظومة تعليم إنكليزي ثنائية اللغة تولد مفردات وعبارات وتصحيحات لغوية واختبارات ومحتوى حوارياً مع فحوص جودة ومنع التكرار والنشر عبر تيليغرام وحفظ سجل المحتوى.',

            aboutEyebrow:
                'طريقة عملي',

            aboutTitle:
                'الواجهة ليست سوى الجزء الظاهر من النظام.',

            aboutP1:
                'يقع عملي بين هندسة البرمجيات والأتمتة والواجهات البرمجية ومسارات الذكاء الاصطناعي وتنفيذ المنتجات.',

            aboutP2:
                'أركز على تحويل العمليات المتكررة أو المبعثرة إلى برمجيات منظمة بقواعد واضحة وتكاملات ومراقبة وواجهات عملية.',

            proof1:
                'مشاريع موثقة',

            proof2:
                'أدلة حقيقية للمشاريع',

            proof3:
                'واجهة ثنائية اللغة',

            stackEyebrow:
                'المنظومة التقنية',

            stackTitle:
                'النظام أولاً. الأدوات ثانياً.',

            contact1:
                'لنَبْنِ شيئاً',

            contact2:
                'مفيداً.'
        }
    };


    let lang =
        localStorage.getItem('portfolio-lang') || 'en';


    function applyLanguage(nextLang) {

        lang = nextLang;

        localStorage.setItem(
            'portfolio-lang',
            lang
        );

        document.documentElement.lang = lang;

        document.documentElement.dir =
            lang === 'ar'
                ? 'rtl'
                : 'ltr';

        document
            .querySelectorAll('[data-i18n]')
            .forEach((element) => {

                const key =
                    element.dataset.i18n;

                const value =
                    translations[lang][key];

                if (value) {
                    element.textContent = value;
                }

            });

    }


    applyLanguage(lang);


    document
        .getElementById('langToggle')
        ?.addEventListener(
            'click',
            () => {

                applyLanguage(
                    lang === 'en'
                        ? 'ar'
                        : 'en'
                );

            }
        );


    /* =====================================================
       MOBILE MENU
       ===================================================== */

    const menuButton =
        document.getElementById('menuButton');

    const mobileMenu =
        document.getElementById('mobileMenu');


    menuButton
        ?.addEventListener(
            'click',
            () => {

                mobileMenu
                    ?.classList
                    .toggle('open');

            }
        );


    mobileMenu
        ?.querySelectorAll('a')
        .forEach((link) => {

            link.addEventListener(
                'click',
                () => {

                    mobileMenu
                        .classList
                        .remove('open');

                }
            );

        });


    /* =====================================================
       REVEAL
       ===================================================== */

    const observer =
        new IntersectionObserver(
            (entries) => {

                entries.forEach(
                    (entry) => {

                        if (entry.isIntersecting) {

                            entry.target
                                .classList
                                .add('visible');

                            observer.unobserve(
                                entry.target
                            );

                        }

                    }
                );

            },
            {
                threshold: .12
            }
        );


    document
        .querySelectorAll('.reveal')
        .forEach(
            (element) => {

                observer.observe(element);

            }
        );


    /* =====================================================
       INVERTING CURSOR
       ===================================================== */

    const finePointer =
        window.matchMedia(
            '(pointer: fine)'
        );

    const reduceMotion =
        window.matchMedia(
            '(prefers-reduced-motion: reduce)'
        );


    if (
        finePointer.matches &&
        !reduceMotion.matches
    ) {

        const dot =
            document.querySelector(
                '.cursor-dot'
            );

        const target =
            document.querySelector(
                '.cursor-target'
            );

        const label =
            document.querySelector(
                '.cursor-label'
            );


        if (dot && target) {

            document.body
                .classList
                .add('cursor-enabled');


            let mouseX =
                window.innerWidth / 2;

            let mouseY =
                window.innerHeight / 2;

            let targetX =
                mouseX;

            let targetY =
                mouseY;


            window.addEventListener(
                'pointermove',
                (event) => {

                    mouseX =
                        event.clientX;

                    mouseY =
                        event.clientY;


                    dot.style.left =
                        `${mouseX}px`;

                    dot.style.top =
                        `${mouseY}px`;

                },
                {
                    passive: true
                }
            );


            function animateCursor() {

                targetX +=
                    (mouseX - targetX)
                    * .18;

                targetY +=
                    (mouseY - targetY)
                    * .18;


                target.style.left =
                    `${targetX}px`;

                target.style.top =
                    `${targetY}px`;


                requestAnimationFrame(
                    animateCursor
                );

            }


            animateCursor();


            document.addEventListener(
                'pointerover',
                (event) => {

                    const interactive =
                        event.target.closest(
                            '[data-cursor], a, button'
                        );


                    if (interactive) {

                        document.body
                            .classList
                            .add('cursor-active');


                        const text =
                            interactive.dataset.cursor
                            || 'OPEN';


                        if (label) {
                            label.textContent = text;
                        }

                    } else {

                        document.body
                            .classList
                            .remove('cursor-active');

                    }

                }
            );


            document.addEventListener(
                'pointerdown',
                () => {

                    document.body
                        .classList
                        .add('cursor-down');

                }
            );


            document.addEventListener(
                'pointerup',
                () => {

                    document.body
                        .classList
                        .remove('cursor-down');

                }
            );

        }

    }

})();
