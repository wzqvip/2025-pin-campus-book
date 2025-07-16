// 导入 React 库和必要的 hooks
import React, { FC, useState, useEffect } from 'react';

import Image1 from '../images/banner-image1.jpg';
import Image2 from '../images/banner-image2.jpg';
import Image3 from '../images/banner-image3.jpg';
import Image4 from '../images/banner-image4.jpg';
import Image5 from '../images/banner-image5.jpg';

// 定义轮播图片数据接口
interface CarouselImage {
  id: number;
  src: string;
  alt: string;
}

// 定义 Banner 函数组件
const Banner: FC = () => {
  // 定义轮播图片数据数组（使用占位图片）
  const carouselImages: CarouselImage[] = [
    {
      id: 1,
      src: Image1,
      alt: 'Banner Image 1'
    },
    {
      id: 2,
      src: Image2,
      alt: 'Banner Image 2'
    },
    {
      id: 3,
      src: Image3,
      alt: 'Banner Image 3'
    },
    {
      id: 4,
      src: Image4,
      alt: 'Banner Image 4'
    },
    {
      id: 5,
      src: Image5,
      alt: 'Banner Image 5'
    }
  ];


  
  // 使用 useState 管理当前显示的图片索引
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // 使用 useEffect 实现自动轮播
  useEffect(() => {
    // 设置定时器，每3秒切换到下一张图片
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        // 如果是最后一张图片，则回到第一张；否则切换到下一张
        prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // 3秒间隔

    // 清理函数：组件卸载时清除定时器
    return () => clearInterval(interval);
  }, [carouselImages.length]); // 依赖数组包含图片数量

  // 手动切换到指定图片的函数
  const goToSlide = (index: number) => {
    setCurrentImageIndex(index);
  };

  // 切换到上一张图片的函数
  const goToPrevious = () => {
    setCurrentImageIndex(
      currentImageIndex === 0 ? carouselImages.length - 1 : currentImageIndex - 1
    );
  };

  // 切换到下一张图片的函数
  const goToNext = () => {
    setCurrentImageIndex(
      currentImageIndex === carouselImages.length - 1 ? 0 : currentImageIndex + 1
    );
  };

  return (
    // 最外层 div，代表整个 Banner 区域
    <div className="banner">
      {/* 轮播容器 */}
      <div className="banner-carousel">
        {/* 图片容器，使用 transform 实现滑动效果 */}
        <div 
          className="banner-images"
          style={{
            transform: `translateX(-${currentImageIndex * 100}%)`,
            transition: 'transform 0.5s ease-in-out'
          }}
        >
          {/* 遍历图片数组，渲染每张图片 */}
          {carouselImages.map((image) => (
            <div key={image.id} className="banner-image">
              <img 
                src={image.src} 
                alt={image.alt}
                loading="lazy" // 懒加载优化
              />
            </div>
          ))}
        </div>

        {/* 导航按钮 */}
        <button 
          className="banner-nav banner-nav-prev"
          onClick={goToPrevious}
          aria-label="Previous image"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        
        <button 
          className="banner-nav banner-nav-next"
          onClick={goToNext}
          aria-label="Next image"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        {/* 指示器（小圆点） */}
        <div className="banner-indicators">
          {carouselImages.map((_, index) => (
            <button
              key={index}
              className={`banner-indicator ${index === currentImageIndex ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Banner 文本内容叠加层 */}
      <div className="banner-content">
        <div className="banner-text">
          <h1 className="banner-title">Pin Campus Book</h1>
          <p className="banner-subtitle">上科大2025届新生纪念可交互礼物</p>
        </div>
      </div>
    </div>
  );
};

// 导出 Banner 组件
export default Banner;
