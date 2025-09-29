import React from "react";

type TopNavProps = {
  activeView: "unit" | "wrongs" | "general-test";
  onChangeView: (view: "unit" | "wrongs" | "general-test") => void;
};

const navItems: Array<{ id: "unit" | "wrongs" | "general-test"; label: string }> = [
  { id: "unit", label: "Üniteler" },
  { id: "wrongs", label: "Yanlışlarım" },
  { id: "general-test", label: "Genel Test" },
];

export const TopNav: React.FC<TopNavProps> = ({ activeView, onChangeView }) => {
  return (
    <header className="flex items-center justify-between border-b border-slate-800 bg-slate-900/80 px-6 py-4 backdrop-blur">
      <div>
        <h1 className="text-lg font-semibold text-sky-400">Türkçe Derslik</h1>
        <p className="text-xs text-slate-300">8. sınıf Türkçe | Konu anlatımı, etkinlik ve test</p>
      </div>
      <nav className="flex items-center gap-2">
        {navItems.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => onChangeView(item.id)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-colors focus:outline-none focus-visible:ring focus-visible:ring-sky-500 ${
              activeView === item.id
                ? "bg-sky-500 text-white hover:bg-sky-400"
                : "bg-slate-800 text-slate-200 hover:bg-slate-700"
            }`}
          >
            {item.label}
          </button>
        ))}
      </nav>
    </header>
  );
};
