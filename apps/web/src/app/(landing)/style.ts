const brandDark = "#435259";
const brandCyan = "#02E1EF";
const brandLight = "#A0A7AB";

import { createStyles } from "antd-style";

export const useStyles = createStyles(({ token, css }) => ({
  container: css`
    min-height: 100vh;
    background: ${token.colorBgLayout};
  `,
  hero: css`
    padding: 80px 24px;
    background: linear-gradient(135deg, ${brandDark} 0%, #4a636e 100%);
    color: #fff;
    text-align: center;

    @media (max-width: 767px) {
      padding: 40px 16px;
    }
  `,
  heroTitle: css`
    color: #fff !important;
    font-size: 48px !important;
    margin-bottom: 24px !important;

    @media (max-width: 767px) {
      font-size: 32px !important;
    }
  `,
  heroSubtitle: css`
    color: rgba(255, 255, 255, 0.85) !important;
    font-size: 20px !important;
    max-width: 800px;
    margin: 0 auto 40px !important;

    @media (max-width: 767px) {
      font-size: 16px !important;
    }
  `,
  heroCta: css`
    border-color: #fff !important;
    color: #fff !important;

    &:hover {
      border-color: ${brandCyan} !important;
      color: ${brandCyan} !important;
    }
  `,
  section: css`
    padding: 64px 24px;
    max-width: 1200px;
    margin: 0 auto;

    @media (max-width: 767px) {
      padding: 32px 16px;
    }
  `,
  card: css`
    height: 100%;
    border-top: 3px solid ${brandDark};
    transition: transform 0.3s;

    &:hover {
      transform: translateY(-5px);
      border-top-color: ${brandCyan};
    }
  `,
  icon: css`
    font-size: 32px;
    color: ${brandDark};
    margin-bottom: 16px;
  `,
  codeBlock: css`
    background: #2d3a40;
    color: ${brandLight};
    padding: 20px;
    border-radius: 8px;
    font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, monospace;
    margin: 16px 0;
    overflow-x: auto;
    line-height: 1.7;
  `,
  codeKeyword: css`
    color: ${brandCyan};
  `,
  codeString: css`
    color: #e6db74;
  `,
  codeComment: css`
    color: ${brandLight};
    opacity: 0.5;
  `,
  codeType: css`
    color: #66d9ef;
  `,
  codeFunc: css`
    color: #a6e22e;
  `,
  demoSection: css`
    background: ${token.colorBgContainer};
    border-radius: 12px;
    padding: 32px;
    box-shadow: ${token.boxShadowTertiary};
    margin-top: 40px;
  `,
  fetchBtn: css`
    background: ${brandDark} !important;
    border-color: ${brandDark} !important;

    &:hover {
      background: #4a636e !important;
      border-color: #4a636e !important;
    }
  `,
  sectionTitle: css`
    text-align: center;
    margin-bottom: 48px;
  `,
  usageSection: css`
    background: ${token.colorBgLayout};
    max-width: 100%;
    padding: 64px 24px;

    @media (max-width: 767px) {
      padding: 32px 16px;
    }
  `,
  usageInner: css`
    max-width: 1200px;
    margin: 0 auto;
  `,
  fullWidth: css`
    width: 100%;
  `,
  footer: css`
    text-align: center;
    padding: 48px 24px;
    color: ${token.colorTextTertiary};
  `,
}));
