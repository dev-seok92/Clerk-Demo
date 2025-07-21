"use client";

import { SignedIn, SignedOut, useUser, SignInButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="max-w-md w-full mx-auto p-8 bg-white rounded-lg shadow-md text-center">
        {/* 로그인된 사용자에게 표시할 내용 */}
        <SignedIn>
          <WelcomeMessage />
        </SignedIn>

        {/* 로그인되지 않은 사용자에게 표시할 내용 */}
        <SignedOut>
          <div className="space-y-6">
            <h1 className="text-2xl font-bold text-gray-900">
              로그인을 진행해주세요
            </h1>
            <p className="text-gray-600">
              서비스를 이용하기 위해 로그인이 필요합니다.
            </p>
            <div className="pt-4">
              <SignInButton mode="modal">
                <button className="w-full bg-[#6c47ff] hover:bg-[#5639d9] text-white font-medium py-3 px-6 rounded-lg transition-colors">
                  로그인하기
                </button>
              </SignInButton>
            </div>
          </div>
        </SignedOut>
      </div>
    </div>
  );
}

function WelcomeMessage() {
  const { user } = useUser();
  
  return (
    <div className="space-y-6">
      <div className="text-6xl">👋</div>
      <h1 className="text-2xl font-bold text-gray-900">
        환영합니다, {user?.firstName || user?.username || "사용자"}님!
      </h1>
      <p className="text-gray-600">
        성공적으로 로그인되었습니다.
      </p>
      <div className="pt-4 text-sm text-gray-500">
        <p>이메일: {user?.emailAddresses[0]?.emailAddress}</p>
      </div>
    </div>
  );
}
