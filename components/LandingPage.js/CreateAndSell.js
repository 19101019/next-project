import React from 'react';
import styles from '../../styles/CreateAndSell.module.css';
import CreateAndSellCard from '../assets/CreateAndSellCard';
export default function CreateAndSell() {
  return (
    <div className={'lg:p-10 sm:p-5 ' + styles.bg}>
      <div className='flex items-center rounded justify-center lg:text-3xl sm:text-2xl lg:m-10 sm:mt-6'>
        Create and sell your NFTs
      </div>
      <div className='flex flex-auto flex-wrap '>
        <CreateAndSellCard
          cardHeader='set up your wallet'
          desc='Once you’ve set up your wallet of choice, connect it to OpenSea by clicking the wallet icon in the top right corner. Learn about the wallets we support.'
        />
        <CreateAndSellCard
          cardHeader='Create your collection'
          desc='Click My Collections and set up your collection. Add social links, a description, profile & banner images, and set a secondary sales fee.'
        />
        <CreateAndSellCard
          cardHeader='Add your NFTs'
          desc='Upload your work (image, video, audio, or 3D art), add a title and description, and customize your NFTs with properties, stats, and unlockable content.'
        />
        <CreateAndSellCard
          cardHeader='List them for sale'
          desc='Choose between auctions, fixed-price listings, and declining-price listings. You choose how you want to sell your NFTs, and we help you sell them!'
        />
      </div>
    </div>
  );
}
