import { TrendingUp, Users, MessageSquare, Camera } from "lucide-react";

const CommunityStats = () => {
  const stats = [
    {
      icon: Users,
      title: "활성 팬",
      value: "2,847",
      description: "명",
      color: "text-blue-600"
    },
    {
      icon: MessageSquare,
      title: "이번 주 게시글",
      value: "156",
      description: "개",
      color: "text-green-600"
    },
    {
      icon: TrendingUp,
      title: "경기 분석",
      value: "89",
      description: "건",
      color: "text-primary"
    },
    {
      icon: Camera,
      title: "직관 후기",
      value: "234",
      description: "개",
      color: "text-purple-600"
    }
  ];

  return (
    <section className="py-16 bg-muted/50">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold mb-4">함께하는 트윈스 팬들</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            열정적인 팬들이 만들어가는 활발한 커뮤니티에서 소통하세요
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="card-elegant p-6 text-center">
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-background mb-4 ${stat.color}`}>
                <stat.icon className="h-6 w-6" />
              </div>
              <div className="text-2xl font-bold mb-1">{stat.value}</div>
              <div className="text-sm text-muted-foreground mb-1">{stat.description}</div>
              <div className="text-sm font-medium">{stat.title}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommunityStats;