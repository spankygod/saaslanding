import { Card, CardContent } from "@/components/ui/card";

export function SiteFooter() {
  return (
    <Card className="w-full border-0 bg-transparent shadow-none">
      <CardContent className="py-4 px-4 sm:px-6 lg:px-8 relative">
        {/* Desktop Layout */}
        <div className="hidden sm:flex items-center justify-between relative">
          <div className="flex items-center">
            <div className="text-white/92 text-sm">
              WADDLEJOBS 2025 · Jobs for You
            </div>
          </div>
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <div className="text-white/92 text-sm">
              Created for makers chasing meaningful work.
            </div>
          </div>
          <div className="flex items-center">
            <div className="text-white/92 text-sm">
              All rights Reserved
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="sm:hidden flex flex-col items-center text-center space-y-2">
          <div className="text-white/92 text-xs">
            WADDLEJOBS 2025 · Jobs for You
          </div>
          <div className="text-white/92 text-xs">
            Created for makers chasing meaningful work.
          </div>
          <div className="text-white/92 text-xs">
            All rights Reserved
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
