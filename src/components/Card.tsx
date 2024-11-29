import { cn } from "@/utils/tailwind";
import Link from "next/link";

interface Props {
  title: string;
  price: string;
  featuresTitle: string;
  features: string[];
  buttonText: string;
  buttonUrl: string;

  isPopular?: boolean;
  dark?: boolean;
}

export function Card(props: Props) {
  return (
    <section
      className={cn(
        "w-[400px] rounded-2xl border border-zinc-400 bg-white px-7 py-8",
        {
          "bg-gray-800": props.dark,
        },
      )}
    >
      <div className="flex flex-row items-center gap-3">
        <h1
          className={cn("text-2xl font-semibold text-black", {
            "text-white": props.dark,
          })}
        >
          {props.title}
        </h1>
        {props.isPopular && (
          <span className="flex h-6 items-center justify-center rounded-full bg-orange-500 px-2 text-sm text-white">
            🔥 Popular
          </span>
        )}
      </div>
      <div className="my-10 flex flex-col gap-2">
        <div
          className={cn("text-5xl font-medium", {
            "text-white": props.dark,
          })}
        >
          {props.price}
        </div>
        <div
          className={cn("font-medium text-zinc-500", {
            "text-gray-400": props.dark,
          })}
        >
          Per user/month, billed annually
        </div>
      </div>
      <div>
        <div
          className={cn("mb-3 text-lg font-bold text-black", {
            "text-white": props.dark,
          })}
        >
          {props.featuresTitle}
        </div>
        <ul>
          {props.features.map((feature) => (
            <li
              key={feature}
              className={cn(
                "mb-3 flex flex-row items-center gap-2 text-gray-500",
                {
                  "text-white": props.dark,
                },
              )}
            >
              <div
                className={cn(
                  "flex size-6 items-center justify-center rounded-xl bg-gray-100 text-gray-400",
                  {
                    "bg-gray-700 text-white": props.dark,
                  },
                )}
              >
                ✓
              </div>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-10">
        <Link
          href="/profile"
          className={cn(
            "flex h-12 w-full items-center justify-center rounded-xl border border-gray-400 font-bold text-gray-700",
            {
              "text-white": props.dark,
            },
            "transition-all hover:scale-105 hover:bg-gray-100",
            {
              "hover:bg-gray-950": props.dark,
            },
          )}
        >
          {props.buttonText}
        </Link>
      </div>
    </section>
  );
}
