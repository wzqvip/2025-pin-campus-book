import React, { FC, useEffect } from 'react';
import { HeadFC, PageProps, withPrefix } from 'gatsby';
import Layout from '../components/Layout';
import Banner from '../components/Banner';
import SectionHeader from '../components/SectionHeader';
import TutorialItem from '../components/TutorialItem';
import ProcessItem from '../components/ProcessItem';
import MemberItem from '../components/MemberItem';

interface Tutorial {
  title: string;
  description: string;
  linkTo?: string;
}

interface Member {
  name: string;
  avatar?: string;
}

const tutorials: Tutorial[] = [
  { title: '使用教程', description: '如何从零上手 Pin Campus Book', linkTo: '/tutorial' },
  { title: '注意事项', description: '使用前必须知道的一些小事', linkTo: '/precautions' },
];

const members1: Member[] = [
  { name: '笛韵扬' }, { name: '周子涵' }, { name: '齐一舟' }, { name: '钟奕珈' },
  { name: '钟阅旸' }, { name: '陈怡冰' }, { name: '汤恭恪' },
];

const members2: Member[] = [
  { name: '王子琪' }, { name: '刘禹彤' }, { name: '吴瑜青' }, { name: '刘翼飞' },
  { name: '戴梦瑶' }, { name: '张天祺' }, { name: '张雅捷' }, { name: '林弘扬' },
];

const getMemberImage = (name: string): string => {
  const map: Record<string, string> = {
    '笛韵扬': 'dyy.png', '周子涵': 'zzh.png', '齐一舟': 'qyz.jpg', '钟奕珈': 'zyj.png',
    '钟阅旸': 'zyy.png', '陈怡冰': 'cyb.png', '汤恭恪': 'tgk.png', '王子琪': 'wzq.png',
    '刘禹彤': 'lyt.jpg', '吴瑜青': 'wyq.jpg', '刘翼飞': 'lyf.png', '戴梦瑶': 'dmy.png',
    '张天祺': 'ztq.jpg', '张雅捷': 'zyj2.jpg', '林弘扬': 'lhy.jpg',
  };
  return withPrefix(`/images/${map[name] || 'default.png'}`);
};

const IndexPage: FC<PageProps> = () => {
  // useEffect(() => {
  //   if (location.hostname === 'www.interstudio.tech' && !location.pathname.startsWith('/2025-pin-campus-book')) {
  //     location.href = '/2025-pin-campus-book/';
  //   }
  // }, []);

  return (
    <Layout>
      <div className="page-content">
        <section className="banner-section mb-2xl">
          <Banner />
        </section>

        <section className="tutorial-section mb-2xl">
          <SectionHeader title="教程" showArrow={true} />
          <div className="tutorial-list">
            {tutorials.map((tutorial, index) => (
              <TutorialItem key={index} {...tutorial} />
            ))}
          </div>
        </section>

        <section className="process-section mb-2xl">
          <SectionHeader title="制作过程" showArrow={true} />
          <div className="process-grid grid grid-3">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <ProcessItem
                key={i}
                imageSrc={<img src={withPrefix(`/images/process-image${i}.jpg`)} alt={`process-${i}`} width={200} />}
              />
            ))}
          </div>
        </section>

        <section className="members-section mb-2xl">
          <SectionHeader title="项目成员" showArrow={true} />
          <div className="members-list">
            {members1.map((member, index) => (
              <MemberItem
                key={index}
                name={member.name}
                avatar={member.avatar}
                imageSrc={<img src={getMemberImage(member.name)} alt={member.name} width={65} height={65} />}
              />
            ))}
          </div>
          <div className="members-list">
            {members2.map((member, index) => (
              <MemberItem
                key={index}
                name={member.name}
                avatar={member.avatar}
                imageSrc={<img src={getMemberImage(member.name)} alt={member.name} width={65} height={65} />}
              />
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