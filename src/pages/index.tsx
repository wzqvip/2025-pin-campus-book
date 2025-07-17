import React, { FC } from 'react';
import { HeadFC, PageProps } from 'gatsby';
import { StaticImage } from "gatsby-plugin-image";
import { withPrefix } from "gatsby";


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
  linkTo?: string;
}

interface Member1 {
  name: string;
  avatar?: string;
  imageSrc?: string;
}

interface Member2 {
  name: string;
  avatar?: string;
  imageSrc?: string;
}

const IndexPage: FC<PageProps> = () => {
  const tutorials: Tutorial[] = [
    {
      title: '使用教程',
      description: '如何从0开始上手Pin Campus Book',
      linkTo: '/tutorial'
    },
    {
      title: '注意事项',
      description: '你在使用前必须知道的一些小事',
      linkTo: '/precautions'
    }
  ];

  const members1: Member1[] = [
    { name: '笛韵扬', imageSrc: '' }, // 在这里填入图片路径
    { name: '周子涵', imageSrc: '' }, // 在这里填入图片路径
    { name: '齐一舟', imageSrc: '' }, // 在这里填入图片路径
    { name: '钟奕珈', imageSrc: '' }, // 在这里填入图片路径
    { name: '钟阅旸', imageSrc: '' }, // 在这里填入图片路径
    { name: '陈怡冰', imageSrc: '' }, // 在这里填入图片路径
    { name: '汤恭恪', imageSrc: '' }  // 在这里填入图片路径
  ];

  const members2: Member2[] = [
    { name: '王子琪', imageSrc: '' }, // 在这里填入图片路径
    { name: '刘禹彤', imageSrc: '' }, // 在这里填入图片路径
    { name: '吴瑜青', imageSrc: '' }, // 在这里填入图片路径
    { name: '刘翼飞', imageSrc: '' }, // 在这里填入图片路径
    { name: '戴梦瑶', imageSrc: '' }, // 在这里填入图片路径
    { name: '张天祺', imageSrc: '' }, // 在这里填入图片路径
    { name: '张雅捷', imageSrc: '' }, // 在这里填入图片路径
    { name: '林弘扬', imageSrc: '' }  // 在这里填入图片路径
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
                linkTo={tutorial.linkTo}
              />
            ))}
          </div>
        </section>

        {/* Process Section */}
        <section className="process-section mb-2xl">
          <SectionHeader title="制作过程" showArrow={true} />
          <div className="process-grid grid grid-3">
          <ProcessItem imageSrc={<StaticImage src="../images/process-image1.jpg" alt="process-image1" />} />
          <ProcessItem imageSrc={<StaticImage src="../images/process-image2.jpg" alt="process-image2" />} />
          <ProcessItem imageSrc={<StaticImage src="../images/process-image3.jpg" alt="process-image3" />} />
          <ProcessItem imageSrc={<StaticImage src="../images/process-image4.jpg" alt="process-image4" />} />
          <ProcessItem imageSrc={<StaticImage src="../images/process-image5.jpg" alt="process-image5" />} />
          <ProcessItem imageSrc={<StaticImage src="../images/process-image6.jpg" alt="process-image6" />} />

          </div>
        </section>

        {/* Members Section */}
        <section className="members-section mb-2xl">
          <SectionHeader title="项目成员" showArrow={true} />
              <div className="members-list">
                {members1.map((member1, index) => (
                  <MemberItem key={index} name={member1.name} avatar={member1.avatar} imageSrc={member1.imageSrc} />
                ))}
              </div>
              <div className="members-list">
                {members2.map((member2, index) => (
                  <MemberItem key={index} name={member2.name} avatar={member2.avatar} imageSrc={member2.imageSrc} />
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
