import React, { FC } from 'react';
import { HeadFC, PageProps, Link } from 'gatsby';
import Layout from '../components/Layout';

interface TutorialStep {
  id: number;
  title: string;
  description: string;
  imageSrc?: string;
}

const TutorialPage: FC<PageProps> = () => {
  const tutorialSteps: TutorialStep[] = [
    {
      id: 1,
      title: 'Step 1 / 初始光效',
      description: '从小插子中取下游戏板，将它口朝上插入主控模块，就可以进入初始光效，灯光会亮个不停十六伴数闪烁。',
      imageSrc: '' // 在这里填入图片路径
    },
    {
      id: 2,
      title: 'Step 2 / 开始游戏',
      description: '按列按动游戏板，伴随着一次震动提示，亮光将对应你的对开始闪烁。',
      imageSrc: '' // 在这里填入图片路径
    },
    {
      id: 3,
      title: 'Step 3 / 插入模型',
      description: '从线路板上小心地取下"模型"，根据说明书和你的感觉的提示，将它插入对应的插口内。',
      imageSrc: '' // 在这里填入图片路径
    },
    {
      id: 4,
      title: 'Step 4 / 拆下各个模块',
      description: '10s后，我到首页的触控模块，点击中间的圆圈区域，伴随着一次震动提示，回到主页，下一个常亮插入的连接区域已经亮起。',
      imageSrc: '' // 在这里填入图片路径
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