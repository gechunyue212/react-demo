import K1 from '../img/k1.png';
import K1e from '../img/k1e.png';
import K1r from '../img/k1r.png';
import K1h from '../img/k1h.png';
import K2 from '../img/k2.png';
import K2e from '../img/k2e.png';
import K2r from '../img/k2r.png';
import K2h from '../img/k2h.png';
import productIconImg1 from '../../assets/img/Icon1.png';
import productIconImg2 from '../../assets/img/Icon2.png';
import productIconImg3 from '../../assets/img/Icon3.png';
import productIconImg4 from '../../assets/img/Icon4.png';
import productIconImg5 from '../../assets/img/Icon5.png';
import productIconImg6 from '../../assets/img/Icon6.png';
import technologyIconImg1 from '../../assets/img/Bitmap1.png';
import technologyIconImg2 from '../../assets/img/Bitmap2.png';
import technologyIconImg3 from '../../assets/img/Bitmap3.png';
import technologyIconImg4 from '../../assets/img/Bitmap4.png';
import roadMapEN from '../../assets/img/roadmapEN.png';
import roadMapCN from '../../assets/img/roadmapCN.png';
import roadMapJAP from '../../assets/img/roadmaper.png';
import roadMapKOR from '../../assets/img/roadmaph.png';

export const head = {

    CN:{
        nav:[
            {
                title:"核心优势",
                href:"#CoreAdvantages"
            },
            {
                title:"白皮书",
                href:"#Whitepaper"
            },
            {
                title:"路线图",
                href:"#DevelopmentPath"
            }
        ],
        title:"让金融进入幂时代",
        bannerText:["全球首个数字期货&外汇交易所","让金融进入幂时代"],
        noticeText:"公告"
    },

    EN:{
        nav:[
            {
                title:"Core Advantages",
                href:"#CoreAdvantages"
            },
            {
                title:"Whitepaper",
                href:"#Whitepaper"
            },
            {
                title:"Development Path",
                href:"#DevelopmentPath"
            }
        ],
        title:"Crypto Derivatives Exchange",
        bannerText:["The first exchange platform for digital asset derivatives & foreign currency in the world","Leading finance to enter an exponential——growth era"],
        noticeText:"notice"
    },

    JAP:{
        nav:[
            {
                title:"核心優勢",
                href:"#CoreAdvantages"
            },
            {
                title:"白書",
                href:"#Whitepaper"
            },
            {
                title:"路線図",
                href:"#DevelopmentPath"
            }
        ],
        title:"金融を冪時代に入らせる",
        bannerText:["全球始めのデジタル先物＆外貨取引所","金融を冪時代に入らせる"],
        noticeText:"お知らせ"
    },

    AR:{
        nav:[
            {
                title:"خريطة الطريق",
                href:"#CoreAdvantages"
            },
            {
                title:" ورقة بيضاء",
                href:"#Whitepaper"
            },
            {
                title:"الميزة الأساسية ",
                href:"#DevelopmentPath"
            }
        ],
        title:"جعل المالية للدخول فى عصر السلطة",
        bannerText:["أول مصرف للعقود الآجلة الرقمية والعملات الأجنبية في العالم","جعل المالية للدخول فى عصر السلطة"],
        noticeText:"إعلان"
    },

    KOR:{
        nav:[
            {
                title:"핵심 우세",
                href:"#CoreAdvantages"
            },
            {
                title:"화이트",
                href:"#Whitepaper"
            },
            {
                title:"페이퍼 노선도",
                href:"#DevelopmentPath"
            }
        ],
        title:"금융이 멱시대로 들어서다",
        bannerText:["전 세계 최초로 된 디지텔 선물(금융)&외환 시장","금융이 멱시대로 들어서다"],
        noticeText:"발표"
    }


};

export const kChart = {

    CN:{
        kChart:K1,
        table:K2,
        numItems:[
            {
                title:"当前流通量",
                number:"0 B7T"
            },
            {
                title:"今日产出实时数量",
                number:"0 B7T"
            },
            {
                title:"今日待分配收入",
                number:"0.0000000BTC"
            },
            {
                title:"昨日已分配收入",
                number:"0.0000000BTC"
            }
        ],
        chartText:{
            title:"B7 主力指数",
            max:"最高",
            min:"最低",
            rise:"上涨币种",
            fall:"下跌币种",
            remark:"指数分时走势"
        }
    },

    EN:{
        kChart:K1e,
        table:K2e,
        numItems:[
            {
                title:"Current Volume",
                number:"0 B7T"
            },
            {
                title:"Mining output of today",
                number:"0 B7T"
            },
            {
                title:"Cumulative revenue to be distributed today",
                number:"0.0000000BTC"
            },
            {
                title:"Cumulative revenue distributed in yesterday",
                number:"0.0000000BTC"
            }
        ],
        chartText:{
            title:"B7 Index",
            max:"High",
            min:"Low",
            rise:"Top Performances",
            fall:"Bottom Performances",
            remark:"Index Kline Trend"
        }
    },

    JAP:{
        kChart:K1r,
        table:K2r,
        numItems:[
            {
                title:"目前流通高",
                number:"0 B7T"
            },
            {
                title:"今日産出リアルタイム数量",
                number:"0 B7T"
            },
            {
                title:"今日分配待ち収入",
                number:"0.0000000BTC"
            },
            {
                title:"昨日分配済み収入",
                number:"0.0000000BTC"
            }
        ],
        chartText:{
            title:"B7 主力指数",
            max:"最高",
            min:"最低",
            rise:"アップ貨幣種類",
            fall:"ダウン貨幣種類",
            remark:"指数時差チャー"
        }
    },

    AR:{
        kChart:K1e,
        table:K2e,
        numItems:[
            {
                title:"سيولة حالية",
                number:"0 B7T"
            },
            {
                title:"كمية انتاج اليوم في الوقت الحقيقي",
                number:"0 B7T"
            },
            {
                title:"الدخل اليوم الذي لم يتم توزيعه",
                number:"0.0000000BTC"
            },
            {
                title:"الدخل المكتسب بالأمس",
                number:"0.0000000BTC"
            }
        ],
        chartText:{
            title:"",
            max:"",
            min:"",
            rise:"",
            fall:"",
            remark:""
        }
    },

    KOR:{
        kChart:K1h,
        table:K2h,
        numItems:[
            {
                title:"현재 유통량",
                number:"0 B7T"
            },
            {
                title:"오늘 산출 실시 수량",
                number:"0 B7T"
            },
            {
                title:"오늘 분배 대기 수입",
                number:"0.0000000BTC"
            },
            {
                title:"어제 분배 완료 수입",
                number:"0.0000000BTC"
            }
        ],
        chartText:{
            title:"B7 주력 지수",
            max:"최고",
            min:"최저",
            rise:"오른 화페 종류",
            fall:"하락 화페 종류",
            remark:"시간때 지수 추세"
        }
    },

};

export const product = {

    CN:{
        title:"产品优势",
        products:[
            {
                iconImg:productIconImg1,
                title:"新型数字资产合约",
                description:"多种数字资产，合约类型多样，杠杆灵活、自由选择，可投票决定"
            },
            {
                iconImg:productIconImg2,
                title:"创新指数",
                description:"基于创新指数开发合约产品，跟踪资产在不同时间框架内的价格波动"
            },
            {
                iconImg:productIconImg3,
                title:"外汇合约",
                description:"数字货币打通多种外汇交易通道，全球即时交易"
            },
            {
                iconImg:productIconImg4,
                title:"ETF组合交易",
                description:"多样化篮子、易于投资，适合长线"
            },
            {
                iconImg:productIconImg5,
                title:"量化交易",
                description:"发布策略获得平台奖励，量化策略可交易"
            },
            {
                iconImg:productIconImg6,
                title:"先进的交易工具",
                description:"通过智能投顾、技术指标、强大API通知和执行你的交易策略"
            }
        ]
    },

    EN:{
        title:"Product Advantages",
        products:[
            {
                iconImg:productIconImg1,
                title:"New digital asset contracts",
                description:"Multiple digital assets, various types of contracts, flexible leverage, listing vote"
            },
            {
                iconImg:productIconImg2,
                title:"New Index",
                description:"Contract products based on new index, tracking the price change of digital assets in different time frame"
            },
            {
                iconImg:productIconImg3,
                title:"Foreign currency contract",
                description:"Cryptocurrencies opens up a variety of foreign exchange trading channels, instant trading for global area"
            },
            {
                iconImg:productIconImg4,
                title:"ETF Trading",
                description:"Diverse baskets, easy to operate, suitable for long——term investment"
            },
            {
                iconImg:productIconImg5,
                title:"Quantitative trading",
                description:"Rewards by posting strategies，tradable quantitative strategies"
            },
            {
                iconImg:productIconImg6,
                title:"Advanced trading tools",
                description:"Noticing and conducting your trading strategies by Robo——Advisor, technical index and powerful API"
            }
        ]
    },

    JAP:{
        title:"製品優勢",
        products:[
            {
                iconImg:productIconImg1,
                title:"新型デジタル資産契約",
                description:"多種なデジタル資産、契約が多様、てこ敏捷、自由選択、投票で決めることができる"
            },
            {
                iconImg:productIconImg2,
                title:"創新指数",
                description:"創新指数により契約製品を開発し、資産が違う時間に値段の起伏をフォローする"
            },
            {
                iconImg:productIconImg3,
                title:"外貨契約",
                description:"デジタル貨幣は多種類な外貨取引ルートを作り出し、全球が即時に取引することができる"
            },
            {
                iconImg:productIconImg4,
                title:"ETF組合取引",
                description:"多様化カゴ、投資しやすい、ロングラインに相応しい"
            },
            {
                iconImg:productIconImg5,
                title:"量化取引",
                description:"策略を発表しプラットフォームの奨励を貰う。量化策略が取引りすることができる"
            },
            {
                iconImg:productIconImg6,
                title:"先進な取引工具",
                description:"インテリジェント投資、技術指標を通して、API通知を強め、取引策略を実行する"
            }
        ]
    },

    AR:{
        title:"ميزة المنتج",
        products:[
            {
                iconImg:productIconImg1,
                title:"عقد الأصول الرقمية الجديدة",
                description:"مجموعة متنوعة من الأصول الرقمية، ومجموعة متنوعة من أنواع العقود، رافعة مرنة، اختيار حري، القرار وفقا للتصويت"
            },
            {
                iconImg:productIconImg2,
                title:"مؤشر الابتكار",
                description:"تطوير منتجات تعاقدية على أساس مؤشر الابتكار، لتتبع تقلبات أسعار الأصول فى ضمن أطر زمنية مختلفة"
            },
            {
                iconImg:productIconImg3,
                title:"عقد العملات الأجنبية",
                description:"العملات الرقمية لفتح مجموعة متنوعة من قنوات تداول العملات الأجنبية، للقيام بالتجارة العالمية في الوقت الحقيقي"
            },
            {
                iconImg:productIconImg4,
                title:"صفقة مركبة ETF",
                description:"سلال متنوعة، سهلة للاستثمار، ومناسبة للفترة الطويلة"
            },
            {
                iconImg:productIconImg5,
                title:"معاملة الكمية",
                description:"إطلاق استراتيجية للحصول على مكافآت المنصة، يمكن تداول استراتيجية الكمية"
            },
            {
                iconImg:productIconImg6,
                title:"أدوات التداول المتقدمة",
                description:"من خلال الاستثمار الذكي، المؤشرات الفنية، API قوية لإخطار وتنفيذ استراتيجية التداول الخاصة بك."
            }
        ]
    },

    KOR:{
        title:"제품 우세",
        products:[
            {
                iconImg:productIconImg1,
                title:"신형 디지털 자산 계약 ",
                description:"다양한 디지털 자산,다양한 계약 유형,지레 원활,자유선택,투표가능)결정"
            },
            {
                iconImg:productIconImg2,
                title:"창신 지수",
                description:"창신 지수 계약 제품을 기초로 자산이 다른 시간구조 내에 가격 파동 추적"
            },
            {
                iconImg:productIconImg3,
                title:"외화 계약",
                description:"디지텔 화페가 다양한 외화 거래 통로 관통하여 전 세계에서 즉시 거래"
            },
            {
                iconImg:productIconImg4,
                title:"ETF 조합 거래",
                description:"다양한 바구니,투자가 편리하여  긴 시간 보유 적절하다"
            },
            {
                iconImg:productIconImg5,
                title:"계량화 거래",
                description:"책략 발표하여 플렛폼에서 장려 획득함으로 계량화 책략 거래 가능하다"
            },
            {
                iconImg:productIconImg6,
                title:"선진적인 거래 툴",
                description:"지능화한 투자 고문을 통해 기술 지표,강대한API통지와 자신의 거래 책략을 집행하다"
            }
        ]
    },

};

export const technology = {

    CN:{
        title:"技术优势",
        technology:[
            {
                iconImg:technologyIconImg1,
                title:"金融级安全系统",
                description:[
                    "多层、多集群系统架构",
                    "多个国外加速节点确保网络畅通",
                    "专业分布式架构和防DDOS攻击系统"
                ]
            },
            {
                iconImg:technologyIconImg2,
                title:"高性能、高流动性",
                description:[
                    "高达140万单/每秒高性能撮合引擎技术",
                    "费用低、透明",
                    "提供比特币暗池服务"
                ]
            },
            {
                iconImg:technologyIconImg3,
                title:"全平台、多语言",
                description:[
                    "支持Windows、Mac、iOS、Android等不同终端",
                    "提供英语、中文简体、中文繁体、韩语、日语等主流语言"
                ]
            },
            {
                iconImg:technologyIconImg4,
                title:"去中心化",
                description:[
                    "链上完成一切交易环节，避免资产被托管",
                    "DAO组织运营，公开、透明、民主"
                ]
            },
        ]
    },

    EN:{
        title:"Technology Advantages",
        technology:[
            {
                iconImg:technologyIconImg1,
                title:"Security system at financial level",
                description:[
                    "Multi——layer and multi——cluster system architecture",
                    "Multiple foreign acceleration nodes ensure smooth network",
                    "Professional distributed architecture and anti —— DDOS attack system"
                ]
            },
            {
                iconImg:technologyIconImg2,
                title:"High performance, high liquidity",
                description:[
                    "Up to 1.4 million deals every second high performance matching engine technology",
                    "Cost——effective， transparent",
                    "Provide BTC “dark pools” service"
                ]
            },
            {
                iconImg:technologyIconImg3,
                title:"All——platform, multi——language",
                description:[
                    "Accessible by iOS, Android, Windows and Mac platforms. All functions are supported.",
                    "Support mainstream languages such as : English, Chinese Simplified, Chinese Traditional, Korean, Japanese, etc."
                ]
            },
            {
                iconImg:technologyIconImg4,
                title:"Decentrialized",
                description:[
                    "Complete all transaction links on the chain to avoid asset custody",
                    "DAO organizes operations, open, transparent and democratic"
                ]
            },
        ]
    },

    JAP:{
        title:"技術優勢",
        technology:[
            {
                iconImg:technologyIconImg1,
                title:"金融級な安全システム",
                description:[
                    "多層、マルチクラスターシステム枠組み",
                    "何個の海外加速ノードはインターネットが滞りがなく順調するのを確保する",
                    "専門な分布式枠組みとDDOS攻撃を防止システム"
                ]
            },
            {
                iconImg:technologyIconImg2,
                title:"高性能、高流動性",
                description:[
                    "140万/秒に達する高性能仲介エンジン技術",
                    "費用が低い、透明",
                    "ビットコインダークプールサービスを提供する"
                ]
            },
            {
                iconImg:technologyIconImg3,
                title:"全てのプラットフォームを適用し、多言語がある",
                description:[
                    "Windows、Mac、iOS、Android等違いなターミナルを適用する",
                    "英語、中国語簡体字、中国語繁体字、韓語、日本語等の主流言語を提供する"
                ]
            },
            {
                iconImg:technologyIconImg4,
                title:"中心化",
                description:[
                    "チェーンで全ての取引環節を完成し、資産が信託されるのを避ける",
                    "DAOが運営を組織する。公開、透明、民主"
                ]
            },
        ]
    },

    AR:{
        title:"ميزة فنية",
        technology:[
            {
                iconImg:technologyIconImg1,
                title:"نظام الأمن من المستوى المالي",
                description:[
                    "هيكل النظام من متعدد المستويات ومتعدد المجموعات",
                    "متعددة نقاط التسريع الخارجية لضمان سلسة الشبكة",
                    "الهياكل الموزعة المهنية ونظام الهجوم ضد DDOS"
                ]
            },
            {
                iconImg:technologyIconImg2,
                title:"عالية الأداء، سيولة عالية",
                description:[
                    "تكنولوجيا محرك اقتران عالية الأداء ما يصل إلى 1.4 مليون / كل ثانية",
                    "منخفضة التكلفة، وشفافة",
                    "توفير خدمة خلفية بيتكوين"
                ]
            },
            {
                iconImg:technologyIconImg3,
                title:"منصة كاملة، متعددة اللغات",
                description:[
                    "دعم المطاريف المختلفة مثل Windows ، Mac ، iOS ، Android وإلخ",
                    "توفير اللغات السائدة مثل الإنجليزية ، والصينية المبسطة ، والصينية التقليدية ، والكورية ، واليابانية وإلخ"
                ]
            },
            {
                iconImg:technologyIconImg4,
                title:"لامركزية",
                description:[
                    "إكمال جميع روابط التداول على السلسلة، لتجنب استضافة الأصول",
                    "منظمة DAO لتشغيل العمليات، مفتوحة وشفافية وديمقراطية"
                ]
            },
        ]
    },

    KOR:{
        title:"기술 우세",
        technology:[
            {
                iconImg:technologyIconImg1,
                title:"금융급 안전 시스템",
                description:[
                    "다중층화,다군집시스템 구조",
                    "다수의 국외 가속 노드로 인터넷 유창을 화보",
                    "전문 분포식 구조와DDOS공격 예방 시스템"
                ]
            },
            {
                iconImg:technologyIconImg2,
                title:"고성능,고유동성",
                description:[
                    "140만개/초에 달하는 고성능 중재 엔진 기술",
                    "비용낮고,투명하다",
                    "비트코인 암지 서비스 제공"
                ]
            },
            {
                iconImg:technologyIconImg3,
                title:"다 플렛폼,다종 언어",
                description:[
                    "Windows、Mac、iOS、Android등 다른 단말 지지",
                    "영어,중국어 간체,중국어 번체,한국어,일본어 등 주류 언너"
                ]
            },
            {
                iconImg:technologyIconImg4,
                title:"중앙 집권화",
                description:[
                    "체인에서 모든 거래 환절 완성함으로 자산 위탁 관리 방지한다",
                    "DAO저직운영,공개,투명,민주"
                ]
            },
        ]
    },

};

export const documents = {

    CN:{
        title:"下载白皮书",
        content:"如果想要深入了解我们的业务，请下载白皮书阅读详情"
    },

    EN:{
        title:"Download Whitepaper",
        content:"Please download our whitepaper for more details"
    },

    JAP:{
        title:"白書ダウンロード",
        content:"私達の業務を深く了解したければ、白書をダウンロードしお読みください"
    },

    AR:{
        title:"تحميل ورقة بيضاء",
        content:"إذا ترغب معرفة المزيد عن أعمالنا ، يرجى تحميل الورقة البيضاء"
    },

    KOR:{
        title:"화이트 페이퍼 다운로드",
        content:"저희 업무를 더 알고 싶으면 상세내용은 화이트 페이퍼를 다운로드 하셔서 읽으세요"
    },

};

export const paper = {

    CN:{
        items:[
            {
                text:"白皮书",
                size:"150kb"
            },
            {
                text:"简介",
                size:"112kb"
            }
        ],
        btnText:"下载"
    },

    EN:{
        items:[
            {
                text:"WHITE PAPER",
                size:"150kb"
            },
            {
                text:"ONE PAGER",
                size:"112kb"
            }
        ],
        btnText:"Download"
    },

    JAP:{
        items:[
            {
                text:"はくしょ",
                size:"150kb"
            },
            {
                text:"いっちょう",
                size:"112kb"
            }
        ],
        btnText:"ダウンロード"
    },

    AR:{
        items:[
            {
                text:"",
                size:"150kb"
            },
            {
                text:"",
                size:"112kb"
            }
        ],
        btnText:"Download"
    },

    KOR:{
        items:[
            {
                text:"백서",
                size:"150kb"
            },
            {
                text:"한 페이지",
                size:"112kb"
            }
        ],
        btnText:"다운로드하다"
    },

};

export const roadMap = {

    CN:{
        img:roadMapCN,
        title:"路线图",
        items:[
            {
                title:"2018Q1",
                content:[
                    "提出商业概念并验证",
                ],
                active:false,
                turnDown:false,
                leftMargin: 88,
            },
            {
                title:"2018Q2",
                content:[
                    "组建团队",
                    "完成概念验证",
                ],
                active:false,
                turnDown:true,
                leftMargin: 320,
            },
            {
                title:"2018Q3",
                content:[
                    "白皮书1.0、2.0版本发布",
                    "完成融资",
                    "币币交易、交易即挖矿、存币即挖矿、邀请挖矿",
                    "平台通证交易",
                    "团购节点",
                ],
                active:true,
                turnDown:false,
                leftMargin: 551,
            },
            {
                title:"2018Q4",
                content:[
                    "创新指数",
                    "定期合约",
                    "ETF",
                    "投票功能",
                    "通证经济与实体经济孵化实验区",
                ],
                active:false,
                turnDown:true,
                leftMargin: 769,
            },
            {
                title:"2019Q1",
                content:[
                    "量化工具",
                    "智能投顾",
                    "外汇合约",
                ],
                active:false,
                turnDown:false,
                leftMargin: 987,
            }
        ]
    },

    EN:{
        img:roadMapEN,
        title:"RoadMap",
        items:[
            {
                title:"2018Q1",
                content:[
                    "Proposed a business concept, and verified",
                ],
                active:false,
                turnDown:false,
                leftMargin: 88,
            },
            {
                title:"2018Q2",
                content:[
                    "Project team formed",
                    "Completed the verification of the concept",
                ],
                active:false,
                turnDown:true,
                leftMargin: 320,
            },
            {
                title:"2018Q3",
                content:[
                    "Released of white paper 1.0 version and 2.0 version",
                    "Completed financing",
                    "coin-coin transactions,mining by trading,",
                    "mining by depositing,mining by inviting",
                    "platform token trading",
                    '"Group purchase" node',
                ],
                active:true,
                turnDown:false,
                leftMargin: 551,
            },
            {
                title:"2018Q4",
                content:[
                    "Innovation index",
                    "Term contracts",
                    "ETF",
                    "Voting function",
                    "Token Economic and offline Economy Incubation Experimental Area",
                ],
                active:false,
                turnDown:true,
                leftMargin: 769,
            },
            {
                title:"2019Q1",
                content:[
                    "Quantitative tools",
                    "robo-advisor",
                    "Foreign exchange contracts",
                ],
                active:false,
                turnDown:false,
                leftMargin: 987,
            }
        ]
    },

    JAP:{
        img:roadMapJAP,
        title:"路線図",
        items:[
            {
                title:"2018Q1",
                content:[
                    "商業概念を提出し認証する",
                ],
                active:false,
                turnDown:false,
                leftMargin: 88,
            },
            {
                title:"2018Q2",
                content:[
                    "チームを組織する",
                    "概念認証を完成する",
                ],
                active:false,
                turnDown:true,
                leftMargin: 320,
            },
            {
                title:"2018Q3",
                content:[
                    "白書1.0、2.0バージョンを発布する",
                    "融資を完成する",
                    "貨幣取引、取引が即ち採鉱、貨幣保存が即ち採鉱、採鉱を誘う",
                    "プラットフォームトークン取引",
                    "団体購入段階",
                ],
                active:true,
                turnDown:false,
                leftMargin: 551,
            },
            {
                title:"2018Q4",
                content:[
                    "創新指数",
                    "定期契約",
                    "ETF",
                    "投票機能",
                    "トークン経済と実体経済の孵化実験区",
                ],
                active:false,
                turnDown:true,
                leftMargin: 769,
            },
            {
                title:"2019Q1",
                content:[
                    "量化工具",
                    "インテリジェント投資",
                    "外貨契約",
                ],
                active:false,
                turnDown:false,
                leftMargin: 987,
            }
        ]
    },

    AR:{
        img:roadMapEN,
        title:"路线图",
        items:[
            {
                title:"2018Q1",
                content:[
                    "提出商业概念并验证",
                ],
                active:false,
                turnDown:false,
                leftMargin: 88,
            },
            {
                title:"2018Q2",
                content:[
                    "组建团队",
                    "完成概念验证",
                ],
                active:false,
                turnDown:true,
                leftMargin: 320,
            },
            {
                title:"2018Q3",
                content:[
                    "白皮书1.0、2.0版本发布",
                    "完成融资",
                    "币币交易、交易即挖矿、存币即挖矿、邀请挖矿",
                    "平台通证交易",
                    "团购节点",
                ],
                active:true,
                turnDown:false,
                leftMargin: 551,
            },
            {
                title:"2018Q4",
                content:[
                    "创新指数",
                    "定期合约",
                    "ETF",
                    "投票功能",
                    "通证经济与实体经济孵化实验区",
                ],
                active:false,
                turnDown:true,
                leftMargin: 769,
            },
            {
                title:"2019Q1",
                content:[
                    "量化工具",
                    "智能投顾",
                    "外汇合约",
                ],
                active:false,
                turnDown:false,
                leftMargin: 987,
            }
        ]
    },

    KOR:{
        img:roadMapKOR,
        title:"노선도",
        items:[
            {
                title:"2018Q1",
                content:[
                    "상업개념 및 검증 제출",
                ],
                active:false,
                turnDown:false,
                leftMargin: 88,
            },
            {
                title:"2018Q2",
                content:[
                    "팀 구성",
                    "개념 검증 완성",
                ],
                active:false,
                turnDown:true,
                leftMargin: 320,
            },
            {
                title:"2018Q3",
                content:[
                    "화이트 페이퍼1.0、2.0 버전 발표",
                    "융자 완성",
                    "화페대 화페 거래,거래 즉 채굴,화페 즉 채굴,요청 채굴",
                    "플랫폼 토큰 거래",
                    "단체 구매 노드",
                ],
                active:true,
                turnDown:false,
                leftMargin: 551,
            },
            {
                title:"2018Q4",
                content:[
                    "창신 지수",
                    "정기 계약",
                    "ETF",
                    "투표 기능",
                    "토큰경제와 오프라인 경제부화 실험구역",
                ],
                active:false,
                turnDown:true,
                leftMargin: 769,
            },
            {
                title:"2019Q1",
                content:[
                    "계량화 툴",
                    "지능 투자 고문",
                    "외화 계약",
                ],
                active:false,
                turnDown:false,
                leftMargin: 987,
            }
        ]
    },

};

export const download = {

    CN:{
        title:"下载",
        description1:[
            "多平台终端接入",
            "覆盖IOS、Android、Windows、Mac多个平台"
        ],
        description2:[
            "",
            ""
        ],
        img:""
    },

    EN:{
        title:"Download",
        description1:[
            "Multi——platform terminal access",
            "Cover multiple platforms of IOS, Android, Windows, Mac"
        ],
        description2:[
            "",
            ""
        ],
        img:""
    },

    JAP:{
        title:"ダウンロード",
        description1:[
            "マルチプラットフォームがアクセスします",
            "IOS、Android、Windows、Macなどのマルチプラットフォームにカバーします"
        ],
        description2:[
            "",
            ""
        ],
        img:""
    },

    AR:{
        title:"تحميل",
        description1:[
            "قم بتنزيل B7 عميل الجوال",
            "تحقق من السوق وتداول التجارة في أي وقت"
        ],
        description2:[
            "",
            ""
        ],
        img:""
    },

    KOR:{
        title:"다운로드",
        description1:[
            "멀티 플랫폼 단말 접속",
            "IOS、Android、Windows、Mac 많은 플랫폼을 뒤덮다"
        ],
        description2:[
            "",
            ""
        ],
        img:""
    },

};

export const foot = {

    CN:{
        nav:[
            {
                text:"关于我们",
                href:"javascript:void(0)"
            },{
                text:"服务条款",
                href:"javascript:void(0)"
            },{
                text:"免责声明",
                href:"javascript:void(0)"
            },{
                text:"隐私保护",
                href:"javascript:void(0)"
            },{
                text:"费率标准",
                href:"javascript:void(0)"
            },{
                text:"交易指南",
                href:"javascript:void(0)"
            },{
                text:"API文档",
                href:"javascript:void(0)"
            }
        ]
    },

    EN:{
        nav:[
            {
                text:"About us",
                href:"javascript:void(0)"
            },{
                text:"Terms of service",
                href:"javascript:void(0)"
            },{
                text:"Disclaimer",
                href:"javascript:void(0)"
            },{
                text:"Privacy policy",
                href:"javascript:void(0)"
            },{
                text:"Fee standards",
                href:"javascript:void(0)"
            },{
                text:"Trading guide",
                href:"javascript:void(0)"
            },{
                text:"API file",
                href:"javascript:void(0)"
            }
        ]
    },

    JAP:{
        nav:[
            {
                text:"当社について",
                href:"javascript:void(0)"
            },{
                text:"利用規約",
                href:"javascript:void(0)"
            },{
                text:"免責事項",
                href:"javascript:void(0)"
            },{
                text:"プライバシー保護",
                href:"javascript:void(0)"
            },{
                text:"料金基準",
                href:"javascript:void(0)"
            },{
                text:"取引ガイド",
                href:"javascript:void(0)"
            },{
                text:"APIファイル",
                href:"javascript:void(0)"
            }
        ]
    },

    AR:{
        nav:[
            {
                text:"",
                href:"javascript:void(0)"
            },{
                text:"",
                href:"javascript:void(0)"
            },{
                text:"",
                href:"javascript:void(0)"
            },{
                text:"",
                href:"javascript:void(0)"
            },{
                text:"",
                href:"javascript:void(0)"
            },{
                text:"",
                href:"javascript:void(0)"
            },{
                text:"",
                href:"javascript:void(0)"
            }
        ]
    },

    KOR:{
        nav:[
            {
                text:"저희에 대하여",
                href:"javascript:void(0)"
            },{
                text:"서비스 조항",
                href:"javascript:void(0)"
            },{
                text:"면책 성명",
                href:"javascript:void(0)"
            },{
                text:"프라이버시 보호",
                href:"javascript:void(0)"
            },{
                text:"요율 기준",
                href:"javascript:void(0)"
            },{
                text:"거래 가이드",
                href:"javascript:void(0)"
            },{
                text:"API 문서",
                href:"javascript:void(0)"
            }
        ]
    },

};
export const tabs = {
    EN:{
        tab:"MARKED",
        thead:["Paris","Last Price","Change","24h Hight","24h Low","24h Volume"],
        MARKED:{
            tbody:[],
        },
        USDT:{
            tbody:[
                {
                    tr:[
                        {
                            td:"B7T/USDT",
                        },{
                            td:"—/￥—"
                        },{
                            td:"—"
                        },{
                            td:"——"
                        },{
                            td:"——"
                        },{
                            td:"——"
                        }
                    ],
                    active:false,
                },{
                    tr:[
                        {
                            td:"BCH/USDT",
                        },{
                            td:"—/￥—"
                        },{
                            td:"—"
                        },{
                            td:"——"
                        },{
                            td:"——"
                        },{
                            td:"——"
                        }
                    ],
                    active:false,
                },{
                    tr:[
                        {
                            td:"ETH/USDT",
                        },{
                            td:"—/￥—"
                        },{
                            td:"—"
                        },{
                            td:"——"
                        },{
                            td:"——"
                        },{
                            td:"——"
                        }
                    ],
                    active:false,
                }
            ]
        },
        BTC:{
            tbody:[
                {
                    tr:[
                        {
                            td:"BCH/BTC",
                        },{
                            td:"—/￥—"
                        },{
                            td:"—"
                        },{
                            td:"——"
                        },{
                            td:"——"
                        },{
                            td:"——"
                        }
                    ],
                    active:false,
                },{
                    tr:[
                        {
                            td:"LTC/BTC",
                        },{
                            td:"—/￥—"
                        },{
                            td:"—"
                        },{
                            td:"——"
                        },{
                            td:"——"
                        },{
                            td:"——"
                        }
                    ],
                    active:false,
                },{
                    tr:[
                        {
                            td:"EOS/BTC",
                        },{
                            td:"—/￥—"
                        },{
                            td:"—"
                        },{
                            td:"——"
                        },{
                            td:"——"
                        },{
                            td:"——"
                        }
                    ],
                    active:false,
                }
            ]
        },
        ETH:{
            tbody:[
                {
                    tr:[
                        {
                            td:"BCH/ETH",
                        },{
                            td:"—/￥—"
                        },{
                            td:"—"
                        },{
                            td:"——"
                        },{
                            td:"——"
                        },{
                            td:"——"
                        }
                    ],
                    active:false,
                },{
                    tr:[
                        {
                            td:"LTC/ETH",
                        },{
                            td:"—/￥—"
                        },{
                            td:"—"
                        },{
                            td:"——"
                        },{
                            td:"——"
                        },{
                            td:"——"
                        }
                    ],
                    active:false,
                },{
                    tr:[
                        {
                            td:"EOS/ETH",
                        },{
                            td:"—/￥—"
                        },{
                            td:"—"
                        },{
                            td:"——"
                        },{
                            td:"——"
                        },{
                            td:"——"
                        }
                    ],
                    active:false,
                } 
            ]
        },
    },
    CN:{
        tab:"自选",
        thead:["交易对","最新价格","涨幅","24h高点","24h低点","24h交易量"],
        "自选":{
            tbody:[],
        },
        USDT:{
            tbody:[
                {
                    tr:[
                        {
                            td:"B7T/USDT",
                        },{
                            td:"—/￥—"
                        },{
                            td:"—"
                        },{
                            td:"——"
                        },{
                            td:"——"
                        },{
                            td:"——"
                        }
                    ],
                    active:false,
                },{
                    tr:[
                        {
                            td:"BCH/USDT",
                        },{
                            td:"—/￥—"
                        },{
                            td:"—"
                        },{
                            td:"——"
                        },{
                            td:"——"
                        },{
                            td:"——"
                        }
                    ],
                    active:false,
                },{
                    tr:[
                        {
                            td:"ETH/USDT",
                        },{
                            td:"—/￥—"
                        },{
                            td:"—"
                        },{
                            td:"——"
                        },{
                            td:"——"
                        },{
                            td:"——"
                        }
                    ],
                    active:false,
                }
            ]
        },
        BTC:{
            tbody:[
                {
                    tr:[
                        {
                            td:"BCH/BTC",
                        },{
                            td:"—/￥—"
                        },{
                            td:"—"
                        },{
                            td:"——"
                        },{
                            td:"——"
                        },{
                            td:"——"
                        }
                    ],
                    active:false,
                },{
                    tr:[
                        {
                            td:"LTC/BTC",
                        },{
                            td:"—/￥—"
                        },{
                            td:"—"
                        },{
                            td:"——"
                        },{
                            td:"——"
                        },{
                            td:"——"
                        }
                    ],
                    active:false,
                },{
                    tr:[
                        {
                            td:"EOS/BTC",
                        },{
                            td:"—/￥—"
                        },{
                            td:"—"
                        },{
                            td:"——"
                        },{
                            td:"——"
                        },{
                            td:"——"
                        }
                    ],
                    active:false,
                }
            ]
        },
        ETH:{
            tbody:[
                {
                    tr:[
                        {
                            td:"BCH/ETH",
                        },{
                            td:"—/￥—"
                        },{
                            td:"—"
                        },{
                            td:"——"
                        },{
                            td:"——"
                        },{
                            td:"——"
                        }
                    ],
                    active:false,
                },{
                    tr:[
                        {
                            td:"LTC/ETH",
                        },{
                            td:"—/￥—"
                        },{
                            td:"—"
                        },{
                            td:"——"
                        },{
                            td:"——"
                        },{
                            td:"——"
                        }
                    ],
                    active:false,
                },{
                    tr:[
                        {
                            td:"EOS/ETH",
                        },{
                            td:"—/￥—"
                        },{
                            td:"—"
                        },{
                            td:"——"
                        },{
                            td:"——"
                        },{
                            td:"——"
                        }
                    ],
                    active:false,
                } 
            ]
        },
    },
    JAP:{
        tab:"自選する",
        thead:["取引","最新値段","増加量","24h最高","24h最低","24h取引量"],
        自選する:{
            tbody:[],
        },
        USDT:{
            tbody:[
                {
                    tr:[
                        {
                            td:"B7T/USDT",
                        },{
                            td:"—/￥—"
                        },{
                            td:"—"
                        },{
                            td:"——"
                        },{
                            td:"——"
                        },{
                            td:"——"
                        }
                    ],
                    active:false,
                },{
                    tr:[
                        {
                            td:"BCH/USDT",
                        },{
                            td:"—/￥—"
                        },{
                            td:"—"
                        },{
                            td:"——"
                        },{
                            td:"——"
                        },{
                            td:"——"
                        }
                    ],
                    active:false,
                },{
                    tr:[
                        {
                            td:"ETH/USDT",
                        },{
                            td:"—/￥—"
                        },{
                            td:"—"
                        },{
                            td:"——"
                        },{
                            td:"——"
                        },{
                            td:"——"
                        }
                    ],
                    active:false,
                }
            ]
        },
        BTC:{
            tbody:[
                {
                    tr:[
                        {
                            td:"BCH/BTC",
                        },{
                            td:"—/￥—"
                        },{
                            td:"—"
                        },{
                            td:"——"
                        },{
                            td:"——"
                        },{
                            td:"——"
                        }
                    ],
                    active:false,
                },{
                    tr:[
                        {
                            td:"LTC/BTC",
                        },{
                            td:"—/￥—"
                        },{
                            td:"—"
                        },{
                            td:"——"
                        },{
                            td:"——"
                        },{
                            td:"——"
                        }
                    ],
                    active:false,
                },{
                    tr:[
                        {
                            td:"EOS/BTC",
                        },{
                            td:"—/￥—"
                        },{
                            td:"—"
                        },{
                            td:"——"
                        },{
                            td:"——"
                        },{
                            td:"——"
                        }
                    ],
                    active:false,
                }
            ]
        },
        ETH:{
            tbody:[
                {
                    tr:[
                        {
                            td:"BCH/ETH",
                        },{
                            td:"—/￥—"
                        },{
                            td:"—"
                        },{
                            td:"——"
                        },{
                            td:"——"
                        },{
                            td:"——"
                        }
                    ],
                    active:false,
                },{
                    tr:[
                        {
                            td:"LTC/ETH",
                        },{
                            td:"—/￥—"
                        },{
                            td:"—"
                        },{
                            td:"——"
                        },{
                            td:"——"
                        },{
                            td:"——"
                        }
                    ],
                    active:false,
                },{
                    tr:[
                        {
                            td:"EOS/ETH",
                        },{
                            td:"—/￥—"
                        },{
                            td:"—"
                        },{
                            td:"——"
                        },{
                            td:"——"
                        },{
                            td:"——"
                        }
                    ],
                    active:false,
                } 
            ]
        },
    },
    KOR:{
        tab:"자선",
        thead:["-거래가","-최신 가격","-상승폭","-24h최고","-24h최저","-24h 거래량"],
        자선:{
            tbody:[],
        },
        USDT:{
            tbody:[
                {
                    tr:[
                        {
                            td:"B7T/USDT",
                        },{
                            td:"—/￥—"
                        },{
                            td:"—"
                        },{
                            td:"——"
                        },{
                            td:"——"
                        },{
                            td:"——"
                        }
                    ],
                    active:false,
                },{
                    tr:[
                        {
                            td:"BCH/USDT",
                        },{
                            td:"—/￥—"
                        },{
                            td:"—"
                        },{
                            td:"——"
                        },{
                            td:"——"
                        },{
                            td:"——"
                        }
                    ],
                    active:false,
                },{
                    tr:[
                        {
                            td:"ETH/USDT",
                        },{
                            td:"—/￥—"
                        },{
                            td:"—"
                        },{
                            td:"——"
                        },{
                            td:"——"
                        },{
                            td:"——"
                        }
                    ],
                    active:false,
                }
            ]
        },
        BTC:{
            tbody:[
                {
                    tr:[
                        {
                            td:"BCH/BTC",
                        },{
                            td:"—/￥—"
                        },{
                            td:"—"
                        },{
                            td:"——"
                        },{
                            td:"——"
                        },{
                            td:"——"
                        }
                    ],
                    active:false,
                },{
                    tr:[
                        {
                            td:"LTC/BTC",
                        },{
                            td:"—/￥—"
                        },{
                            td:"—"
                        },{
                            td:"——"
                        },{
                            td:"——"
                        },{
                            td:"——"
                        }
                    ],
                    active:false,
                },{
                    tr:[
                        {
                            td:"EOS/BTC",
                        },{
                            td:"—/￥—"
                        },{
                            td:"—"
                        },{
                            td:"——"
                        },{
                            td:"——"
                        },{
                            td:"——"
                        }
                    ],
                    active:false,
                }
            ]
        },
        ETH:{
            tbody:[
                {
                    tr:[
                        {
                            td:"BCH/ETH",
                        },{
                            td:"—/￥—"
                        },{
                            td:"—"
                        },{
                            td:"——"
                        },{
                            td:"——"
                        },{
                            td:"——"
                        }
                    ],
                    active:false,
                },{
                    tr:[
                        {
                            td:"LTC/ETH",
                        },{
                            td:"—/￥—"
                        },{
                            td:"—"
                        },{
                            td:"——"
                        },{
                            td:"——"
                        },{
                            td:"——"
                        }
                    ],
                    active:false,
                },{
                    tr:[
                        {
                            td:"EOS/ETH",
                        },{
                            td:"—/￥—"
                        },{
                            td:"—"
                        },{
                            td:"——"
                        },{
                            td:"——"
                        },{
                            td:"——"
                        }
                    ],
                    active:false,
                } 
            ]
        },
    },
    AR:{
        tab:"自选",
        thead:["——زوج المعاملة","آخر سعر","زيادة","-24h최고","-24h최저","-24h 거래량"],
        자선:{
            tbody:[],
        },
        USDT:{
            tbody:[
                {
                    tr:[
                        {
                            td:"B7T/USDT",
                        },{
                            td:"—/￥—"
                        },{
                            td:"—"
                        },{
                            td:"——"
                        },{
                            td:"——"
                        },{
                            td:"——"
                        }
                    ],
                    active:false,
                },{
                    tr:[
                        {
                            td:"BCH/USDT",
                        },{
                            td:"—/￥—"
                        },{
                            td:"—"
                        },{
                            td:"——"
                        },{
                            td:"——"
                        },{
                            td:"——"
                        }
                    ],
                    active:false,
                },{
                    tr:[
                        {
                            td:"ETH/USDT",
                        },{
                            td:"—/￥—"
                        },{
                            td:"—"
                        },{
                            td:"——"
                        },{
                            td:"——"
                        },{
                            td:"——"
                        }
                    ],
                    active:false,
                }
            ]
        },
        BTC:{
            tbody:[
                {
                    tr:[
                        {
                            td:"BCH/BTC",
                        },{
                            td:"—/￥—"
                        },{
                            td:"—"
                        },{
                            td:"——"
                        },{
                            td:"——"
                        },{
                            td:"——"
                        }
                    ],
                    active:false,
                },{
                    tr:[
                        {
                            td:"LTC/BTC",
                        },{
                            td:"—/￥—"
                        },{
                            td:"—"
                        },{
                            td:"——"
                        },{
                            td:"——"
                        },{
                            td:"——"
                        }
                    ],
                    active:false,
                },{
                    tr:[
                        {
                            td:"EOS/BTC",
                        },{
                            td:"—/￥—"
                        },{
                            td:"—"
                        },{
                            td:"——"
                        },{
                            td:"——"
                        },{
                            td:"——"
                        }
                    ],
                    active:false,
                }
            ]
        },
        ETH:{
            tbody:[
                {
                    tr:[
                        {
                            td:"BCH/ETH",
                        },{
                            td:"—/￥—"
                        },{
                            td:"—"
                        },{
                            td:"——"
                        },{
                            td:"——"
                        },{
                            td:"——"
                        }
                    ],
                    active:false,
                },{
                    tr:[
                        {
                            td:"LTC/ETH",
                        },{
                            td:"—/￥—"
                        },{
                            td:"—"
                        },{
                            td:"——"
                        },{
                            td:"——"
                        },{
                            td:"——"
                        }
                    ],
                    active:false,
                },{
                    tr:[
                        {
                            td:"EOS/ETH",
                        },{
                            td:"—/￥—"
                        },{
                            td:"—"
                        },{
                            td:"——"
                        },{
                            td:"——"
                        },{
                            td:"——"
                        }
                    ],
                    active:false,
                } 
            ]
        },
    }, 
}
