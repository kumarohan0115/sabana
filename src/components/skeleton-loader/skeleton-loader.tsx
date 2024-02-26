import React, {useEffect} from 'react';
import './skeleton-loader.scss';

const SkeletonLoader: React.FC = () => {
  useEffect(()=>{
    console.log("Here")
  },[])
  return (
    <div className='skeleton-wrapper'>
      <div className='header-skeleton light-bg hide-overflow'>
        <span className='skeleton-box'></span>
      </div>
      <div className='logo-skeleton hide-overflow'>
        <span className='skeleton-box'></span>
      </div>
      <div className='details-skeleton light-bg hide-overflow'>
        <span className='skeleton-box'></span>
      </div>
      <div className='wallets-skeleton light-bg hide-overflow'>
        <span className='skeleton-box'></span>
      </div>
      <div className='wallets-skeleton light-bg hide-overflow'>
        <span className='skeleton-box'></span>
      </div>
      <div className='footer-skeleton light-bg hide-overflow'>
        <span className='skeleton-box'></span>
      </div>
    </div>
  );
};

export default SkeletonLoader;
