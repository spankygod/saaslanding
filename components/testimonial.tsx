import { Card, CardContent } from "@/components/ui/card";

export function Testimonial() {
  return (
    <Card className="hidden md:block absolute left-32 bottom-20 bg-gradient-to-b from-black/60 to-black/50 backdrop-blur-md border-0 text-white p-5 max-w-90 shadow-2xl">
      <CardContent className="p-0">
        <div className="text-white">
          "We hired our first backend engineer in under 48 hours. The talent here is skilled, responsive, and passionate."
        </div>
        <div className="mt-2 text-white/90 text-xs text-right">— Hiring Manager</div>
      </CardContent>
    </Card>
  );
}
