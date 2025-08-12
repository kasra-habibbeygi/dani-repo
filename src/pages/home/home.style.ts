import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const HomeContainer = styled.section(
    () => css`
        padding-top: 104px;

        .header-layer {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100vh;
            display: block;
            background: radial-gradient(224.3% 157.68% at 159.87% -57.68%, #f8f8f8 0%, #002417 70%, #111111 100%);
            z-index: 1;
        }

        .noise {
            position: absolute;
            top: 0;
            width: 100%;
            height: 100vh;
            object-fit: cover;
            z-index: 1;
            opacity: 0.2;
        }

        .shadow-1 {
            position: absolute;
            top: 0;
            width: 500px;
            height: auto;
            z-index: 2;
            left: 400px;
        }

        .shadow-2 {
            position: absolute;
            top: -200px;
            right: -184px;
            z-index: 2;
            width: 500px;
            height: auto;
        }

        header {
            position: relative;
            z-index: 2;
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
            padding-right: 40px;
            padding-left: 40px;
            margin-bottom: 130px;
            gap: 60px;

            .left-side {
                color: #ed6560;
                font-weight: 300;
                font-size: 16px;

                p {
                    line-height: 14px;
                }
            }

            .right-side {
                width: 816px;

                p {
                    color: #fff;
                    font-weight: 300;
                    line-height: 36px;
                    font-size: 36px;

                    span {
                        text-decoration: line-through;
                        color: #7f7f7f;
                        display: inline-block;
                        margin: 0 4px;
                    }

                    b {
                        color: #ff9fed;
                        display: inline-block;
                        margin: 0 4px;
                    }
                }

                a {
                    width: 388px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    height: 60px;
                    border: 2px solid #ffffff;
                    color: #fff;
                    border-radius: 50px;
                    margin-top: 32px;
                    gap: 8px;

                    svg {
                        width: 16px;
                        transform: rotate(-90deg);
                    }
                }
            }
        }

        .header-img {
            width: 100%;
            flex-direction: column;
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            z-index: 2;

            img {
                width: 835px;
                height: 339px;
                margin-bottom: 8px;
            }

            .label {
                width: 835px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                color: #fff;
                .persian {
                    font-family: JalalSly !important;
                }
            }
        }

        .cv-project {
            min-height: 100vh;
            margin-top: 70px;
            border-top: 1px solid #363636;
            border-bottom: 1px solid #363636;
            width: 100%;
            border-bottom: none;
            border-top: none;
            position: relative;

            .footer {
                color: #fff;
                font-size: 20px;
                font-weight: 300;
                text-align: center;
                height: 440px;
                border-left: 1px solid #363636;
                border-right: 1px solid #363636;
                margin: 0px 40px;
                padding-bottom: 72px;
                display: flex;
                align-items: flex-end;
                justify-content: center;
                border-top: none;
            }
        }

        .project-list {
            display: grid;
            gap: 40px;
            grid-template-columns: repeat(4, 1fr);
            padding: 0px 40px 0px;

            .row-line {
                &::before {
                    content: '';
                    width: calc(100% + 40px);
                    height: 1px;
                    background-color: #363636;
                    position: absolute;
                    right: -40px;
                    bottom: 0px;
                }
                &::after {
                    content: '';
                    width: calc(100% + 40px);
                    height: 1px;
                    background-color: #363636;
                    position: absolute;
                    right: -40px;
                    top: 0px;
                }
            }

            .row-line2 {
                &::before {
                    content: '';
                    width: calc(100% + 40px);
                    height: 1px;
                    background-color: #363636;
                    position: absolute;
                    right: -40px;
                    top: 40px;
                }
            }

            .item {
                position: relative;
                height: max-content;
                width: 100%;
                height: 280px;

                &:first-child,
                &:nth-child(5) {
                    .row-line {
                        &::before {
                            width: calc(100% + 80px);
                        }
                        &::after {
                            width: calc(100% + 80px);
                        }
                    }

                    .row-line2 {
                        &::before {
                            width: calc(100% + 80px);
                        }
                    }
                }

                &::before {
                    content: '';
                    width: 1px;
                    height: 40px;
                    background-color: #363636;
                    position: absolute;
                    right: 0;
                    bottom: -40px;
                }

                &::after {
                    content: '';
                    width: 1px;
                    height: 40px;
                    background-color: #363636;
                    position: absolute;
                    left: 0;
                    bottom: -40px;
                }

                &:nth-last-child(-n + 4) {
                    &::before,
                    &::after {
                        display: none;
                    }
                }
            }

            .title {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 12px;
                border: 1px solid #363636;
                border-top: none;
                border-bottom: none;
                max-height: 40px;
                min-height: 40px;

                span {
                    font-weight: 400;
                    font-size: 16px;
                    color: #ffffff;
                }

                small {
                    color: #7f7f7f;
                    font-weight: 400;
                    font-size: 16px;
                }
            }

            .thumb {
                position: relative;
                display: block;
                overflow: hidden;

                .overlay {
                    position: absolute;
                    inset: 0;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background: rgba(0, 0, 0, 0.45);
                    color: #fff;
                    font-weight: 600;
                    letter-spacing: 0.06em;
                    text-transform: uppercase;
                    opacity: 0;
                    transition: opacity 0.25s ease;
                    pointer-events: none;
                }
            }

            img {
                width: 100%;
                height: 240px;
                object-fit: cover;
                border-left: 1px solid #363636;
                border-right: 1px solid #363636;
                transition: transform 0.35s ease;
            }

            .thumb {
                &:hover {
                    img {
                        transform: scale(0.99);
                    }

                    .overlay {
                        opacity: 1;
                    }
                }
            }
        }

        @media (max-width: 1300px) {
            .border-line-responsive {
                display: block;
                width: 100%;
                height: 1px;
                color: red;
                position: absolute;
                top: 50%;
                z-index: 1000;
            }
            .project-list {
                grid-template-columns: repeat(2, 1fr);

                .item {
                    &:nth-child(odd) {
                        .row-line {
                            &::before {
                                width: calc(100% + 80px);
                            }
                            &::after {
                                width: calc(100% + 80px);
                            }
                        }

                        .row-line2 {
                            &::before {
                                width: calc(100% + 80px);
                            }
                        }
                    }

                    &:nth-last-child(-n + 4) {
                        &::before,
                        &::after {
                            display: block;
                        }
                    }

                    &:nth-last-child(-n + 2) {
                        &::before,
                        &::after {
                            display: none;
                        }
                    }
                }
            }
        }

        @media (max-width: 998px) {
            padding-top: 80px;

            header {
                .right-side {
                    width: 460px;

                    a {
                        width: 388px;
                    }
                }
            }

            .header-img {
                width: 100%;
                padding: 0px 40px;

                img {
                    width: 100%;
                    height: 339px;
                    margin-bottom: 8px;
                }

                .label {
                    width: 100%;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    color: #fff;
                }
            }

            .cv-project {
                .footer {
                    height: 220px;
                    margin: 0px;
                    border: none;
                }
            }
        }

        @media (max-width: 800px) {
            header {
                .right-side {
                    a {
                        width: 100%;
                    }
                }
            }
        }

        @media (max-width: 680px) {
            padding-top: 48px;

            .project-list {
                grid-template-columns: repeat(1, 1fr);

                img {
                    border-left: none;
                    border-right: none;
                }

                .item {
                    .row-line {
                        &::before {
                            width: calc(100% + 80px);
                        }
                        &::after {
                            width: calc(100% + 80px);
                        }
                    }

                    .row-line2 {
                        &::before {
                            width: calc(100% + 80px);
                        }
                    }

                    &:nth-last-child(-n + 2) {
                        &::before,
                        &::after {
                            display: block;
                        }
                    }

                    &:last-child {
                        &::before,
                        &::after {
                            display: none;
                        }
                    }
                }
            }

            header {
                flex-direction: column;
                padding-right: 20px;
                padding-left: 20px;
                margin-bottom: 28px;
                gap: 28px;

                .right-side {
                    width: 100%;
                }
            }

            .header-img {
                padding: 0px 20px;
            }
        }

        @media (max-width: 450px) {
            .project-list {
                padding: 0;

                .item {
                    &::before,
                    &::after {
                        display: none !important;
                    }

                    .row-line {
                        &::before {
                            width: 100%;
                            right: 0;
                        }
                        &::after {
                            width: 100%;
                            right: 0;
                        }
                    }

                    .title {
                        border: none;
                    }

                    .row-line2 {
                        &::before {
                            width: 100%;
                            right: 0;
                        }
                    }
                }
            }

            .header-img {
                padding: 0px 20px;
                flex-direction: row;

                img {
                    width: 242px;
                    height: 302px;
                    margin-bottom: 0px;
                }

                .label {
                    width: 100%;
                    flex-direction: column;

                    span {
                        order: 1;
                    }

                    button {
                        order: 3;

                        svg {
                            margin-top: 16px;
                        }
                    }
                }
            }
        }
    `
);
