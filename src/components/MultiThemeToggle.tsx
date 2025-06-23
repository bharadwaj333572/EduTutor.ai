
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Palette } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const themes = [
  { name: 'Blue Ocean', primary: 'from-blue-500 to-cyan-500', bg: 'from-blue-50 to-cyan-50' },
  { name: 'Purple Sunset', primary: 'from-purple-500 to-pink-500', bg: 'from-purple-50 to-pink-50' },
  { name: 'Green Forest', primary: 'from-green-500 to-emerald-500', bg: 'from-green-50 to-emerald-50' },
  { name: 'Orange Fire', primary: 'from-orange-500 to-red-500', bg: 'from-orange-50 to-red-50' },
  { name: 'Dark Mode', primary: 'from-gray-800 to-gray-900', bg: 'from-gray-900 to-black' },
  { name: 'Light Mode', primary: 'from-gray-100 to-gray-200', bg: 'from-gray-50 to-white' }
];

const MultiThemeToggle = () => {
  const [currentTheme, setCurrentTheme] = useState(themes[0]);

  const applyTheme = (theme: typeof themes[0]) => {
    setCurrentTheme(theme);
    // Apply theme to document root
    const root = document.documentElement;
    root.style.setProperty('--theme-primary', theme.primary);
    root.style.setProperty('--theme-bg', theme.bg);
    
    // Update CSS variables for the theme
    const style = document.createElement('style');
    style.textContent = `
      .theme-gradient { background: linear-gradient(135deg, ${theme.primary}) !important; }
      .theme-bg { background: linear-gradient(135deg, ${theme.bg}) !important; }
    `;
    document.head.appendChild(style);
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" size="icon">
          <Palette className="h-4 w-4" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <Card>
          <CardContent className="p-4">
            <h3 className="font-semibold mb-3">Choose Theme</h3>
            <div className="grid grid-cols-2 gap-3">
              {themes.map((theme, index) => (
                <Button
                  key={index}
                  variant={currentTheme.name === theme.name ? "default" : "outline"}
                  className="h-auto p-3 flex flex-col items-center space-y-2"
                  onClick={() => applyTheme(theme)}
                >
                  <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${theme.primary}`}></div>
                  <span className="text-xs">{theme.name}</span>
                </Button>
              ))}
            </div>
            <p className="text-xs text-gray-500 mt-3 text-center">
              Current: {currentTheme.name}
            </p>
          </CardContent>
        </Card>
      </PopoverContent>
    </Popover>
  );
};

export default MultiThemeToggle;
