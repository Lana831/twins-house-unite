import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BarChart3, Camera, MessageSquare, Package, ChevronRight, Clock, Eye, Heart } from "lucide-react";

const CommunityBoards = () => {
  const boards = [
    {
      icon: BarChart3,
      title: "경기 분석방",
      description: "팬들이 직접 작성하는 경기 분석과 인사이트",
      posts: 89,
      color: "bg-blue-50 text-blue-600",
      recentPosts: [
        { title: "8월 17일 NC전 투수 교체 타이밍 분석", time: "2시간 전", views: 234, likes: 18 },
        { title: "홍창기 최근 5경기 타격 폼 변화", time: "5시간 전", views: 156, likes: 12 }
      ]
    },
    {
      icon: Camera,
      title: "직관 후기방",
      description: "생생한 현장 이야기와 사진, 응원 영상",
      posts: 234,
      color: "bg-green-50 text-green-600",
      recentPosts: [
        { title: "8/16 잠실 직관 후기 + 선수들 사인볼!", time: "1시간 전", views: 445, likes: 32 },
        { title: "외야석에서 본 오지환 홈런 순간", time: "3시간 전", views: 378, likes: 28 }
      ]
    },
    {
      icon: MessageSquare,
      title: "자유 게시판",
      description: "팀 관련 이야기, 응원, 일상 대화",
      posts: 156,
      color: "bg-primary/10 text-primary",
      recentPosts: [
        { title: "내년 시즌 보강 예상 포지션은?", time: "30분 전", views: 189, likes: 15 },
        { title: "트윈스 역사상 최고의 순간 BEST 5", time: "2시간 전", views: 267, likes: 22 }
      ]
    },
    {
      icon: Package,
      title: "사진/굿즈 교환방",
      description: "굿즈 거래, 사진 공유, 나눔 이벤트",
      posts: 78,
      color: "bg-purple-50 text-purple-600",
      recentPosts: [
        { title: "[나눔] 유니폼 키링 10개 나눠드려요", time: "4시간 전", views: 512, likes: 45 },
        { title: "[교환] 김현수 포토카드 ↔ 오지환 포토카드", time: "6시간 전", views: 123, likes: 8 }
      ]
    }
  ];

  return (
    <section className="py-16">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold mb-4">커뮤니티 게시판</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            다양한 주제로 트윈스 팬들과 소통하고 정보를 나누세요
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {boards.map((board, index) => (
            <Card key={index} className="card-elegant hover:scale-[1.02] transition-transform duration-300">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className={`p-2 rounded-lg ${board.color}`}>
                      <board.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{board.title}</CardTitle>
                      <Badge variant="secondary" className="mt-1">
                        {board.posts}개의 게시글
                      </Badge>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm">
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                  {board.description}
                </p>
              </CardHeader>
              
              <CardContent className="space-y-3">
                {board.recentPosts.map((post, postIndex) => (
                  <div key={postIndex} className="p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors cursor-pointer">
                    <h4 className="font-medium text-sm mb-2 line-clamp-1">{post.title}</h4>
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <div className="flex items-center space-x-3">
                        <span className="flex items-center space-x-1">
                          <Clock className="h-3 w-3" />
                          <span>{post.time}</span>
                        </span>
                        <span className="flex items-center space-x-1">
                          <Eye className="h-3 w-3" />
                          <span>{post.views}</span>
                        </span>
                        <span className="flex items-center space-x-1">
                          <Heart className="h-3 w-3" />
                          <span>{post.likes}</span>
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
                
                <Button variant="outline" className="w-full mt-4">
                  전체 게시글 보기
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommunityBoards;