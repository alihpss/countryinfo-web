import { useNavigate } from 'react-router-dom';

export default function RedirectToHome() {
  const navigate = useNavigate();

  const handleGoToHome = () => {
    navigate('/');
  };

  return (
    <button
      className="bg-purple-400 text-white p-4 rounded-md ml-2 mt-20 mb-4"
      onClick={handleGoToHome}
    >
      Back to home
    </button>
  );
}
