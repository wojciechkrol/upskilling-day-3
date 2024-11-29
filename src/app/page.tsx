import { Card } from "@/components/Card";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-row items-center justify-center bg-white">
      <div className="flex flex-col gap-10 xl:flex-row">
        <Card
          title="Free"
          price="$0"
          featuresTitle="For your hobby projects"
          features={[
            "Free e-mail alerts",
            "3-minute checks",
            "Automatic data enrichment",
          ]}
          buttonText="Get started for free"
          buttonUrl="#"
        />
        <Card
          title="Pro"
          price="$85"
          isPopular
          featuresTitle="Great for small businesses"
          features={[
            "Unlimited phone calls",
            "30 second checks",
            "Single user account",
          ]}
          buttonText="Get started with Pro"
          buttonUrl="#"
        />
        <Card
          title="Enterprise"
          price="Custom"
          dark
          featuresTitle="Great for teams"
          features={["Everything in Pro", "Up to 50 members", "100 monitors"]}
          buttonText="Get started with Enterprise"
          buttonUrl="#"
        />
      </div>
    </div>
  );
}
