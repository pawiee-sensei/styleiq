import {useState, useEffect} from 'react';

export function ScarcityEngine({stockCount = 4, endHours = 2}) {
  const [viewers] = useState(() => Math.floor(Math.random() * 20) + 8);
  const [timeLeft, setTimeLeft] = useState(endHours * 3600);

  // ── Countdown timer ──
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const hours = String(Math.floor(timeLeft / 3600)).padStart(2, '0');
  const mins = String(Math.floor((timeLeft % 3600) / 60)).padStart(2, '0');
  const secs = String(timeLeft % 60).padStart(2, '0');

  return (
    <div className="scarcity-strip">
      <div className="scarcity-item">
        <span className="scarcity-val">{stockCount.toString().padStart(2, '0')}</span>
        <span className="scarcity-lbl">LEFT</span>
      </div>
      <div className="scarcity-divider" />
      <div className="scarcity-item">
        <span className="scarcity-val">{hours}:{mins}:{secs}</span>
        <span className="scarcity-lbl">ENDS IN</span>
      </div>
      <div className="scarcity-divider" />
      <div className="scarcity-item">
        <span className="scarcity-val">{viewers}</span>
        <span className="scarcity-lbl">VIEWING</span>
      </div>
    </div>
  );
}