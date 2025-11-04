import { Card, CardContent } from "@/components/ui/card";

export function MobileStatsAndTestimonials() {
  return (
    <div className="lg:hidden mt-12 px-4 sm:px-6 lg:px-8 space-y-8">
      {/* Stats Section for Mobile */}
      <Card className="bg-gradient-to-b from-black/40 to-black/30 backdrop-blur-sm border-0 shadow-lg">
        <CardContent className="p-6">
          <h3 className="text-white text-lg font-semibold mb-6 text-center">Our Impact</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-white text-2xl sm:text-3xl font-bold mb-2">10,000+</div>
              <div className="text-white/80 text-sm">professionals exploring new roles weekly</div>
            </div>
            <div className="text-center">
              <div className="text-white text-2xl sm:text-3xl font-bold mb-2">300+</div>
              <div className="text-white/80 text-sm">startups hiring talent</div>
            </div>
            <div className="text-center">
              <div className="text-white text-2xl sm:text-3xl font-bold mb-2">92%</div>
              <div className="text-white/80 text-sm">report an easier job-search experience</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Testimonial Section for Mobile */}
      <Card className="bg-gradient-to-b from-black/40 to-black/30 backdrop-blur-sm border-0 shadow-lg">
        <CardContent className="p-6">
          <div className="text-white text-base sm:text-lg text-center italic">
            "We hired our first backend engineer in under 48 hours. The talent here is skilled, responsive, and passionate."
          </div>
          <div className="mt-4 text-white/90 text-sm sm:text-base text-center">— Hiring Manager</div>
        </CardContent>
      </Card>
    </div>
  );
}
