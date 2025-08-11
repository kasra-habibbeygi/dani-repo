import { css, keyframes } from '@emotion/react';
import styled from '@emotion/styled';

const arrowOutIn = keyframes`
  0%   { transform: translateY(0);      opacity: 1; }
  45%  { transform: translateY(120%);  opacity: 0; }
  50%  { transform: translateY(-120%);   opacity: 0; }
  100% { transform: translateY(0);      opacity: 1; }
`;

export const ProjectContainer = styled.section(
    () => css`
        header {
            height: 60px;
            width: 100%;
            padding: 20px 120px;
            color: #fff;
        }

        button {
            padding: 12px;
            width: 42px;
            height: 40px;
            background-color: #ed6560;
            position: absolute;
            transition: background-color 0.2s ease;
            overflow: hidden;
            transform: rotate(90deg);

            svg {
                width: 16px;
                height: 16px;
                will-change: transform;
                display: block;
            }

            &:hover {
                background-color: #e53b35;

                svg {
                    animation: ${arrowOutIn} 0.5s ease-in-out both;
                }
            }
        }

        .footer {
            color: #fff;
            font-size: 20px;
            font-weight: 300;
            text-align: center;
            height: 440px;
            border-left: 1px solid #363636;
            border-right: 1px solid #363636;
            margin: 0px 80px;
            padding-bottom: 72px;
            display: flex;
            align-items: flex-end;
            justify-content: center;
            border-top: none;
        }

        .right-box {
            width: 100%;
            border-right: 1px solid #363636;
            border-left: 1px solid #363636;

            .img-container {
                height: 100%;
                width: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
            }

            .show-img {
                width: 100%;
                object-fit: contain;
                padding: 40px;
            }
        }

        .left-box {
            width: 100%;
            border-right: 1px solid #363636;
            border-left: 1px solid #363636;

            .describe {
                padding: 40px 20px;
                font-size: 20px;
                font-weight: 300;
                line-height: 20px;
            }

            a {
                width: 268px;
                display: flex;
                align-items: center;
                justify-content: center;
                height: 60px;
                border: 2px solid #ffffff;
                color: #fff;
                border-radius: 50px;
                gap: 8px;
                margin: 0px 20px 40px;

                svg {
                    transform: rotate(-90deg);
                    width: 16px;
                    height: 16px;
                }
            }

            .info {
                font-size: 20px;
                font-weight: 300;
                padding: 0px 20px;
            }
        }

        .border-line {
            padding: 0px 80px;
            border-top: 1px solid #363636;
            border-bottom: 1px solid #363636;
            position: relative;

            &::before {
                content: '';
                height: 1px;
                width: 100%;
                position: absolute;
                right: 0;
                background-color: #363636;
                top: 40px;
            }
        }

        .project-info {
            width: 100%;
            .header {
                display: flex;
                justify-content: space-between;
                align-items: center;
                height: 40px;
                background-color: #0a0a0a;

                padding: 0px 20px;

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

            .label {
                font-size: 20px;
                font-weight: 500;
                padding: 0px 20px 12px;
            }

            .item {
                display: grid;
                grid-template-columns: 1.5fr 2fr;
                gap: 40px;
                border-right: 1px solid #363636;
                border-left: 1px solid #363636;
                padding: 0px 40px;
                color: #fff;

                .img-list {
                    list-style: none;
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    gap: 8px;
                    margin: 0px 20px 40px;

                    li {
                        background-color: #0a0a0a;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        cursor: pointer;

                        img {
                            width: 100%;
                            height: auto;
                            object-fit: contain;
                            transition: transform 0.5ms ease;
                        }

                        &:hover {
                            img {
                                transform: scale(1.06);
                            }
                        }
                    }
                }

                .info-img-list {
                    list-style: none;
                    display: flex;
                    flex-wrap: wrap;
                    align-items: center;
                    gap: 8px;
                    margin: 40px 20px;

                    li {
                        width: 120px;
                        height: 120px;
                        background-color: #0a0a0a;
                        display: flex;

                        justify-content: center;
                        align-items: center;

                        img {
                            width: 64px;
                            height: auto;
                            object-fit: contain;
                        }
                    }
                }
            }
        }

        @media (max-width: 1300px) {
            .project-info {
                .item {
                    .info-img-list {
                        li {
                            width: 110px;
                            height: 110px;
                            padding: 26px;
                        }
                    }
                }
            }
        }

        @media (max-width: 1200px) {
            .footer {
                margin: 0px;
                border: none;
                height: 220px;
            }

            header {
                height: 40px;
                padding: 10px 80px;
            }

            .border-line {
                padding: 0px 40px;
            }

            .project-info {
                .label,
                .info {
                    display: none;
                }

                .item {
                    grid-template-columns: repeat(2, 1fr);
                    .info-img-list {
                        li {
                            width: 110px;
                            height: 110px;
                            padding: 26px;
                        }
                    }

                    .img-list {
                        margin: 0px 20px 40px;
                    }
                }
            }

            .right-box {
                .label {
                    display: block;
                    margin-bottom: 12px;
                }

                .img-container {
                    padding: 0px;
                }

                .show-img {
                    padding: 0px 0px 40px;
                }
            }

            .left-box {
                .describe {
                    padding: 40px 20px 40px;
                }

                a {
                    width: calc(100% - 40px);
                    margin: 0px 20px 40px;
                }
            }
        }

        @media (max-width: 998px) {
            .border-line {
                padding: 0px 20px;
                border: none;
                border-top: 1px solid #363636;
            }

            header {
                padding: 10px 20px;
            }

            .project-info {
                .header {
                    padding-left: 40px;
                    justify-content: flex-end;

                    small {
                        display: none;
                    }
                }

                .item {
                    grid-template-columns: repeat(1, 1fr);
                    padding: 0;
                    border: none;

                    .info-img-list {
                        margin: 40px 0px 0px;
                    }

                    .choose-img {
                        .img-list {
                            margin: 0 0 40px;
                        }

                        .label {
                            padding: 0;
                        }
                    }
                }
            }

            .right-box {
                order: 1;
                border: none;

                .img-container {
                    padding: 0px;
                }
            }

            .left-box {
                order: 2;
                border: none;

                a {
                    margin: 0;
                    width: 100%;
                }

                .header {
                    display: none;
                }

                .describe {
                    padding: 0px 0px 40px;
                }
            }
        }
    `
);
