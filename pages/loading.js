// components/Loading.js
const Loading = () => (
    <div className="loading-overlay">
      <div className="dots">
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
      </div>
      <style jsx>{`
        .loading-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(255, 255, 255, 1); /* White background */
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
        }
  
        .dots {
          display: flex;
          justify-content: space-between;
          width: 70px;
        }
  
        .dot {
          width: 15px;
          height: 15px;
          background-color: #000; /* Black dots */
          border-radius: 50%;
          animation: bounce 0.6s infinite alternate;
        }
  
        .dot:nth-child(1) {
          animation-delay: 0s;
        }
  
        .dot:nth-child(2) {
          animation-delay: 0.2s;
        }
  
        .dot:nth-child(3) {
          animation-delay: 0.4s;
        }
  
        @keyframes bounce {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-20px);
          }
        }
      `}</style>
    </div>
  );
  
  export default Loading;
  