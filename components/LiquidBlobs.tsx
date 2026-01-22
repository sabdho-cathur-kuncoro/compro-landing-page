export default function LiquidBlobs() {
  return (
    <svg
      className="w-full h-full"
      viewBox="0 0 1000 1000"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        {/* 🔹 BACK BLOB GRADIENT (BLUE / CYAN) */}
        <radialGradient id="backGradient" cx="40%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#6d8cff" />
          <stop offset="70%" stopColor="#2563eb" />
          <stop offset="100%" stopColor="#0284c7" />
        </radialGradient>

        {/* 🔹 FRONT BLOB GRADIENT (PINK / RED) */}
        <radialGradient id="frontGradient" cx="40%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#ff4fd8" />
          <stop offset="60%" stopColor="#ec4899" />
          <stop offset="100%" stopColor="#ef4444" />
        </radialGradient>
      </defs>

      {/* 🔹 CENTER GROUP */}
      <g transform="translate(500 500)">
        {/* 🔹 BACK BLOB (BEHIND) */}
        <g transform="translate(-80,-140)">
          {/* BREATHING SCALE */}
          <animateTransform
            attributeName="transform"
            type="scale"
            additive="sum"
            dur="4s"
            repeatCount="indefinite"
            values="
              1 1;
              1.04 0.96;
              0.98 1.02;
              1 1
            "
          />

          {/* FLOAT */}
          <animateTransform
            attributeName="transform"
            type="translate"
            additive="sum"
            dur="8s"
            repeatCount="indefinite"
            values="
              0 0;
              0 -12;
              0 0
            "
          />

          <path fill="url(#backGradient)">
            {/* SHAPE MORPH */}
            <animate
              attributeName="d"
              dur="10s"
              repeatCount="indefinite"
              values="
                M0,-200
                C180,-220 260,-40 200,120
                C140,280 -80,300 -220,160
                C-360,20 -260,-160 -80,-200Z;

                M0,-180
                C200,-200 300,-20 220,140
                C140,300 -120,320 -260,160
                C-400,0 -280,-160 -100,-200Z;

                M0,-200
                C180,-220 260,-40 200,120
                C140,280 -80,300 -220,160
                C-360,20 -260,-160 -80,-200Z
              "
            />
          </path>
        </g>

        {/* 🔹 FRONT BLOB (IN FRONT) */}
        <g transform="translate(40,20)">
          {/* BREATHING SCALE */}
          <animateTransform
            attributeName="transform"
            type="scale"
            additive="sum"
            dur="8s"
            repeatCount="indefinite"
            values="
              1 1;
              1.05 0.95;
              0.97 1.03;
              1 1
            "
          />

          {/* FLOAT */}
          <animateTransform
            attributeName="transform"
            type="translate"
            additive="sum"
            dur="10s"
            repeatCount="indefinite"
            values="
              0 0;
              0 10;
              0 0
            "
          />

          <path fill="url(#frontGradient)">
            {/* SHAPE MORPH */}
            <animate
              attributeName="d"
              dur="16s"
              repeatCount="indefinite"
              values="
                M0,-120
                C200,-140 320,40 240,200
                C160,360 -120,360 -280,220
                C-440,80 -300,-120 -120,-120Z;

                M0,-100
                C220,-120 340,60 260,240
                C180,420 -160,380 -320,220
                C-480,60 -300,-140 -100,-120Z;

                M0,-120
                C200,-140 320,40 240,200
                C160,360 -120,360 -280,220
                C-440,80 -300,-120 -120,-120Z
              "
            />
          </path>
        </g>
      </g>
    </svg>
  );
}
