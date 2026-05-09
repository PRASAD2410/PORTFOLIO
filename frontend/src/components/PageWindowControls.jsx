import { useNavigate } from 'react-router-dom'

export default function PageWindowControls() {
  const navigate = useNavigate()

  return (
    <>
      <style>{`
        .page-window-controls {
          display: flex;
          gap: 12px;
          margin-bottom: 16px;
        }

        .control-button {
          width: 16px;
          height: 16px;
          border-radius: 50%;
          cursor: pointer;
          transition: all 0.2s;
          border: 1px solid rgba(255, 149, 0, 0.5);
          box-shadow: 0 0 10px rgba(255, 149, 0, 0.3);
        }

        .control-button:hover {
          box-shadow: 0 0 15px rgba(255, 149, 0, 0.8);
          transform: scale(1.2);
        }

        .control-button:active {
          transform: scale(0.9);
        }

        .red-btn { background-color: #ff5f56; }
        .yellow-btn { background-color: #ffbd2e; }
        .green-btn { background-color: #27c93f; }
      `}</style>

      <div className="page-window-controls">
        <button
          onClick={() => window.scrollTo(0, 0)}
          className="control-button yellow-btn"
          title="Minimize"
        />
        <button
          onClick={() => window.scrollTo(0, 0)}
          className="control-button green-btn"
          title="Maximize"
        />
        <button
          onClick={() => navigate('/')}
          className="control-button red-btn"
          title="Close (Go to Home)"
        />
      </div>
    </>
  )
}
