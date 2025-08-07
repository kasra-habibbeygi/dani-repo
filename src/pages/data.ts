/* eslint-disable max-len */

export type ProjectItem = {
    id: number;
    name: 'RAKIZ-STUDIO' | 'BRAINFROG' | 'JRI' | 'TDEX' | 'A-EYES' | 'QUBY' | 'FIRE-DRILL' | 'DATIS-INTERNATIONAL';
    type: string;
    description: string;
    url: string;
    details: {
        info: string;
        img: string[];
    };
    pictures: string[];
};

export const data: ProjectItem[] = [
    {
        id: 1,
        name: 'RAKIZ-STUDIO',
        type: 'Branding, Website',
        description:
            'Rakiz is a new brand in the accessory and clothing design line by Kimia Razzaghi, which started its activity with sustainable and ethical fashion. Due to its focus on designers and the non-industrial nature of this brand, all items are hand-stitched by designers, and all of them are selected with this choice. The goal of this brand as a sustainable brand is sustainability in all aspects affecting society and trying to continue charity-based activities.',
        url: 'https:google.com',
        details: {
            info: 'Branding, Event Planing, UI/UX Design',
            img: ['/RAKIZ-STUDIO-info1.png', '/RAKIZ-STUDIO-info2.png', '/RAKIZ-STUDIO-info3.png']
        },
        pictures: [
            'RAKIZ-STUDIO-pic5.png',
            'RAKIZ-STUDIO-pic6.png',
            'RAKIZ-STUDIO-pic7.png',
            'RAKIZ-STUDIO-pic8.png',
            'RAKIZ-STUDIO-pic1.png',
            'RAKIZ-STUDIO-pic2.png',
            'RAKIZ-STUDIO-pic3.png',
            'RAKIZ-STUDIO-pic4.png'
        ]
    },
    {
        id: 2,
        name: 'JRI',
        type: 'Website',
        description:
            'JRI, will serve as a groundbreaking platform akin to Kickstarter. An innovative NFT project that promises to redefine the landscape of crowdfunding and empower creators worldwide to bring their visions to life in a decentralized and community-driven ecosystem.The "JustRead It" website was designed with a focus on simplicity and accessibility. The process began with wireframes to define the platform’s structure and ensure a seamless user experience. Usability testing and feedback helped refine the final design.',
        url: 'https:google.com',
        details: {
            info: 'UI/UX Design, Project Management',
            img: ['/JRI.info1.png', '/JRI.info2.png', '/JRI.info3.png']
        },
        pictures: [
            'JRI.pic1.png',
            'JRI.pic2.png',
            'JRI.pic3.png',
            'JRI.pic4.png',
            'JRI.pic5.png',
            'JRI.pic6.png',
            'JRI.pic7.png',
            'JRI.pic8.png'
        ]
    },
    {
        id: 3,
        name: 'A-EYES',
        type: 'Application',
        description:
            'A-EYES is a revolutionary AI-assisted solution to diagnose and treat dry eye disease quickly through a phone application anytime, anywhere. The MVP version of the application has been released publicly and is currently being tested. The performance of the artificial intelligence and web app design is constantly being reviewed to ensure that the users needs can be met as easily and quickly as possible in future versions.It has also been able to diagnose 1,400 cases of dry eye with more than 95.6% accuracy.A-EYES can analyze dry-eye big data to identify patterns and trends that may not be visible to the ophthalmic world.',
        url: 'https:google.com',
        details: {
            info: 'UI/UX Design, Project Management',
            img: ['/A-EYES.info1.png', '/A-EYES.info2.png', '/A-EYES.info3.png']
        },
        pictures: [
            'A-EYES.pic1.png',
            'A-EYES.pic2.png',
            'A-EYES.pic3.png',
            'A-EYES.pic4.png',
            'A-EYES.pic5.png',
            'A-EYES.pic6.png',
            'A-EYES.pic7.png',
            'A-EYES.pic8.png'
        ]
    },
    {
        id: 4,
        name: 'TDEX',
        type: 'Application, Website',
        description:
            'T-DEX is redefining the decentralized trading experience by blending gamified elements with automated trading solutions, education, and a vibrant community on Telegram.The design process began with wireframes to establish a clear and intuitive structure, ensuring seamless navigation across the platform. We employed a gamified approach to make the trading experience more interactive and enjoyable, encouraging users to explore automated trading solutions and educational resources.',
        url: 'https:google.com',
        details: {
            info: 'UI/UX Design, Project Management',
            img: ['/TDEX.info1.png', '/TDEX.info2.png', '/TDEX.info3.png']
        },
        pictures: [
            'TDEX.pic1.png',
            'TDEX.pic2.png',
            'TDEX.pic3.png',
            'TDEX.pic4.png',
            'TDEX.pic5.png',
            'TDEX.pic6.png',
            'TDEX.pic7.png',
            'TDEX.pic8.png'
        ]
    },
    {
        id: 5,
        name: 'QUBY',
        type: 'Application, Branding',
        description:
            'Quby is the most available, smart, cashier-less store based on AI technology. Present a new generation of retail shops in the FMCG industry. The process used for each project phase was based on the principles of double diamond and design thinking. This method starts with defining the desired brand by choosing appropriate adjectives that describe it in three categories: "Extended Identity," "Brand Core," and "Brand Essence." Using these attributes, the visual and brand identities are developed.',
        url: 'https:google.com',
        details: {
            info: 'Branding, UI/UX Design',
            img: ['/QUBY.info1.png', '/QUBY.info2.png', '/QUBY.info3.png']
        },
        pictures: [
            'QUBY.pic1.png',
            'QUBY.pic2.png',
            'QUBY.pic3.png',
            'QUBY.pic4.png',
            'QUBY.pic5.png',
            'QUBY.pic6.png',
            'QUBY.pic7.png',
            'QUBY.pic8.png'
        ]
    },
    {
        id: 6,
        name: 'DATIS-INTERNATIONAL',
        type: 'Website',
        description:
            'Datis is a technology-based company that specializes in the design and manufacture of electronic components. We based our design and flow on the needs of our audience and leveraged Hicks UX law and Jakob is UX law to ensure a seamless user experience. Also analyzed the site is heat map and conducted A/B testing on the hero section to make sure we were hitting the right notes.',
        url: 'https:google.com',
        details: {
            info: 'UI/UX Design, Project Management',
            img: ['/DATIS.info1.png', '/DATIS.info2.png', '/DATIS.info3.png']
        },
        pictures: [
            'DATIS.pic1.png',
            'DATIS.pic2.png',
            'DATIS.pic3.png',
            'DATIS.pic4.png',
            'DATIS.pic5.png',
            'DATIS.pic6.png',
            'DATIS.pic7.png',
            'DATIS.pic8.png'
        ]
    },
    {
        id: 7,
        name: 'BRAINFROG',
        type: 'Application',
        description:
            'Brain Frog: Capture Ideas & Implement with Habit Tracker﻿﻿Ever hear something brilliant on a podcast - an idea you know you want to implement someday, but then forget it completely? Whether it is from a conversation, a video, or something you read, Brain Frog helps you capture insights and turn them into habits that stick.',
        url: 'https:google.com',
        details: {
            info: 'UI/UX Design, Project Management',
            img: ['/BRAINFROG.info1.png', '/BRAINFROG.info2.png', '/BRAINFROG.info3.png']
        },
        pictures: [
            'BRAINFROG.pic1.png',
            'BRAINFROG.pic2.png',
            'BRAINFROG.pic3.png',
            'BRAINFROG.pic4.png',
            'BRAINFROG.pic5.png',
            'BRAINFROG.pic6.png',
            'BRAINFROG.pic7.png',
            'BRAINFROG.pic8.png'
        ]
    },
    {
        id: 8,
        name: 'FIRE-DRILL',
        type: 'Application',
        description:
            'The FireDrill application was designed to help employees evacuate safely and efficiently during emergency situations. The project started with mapping out key user flows based on real life evacuation scenarios to make sure the app would be intuitive and easy to use under pressure.The design focused on clarity and speed, using features include zone based alerts, step by step evacuation guidance, and real time updates from safety coordinators.FireDrill is a simple, responsive, and purposeful tool that supports companies in making their emergency plans more actionable and employee-focused.',
        url: 'https:google.com',
        details: {
            info: 'UI/UX Design, Project Management',
            img: ['/FireDrill.info1.png', '/FireDrill.info2.png', '/FireDrill.info3.png']
        },
        pictures: [
            'FireDrill.pic1.png',
            'FireDrill.pic2.png',
            'FireDrill.pic3.png',
            'FireDrill.pic4.png',
            'FireDrill.pic5.png',
            'FireDrill.pic6.png',
            'FireDrill.pic7.png',
            'FireDrill.pic8.png'
        ]
    }
];
