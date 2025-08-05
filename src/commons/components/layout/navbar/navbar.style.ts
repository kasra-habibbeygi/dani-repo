import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const NavbarContainer = styled.nav(
    () => css`
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 60px;
        backdrop-filter: blur(18px);
        border-bottom: 1px solid rgba(255, 255, 255, 0.18);
        background: #00000038;
        z-index: 20;
        padding-left: 50px;
        min-height: 50px;
        display: flex;
        align-items: center;

        ul {
            display: flex;
            gap: 50px;
            font-weight: 400;
            padding: 20px;
            width: 100%;
            list-style: none;
            display: flex;

            a {
                font-size: 20px;
                color: #fff;
                font-weight: 400;
            }
        }

        .menu-icon {
            display: none;
            min-width: 20px;
            width: 20px;
            height: auto;
            color: white;
            cursor: pointer;
        }

        @media (max-width: 850px) {
            padding-left: 0px;

            ul {
                justify-content: center;
                gap: 20px;
                padding: 16px;

                a {
                    font-size: 18px;
                }
            }
        }

        @media (max-width: 700px) {
            padding-left: 40px;

            .menu-icon {
                display: block !important;
            }

            ul {
                display: none;
            }
        }
    `
);

export const MobileMenuContainer = styled.ul<{ status: boolean }>(
    ({ status }) => css`
        display: none !important;
        position: fixed;
        top: 0;
        z-index: 20;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        gap: 40px;
        padding: 40px;
        width: 300px;
        height: 100vh;
        gap: 50px;
        font-weight: 400;
        list-style: none;
        z-index: 30;
        background-color: #000000ab;
        border-right: 1px solid rgba(255, 255, 255, 0.18);
        transition: all cubic-bezier(0.25, 0.8, 0.25, 1) 0.5s;

        a {
            font-size: 20px;
            color: #fff;
            font-weight: 400;
        }

        @media (max-width: 700px) {
            display: flex !important;
            left: ${status ? '0' : '-300px'};
        }
    `
);

export const MobileLayer = styled.ul<{ status: boolean }>(
    ({ status }) => css`
        display: none;
        width: 100%;
        height: 100vh;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 20;
        cursor: pointer;
        backdrop-filter: blur(18px) !important;
        background: #00000038 !important;
        transition: all cubic-bezier(0.25, 0.8, 0.25, 1) 0.5s;

        @media (max-width: 700px) {
            display: block;
            opacity: ${status ? '1' : '0'};
            pointer-events: ${status ? 'inherit' : 'none'};
        }
    `
);
