import React, { FC } from 'react';
import { HeadFC, PageProps, Link } from 'gatsby';
import Layout from '../components/Layout';

interface PrecautionItem {
  id: number;
  title: string;
  description: string;
  imageSrc?: string;
}

const PrecautionsPage: FC<PageProps> = () => {
  const precautionItems: PrecautionItem[] = [
    {
      id: 0,
      title: 'Step 0 / 加入群聊',
      description: '完整的注意事项尚未完工，先写了点最需要注意的点。建议先直接加入InterStduio的QQ群815750302查看信息。',
      imageSrc: require('../images/inter-logo.png').default
    },
    {
      id: 1,
      title: '注意事项 1 / 抠建筑',
      description: '绝大部分的建筑亚克力比较好抠下来，但千万小心“I love ShanghaiTech”，需要一些技巧，大拇指指甲全压在上面，不然容易断成几截。',
      imageSrc: '' // 在这里填入图片路径
    },
    {
      id: 2,
      title: '注意事项 2 / 插槽松紧',
      description: '建筑模型亚克力板的厚度有区别，从1.55-1.8mm都有，我们已经尽力根据厚薄分类并对应了不同厚度槽口的地图板，如果还是插不进去，可以在QQ群里反馈，我们会疯狂道歉，然后重新寄出一份，或者等你开学来领取',
      imageSrc: '' // 在这里填入图片路径
    },
    {
      id: 3,
      title: '注意事项 3 / 锂电池',
      description: '由于EMS不能邮寄电池，所以电源模块实际上没有用，我们会在开学后统一为大家奉上202030的锂电池，届时就无需一直插着C口来供电了。',
      imageSrc: '' // 在这里填入图片路径
    },
    {
      id: 4,
      title: '注意事项 4 / 触摸模块',
      description: '触摸模块问题不少，首先没有丝印，然后三个触摸区域也不够明显，需要靠光影辨别，而且画得也不好，存在误触的情况，大家看到PCB板图后就可以知道原因了，欢迎来敲打我，现在只能尽可能摸区域中央，来避免误触的情况了。',
      imageSrc: '' // 在这里填入图片路径
    },
    {
      id: 5,
      title: '注意事项 5 / 网页施工',
      description: '这个网页其实这几天才搭好，所以大家稍微等等，有问题先进QQ群讨论。',
      imageSrc: '' // 在这里填入图片路径
    }
  ];

  return (
    <Layout>
      <div className="page-content">
        {/* Header Section */}
        <section className="precautions-header mb-xl">
          <div className="precautions-nav">
            <Link to="/" className="back-button">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M19 12H5M12 19l-7-7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            <h1 className="precautions-page-title">注意事项</h1>
          </div>
        </section>

        {/* Precautions Items Section */}
        <section className="precautions-items">
          {precautionItems.map((item, index) => (
            <div key={item.id} className="precaution-item">
              <div className="item-content">
                <div className="item-text">
                  <h2 className="item-title">{item.title}</h2>
                  <p className="item-description">{item.description}</p>
                </div>
                <div className="item-image">
                  {item.imageSrc ? (
                    <img
                      src={item.imageSrc}
                      alt={item.title}
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
              {index < precautionItems.length - 1 && <div className="item-divider"></div>}
            </div>
          ))}
        </section>
      </div>
    </Layout>
  );
};

export default PrecautionsPage;

export const Head: HeadFC = () => (
  <>
    <title>注意事项 - Pin Campus Book</title>
    <meta name="description" content="Pin Campus Book 注意事项" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
  </>
);
