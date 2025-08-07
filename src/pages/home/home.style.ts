import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const HomeContainer = styled.section(
    () => css`
        padding-top: 104px;

        header {
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
            padding-right: 48px;
            padding-left: 48px;
            margin-bottom: 130px;

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
                    width: 338px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    height: 60px;
                    border: 2px solid #ffffff;
                    color: #fff;
                    border-radius: 50px;
                    margin-top: 32px;
                }
            }
        }

        .header-img {
            width: 100%;
            flex-direction: column;
            display: flex;
            align-items: center;
            justify-content: center;

            img {
                width: 835px;
                height: 339px;
            }
        }
    `
);
