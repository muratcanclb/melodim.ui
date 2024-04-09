import { useNavigate } from "react-router-dom";
const homePage = () => {
  const navigate = useNavigate();
  return (
    <>
      <div>
        <h1>Ana Sayfa</h1>
      </div>
      <div>
        <button onClick={() => navigate('music-list')}>MÜZİK LİSTE SAYFASI</button>
      </div>
    </>
  );
};

export default homePage;
