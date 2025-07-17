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
      id: 1,
      title: '注意事项 1 / 小心操作',
      description: '请小心操作各个模块，避免用力过猛导致损坏。插拔模块时请轻柔操作，确保正确对准插口。',
      imageSrc: '' // 在这里填入图片路径
    },
    {
      id: 2,
      title: '注意事项 2 / 保持清洁',
      description: '使用前请确保手部清洁，避免污渍影响触控效果。定期清理设备表面，保持最佳使用体验。',
      imageSrc: '' // 在这里填入图片路径
    },
    {
      id: 3,
      title: '注意事项 3 / 电池管理',
      description: '注意电池电量，低电量时及时充电。长期不使用时请关闭电源，延长设备使用寿命。',
      imageSrc: '' // 在这里填入图片路径
    },
    {
      id: 4,
      title: '注意事项 4 / 存储环境',
      description: '请将设备存放在干燥、阴凉的环境中，避免阳光直射和潮湿环境，防止设备损坏。',
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
                <path d="M19 12H5M12 19l-7-7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
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
