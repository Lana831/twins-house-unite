import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-twins.jpg";

const Hero = () => {
  return (
    <section 
      className="relative h-[500px] bg-cover bg-center bg-no-repeat flex items-center justify-center"
      style={{ 
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${heroImage})` 
      }}
    >
      <div className="container text-center text-white px-4">
        <h2 className="text-4xl md:text-6xl font-bold mb-4">
          트윈스 팬들의 특별한 공간
        </h2>
        <p className="text-lg md:text-xl mb-8 text-white/90 max-w-2xl mx-auto">
          경기 분석부터 직관 후기까지, LG 트윈스를 사랑하는 팬들이 모이는 곳
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="btn-primary text-lg px-8">
            커뮤니티 참여하기
          </Button>
          <Button size="lg" variant="outline" className="bg-white/20 border-white text-white hover:bg-white/30">
            둘러보기
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;