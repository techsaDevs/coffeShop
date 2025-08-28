import Link from "next/link";
import React from "react";
import { ArrowLeftSVG } from "@/Components/SVGs";

// حالت‌های مختلف رو به صورت union تعریف می‌کنیم:
type SectionHeaderProps =
  | {
    mode: "title-link";
    title: string;
    link: string;
    linkTitle?: string;
  }
  | {
    mode: "title-caption-link";
    title: string;
    caption: string;
    link: string;
    linkTitle?: string;
  }
  | {
    mode: "title-caption-children";
    title: string;
    caption: string;
    children: React.ReactNode;
  }
  | {
    mode: "title-children";
    title: string;
    children: React.ReactNode;
  };

const SectionHeader = (props: SectionHeaderProps) => {
  switch (props.mode) {
    case "title-link":
      return (
        <div className="flexBetween mb-6">
          <h3 className="font-morabba-medium text-4xl">{props.title}</h3>
          <div className="text-orange-300 flex items-center gap-1 duration-500 hover:gap-2">
            <Link className="font-dana-medium" href={props.link}>{props.linkTitle ?? "مشاهده بیشتر"}</Link>
            <ArrowLeftSVG width={16} height={16} />
          </div>
        </div>
      );

    case "title-caption-link":
      return (
        <div className="mb-6">
          <h3 className="font-morabba-medium text-4xl">{props.title}</h3>
          <div className="flexBetween mt-2">
            <p className="font-morabba-medium text-xl text-gray-500">{props.caption}</p>
            <div className="text-orange-300 flex items-center gap-1 duration-500 hover:gap-2">
              <Link className="font-dana-medium" href={props.link}>{props.linkTitle ?? "مشاهده بیشتر"}</Link>
              <ArrowLeftSVG width={16} height={16} />
            </div>
          </div>
        </div>
      );

    case "title-caption-children":
      return (
        <div className="mb-6">
          <h3 className="font-morabba-medium text-4xl">{props.title}</h3>
          <div className="flexBetween mt-2">
            <p className="font-morabba-medium text-xl text-gray-500">{props.caption}</p>
            <div className="flex items-center gap-2">{props.children}</div>
          </div>
        </div>
      );

    case "title-children":
      return (
        <div className="mb-6">
          <h3 className="font-morabba-medium text-4xl">{props.title}</h3>
          <div className="mt-3">{props.children}</div>
        </div>
      );

    default:
      return null;
  }
};

export default SectionHeader;
