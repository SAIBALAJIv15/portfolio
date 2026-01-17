import { useState } from "react";
import { cn } from "@/lib/utils";
import { StarBackground } from "./StarBackground";

const skillIcons = {
  "HTML/CSS": (
    <svg width="28" height="28" viewBox="0 0 32 32" fill="none"><rect width="32" height="32" rx="6" fill="#E44D26"/><text x="16" y="21" textAnchor="middle" fontSize="15" fill="#fff" fontWeight="bold">&lt;/&gt;</text></svg>
  ),
  "Java": (
    <svg width="28" height="28" viewBox="0 0 32 32" fill="none"><rect width="32" height="32" rx="6" fill="#007396"/><text x="16" y="21" textAnchor="middle" fontSize="15" fill="#fff" fontWeight="bold">J</text></svg>
  ),
  "Springboot": (
    <svg width="28" height="28" viewBox="0 0 32 32" fill="none"><rect width="32" height="32" rx="6" fill="#6DB33F"/><text x="16" y="21" textAnchor="middle" fontSize="15" fill="#fff" fontWeight="bold">S</text></svg>
  ),
  "SQL": (
    <svg width="28" height="28" viewBox="0 0 32 32" fill="none"><rect width="32" height="32" rx="6" fill="#336791"/><text x="16" y="21" textAnchor="middle" fontSize="15" fill="#fff" fontWeight="bold">DB</text></svg>
  ),
  "Git/GitHub": (
    <svg width="28" height="28" viewBox="0 0 32 32" fill="none"><rect width="32" height="32" rx="6" fill="#181717"/><text x="16" y="21" textAnchor="middle" fontSize="15" fill="#fff" fontWeight="bold">Git</text></svg>
  ),
  "Figma": (
    <svg width="28" height="28" viewBox="0 0 32 32" fill="none"><rect width="32" height="32" rx="6" fill="#F24E1E"/><text x="16" y="21" textAnchor="middle" fontSize="15" fill="#fff" fontWeight="bold">F</text></svg>
  ),
  "VS Code": (
    <svg width="28" height="28" viewBox="0 0 32 32" fill="none"><rect width="32" height="32" rx="6" fill="#007ACC"/><text x="16" y="21" textAnchor="middle" fontSize="15" fill="#fff" fontWeight="bold">VS</text></svg>
  ),
  "Canva": (
    <svg width="28" height="28" viewBox="0 0 32 32" fill="none"><rect width="32" height="32" rx="6" fill="#00C4CC"/><text x="16" y="21" textAnchor="middle" fontSize="15" fill="#fff" fontWeight="bold">C</text></svg>
  ),
};

const skills = [
  // Frontend
  { name: "HTML/CSS", level: 70, category: "frontend" },
  { name: "Java", level: 70, category: "frontend" },
  //{ name: "React", level: 70, category: "frontend" },
  
  
  

  // Backend
  //{ name: "Node.js", level: 80, category: "backend" },
  { name: "Springboot", level: 50, category: "backend" },
  
  { name: "SQL", level: 75, category: "backend" },
 

  // Tools
  { name: "Git/GitHub", level: 80, category: "tools" },
  { name: "Figma", level: 70, category: "tools" },
  { name: "VS Code", level: 80, category: "tools" },
  { name: "Canva", level: 50, category: "tools" },
];

const categories = ["all", "frontend", "backend", "tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );
  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30 overflow-hidden">
      <StarBackground />
      <div className="container mx-auto max-w-5xl relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={e => {
                const btn = e.currentTarget;
                const ripple = document.createElement('span');
                const rect = btn.getBoundingClientRect();
                const size = Math.max(rect.width, rect.height);
                ripple.className = 'ripple-effect';
                ripple.style.width = ripple.style.height = size + 'px';
                ripple.style.left = (e.clientX - rect.left - size / 2) + 'px';
                ripple.style.top = (e.clientY - rect.top - size / 2) + 'px';
                btn.appendChild(ripple);
                setTimeout(() => ripple.remove(), 600);
                setActiveCategory(category);
              }}
              className={cn(
                "cosmic-button capitalize text-base ripple",
                activeCategory === category
                  ? "shadow-md scale-105"
                  : "bg-secondary/70 text-foreground hover:bg-primary/20"
              )}
              style={{ minWidth: 110, position: 'relative' }}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="card-hover p-7 rounded-2xl bg-card/90 shadow-md border border-primary/10 flex flex-col justify-between min-h-[140px]"
              style={{ transition: 'box-shadow 0.3s, transform 0.3s' }}
            >
              <div className="card-tilt">
                <div className="flex items-center gap-3 mb-4">
                  <span className="block animate-bounce" style={{ animationDuration: (1.2 + key * 0.1) + 's' }}>{skillIcons[skill.name]}</span>
                  <h3 className="font-semibold text-xl tracking-wide text-primary/90">{skill.name}</h3>
                </div>
                <div className="w-full bg-secondary/40 h-3 rounded-full overflow-hidden shimmer">
                  <div
                    className="bg-primary h-3 rounded-full transition-all duration-700 skill-progress-bar animated-gradient"
                    style={{ width: skill.level + '%', boxShadow: '0 0 8px 1px rgba(139,92,246,0.12)' }}
                  />
                </div>
                <div className="text-right mt-2">
                  <span className="text-sm font-semibold text-primary/70">
                    {skill.level}%
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};