import React from "react";

interface LoginWithGoogleProps {
  onLogin?: () => void;
}

const LoginWithGoogle: React.FC<LoginWithGoogleProps> = ({ onLogin }) => {
  const handleGoogleLogin = () => {
    if (onLogin) onLogin();
    localStorage.setItem("token", "demo-google-token");
    window.location.href = "/";
  };

  return (
    <button
      onClick={handleGoogleLogin}
      className="flex items-center gap-3 px-6 py-3 bg-white border border-gray-300 rounded shadow hover:bg-gray-50 transition text-gray-700 font-semibold text-lg"
    >
      <img
        src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
        alt="Google logo"
        className="w-6 h-6"
      />
      Googleでログイン
    </button>
  );
};

export default LoginWithGoogle;
