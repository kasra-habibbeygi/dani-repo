/* eslint-disable max-len */

export type ProjectItem = {
    id: number;
    name: 'RAKIZ-STUDIO' | 'BRAINFROG' | 'JRI' | 'TDEX' | 'A-EYES' | 'QUBY' | 'FIRE-DRILL' | 'DATIS-INTERNATIONAL';
    type: string;
    description: string;
    url: string;
    cover: string;
    details: {
        info: string;
        img: string[];
    };
    pictures: string[];
};

export const data: ProjectItem[] = [
    {
        id: 7,
        name: 'BRAINFROG',
        type: 'Application',
        cover: '/img/BRAINFROG/BRAINFROG.cover.png',
        description:
            'Brain Frog: Capture Ideas & Implement with Habit Tracker﻿﻿Ever hear something brilliant on a podcast - an idea you know you want to implement someday, but then forget it completely? Whether it is from a conversation, a video, or something you read, Brain Frog helps you capture insights and turn them into habits that stick.',
        url: 'https:google.com',
        details: {
            info: 'UI/UX Design, Project Management',
            img: ['/img/BRAINFROG/BRAINFROG.info1.png', '/img/BRAINFROG/BRAINFROG.info2.png', '/img/BRAINFROG/BRAINFROG.info3.png']
        },
        pictures: [
            '/img/BRAINFROG/BRAINFROG.pic1.png',
            '/img/BRAINFROG/BRAINFROG.pic2.png',
            '/img/BRAINFROG/BRAINFROG.pic3.png',
            '/img/BRAINFROG/BRAINFROG.pic4.png',
            '/img/BRAINFROG/BRAINFROG.pic5.png',
            '/img/BRAINFROG/BRAINFROG.pic6.png',
            '/img/BRAINFROG/BRAINFROG.pic7.png',
            '/img/BRAINFROG/BRAINFROG.pic8.png'
        ]
    },
    {
        id: 1,
        name: 'RAKIZ-STUDIO',
        type: 'Branding, Website',
        description:
            'Rakiz is a new brand in the accessory and clothing design line by Kimia Razzaghi, which started its activity with sustainable and ethical fashion. Due to its focus on designers and the non-industrial nature of this brand, all items are hand-stitched by designers, and all of them are selected with this choice. The goal of this brand as a sustainable brand is sustainability in all aspects affecting society and trying to continue charity-based activities.',
        url: 'https:google.com',
        cover: '/img/RAKIZ/rakiz.cover.png',
        details: {
            info: 'Branding, Event Planing, UI/UX Design',
            img: ['/img/RAKIZ/RAKIZ-STUDIO-info1.png', '/img/RAKIZ/RAKIZ-STUDIO-info2.png', '/img/RAKIZ/RAKIZ-STUDIO-info3.png']
        },
        pictures: [
            '/img/RAKIZ/RAKIZ-STUDIO-pic1.png',
            '/img/RAKIZ/RAKIZ-STUDIO-pic2.png',
            '/img/RAKIZ/RAKIZ-STUDIO-pic3.png',
            '/img/RAKIZ/RAKIZ-STUDIO-pic4.png',
            '/img/RAKIZ/RAKIZ-STUDIO-pic5.png',
            '/img/RAKIZ/RAKIZ-STUDIO-pic6.png',
            '/img/RAKIZ/RAKIZ-STUDIO-pic7.png',
            '/img/RAKIZ/RAKIZ-STUDIO-pic8.png'
        ]
    },
    {
        id: 2,
        name: 'JRI',
        type: 'Website',
        cover: 'img/JRI/JRI.cover.png',
        description:
            'JRI, will serve as a groundbreaking platform akin to Kickstarter. An innovative NFT project that promises to redefine the landscape of crowdfunding and empower creators worldwide to bring their visions to life in a decentralized and community-driven ecosystem.The "JustRead It" website was designed with a focus on simplicity and accessibility. The process began with wireframes to define the platform’s structure and ensure a seamless user experience. Usability testing and feedback helped refine the final design.',
        url: 'https:google.com',
        details: {
            info: 'UI/UX Design, Project Management',
            img: ['/img/JRI/JRI.info1.png', '/img/JRI/JRI.info2.png', '/img/JRI/JRI.info3.png']
        },
        pictures: [
            '/img/JRI/JRI.pic1.png',
            '/img/JRI/JRI.pic2.png',
            '/img/JRI/JRI.pic3.png',
            '/img/JRI/JRI.pic4.png',
            '/img/JRI/JRI.pic5.png',
            '/img/JRI/JRI.pic6.png',
            '/img/JRI/JRI.pic7.png',
            '/img/JRI/JRI.pic8.png'
        ]
    },
    {
        id: 4,
        name: 'TDEX',
        type: 'Application, Website',
        cover: '/img/TDEX/TDEX.cover.png',
        description:
            'T-DEX is redefining the decentralized trading experience by blending gamified elements with automated trading solutions, education, and a vibrant community on Telegram.The design process began with wireframes to establish a clear and intuitive structure, ensuring seamless navigation across the platform. We employed a gamified approach to make the trading experience more interactive and enjoyable, encouraging users to explore automated trading solutions and educational resources.',
        url: 'https:google.com',
        details: {
            info: 'UI/UX Design, Project Management',
            img: ['/img/TDEX/TDEX.info1.png', '/img/TDEX/TDEX.info2.png', '/img/TDEX/TDEX.info3.png']
        },
        pictures: [
            '/img/TDEX/TDEX.pic1.png',
            '/img/TDEX/TDEX.pic2.png',
            '/img/TDEX/TDEX.pic3.png',
            '/img/TDEX/TDEX.pic4.png',
            '/img/TDEX/TDEX.pic5.png',
            '/img/TDEX/TDEX.pic6.png',
            '/img/TDEX/TDEX.pic7.png',
            '/img/TDEX/TDEX.pic8.png'
        ]
    },
    {
        id: 3,
        name: 'A-EYES',
        type: 'Application',
        cover: 'img/A-EYES/A-EYES.cover.png',
        description:
            'A-EYES is a revolutionary AI-assisted solution to diagnose and treat dry eye disease quickly through a phone application anytime, anywhere. The MVP version of the application has been released publicly and is currently being tested. The performance of the artificial intelligence and web app design is constantly being reviewed to ensure that the users needs can be met as easily and quickly as possible in future versions.It has also been able to diagnose 1,400 cases of dry eye with more than 95.6% accuracy.A-EYES can analyze dry-eye big data to identify patterns and trends that may not be visible to the ophthalmic world.',
        url: 'https:google.com',
        details: {
            info: 'UI/UX Design, Project Management',
            img: ['/img/A-EYES/A-EYES.info1.png', '/img/A-EYES/A-EYES.info2.png']
        },
        pictures: [
            '/img/A-EYES/A-EYES.pic1.png',
            '/img/A-EYES/A-EYES.pic2.png',
            '/img/A-EYES/A-EYES.pic3.png',
            '/img/A-EYES/A-EYES.pic4.png',
            '/img/A-EYES/A-EYES.pic5.png',
            '/img/A-EYES/A-EYES.pic6.png',
            '/img/A-EYES/A-EYES.pic7.png',
            '/img/A-EYES/A-EYES.pic8.png'
        ]
    },

    {
        id: 5,
        name: 'QUBY',
        type: 'Application, Branding',
        cover: '/img/Quby/Quby.cover.png',
        description:
            'Quby is the most available, smart, cashier-less store based on AI technology. Present a new generation of retail shops in the FMCG industry. The process used for each project phase was based on the principles of double diamond and design thinking. This method starts with defining the desired brand by choosing appropriate adjectives that describe it in three categories: "Extended Identity," "Brand Core," and "Brand Essence." Using these attributes, the visual and brand identities are developed.',
        url: 'https:google.com',
        details: {
            info: 'Branding, UI/UX Design',
            img: ['/img/Quby/QUBY.info1.png', '/img/Quby/QUBY.info2.png', '/img/Quby/QUBY.info3.png']
        },
        pictures: [
            '/img/Quby/QUBY.pic1.png',
            '/img/Quby/QUBY.pic2.png',
            '/img/Quby/QUBY.pic3.png',
            '/img/Quby/QUBY.pic4.png',
            '/img/Quby/QUBY.pic5.png',
            '/img/Quby/QUBY.pic6.png',
            '/img/Quby/QUBY.pic7.png',
            '/img/Quby/QUBY.pic8.png'
        ]
    },
    {
        id: 6,
        name: 'DATIS-INTERNATIONAL',
        type: 'Website',
        cover: 'img/DATIS/DATIS.cover.png',
        description:
            'Datis is a technology-based company that specializes in the design and manufacture of electronic components. We based our design and flow on the needs of our audience and leveraged Hicks UX law and Jakob is UX law to ensure a seamless user experience. Also analyzed the site is heat map and conducted A/B testing on the hero section to make sure we were hitting the right notes.',
        url: 'https:google.com',
        details: {
            info: 'UI/UX Design, Project Management',
            img: ['/img/DATIS/DATIS.info1.png', '/img/DATIS/DATIS.info2.png', '/img/DATIS/DATIS.info3.png']
        },
        pictures: [
            '/img/DATIS/DATIS.pic1.png',
            '/img/DATIS/DATIS.pic2.png',
            '/img/DATIS/DATIS.pic3.png',
            '/img/DATIS/DATIS.pic4.png',
            '/img/DATIS/DATIS.pic5.png',
            '/img/DATIS/DATIS.pic6.png',
            '/img/DATIS/DATIS.pic7.png',
            '/img/DATIS/DATIS.pic8.png'
        ]
    },

    {
        id: 8,
        name: 'FIRE-DRILL',
        type: 'Application',
        cover: '/img/FireDrill/FireDrill.cover.png',
        description:
            'The FireDrill application was designed to help employees evacuate safely and efficiently during emergency situations. The project started with mapping out key user flows based on real life evacuation scenarios to make sure the app would be intuitive and easy to use under pressure.The design focused on clarity and speed, using features include zone based alerts, step by step evacuation guidance, and real time updates from safety coordinators.FireDrill is a simple, responsive, and purposeful tool that supports companies in making their emergency plans more actionable and employee-focused.',
        url: 'https:google.com',
        details: {
            info: 'UI/UX Design, Project Management',
            img: ['/img/FireDrill/FireDrill.info1.png', '/img/FireDrill/FireDrill.info2.png', '/img/FireDrill/FireDrill.info3.png']
        },
        pictures: [
            '/img/FireDrill/FireDrill.pic1.png',
            '/img/FireDrill/FireDrill.pic2.png',
            '/img/FireDrill/FireDrill.pic3.png',
            '/img/FireDrill/FireDrill.pic4.png',
            '/img/FireDrill/FireDrill.pic5.png',
            '/img/FireDrill/FireDrill.pic6.png',
            '/img/FireDrill/FireDrill.pic7.png',
            '/img/FireDrill/FireDrill.pic8.png'
        ]
    }
];
