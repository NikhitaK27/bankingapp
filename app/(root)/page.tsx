import HeaderBox from '@/components/HeaderBox'
import RightSideBar from '@/components/RightSideBar';
import TotalBalanceBox from '@/components/TotalBalanceBox';
import React from 'react'

const Home = () => {
  const loggedIn={firstName:'Nikhitha',lastName:'Kommineni',email:'knikhitasai27@gmail.com'};
  return (
    <section className='home'>
      <div className='home-content'>
        <header className='home-header'>
          <HeaderBox
          type='greeting'
          title="Welcome"
          user={loggedIn?.firstName || 'Guest'}
          subtext="Acess and manage your account and transactions efficiently."
          />
          <TotalBalanceBox
          accounts={[]}
          totalBanks={1}
          totalCurrentBalance={1500.65}/>

        </header>
      RECENT TRANSACTIONS
      </div>
      <RightSideBar
        user={loggedIn}
        transactions={[]}
        banks={[{currentBalance:123.50},{currentBalance:500}]}
      />
    </section>
  )
}

export default Home
