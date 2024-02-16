"use client"
import { getAmountDue } from "@/services/account";
import { processPayment } from "@/services/payment";
import { Account } from "@/types/accountTypes";
import axios from "axios";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [selectedFriend, setSelectedFriend] = useState('');
  const [accountDetail, setAccountDetail] = useState<Account>();
  const [paymentType, setPaymentType] = useState<'equal' | 'individual'>('equal'); // ['equal', 'individual'

  const friends = ["Kevin", "Sergio", "Camilo"]; // Static for simplicity

  const handleGetAmountDue = async () => {
    try {
      const response = await getAmountDue(selectedFriend);
      console.log('data:', response);
      setAccountDetail(response);
    } catch (error) {
      console.error('There was an error fetching the amount due:', error);
      setAccountDetail({ total_value: 0 });
    }
  };

  const handlePayBill = async () => {
    if (paymentType === 'individual' && (!selectedFriend || selectedFriend === 'Select a friend')) {
      alert('Please select a friend from the list before start an individual payment.');
      return;
    }
    try {
      const response = await processPayment(paymentType, selectedFriend);
      console.log('responseee:', response);
      alert(response.message);
    }
    catch (error: any) {
      console.error('Error:', error);
      alert(error.response.error || 'An error occurred while processing your payment.');

    }

  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 ">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200  backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Beer bar&nbsp;
        </p>
        <div className="fixed bottom-0 left-0 flex h-[50px] w-full items-end justify-center bg-gradient-to-t lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href=""
            target=""
            rel="noopener noreferrer"
          >
            By{" "}
            <Image
              className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
              src="/next.svg"
              alt="Next.js Logo"
              width={100}
              height={24}
              priority
            />

          </a>
        </div>


      </div>
      <div className="relative bg-background-gray w-full lg:rounded-xl h-[600px]">
        <div className="flex flex-col w-full h-full mt-10">
          <div className="flex flex-col items-center w-full">
            <h1 className="text-6xl font-bold text-center text-dark-blue">
              Welcome to Beer bar
            </h1>
            <p className="mt-4 text-2xl text-center text-gray-text ">
              The best place to find the best beer
            </p>
            <div className="flex flex-col w-auto gap-4 mt-5">
              <h1 className="text-dark-blue text-xl">Select the name of the customer</h1>
              <select value={selectedFriend} onChange={e => setSelectedFriend(e.target.value)} className="text-dark-blue rounded-sm h-8 bg-pale-blue">
                {/* Use an empty value for the placeholder and mark it as disabled */}
                <option value="">Select a friend</option>
                {friends.map(friend => (
                  <option key={friend} value={friend}>{friend}</option>
                ))}
              </select>

              <button type="button" className="rounded-lg px-4 py-2 bg-dark-purple text-white"
                onClick={() => {
                  handleGetAmountDue()
                }}>
                Get Amount Due
              </button>
              {accountDetail?.friend_name ? (
                <div className="flex flex-col gap-4">
                  <h1 className="text-dark-blue text-xl">{accountDetail.friend_name} has to pay {accountDetail.total_value}</h1>
                </div>
              ) : (
                <div className="flex flex-col gap-4">
                  <h1 className="text-dark-blue text-xl">Total amount: {accountDetail?.total_value}</h1>
                </div>)}


              <div className="flex flex-col text-dark-blue gap-4 mt-">
                <h1>Please select an option for payment</h1>
                <label>
                  <input
                    type="radio"
                    value="equal"
                    checked={paymentType === 'equal'}
                    onChange={() => setPaymentType('equal')}
                  /> Equal Payment
                </label>
                <label>
                  <input
                    type="radio"
                    value="individual"
                    checked={paymentType === 'individual'}
                    onChange={() => setPaymentType('individual')}
                  /> Individual Payment
                </label>
                <button type="button" className="rounded-lg px-4 py-2 bg-dark-purple text-white" onClick={() => { handlePayBill() }}>Pay Bill</button>
              </div>
            </div>
          </div>
        </div>
      </div>

    </main>
  );
}
