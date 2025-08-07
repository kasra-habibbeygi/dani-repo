import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const ProjectContainer = styled.section(
    () => css`
        header {
            height: 80px;
            width: 100%;
            padding: 30px 120px;
            color: #fff;
        }

        button {
            transform: rotate(90deg);
            padding: 12px;
            width: 40px;
            height: 40px;
            background: #ed6560;
            position: absolute;

            svg {
                width: 16px;
                height: 16px;
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
                height: 800px;
                object-fit: contain;
            }
        }

        .left-box {
            width: 100%;
            border-right: 1px solid #363636;
            border-left: 1px solid #363636;

            .describe {
                padding: 56px 20px;
                font-size: 20px;
                font-weight: 30;
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
                margin-top: 32px;
                gap: 8px;
                margin: 0px 20px 56px;

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
            border: 1px solid #363636;
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
                font-weight: 600;
                padding: 12px 20px;
            }

            .item {
                display: grid;
                grid-template-columns: 1fr 2fr;
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
                    margin: 56px 20px;

                    li {
                        background-color: #0a0a0a;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        padding: 14px;

                        img {
                            width: 100%;
                            height: auto;
                            object-fit: contain;
                        }
                    }
                }

                .info-img-list {
                    list-style: none;
                    display: flex;
                    flex-wrap: wrap;
                    align-items: center;
                    gap: 8px;
                    margin: 56px 20px;

                    li {
                        width: 133px;
                        height: 133px;
                        background-color: #0a0a0a;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        padding: 34px;

                        img {
                            width: 100%;
                            height: auto;
                            object-fit: contain;
                        }
                    }
                }
            }
        }
    `
);
