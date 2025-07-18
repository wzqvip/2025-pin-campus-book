import React, { FC } from 'react';
import { HeadFC, PageProps, Link } from 'gatsby';
import Layout from '../components/Layout';
import { StaticImage } from "gatsby-plugin-image";


interface TutorialStep {
  id: number;
  title: string;
  description: string;
  imageSrc?: string;
}

const TutorialPage: FC<PageProps> = () => {
  const tutorialSteps: TutorialStep[] = [
    {
      id: 0,
      title: 'Step 0 / 加入群聊',
      description: '完整的使用教程尚未完工，可查看“上科大招生”微信公众号的推文，视频中速览了使用流程。也可以直接加入InterStduio的QQ群815750302。',
      imageSrc: require('../images/inter-logo.png').default
    },
    {
      id: 1,
      title: 'Step 1 / 初始光效',
      description: '从小册子中取下游戏板，将C口供电接入主控模块，就可以进入初始光效，灯光会逐个点亮十六栋校园建筑。',
      imageSrc: require('../images/tu1.png').default
    },
    {
      id: 2,
      title: 'Step 2 / 开始游戏',
      description: '猛烈甩动游戏板，伴随着一次震动提示，景观塔对应的灯开始闪烁，',
      imageSrc: require('../images/tu2.png').default
    },
    {
      id: 3,
      title: 'Step 3 / 插入模型',
      description: '从建筑板上小心地抠下模型，根据说明书和硫酸纸的提示，将凸起插入对应的槽口内。',
      imageSrc: require('../images/tu3.png').default
    },
    {
      id: 4,
      title: 'Step 4 / 触摸切换',
      description: '接着，找到背面的触摸模块，点击中间的圆圈区域。伴随着一次震动提示，回到正面，下一个需要插入的建筑区域已经亮起。',
      imageSrc: require('../images/tu4.png').default
    }
  ];

  return (
    <Layout>
      <div className="page-content">
        {/* Header Section */}
        <section className="tutorial-header mb-xl">
          <div className="tutorial-nav">
            <Link to="/" className="back-button">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M19 12H5M12 19l-7-7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
            <h1 className="tutorial-page-title">使用教程</h1>
          </div>
        </section>

        {/* Tutorial Steps Section */}
        <section className="tutorial-steps">
          {tutorialSteps.map((step, index) => (
            <div key={step.id} className="tutorial-step">
              <div className="step-content">
                <div className="step-text">
                  <h2 className="step-title">{step.title}</h2>
                  <p className="step-description">{step.description}</p>
                </div>
                <div className="step-image">
                  {step.imageSrc ? (
                    <img 
                      src={step.imageSrc} 
                      alt={step.title}
                      loading="lazy"
                    />
                  ) : (
                    <div className="image-placeholder">
                      <div className="placeholder-icon triangle"></div>
                      <div className="placeholder-icon star"></div>
                      <div className="placeholder-icon square"></div>
                    </div>
                  )}
                </div>
              </div>
              {index < tutorialSteps.length - 1 && <div className="step-divider"></div>}
            </div>
          ))}
        </section>
      </div>
    </Layout>
  );
};

export default TutorialPage;

export const Head: HeadFC = () => (
  <>
    <title>使用教程 - Pin Campus Book</title>
    <meta name="description" content="Pin Campus Book 使用教程" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
  </>
);