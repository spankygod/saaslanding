import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

export function HeroSection() {
  return (
    <Card className="bg-transparent border-0 shadow-none max-w-4xl mx-auto mt-4">
      <CardContent className="p-0 text-center">
        <div className="uppercase tracking-widest text-white/75 mb-3" style={{ fontSize: '14px' }}>The space between skills and opportunity</div>
        <h1 className="leading-tight mb-4 text-white" style={{ fontFamily: 'Playfair Display, serif', fontSize: '48px' }}>Where right job finds you.</h1>
        <p className="text-white/88 max-w-prose mx-auto mb-6 text-center" style={{ fontSize: '20px' }}>
          A career platform built for creators, developers, and dreamers.<br />
          Discover roles that match your talent, your pace, and your future.<br />
          Explore opportunities without the noise.
        </p>

        <div className="flex justify-center gap-4 mt-5">
          <Link href="https://app.waddlejob.xyz" target="_blank" rel="noopener noreferrer">
            <Button className="bg-gradient-to-r from-violet-500 to-violet-400 text-white hover:from-violet-600 hover:to-violet-500 shadow-lg hover:shadow-xl transition-all duration-300 rounded-full" style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', fontWeight: '400', width: '157px', height: '48px' }}>Launch App</Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
