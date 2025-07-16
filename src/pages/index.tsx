import React, { FC } from 'react';
import { HeadFC, PageProps } from 'gatsby';
// 导入自定义组件
import Layout from '../components/Layout'; // 页面整体布局组件
import Banner from '../components/Banner'; // 顶部横幅组件
import SectionHeader from '../components/SectionHeader'; // 各个内容区域的标题组件
import TutorialItem from '../components/TutorialItem'; // 教程列表项组件
import ProcessItem from '../components/ProcessItem'; // 制作过程列表项组件
import MemberItem from '../components/MemberItem'; // 项目成员列表项组件

interface Tutorial {
  title: string;
  description: string;
  date: string;
  duration: string;
}

interface Member1 {
  name: string;
  avatar?: string;
}

interface Member2 {
  name: string;
  avatar?: string;
}

const IndexPage: FC<PageProps> = () => {
  const tutorials: Tutorial[] = [
    {
      title: '使用教程',
      description: '如何从0开始上手XX',
      date: '2025/07/14',
      duration: '23 min'
    },
    {
      title: '进阶教程',
      description: '开始你的个性化代码之旅吧',
      date: '2025/07/14',
      duration: '23 min'
    }
  ];

  const members1: Member1[] = [
    { name: '笛韵扬' },
    { name: '周子涵' },
    { name: '齐一舟' },
    { name: '钟奕珈' },
    { name: '钟阅旸' },
    { name: '陈怡冰' },
    { name: '汤恭恪' }
  ];

  const members2: Member2[] = [
    { name: '王子琪' },
    { name: '刘禹彤' },
    { name: '吴瑜青' },
    { name: '刘翼飞' },
    { name: '戴梦瑶' },
    { name: '张天祺' },
    { name: '张雅捷' },
    { name: '林弘扬' }
  ];

  return (
    <Layout>
      <div className="page-content">
        {/* Banner Section */}
        <section className="banner-section mb-2xl">
          <Banner />
        </section>

        {/* Tutorial Section */}
        <section className="tutorial-section mb-2xl">
          <SectionHeader title="教程" showArrow={true} />
          <div className="tutorial-list">
            {tutorials.map((tutorial, index) => (
              <TutorialItem
                key={index}
                title={tutorial.title}
                description={tutorial.description}
                date={tutorial.date}
                duration={tutorial.duration}
              />
            ))}
          </div>
        </section>

        {/* Process Section */}
        <section className="process-section mb-2xl">
          <SectionHeader title="制作过程" showArrow={true} />
          <div className="process-grid grid grid-3">
            <ProcessItem hasOverlay={true} overlayText="J" />
            <ProcessItem />
            <ProcessItem />
            <ProcessItem />
            <ProcessItem />
            <ProcessItem />
          </div>
        </section>

        {/* Members Section */}
        <section className="members-section mb-2xl">
          <SectionHeader title="项目成员" showArrow={true} />
              <div className="members-list">
                {members1.map((member1, index) => (
                  <MemberItem key={index} name={member1.name} avatar={member1.avatar} />
                ))}
              </div>
              <div className="members-list">
                {members2.map((member2, index) => (
                  <MemberItem key={index} name={member2.name} avatar={member2.avatar} />
                ))}
                </div>
        </section>
      </div>
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => (
  <>
    <title>Pin Campus Book</title>
    <meta name="description" content="上科大2025届新生纪念可交互礼物" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
  </>
);
