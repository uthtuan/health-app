import React from "react";
import LoginWithGoogle from "@/components/ui/login-with-google";

const LoginPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <div className="bg-white rounded-lg shadow-lg p-8 flex flex-col items-center">
        <h1 className="text-2xl font-bold mb-6 text-gray-800">ログイン</h1>
        <LoginWithGoogle />
      </div>
    </div>
  );
};

export default LoginPage;
