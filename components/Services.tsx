import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CodeIcon, GlobeIcon, SearchIcon, BookOpenIcon } from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Frontend Development",
      description:
        "Crafting beautiful, responsive, and user-friendly interfaces that engage and delight users.",
      icon: <GlobeIcon className="w-10 h-10 mb-4 text-primary" />,
      skills: [
        "React",
        "Vue.js",
        "Next.js",
        "Tailwind CSS",
        "JavaScript",
        "TypeScript",
      ],
      details:
        "From single-page applications to complex web platforms, I bring designs to life with clean, efficient code. My expertise in modern frameworks ensures fast, scalable, and maintainable frontend solutions.",
    },
    {
      title: "Backend Development",
      description:
        "Building robust, scalable server-side applications and APIs to power your web solutions.",
      icon: <CodeIcon className="w-10 h-10 mb-4 text-primary" />,
      skills: [
        "Node.js",
        "Python",
        "Django",
        "Express.js",
        "PostgreSQL",
        "MongoDB",
        "Redis",
        "Kafka",
        "AWS",
        "Supabase",
      ],
      details:
        "I specialize in creating high-performance backends that handle complex business logic, data management, and third-party integrations. My solutions are designed for scalability, security, and efficiency.",
    },
    {
      title: "Search Engine Optimization (SEO)",
      description:
        "Optimizing your web presence to improve visibility and drive organic traffic to your site.",
      icon: <SearchIcon className="w-10 h-10 mb-4 text-primary" />,
      skills: [
        "Keyword Research",
        "On-Page SEO",
        "Technical SEO",
        "Link Building",
        "Content Strategy",
      ],
      details:
        "I employ white-hat SEO techniques to boost your search engine rankings. From technical optimizations to content strategy, I&apos;ll help your website climb the SERP ladder and attract more qualified leads.",
    },
    {
      title: "Web Development Teaching",
      description:
        "Sharing knowledge and empowering aspiring developers through comprehensive training and mentorship.",
      icon: <BookOpenIcon className="w-10 h-10 mb-4 text-primary" />,
      skills: [
        "Curriculum Development",
        "One-on-One Mentoring",
        "Workshop Facilitation",
        "Code Reviews",
      ],
      details:
        "With a passion for education, I offer tailored teaching services for individuals and groups. From beginners to advanced developers, I provide hands-on training, project-based learning, and ongoing support to help you achieve your coding goals.",
    },
  ];

  return (
    <section className="w-full bg-muted ">
      <div className="lg:m-32 px-8 mt-28">
        <div className="flex flex-col items-left lg:items-center mr-12 lg:mr-0 my-10  lg:m-12 justify-left lg:justify-center space-y-4 lg:text-center text-left">
          <h2 className="text-3xl font-bold text-left tracking-tighter sm:text-5xl">
            My Services
          </h2>
          <p className="lg:smax-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-left">
            Comprehensive web solutions tailored to your needs. From frontend to
            backend, SEO to education, I&apos;ve got you covered.
          </p>
        </div>
        <div className="grid gap-6 mr-12 lg:mr-0 lg:m-12 md:grid-cols-2 lg:grid-cols-2">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden transition-all hover:shadow-lg"
            >
              <CardHeader>
                <div className="flex items-center justify-between">
                  {service.icon}
                  <Badge variant="secondary" className="text-sm">
                    {service.skills.length} Skills
                  </Badge>
                </div>
                <CardTitle className="text-2xl font-bold">
                  {service.title}
                </CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{service.details}</p>
                <div className="flex flex-wrap gap-2">
                  {service.skills.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="outline">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 transition-opacity group-hover:opacity-100">
                <span className="text-white text-lg font-semibold">
                  Learn More
                </span>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
