import { Card, CardContent } from "@/components/ui/card";

export function SiteFooter() {
  return (
    <Card className="w-full border-0 bg-transparent shadow-none">
      <CardContent className="py-4 px-8 relative">
        <div className="flex items-center justify-between">
          <div className="text-white/92 text-sm">
            WADDLEJOBS 2025 · Jobs for You
          </div>
          <div className="text-white/92 text-sm absolute left-1/2 transform -translate-x-1/2">
            Created for makers chasing meaningful work.
          </div>
          <div className="text-white/92 text-sm">
            All rights Reserved
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
