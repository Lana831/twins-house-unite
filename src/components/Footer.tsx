import { Heart, Github, Mail, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t">
      <div className="container px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* 로고 및 소개 */}
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold text-gradient mb-3">트윈스하우스</h3>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              LG 트윈스를 사랑하는 팬들이 모여 경기 분석부터 직관 후기까지 
              다양한 이야기를 나누는 특별한 공간입니다.
            </p>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-primary fill-current" />
              <span>by Twins Fans</span>
            </div>
          </div>

          {/* 커뮤니티 */}
          <div>
            <h4 className="font-semibold mb-3">커뮤니티</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#analysis" className="hover:text-foreground transition-colors">경기 분석방</a></li>
              <li><a href="#review" className="hover:text-foreground transition-colors">직관 후기방</a></li>
              <li><a href="#community" className="hover:text-foreground transition-colors">자유 게시판</a></li>
              <li><a href="#exchange" className="hover:text-foreground transition-colors">사진/굿즈 교환</a></li>
            </ul>
          </div>

          {/* 도움말 */}
          <div>
            <h4 className="font-semibold mb-3">도움말</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#guide" className="hover:text-foreground transition-colors">이용 가이드</a></li>
              <li><a href="#rules" className="hover:text-foreground transition-colors">커뮤니티 규칙</a></li>
              <li><a href="#faq" className="hover:text-foreground transition-colors">자주 묻는 질문</a></li>
              <li><a href="#contact" className="hover:text-foreground transition-colors">문의하기</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground mb-4 md:mb-0">
            © 2024 트윈스하우스. LG 트윈스 팬 커뮤니티.
          </p>
          
          <div className="flex items-center space-x-4">
            <a 
              href="#contact" 
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="이메일 문의"
            >
              <Mail className="h-5 w-5" />
            </a>
            <a 
              href="#discord" 
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="디스코드"
            >
              <MessageCircle className="h-5 w-5" />
            </a>
            <a 
              href="#github" 
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="깃허브"
            >
              <Github className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;